import { updateScript } from '../libs/Updater';
updateScript(file.getAbsolutePath(), 'jayc331/JSMacros-Scripts', './config/jayc331-config.json');

import Config from '../libs/Config';
import { BaritoneAPI, BetterBlockPos } from '../libs/BaritoneAPIProvider';
import { Key } from '../libs/KeyManager';
import { CommandManager } from '../libs/CommandBuilderWrapper';

// =============================================================================
// Types & Interfaces
// =============================================================================

interface Position {
    x: number;
    y: number;
    z: number;
}

type InteractionMode = 'hold' | 'click' | 'none';
type InteractionKey = 'left' | 'right';
type Direction = 'left' | 'right' | 'both';

interface DirectionConfig<T> {
    left: T;
    right: T;
}

interface InteractionConfig {
    key: InteractionKey;
    mode: InteractionMode;
    cps?: number;
}

interface StrafingConfig {
    position: { '1': Position; '2': Position };
    options: {
        sneak: DirectionConfig<boolean>;
        interact: DirectionConfig<InteractionConfig>;
        pitch: DirectionConfig<number | null>;
        threshold: DirectionConfig<number>;
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
            sneak: {
                left: false,
                right: false,
            },
            interact: {
                left: {
                    key: 'left',
                    mode: 'hold',
                    cps: 4, // Default CPS
                },
                right: {
                    key: 'right',
                    mode: 'click',
                    cps: 4, // Default CPS
                },
            },
            pitch: {
                left: -22,
                right: -32,
            },
            threshold: {
                left: 0.4,
                right: 0.4,
            },
        },
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
    private lastClickTime: { left: number; right: number } = { left: 0, right: 0 };
    // Key definitions
    private readonly keys = {
        left: new Key('key.keyboard.a'),
        right: new Key('key.keyboard.d'),
        mouseLeft: new Key('key.mouse.left'),
        mouseRight: new Key('key.mouse.right'),
        sneak: new Key('key.keyboard.left.shift'),
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

    public setSneak(state: boolean, direction: Direction = 'both') {
        if (direction === 'both' || direction === 'left') {
            this.config.options.sneak.left = state;
        }
        if (direction === 'both' || direction === 'right') {
            this.config.options.sneak.right = state;
        }
        this.saveConfig();
        this.showStatus(`§7Sneak set to §a${state}§7 for §e${direction}`);
    }

    public setInteract({
        mode,
        key,
        cps,
        direction = 'both',
    }: {
        mode?: InteractionMode;
        key?: InteractionKey;
        cps?: number;
        direction?: Direction;
    }) {
        if (direction === 'both' || direction === 'left') {
            const leftConfig = { ...this.config.options.interact.left };
            if (mode !== undefined) leftConfig.mode = mode;
            if (key !== undefined) leftConfig.key = key;
            if (cps !== undefined) leftConfig.cps = cps;
            this.config.options.interact.left = leftConfig;
        }
        if (direction === 'both' || direction === 'right') {
            const rightConfig = { ...this.config.options.interact.right };
            if (mode !== undefined) rightConfig.mode = mode;
            if (key !== undefined) rightConfig.key = key;
            if (cps !== undefined) rightConfig.cps = cps;
            this.config.options.interact.right = rightConfig;
        }
        this.saveConfig();
        // For status message, show what was actually set (or current value if not set)
        const finalMode =
            mode ??
            (direction === 'right' ? this.config.options.interact.right.mode : this.config.options.interact.left.mode);
        const finalKey =
            key ??
            (direction === 'right' ? this.config.options.interact.right.key : this.config.options.interact.left.key);
        const finalCps =
            cps ??
            (direction === 'right' ? this.config.options.interact.right.cps : this.config.options.interact.left.cps);
        this.showStatus(`§7Interact set to §a${finalMode}§7 (${finalKey}, ${finalCps} CPS) for §e${direction}`);
    }

    public setPitch({ pitch, direction = 'both' }: { pitch: number | null; direction?: Direction }) {
        if (direction === 'both' || direction === 'left') {
            this.config.options.pitch.left = pitch;
        }
        if (direction === 'both' || direction === 'right') {
            this.config.options.pitch.right = pitch;
        }
        this.saveConfig();
        const valStr = pitch === null ? 'disabled' : pitch.toFixed(1);
        this.showStatus(`§7Pitch set to §a${valStr}§7 for §e${direction}`);
    }

    public setDistanceThreshold(dist: number, direction: Direction = 'both') {
        if (direction === 'both' || direction === 'left') {
            this.config.options.threshold.left = dist;
        }
        if (direction === 'both' || direction === 'right') {
            this.config.options.threshold.right = dist;
        }
        this.saveConfig();
        this.showStatus(`§7Threshold set to §a${dist.toFixed(2)}m§7 for §e${direction}`);
    }

    private cleanupKeys() {
        this.keys.left.release();
        this.keys.right.release();
        this.keys.mouseLeft.release();
        this.keys.mouseRight.release();
        this.keys.sneak.release();
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
        this.showStatus('§cStrafing stopped.');
    }

    public start() {
        if (this.isRunning) {
            this.showStatus('§eStrafing is already running!');
            return;
        }

        const _1 = this.config.position['1'];
        const _2 = this.config.position['2'];

        if (isNaN(_1.x) || isNaN(_1.y) || isNaN(_1.z) || isNaN(_2.x) || isNaN(_2.y) || isNaN(_2.z)) {
            Chat.log('§cPositions not set! Use /strafe set pos 1 and /strafe set pos 2');
            return;
        }

        this.isRunning = true; // Set running state immediately

        // Visuals
        try {
            const pos1 = new (BetterBlockPos as any)(_1.x, _1.y, _1.z);
            const pos2 = new (BetterBlockPos as any)(_2.x, _2.y, _2.z);
            BaritoneAPI.getProvider().getPrimaryBaritone().getSelectionManager().addSelection(pos1, pos2);
        } catch (e) {
            // Ignore errors
        }

        // Reset stats
        this.currentTarget = 2;
        this.startTime = Date.now();
        this.totalDistance = 0;
        this.lastPos = null;

        // Only attach listener if not already attached
        if (!this.tickListener) {
            this.tickListener = JsMacros.on(
                'Tick',
                JavaWrapper.methodToJava(() => this.tick())
            );
        }

        this.showStatus('§aStrafing started!');
    }

    private updateVisuals() {
        try {
            const primary = BaritoneAPI.getProvider().getPrimaryBaritone();
            const _1 = this.config.position['1'];
            const _2 = this.config.position['2'];
            if (!isNaN(_1.x) && !isNaN(_1.y) && !isNaN(_1.z) && !isNaN(_2.x) && !isNaN(_2.y) && !isNaN(_2.z)) {
                const pos1 = new (BetterBlockPos as any)(_1.x, _1.y, _1.z);
                const pos2 = new (BetterBlockPos as any)(_2.x, _2.y, _2.z);
                primary.getSelectionManager().addSelection(pos1, pos2);
            }
        } catch (e) {
            // Ignore
        }
    }

    private tick() {
        try {
            if (!this.isRunning || Hud.getOpenScreen()) {
                if (Hud.getOpenScreen()) {
                    this.cleanupKeys();
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

            // Targets
            const t1 = { x: c1.x, y: c1.y, z: c1.z };
            const t2 = { x: c2.x, y: c2.y, z: c2.z };

            // --- Look Logic ---
            const pathYaw = -Math.atan2(dxRaw, dzRaw) * (180 / Math.PI);
            const lookYaw = pathYaw - 90;

            // Determine current 'direction' phase
            // If target is 2, we are moving 'right' (towards 2) relative to start
            // If target is 1, we are moving 'left' (towards 1)
            const currentDirection: 'left' | 'right' = this.currentTarget === 2 ? 'right' : 'left';

            const pitchConfig = this.config.options.pitch[currentDirection];
            const pitch = pitchConfig !== null ? pitchConfig : player.getPitch();
            player.lookAt(lookYaw, pitch);

            // --- Switching Targets ---
            const targetPos = this.currentTarget === 1 ? t1 : t2;
            const dist = Math.sqrt(Math.pow(pPos.getX() - targetPos.x, 2) + Math.pow(pPos.getZ() - targetPos.z, 2));

            const threshold = this.config.options.threshold[currentDirection];
            if (dist < threshold) {
                this.currentTarget = this.currentTarget === 1 ? 2 : 1;
            }

            // --- HUD ---
            this.updateHud(currentDirection);

            // --- Inputs ---
            this.handleInputs(currentDirection);
        } catch (e) {
            Chat.log('§cError in strafe tick: ' + e);
            this.stop();
        }
    }

    private updateHud(currentDirection: Direction) {
        if (Date.now() < this.statusExpiry) {
            Chat.actionbar(this.statusMessage);
            return;
        }

        const elapsed = (Date.now() - this.startTime) / 1000;
        const h = Math.floor(elapsed / 3600);
        const m = Math.floor((elapsed % 3600) / 60);
        const s = elapsed % 60;

        const timeParts = [];
        if (h > 0) timeParts.push(`${h}h`);
        if (m > 0) timeParts.push(`${m}m`);
        if (h === 0 && m === 0) timeParts.push(`${s.toFixed(1)}s`);
        else if (Math.floor(s) > 0) timeParts.push(`${Math.floor(s)}s`);
        if (timeParts.length === 0) timeParts.push('0.0s');

        const timeString = timeParts.join(' ');
        const sneak = this.config.options.sneak[currentDirection] ? 'ON' : 'OFF';
        const interact = this.config.options.interact[currentDirection].mode;

        Chat.actionbar(
            `§eDist: ${this.totalDistance.toFixed(1)}m | Time: ${timeString} | Dir: ${currentDirection.toUpperCase()} | Sneak: ${sneak} | Int: ${interact}`
        );
    }

    private handleInputs(dir: 'left' | 'right') {
        // Movement
        if (dir === 'right') {
            this.keys.right.set(true);
            this.keys.left.set(false);
        } else {
            this.keys.right.set(false);
            this.keys.left.set(true);
        }

        // Sneak
        this.keys.sneak.set(this.config.options.sneak[dir]);

        // Interact
        const interact = this.config.options.interact[dir];
        const key = interact.key === 'left' ? this.keys.mouseLeft : this.keys.mouseRight;
        const otherKey = interact.key === 'left' ? this.keys.mouseRight : this.keys.mouseLeft;

        // Release other key to prevent stuck keys
        otherKey.set(false);

        if (interact.mode === 'click') {
            const currentCps = interact.cps ?? this.defaultConfig.options.interact[dir].cps ?? 10;
            const delayMs = 1000 / currentCps;
            if (Date.now() - this.lastClickTime[dir] >= delayMs) {
                key.click();
                this.lastClickTime[dir] = Date.now();
            }
        } else if (interact.mode === 'hold') {
            key.set(true);
        } else {
            key.set(false);
        }
    }
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

const strafe = CommandManager.create('strafe');

strafe.literal('start').executes(() => strafer.start());

strafe.literal('stop').executes(() => strafer.stop());

const set = strafe.literal('set');

set.literal('pos')
    .argument('position', 'int')
    .suggestMatching(['1', '2'])
    .executes((ctx) => {
        const pos = ctx.getArg('position');
        if (pos !== 1 && pos !== 2) {
            Chat.log('§cPosition must be 1 or 2');
            return;
        }
        const player = Player.getPlayer();
        if (player) strafer.setPosition(pos, player.getPos());
    });

set.literal('sneak')
    .argument('state', 'boolean')
    .executes((ctx) => strafer.setSneak(ctx.getArg('state')))
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => {
        const dir = ctx.getArg('direction');
        if (dir !== 'both' && dir !== 'left' && dir !== 'right') {
            Chat.log('§cInvalid direction. Options: both, left, right');
            return;
        }
        strafer.setSneak(ctx.getArg('state'), dir as Direction);
    });

const interact = set.literal('interact');

interact
    .literal('mode')
    .argument('mode', 'word')
    .suggestMatching(['hold', 'click', 'none'])
    .executes((ctx) => {
        const mode = ctx.getArg('mode');
        if (mode !== 'hold' && mode !== 'click' && mode !== 'none') {
            Chat.log('§cInvalid mode. Options: hold, click, none');
            return;
        }
        strafer.setInteract({ mode: mode as InteractionMode });
    })
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => {
        const mode = ctx.getArg('mode');
        const dir = ctx.getArg('direction');
        if (mode !== 'hold' && mode !== 'click' && mode !== 'none') {
            Chat.log('§cInvalid mode. Options: hold, click, none');
            return;
        }
        if (dir !== 'both' && dir !== 'left' && dir !== 'right') {
            Chat.log('§cInvalid direction. Options: both, left, right');
            return;
        }
        strafer.setInteract({ mode: mode as InteractionMode, direction: dir as Direction });
    });

interact
    .literal('key')
    .argument('key', 'word')
    .suggestMatching(['left', 'right'])
    .executes((ctx) => {
        const key = ctx.getArg('key');
        if (key !== 'left' && key !== 'right') {
            Chat.log('§cInvalid key. Options: left, right');
            return;
        }
        strafer.setInteract({ key: key as InteractionKey });
    })
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => {
        const key = ctx.getArg('key');
        const dir = ctx.getArg('direction');
        if (key !== 'left' && key !== 'right') {
            Chat.log('§cInvalid key. Options: left, right');
            return;
        }
        if (dir !== 'both' && dir !== 'left' && dir !== 'right') {
            Chat.log('§cInvalid direction. Options: both, left, right');
            return;
        }
        strafer.setInteract({ key: key as InteractionKey, direction: dir as Direction });
    });

interact
    .literal('cps')
    .argument('value', 'double')
    .executes((ctx) => {
        const cps = ctx.getArg('value');
        if (cps <= 0 || cps > 20) {
            // Limit CPS to a reasonable range, e.g., 1-20
            Chat.log('§cCPS must be between 1 and 20.');
            return;
        }
        strafer.setInteract({ cps: cps });
    })
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => {
        const cps = ctx.getArg('value');
        const dir = ctx.getArg('direction');
        if (cps <= 0 || cps > 20) {
            Chat.log('§cCPS must be between 1 and 20.');
            return;
        }
        if (dir !== 'both' && dir !== 'left' && dir !== 'right') {
            Chat.log('§cInvalid direction. Options: both, left, right');
            return;
        }
        strafer.setInteract({ cps: cps, direction: dir as Direction });
    });

set.literal('pitch')
    .executes(() => strafer.setPitch({ pitch: null }))
    .argument('value', 'double')
    .executes((ctx) => strafer.setPitch({ pitch: ctx.getArg('value') }))
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => {
        const dir = ctx.getArg('direction');
        if (dir !== 'both' && dir !== 'left' && dir !== 'right') {
            Chat.log('§cInvalid direction. Options: both, left, right');
            return;
        }
        strafer.setPitch({ pitch: ctx.getArg('value'), direction: dir as Direction });
    });

set.literal('threshold')
    .argument('value', 'double')
    .executes((ctx) => strafer.setDistanceThreshold(ctx.getArg('value')))
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => {
        const dir = ctx.getArg('direction');
        if (dir !== 'both' && dir !== 'left' && dir !== 'right') {
            Chat.log('§cInvalid direction. Options: both, left, right');
            return;
        }
        strafer.setDistanceThreshold(ctx.getArg('value'), dir as Direction);
    });

strafe.register();

// Global Event Listeners
JsMacros.on(
    'OpenScreen',
    JavaWrapper.methodToJava(() => {
        if (strafer.isRunning) {
            strafer['cleanupKeys']();
        }
    })
);

export default event;
