import Config from '../libs/Config';
import { CommandManager } from '../libs/CommandBuilderWrapper';

interface TriggerBotConfig {
    enabled: boolean;
    reach: number;
    cooldownThreshold: number;
}

export class TriggerBot {
    private readonly configPath = './config/jayc331-config.json';
    private readonly scriptId = 'triggerBot';
    private readonly defaultConfig: TriggerBotConfig = {
        enabled: false,
        reach: 4.5,
        cooldownThreshold: 0.9,
    };

    private config: TriggerBotConfig;

    constructor() {
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
        if (!this.config.enabled) return;
        if (Hud.getOpenScreen()) return;

        const player = Player.getPlayer();
        if (!player) return;

        // Check cooldown against configured threshold
        if (player.getAttackCooldownProgress() < this.config.cooldownThreshold) return;

        // Use a slightly larger integer for the raytrace to ensure we catch entities at the fractional boundary
        // then verify distance if needed, but usually rayTraceEntity handles the intersection correctly.
        // We pass the float; JsMacros/Java usually handles Number -> int/double conversion or the method supports double.
        // If the method strictly cuts off at int, Math.ceil ensures we cover the range.
        const traceDist = Math.ceil(this.config.reach);
        const target = player.rayTraceEntity(traceDist);

        if (target) {
            player.attack(target);
        }
    }

    private saveConfig() {
        Config.writeConfig(this.configPath, this.config, this.scriptId);
    }

    private registerCommands() {
        const cmd = CommandManager.create('triggerbot');

        cmd.literal('toggle').executes(() => {
            this.config.enabled = !this.config.enabled;
            this.saveConfig();
            Chat.log(`§7TriggerBot is now ${this.config.enabled ? '§aENABLED' : '§cDISABLED'}`);
        });

        cmd.literal('reach')
            .argument('value', 'double')
            .executes((ctx) => {
                const val = ctx.getArg('value');
                this.config.reach = val;
                this.saveConfig();
                Chat.log(`§7TriggerBot reach set to §a${val}`);
            });

        cmd.literal('cooldown')
            .argument('threshold', 'double')
            .executes((ctx) => {
                const val = ctx.getArg('threshold');
                this.config.cooldownThreshold = val;
                this.saveConfig();
                Chat.log(`§7TriggerBot cooldown threshold set to §a${val}`);
            });

        cmd.register();
    }
}
