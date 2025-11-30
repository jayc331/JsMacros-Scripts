import { updateScript } from '../libs/Updater';
updateScript(file.getAbsolutePath(), 'jayc331/JSMacros-Scripts', './config/jayc331-config.json');

import Config from '../libs/Config';
import { AntiAFK } from './AntiAFK';
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

interface StrafingOptions {
    sneak: DirectionConfig<boolean>;
    interact: DirectionConfig<InteractionConfig>;
    pitch: DirectionConfig<number | null>;
    threshold: DirectionConfig<number>;
}

interface StrafingConfig {
    position: { '1': Position; '2': Position };
    options: StrafingOptions;
}

// =============================================================================
// Main Script Class
// =============================================================================

class StrafingScript {
    private readonly configPath = './config/jayc331-config.json';
    private readonly scriptId = 'skyblock';

    private readonly defaultConfig: StrafingConfig = {
        position: { '1': { x: 64, y: 100, z: 57 }, '2': { x: 0, y: 100, z: 57 } },
        options: {
            sneak: { left: false, right: false },
            interact: {
                left: { key: 'left', mode: 'hold', cps: 10 },
                right: { key: 'right', mode: 'click', cps: 10 },
            },
            pitch: { left: -2, right: -10 },
            threshold: { left: 0.5, right: 0.5 },
        },
    };

    private config: StrafingConfig;
    private tickListener: any = null;

    // State
    private currentTarget: 1 | 2 = 2;
    public isRunning = false;
    public isPaused = false;
    private isStarting = false;
    private startTickCounter = 0;

    // Statistics
    private startTime = 0;
    private totalDistance = 0;
    private lastPos: Position | null = null;

    // UI/Timing
    private statusMessage = '';
    private statusExpiry = 0;
    private lastClickTime: { left: number; right: number } = { left: 0, right: 0 };

    // Key definitions
    private readonly keys = {
        left: new Key('key.keyboard.a'),
        right: new Key('key.keyboard.d'),
        mouseLeft: new Key('key.mouse.left'),
        mouseRight: new Key('key.mouse.right'),
        sneak: new Key('key.keyboard.left.shift'),
        jump: new Key('key.keyboard.space'),
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
        Chat.actionbar(msg);
    }

    // =========================================================================
    // Config Setters
    // =========================================================================

    public setPosition(index: 1 | 2, pos: any) {
        const coords = { x: Math.floor(pos.getX()), y: Math.floor(pos.getY()), z: Math.floor(pos.getZ()) };
        this.config.position[index] = coords;
        this.saveConfig();
        this.showStatus(`§aSelection ${index} saved at X:${coords.x} Y:${coords.y} Z:${coords.z}`);
        this.updateVisuals();
    }

    /**
     * Updates a directional configuration option safely.
     */
    private updateOption<K extends keyof StrafingOptions>(
        key: K,
        direction: Direction,
        updater: (current: StrafingOptions[K]['left']) => StrafingOptions[K]['left']
    ) {
        const option = this.config.options[key];
        if (direction === 'both' || direction === 'left') {
            // Type assertion needed as TS cannot infer specific types from K
            (option as any).left = updater((option as any).left);
        }
        if (direction === 'both' || direction === 'right') {
            (option as any).right = updater((option as any).right);
        }
        this.saveConfig();
    }

    public setSneak(state: boolean, direction: Direction = 'both') {
        this.updateOption('sneak', direction, () => state);
        this.showStatus(`§7Sneak set to §a${state}§7 for §e${direction}`);
    }

    public setPitch({ pitch, direction = 'both' }: { pitch: number | null; direction?: Direction }) {
        this.updateOption('pitch', direction, () => pitch);
        const valStr = pitch === null ? 'disabled' : pitch.toFixed(1);
        this.showStatus(`§7Pitch set to §a${valStr}§7 for §e${direction}`);
    }

