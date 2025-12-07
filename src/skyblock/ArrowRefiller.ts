import Config from '../libs/Config';
import { CommandManager } from '../libs/CommandBuilderWrapper';
import { StrafingScript } from './main'; // Import StrafingScript

enum RefillState {
    IDLE,
    SEND_COMMAND,
    WAIT_FOR_SCREEN,
    CLICK_SLOT_15,
    WAIT_AFTER_CLICK_15,
    CLICK_SLOT_12,
    WAIT_AFTER_CLICK_12,
    CLOSE_INV,
}

interface ArrowRefillerConfig {
    enabled: boolean;
    minArrows: number;
    cooldownSeconds: number; // New: Cooldown period in seconds
}

export class ArrowRefiller {
    private readonly configPath = './config/jayc331-config.json';
    private readonly scriptId = 'arrowRefiller';
    private readonly defaultConfig: ArrowRefillerConfig = {
        enabled: true,
        minArrows: 64,
        cooldownSeconds: 300, // Default 5 minutes
    };

    private config: ArrowRefillerConfig;
    private refillState: RefillState = RefillState.IDLE;
    private stateTickCounter: number = 0;
    private lastInventoryCheckTime = 0;
    private lastRefillTime = 0; // New: Timestamp of the last refill initiated

    // Constants for delays
    private readonly MAX_SCREEN_WAIT_TICKS = 60; // 3 seconds
    private readonly CLICK_DELAY_TICKS = 5; // 250ms

    private strafer: StrafingScript; // New: Reference to StrafingScript

    constructor(strafer: StrafingScript) {
        // Modified constructor
        this.strafer = strafer;
        this.config = Config.readConfig(this.configPath, this.defaultConfig, this.scriptId);
        this.registerListeners();
        this.registerCommands();
    }

    private registerListeners() {
        JsMacros.on(
            'Tick',
            JavaWrapper.methodToJava(() => this.onTick())
        );
    }

    private onTick() {
        if (!this.config.enabled) {
            // If disabled, ensure we are in IDLE state and reset counters
            if (this.refillState !== RefillState.IDLE) {
                this.resetState();
            }
            return;
        }

        // --- Periodic Check for Refill Trigger (only if not currently refilling) ---
        if (this.refillState === RefillState.IDLE) {
            if (Date.now() - this.lastInventoryCheckTime > 1000) {
                this.lastInventoryCheckTime = Date.now();
                if (!Hud.getOpenScreen() && !this.hasEnoughArrows()) {
                    // Check cooldown
                    if (Date.now() - this.lastRefillTime < this.config.cooldownSeconds * 1000) {
                        // Chat.log(`§eArrowRefiller: §7Cooldown active. Next refill in ${((this.config.cooldownSeconds * 1000 - (Date.now() - this.lastRefillTime)) / 1000).toFixed(0)}s`);
                        return;
                    }
                    // Check if player is within strafe bounds
                    if (this.strafer.outOfBounds) {
                        // Chat.log('§eArrowRefiller: §7Out of strafe bounds. Refill paused.');
                        return;
                    }
                    this.startRefillProcess();
                }
            }
        }

        // --- State Machine Execution ---
        if (this.refillState !== RefillState.IDLE) {
            this.stateTickCounter++;
            const player = Player.getPlayer(); // Get player once per active tick
            if (!player) {
                Chat.log('§cArrowRefiller Error: Player not found during refill process. Resetting.');
                this.resetState();
                return;
            }

            switch (this.refillState) {
                case RefillState.SEND_COMMAND:
                    Chat.log('§aArrowRefiller: §7Low arrows! Refilling...');
                    Chat.say('/shop arrow');
                    this.refillState = RefillState.WAIT_FOR_SCREEN;
                    this.stateTickCounter = 0; // Reset counter for new state
                    this.lastRefillTime = Date.now(); // Record refill start time
                    break;

                case RefillState.WAIT_FOR_SCREEN:
                    if (Hud.getOpenScreen()) {
                        this.refillState = RefillState.CLICK_SLOT_15;
                        this.stateTickCounter = 0;
                    } else if (this.stateTickCounter >= this.MAX_SCREEN_WAIT_TICKS) {
                        Chat.log('§cArrowRefiller: §7Shop open timed out. Resetting.');
                        this.resetState();
                    }
                    break;

                case RefillState.CLICK_SLOT_15:
                    if (this.stateTickCounter >= this.CLICK_DELAY_TICKS) {
                        // Wait a few ticks before clicking
                        if (!this.clickSlot(15)) {
                            this.resetState();
                            return;
                        }
                        this.refillState = RefillState.WAIT_AFTER_CLICK_15;
                        this.stateTickCounter = 0;
                    }
                    break;

                case RefillState.WAIT_AFTER_CLICK_15:
                    if (this.stateTickCounter >= this.CLICK_DELAY_TICKS) {
                        this.refillState = RefillState.CLICK_SLOT_12;
                        this.stateTickCounter = 0;
                    }
                    break;

                case RefillState.CLICK_SLOT_12:
                    if (this.stateTickCounter >= this.CLICK_DELAY_TICKS) {
                        // Wait a few ticks before clicking
                        if (!this.clickSlot(12)) {
                            this.resetState();
                            return;
                        }
                        this.refillState = RefillState.WAIT_AFTER_CLICK_12;
                        this.stateTickCounter = 0;
                    }
                    break;

                case RefillState.WAIT_AFTER_CLICK_12:
                    if (this.stateTickCounter >= this.CLICK_DELAY_TICKS) {
                        this.refillState = RefillState.CLOSE_INV;
                        this.stateTickCounter = 0;
                    }
                    break;

                case RefillState.CLOSE_INV:
                    const inv = Player.openInventory();
                    if (inv) inv.close();
                    Chat.log('§aArrowRefiller: §7Refill process completed.');
                    this.resetState();
                    break;
            }
        }
    }

