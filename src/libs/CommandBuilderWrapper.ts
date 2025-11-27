const CommandBuilder = Packages.xyz.wagyourtail.jsmacros.client.api.classes.inventory.CommandBuilder;

export type ArgumentType =
    | 'word'
    | 'greedy'
    | 'string'
    | 'boolean'
    | 'int'
    | 'intRange'
    | 'long'
    | 'double'
    | 'float'
    | 'floatRange'
    | 'uuid'
    | 'regex'
    | 'text'
    | 'time'
    | 'identifier'
    | 'nbt'
    | 'nbtElement'
    | 'nbtCompound'
    | 'color'
    | 'angle'
    | 'item'
    | 'itemStack'
    | 'itemPredicate'
    | 'block'
    | 'blockState'
    | 'blockPredicate'
    | 'blockPos'
    | 'columnPos'
    | 'dimension'
    | 'itemSlot'
    | 'particle';

export interface ArgumentOptions {
    min?: number;
    max?: number;
    regex?: string;
    flags?: string;
}

export abstract class CommandNode {
    protected children: CommandNode[] = [];
    protected execution?: (ctx: Events.CommandContext) => void;
    protected suggestionProvider?: (ctx: Events.CommandContext, builder: any) => void;
    protected matchingSuggestions?: string[];
    protected identifierSuggestions?: string[];
    protected blockPositionSuggestions?: any[]; // BlockPosHelper[]

    /**
     * Adds a child node to this command node.
     * @param node The child node to add.
     */
    then(node: CommandNode): this {
        this.children.push(node);
        return this;
    }

    /**
     * Helper to add a literal child.
     */
    literal(name: string): LiteralNode {
        const node = new LiteralNode(name);
        this.then(node);
        return node;
    }

    /**
     * Helper to add an argument child.
     */
    argument(name: string, type: ArgumentType, options?: ArgumentOptions): ArgumentNode {
        const node = new ArgumentNode(name, type, options);
        this.then(node);
        return node;
    }

    /**
     * Sets the execution handler for this node.
     */
    executes(callback: (ctx: Events.CommandContext) => void): this {
        this.execution = callback;
        return this;
    }

    /**
     * Sets a custom suggestion provider.
     */
    suggest(callback: (ctx: Events.CommandContext, builder: any) => void): this {
        this.suggestionProvider = callback;
        return this;
    }

    /**
     * Sets a list of constant suggestions.
     */
    suggestMatching(suggestions: string[]): this {
        this.matchingSuggestions = suggestions;
        return this;
    }

    /**
     * Sets a list of identifier suggestions.
     */
    suggestIdentifier(suggestions: string[]): this {
        this.identifierSuggestions = suggestions;
        return this;
    }

    /**
     * Sets a list of block position suggestions.
     */
    suggestBlockPositions(suggestions: any[]): this {
        this.blockPositionSuggestions = suggestions;
        return this;
    }

    abstract apply(builder: any): void;

    protected applyChildren(builder: any) {
        if (this.execution) {
            builder.executes(JavaWrapper.methodToJava(this.execution));
        }

        if (this.suggestionProvider) {
            builder.suggest(JavaWrapper.methodToJava(this.suggestionProvider));
        }

        if (this.matchingSuggestions) {
            builder.suggestMatching(this.matchingSuggestions);
        }

        if (this.identifierSuggestions) {
            builder.suggestIdentifier(this.identifierSuggestions);
        }

        if (this.blockPositionSuggestions) {
            builder.suggestBlockPositions(this.blockPositionSuggestions);
        }

        for (const child of this.children) {
            child.apply(builder);
        }
    }
}

export class LiteralNode extends CommandNode {
    constructor(private name: string) {
        super();
    }

    apply(builder: any) {
        builder.literalArg(this.name);
        this.applyChildren(builder);
        builder.or(); // Return to parent context after processing this branch
    }
}

export class ArgumentNode extends CommandNode {
    constructor(
        private name: string,
        private type: ArgumentType,
        private options?: ArgumentOptions
    ) {
        super();
    }