    public setDistanceThreshold(dist: number, direction: Direction = 'both') {
        this.updateOption('threshold', direction, () => dist);
        this.showStatus(`§7Threshold set to §a${dist.toFixed(2)}m§7 for §e${direction}`);
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
        this.updateOption('interact', direction, (current) => ({
            ...current,
            ...(mode !== undefined ? { mode } : {}),
            ...(key !== undefined ? { key } : {}),
            ...(cps !== undefined ? { cps } : {}),
        }));

        // Construct status message
        const ref = direction === 'right' ? this.config.options.interact.right : this.config.options.interact.left;
        this.showStatus(`§7Interact set to §a${ref.mode}§7 (${ref.key}, ${ref.cps} CPS) for §e${direction}`);
    }

    // =========================================================================
    // Control Logic
    // =========================================================================

    public pause() {
        if (!this.isRunning || this.isPaused) return;
        this.isPaused = true;
        this.cleanupKeys();
        this.showStatus('§eStrafing paused (Out of Bounds/AFK Check).');
    }

    public resume() {
        if (!this.isRunning || !this.isPaused) return;
        this.isPaused = false;
        this.showStatus('§aStrafing resumed.');
    }

    public stop() {
        if (!this.isRunning) return;
        this.isRunning = false;
        this.cleanupKeys();
        if (this.tickListener) {
            JsMacros.off(this.tickListener);
            this.tickListener = null;
        }
        this.startTime = 0;
        this.totalDistance = 0;
        this.showStatus('§cStrafing stopped.');
    }

    public start() {
        if (this.isRunning) {
            this.showStatus('§eStrafing is already running!');
            return;
        }

        const { '1': p1, '2': p2 } = this.config.position;
        if (isNaN(p1.x) || isNaN(p2.x)) {
            Chat.log('§cPositions not set! Use /strafe set pos 1 and /strafe set pos 2');
            return;
        }

        this.isRunning = true;
        this.isPaused = false;
        this.isStarting = true;
        this.startTickCounter = 0;
        this.currentTarget = 2;
        this.startTime = Date.now();
        this.totalDistance = 0;
        this.lastPos = null;

        this.updateVisuals();

        if (!this.tickListener) {
            this.tickListener = JsMacros.on(
                'Tick',
                JavaWrapper.methodToJava(() => this.tick())
            );
        }
        this.showStatus('§aStrafing initializing...');
    }

    private updateVisuals() {
        try {
            const primary = BaritoneAPI.getProvider().getPrimaryBaritone();
            const { '1': p1, '2': p2 } = this.config.position;

            if (!isNaN(p1.x) && !isNaN(p2.x)) {
                // BetterBlockPos constructor expects ints
                const bp1 = new (BetterBlockPos as any)(Math.floor(p1.x), Math.floor(p1.y), Math.floor(p1.z));
                const bp2 = new (BetterBlockPos as any)(Math.floor(p2.x), Math.floor(p2.y), Math.floor(p2.z));
                primary.getSelectionManager().addSelection(bp1, bp2);
            }
        } catch (e) {
            Chat.log(`§cVisuals Error: ${e}`);
        }
    }

    private cleanupKeys() {
        this.keys.left.release();
        this.keys.right.release();
        this.keys.mouseLeft.release();
        this.keys.mouseRight.release();
        this.keys.sneak.release();
        this.keys.jump.release();
    }

    private isOutOfBounds(pos: any): boolean {
        const { '1': p1, '2': p2 } = this.config.position;
        if (isNaN(p1.x) || isNaN(p2.x)) return false;

        const x = pos.getX();
        const y = pos.getY();
        const z = pos.getZ();

        // Strict block volume check (no extra tolerance)
        // We extend the max by 1 to include the width of the block itself (0.0 to 1.0)
        const minX = Math.min(p1.x, p2.x);
        const maxX = Math.max(p1.x, p2.x) + 1;
        const minY = Math.min(p1.y, p2.y);
        const maxY = Math.max(p1.y, p2.y) + 1;
        const minZ = Math.min(p1.z, p2.z);
        const maxZ = Math.max(p1.z, p2.z) + 1;

        return x < minX || x >= maxX || y < minY || y >= maxY || z < minZ || z >= maxZ;
    }

    // =========================================================================
    // Tick Loop & Sub-routines
    // =========================================================================