    private hasEnoughArrows(): boolean {
        const inv = Player.openInventory();
        if (!inv) return true;

        const items = inv.getItems();
        let count = 0;

        for (let i = 0; i < items.size(); i++) {
            const item = items.get(i);
            if (!item.isEmpty() && item.getItemId() === 'minecraft:arrow') {
                count += item.getCount();
            }
        }
        return count >= this.config.minArrows;
    }

    // New method to initiate the refilling process
    public startRefillProcess() {
        if (this.refillState === RefillState.IDLE) {
            this.refillState = RefillState.SEND_COMMAND;
            this.stateTickCounter = 0;
        }
    }

    private clickSlot(slot: number): boolean {
        const inv = Player.openInventory();
        if (!inv) {
            Chat.log('§cArrowRefiller Error: Inventory not open when trying to click slot.');
            return false;
        }
        Chat.log(`§aArrowRefiller: §7Clicking slot ${slot}...`);
        inv.click(slot);
        return true;
    }

    private resetState() {
        this.refillState = RefillState.IDLE;
        this.stateTickCounter = 0;
        // Optionally, ensure any keys are released or other side effects are cleaned up
    }

    private saveConfig() {
        Config.writeConfig(this.configPath, this.config, this.scriptId);
    }

    private registerCommands() {
        const cmd = CommandManager.create('arrowrefill');

        cmd.literal('toggle').executes(() => {
            this.config.enabled = !this.config.enabled;
            this.saveConfig();
            Chat.log(`§7ArrowRefill is now ${this.config.enabled ? '§aENABLED' : '§cDISABLED'}`);
            if (!this.config.enabled) {
                this.resetState(); // Reset state if disabled mid-process
            }
        });

        cmd.literal('threshold')
            .argument('amount', 'int')
            .executes((ctx) => {
                const amt = ctx.getArg('amount');
                this.config.minArrows = amt;
                this.saveConfig();
                Chat.log(`§7ArrowRefill threshold set to §a${amt}`);
            });

        cmd.literal('cooldown') // New command to set cooldown
            .argument('seconds', 'int')
            .executes((ctx) => {
                const seconds = ctx.getArg('seconds');
                this.config.cooldownSeconds = seconds;
                this.saveConfig();
                Chat.log(`§7ArrowRefill cooldown set to §a${seconds}s`);
            });

        cmd.literal('buy').executes(() => {
            this.startRefillProcess();
        });

        cmd.register();
    }
}
