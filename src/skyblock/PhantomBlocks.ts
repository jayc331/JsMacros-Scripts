import Config from '../libs/Config';
import { CommandManager } from '../libs/CommandBuilderWrapper';

interface PhantomBlocksConfig {
    enabled: boolean;
    range: number;
}

export class PhantomBlocks {
    private readonly configPath = './config/jayc331-config.json';
    private readonly scriptId = 'phantomBlocks';

    private readonly defaultConfig: PhantomBlocksConfig = {
        enabled: true,
        range: 4.5,
    };

    private config: PhantomBlocksConfig;

    constructor() {
        this.config = Config.readConfig(this.configPath, { ...this.defaultConfig }, this.scriptId);
        this.registerListeners();
        this.registerCommands();
    }

    private registerListeners() {
        JsMacros.on(
            'Tick',
            JavaWrapper.methodToJava((event) => this.onTick(event as Events.Tick))
        );
    }

    private onTick(event: Events.Tick) {
        if (!this.config.enabled) return;

        const player = Player.getPlayer();
        if (!player) return;

        // 1.0 means fully charged attack indicator
        // if (player.getAttackCooldownProgress() < 1.0) return;

        const pPos = player.getPos();
        const entities = World.getEntities();

        let target = null;
        let minDst = this.config.range;

        for (let i = 0; i < entities.size(); i++) {
            const entity = entities.get(i);
            // Check if entity is alive and is a Vex
            // entity.getType() returns string like 'minecraft:vex'
            if (entity.getType() === 'minecraft:vex') {
                const ePos = entity.getPos();
                const dst = Math.sqrt(
                    Math.pow(pPos.getX() - ePos.getX(), 2) +
                        Math.pow(pPos.getY() - ePos.getY(), 2) +
                        Math.pow(pPos.getZ() - ePos.getZ(), 2)
                );

                if (dst <= minDst) {
                    minDst = dst;
                    target = entity;
                }
            }
        }

        if (target) {
            const originalYaw = player.getYaw();
            const originalPitch = player.getPitch();

            const eyePos = target.getEyePos();
            player.lookAt(eyePos.x, eyePos.y, eyePos.z);
            player.attack(target);

            player.lookAt(originalYaw, originalPitch);
        }
    }

    private saveConfig() {
        Config.writeConfig(this.configPath, this.config, this.scriptId);
    }

    private registerCommands() {
        const cmd = CommandManager.create('ghostpickaxe');

        cmd.literal('toggle').executes(() => {
            this.config.enabled = !this.config.enabled;
            this.saveConfig();
            Chat.log(`§7PhantomBlocks is now ${this.config.enabled ? '§aENABLED' : '§cDISABLED'}`);
        });

        cmd.literal('range')
            .argument('range', 'double')
            .executes((ctx) => {
                const range = ctx.getArg('range');
                this.config.range = range;
                this.saveConfig();
                Chat.log(`§7PhantomBlocks range set to §a${range}`);
            });

        cmd.register();
    }
}
