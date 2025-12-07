import Config from '../libs/Config';
import { CommandManager } from '../libs/CommandBuilderWrapper';

interface AutoClickerConfig {
    enabled: boolean;
    cps: number;
}

export class AutoClicker {
    private readonly configPath = './config/jayc331-config.json';
    private readonly scriptId = 'autoClicker';
    private readonly defaultConfig: AutoClickerConfig = {
        enabled: false,
        cps: 10,
    };

    private config: AutoClickerConfig;
    private nextClickTime = 0;
    private isKeyHeld = false;

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
        if (!this.config.enabled) {
            this.releaseKey();
            return;
        }
        if (Hud.getOpenScreen()) {
            this.releaseKey();
            return;
        }

        if (KeyBind.getPressedKeys().contains('key.mouse.left')) {
            const now = Date.now();
            if (now >= this.nextClickTime) {
                // Press the key
                KeyBind.key('key.mouse.right', true);
                this.isKeyHeld = true;

                const baseDelay = 1000 / this.config.cps;
                // Add +/- 20% randomness
                const variance = baseDelay * 0.2;
                const random = Math.random() * (variance * 2) - variance;

                this.nextClickTime = now + baseDelay + random;
            } else {
                // Release between clicks to respect CPS
                this.releaseKey();
            }
        } else {
            this.releaseKey();
            this.nextClickTime = 0;
        }
    }

    private releaseKey() {
        if (this.isKeyHeld) {
            KeyBind.key('key.mouse.right', false);
            this.isKeyHeld = false;
        }
    }

    private saveConfig() {
        Config.writeConfig(this.configPath, this.config, this.scriptId);
    }

    private registerCommands() {
        const cmd = CommandManager.create('autoclicker');

        cmd.literal('toggle').executes(() => {
            this.config.enabled = !this.config.enabled;
            this.saveConfig();
            Chat.log(`§7AutoClicker is now ${this.config.enabled ? '§aENABLED' : '§cDISABLED'}`);
        });

        cmd.literal('cps')
            .argument('value', 'int')
            .executes((ctx) => {
                const cps = ctx.getArg('value');
                this.config.cps = cps;
                this.saveConfig();
                Chat.log(`§7AutoClicker CPS set to §a${cps}`);
            });

        cmd.register();
    }
}
