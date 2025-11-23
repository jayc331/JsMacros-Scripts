import Config from '../libs/Config';
import { BaritoneAPI, BetterBlockPos } from '../libs/BaritoneAPIProvider';

// =============================================================================
// Types & Interfaces
// =============================================================================

interface Position {
    x: number;
    y: number;
    z: number;
}

type AttackMode = 'hold' | 'none';

interface StrafingConfig {
    position: { '1': Position; '2': Position };
    options: {
        sneak: boolean;
        attackMode: AttackMode;
        lockPitch: boolean;
        targetPitch: number;
        distanceThreshold: number;
    };
}

// =============================================================================
// Main Script Class
// =============================================================================

class StrafingScript {
    private readonly configPath = './config/jayc331-config.json';
    private readonly scriptId = 'skyblock';
    private readonly defaultConfig: StrafingConfig = {
        position: { '1': { x: NaN, y: NaN, z: NaN }, '2': { x: NaN, y: NaN, z: NaN } },
        options: {
            sneak: false,
            attackMode: 'hold',
            lockPitch: false,
            targetPitch: 0,
            distanceThreshold: 0.4
        }
    };

    private config: StrafingConfig;
    private tickListener: any = null;
    private currentTarget: 1 | 2 = 2;
    private startTime = 0;
    private totalDistance = 0;
    private lastPos: Position | null = null;
    private statusMessage = '';
    private statusExpiry = 0;
    public isRunning = false; // Only flag needed for running/stopped state
    
    // Key definitions for easy management
    private readonly keys = {
        left: "key.keyboard.a",
        right: "key.keyboard.d",
        attack: "key.mouse.left",
        sneak: "key.keyboard.left.shift" // Default sneak key, ideally configurable but safe default
    };

    constructor() {
        this.config = Config.readConfig(this.configPath, this.defaultConfig, this.scriptId);
    }

    public saveConfig() {
        Config.writeConfig(this.configPath, this.config, this.scriptId);
    }

    private showStatus(msg: string, duration = 2000) {
        this.statusMessage = msg;
        this.statusExpiry = Date.now() + duration;
        Chat.actionbar(msg); // Show immediately
    }

    public setPosition(index: 1 | 2, pos: any) {
        const coords = { x: Math.floor(pos.getX()), y: Math.floor(pos.getY()), z: Math.floor(pos.getZ()) };
        this.config.position[index] = coords;
        this.saveConfig();
        this.showStatus(`§aSelection ${index} saved at X:${coords.x} Y:${coords.y} Z:${coords.z}`);
        this.updateVisuals();
    }

    public toggleOption(option: keyof StrafingConfig['options'], value?: any) {
        if (value !== undefined) {
            (this.config.options as any)[option] = value;
        } else if (typeof this.config.options[option] === 'boolean') {
            (this.config.options as any)[option] = !this.config.options[option];
        }
        this.saveConfig();
        this.showStatus(`§7Set §e${option}§7 to §a${this.config.options[option]}`);
    }

    private cleanupKeys() {
        KeyBind.key(this.keys.left, false);
        KeyBind.key(this.keys.right, false);
        KeyBind.key(this.keys.attack, false);
        KeyBind.key(this.keys.sneak, false);
    }

    public stop() {
        if (!this.isRunning) return; // Already stopped
        this.isRunning = false;

        if (this.tickListener) {
            JsMacros.off(this.tickListener);
            this.tickListener = null;
        }

        this.cleanupKeys();
        this.startTime = 0;
        this.totalDistance = 0;
        this.showStatus("§cStrafing stopped.");
    }