    private tick() {
        try {
            if (!this.isRunning) return;

            const player = Player.getPlayer();
            if (!player) return;

            if (this.isPaused) {
                this.checkResume(player);
                return;
            }

            if (this.isStarting) {
                this.handleStartup(player);
                return;
            }

            if (this.shouldPauseOrStop(player)) {
                return;
            }

            this.trackDistance(player);

            const currentDirection: Direction = this.currentTarget === 2 ? 'right' : 'left';

            this.updateRotation(player, currentDirection);
            this.checkTargetSwitch(player, currentDirection);
            this.updateHud(currentDirection);
            this.handleInputs(currentDirection);
        } catch (e) {
            Chat.log('§cError in strafe tick: ' + e);
            this.stop();
        }
    }

    private checkResume(player: any) {
        const pPos = player.getPos();
        if (!this.isOutOfBounds(pPos)) {
            this.resume();
        }
    }

    private shouldPauseOrStop(player: any): boolean {
        if (Hud.getOpenScreen()) {
            this.cleanupKeys();
            return true; // Just skip inputs, don't necessarily stop unless it's long
        }

        const pPos = player.getPos();
        if (this.isOutOfBounds(pPos)) {
            this.pause();
            return true;
        }

        if (!player.getAbilities().getFlying()) {
            // Re-init flight
            this.isStarting = true;
            this.startTickCounter = 0;
            this.cleanupKeys();
            return true;
        }

        return false;
    }

    private handleStartup(player: any) {
        if (this.startTickCounter === 0) {
            if (player.getAbilities().getFlying()) {
                this.isStarting = false;
                this.showStatus('§aStrafing started!');
                return;
            }
            Chat.log('§7Enabling flight...');
        }

        const tick = this.startTickCounter++;

        // Flight activation sequence (Jump spam)
        if (tick === 0 || tick === 4) this.keys.jump.set(true);
        if (tick === 2 || tick === 25) this.keys.jump.set(false);

        if (tick > 25) {
            if (player.getAbilities().getFlying()) {
                this.isStarting = false;
                this.showStatus('§aStrafing started!');
            } else if (tick > 60) {
                this.startTickCounter = 0; // Retry
            }
        }
    }

    private trackDistance(player: any) {
        const pPos = player.getPos();
        if (this.lastPos) {
            const dMove = Math.sqrt(
                Math.pow(pPos.getX() - this.lastPos.x, 2) +
                    Math.pow(pPos.getY() - this.lastPos.y, 2) +
                    Math.pow(pPos.getZ() - this.lastPos.z, 2)
            );
            this.totalDistance += dMove;
        }
        this.lastPos = { x: pPos.getX(), y: pPos.getY(), z: pPos.getZ() };
    }

    private updateRotation(player: any, dir: Direction) {
        const { '1': p1, '2': p2 } = this.config.position;
        // Calculate center-to-center vector
        const c1 = { x: p1.x + 0.5, z: p1.z + 0.5 };
        const c2 = { x: p2.x + 0.5, z: p2.z + 0.5 };

        const dx = c2.x - c1.x;
        const dz = c2.z - c1.z;

        const pathYaw = -Math.atan2(dx, dz) * (180 / Math.PI);
        const lookYaw = pathYaw - 90;

        const pitchConfig = this.config.options.pitch[dir === 'left' ? 'left' : 'right'];
        const pitch = pitchConfig !== null ? pitchConfig : player.getPitch();

        player.lookAt(lookYaw, pitch);
    }

    private checkTargetSwitch(player: any, dir: Direction) {
        const { '1': p1, '2': p2 } = this.config.position;
        const rawTarget = this.currentTarget === 1 ? p1 : p2;
        const target = { x: rawTarget.x + 0.5, z: rawTarget.z + 0.5 };
        const pPos = player.getPos();

        const dist = Math.sqrt(Math.pow(pPos.getX() - target.x, 2) + Math.pow(pPos.getZ() - target.z, 2));
        // Default threshold to 0.5 if not set or invalid
        const threshold = this.config.options.threshold[dir === 'left' ? 'left' : 'right'] || 0.5;

        if (dist < threshold) {
            this.currentTarget = this.currentTarget === 1 ? 2 : 1;
        }
    }

