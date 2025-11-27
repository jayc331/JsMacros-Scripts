export class Key {
    #key: string;

    constructor(key: string) {
        this.#key = key;
    }

    public get key(): string {
        return this.#key;
    }

    public get pressed(): boolean {
        return KeyBind.getPressedKeys().contains(this.key);
    }

    public set(state: boolean) {
        if (this.pressed !== !!state) {
            KeyBind.key(this.key, !!state);
        }
    }

    public click() {
        this.set(true);
        this.set(false);
    }

    public hold() {
        if (!this.pressed) this.set(true);
    }

    public release() {
        this.set(false);
    }
}
