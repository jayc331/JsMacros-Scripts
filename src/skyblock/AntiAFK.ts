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

    // Queue system
    private actionQueue: string[] = [];
    private isProcessingQueue = false;
    private processingThread: any = null; // Java Thread

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
        // event.message is an IChatComponent, check docs if getString() is correct.
        // Usually getString() or getUnformattedText() work.
        const text = event.message ? event.message.getString() : '';
        if (!text) return;

        const lowerText = text.toLowerCase();
        // If we are already active, we process everything. If not, we only process triggers.
        if (!this.isActive && !this.isRelevantTitle(lowerText)) return;

        this.actionQueue.push(text);
        this.processQueue();
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

    private processQueue() {
        if (this.isProcessingQueue) return;
        if (this.actionQueue.length === 0) return;

        this.isProcessingQueue = true;

        this.processingThread = new (Packages.java.lang.Thread as any)(() => {
            try {
                while (this.actionQueue.length > 0) {
                    const text = this.actionQueue.shift();
                    if (text) this.onTitle(text);
                    // Small delay between actions to prevent overlapping inputs
                    Client.waitTick(2);
                }
            } catch (e) {
                Chat.log('§cAntiAFK Thread Error: ' + e);
            } finally {
                this.isProcessingQueue = false;
                this.processingThread = null;
            }
        });
        this.processingThread.start();
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
        if (!this.isActive) return;
        // 10 seconds timeout
        if (Date.now() - this.lastTitleTime > 10000) {
            this.setActive(false);
            this.actionQueue = []; // Clear queue on timeout
        }
    }

    private saveConfig() {
        Config.writeConfig(this.configPath, this.config, this.scriptId);
    }

    private onOpenScreen(event: Events.OpenScreen) {
        if (!this.config.enabled) return;

        // Run logic in a thread because we use waitTick/sleep
        new (Packages.java.lang.Thread as any)(() => {
            try {
                this.handleOpenScreenLogic(event);
            } catch (e) {
                Chat.log('§cAntiAFK Screen Error: ' + e);
            }
        }).start();
    }

    private handleOpenScreenLogic(event: Events.OpenScreen) {
        // Wait a bit for GUI to populate
        Client.waitTick(5);

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

    private onTitle(text: string) {
        const textStr = text.trim();
        const lowerText = textStr.toLowerCase();

        // Update activity timestamp
        this.lastTitleTime = Date.now();
        if (!this.isActive) this.setActive(true);

        const player = Player.getPlayer();
        if (!player) return;

        let matched = false;

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
            Client.waitTick(10);
            this.keys.sneak.set(false);
            matched = true;
        } else if (lowerText.includes('punch') || lowerText.includes('attack')) {
            Chat.log('§aAntiAFK: §7Punching');
            this.keys.attack.click();
            matched = true;
        }

        if (matched) {
            Client.waitTick(10);
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