    apply(builder: any) {
        switch (this.type) {
            case 'word':
                builder.wordArg(this.name);
                break;
            case 'greedy':
                builder.greedyStringArg(this.name);
                break;
            case 'string':
                builder.quotedStringArg(this.name);
                break;
            case 'boolean':
                builder.booleanArg(this.name);
                break;

            case 'int':
                if (this.options?.min !== undefined || this.options?.max !== undefined)
                    builder.intArg(this.name, this.options.min ?? -2147483648, this.options.max ?? 2147483647);
                else builder.intArg(this.name);
                break;
            case 'intRange':
                builder.intRangeArg(this.name);
                break;

            case 'long':
                if (this.options?.min !== undefined || this.options?.max !== undefined)
                    builder.longArg(
                        this.name,
                        this.options.min ?? -9223372036854775808,
                        this.options.max ?? 9223372036854775807
                    );
                else builder.longArg(this.name);
                break;

            case 'double':
                if (this.options?.min !== undefined || this.options?.max !== undefined)
                    builder.doubleArg(
                        this.name,
                        this.options.min ?? -Number.MAX_VALUE,
                        this.options.max ?? Number.MAX_VALUE
                    );
                else builder.doubleArg(this.name);
                break;

            case 'float':
                builder.floatArg(this.name);
                break; // Assuming floatArg exists in API if double does, or fallback to double logic? Wrapper had floatRangeArg.
            case 'floatRange':
                builder.floatRangeArg(this.name);
                break;

            case 'uuid':
                builder.uuidArgType(this.name);
                break;

            case 'regex':
                if (this.options?.regex) {
                    builder.regexArgType(this.name, this.options.regex, this.options.flags ?? '');
                } else {
                    // Fallback or error? Default to word if no regex provided is safer than crashing.
                    builder.wordArg(this.name);
                }
                break;

            case 'text':
                builder.textArgType(this.name);
                break;
            case 'time':
                builder.timeArg(this.name);
                break;
            case 'identifier':
                builder.identifierArg(this.name);
                break;
            case 'nbt':
                builder.nbtArg(this.name);
                break;
            case 'nbtElement':
                builder.nbtElementArg(this.name);
                break;
            case 'nbtCompound':
                builder.nbtCompoundArg(this.name);
                break;
            case 'color':
                builder.colorArg(this.name);
                break;
            case 'angle':
                builder.angleArg(this.name);
                break;
            case 'item':
                builder.itemArg(this.name);
                break;
            case 'itemStack':
                builder.itemStackArg(this.name);
                break;
            case 'itemPredicate':
                builder.itemPredicateArg(this.name);
                break;
            case 'block':
                builder.blockArg(this.name);
                break;
            case 'blockState':
                builder.blockStateArg(this.name);
                break;
            case 'blockPredicate':
                builder.blockPredicateArg(this.name);
                break;
            case 'blockPos':
                builder.blockPosArg(this.name);
                break;
            case 'columnPos':
                builder.columnPosArg(this.name);
                break;
            case 'dimension':
                builder.dimensionArg(this.name);
                break;
            case 'itemSlot':
                builder.itemSlotArg(this.name);
                break;
            case 'particle':
                builder.particleArg(this.name);
                break;

            default:
                builder.wordArg(this.name);
        }
        this.applyChildren(builder);
        builder.or(); // Return to parent context
    }
}

export class RootNode extends CommandNode {
    private builder: any;

    constructor(name: string) {
        super();
        this.builder = Chat.getCommandManager().createCommandBuilder(name);
    }

    apply(builder: any) {
        // Root execution is applied directly to the root builder
        this.applyChildren(this.builder);
    }

    register() {
        this.apply(null);
        this.builder.register();
    }
}

export class CommandManager {
    static create(name: string): RootNode {
        Chat.getCommandManager().unregisterCommand(name);
        return new RootNode(name);
    }
}