    public start() {
        if (this.isRunning) {
            this.showStatus("§eStrafing is already running!");
            return;
        }

        const _1 = this.config.position['1'];
        const _2 = this.config.position['2'];

        if (isNaN(_1.x) || isNaN(_2.x)) {
            Chat.log("§cPositions not set! Use /strafe set pos 1 and /strafe set pos 2");
            return;
        }

        this.isRunning = true; // Set running state immediately

        // Visuals
        try {
            const pos1 = new (BetterBlockPos as any)(_1.x, _1.y, _1.z);
            const pos2 = new (BetterBlockPos as any)(_2.x, _2.y, _2.z);
            BaritoneAPI.getProvider().getPrimaryBaritone().getSelectionManager().addSelection(pos1, pos2);
        } catch (e) {
            // Ignore errors if visual selection fails (e.g. Baritone not ready)
        }

        // Reset stats on fresh start
        this.currentTarget = 2;
        this.startTime = Date.now();
        this.totalDistance = 0;
        this.lastPos = null; // Reset lastPos for fresh distance tracking

        // Only attach listener if not already attached
        if (!this.tickListener) {
            this.tickListener = JsMacros.on('Tick', JavaWrapper.methodToJava(() => this.tick()));
        }

        this.showStatus("§aStrafing started!");
    }

    private updateVisuals() {
        try {
            const primary = BaritoneAPI.getProvider().getPrimaryBaritone();
            const _1 = this.config.position['1'];
            const _2 = this.config.position['2'];
            if (!isNaN(_1.x) && !isNaN(_2.x)) {
                const pos1 = new (BetterBlockPos as any)(_1.x, _1.y, _1.z);
                const pos2 = new (BetterBlockPos as any)(_2.x, _2.y, _2.z);
                primary.getSelectionManager().addSelection(pos1, pos2);
            }
        } catch (e) {
            // Baritone not ready or error
        }
    }

    private tick() {
        try {
            // Stop if not running or if a screen is open
            if (!this.isRunning || Hud.getOpenScreen()) {
                // Ensure keys are released if we just opened a screen and were running
                if (Hud.getOpenScreen()) {
                    this.cleanupKeys(); // Ensure keys are cleared when a screen opens.
                }
                return;
            }

            const player = Player.getPlayer();
            if (!player) return;

            const pPos = player.getPos();

            // --- Distance Tracking ---
            if (this.lastPos) {
                const dMove = Math.sqrt(
                    Math.pow(pPos.getX() - this.lastPos.x, 2) +
                    Math.pow(pPos.getY() - this.lastPos.y, 2) +
                    Math.pow(pPos.getZ() - this.lastPos.z, 2)
                );
                this.totalDistance += dMove;
            }
            this.lastPos = { x: pPos.getX(), y: pPos.getY(), z: pPos.getZ() };

            // --- Calculation ---
            const _1 = this.config.position['1'];
            const _2 = this.config.position['2'];
            const c1 = { x: _1.x + 0.5, y: _1.y, z: _1.z + 0.5 };
            const c2 = { x: _2.x + 0.5, y: _2.y, z: _2.z + 0.5 };

            const dxRaw = c2.x - c1.x;
            const dzRaw = c2.z - c1.z;
            const len = Math.sqrt(dxRaw * dxRaw + dzRaw * dzRaw);
            const dirX = len > 0 ? dxRaw / len : 0;
            const dirZ = len > 0 ? dzRaw / len : 0;

            // Targets with offset
            const offset = 0.45;
            const t1 = { x: c1.x - (dirX * offset), y: c1.y, z: c1.z - (dirZ * offset) };
            const t2 = { x: c2.x + (dirX * offset), y: c2.y, z: c2.z + (dirZ * offset) };

            // --- Look Logic ---
            const pathYaw = -Math.atan2(dxRaw, dzRaw) * (180 / Math.PI);
            const lookYaw = pathYaw - 90;
            
            const pitch = this.config.options.lockPitch ? this.config.options.targetPitch : player.getPitch();
            player.lookAt(lookYaw, pitch);

            // --- Switching Targets ---
            const targetPos = this.currentTarget === 1 ? t1 : t2;
            const dist = Math.sqrt(Math.pow(pPos.getX() - targetPos.x, 2) + Math.pow(pPos.getZ() - targetPos.z, 2));

            if (dist < this.config.options.distanceThreshold) {
                this.currentTarget = this.currentTarget === 1 ? 2 : 1;
            }

            // --- HUD ---
            this.updateHud();

            // --- Inputs ---
            this.handleInputs();

        } catch (e) {
            Chat.log("§cError in strafe tick: " + e);
            this.stop();
        }
    }

