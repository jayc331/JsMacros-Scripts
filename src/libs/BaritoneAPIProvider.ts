/// <reference path="../../headers/baritone.d.ts" />
// @ts-nocheck
// Type checking disabled for this file due to namespace resolution issues with global 'event' variable
// Type annotations are preserved for proper typing when importing from this module

// Helper library to expose Baritone API types as Java.type constants
// Generated from baritone.d.ts

const AbstractGameEventListener = Java.type("baritone.api.event.listener.AbstractGameEventListener") as typeof baritone.api.event.listener.AbstractGameEventListener;
const AbstractSchematic = Java.type("baritone.api.schematic.AbstractSchematic") as typeof baritone.api.schematic.AbstractSchematic;
const ActionCosts = Java.type("baritone.api.pathing.movement.ActionCosts") as typeof baritone.api.pathing.movement.ActionCosts;
const BaritoneAPI = Java.type("baritone.api.BaritoneAPI") as typeof baritone.api.BaritoneAPI;
const BetterBlockPos = Java.type("baritone.api.utils.BetterBlockPos") as typeof baritone.api.utils.BetterBlockPos;
const BlockById: typeof baritone.api.command.datatypes.BlockById = Java.type("baritone.api.command.datatypes.BlockById");
const BlockChangeEvent: typeof baritone.api.event.events.BlockChangeEvent = Java.type("baritone.api.event.events.BlockChangeEvent");
const BlockInteractEvent: typeof baritone.api.event.events.BlockInteractEvent = Java.type("baritone.api.event.events.BlockInteractEvent");
const BlockInteractEvent$Type: typeof baritone.api.event.events.BlockInteractEvent$Type = Java.type("baritone.api.event.events.BlockInteractEvent$Type");
const BlockOptionalMeta: typeof baritone.api.utils.BlockOptionalMeta = Java.type("baritone.api.utils.BlockOptionalMeta");
const BlockOptionalMetaLookup: typeof baritone.api.utils.BlockOptionalMetaLookup = Java.type("baritone.api.utils.BlockOptionalMetaLookup");
const BlockUtils: typeof baritone.api.utils.BlockUtils = Java.type("baritone.api.utils.BlockUtils");
const Cancellable: typeof baritone.api.event.events.type.Cancellable = Java.type("baritone.api.event.events.type.Cancellable");
const ChatEvent: typeof baritone.api.event.events.ChatEvent = Java.type("baritone.api.event.events.ChatEvent");
const ChunkEvent: typeof baritone.api.event.events.ChunkEvent = Java.type("baritone.api.event.events.ChunkEvent");
const ChunkEvent$Type: typeof baritone.api.event.events.ChunkEvent$Type = Java.type("baritone.api.event.events.ChunkEvent$Type");
const Command: typeof baritone.api.command.Command = Java.type("baritone.api.command.Command");
const CompositeSchematic: typeof baritone.api.schematic.CompositeSchematic = Java.type("baritone.api.schematic.CompositeSchematic");
const EntityClassById: typeof baritone.api.command.datatypes.EntityClassById = Java.type("baritone.api.command.datatypes.EntityClassById");
const EventState: typeof baritone.api.event.events.type.EventState = Java.type("baritone.api.event.events.type.EventState");
const FillSchematic: typeof baritone.api.schematic.FillSchematic = Java.type("baritone.api.schematic.FillSchematic");
const ForAxis: typeof baritone.api.command.datatypes.ForAxis = Java.type("baritone.api.command.datatypes.ForAxis");
const ForBlockOptionalMeta: typeof baritone.api.command.datatypes.ForBlockOptionalMeta = Java.type("baritone.api.command.datatypes.ForBlockOptionalMeta");
const ForDirection: typeof baritone.api.command.datatypes.ForDirection = Java.type("baritone.api.command.datatypes.ForDirection");
const ForWaypoints: typeof baritone.api.command.datatypes.ForWaypoints = Java.type("baritone.api.command.datatypes.ForWaypoints");
const Goal: typeof baritone.api.pathing.goals.Goal = Java.type("baritone.api.pathing.goals.Goal");
const GoalAxis: typeof baritone.api.pathing.goals.GoalAxis = Java.type("baritone.api.pathing.goals.GoalAxis");
const GoalBlock: typeof baritone.api.pathing.goals.GoalBlock = Java.type("baritone.api.pathing.goals.GoalBlock");
const GoalComposite: typeof baritone.api.pathing.goals.GoalComposite = Java.type("baritone.api.pathing.goals.GoalComposite");
const GoalGetToBlock: typeof baritone.api.pathing.goals.GoalGetToBlock = Java.type("baritone.api.pathing.goals.GoalGetToBlock");
const GoalInverted: typeof baritone.api.pathing.goals.GoalInverted = Java.type("baritone.api.pathing.goals.GoalInverted");
const GoalNear: typeof baritone.api.pathing.goals.GoalNear = Java.type("baritone.api.pathing.goals.GoalNear");
const GoalRunAway: typeof baritone.api.pathing.goals.GoalRunAway = Java.type("baritone.api.pathing.goals.GoalRunAway");
const GoalStrictDirection: typeof baritone.api.pathing.goals.GoalStrictDirection = Java.type("baritone.api.pathing.goals.GoalStrictDirection");
const GoalTwoBlocks: typeof baritone.api.pathing.goals.GoalTwoBlocks = Java.type("baritone.api.pathing.goals.GoalTwoBlocks");
const GoalXZ: typeof baritone.api.pathing.goals.GoalXZ = Java.type("baritone.api.pathing.goals.GoalXZ");
const GoalYLevel: typeof baritone.api.pathing.goals.GoalYLevel = Java.type("baritone.api.pathing.goals.GoalYLevel");
const Helper: typeof baritone.api.utils.Helper = Java.type("baritone.api.utils.Helper");
const IAimProcessor: typeof baritone.api.behavior.look.IAimProcessor = Java.type("baritone.api.behavior.look.IAimProcessor");
const IArgConsumer: typeof baritone.api.command.argument.IArgConsumer = Java.type("baritone.api.command.argument.IArgConsumer");
const IArgParser: typeof baritone.api.command.argparser.IArgParser = Java.type("baritone.api.command.argparser.IArgParser");
const IArgParserManager: typeof baritone.api.command.argparser.IArgParserManager = Java.type("baritone.api.command.argparser.IArgParserManager");
const IBaritone: typeof baritone.api.IBaritone = Java.type("baritone.api.IBaritone");
const IBaritoneChatControl: typeof baritone.api.command.IBaritoneChatControl = Java.type("baritone.api.command.IBaritoneChatControl");
const IBaritoneProcess: typeof baritone.api.process.IBaritoneProcess = Java.type("baritone.api.process.IBaritoneProcess");
const IBaritoneProvider: typeof baritone.api.IBaritoneProvider = Java.type("baritone.api.IBaritoneProvider");
const IBehavior: typeof baritone.api.behavior.IBehavior = Java.type("baritone.api.behavior.IBehavior");
const IBlockTypeAccess: typeof baritone.api.cache.IBlockTypeAccess = Java.type("baritone.api.cache.IBlockTypeAccess");
const IBuilderProcess: typeof baritone.api.process.IBuilderProcess = Java.type("baritone.api.process.IBuilderProcess");
const ICachedRegion: typeof baritone.api.cache.ICachedRegion = Java.type("baritone.api.cache.ICachedRegion");
const ICachedWorld: typeof baritone.api.cache.ICachedWorld = Java.type("baritone.api.cache.ICachedWorld");
const ICancellable: typeof baritone.api.event.events.type.ICancellable = Java.type("baritone.api.event.events.type.ICancellable");
const ICommand: typeof baritone.api.command.ICommand = Java.type("baritone.api.command.ICommand");
const ICommandArgument: typeof baritone.api.command.argument.ICommandArgument = Java.type("baritone.api.command.argument.ICommandArgument");
const ICommandManager: typeof baritone.api.command.manager.ICommandManager = Java.type("baritone.api.command.manager.ICommandManager");
const ICommandSystem: typeof baritone.api.command.ICommandSystem = Java.type("baritone.api.command.ICommandSystem");
const ICustomGoalProcess: typeof baritone.api.process.ICustomGoalProcess = Java.type("baritone.api.process.ICustomGoalProcess");
const IDatatype: typeof baritone.api.command.datatypes.IDatatype = Java.type("baritone.api.command.datatypes.IDatatype");
const IDatatypeContext: typeof baritone.api.command.datatypes.IDatatypeContext = Java.type("baritone.api.command.datatypes.IDatatypeContext");
const IDatatypeFor: typeof baritone.api.command.datatypes.IDatatypeFor = Java.type("baritone.api.command.datatypes.IDatatypeFor");
const IDatatypePost: typeof baritone.api.command.datatypes.IDatatypePost = Java.type("baritone.api.command.datatypes.IDatatypePost");
const IDatatypePostFunction: typeof baritone.api.command.datatypes.IDatatypePostFunction = Java.type("baritone.api.command.datatypes.IDatatypePostFunction");
const IElytraProcess: typeof baritone.api.process.IElytraProcess = Java.type("baritone.api.process.IElytraProcess");
const IEventBus: typeof baritone.api.event.listener.IEventBus = Java.type("baritone.api.event.listener.IEventBus");
const IExploreProcess: typeof baritone.api.process.IExploreProcess = Java.type("baritone.api.process.IExploreProcess");
const IFarmProcess: typeof baritone.api.process.IFarmProcess = Java.type("baritone.api.process.IFarmProcess");
const IFollowProcess: typeof baritone.api.process.IFollowProcess = Java.type("baritone.api.process.IFollowProcess");
const IGameEventListener: typeof baritone.api.event.listener.IGameEventListener = Java.type("baritone.api.event.listener.IGameEventListener");
const IGetToBlockProcess: typeof baritone.api.process.IGetToBlockProcess = Java.type("baritone.api.process.IGetToBlockProcess");
const IGoalRenderPos: typeof baritone.api.utils.interfaces.IGoalRenderPos = Java.type("baritone.api.utils.interfaces.IGoalRenderPos");
const IInputOverrideHandler: typeof baritone.api.utils.IInputOverrideHandler = Java.type("baritone.api.utils.IInputOverrideHandler");
const ILookBehavior: typeof baritone.api.behavior.ILookBehavior = Java.type("baritone.api.behavior.ILookBehavior");
const IMineProcess: typeof baritone.api.process.IMineProcess = Java.type("baritone.api.process.IMineProcess");
const IMovement: typeof baritone.api.pathing.movement.IMovement = Java.type("baritone.api.pathing.movement.IMovement");
const IPath: typeof baritone.api.pathing.calc.IPath = Java.type("baritone.api.pathing.calc.IPath");
const IPathExecutor: typeof baritone.api.pathing.path.IPathExecutor = Java.type("baritone.api.pathing.path.IPathExecutor");
const IPathFinder: typeof baritone.api.pathing.calc.IPathFinder = Java.type("baritone.api.pathing.calc.IPathFinder");
const IPathingBehavior: typeof baritone.api.behavior.IPathingBehavior = Java.type("baritone.api.behavior.IPathingBehavior");
const IPathingControlManager: typeof baritone.api.pathing.calc.IPathingControlManager = Java.type("baritone.api.pathing.calc.IPathingControlManager");
const IPlayerContext: typeof baritone.api.utils.IPlayerContext = Java.type("baritone.api.utils.IPlayerContext");
const IPlayerController: typeof baritone.api.utils.IPlayerController = Java.type("baritone.api.utils.IPlayerController");
const ISchematic: typeof baritone.api.schematic.ISchematic = Java.type("baritone.api.schematic.ISchematic");
const ISchematicFormat: typeof baritone.api.schematic.format.ISchematicFormat = Java.type("baritone.api.schematic.format.ISchematicFormat");
const ISchematicSystem: typeof baritone.api.schematic.ISchematicSystem = Java.type("baritone.api.schematic.ISchematicSystem");
const ISelection: typeof baritone.api.selection.ISelection = Java.type("baritone.api.selection.ISelection");
const ISelectionManager: typeof baritone.api.selection.ISelectionManager = Java.type("baritone.api.selection.ISelectionManager");
const IStaticSchematic: typeof baritone.api.schematic.IStaticSchematic = Java.type("baritone.api.schematic.IStaticSchematic");
const ITickableAimProcessor: typeof baritone.api.behavior.look.ITickableAimProcessor = Java.type("baritone.api.behavior.look.ITickableAimProcessor");
const IWaypoint: typeof baritone.api.cache.IWaypoint = Java.type("baritone.api.cache.IWaypoint");
const IWaypoint$Tag: typeof baritone.api.cache.IWaypoint$Tag = Java.type("baritone.api.cache.IWaypoint$Tag");
const IWaypointCollection: typeof baritone.api.cache.IWaypointCollection = Java.type("baritone.api.cache.IWaypointCollection");
const IWorldData: typeof baritone.api.cache.IWorldData = Java.type("baritone.api.cache.IWorldData");
const IWorldProvider: typeof baritone.api.cache.IWorldProvider = Java.type("baritone.api.cache.IWorldProvider");
const IWorldScanner: typeof baritone.api.cache.IWorldScanner = Java.type("baritone.api.cache.IWorldScanner");
const Input: typeof baritone.api.utils.input.Input = Java.type("baritone.api.utils.input.Input");
const ItemById: typeof baritone.api.command.datatypes.ItemById = Java.type("baritone.api.command.datatypes.ItemById");
const Mask: typeof baritone.api.schematic.mask.Mask = Java.type("baritone.api.schematic.mask.Mask");
const MaskSchematic: typeof baritone.api.schematic.MaskSchematic = Java.type("baritone.api.schematic.MaskSchematic");
const MirroredSchematic: typeof baritone.api.schematic.MirroredSchematic = Java.type("baritone.api.schematic.MirroredSchematic");
const MovementStatus: typeof baritone.api.pathing.movement.MovementStatus = Java.type("baritone.api.pathing.movement.MovementStatus");
const NearbyPlayer: typeof baritone.api.command.datatypes.NearbyPlayer = Java.type("baritone.api.command.datatypes.NearbyPlayer");
const NotificationHelper: typeof baritone.api.utils.NotificationHelper = Java.type("baritone.api.utils.NotificationHelper");
const Overrideable: typeof baritone.api.event.events.type.Overrideable = Java.type("baritone.api.event.events.type.Overrideable");
const PacketEvent: typeof baritone.api.event.events.PacketEvent = Java.type("baritone.api.event.events.PacketEvent");
const PathCalculationResult: typeof baritone.api.utils.PathCalculationResult = Java.type("baritone.api.utils.PathCalculationResult");
const PathEvent: typeof baritone.api.event.events.PathEvent = Java.type("baritone.api.event.events.PathEvent");
const PathingCommand: typeof baritone.api.process.PathingCommand = Java.type("baritone.api.process.PathingCommand");
const PathingCommandType: typeof baritone.api.process.PathingCommandType = Java.type("baritone.api.process.PathingCommandType");
const PlayerUpdateEvent: typeof baritone.api.event.events.PlayerUpdateEvent = Java.type("baritone.api.event.events.PlayerUpdateEvent");
const RayTraceUtils: typeof baritone.api.utils.RayTraceUtils = Java.type("baritone.api.utils.RayTraceUtils");
const Registry: typeof baritone.api.command.registry.Registry = Java.type("baritone.api.command.registry.Registry");
const RelativeBlockPos: typeof baritone.api.command.datatypes.RelativeBlockPos = Java.type("baritone.api.command.datatypes.RelativeBlockPos");
const RelativeCoordinate: typeof baritone.api.command.datatypes.RelativeCoordinate = Java.type("baritone.api.command.datatypes.RelativeCoordinate");
const RelativeFile: typeof baritone.api.command.datatypes.RelativeFile = Java.type("baritone.api.command.datatypes.RelativeFile");
const RelativeGoal: typeof baritone.api.command.datatypes.RelativeGoal = Java.type("baritone.api.command.datatypes.RelativeGoal");
const RelativeGoalBlock: typeof baritone.api.command.datatypes.RelativeGoalBlock = Java.type("baritone.api.command.datatypes.RelativeGoalBlock");
const RelativeGoalXZ: typeof baritone.api.command.datatypes.RelativeGoalXZ = Java.type("baritone.api.command.datatypes.RelativeGoalXZ");
const RelativeGoalYLevel: typeof baritone.api.command.datatypes.RelativeGoalYLevel = Java.type("baritone.api.command.datatypes.RelativeGoalYLevel");
const RenderEvent: typeof baritone.api.event.events.RenderEvent = Java.type("baritone.api.event.events.RenderEvent");
const ReplaceSchematic: typeof baritone.api.schematic.ReplaceSchematic = Java.type("baritone.api.schematic.ReplaceSchematic");
const RotatedSchematic: typeof baritone.api.schematic.RotatedSchematic = Java.type("baritone.api.schematic.RotatedSchematic");
const Rotation: typeof baritone.api.utils.Rotation = Java.type("baritone.api.utils.Rotation");
const RotationMoveEvent: typeof baritone.api.event.events.RotationMoveEvent = Java.type("baritone.api.event.events.RotationMoveEvent");
const RotationMoveEvent$Type: typeof baritone.api.event.events.RotationMoveEvent$Type = Java.type("baritone.api.event.events.RotationMoveEvent$Type");
const RotationUtils: typeof baritone.api.utils.RotationUtils = Java.type("baritone.api.utils.RotationUtils");
const Settings: typeof baritone.api.Settings = Java.type("baritone.api.Settings");
const Settings$Setting: typeof baritone.api.Settings$Setting = Java.type("baritone.api.Settings$Setting");
const SettingsUtil: typeof baritone.api.utils.SettingsUtil = Java.type("baritone.api.utils.SettingsUtil");
const ShellSchematic: typeof baritone.api.schematic.ShellSchematic = Java.type("baritone.api.schematic.ShellSchematic");
const SprintStateEvent: typeof baritone.api.event.events.SprintStateEvent = Java.type("baritone.api.event.events.SprintStateEvent");
const StaticMask: typeof baritone.api.schematic.mask.StaticMask = Java.type("baritone.api.schematic.mask.StaticMask");
const SubstituteSchematic: typeof baritone.api.schematic.SubstituteSchematic = Java.type("baritone.api.schematic.SubstituteSchematic");
const TabCompleteEvent: typeof baritone.api.event.events.TabCompleteEvent = Java.type("baritone.api.event.events.TabCompleteEvent");
const TickEvent: typeof baritone.api.event.events.TickEvent = Java.type("baritone.api.event.events.TickEvent");
const TickEvent$Type: typeof baritone.api.event.events.TickEvent$Type = Java.type("baritone.api.event.events.TickEvent$Type");
const VecUtils: typeof baritone.api.utils.VecUtils = Java.type("baritone.api.utils.VecUtils");
const WallsSchematic: typeof baritone.api.schematic.WallsSchematic = Java.type("baritone.api.schematic.WallsSchematic");
const Waypoint: typeof baritone.api.cache.Waypoint = Java.type("baritone.api.cache.Waypoint");
const WorldEvent: typeof baritone.api.event.events.WorldEvent = Java.type("baritone.api.event.events.WorldEvent");

