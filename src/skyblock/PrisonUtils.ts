import Config from '../libs/Config';
import { CommandManager } from '../libs/CommandBuilderWrapper';
import { BaritoneAPI } from '../libs/BaritoneAPIProvider';
import { Key } from '../libs/KeyManager';

enum SellState {
    IDLE,
    WAIT_FOR_SCREEN,
    CLICK_49,
    WAIT_AFTER_49,
    CLICK_12,
    WAIT_AFTER_12,
    CLOSE,
}

interface PrisonUtilsConfig {
    enabled: boolean;
    delaySeconds: number;
}

export class PrisonUtils {
    private readonly configPath = './config/jayc331-config.json';
    private readonly scriptId = 'prisonUtils';
    private readonly defaultConfig: PrisonUtilsConfig = {
        enabled: false,
        delaySeconds: 120,
    };

    private config: PrisonUtilsConfig;
    private state: SellState = SellState.IDLE;
    private stateTickCounter = 0;
    private lastSellTime = 0;

    private readonly lmb = new Key('key.mouse.left');
    private builderProcess: any;

    private isScreenOpen = false;
    private resumeAt = 0;
    private resumePending = false;

    constructor() {
        this.config = Config.readConfig(this.configPath, this.defaultConfig, this.scriptId);
        // Get the builder process safely
        try {
            const provider = BaritoneAPI.getProvider();
            const primary = provider.getPrimaryBaritone();
            this.builderProcess = primary.getBuilderProcess();
        } catch (e) {
            Chat.log('§cPrisonUtils: Could not load Baritone BuilderProcess.');
        }

        this.registerListeners();
        this.registerCommands();
    }

    private registerListeners() {
        JsMacros.on(
            'Tick',
            JavaWrapper.methodToJava(() => this.onTick())
        );
        JsMacros.on(
            'OpenScreen',
            JavaWrapper.methodToJava((event) => this.onOpenScreen(event))
        );
    }

    private onOpenScreen(event: any) {
        if (!this.config.enabled) return;
        
        // If a screen opens, pause baritone and release mouse
        if (this.builderProcess && this.builderProcess.isActive()) {
            this.builderProcess.pause();
            this.lmb.set(false);
        }
        
        this.isScreenOpen = true;
        this.resumePending = false; // Cancel any pending resume
    }

    private onTick() {
        if (!this.config.enabled) {
            // Ensure key is released if disabled
            if (this.lmb.pressed) this.lmb.set(false);
            return;
        }

        // Allow input even if "paused" (reflection hack from original script)
        try {
            const mc = Client.getMinecraft();
            const field = Reflection.getDeclaredField(mc.getClass(), 'field_1695');
            field.setAccessible(true);
            field.set(mc, true);
        } catch (e) {
            // Ignore if field doesn't exist (version diff)
        }

        const currentScreen = Hud.getOpenScreen();

        // Detect Screen Close
        if (this.isScreenOpen && !currentScreen) {
            this.isScreenOpen = false;
            // Screen just closed. Schedule resume.
            // Original script waits 20 ticks (approx 1000ms)
            this.resumeAt = Date.now() + 500;
            this.resumePending = true;
        }

        // Handle Resume
        if (this.resumePending && Date.now() > this.resumeAt) {
            this.resumePending = false;
            if (this.builderProcess) {
                this.builderProcess.resume();
                if (this.builderProcess.isActive()) {
                    this.lmb.set(true);
                }
            }
        }

        // Periodic Sell / Mining Logic
        if (this.builderProcess && this.builderProcess.isActive()) {
            // If not in a menu, hold LMB to mine (if active)
            if (!currentScreen && !this.resumePending) {
                 this.lmb.set(true);
            }

            // Check for Auto Sell
            if (this.state === SellState.IDLE && !currentScreen) {
                const now = Date.now();
                if (now - this.lastSellTime > this.config.delaySeconds * 1000) {
                     this.startSellSequence();
                }
            }
        }

        // Handle Sell State Machine
        if (this.state !== SellState.IDLE) {
            this.handleSellState(currentScreen);
        }
    }

    private startSellSequence() {
        Chat.log('§aPrisonUtils: §7Selling...');
        Chat.say('/sell');
        this.state = SellState.WAIT_FOR_SCREEN;
        this.stateTickCounter = 0;
        this.lastSellTime = Date.now();
    }

    private handleSellState(currentScreen: any) {
        this.stateTickCounter++;
        const TICK_DELAY = 10; // Original used 10 ticks ~ 500ms

        switch (this.state) {
            case SellState.WAIT_FOR_SCREEN:
                if (currentScreen) {
                    this.state = SellState.CLICK_49;
                    this.stateTickCounter = 0;
                } else if (this.stateTickCounter > 40) { // 2 seconds timeout
                    this.state = SellState.IDLE; // Failed to open
                }
                break;

            case SellState.CLICK_49:
                 if (this.stateTickCounter >= TICK_DELAY) {
                     this.clickSlot(49);
                     this.state = SellState.WAIT_AFTER_49;
                     this.stateTickCounter = 0;
                 }
                 break;

            case SellState.WAIT_AFTER_49:
                 if (this.stateTickCounter >= TICK_DELAY) {
                     this.state = SellState.CLICK_12;
                     this.stateTickCounter = 0;
                 }
                 break;

            case SellState.CLICK_12:
                 if (this.stateTickCounter >= 0) { // No extra delay needed? Original: wait 10 ticks BEFORE clicking 12 (handled by WAIT_AFTER_49)
                     this.clickSlot(12);
                     this.state = SellState.WAIT_AFTER_12;
                     this.stateTickCounter = 0;
                 }
                 break;

            case SellState.WAIT_AFTER_12:
                 if (this.stateTickCounter >= TICK_DELAY) {
                     this.state = SellState.CLOSE;
                 }
                 break;

            case SellState.CLOSE:
                 if (currentScreen) {
                     const inv = Player.openInventory();
                     if (inv) inv.close();
                 }
                 this.state = SellState.IDLE;
                 break;
        }
    }

    private clickSlot(slot: number) {
        const inv = Player.openInventory();
        if (inv) {
            inv.click(slot);
        }
    }

    private saveConfig() {
        Config.writeConfig(this.configPath, this.config, this.scriptId);
    }

    private registerCommands() {
        const cmd = CommandManager.create('prisonutils');

        cmd.literal('toggle').executes(() => {
            this.config.enabled = !this.config.enabled;
            this.saveConfig();
            Chat.log(`§7PrisonUtils is now ${this.config.enabled ? '§aENABLED' : '§cDISABLED'}`);
            if (!this.config.enabled) {
                this.lmb.set(false);
                this.state = SellState.IDLE;
            }
        });

        cmd.literal('delay')
            .argument('seconds', 'int')
            .executes((ctx) => {
                const seconds = ctx.getArg('seconds');
                this.config.delaySeconds = seconds;
                this.saveConfig();
                Chat.log(`§7PrisonUtils sell delay set to §a${seconds}s`);
            });

        cmd.register();
    }
}