    private updateHud() {
        if (Date.now() < this.statusExpiry) {
            Chat.actionbar(this.statusMessage);
            return;
        }

        const elapsed = (Date.now() - this.startTime) / 1000;
        const h = Math.floor(elapsed / 3600);
        const m = Math.floor((elapsed % 3600) / 60);
        const sForDisplay = elapsed % 60; // Retain decimals for now

        const parts = [];

        if (h > 0) {
            parts.push(`${h}h`);
        }
        if (m > 0) {
            parts.push(`${m}m`);
        }

        if (h === 0 && m === 0) { // Only seconds or seconds and milliseconds
            parts.push(`${sForDisplay.toFixed(1)}s`);
        } else { // Has hours or minutes
            const sInt = Math.floor(sForDisplay);
            if (sInt > 0) { // Only show integer seconds if it's greater than 0
                parts.push(`${sInt}s`);
            }
        }
        
        // Handle case where elapsed is 0, so parts is empty
        if (parts.length === 0) {
            parts.push('0.0s');
        }
        
        const timeString = parts.join(' ');
        Chat.actionbar(`§eDist: ${this.totalDistance.toFixed(1)}m | Time: ${timeString} | Sneak: ${this.config.options.sneak ? 'ON' : 'OFF'}`);
    }

    private handleInputs() {
        // Movement
        if (this.currentTarget === 2) {
            KeyBind.key(this.keys.right, true);
            KeyBind.key(this.keys.left, false);
        } else {
            KeyBind.key(this.keys.right, false);
            KeyBind.key(this.keys.left, true);
        }

        // Sneak
        KeyBind.key(this.keys.sneak, this.config.options.sneak);

        // Attack
        const mode = this.config.options.attackMode;
        if (mode === 'hold') {
            KeyBind.key(this.keys.attack, true);
        } else {
            KeyBind.key(this.keys.attack, false);
        }
    }

    // Removed onOpenScreen listener to simplify state management
}

// =============================================================================
// Initialization
// =============================================================================

const strafer = new StrafingScript();

// Export cleanup for JsMacros
(event as any).stopListener = JavaWrapper.methodToJava(() => strafer.stop());

// =============================================================================
// Commands
// =============================================================================

try {
    const cmd = Chat.getCommandManager();
    
    // Main command: /strafe
    const main = cmd.createCommandBuilder('strafe');
    
    // /strafe start
    main.literalArg('start')
        .executes(JavaWrapper.methodToJava(() => strafer.start()))
        .or() // Return to 'strafe' builder
    // /strafe stop
    .literalArg('stop')
        .executes(JavaWrapper.methodToJava(() => strafer.stop()))
        .or() // Return to 'strafe' builder
    // /strafe set ...
    .literalArg('set')
        // /strafe set pos <1|2>
        .literalArg('pos')
            .intArg('position')
            .suggestMatching('1', '2')
            .executes(JavaWrapper.methodToJava((ctx: any) => {
                const pos = ctx.getArg('position');
                const player = Player.getPlayer();
                if (player) strafer.setPosition(pos, player.getPos());
            }))
            .or() // Return to 'set' builder
        // /strafe set sneak <true|false>
        .literalArg('sneak')
            .booleanArg('state')
            .executes(JavaWrapper.methodToJava((ctx: any) => strafer.toggleOption('sneak', ctx.getArg('state'))))
            .or() // Return to 'set' builder
        // /strafe set attack <hold|none>
        .literalArg('attack')
            .wordArg('mode')
            .suggestMatching('hold', 'none')
            .executes(JavaWrapper.methodToJava((ctx: any) => strafer.toggleOption('attackMode', ctx.getArg('mode'))))
            .or() // Return to 'set' builder
        .or() // Return to 'strafe' builder
    ;

    main.register();

    // Global Event Listeners
    // Replaced custom onOpenScreen logic with direct check in tick()
    JsMacros.on('OpenScreen', JavaWrapper.methodToJava((e) => {
        // If a screen opens, we ensure keys are released immediately,
        // as tick() will stop sending inputs due to Hud.getOpenScreen() check.
        if (strafer.isRunning) {
            strafer['cleanupKeys'](); // Access private method for immediate cleanup
        }
    }));


} catch (err) {
    Chat.log("Error registering commands: " + err);
}

export default event;