export {
    AbstractGameEventListener,
    AbstractSchematic,
    ActionCosts,
    BaritoneAPI,
    BetterBlockPos,
    BlockById,
    BlockChangeEvent,
    BlockInteractEvent,
    BlockInteractEvent$Type,
    BlockOptionalMeta,
    BlockOptionalMetaLookup,
    BlockUtils,
    Cancellable,
    ChatEvent,
    ChunkEvent,
    ChunkEvent$Type,
    Command,
    CompositeSchematic,
    EntityClassById,
    EventState,
    FillSchematic,
    ForAxis,
    ForBlockOptionalMeta,
    ForDirection,
    ForWaypoints,
    Goal,
    GoalAxis,
    GoalBlock,
    GoalComposite,
    GoalGetToBlock,
    GoalInverted,
    GoalNear,
    GoalRunAway,
    GoalStrictDirection,
    GoalTwoBlocks,
    GoalXZ,
    GoalYLevel,
    Helper,
    IAimProcessor,
    IArgConsumer,
    IArgParser,
    IArgParserManager,
    IBaritone,
    IBaritoneChatControl,
    IBaritoneProcess,
    IBaritoneProvider,
    IBehavior,
    IBlockTypeAccess,
    IBuilderProcess,
    ICachedRegion,
    ICachedWorld,
    ICancellable,
    ICommand,
    ICommandArgument,
    ICommandManager,
    ICommandSystem,
    ICustomGoalProcess,
    IDatatype,
    IDatatypeContext,
    IDatatypeFor,
    IDatatypePost,
    IDatatypePostFunction,
    IElytraProcess,
    IEventBus,
    IExploreProcess,
    IFarmProcess,
    IFollowProcess,
    IGameEventListener,
    IGetToBlockProcess,
    IGoalRenderPos,
    IInputOverrideHandler,
    ILookBehavior,
    IMineProcess,
    IMovement,
    IPath,
    IPathExecutor,
    IPathFinder,
    IPathingBehavior,
    IPathingControlManager,
    IPlayerContext,
    IPlayerController,
    ISchematic,
    ISchematicFormat,
    ISchematicSystem,
    ISelection,
    ISelectionManager,
    IStaticSchematic,
    ITickableAimProcessor,
    IWaypoint,
    IWaypoint$Tag,
    IWaypointCollection,
    IWorldData,
    IWorldProvider,
    IWorldScanner,
    Input,
    ItemById,
    Mask,
    MaskSchematic,
    MirroredSchematic,
    MovementStatus,
    NearbyPlayer,
    NotificationHelper,
    Overrideable,
    PacketEvent,
    PathCalculationResult,
    PathEvent,
    PathingCommand,
    PathingCommandType,
    PlayerUpdateEvent,
    RayTraceUtils,
    Registry,
    RelativeBlockPos,
    RelativeCoordinate,
    RelativeFile,
    RelativeGoal,
    RelativeGoalBlock,
    RelativeGoalXZ,
    RelativeGoalYLevel,
    RenderEvent,
    ReplaceSchematic,
    RotatedSchematic,
    Rotation,
    RotationMoveEvent,
    RotationMoveEvent$Type,
    RotationUtils,
    Settings,
    Settings$Setting,
    SettingsUtil,
    ShellSchematic,
    SprintStateEvent,
    StaticMask,
    SubstituteSchematic,
    TabCompleteEvent,
    TickEvent,
    TickEvent$Type,
    VecUtils,
    WallsSchematic,
    Waypoint,
    WorldEvent,
};