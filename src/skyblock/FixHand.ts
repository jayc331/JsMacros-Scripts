import Config from '../libs/Config';
import { CommandManager } from '../libs/CommandBuilderWrapper';

interface FixHandConfig {
    enabled: boolean;
    threshold: number;
}

export class FixHand {
    private readonly configPath = './config/jayc331-config.json';
    private readonly scriptId = 'fixHand';
    private readonly defaultConfig: FixHandConfig = {
        enabled: true,
        threshold: 0.2,
    };

    private config: FixHandConfig;
    private lastFixTime = 0;

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

        // 5 seconds cooldown to prevent spamming the command
        if (Date.now() - this.lastFixTime < 5000) return;

        const player = Player.getPlayer();
        if (!player) return;

        const item = player.getMainHand();
        if (!item || item.isEmpty()) return;

        const maxDamage = item.getMaxDamage();
        // If maxDamage is 0 or less, the item is likely not damageable (or unbreakable)
        if (maxDamage <= 0) return;

        const currentDamage = item.getDamage();
        const currentDurability = maxDamage - currentDamage;
        const ratio = currentDurability / maxDamage;

        if (ratio < this.config.threshold) {
            Chat.log(`§aFixHand: §7Durability at ${(ratio * 100).toFixed(1)}%, fixing...`);
            Chat.say('/fix hand');
            this.lastFixTime = Date.now();
        }
    }

    private saveConfig() {
        Config.writeConfig(this.configPath, this.config, this.scriptId);
    }

    private registerCommands() {
        const cmd = CommandManager.create('fixhand');

        cmd.literal('toggle').executes(() => {
            this.config.enabled = !this.config.enabled;
            this.saveConfig();
            Chat.log(`§7FixHand is now ${this.config.enabled ? '§aENABLED' : '§cDISABLED'}`);
        });

        cmd.literal('threshold')
            .argument('percent', 'double') // Expecting 0.0 - 1.0 or percentage? Usually 0.2 for 20%
            .executes((ctx) => {
                let val = ctx.getArg('percent');
                // Optional: normalize if user enters 20 instead of 0.2
                if (val > 1) val = val / 100;

                this.config.threshold = val;
                this.saveConfig();
                Chat.log(`§7FixHand threshold set to §a${(val * 100).toFixed(1)}%`);
            });

        cmd.register();
    }
}
