import Config from '../libs/Config';
import { Key } from '../libs/KeyManager';
import { CommandManager } from '../libs/CommandBuilderWrapper';

interface AntiAFKConfig {
    enabled: boolean;
    triggerSlot: number;
}

export class AntiAFK {
    private readonly configPath = './config/jayc331-antiafk.json';
    private readonly scriptId = 'antiafk';
    private readonly defaultConfig: AntiAFKConfig = {
        enabled: true,
        triggerSlot: 15,
    };

    private config: AntiAFKConfig;
    private isActive = false;
    private lastTitleTime = 0;

    private readonly keys = {
        jump: new Key('key.keyboard.space'),
        sneak: new Key('key.keyboard.left.shift'),
        attack: new Key('key.mouse.left'),
    };

    private onActivityChange?: (active: boolean) => void;

    // State management for tick-based logic
    private processingActionUntil = 0;
    private unsneakAt = 0;
    private checkScreenAt = 0;

    constructor(onActivityChange?: (active: boolean) => void) {
        this.onActivityChange = onActivityChange;
        this.config = Config.readConfig(this.configPath, this.defaultConfig, this.scriptId);
        this.registerListeners();
        this.registerCommands();
    }

    private registerListeners() {
        JsMacros.on(
            'OpenScreen',
            JavaWrapper.methodToJava((event) => this.onOpenScreen(event as Events.OpenScreen))
        );
        JsMacros.on(
            'Tick',
            JavaWrapper.methodToJava((event) => this.onTick(event as Events.Tick))
        );
        JsMacros.on(
            'Title',
            JavaWrapper.methodToJava((event) => this.onTitleEvent(event))
        );
    }

    private onTitleEvent(event: any) {
        if (!this.config.enabled) return;

        // If we are already busy processing a command (waiting for delay), ignore spam
        if (this.processingActionUntil > Date.now()) return;

        const text = event.message ? event.message.getString() : '';
        if (!text) return;

        const lowerText = text.toLowerCase();

        // If we are NOT active, we only listen for triggers.
        // If we ARE active, we listen for everything (but only one at a time due to flag).
        if (!this.isActive && !this.isRelevantTitle(lowerText)) return;

        this.processAction(text);
    }

    private isRelevantTitle(lowerText: string): boolean {
        return (
            lowerText.includes('look') ||
            lowerText.includes('jump') ||
            lowerText.includes('sneak') ||
            lowerText.includes('punch') ||
            lowerText.includes('attack')
        );
    }

    private processAction(text: string) {
        const lowerText = text.toLowerCase();

        // Update activity timestamp
        this.lastTitleTime = Date.now();
        if (!this.isActive) this.setActive(true);

        const player = Player.getPlayer();
        if (!player) return;

        let matched = false;
        let actionDuration = 500; // Default 500ms delay (10 ticks)

        if (lowerText.includes('look left')) {
            Chat.log('§aAntiAFK: §7Looking LEFT');
            const yaw = player.getYaw();
            player.lookAt(yaw - 90, player.getPitch());
            matched = true;
        } else if (lowerText.includes('look right')) {
            Chat.log('§aAntiAFK: §7Looking RIGHT');
            const yaw = player.getYaw();
            player.lookAt(yaw + 90, player.getPitch());
            matched = true;
        } else if (lowerText.includes('look down')) {
            Chat.log('§aAntiAFK: §7Looking DOWN');
            player.lookAt(player.getYaw(), 90);
            matched = true;
        } else if (lowerText.includes('look up')) {
            Chat.log('§aAntiAFK: §7Looking UP');
            player.lookAt(player.getYaw(), -90);
            matched = true;
        } else if (lowerText.includes('jump')) {
            Chat.log('§aAntiAFK: §7Jumping');
            this.keys.jump.click();
            matched = true;
        } else if (lowerText.includes('sneak')) {
            Chat.log('§aAntiAFK: §7Sneaking');
            this.keys.sneak.set(true);
            this.unsneakAt = Date.now() + 500; // Schedule unsneak
            matched = true;
        } else if (lowerText.includes('punch') || lowerText.includes('attack')) {
            Chat.log('§aAntiAFK: §7Punching');
            this.keys.attack.click();
            matched = true;
        }

        if (matched) {
            this.processingActionUntil = Date.now() + actionDuration;
        }
    }

    private setActive(active: boolean) {
        if (this.isActive === active) return;
        this.isActive = active;
        if (this.onActivityChange) {
            this.onActivityChange(active);
        }
        if (!active) {
            Chat.log('§aAntiAFK: §7Check finished/timed out.');
        }
    }

    private onTick(event: Events.Tick) {
        if (this.isActive) {
            // 10 seconds timeout
            if (Date.now() - this.lastTitleTime > 10000) {
                this.setActive(false);
                this.processingActionUntil = 0;
            }
        }

        // Handle Delayed Unsneak
        if (this.unsneakAt > 0 && Date.now() > this.unsneakAt) {
            this.keys.sneak.set(false);
            this.unsneakAt = 0;
        }

        // Handle Delayed Screen Check
        if (this.checkScreenAt > 0 && Date.now() > this.checkScreenAt) {
            this.handleOpenScreenLogic();
            this.checkScreenAt = 0;
        }
    }

    private saveConfig() {
        Config.writeConfig(this.configPath, this.config, this.scriptId);
    }

    private onOpenScreen(event: Events.OpenScreen) {
        if (!this.config.enabled) return;
        // Schedule check for 250ms (5 ticks) later
        this.checkScreenAt = Date.now() + 250;
    }

    private handleOpenScreenLogic() {
        if (!Hud.getOpenScreen()) return;
        if (!Player.getPlayer()) return;

        const inv = Player.openInventory();
        if (!inv) return;

        const title = inv.getRawContainer().getTitleText();
        if (!title || !title.toString().includes('Activity Check')) return;

        try {
            inv.click(this.config.triggerSlot);
            this.lastTitleTime = Date.now();
            this.setActive(true);
            Chat.log('§aAntiAFK: §7Clicking start slot...');
        } catch (e) {
            Chat.log('§cAntiAFK Error clicking slot: ' + e);
        }
    }

    private registerCommands() {
        const cmd = CommandManager.create('antiafk');

        cmd.literal('toggle').executes(() => {
            this.config.enabled = !this.config.enabled;
            this.saveConfig();
            Chat.log(`§7AntiAFK is now ${this.config.enabled ? '§aENABLED' : '§cDISABLED'}`);
        });

        cmd.literal('set')
            .literal('slot')
            .argument('slot', 'int')
            .executes((ctx) => {
                const slot = ctx.getArg('slot');
                this.config.triggerSlot = slot;
                this.saveConfig();
                Chat.log(`§7AntiAFK trigger slot set to §a${slot}`);
            });

        cmd.register();
    }
}
