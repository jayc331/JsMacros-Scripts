
import Config from '../libs/Config';
import { Key } from '../libs/KeyManager';
import { CommandManager } from '../libs/CommandBuilderWrapper';

interface AntiAFKConfig {
    enabled: boolean;
}

export class AntiAFK {
    private readonly configPath = './config/jayc331-antiafk.json';
    private readonly scriptId = 'antiafk';
    private readonly defaultConfig: AntiAFKConfig = {
        enabled: true,
    };

    private config: AntiAFKConfig;
    private readonly triggerSlot = 15;
    private isActive = false;
    private lastTitleTime = 0;

    private readonly keys = {
        jump: new Key('key.keyboard.space'),
        sneak: new Key('key.keyboard.left.shift'),
        attack: new Key('key.mouse.left'),
    };
    
    private onActivityChange?: (active: boolean) => void;

    constructor(onActivityChange?: (active: boolean) => void) {
        this.onActivityChange = onActivityChange;
        this.config = Config.readConfig(this.configPath, this.defaultConfig, this.scriptId);
        this.registerListeners();
        this.registerCommands();
    }

    private registerListeners() {
        JsMacros.on('OpenScreen', JavaWrapper.methodToJava((event) => this.onOpenScreen(event)));
        JsMacros.on('Tick', JavaWrapper.methodToJava((event) => this.onTick(event)));
        this.listenForTitle();
    }

    private listenForTitle() {
        JsMacros.once('Title', JavaWrapper.methodToJava((event) => {
            new (Packages.java.lang.Thread as any)(() => {
                this.onTitle(event);
                this.listenForTitle();
            }).start();
        }));
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
        }
    }

    private saveConfig() {
        Config.writeConfig(this.configPath, this.config, this.scriptId);
    }

    private onOpenScreen(event: Events.OpenScreen) {
        if (!this.config.enabled) return;

        // We could add a check for specific GUI title if known, but for now rely on slot click
        // Use a small delay to ensure the GUI is fully ready and item is present
        const screen = event.screen; 
        // Note: strict typings might be tricky with screen, check actual API if needed.
        // But usually we can access inventory from player context once screen is open.

        // We wait a bit then click
        Client.waitTick(5);
        
        // Check if screen is still open (user might have closed it quickly)
        if (!Hud.getOpenScreen()) return;

        // Check player to avoid NPE
        if (!Player.getPlayer()) return;
        
        const inv = Player.openInventory();
        if (!inv) return;
        
        // Filter for "Activity Check" GUI
        if (!inv.getRawContainer().getTitleText().includes('Activity Check')) return;

        // We assume if the GUI opens and we are enabled, we try to start the check.
        // In a real scenario, we should probably check the container name or item name.
        // But based on prompt: "A gui is opened containing an item... click to begin"
        
        // Double check if slot is valid for this inventory?
        // inv.getSlot(this.config.triggerSlot) might throw or return null?
        
        try {
            inv.click(this.triggerSlot);
            this.lastTitleTime = Date.now(); // Set time before activating to avoid instant timeout
            this.setActive(true);
            Chat.log('§aAntiAFK: §7Clicking start slot...');
        } catch (e) {
            Chat.log('§cAntiAFK Error clicking slot: ' + e);
        }
    }

    private onTitle(event: Events.Title) {
        if (!this.config.enabled) return;
        
        if (!event.message) return;
        const text = event.message.getString().trim();
        const lowerText = text.toLowerCase();
        
        // If we receive a title, and we are (or should be) active, update time
        if (this.isActive || lowerText.includes('look') || lowerText.includes('jump') || lowerText.includes('sneak') || lowerText.includes('punch')) {
             this.lastTitleTime = Date.now();
             if (!this.isActive) this.setActive(true);
        }

        // Logging for debug
        // Chat.log('§7Title: ' + text);

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

        cmd.literal('toggle')
            .executes(() => {
                this.config.enabled = !this.config.enabled;
                this.saveConfig();
                Chat.log(`§7AntiAFK is now ${this.config.enabled ? '§aENABLED' : '§cDISABLED'}`);
            });

        cmd.register();
    }
}