    private updateHud(dir: Direction) {
        if (Date.now() < this.statusExpiry) {
            Chat.actionbar(this.statusMessage);
            return;
        }

        const elapsed = (Date.now() - this.startTime) / 1000;
        const h = Math.floor(elapsed / 3600);
        const m = Math.floor((elapsed % 3600) / 60);
        const s = elapsed % 60;

        const timeStr = `${h > 0 ? h + 'h ' : ''}${m > 0 || h > 0 ? m + 'm ' : ''}${s.toFixed(1)}s`;

        const refDir = dir === 'left' ? 'left' : 'right';
        const sneak = this.config.options.sneak[refDir] ? 'ON' : 'OFF';
        const interact = this.config.options.interact[refDir].mode;

        Chat.actionbar(
            `§eDist: ${this.totalDistance.toFixed(1)}m | Time: ${timeStr} | Dir: ${dir.toUpperCase()} | Sneak: ${sneak} | Int: ${interact}`
        );
    }

    private handleInputs(dir: Direction) {
        const refDir = dir === 'left' ? 'left' : 'right';

        // Movement Keys
        this.keys.right.set(dir === 'right');
        this.keys.left.set(dir === 'left');

        // Sneak
        this.keys.sneak.set(this.config.options.sneak[refDir]);

        // Interaction
        const interact = this.config.options.interact[refDir];
        const activeKey = interact.key === 'left' ? this.keys.mouseLeft : this.keys.mouseRight;
        const inactiveKey = interact.key === 'left' ? this.keys.mouseRight : this.keys.mouseLeft;

        inactiveKey.set(false);

        if (interact.mode === 'click') {
            const cps = interact.cps || 10;
            const delayMs = 1000 / cps;

            // Use generic object indexing to store last click time safely
            const lastClick = (this.lastClickTime as any)[refDir] || 0;

            if (Date.now() - lastClick >= delayMs) {
                // Perform a quick click
                if (activeKey.pressed) activeKey.release();
                else {
                    activeKey.hold();
                    (this.lastClickTime as any)[refDir] = Date.now();
                }
            }
        } else if (interact.mode === 'hold') {
            activeKey.set(true);
        } else {
            activeKey.set(false);
        }
    }
}

// =============================================================================
// Initialization
// =============================================================================

const strafer = new StrafingScript();
const antiAFK = new AntiAFK((active) => {
    if (active) strafer.pause();
    else strafer.resume();
});

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
        if (!['both', 'left', 'right'].includes(dir)) {
            Chat.log('§cInvalid direction.');
            return;
        }
        strafer.setSneak(ctx.getArg('state'), dir as Direction);
    });

const interactCmd = set.literal('interact');

interactCmd
    .literal('mode')
    .argument('mode', 'word')
    .suggestMatching(['hold', 'click', 'none'])
    .executes((ctx) => strafer.setInteract({ mode: ctx.getArg('mode') }))
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => strafer.setInteract({ mode: ctx.getArg('mode'), direction: ctx.getArg('direction') }));

interactCmd
    .literal('key')
    .argument('key', 'word')
    .suggestMatching(['left', 'right'])
    .executes((ctx) => strafer.setInteract({ key: ctx.getArg('key') }))
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => strafer.setInteract({ key: ctx.getArg('key'), direction: ctx.getArg('direction') }));

interactCmd
    .literal('cps')
    .argument('value', 'double')
    .executes((ctx) => strafer.setInteract({ cps: ctx.getArg('value') }))
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => strafer.setInteract({ cps: ctx.getArg('value'), direction: ctx.getArg('direction') }));

set.literal('pitch')
    .executes(() => strafer.setPitch({ pitch: null }))
    .argument('value', 'double')
    .executes((ctx) => strafer.setPitch({ pitch: ctx.getArg('value') }))
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => strafer.setPitch({ pitch: ctx.getArg('value'), direction: ctx.getArg('direction') }));

set.literal('threshold')
    .argument('value', 'double')
    .executes((ctx) => strafer.setDistanceThreshold(ctx.getArg('value')))
    .argument('direction', 'word')
    .suggestMatching(['both', 'left', 'right'])
    .executes((ctx) => strafer.setDistanceThreshold(ctx.getArg('value'), ctx.getArg('direction')));

strafe.register();

export default event;
