// Type Definitions for Baritone (Generated)

declare namespace baritone.api {

class BaritoneAPI/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	static getProvider(  ):IBaritoneProvider;
	static getSettings(  ):Settings;
	toString(  ):string;

} // end BaritoneAPI

} // end namespace baritone.api

declare namespace baritone.api {

interface IBaritone {

	getBuilderProcess(  ):baritone.api.process.IBuilderProcess;
	getCommandManager(  ):baritone.api.command.manager.ICommandManager;
	getCustomGoalProcess(  ):baritone.api.process.ICustomGoalProcess;
	getElytraProcess(  ):baritone.api.process.IElytraProcess;
	getExploreProcess(  ):baritone.api.process.IExploreProcess;
	getFarmProcess(  ):baritone.api.process.IFarmProcess;
	getFollowProcess(  ):baritone.api.process.IFollowProcess;
	getGameEventHandler(  ):baritone.api.event.listener.IEventBus;
	getGetToBlockProcess(  ):baritone.api.process.IGetToBlockProcess;
	getInputOverrideHandler(  ):baritone.api.utils.IInputOverrideHandler;
	getLookBehavior(  ):baritone.api.behavior.ILookBehavior;
	getMineProcess(  ):baritone.api.process.IMineProcess;
	getPathingBehavior(  ):baritone.api.behavior.IPathingBehavior;
	getPathingControlManager(  ):baritone.api.pathing.calc.IPathingControlManager;
	getPlayerContext(  ):baritone.api.utils.IPlayerContext;
	getSelectionManager(  ):baritone.api.selection.ISelectionManager;
	getWorldProvider(  ):baritone.api.cache.IWorldProvider;
	openClick(  ):void;

} // end IBaritone

} // end namespace baritone.api

declare namespace baritone.api {

interface IBaritoneProvider {

	createBaritone( arg0:net.minecraft.client.MinecraftClient ):IBaritone;
	destroyBaritone( arg0:IBaritone ):boolean;
	getAllBaritones(  ):java.util.List<IBaritone>;
	getBaritoneForConnection( arg0:net.minecraft.client.network.ClientPlayNetworkHandler ):IBaritone;
	getBaritoneForMinecraft( arg0:net.minecraft.client.MinecraftClient ):IBaritone;
	getBaritoneForPlayer( arg0:net.minecraft.client.network.ClientPlayerEntity ):IBaritone;
	getCommandSystem(  ):baritone.api.command.ICommandSystem;
	getPrimaryBaritone(  ):IBaritone;
	getSchematicSystem(  ):baritone.api.schematic.ISchematicSystem;
	getWorldScanner(  ):baritone.api.cache.IWorldScanner;

} // end IBaritoneProvider

} // end namespace baritone.api

declare namespace baritone.api {

class Settings/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getAllValuesByType<T>( arg0:java.lang.Class<T> ):java.util.List<Settings$Setting<T>>;
	toString(  ):string;

} // end Settings

} // end namespace baritone.api

declare namespace baritone.api {

class Settings$Setting<T>/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get(  ):T;
	getName(  ):string;
	getType(  ):any /*java.lang.reflect.Type*/;
	getValueClass(  ):java.lang.Class<T>;
	isJavaOnly(  ):boolean;
	reset(  ):void;
	toString(  ):string;

} // end Settings$Setting

} // end namespace baritone.api

declare namespace baritone.api.behavior {

interface IBehavior/* extends baritone.api.event.listener.AbstractGameEventListener*/ {

	onBlockChange( arg0:baritone.api.event.events.BlockChangeEvent ):void;
	onBlockInteract( arg0:baritone.api.event.events.BlockInteractEvent ):void;
	onChunkEvent( arg0:baritone.api.event.events.ChunkEvent ):void;
	onPathEvent( arg0:baritone.api.event.events.PathEvent ):void;
	onPlayerDeath(  ):void;
	onPlayerRotationMove( arg0:baritone.api.event.events.RotationMoveEvent ):void;
	onPlayerSprintState( arg0:baritone.api.event.events.SprintStateEvent ):void;
	onPlayerUpdate( arg0:baritone.api.event.events.PlayerUpdateEvent ):void;
	onPostTick( arg0:baritone.api.event.events.TickEvent ):void;
	onPreTabComplete( arg0:baritone.api.event.events.TabCompleteEvent ):void;
	onReceivePacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onRenderPass( arg0:baritone.api.event.events.RenderEvent ):void;
	onSendChatMessage( arg0:baritone.api.event.events.ChatEvent ):void;
	onSendPacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onTick( arg0:baritone.api.event.events.TickEvent ):void;
	onWorldEvent( arg0:baritone.api.event.events.WorldEvent ):void;

} // end IBehavior

} // end namespace baritone.api.behavior

declare namespace baritone.api.behavior {

interface ILookBehavior/* extends IBehavior*/ {

	getAimProcessor(  ):baritone.api.behavior.look.IAimProcessor;
	onBlockChange( arg0:baritone.api.event.events.BlockChangeEvent ):void;
	onBlockInteract( arg0:baritone.api.event.events.BlockInteractEvent ):void;
	onChunkEvent( arg0:baritone.api.event.events.ChunkEvent ):void;
	onPathEvent( arg0:baritone.api.event.events.PathEvent ):void;
	onPlayerDeath(  ):void;
	onPlayerRotationMove( arg0:baritone.api.event.events.RotationMoveEvent ):void;
	onPlayerSprintState( arg0:baritone.api.event.events.SprintStateEvent ):void;
	onPlayerUpdate( arg0:baritone.api.event.events.PlayerUpdateEvent ):void;
	onPostTick( arg0:baritone.api.event.events.TickEvent ):void;
	onPreTabComplete( arg0:baritone.api.event.events.TabCompleteEvent ):void;
	onReceivePacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onRenderPass( arg0:baritone.api.event.events.RenderEvent ):void;
	onSendChatMessage( arg0:baritone.api.event.events.ChatEvent ):void;
	onSendPacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onTick( arg0:baritone.api.event.events.TickEvent ):void;
	onWorldEvent( arg0:baritone.api.event.events.WorldEvent ):void;
	updateTarget( arg0:baritone.api.utils.Rotation, arg1:boolean ):void;

} // end ILookBehavior

} // end namespace baritone.api.behavior

declare namespace baritone.api.behavior {

interface IPathingBehavior/* extends IBehavior*/ {

	cancelEverything(  ):boolean;
	estimatedTicksToGoal(  ):java.util.Optional<double|null>;
	forceCancel(  ):void;
	getCurrent(  ):baritone.api.pathing.path.IPathExecutor;
	getGoal(  ):baritone.api.pathing.goals.Goal;
	getInProgress(  ):java.util.Optional<baritone.api.pathing.calc.IPathFinder>;
	getNext(  ):baritone.api.pathing.path.IPathExecutor;
	getPath(  ):java.util.Optional<baritone.api.pathing.calc.IPath>;
	hasPath(  ):boolean;
	isPathing(  ):boolean;
	onBlockChange( arg0:baritone.api.event.events.BlockChangeEvent ):void;
	onBlockInteract( arg0:baritone.api.event.events.BlockInteractEvent ):void;
	onChunkEvent( arg0:baritone.api.event.events.ChunkEvent ):void;
	onPathEvent( arg0:baritone.api.event.events.PathEvent ):void;
	onPlayerDeath(  ):void;
	onPlayerRotationMove( arg0:baritone.api.event.events.RotationMoveEvent ):void;
	onPlayerSprintState( arg0:baritone.api.event.events.SprintStateEvent ):void;
	onPlayerUpdate( arg0:baritone.api.event.events.PlayerUpdateEvent ):void;
	onPostTick( arg0:baritone.api.event.events.TickEvent ):void;
	onPreTabComplete( arg0:baritone.api.event.events.TabCompleteEvent ):void;
	onReceivePacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onRenderPass( arg0:baritone.api.event.events.RenderEvent ):void;
	onSendChatMessage( arg0:baritone.api.event.events.ChatEvent ):void;
	onSendPacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onTick( arg0:baritone.api.event.events.TickEvent ):void;
	onWorldEvent( arg0:baritone.api.event.events.WorldEvent ):void;
	ticksRemainingInSegment(  ):java.util.Optional<double|null>;
	ticksRemainingInSegment( arg0:boolean ):java.util.Optional<double|null>;

} // end IPathingBehavior

} // end namespace baritone.api.behavior

declare namespace baritone.api.behavior.look {

interface IAimProcessor {

	fork(  ):ITickableAimProcessor;
	peekRotation( arg0:baritone.api.utils.Rotation ):baritone.api.utils.Rotation;

} // end IAimProcessor

} // end namespace baritone.api.behavior.look

declare namespace baritone.api.behavior.look {

interface ITickableAimProcessor/* extends IAimProcessor*/ {

	advance( arg0:int ):void;
	fork(  ):ITickableAimProcessor;
	nextRotation( arg0:baritone.api.utils.Rotation ):baritone.api.utils.Rotation;
	peekRotation( arg0:baritone.api.utils.Rotation ):baritone.api.utils.Rotation;
	tick(  ):void;

} // end ITickableAimProcessor

} // end namespace baritone.api.behavior.look

declare namespace baritone.api.cache {

interface IBlockTypeAccess {

	getBlock( arg0:int, arg1:int, arg2:int ):net.minecraft.block.BlockState;
	getBlock( arg0:net.minecraft.util.math.BlockPos ):net.minecraft.block.BlockState;

} // end IBlockTypeAccess

} // end namespace baritone.api.cache

declare namespace baritone.api.cache {

interface ICachedRegion/* extends IBlockTypeAccess*/ {

	getBlock( arg0:int, arg1:int, arg2:int ):net.minecraft.block.BlockState;
	getBlock( arg0:net.minecraft.util.math.BlockPos ):net.minecraft.block.BlockState;
	getX(  ):int;
	getZ(  ):int;
	isCached( arg0:int, arg1:int ):boolean;

} // end ICachedRegion

} // end namespace baritone.api.cache

declare namespace baritone.api.cache {

interface ICachedWorld {

	getLocationsOf( arg0:string, arg1:int, arg2:int, arg3:int, arg4:int ):java.util.ArrayList<net.minecraft.util.math.BlockPos>;
	getRegion( arg0:int, arg1:int ):ICachedRegion;
	isCached( arg0:int, arg1:int ):boolean;
	queueForPacking( arg0:any /*net.minecraft.world.chunk.WorldChunk*/ ):void;
	reloadAllFromDisk(  ):void;
	save(  ):void;

} // end ICachedWorld

} // end namespace baritone.api.cache

declare namespace baritone.api.cache {

interface IWaypoint {

	getCreationTimestamp(  ):long;
	getLocation(  ):baritone.api.utils.BetterBlockPos;
	getName(  ):string;
	getTag(  ):IWaypoint$Tag;

} // end IWaypoint

} // end namespace baritone.api.cache

declare namespace baritone.api.cache {

/* enum */class IWaypoint$Tag/* extends java.lang.Enum<any>*/ {

	// HOME:IWaypoint$Tag;
	// DEATH:IWaypoint$Tag;
	// BED:IWaypoint$Tag;
	// USER:IWaypoint$Tag;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	getName(  ):string;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end IWaypoint$Tag

} // end namespace baritone.api.cache

declare namespace baritone.api.cache {

interface IWaypointCollection {

	addWaypoint( arg0:IWaypoint ):void;
	getAllWaypoints(  ):java.util.Set<IWaypoint>;
	getByTag( arg0:IWaypoint$Tag ):java.util.Set<IWaypoint>;
	getMostRecentByTag( arg0:IWaypoint$Tag ):IWaypoint;
	removeWaypoint( arg0:IWaypoint ):void;

} // end IWaypointCollection

} // end namespace baritone.api.cache

declare namespace baritone.api.cache {

interface IWorldData {

	getCachedWorld(  ):ICachedWorld;
	getWaypoints(  ):IWaypointCollection;

} // end IWorldData

} // end namespace baritone.api.cache

declare namespace baritone.api.cache {

interface IWorldProvider {

	getCurrentWorld(  ):IWorldData;
	ifWorldLoaded( arg0:java.util.function.Consumer<IWorldData> ):void;

} // end IWorldProvider

} // end namespace baritone.api.cache

declare namespace baritone.api.cache {

interface IWorldScanner {

	repack( arg0:baritone.api.utils.IPlayerContext ):int;
	repack( arg0:baritone.api.utils.IPlayerContext, arg1:int ):int;
	scanChunk( arg0:baritone.api.utils.IPlayerContext, arg1:baritone.api.utils.BlockOptionalMetaLookup, arg2:net.minecraft.util.math.ChunkPos, arg3:int, arg4:int ):java.util.List<net.minecraft.util.math.BlockPos>;
	scanChunk( arg0:baritone.api.utils.IPlayerContext, arg1:java.util.List<net.minecraft.block.Block>, arg2:net.minecraft.util.math.ChunkPos, arg3:int, arg4:int ):java.util.List<net.minecraft.util.math.BlockPos>;
	scanChunkRadius( arg0:baritone.api.utils.IPlayerContext, arg1:baritone.api.utils.BlockOptionalMetaLookup, arg2:int, arg3:int, arg4:int ):java.util.List<net.minecraft.util.math.BlockPos>;
	scanChunkRadius( arg0:baritone.api.utils.IPlayerContext, arg1:java.util.List<net.minecraft.block.Block>, arg2:int, arg3:int, arg4:int ):java.util.List<net.minecraft.util.math.BlockPos>;

} // end IWorldScanner

} // end namespace baritone.api.cache

declare namespace baritone.api.cache {

class Waypoint/* extends java.lang.Object implements IWaypoint*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getCreationTimestamp(  ):long;
	getLocation(  ):baritone.api.utils.BetterBlockPos;
	getName(  ):string;
	getTag(  ):IWaypoint$Tag;
	toString(  ):string;

} // end Waypoint

} // end namespace baritone.api.cache

declare namespace baritone.api.command {

class Command/* extends java.lang.Object implements ICommand*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	execute( arg0:string, arg1:baritone.api.command.argument.IArgConsumer ):void;
	getLongDesc(  ):java.util.List<string>;
	getNames(  ):java.util.List<string>;
	getShortDesc(  ):string;
	hiddenFromHelp(  ):boolean;
	logDebug( arg0:string ):void;
	logDirect( ...arg0:net.minecraft.text.Text[] ):void;
	logDirect( arg0:boolean, ...arg1:net.minecraft.text.Text[] ):void;
	logDirect( arg0:string ):void;
	logDirect( arg0:string, arg1:boolean ):void;
	logDirect( arg0:string, arg1:net.minecraft.util.Formatting ):void;
	logDirect( arg0:string, arg1:net.minecraft.util.Formatting, arg2:boolean ):void;
	logNotification( arg0:string ):void;
	logNotification( arg0:string, arg1:boolean ):void;
	logNotificationDirect( arg0:string ):void;
	logNotificationDirect( arg0:string, arg1:boolean ):void;
	logToast( arg0:net.minecraft.text.Text, arg1:net.minecraft.text.Text ):void;
	logToast( arg0:string ):void;
	logToast( arg0:string, arg1:string ):void;
	logUnhandledException( arg0:any /*java.lang.Throwable*/ ):void;
	tabComplete( arg0:string, arg1:baritone.api.command.argument.IArgConsumer ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end Command

} // end namespace baritone.api.command

declare namespace baritone.api.command {

interface IBaritoneChatControl {


} // end IBaritoneChatControl

} // end namespace baritone.api.command

declare namespace baritone.api.command {

interface ICommand/* extends baritone.api.utils.Helper*/ {

	execute( arg0:string, arg1:baritone.api.command.argument.IArgConsumer ):void;
	getLongDesc(  ):java.util.List<string>;
	getNames(  ):java.util.List<string>;
	getShortDesc(  ):string;
	hiddenFromHelp(  ):boolean;
	logDebug( arg0:string ):void;
	logDirect( ...arg0:net.minecraft.text.Text[] ):void;
	logDirect( arg0:boolean, ...arg1:net.minecraft.text.Text[] ):void;
	logDirect( arg0:string ):void;
	logDirect( arg0:string, arg1:boolean ):void;
	logDirect( arg0:string, arg1:net.minecraft.util.Formatting ):void;
	logDirect( arg0:string, arg1:net.minecraft.util.Formatting, arg2:boolean ):void;
	logNotification( arg0:string ):void;
	logNotification( arg0:string, arg1:boolean ):void;
	logNotificationDirect( arg0:string ):void;
	logNotificationDirect( arg0:string, arg1:boolean ):void;
	logToast( arg0:net.minecraft.text.Text, arg1:net.minecraft.text.Text ):void;
	logToast( arg0:string ):void;
	logToast( arg0:string, arg1:string ):void;
	logUnhandledException( arg0:any /*java.lang.Throwable*/ ):void;
	tabComplete( arg0:string, arg1:baritone.api.command.argument.IArgConsumer ):java.util.stream.Stream<string>;

} // end ICommand

} // end namespace baritone.api.command

declare namespace baritone.api.command {

interface ICommandSystem {

	getParserManager(  ):baritone.api.command.argparser.IArgParserManager;

} // end ICommandSystem

} // end namespace baritone.api.command

declare namespace baritone.api.command.argparser {

interface IArgParser<T> {

	getTarget(  ):java.lang.Class<T>;

} // end IArgParser

} // end namespace baritone.api.command.argparser

declare namespace baritone.api.command.argparser {

interface IArgParserManager {

	getParserStated<S,T>( arg0:java.lang.Class<T>, arg1:java.lang.Class<S> ):any /*baritone.api.command.argparser.IArgParser$Stated*/;
	getParserStateless<T>( arg0:java.lang.Class<T> ):any /*baritone.api.command.argparser.IArgParser$Stateless*/;
	getRegistry<T>(  ):baritone.api.command.registry.Registry<IArgParser<any>>;
	parseStated<S,T>( arg0:java.lang.Class<T>, arg1:java.lang.Class<S>, arg2:baritone.api.command.argument.ICommandArgument, arg3:S ):T;
	parseStateless<T>( arg0:java.lang.Class<T>, arg1:baritone.api.command.argument.ICommandArgument ):T;

} // end IArgParserManager

} // end namespace baritone.api.command.argparser

declare namespace baritone.api.command.argument {

interface IArgConsumer {

	consumed(  ):ICommandArgument;
	consumedString(  ):string;
	copy(  ):IArgConsumer;
	get(  ):ICommandArgument;
	getArgs(  ):any /*java.util.LinkedList*/;
	getAs<T>( arg0:java.lang.Class<T> ):T;
	getAsOrDefault<T>( arg0:java.lang.Class<T>, arg1:T ):T;
	getAsOrNull<T>( arg0:java.lang.Class<T> ):T;
	getConsumed(  ):any /*java.util.Deque*/;
	getDatatypeFor<D,T>( arg0:D ):T;
	getDatatypeForOrDefault<D,T>( arg0:D, arg1:T ):T;
	getDatatypeForOrNull<D,T>( arg0:D ):T;
	getDatatypePost<D,T,O>( arg0:D, arg1:O ):T;
	getDatatypePostOrDefault<D,T,O>( arg0:D, arg1:O, arg2:T ):T;
	getDatatypePostOrNull<D,T,O>( arg0:D, arg1:O ):T;
	getEnum<E>( arg0:java.lang.Class<E> ):E;
	getEnumOrDefault<E>( arg0:java.lang.Class<E>, arg1:E ):E;
	getEnumOrNull<E>( arg0:java.lang.Class<E> ):E;
	getString(  ):string;
	has( arg0:int ):boolean;
	hasAny(  ):boolean;
	hasAtMost( arg0:int ):boolean;
	hasAtMostOne(  ):boolean;
	hasConsumed(  ):boolean;
	hasExactly( arg0:int ):boolean;
	hasExactlyOne(  ):boolean;
	is( arg0:java.lang.Class<any /*java.lang.Object*/> ):boolean;
	is( arg0:java.lang.Class<any /*java.lang.Object*/>, arg1:int ):boolean;
	peek(  ):ICommandArgument;
	peek( arg0:int ):ICommandArgument;
	peekAs<T>( arg0:java.lang.Class<T> ):T;
	peekAs<T>( arg0:java.lang.Class<T>, arg1:int ):T;
	peekAsOrDefault<T>( arg0:java.lang.Class<T>, arg1:T ):T;
	peekAsOrDefault<T>( arg0:java.lang.Class<T>, arg1:T, arg2:int ):T;
	peekAsOrNull<T>( arg0:java.lang.Class<T> ):T;
	peekAsOrNull<T>( arg0:java.lang.Class<T>, arg1:int ):T;
	peekDatatype<T,O>( arg0:baritone.api.command.datatypes.IDatatypePost<T, O> ):T;
	peekDatatype<T,O>( arg0:baritone.api.command.datatypes.IDatatypePost<T, O>, arg1:O ):T;
	peekDatatype<T>( arg0:baritone.api.command.datatypes.IDatatypeFor<T> ):T;
	peekDatatypeFor<D,T>( arg0:java.lang.Class<D> ):T;
	peekDatatypeForOrDefault<D,T>( arg0:java.lang.Class<D>, arg1:T ):T;
	peekDatatypeForOrNull<D,T>( arg0:java.lang.Class<D> ):T;
	peekDatatypeOrNull<T,O>( arg0:baritone.api.command.datatypes.IDatatypePost<T, O> ):T;
	peekDatatypeOrNull<T>( arg0:baritone.api.command.datatypes.IDatatypeFor<T> ):T;
	peekDatatypePost<D,T,O>( arg0:D, arg1:O ):T;
	peekDatatypePostOrDefault<D,T,O>( arg0:D, arg1:O, arg2:T ):T;
	peekDatatypePostOrNull<D,T,O>( arg0:D, arg1:O ):T;
	peekEnum<E>( arg0:java.lang.Class<E> ):E;
	peekEnum<E>( arg0:java.lang.Class<E>, arg1:int ):E;
	peekEnumOrNull<E>( arg0:java.lang.Class<E> ):E;
	peekEnumOrNull<E>( arg0:java.lang.Class<E>, arg1:int ):E;
	peekString(  ):string;
	peekString( arg0:int ):string;
	rawRest(  ):string;
	requireExactly( arg0:int ):void;
	requireMax( arg0:int ):void;
	requireMin( arg0:int ):void;
	tabCompleteDatatype<T>( arg0:T ):java.util.stream.Stream<string>;

} // end IArgConsumer

} // end namespace baritone.api.command.argument

declare namespace baritone.api.command.argument {

interface ICommandArgument {

	getAs<S,T>( arg0:java.lang.Class<T>, arg1:java.lang.Class<S>, arg2:S ):T;
	getAs<T>( arg0:java.lang.Class<T> ):T;
	getEnum<E>( arg0:java.lang.Class<E> ):E;
	getIndex(  ):int;
	getRawRest(  ):string;
	getValue(  ):string;
	is<S,T>( arg0:java.lang.Class<T>, arg1:java.lang.Class<S>, arg2:S ):boolean;
	is<T>( arg0:java.lang.Class<T> ):boolean;

} // end ICommandArgument

} // end namespace baritone.api.command.argument

declare namespace baritone.api.command.manager {

interface ICommandManager {

	execute( arg0:any /*net.minecraft.util.Pair*/ ):boolean;
	execute( arg0:string ):boolean;
	getBaritone(  ):baritone.api.IBaritone;
	getCommand( arg0:string ):baritone.api.command.ICommand;
	getRegistry(  ):baritone.api.command.registry.Registry<baritone.api.command.ICommand>;
	tabComplete( arg0:any /*net.minecraft.util.Pair*/ ):java.util.stream.Stream<string>;
	tabComplete( arg0:string ):java.util.stream.Stream<string>;

} // end ICommandManager

} // end namespace baritone.api.command.manager

declare namespace baritone.api.command.registry {

class Registry<V>/* extends java.lang.Object*/ {

	descendingIterator(  ):java.util.Iterator<V>;
	descendingStream(  ):java.util.stream.Stream<V>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	iterator(  ):java.util.Iterator<V>;
	register( arg0:V ):boolean;
	registered( arg0:V ):boolean;
	stream(  ):java.util.stream.Stream<V>;
	toString(  ):string;
	unregister( arg0:V ):void;

} // end Registry

} // end namespace baritone.api.command.registry

declare namespace baritone.api.command.datatypes {

/* enum */class BlockById/* extends java.lang.Enum<any> implements IDatatypeFor<any>*/ {

	// INSTANCE:BlockById;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get( arg0:IDatatypeContext ):net.minecraft.block.Block;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end BlockById

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class EntityClassById/* extends java.lang.Enum<any> implements IDatatypeFor<any>*/ {

	// INSTANCE:EntityClassById;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get<T>( arg0:IDatatypeContext ):net.minecraft.entity.EntityType<any>;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end EntityClassById

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class ForAxis/* extends java.lang.Enum<any> implements IDatatypeFor<any>*/ {

	// INSTANCE:ForAxis;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get( arg0:IDatatypeContext ):net.minecraft.util.math.Direction$Axis;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end ForAxis

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class ForBlockOptionalMeta/* extends java.lang.Enum<any> implements IDatatypeFor<any>*/ {

	// INSTANCE:ForBlockOptionalMeta;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get( arg0:IDatatypeContext ):baritone.api.utils.BlockOptionalMeta;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end ForBlockOptionalMeta

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class ForDirection/* extends java.lang.Enum<any> implements IDatatypeFor<any>*/ {

	// INSTANCE:ForDirection;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get( arg0:IDatatypeContext ):net.minecraft.util.math.Direction;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end ForDirection

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class ForWaypoints/* extends java.lang.Enum<any> implements IDatatypeFor<any>*/ {

	// INSTANCE:ForWaypoints;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get( arg0:IDatatypeContext ):[baritone.api.cache.IWaypoint];
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end ForWaypoints

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

interface IDatatype {

	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;

} // end IDatatype

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

interface IDatatypeContext {

	getBaritone(  ):baritone.api.IBaritone;
	getConsumer(  ):baritone.api.command.argument.IArgConsumer;

} // end IDatatypeContext

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

interface IDatatypeFor<T>/* extends IDatatype*/ {

	get( arg0:IDatatypeContext ):T;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;

} // end IDatatypeFor

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

interface IDatatypePost<T, O>/* extends IDatatype*/ {

	apply( arg0:IDatatypeContext, arg1:O ):T;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;

} // end IDatatypePost

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

interface IDatatypePostFunction<T, O> {

	apply( arg0:O ):T;

} // end IDatatypePostFunction

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class ItemById/* extends java.lang.Enum<any> implements IDatatypeFor<any>*/ {

	// INSTANCE:ItemById;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get( arg0:IDatatypeContext ):net.minecraft.item.Item;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end ItemById

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class NearbyPlayer/* extends java.lang.Enum<any> implements IDatatypeFor<any>*/ {

	// INSTANCE:NearbyPlayer;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get( arg0:IDatatypeContext ):net.minecraft.entity.player.PlayerEntity;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end NearbyPlayer

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class RelativeBlockPos/* extends java.lang.Enum<any> implements IDatatypePost<any, any>*/ {

	// INSTANCE:RelativeBlockPos;

	apply( arg0:IDatatypeContext, arg1:baritone.api.utils.BetterBlockPos ):baritone.api.utils.BetterBlockPos;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end RelativeBlockPos

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class RelativeCoordinate/* extends java.lang.Enum<any> implements IDatatypePost<any, any>*/ {

	// INSTANCE:RelativeCoordinate;

	apply( arg0:IDatatypeContext, arg1:double|null ):double|null;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end RelativeCoordinate

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class RelativeFile/* extends java.lang.Enum<any> implements IDatatypePost<any, any>*/ {

	// INSTANCE:RelativeFile;

	apply( arg0:IDatatypeContext, arg1:java.io.File ):java.io.File;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end RelativeFile

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class RelativeGoal/* extends java.lang.Enum<any> implements IDatatypePost<any, any>*/ {

	// INSTANCE:RelativeGoal;

	apply( arg0:IDatatypeContext, arg1:baritone.api.utils.BetterBlockPos ):baritone.api.pathing.goals.Goal;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end RelativeGoal

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class RelativeGoalBlock/* extends java.lang.Enum<any> implements IDatatypePost<any, any>*/ {

	// INSTANCE:RelativeGoalBlock;

	apply( arg0:IDatatypeContext, arg1:baritone.api.utils.BetterBlockPos ):baritone.api.pathing.goals.GoalBlock;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end RelativeGoalBlock

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class RelativeGoalXZ/* extends java.lang.Enum<any> implements IDatatypePost<any, any>*/ {

	// INSTANCE:RelativeGoalXZ;

	apply( arg0:IDatatypeContext, arg1:baritone.api.utils.BetterBlockPos ):baritone.api.pathing.goals.GoalXZ;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end RelativeGoalXZ

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.command.datatypes {

/* enum */class RelativeGoalYLevel/* extends java.lang.Enum<any> implements IDatatypePost<any, any>*/ {

	// INSTANCE:RelativeGoalYLevel;

	apply( arg0:IDatatypeContext, arg1:baritone.api.utils.BetterBlockPos ):baritone.api.pathing.goals.GoalYLevel;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	tabComplete( arg0:IDatatypeContext ):java.util.stream.Stream<string>;
	toString(  ):string;

} // end RelativeGoalYLevel

} // end namespace baritone.api.command.datatypes

declare namespace baritone.api.event.events {

class BlockChangeEvent/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getBlocks(  ):java.util.List<any /*baritone.api.utils.Pair*/>;
	getChunkPos(  ):net.minecraft.util.math.ChunkPos;
	toString(  ):string;

} // end BlockChangeEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class BlockInteractEvent/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getPos(  ):net.minecraft.util.math.BlockPos;
	getType(  ):BlockInteractEvent$Type;
	toString(  ):string;

} // end BlockInteractEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

/* enum */class BlockInteractEvent$Type/* extends java.lang.Enum<any>*/ {

	// START_BREAK:BlockInteractEvent$Type;
	// USE:BlockInteractEvent$Type;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end BlockInteractEvent$Type

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class ChatEvent/* extends baritone.api.event.events.type.Cancellable*/ {

	cancel(  ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getMessage(  ):string;
	isCancelled(  ):boolean;
	toString(  ):string;

} // end ChatEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class ChunkEvent/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getState(  ):baritone.api.event.events.type.EventState;
	getType(  ):ChunkEvent$Type;
	getX(  ):int;
	getZ(  ):int;
	isPostPopulate(  ):boolean;
	toString(  ):string;

} // end ChunkEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

/* enum */class ChunkEvent$Type/* extends java.lang.Enum<any>*/ {

	// LOAD:ChunkEvent$Type;
	// UNLOAD:ChunkEvent$Type;
	// POPULATE_FULL:ChunkEvent$Type;
	// POPULATE_PARTIAL:ChunkEvent$Type;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	isPopulate(  ):boolean;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end ChunkEvent$Type

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class PacketEvent/* extends java.lang.Object*/ {

	cast<T>(  ):T;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getNetworkManager(  ):any /*net.minecraft.network.ClientConnection*/;
	getPacket(  ):net.minecraft.network.packet.Packet<any /*java.lang.Object*/>;
	getState(  ):baritone.api.event.events.type.EventState;
	toString(  ):string;

} // end PacketEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

/* enum */class PathEvent/* extends java.lang.Enum<any>*/ {

	// CALC_STARTED:PathEvent;
	// CALC_FINISHED_NOW_EXECUTING:PathEvent;
	// CALC_FAILED:PathEvent;
	// NEXT_SEGMENT_CALC_STARTED:PathEvent;
	// NEXT_SEGMENT_CALC_FINISHED:PathEvent;
	// CONTINUING_ONTO_PLANNED_NEXT:PathEvent;
	// SPLICING_ONTO_NEXT_EARLY:PathEvent;
	// AT_GOAL:PathEvent;
	// PATH_FINISHED_NEXT_STILL_CALCULATING:PathEvent;
	// NEXT_CALC_FAILED:PathEvent;
	// DISCARD_NEXT:PathEvent;
	// CANCELED:PathEvent;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end PathEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class PlayerUpdateEvent/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getState(  ):baritone.api.event.events.type.EventState;
	toString(  ):string;

} // end PlayerUpdateEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class RenderEvent/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getModelViewStack(  ):any /*net.minecraft.client.util.math.MatrixStack*/;
	getPartialTicks(  ):float;
	getProjectionMatrix(  ):org.joml.Matrix4f;
	toString(  ):string;

} // end RenderEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class RotationMoveEvent/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getOriginal(  ):baritone.api.utils.Rotation;
	getPitch(  ):float;
	getType(  ):RotationMoveEvent$Type;
	getYaw(  ):float;
	setPitch( arg0:float ):void;
	setYaw( arg0:float ):void;
	toString(  ):string;

} // end RotationMoveEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

/* enum */class RotationMoveEvent$Type/* extends java.lang.Enum<any>*/ {

	// MOTION_UPDATE:RotationMoveEvent$Type;
	// JUMP:RotationMoveEvent$Type;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end RotationMoveEvent$Type

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class SprintStateEvent/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getState(  ):boolean|null;
	setState( arg0:boolean ):void;
	toString(  ):string;

} // end SprintStateEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class TabCompleteEvent/* extends baritone.api.event.events.type.Cancellable*/ {

	cancel(  ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	isCancelled(  ):boolean;
	toString(  ):string;

} // end TabCompleteEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class TickEvent/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getCount(  ):int;
	getState(  ):baritone.api.event.events.type.EventState;
	getType(  ):TickEvent$Type;
	static createNextProvider(  ):any /*java.util.function.BiFunction*/;
	toString(  ):string;

} // end TickEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

/* enum */class TickEvent$Type/* extends java.lang.Enum<any>*/ {

	// IN:TickEvent$Type;
	// OUT:TickEvent$Type;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end TickEvent$Type

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events {

class WorldEvent/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getState(  ):baritone.api.event.events.type.EventState;
	getWorld(  ):net.minecraft.client.world.ClientWorld;
	toString(  ):string;

} // end WorldEvent

} // end namespace baritone.api.event.events

declare namespace baritone.api.event.events.type {

class Cancellable/* extends java.lang.Object implements ICancellable*/ {

	cancel(  ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	isCancelled(  ):boolean;
	toString(  ):string;

} // end Cancellable

} // end namespace baritone.api.event.events.type

declare namespace baritone.api.event.events.type {

/* enum */class EventState/* extends java.lang.Enum<any>*/ {

	// PRE:EventState;
	// POST:EventState;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end EventState

} // end namespace baritone.api.event.events.type

declare namespace baritone.api.event.events.type {

interface ICancellable {

	cancel(  ):void;
	isCancelled(  ):boolean;

} // end ICancellable

} // end namespace baritone.api.event.events.type

declare namespace baritone.api.event.events.type {

class Overrideable<T>/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get(  ):T;
	set( arg0:T ):void;
	toString(  ):string;
	wasModified(  ):boolean;

} // end Overrideable

} // end namespace baritone.api.event.events.type

declare namespace baritone.api.event.listener {

interface AbstractGameEventListener/* extends IGameEventListener*/ {

	onBlockChange( arg0:baritone.api.event.events.BlockChangeEvent ):void;
	onBlockInteract( arg0:baritone.api.event.events.BlockInteractEvent ):void;
	onChunkEvent( arg0:baritone.api.event.events.ChunkEvent ):void;
	onPathEvent( arg0:baritone.api.event.events.PathEvent ):void;
	onPlayerDeath(  ):void;
	onPlayerRotationMove( arg0:baritone.api.event.events.RotationMoveEvent ):void;
	onPlayerSprintState( arg0:baritone.api.event.events.SprintStateEvent ):void;
	onPlayerUpdate( arg0:baritone.api.event.events.PlayerUpdateEvent ):void;
	onPostTick( arg0:baritone.api.event.events.TickEvent ):void;
	onPreTabComplete( arg0:baritone.api.event.events.TabCompleteEvent ):void;
	onReceivePacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onRenderPass( arg0:baritone.api.event.events.RenderEvent ):void;
	onSendChatMessage( arg0:baritone.api.event.events.ChatEvent ):void;
	onSendPacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onTick( arg0:baritone.api.event.events.TickEvent ):void;
	onWorldEvent( arg0:baritone.api.event.events.WorldEvent ):void;

} // end AbstractGameEventListener

} // end namespace baritone.api.event.listener

declare namespace baritone.api.event.listener {

interface IEventBus/* extends IGameEventListener*/ {

	onBlockChange( arg0:baritone.api.event.events.BlockChangeEvent ):void;
	onBlockInteract( arg0:baritone.api.event.events.BlockInteractEvent ):void;
	onChunkEvent( arg0:baritone.api.event.events.ChunkEvent ):void;
	onPathEvent( arg0:baritone.api.event.events.PathEvent ):void;
	onPlayerDeath(  ):void;
	onPlayerRotationMove( arg0:baritone.api.event.events.RotationMoveEvent ):void;
	onPlayerSprintState( arg0:baritone.api.event.events.SprintStateEvent ):void;
	onPlayerUpdate( arg0:baritone.api.event.events.PlayerUpdateEvent ):void;
	onPostTick( arg0:baritone.api.event.events.TickEvent ):void;
	onPreTabComplete( arg0:baritone.api.event.events.TabCompleteEvent ):void;
	onReceivePacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onRenderPass( arg0:baritone.api.event.events.RenderEvent ):void;
	onSendChatMessage( arg0:baritone.api.event.events.ChatEvent ):void;
	onSendPacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onTick( arg0:baritone.api.event.events.TickEvent ):void;
	onWorldEvent( arg0:baritone.api.event.events.WorldEvent ):void;
	registerEventListener( arg0:IGameEventListener ):void;

} // end IEventBus

} // end namespace baritone.api.event.listener

declare namespace baritone.api.event.listener {

interface IGameEventListener {

	onBlockChange( arg0:baritone.api.event.events.BlockChangeEvent ):void;
	onBlockInteract( arg0:baritone.api.event.events.BlockInteractEvent ):void;
	onChunkEvent( arg0:baritone.api.event.events.ChunkEvent ):void;
	onPathEvent( arg0:baritone.api.event.events.PathEvent ):void;
	onPlayerDeath(  ):void;
	onPlayerRotationMove( arg0:baritone.api.event.events.RotationMoveEvent ):void;
	onPlayerSprintState( arg0:baritone.api.event.events.SprintStateEvent ):void;
	onPlayerUpdate( arg0:baritone.api.event.events.PlayerUpdateEvent ):void;
	onPostTick( arg0:baritone.api.event.events.TickEvent ):void;
	onPreTabComplete( arg0:baritone.api.event.events.TabCompleteEvent ):void;
	onReceivePacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onRenderPass( arg0:baritone.api.event.events.RenderEvent ):void;
	onSendChatMessage( arg0:baritone.api.event.events.ChatEvent ):void;
	onSendPacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onTick( arg0:baritone.api.event.events.TickEvent ):void;
	onWorldEvent( arg0:baritone.api.event.events.WorldEvent ):void;

} // end IGameEventListener

} // end namespace baritone.api.event.listener

declare namespace baritone.api.pathing.calc {

interface IPath {

	cutoffAtLoadedChunks( arg0:any /*java.lang.Object*/ ):IPath;
	getDest(  ):baritone.api.utils.BetterBlockPos;
	getGoal(  ):baritone.api.pathing.goals.Goal;
	getNumNodesConsidered(  ):int;
	getSrc(  ):baritone.api.utils.BetterBlockPos;
	length(  ):int;
	movements(  ):java.util.List<baritone.api.pathing.movement.IMovement>;
	positions(  ):java.util.List<baritone.api.utils.BetterBlockPos>;
	postProcess(  ):IPath;
	sanityCheck(  ):void;
	staticCutoff( arg0:baritone.api.pathing.goals.Goal ):IPath;
	ticksRemainingFrom( arg0:int ):double;

} // end IPath

} // end namespace baritone.api.pathing.calc

declare namespace baritone.api.pathing.calc {

interface IPathFinder {

	bestPathSoFar(  ):java.util.Optional<IPath>;
	calculate( arg0:long, arg1:long ):baritone.api.utils.PathCalculationResult;
	getGoal(  ):baritone.api.pathing.goals.Goal;
	isFinished(  ):boolean;
	pathToMostRecentNodeConsidered(  ):java.util.Optional<IPath>;

} // end IPathFinder

} // end namespace baritone.api.pathing.calc

declare namespace baritone.api.pathing.calc {

interface IPathingControlManager {

	mostRecentCommand(  ):java.util.Optional<baritone.api.process.PathingCommand>;
	mostRecentInControl(  ):java.util.Optional<baritone.api.process.IBaritoneProcess>;
	registerProcess( arg0:baritone.api.process.IBaritoneProcess ):void;

} // end IPathingControlManager

} // end namespace baritone.api.pathing.calc

declare namespace baritone.api.pathing.goals {

interface Goal {

	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;

} // end Goal

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalAxis/* extends java.lang.Object implements Goal*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	toString(  ):string;

} // end GoalAxis

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalBlock/* extends java.lang.Object implements Goal, baritone.api.utils.interfaces.IGoalRenderPos*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getGoalPos(  ):net.minecraft.util.math.BlockPos;
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	static calculate( arg0:double, arg1:int, arg2:double ):double;
	toString(  ):string;

} // end GoalBlock

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalComposite/* extends java.lang.Object implements Goal*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	goals(  ):[Goal];
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	toString(  ):string;

} // end GoalComposite

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalGetToBlock/* extends java.lang.Object implements Goal, baritone.api.utils.interfaces.IGoalRenderPos*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getGoalPos(  ):net.minecraft.util.math.BlockPos;
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	toString(  ):string;

} // end GoalGetToBlock

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalInverted/* extends java.lang.Object implements Goal*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	toString(  ):string;

} // end GoalInverted

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalNear/* extends java.lang.Object implements Goal, baritone.api.utils.interfaces.IGoalRenderPos*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getGoalPos(  ):net.minecraft.util.math.BlockPos;
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	toString(  ):string;

} // end GoalNear

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalRunAway/* extends java.lang.Object implements Goal*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	toString(  ):string;

} // end GoalRunAway

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalStrictDirection/* extends java.lang.Object implements Goal*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	toString(  ):string;

} // end GoalStrictDirection

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalTwoBlocks/* extends java.lang.Object implements Goal, baritone.api.utils.interfaces.IGoalRenderPos*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getGoalPos(  ):net.minecraft.util.math.BlockPos;
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	toString(  ):string;

} // end GoalTwoBlocks

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalXZ/* extends java.lang.Object implements Goal*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getX(  ):int;
	getZ(  ):int;
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	static calculate( arg0:double, arg1:double ):double;
	static fromDirection( arg0:net.minecraft.util.math.Vec3d, arg1:float, arg2:double ):GoalXZ;
	toString(  ):string;

} // end GoalXZ

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.goals {

class GoalYLevel/* extends java.lang.Object implements Goal, baritone.api.pathing.movement.ActionCosts*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heuristic(  ):double;
	heuristic( arg0:int, arg1:int, arg2:int ):double;
	heuristic( arg0:net.minecraft.util.math.BlockPos ):double;
	isInGoal( arg0:int, arg1:int, arg2:int ):boolean;
	isInGoal( arg0:net.minecraft.util.math.BlockPos ):boolean;
	static calculate( arg0:int, arg1:int ):double;
	toString(  ):string;

} // end GoalYLevel

} // end namespace baritone.api.pathing.goals

declare namespace baritone.api.pathing.movement {

interface ActionCosts {

	// static distanceToTicks( arg0:double ):double;
	// static generateFallNBlocksCost(  ):[double];
	// static oldFormula( arg0:double ):double;
	// static velocity( arg0:int ):double;

} // end ActionCosts

} // end namespace baritone.api.pathing.movement

declare namespace baritone.api.pathing.movement {

interface IMovement {

	calculatedWhileLoaded(  ):boolean;
	getCost(  ):double;
	getDest(  ):baritone.api.utils.BetterBlockPos;
	getDirection(  ):net.minecraft.util.math.BlockPos;
	getSrc(  ):baritone.api.utils.BetterBlockPos;
	reset(  ):void;
	resetBlockCache(  ):void;
	safeToCancel(  ):boolean;
	update(  ):MovementStatus;

} // end IMovement

} // end namespace baritone.api.pathing.movement

declare namespace baritone.api.pathing.movement {

/* enum */class MovementStatus/* extends java.lang.Enum<any>*/ {

	// PREPPING:MovementStatus;
	// WAITING:MovementStatus;
	// RUNNING:MovementStatus;
	// SUCCESS:MovementStatus;
	// UNREACHABLE:MovementStatus;
	// FAILED:MovementStatus;
	// CANCELED:MovementStatus;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	isComplete(  ):boolean;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end MovementStatus

} // end namespace baritone.api.pathing.movement

declare namespace baritone.api.pathing.path {

interface IPathExecutor {

	getPath(  ):baritone.api.pathing.calc.IPath;
	getPosition(  ):int;

} // end IPathExecutor

} // end namespace baritone.api.pathing.path

declare namespace baritone.api.process {

interface IBaritoneProcess {

	displayName(  ):string;
	displayName0(  ):string;
	isActive(  ):boolean;
	isTemporary(  ):boolean;
	onLostControl(  ):void;
	onTick( arg0:boolean, arg1:boolean ):PathingCommand;
	priority(  ):double;

} // end IBaritoneProcess

} // end namespace baritone.api.process

declare namespace baritone.api.process {

interface IBuilderProcess/* extends IBaritoneProcess*/ {

	build( arg0:string, arg1:baritone.api.schematic.ISchematic, arg2:net.minecraft.util.math.Vec3i ):void;
	build( arg0:string, arg1:java.io.File, arg2:net.minecraft.util.math.Vec3i ):boolean;
	build( arg0:string, arg1:net.minecraft.util.math.BlockPos ):boolean;
	buildOpenLitematic( arg0:int ):void;
	buildOpenSchematic(  ):void;
	clearArea( arg0:net.minecraft.util.math.BlockPos, arg1:net.minecraft.util.math.BlockPos ):void;
	displayName(  ):string;
	displayName0(  ):string;
	getApproxPlaceable(  ):java.util.List<net.minecraft.block.BlockState>;
	getMaxLayer(  ):java.util.Optional<int|null>;
	getMinLayer(  ):java.util.Optional<int|null>;
	isActive(  ):boolean;
	isPaused(  ):boolean;
	isTemporary(  ):boolean;
	onLostControl(  ):void;
	onTick( arg0:boolean, arg1:boolean ):PathingCommand;
	pause(  ):void;
	priority(  ):double;
	resume(  ):void;

} // end IBuilderProcess

} // end namespace baritone.api.process

declare namespace baritone.api.process {

interface ICustomGoalProcess/* extends IBaritoneProcess*/ {

	displayName(  ):string;
	displayName0(  ):string;
	getGoal(  ):baritone.api.pathing.goals.Goal;
	isActive(  ):boolean;
	isTemporary(  ):boolean;
	mostRecentGoal(  ):baritone.api.pathing.goals.Goal;
	onLostControl(  ):void;
	onTick( arg0:boolean, arg1:boolean ):PathingCommand;
	path(  ):void;
	priority(  ):double;
	setGoal( arg0:baritone.api.pathing.goals.Goal ):void;
	setGoalAndPath( arg0:baritone.api.pathing.goals.Goal ):void;

} // end ICustomGoalProcess

} // end namespace baritone.api.process

declare namespace baritone.api.process {

interface IElytraProcess/* extends IBaritoneProcess*/ {

	currentDestination(  ):net.minecraft.util.math.BlockPos;
	displayName(  ):string;
	displayName0(  ):string;
	isActive(  ):boolean;
	isLoaded(  ):boolean;
	isSafeToCancel(  ):boolean;
	isTemporary(  ):boolean;
	onLostControl(  ):void;
	onTick( arg0:boolean, arg1:boolean ):PathingCommand;
	pathTo( arg0:baritone.api.pathing.goals.Goal ):void;
	pathTo( arg0:net.minecraft.util.math.BlockPos ):void;
	priority(  ):double;
	repackChunks(  ):void;
	resetState(  ):void;

} // end IElytraProcess

} // end namespace baritone.api.process

declare namespace baritone.api.process {

interface IExploreProcess/* extends IBaritoneProcess*/ {

	applyJsonFilter( arg0:any /*java.nio.file.Path*/, arg1:boolean ):void;
	displayName(  ):string;
	displayName0(  ):string;
	explore( arg0:int, arg1:int ):void;
	isActive(  ):boolean;
	isTemporary(  ):boolean;
	onLostControl(  ):void;
	onTick( arg0:boolean, arg1:boolean ):PathingCommand;
	priority(  ):double;

} // end IExploreProcess

} // end namespace baritone.api.process

declare namespace baritone.api.process {

interface IFarmProcess/* extends IBaritoneProcess*/ {

	displayName(  ):string;
	displayName0(  ):string;
	farm(  ):void;
	farm( arg0:int ):void;
	farm( arg0:int, arg1:net.minecraft.util.math.BlockPos ):void;
	isActive(  ):boolean;
	isTemporary(  ):boolean;
	onLostControl(  ):void;
	onTick( arg0:boolean, arg1:boolean ):PathingCommand;
	priority(  ):double;

} // end IFarmProcess

} // end namespace baritone.api.process

declare namespace baritone.api.process {

interface IFollowProcess/* extends IBaritoneProcess*/ {

	cancel(  ):void;
	currentFilter(  ):java.util.function.Predicate<net.minecraft.entity.Entity>;
	displayName(  ):string;
	displayName0(  ):string;
	follow( arg0:java.util.function.Predicate<net.minecraft.entity.Entity> ):void;
	following(  ):java.util.List<net.minecraft.entity.Entity>;
	isActive(  ):boolean;
	isTemporary(  ):boolean;
	onLostControl(  ):void;
	onTick( arg0:boolean, arg1:boolean ):PathingCommand;
	pickup( arg0:java.util.function.Predicate<net.minecraft.item.ItemStack> ):void;
	priority(  ):double;

} // end IFollowProcess

} // end namespace baritone.api.process

declare namespace baritone.api.process {

interface IGetToBlockProcess/* extends IBaritoneProcess*/ {

	blacklistClosest(  ):boolean;
	displayName(  ):string;
	displayName0(  ):string;
	getToBlock( arg0:baritone.api.utils.BlockOptionalMeta ):void;
	getToBlock( arg0:net.minecraft.block.Block ):void;
	isActive(  ):boolean;
	isTemporary(  ):boolean;
	onLostControl(  ):void;
	onTick( arg0:boolean, arg1:boolean ):PathingCommand;
	priority(  ):double;

} // end IGetToBlockProcess

} // end namespace baritone.api.process

declare namespace baritone.api.process {

interface IMineProcess/* extends IBaritoneProcess*/ {

	cancel(  ):void;
	displayName(  ):string;
	displayName0(  ):string;
	isActive(  ):boolean;
	isTemporary(  ):boolean;
	mine( ...arg0:baritone.api.utils.BlockOptionalMeta[] ):void;
	mine( ...arg0:net.minecraft.block.Block[] ):void;
	mine( arg0:baritone.api.utils.BlockOptionalMetaLookup ):void;
	mine( arg0:int, ...arg1:baritone.api.utils.BlockOptionalMeta[] ):void;
	mine( arg0:int, ...arg1:net.minecraft.block.Block[] ):void;
	mine( arg0:int, arg1:baritone.api.utils.BlockOptionalMetaLookup ):void;
	mineByName( ...arg0:string[] ):void;
	mineByName( arg0:int, ...arg1:string[] ):void;
	onLostControl(  ):void;
	onTick( arg0:boolean, arg1:boolean ):PathingCommand;
	priority(  ):double;

} // end IMineProcess

} // end namespace baritone.api.process

declare namespace baritone.api.process {

class PathingCommand/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end PathingCommand

} // end namespace baritone.api.process

declare namespace baritone.api.process {

/* enum */class PathingCommandType/* extends java.lang.Enum<any>*/ {

	// SET_GOAL_AND_PATH:PathingCommandType;
	// REQUEST_PAUSE:PathingCommandType;
	// CANCEL_AND_SET_GOAL:PathingCommandType;
	// REVALIDATE_GOAL_AND_PATH:PathingCommandType;
	// FORCE_REVALIDATE_GOAL_AND_PATH:PathingCommandType;
	// DEFER:PathingCommandType;
	// SET_GOAL_AND_PAUSE:PathingCommandType;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end PathingCommandType

} // end namespace baritone.api.process

declare namespace baritone.api.schematic {

interface ISchematic {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	widthX(  ):int;

} // end ISchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

interface ISchematicSystem {

	getByFile( arg0:java.io.File ):java.util.Optional<baritone.api.schematic.format.ISchematicFormat>;
	getFileExtensions(  ):java.util.List<string>;
	getRegistry(  ):baritone.api.command.registry.Registry<baritone.api.schematic.format.ISchematicFormat>;

} // end ISchematicSystem

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

interface IStaticSchematic/* extends ISchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	getColumn( arg0:int, arg1:int ):[net.minecraft.block.BlockState];
	getDirect( arg0:int, arg1:int, arg2:int ):net.minecraft.block.BlockState;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	widthX(  ):int;

} // end IStaticSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

class AbstractSchematic/* extends java.lang.Object implements ISchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	toString(  ):string;
	widthX(  ):int;

} // end AbstractSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

class CompositeSchematic/* extends AbstractSchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	put( arg0:ISchematic, arg1:int, arg2:int, arg3:int ):void;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	toString(  ):string;
	widthX(  ):int;

} // end CompositeSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

class FillSchematic/* extends AbstractSchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getBom(  ):baritone.api.utils.BlockOptionalMeta;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	toString(  ):string;
	widthX(  ):int;

} // end FillSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

class MaskSchematic/* extends AbstractSchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	static create( arg0:ISchematic, arg1:baritone.api.schematic.mask.Mask ):MaskSchematic;
	toString(  ):string;
	widthX(  ):int;

} // end MaskSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

class MirroredSchematic/* extends java.lang.Object implements ISchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	toString(  ):string;
	widthX(  ):int;

} // end MirroredSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

class ReplaceSchematic/* extends MaskSchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	static create( arg0:ISchematic, arg1:baritone.api.schematic.mask.Mask ):MaskSchematic;
	toString(  ):string;
	widthX(  ):int;

} // end ReplaceSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

class RotatedSchematic/* extends java.lang.Object implements ISchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	toString(  ):string;
	widthX(  ):int;

} // end RotatedSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

class ShellSchematic/* extends MaskSchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	static create( arg0:ISchematic, arg1:baritone.api.schematic.mask.Mask ):MaskSchematic;
	toString(  ):string;
	widthX(  ):int;

} // end ShellSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

class SubstituteSchematic/* extends AbstractSchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	toString(  ):string;
	widthX(  ):int;

} // end SubstituteSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic {

class WallsSchematic/* extends MaskSchematic*/ {

	desiredState( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState, arg4:java.util.List<net.minecraft.block.BlockState> ):net.minecraft.block.BlockState;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	heightY(  ):int;
	inSchematic( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	lengthZ(  ):int;
	reset(  ):void;
	size( arg0:net.minecraft.util.math.Direction$Axis ):int;
	static create( arg0:ISchematic, arg1:baritone.api.schematic.mask.Mask ):MaskSchematic;
	toString(  ):string;
	widthX(  ):int;

} // end WallsSchematic

} // end namespace baritone.api.schematic

declare namespace baritone.api.schematic.format {

interface ISchematicFormat {

	getFileExtensions(  ):java.util.List<string>;
	isFileType( arg0:java.io.File ):boolean;
	parse( arg0:any /*java.io.InputStream*/ ):baritone.api.schematic.IStaticSchematic;

} // end ISchematicFormat

} // end namespace baritone.api.schematic.format

declare namespace baritone.api.schematic.mask {

interface Mask {

	heightY(  ):int;
	intersection( arg0:Mask ):Mask;
	lengthZ(  ):int;
	not(  ):Mask;
	partOfMask( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	union( arg0:Mask ):Mask;
	widthX(  ):int;
	xor( arg0:Mask ):Mask;

} // end Mask

} // end namespace baritone.api.schematic.mask

declare namespace baritone.api.schematic.mask {

interface StaticMask/* extends Mask*/ {

	compute(  ):StaticMask;
	heightY(  ):int;
	intersection( arg0:Mask ):Mask;
	intersection( arg0:StaticMask ):StaticMask;
	lengthZ(  ):int;
	not(  ):StaticMask;
	partOfMask( arg0:int, arg1:int, arg2:int ):boolean;
	partOfMask( arg0:int, arg1:int, arg2:int, arg3:net.minecraft.block.BlockState ):boolean;
	union( arg0:Mask ):Mask;
	union( arg0:StaticMask ):StaticMask;
	widthX(  ):int;
	xor( arg0:Mask ):Mask;
	xor( arg0:StaticMask ):StaticMask;

} // end StaticMask

} // end namespace baritone.api.schematic.mask

declare namespace baritone.api.selection {

interface ISelection {

	aabb(  ):net.minecraft.util.math.Box;
	contract( arg0:net.minecraft.util.math.Direction, arg1:int ):ISelection;
	expand( arg0:net.minecraft.util.math.Direction, arg1:int ):ISelection;
	max(  ):baritone.api.utils.BetterBlockPos;
	min(  ):baritone.api.utils.BetterBlockPos;
	pos1(  ):baritone.api.utils.BetterBlockPos;
	pos2(  ):baritone.api.utils.BetterBlockPos;
	shift( arg0:net.minecraft.util.math.Direction, arg1:int ):ISelection;
	size(  ):net.minecraft.util.math.Vec3i;

} // end ISelection

} // end namespace baritone.api.selection

declare namespace baritone.api.selection {

interface ISelectionManager {

	addSelection( arg0:ISelection ):ISelection;
	addSelection( arg0:baritone.api.utils.BetterBlockPos, arg1:baritone.api.utils.BetterBlockPos ):ISelection;
	contract( arg0:ISelection, arg1:net.minecraft.util.math.Direction, arg2:int ):ISelection;
	expand( arg0:ISelection, arg1:net.minecraft.util.math.Direction, arg2:int ):ISelection;
	getLastSelection(  ):ISelection;
	getOnlySelection(  ):ISelection;
	getSelections(  ):[ISelection];
	removeAllSelections(  ):[ISelection];
	removeSelection( arg0:ISelection ):ISelection;
	shift( arg0:ISelection, arg1:net.minecraft.util.math.Direction, arg2:int ):ISelection;

} // end ISelectionManager

} // end namespace baritone.api.selection

declare namespace baritone.api.utils {

class BetterBlockPos/* extends net.minecraft.util.math.BlockPos*/ {

	above(  ):BetterBlockPos;
	above( arg0:int ):BetterBlockPos;
	add( i:int, j:int, k:int ):net.minecraft.util.math.BlockPos;
	add( vec3i:net.minecraft.util.math.Vec3i ):net.minecraft.util.math.BlockPos;
	asLong(  ):long;
	below(  ):BetterBlockPos;
	below( arg0:int ):BetterBlockPos;
	clampToWithin( pos:net.minecraft.util.math.Vec3d ):net.minecraft.util.math.Vec3d;
	compareTo( vec3i:net.minecraft.util.math.Vec3i ):int;
	crossProduct( pos:net.minecraft.util.math.Vec3i ):net.minecraft.util.math.BlockPos;
	distanceSq( arg0:BetterBlockPos ):double;
	distanceTo( arg0:BetterBlockPos ):double;
	east(  ):BetterBlockPos;
	east( arg0:int ):BetterBlockPos;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getComponentAlongAxis( axis:net.minecraft.util.math.Direction$Axis ):int;
	getManhattanDistance( vec:net.minecraft.util.math.Vec3i ):int;
	getSquaredDistance( pos:any /*net.minecraft.util.math.Position*/ ):double;
	getSquaredDistance( vec:net.minecraft.util.math.Vec3i ):double;
	getSquaredDistance( x:double, y:double, z:double ):double;
	getSquaredDistanceFromCenter( x:double, y:double, z:double ):double;
	getX(  ):int;
	getY(  ):int;
	getZ(  ):int;
	isWithinDistance( pos:any /*net.minecraft.util.math.Position*/, distance:double ):boolean;
	isWithinDistance( vec:net.minecraft.util.math.Vec3i, distance:double ):boolean;
	multiply( i:int ):net.minecraft.util.math.BlockPos;
	mutableCopy(  ):net.minecraft.util.math.BlockPos$Mutable;
	north(  ):BetterBlockPos;
	north( arg0:int ):BetterBlockPos;
	offset( axis:net.minecraft.util.math.Direction$Axis, i:int ):net.minecraft.util.math.BlockPos;
	relative( arg0:net.minecraft.util.math.Direction ):BetterBlockPos;
	relative( arg0:net.minecraft.util.math.Direction, arg1:int ):BetterBlockPos;
	rotate( rotation:any /*net.minecraft.util.BlockRotation*/ ):net.minecraft.util.math.BlockPos;
	south(  ):BetterBlockPos;
	south( arg0:int ):BetterBlockPos;
	static add( value:long, x:int, y:int, z:int ):long;
	static asLong( x:int, y:int, z:int ):long;
	static createOffsetCodec( maxAbsValue:int ):any /*com.mojang.serialization.Codec*/;
	static deserializeFromLong( arg0:long ):BetterBlockPos;
	static findClosest( pos:net.minecraft.util.math.BlockPos, horizontalRange:int, verticalRange:int, condition:java.util.function.Predicate<net.minecraft.util.math.BlockPos> ):java.util.Optional<net.minecraft.util.math.BlockPos>;
	static from( arg0:net.minecraft.util.math.BlockPos ):BetterBlockPos;
	static fromLong( packedPos:long ):net.minecraft.util.math.BlockPos;
	static iterate( start:net.minecraft.util.math.BlockPos, end:net.minecraft.util.math.BlockPos ):java.lang.Iterable<net.minecraft.util.math.BlockPos>;
	static iterate( startX:int, startY:int, startZ:int, endX:int, endY:int, endZ:int ):java.lang.Iterable<net.minecraft.util.math.BlockPos>;
	static iterateInSquare( center:net.minecraft.util.math.BlockPos, radius:int, firstDirection:net.minecraft.util.math.Direction, secondDirection:net.minecraft.util.math.Direction ):java.lang.Iterable<net.minecraft.util.math.BlockPos$Mutable>;
	static iterateOutwards( center:net.minecraft.util.math.BlockPos, rangeX:int, rangeY:int, rangeZ:int ):java.lang.Iterable<net.minecraft.util.math.BlockPos>;
	static iterateRandomly( random:any /*net.minecraft.util.math.random.Random*/, count:int, around:net.minecraft.util.math.BlockPos, range:int ):java.lang.Iterable<net.minecraft.util.math.BlockPos>;
	static iterateRandomly( random:any /*net.minecraft.util.math.random.Random*/, count:int, minX:int, minY:int, minZ:int, maxX:int, maxY:int, maxZ:int ):java.lang.Iterable<net.minecraft.util.math.BlockPos>;
	static iterateRecursively( pos:net.minecraft.util.math.BlockPos, maxDepth:int, maxIterations:int, nextQueuer:java.util.function.BiConsumer<net.minecraft.util.math.BlockPos, java.util.function.Consumer<net.minecraft.util.math.BlockPos>>, callback:java.util.function.Predicate<net.minecraft.util.math.BlockPos> ):int;
	static longHash( arg0:BetterBlockPos ):long;
	static longHash( arg0:int, arg1:int, arg2:int ):long;
	static max( a:net.minecraft.util.math.BlockPos, b:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.BlockPos;
	static min( a:net.minecraft.util.math.BlockPos, b:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.BlockPos;
	static ofFloored( pos:any /*net.minecraft.util.math.Position*/ ):net.minecraft.util.math.BlockPos;
	static ofFloored( x:double, y:double, z:double ):net.minecraft.util.math.BlockPos;
	static offset( value:long, direction:net.minecraft.util.math.Direction ):long;
	static removeChunkSectionLocalY( y:long ):long;
	static serializeToLong( arg0:int, arg1:int, arg2:int ):long;
	static stream( box:any /*net.minecraft.util.math.BlockBox*/ ):java.util.stream.Stream<net.minecraft.util.math.BlockPos>;
	static stream( box:net.minecraft.util.math.Box ):java.util.stream.Stream<net.minecraft.util.math.BlockPos>;
	static stream( start:net.minecraft.util.math.BlockPos, end:net.minecraft.util.math.BlockPos ):java.util.stream.Stream<net.minecraft.util.math.BlockPos>;
	static stream( startX:int, startY:int, startZ:int, endX:int, endY:int, endZ:int ):java.util.stream.Stream<net.minecraft.util.math.BlockPos>;
	static streamOutwards( center:net.minecraft.util.math.BlockPos, maxX:int, maxY:int, maxZ:int ):java.util.stream.Stream<net.minecraft.util.math.BlockPos>;
	static streamSouthEastSquare( pos:net.minecraft.util.math.BlockPos ):java.util.stream.Stream<net.minecraft.util.math.BlockPos>;
	static unpackLongX( packedPos:long ):int;
	static unpackLongY( packedPos:long ):int;
	static unpackLongZ( packedPos:long ):int;
	subtract( vec3i:net.minecraft.util.math.Vec3i ):net.minecraft.util.math.BlockPos;
	toBottomCenterPos(  ):net.minecraft.util.math.Vec3d;
	toCenterPos(  ):net.minecraft.util.math.Vec3d;
	toImmutable(  ):net.minecraft.util.math.BlockPos;
	toShortString(  ):string;
	toString(  ):string;
	west(  ):BetterBlockPos;
	west( arg0:int ):BetterBlockPos;
	withY( y:int ):net.minecraft.util.math.BlockPos;

} // end BetterBlockPos

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

class BlockOptionalMeta/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getAllBlockStates(  ):java.util.Set<net.minecraft.block.BlockState>;
	getAnyBlockState(  ):net.minecraft.block.BlockState;
	getBlock(  ):net.minecraft.block.Block;
	matches( arg0:net.minecraft.block.Block ):boolean;
	matches( arg0:net.minecraft.block.BlockState ):boolean;
	matches( arg0:net.minecraft.item.ItemStack ):boolean;
	stackHashes(  ):java.util.Set<int|null>;
	toString(  ):string;

} // end BlockOptionalMeta

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

class BlockOptionalMetaLookup/* extends java.lang.Object*/ {

	blocks(  ):java.util.List<BlockOptionalMeta>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	has( arg0:net.minecraft.block.Block ):boolean;
	has( arg0:net.minecraft.block.BlockState ):boolean;
	has( arg0:net.minecraft.item.ItemStack ):boolean;
	toString(  ):string;

} // end BlockOptionalMetaLookup

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

class BlockUtils/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	static blockToString( arg0:net.minecraft.block.Block ):string;
	static stringToBlockNullable( arg0:string ):net.minecraft.block.Block;
	static stringToBlockRequired( arg0:string ):net.minecraft.block.Block;
	toString(  ):string;

} // end BlockUtils

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

interface Helper {

	// static getPrefix(  ):net.minecraft.text.Text;
	logDebug( arg0:string ):void;
	logDirect( ...arg0:net.minecraft.text.Text[] ):void;
	logDirect( arg0:boolean, ...arg1:net.minecraft.text.Text[] ):void;
	logDirect( arg0:string ):void;
	logDirect( arg0:string, arg1:boolean ):void;
	logDirect( arg0:string, arg1:net.minecraft.util.Formatting ):void;
	logDirect( arg0:string, arg1:net.minecraft.util.Formatting, arg2:boolean ):void;
	logNotification( arg0:string ):void;
	logNotification( arg0:string, arg1:boolean ):void;
	logNotificationDirect( arg0:string ):void;
	logNotificationDirect( arg0:string, arg1:boolean ):void;
	logToast( arg0:net.minecraft.text.Text, arg1:net.minecraft.text.Text ):void;
	logToast( arg0:string ):void;
	logToast( arg0:string, arg1:string ):void;
	logUnhandledException( arg0:any /*java.lang.Throwable*/ ):void;

} // end Helper

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

interface IInputOverrideHandler/* extends baritone.api.behavior.IBehavior*/ {

	clearAllKeys(  ):void;
	isInputForcedDown( arg0:baritone.api.utils.input.Input ):boolean;
	onBlockChange( arg0:baritone.api.event.events.BlockChangeEvent ):void;
	onBlockInteract( arg0:baritone.api.event.events.BlockInteractEvent ):void;
	onChunkEvent( arg0:baritone.api.event.events.ChunkEvent ):void;
	onPathEvent( arg0:baritone.api.event.events.PathEvent ):void;
	onPlayerDeath(  ):void;
	onPlayerRotationMove( arg0:baritone.api.event.events.RotationMoveEvent ):void;
	onPlayerSprintState( arg0:baritone.api.event.events.SprintStateEvent ):void;
	onPlayerUpdate( arg0:baritone.api.event.events.PlayerUpdateEvent ):void;
	onPostTick( arg0:baritone.api.event.events.TickEvent ):void;
	onPreTabComplete( arg0:baritone.api.event.events.TabCompleteEvent ):void;
	onReceivePacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onRenderPass( arg0:baritone.api.event.events.RenderEvent ):void;
	onSendChatMessage( arg0:baritone.api.event.events.ChatEvent ):void;
	onSendPacket( arg0:baritone.api.event.events.PacketEvent ):void;
	onTick( arg0:baritone.api.event.events.TickEvent ):void;
	onWorldEvent( arg0:baritone.api.event.events.WorldEvent ):void;
	setInputForceState( arg0:baritone.api.utils.input.Input, arg1:boolean ):void;

} // end IInputOverrideHandler

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

interface IPlayerContext {

	// static eyeHeight( arg0:boolean ):double;
	entities(  ):java.lang.Iterable<net.minecraft.entity.Entity>;
	entitiesStream(  ):java.util.stream.Stream<net.minecraft.entity.Entity>;
	getSelectedBlock(  ):java.util.Optional<net.minecraft.util.math.BlockPos>;
	isLookingAt( arg0:net.minecraft.util.math.BlockPos ):boolean;
	minecraft(  ):net.minecraft.client.MinecraftClient;
	objectMouseOver(  ):net.minecraft.util.hit.HitResult;
	player(  ):net.minecraft.client.network.ClientPlayerEntity;
	playerController(  ):IPlayerController;
	playerFeet(  ):BetterBlockPos;
	playerFeetAsVec(  ):net.minecraft.util.math.Vec3d;
	playerHead(  ):net.minecraft.util.math.Vec3d;
	playerMotion(  ):net.minecraft.util.math.Vec3d;
	playerRotations(  ):Rotation;
	viewerPos(  ):BetterBlockPos;
	world(  ):net.minecraft.world.World;
	worldData(  ):baritone.api.cache.IWorldData;

} // end IPlayerContext

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

interface IPlayerController {

	clickBlock( arg0:net.minecraft.util.math.BlockPos, arg1:net.minecraft.util.math.Direction ):boolean;
	getBlockReachDistance(  ):double;
	getGameType(  ):net.minecraft.world.GameMode;
	hasBrokenBlock(  ):boolean;
	onPlayerDamageBlock( arg0:net.minecraft.util.math.BlockPos, arg1:net.minecraft.util.math.Direction ):boolean;
	processRightClick( arg0:net.minecraft.client.network.ClientPlayerEntity, arg1:net.minecraft.world.World, arg2:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	processRightClickBlock( arg0:net.minecraft.client.network.ClientPlayerEntity, arg1:net.minecraft.world.World, arg2:net.minecraft.util.Hand, arg3:net.minecraft.util.hit.BlockHitResult ):net.minecraft.util.ActionResult;
	resetBlockRemoving(  ):void;
	setHittingBlock( arg0:boolean ):void;
	syncHeldItem(  ):void;
	windowClick( arg0:int, arg1:int, arg2:int, arg3:any /*net.minecraft.screen.slot.SlotActionType*/, arg4:net.minecraft.entity.player.PlayerEntity ):void;

} // end IPlayerController

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

class NotificationHelper/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end NotificationHelper

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

class PathCalculationResult/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getPath(  ):java.util.Optional<baritone.api.pathing.calc.IPath>;
	getType(  ):any /*baritone.api.utils.PathCalculationResult$Type*/;
	toString(  ):string;

} // end PathCalculationResult

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

class RayTraceUtils/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	static inferSneakingEyePosition( arg0:net.minecraft.entity.Entity ):net.minecraft.util.math.Vec3d;
	static rayTraceTowards( arg0:net.minecraft.entity.Entity, arg1:Rotation, arg2:double ):net.minecraft.util.hit.HitResult;
	static rayTraceTowards( arg0:net.minecraft.entity.Entity, arg1:Rotation, arg2:double, arg3:boolean ):net.minecraft.util.hit.HitResult;
	toString(  ):string;

} // end RayTraceUtils

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

class Rotation/* extends java.lang.Object*/ {

	add( arg0:Rotation ):Rotation;
	clamp(  ):Rotation;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getPitch(  ):float;
	getYaw(  ):float;
	isReallyCloseTo( arg0:Rotation ):boolean;
	normalize(  ):Rotation;
	normalizeAndClamp(  ):Rotation;
	static clampPitch( arg0:float ):float;
	static normalizeYaw( arg0:float ):float;
	subtract( arg0:Rotation ):Rotation;
	toString(  ):string;
	withPitch( arg0:float ):Rotation;
	yawIsReallyClose( arg0:Rotation ):boolean;

} // end Rotation

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

class RotationUtils/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	static calcLookDirectionFromRotation( arg0:Rotation ):net.minecraft.util.math.Vec3d;
	static calcRotationFromCoords( arg0:net.minecraft.util.math.BlockPos, arg1:net.minecraft.util.math.BlockPos ):Rotation;
	static calcRotationFromVec3d( arg0:net.minecraft.util.math.Vec3d, arg1:net.minecraft.util.math.Vec3d, arg2:Rotation ):Rotation;
	static calcVec3dFromRotation( arg0:Rotation ):net.minecraft.util.math.Vec3d;
	static reachable( arg0:IPlayerContext, arg1:net.minecraft.util.math.BlockPos ):java.util.Optional<Rotation>;
	static reachable( arg0:IPlayerContext, arg1:net.minecraft.util.math.BlockPos, arg2:boolean ):java.util.Optional<Rotation>;
	static reachable( arg0:IPlayerContext, arg1:net.minecraft.util.math.BlockPos, arg2:double ):java.util.Optional<Rotation>;
	static reachable( arg0:IPlayerContext, arg1:net.minecraft.util.math.BlockPos, arg2:double, arg3:boolean ):java.util.Optional<Rotation>;
	static reachable( arg0:net.minecraft.client.network.ClientPlayerEntity, arg1:net.minecraft.util.math.BlockPos, arg2:double ):java.util.Optional<Rotation>;
	static reachable( arg0:net.minecraft.client.network.ClientPlayerEntity, arg1:net.minecraft.util.math.BlockPos, arg2:double, arg3:boolean ):java.util.Optional<Rotation>;
	static reachableCenter( arg0:IPlayerContext, arg1:net.minecraft.util.math.BlockPos, arg2:double, arg3:boolean ):java.util.Optional<Rotation>;
	static reachableCenter( arg0:net.minecraft.entity.Entity, arg1:net.minecraft.util.math.BlockPos, arg2:double, arg3:boolean ):java.util.Optional<Rotation>;
	static reachableOffset( arg0:IPlayerContext, arg1:net.minecraft.util.math.BlockPos, arg2:net.minecraft.util.math.Vec3d, arg3:double, arg4:boolean ):java.util.Optional<Rotation>;
	static reachableOffset( arg0:net.minecraft.entity.Entity, arg1:net.minecraft.util.math.BlockPos, arg2:net.minecraft.util.math.Vec3d, arg3:double, arg4:boolean ):java.util.Optional<Rotation>;
	static wrapAnglesToRelative( arg0:Rotation, arg1:Rotation ):Rotation;
	toString(  ):string;

} // end RotationUtils

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

class SettingsUtil/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	static javaOnlySetting<T>( arg0:baritone.api.Settings$Setting<any> ):boolean;
	static maybeCensor( arg0:int ):string;
	static modifiedSettings<T>( arg0:baritone.api.Settings ):java.util.List<baritone.api.Settings$Setting<any>>;
	static parseAndApply( arg0:baritone.api.Settings, arg1:string, arg2:string ):void;
	static readAndApply( arg0:baritone.api.Settings, arg1:string ):void;
	static save( arg0:baritone.api.Settings ):void;
	static settingDefaultToString<T>( arg0:baritone.api.Settings$Setting<any> ):string;
	static settingToString<T>( arg0:baritone.api.Settings$Setting<any> ):string;
	static settingTypeToString<T>( arg0:baritone.api.Settings$Setting<any> ):string;
	static settingValueToString<T>( arg0:baritone.api.Settings$Setting<T>, arg1:T ):string;
	static settingValueToString<T>( arg0:baritone.api.Settings$Setting<any> ):string;
	toString(  ):string;

} // end SettingsUtil

} // end namespace baritone.api.utils

declare namespace baritone.api.utils {

class VecUtils/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	static calculateBlockCenter( arg0:net.minecraft.world.World, arg1:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.Vec3d;
	static distanceToCenter( arg0:net.minecraft.util.math.BlockPos, arg1:double, arg2:double, arg3:double ):double;
	static entityDistanceToCenter( arg0:net.minecraft.entity.Entity, arg1:net.minecraft.util.math.BlockPos ):double;
	static entityFlatDistanceToCenter( arg0:net.minecraft.entity.Entity, arg1:net.minecraft.util.math.BlockPos ):double;
	static getBlockPosCenter( arg0:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.Vec3d;
	toString(  ):string;

} // end VecUtils

} // end namespace baritone.api.utils

declare namespace baritone.api.utils.input {

/* enum */class Input/* extends java.lang.Enum<any>*/ {

	// MOVE_FORWARD:Input;
	// MOVE_BACK:Input;
	// MOVE_LEFT:Input;
	// MOVE_RIGHT:Input;
	// CLICK_LEFT:Input;
	// CLICK_RIGHT:Input;
	// JUMP:Input;
	// SNEAK:Input;
	// SPRINT:Input;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end Input

} // end namespace baritone.api.utils.input

declare namespace baritone.api.utils.interfaces {

interface IGoalRenderPos {

	getGoalPos(  ):net.minecraft.util.math.BlockPos;

} // end IGoalRenderPos

} // end namespace baritone.api.utils.interfaces

declare namespace net.minecraft.client {

class MinecraftClient/* extends net.minecraft.util.thread.ReentrantThreadExecutor<any> implements WindowEventHandler*/ {

	addDetailsToCrashReport( report:any /*net.minecraft.util.crash.CrashReport*/ ):any /*net.minecraft.util.crash.CrashReport*/;
	ask<Msg>( messageProvider:java.util.function.Function<any /*net.minecraft.util.thread.MessageListener*/, Msg> ):any /*java.util.concurrent.CompletableFuture*/;
	askFallible<Msg>( messageProvider:java.util.function.Function<any /*net.minecraft.util.thread.MessageListener*/, Msg> ):any /*java.util.concurrent.CompletableFuture*/;
	close(  ):void;
	createIntegratedServerLoader(  ):any /*net.minecraft.server.integrated.IntegratedServerLoader*/;
	createSamplers(  ):java.util.List<any /*net.minecraft.util.profiler.Sampler*/>;
	disconnect(  ):void;
	disconnect( disconnectionScreen:any /*net.minecraft.client.gui.screen.Screen*/ ):void;
	disconnect( disconnectionScreen:any /*net.minecraft.client.gui.screen.Screen*/, transferring:boolean ):void;
	ensureAbuseReportContext( environment:any /*net.minecraft.client.session.report.ReporterEnvironment*/ ):void;
	enterReconfiguration( reconfigurationScreen:any /*net.minecraft.client.gui.screen.Screen*/ ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	execute( runnable:any /*java.lang.Runnable*/ ):void;
	executeSync( runnable:any /*java.lang.Runnable*/ ):void;
	executeTask<R>( task:R ):void;
	forcesUnicodeFont(  ):boolean;
	getAbuseReportContext(  ):any /*net.minecraft.client.session.report.AbuseReportContext*/;
	getBakedModelManager(  ):any /*net.minecraft.client.render.model.BakedModelManager*/;
	getBlockColors(  ):any /*net.minecraft.client.color.block.BlockColors*/;
	getBlockEntityRenderDispatcher(  ):any /*net.minecraft.client.render.block.entity.BlockEntityRenderDispatcher*/;
	getBlockRenderManager(  ):any /*net.minecraft.client.render.block.BlockRenderManager*/;
	getBufferBuilders(  ):any /*net.minecraft.client.render.BufferBuilderStorage*/;
	getCameraEntity(  ):net.minecraft.entity.Entity;
	getChatRestriction(  ):any /*net.minecraft.client.MinecraftClient$ChatRestriction*/;
	getCommandHistoryManager(  ):any /*net.minecraft.client.util.CommandHistoryManager*/;
	getCreativeHotbarStorage(  ):any /*net.minecraft.client.option.HotbarStorage*/;
	getCurrentFps(  ):int;
	getCurrentServerEntry(  ):any /*net.minecraft.client.network.ServerInfo*/;
	getDataFixer(  ):any /*com.mojang.datafixers.DataFixer*/;
	getDebugHud(  ):any /*net.minecraft.client.gui.hud.DebugHud*/;
	getDefaultResourcePack(  ):any /*net.minecraft.resource.DefaultResourcePack*/;
	getEntityModelLoader(  ):any /*net.minecraft.client.render.entity.model.EntityModelLoader*/;
	getEntityRenderDispatcher(  ):any /*net.minecraft.client.render.entity.EntityRenderDispatcher*/;
	getFramebuffer(  ):any /*net.minecraft.client.gl.Framebuffer*/;
	getGameProfile(  ):any /*com.mojang.authlib.GameProfile*/;
	getGameVersion(  ):string;
	getGpuUtilizationPercentage(  ):double;
	getGuiAtlasManager(  ):any /*net.minecraft.client.texture.GuiAtlasManager*/;
	getItemRenderer(  ):any /*net.minecraft.client.render.item.ItemRenderer*/;
	getLanguageManager(  ):any /*net.minecraft.client.resource.language.LanguageManager*/;
	getLevelStorage(  ):any /*net.minecraft.world.level.storage.LevelStorage*/;
	getMapDecorationsAtlasManager(  ):any /*net.minecraft.client.texture.MapDecorationsAtlasManager*/;
	getMessageHandler(  ):any /*net.minecraft.client.network.message.MessageHandler*/;
	getMultiplayerBanDetails(  ):any /*com.mojang.authlib.minecraft.BanDetails*/;
	getMusicTracker(  ):any /*net.minecraft.client.sound.MusicTracker*/;
	getMusicType(  ):any /*net.minecraft.sound.MusicSound*/;
	getName(  ):string;
	getNarratorManager(  ):any /*net.minecraft.client.util.NarratorManager*/;
	getNavigationType(  ):any /*net.minecraft.client.gui.navigation.GuiNavigationType*/;
	getNetworkHandler(  ):net.minecraft.client.network.ClientPlayNetworkHandler;
	getNetworkProxy(  ):any /*java.net.Proxy*/;
	getOverlay(  ):any /*net.minecraft.client.gui.screen.Overlay*/;
	getPaintingManager(  ):any /*net.minecraft.client.texture.PaintingManager*/;
	getProfileKeys(  ):any /*net.minecraft.client.session.ProfileKeys*/;
	getProfiler(  ):any /*net.minecraft.util.profiler.Profiler*/;
	getQuickPlayLogger(  ):any /*net.minecraft.client.QuickPlayLogger*/;
	getRealmsPeriodicCheckers(  ):any /*net.minecraft.client.realms.RealmsPeriodicCheckers*/;
	getRenderTickCounter(  ):any /*net.minecraft.client.render.RenderTickCounter*/;
	getRenderTime(  ):long;
	getResourceManager(  ):any /*net.minecraft.resource.ResourceManager*/;
	getResourcePackDir(  ):any /*java.nio.file.Path*/;
	getResourcePackManager(  ):any /*net.minecraft.resource.ResourcePackManager*/;
	getServer(  ):any /*net.minecraft.server.integrated.IntegratedServer*/;
	getServerResourcePackProvider(  ):any /*net.minecraft.client.resource.server.ServerResourcePackLoader*/;
	getServicesSignatureVerifier(  ):any /*net.minecraft.network.encryption.SignatureVerifier*/;
	getSession(  ):any /*net.minecraft.client.session.Session*/;
	getSessionService(  ):any /*com.mojang.authlib.minecraft.MinecraftSessionService*/;
	getSkinProvider(  ):any /*net.minecraft.client.texture.PlayerSkinProvider*/;
	getSocialInteractionsManager(  ):any /*net.minecraft.client.network.SocialInteractionsManager*/;
	getSoundManager(  ):any /*net.minecraft.client.sound.SoundManager*/;
	getSplashTextLoader(  ):any /*net.minecraft.client.resource.SplashTextResourceSupplier*/;
	getSpriteAtlas( id:net.minecraft.util.Identifier ):java.util.function.Function<net.minecraft.util.Identifier, any /*net.minecraft.client.texture.Sprite*/>;
	getStatusEffectSpriteManager(  ):any /*net.minecraft.client.texture.StatusEffectSpriteManager*/;
	getSymlinkFinder(  ):any /*net.minecraft.util.path.SymlinkFinder*/;
	getTaskCount(  ):int;
	getTelemetryManager(  ):any /*net.minecraft.client.session.telemetry.TelemetryManager*/;
	getTextureManager(  ):any /*net.minecraft.client.texture.TextureManager*/;
	getToastManager(  ):any /*net.minecraft.client.toast.ToastManager*/;
	getTutorialManager(  ):any /*net.minecraft.client.tutorial.TutorialManager*/;
	getVersionType(  ):string;
	getVideoWarningManager(  ):any /*net.minecraft.client.resource.VideoWarningManager*/;
	getWindow(  ):any /*net.minecraft.client.util.Window*/;
	getWorldGenerationProgressTracker(  ):any /*net.minecraft.server.WorldGenerationProgressTracker*/;
	handleProfilerKeyPress( digit:int ):void;
	hasOutline( entity:net.minecraft.entity.Entity ):boolean;
	hasReducedDebugInfo(  ):boolean;
	isConnectedToLocalServer(  ):boolean;
	isDemo(  ):boolean;
	isFinishedLoading(  ):boolean;
	isInSingleplayer(  ):boolean;
	isIntegratedServerRunning(  ):boolean;
	isMultiplayerEnabled(  ):boolean;
	isOnThread(  ):boolean;
	isOptionalTelemetryEnabled(  ):boolean;
	isOptionalTelemetryEnabledByApi(  ):boolean;
	isPaused(  ):boolean;
	isRealmsEnabled(  ):boolean;
	isRunning(  ):boolean;
	isTelemetryEnabledByApi(  ):boolean;
	isUsernameBanned(  ):boolean;
	isWindowFocused(  ):boolean;
	joinWorld( world:net.minecraft.client.world.ClientWorld, worldEntryReason:any /*net.minecraft.client.gui.screen.DownloadingTerrainScreen$WorldEntryReason*/ ):void;
	loadBlockList(  ):void;
	onCursorEnterChanged(  ):void;
	onDisconnected(  ):void;
	onResolutionChanged(  ):void;
	onResourceReloadFailure( exception:any /*java.lang.Throwable*/, resourceName:net.minecraft.text.Text, loadingContext:any /*net.minecraft.client.MinecraftClient$LoadingContext*/ ):void;
	onWindowFocusChanged( focused:boolean ):void;
	openGameMenu( pauseOnly:boolean ):void;
	printCrashReport( crashReport:any /*net.minecraft.util.crash.CrashReport*/ ):void;
	providesProfileKeys(  ):boolean;
	reloadResources(  ):any /*java.util.concurrent.CompletableFuture*/;
	reloadResourcesConcurrently(  ):any /*java.util.concurrent.CompletableFuture*/;
	run(  ):void;
	runTask(  ):boolean;
	runTasks( stopCondition:any /*java.util.function.BooleanSupplier*/ ):void;
	scheduleStop(  ):void;
	send<R>( runnable:R ):void;
	setCameraEntity( entity:net.minecraft.entity.Entity ):void;
	setCrashReportSupplier( crashReport:any /*net.minecraft.util.crash.CrashReport*/ ):void;
	setCrashReportSupplierAndAddDetails( crashReport:any /*net.minecraft.util.crash.CrashReport*/ ):void;
	setMipmapLevels( mipmapLevels:int ):void;
	setNavigationType( navigationType:any /*net.minecraft.client.gui.navigation.GuiNavigationType*/ ):void;
	setOverlay( overlay:any /*net.minecraft.client.gui.screen.Overlay*/ ):void;
	setScreen( screen:any /*net.minecraft.client.gui.screen.Screen*/ ):void;
	setScreenAndRender( screen:any /*net.minecraft.client.gui.screen.Screen*/ ):void;
	shouldBlockMessages( sender:java.util.UUID ):boolean;
	shouldExecuteAsync(  ):boolean;
	shouldFilterText(  ):boolean;
	startIntegratedServer( session:any /*net.minecraft.world.level.storage.LevelStorage$Session*/, dataPackManager:any /*net.minecraft.resource.ResourcePackManager*/, saveLoader:any /*net.minecraft.server.SaveLoader*/, newWorld:boolean ):void;
	static addSystemDetailsToCrashReport( client:MinecraftClient, languageManager:any /*net.minecraft.client.resource.language.LanguageManager*/, version:string, options:any /*net.minecraft.client.option.GameOptions*/, report:any /*net.minecraft.util.crash.CrashReport*/ ):void;
	static getInstance(  ):MinecraftClient;
	static getLauncherBrand(  ):string;
	static getModStatus(  ):any /*net.minecraft.util.ModStatus*/;
	static isAmbientOcclusionEnabled(  ):boolean;
	static isFabulousGraphicsOrBetter(  ):boolean;
	static isFancyGraphicsOrBetter(  ):boolean;
	static isHudEnabled(  ):boolean;
	static printCrashReport( client:MinecraftClient, runDirectory:java.io.File, crashReport:any /*net.minecraft.util.crash.CrashReport*/ ):void;
	stop(  ):void;
	submit( task:any /*java.lang.Runnable*/ ):any /*java.util.concurrent.CompletableFuture*/;
	submit<V>( task:java.util.function.Supplier<V> ):any /*java.util.concurrent.CompletableFuture*/;
	submitAndJoin( runnable:any /*java.lang.Runnable*/ ):void;
	takePanorama( directory:java.io.File, width:int, height:int ):net.minecraft.text.Text;
	tick(  ):void;
	toString(  ):string;
	toggleDebugProfiler( chatMessageSender:java.util.function.Consumer<net.minecraft.text.Text> ):boolean;
	updateWindowTitle(  ):void;
	uuidEquals( uuid:java.util.UUID ):boolean;
	waitForTasks(  ):void;

} // end MinecraftClient

} // end namespace net.minecraft.client

declare namespace net.minecraft.client.network {

class ClientPlayerEntity/* extends AbstractClientPlayerEntity*/ {

	addCommandTag( tag:string ):boolean;
	addCritParticles( target:net.minecraft.entity.Entity ):void;
	addEnchantedHitParticles( target:net.minecraft.entity.Entity ):void;
	addExhaustion( exhaustion:float ):void;
	addExperience( experience:int ):void;
	addExperienceLevels( levels:int ):void;
	addPortalChunkTicketAt( pos:net.minecraft.util.math.BlockPos ):void;
	addScore( score:int ):void;
	addShoulderEntity( entityNbt:net.minecraft.nbt.NbtCompound ):boolean;
	addStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance ):boolean;
	addStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance, source:net.minecraft.entity.Entity ):boolean;
	addVelocity( deltaX:double, deltaY:double, deltaZ:double ):void;
	addVelocity( velocity:net.minecraft.util.math.Vec3d ):void;
	addVelocityInternal( velocity:net.minecraft.util.math.Vec3d ):void;
	animateDamage( yaw:float ):void;
	applyEnchantmentCosts( enchantedItem:net.minecraft.item.ItemStack, experienceLevels:int ):void;
	applyFluidMovingSpeed( gravity:double, falling:boolean, motion:net.minecraft.util.math.Vec3d ):net.minecraft.util.math.Vec3d;
	applyMirror( mirror:any /*net.minecraft.util.BlockMirror*/ ):float;
	applyMovementInput( movementInput:net.minecraft.util.math.Vec3d, slipperiness:float ):net.minecraft.util.math.Vec3d;
	applyRotation( rotation:any /*net.minecraft.util.BlockRotation*/ ):float;
	areItemsDifferent( stack:net.minecraft.item.ItemStack, stack2:net.minecraft.item.ItemStack ):boolean;
	attack( target:net.minecraft.entity.Entity ):void;
	attemptTickInVoid(  ):void;
	baseTick(  ):void;
	blockedByShield( source:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	bypassesLandingEffects(  ):boolean;
	bypassesSteppingEffects(  ):boolean;
	calculateDimensions(  ):void;
	canAvoidTraps(  ):boolean;
	canBeHitByProjectile(  ):boolean;
	canBeSpectated( spectator:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):boolean;
	canBreatheInWater(  ):boolean;
	canConsume( ignoreHunger:boolean ):boolean;
	canEquip( stack:net.minecraft.item.ItemStack ):boolean;
	canExplosionDestroyBlock( explosion:any /*net.minecraft.world.explosion.Explosion*/, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, explosionPower:float ):boolean;
	canFoodHeal(  ):boolean;
	canFreeze(  ):boolean;
	canHarvest( state:net.minecraft.block.BlockState ):boolean;
	canHaveStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance ):boolean;
	canHit(  ):boolean;
	canInteractWithBlockAt( pos:net.minecraft.util.math.BlockPos, additionalRange:double ):boolean;
	canInteractWithEntity( entity:net.minecraft.entity.Entity, additionalRange:double ):boolean;
	canInteractWithEntityIn( box:net.minecraft.util.math.Box, additionalRange:double ):boolean;
	canModifyAt( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos ):boolean;
	canModifyBlocks(  ):boolean;
	canMoveVoluntarily(  ):boolean;
	canPlaceOn( pos:net.minecraft.util.math.BlockPos, facing:net.minecraft.util.math.Direction, stack:net.minecraft.item.ItemStack ):boolean;
	canResetTimeBySleeping(  ):boolean;
	canSee( entity:net.minecraft.entity.Entity ):boolean;
	canSprintAsVehicle(  ):boolean;
	canTakeDamage(  ):boolean;
	canTarget( target:net.minecraft.entity.LivingEntity ):boolean;
	canTarget( type:net.minecraft.entity.EntityType<any /*java.lang.Object*/> ):boolean;
	canTeleportBetween( from:net.minecraft.world.World, to:net.minecraft.world.World ):boolean;
	canUsePortals( allowVehicles:boolean ):boolean;
	canUseSlot( slot:net.minecraft.entity.EquipmentSlot ):boolean;
	canWalkOnFluid( state:net.minecraft.fluid.FluidState ):boolean;
	cannotBeSilenced(  ):boolean;
	changeLookDirection( cursorDeltaX:double, cursorDeltaY:double ):void;
	checkDespawn(  ):void;
	checkFallFlying(  ):boolean;
	clearActiveItem(  ):void;
	clearCurrentExplosion(  ):void;
	clearSleepingPosition(  ):void;
	clearStatusEffects(  ):boolean;
	closeHandledScreen(  ):void;
	closeScreen(  ):void;
	collidesWith( other:net.minecraft.entity.Entity ):boolean;
	collidesWithStateAtPos( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState ):boolean;
	copyFrom( original:net.minecraft.entity.Entity ):void;
	copyPositionAndRotation( entity:net.minecraft.entity.Entity ):void;
	createSpawnPacket( entityTrackerEntry:any /*net.minecraft.server.network.EntityTrackerEntry*/ ):net.minecraft.network.packet.Packet<any /*net.minecraft.network.listener.ClientPlayPacketListener*/>;
	damage( source:any /*net.minecraft.entity.damage.DamageSource*/, amount:float ):boolean;
	detach(  ):void;
	disableExperienceDropping(  ):void;
	disableShield(  ):void;
	disablesShield(  ):boolean;
	discard(  ):void;
	dismountVehicle(  ):void;
	distanceTo( entity:net.minecraft.entity.Entity ):float;
	doesNotCollide( offsetX:double, offsetY:double, offsetZ:double ):boolean;
	doesRenderOnFire(  ):boolean;
	dropItem( item:any /*net.minecraft.item.ItemConvertible*/ ):net.minecraft.entity.ItemEntity;
	dropItem( item:any /*net.minecraft.item.ItemConvertible*/, yOffset:int ):net.minecraft.entity.ItemEntity;
	dropItem( stack:net.minecraft.item.ItemStack, retainOwnership:boolean ):net.minecraft.entity.ItemEntity;
	dropItem( stack:net.minecraft.item.ItemStack, throwRandomly:boolean, retainOwnership:boolean ):net.minecraft.entity.ItemEntity;
	dropSelectedItem( entireStack:boolean ):boolean;
	dropStack( stack:net.minecraft.item.ItemStack ):net.minecraft.entity.ItemEntity;
	dropStack( stack:net.minecraft.item.ItemStack, yOffset:float ):net.minecraft.entity.ItemEntity;
	eatFood( world:net.minecraft.world.World, stack:net.minecraft.item.ItemStack, foodComponent:any /*net.minecraft.component.type.FoodComponent*/ ):net.minecraft.item.ItemStack;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/> ):void;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, entity:net.minecraft.entity.Entity ):void;
	endCombat(  ):void;
	enterCombat(  ):void;
	entityDataRequiresOperator(  ):boolean;
	equals( o:any /*java.lang.Object*/ ):boolean;
	equipStack( slot:net.minecraft.entity.EquipmentSlot, stack:net.minecraft.item.ItemStack ):void;
	extinguish(  ):void;
	extinguishWithSound(  ):void;
	getAbilities(  ):any /*net.minecraft.entity.player.PlayerAbilities*/;
	getAbsorptionAmount(  ):float;
	getActiveHand(  ):net.minecraft.util.Hand;
	getActiveItem(  ):net.minecraft.item.ItemStack;
	getActiveStatusEffects(  ):any /*java.util.Map*/;
	getAir(  ):int;
	getAllArmorItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getArmor(  ):int;
	getArmorItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getArmorVisibility(  ):float;
	getAttachments(  ):any /*net.minecraft.entity.EntityAttachments*/;
	getAttackCooldownProgress( baseTime:float ):float;
	getAttackCooldownProgressPerTick(  ):float;
	getAttackDistanceScalingFactor( entity:net.minecraft.entity.Entity ):double;
	getAttacker(  ):net.minecraft.entity.LivingEntity;
	getAttacking(  ):net.minecraft.entity.LivingEntity;
	getAttributeBaseValue( attribute:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/> ):double;
	getAttributeInstance( attribute:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/> ):any /*net.minecraft.entity.attribute.EntityAttributeInstance*/;
	getAttributeValue( attribute:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/> ):double;
	getAttributes(  ):any /*net.minecraft.entity.attribute.AttributeContainer*/;
	getBaseDimensions( pose:any /*net.minecraft.entity.EntityPose*/ ):any /*net.minecraft.entity.EntityDimensions*/;
	getBlockBreakingSpeed( block:net.minecraft.block.BlockState ):float;
	getBlockInteractionRange(  ):double;
	getBlockPos(  ):net.minecraft.util.math.BlockPos;
	getBlockStateAtPos(  ):net.minecraft.block.BlockState;
	getBlockX(  ):int;
	getBlockY(  ):int;
	getBlockZ(  ):int;
	getBodyY( heightScale:double ):double;
	getBodyYaw(  ):float;
	getBoundingBox(  ):net.minecraft.util.math.Box;
	getBoundingBox( pose:any /*net.minecraft.entity.EntityPose*/ ):net.minecraft.util.math.Box;
	getBrain(  ):any /*net.minecraft.entity.ai.brain.Brain*/;
	getBrightnessAtEyes(  ):float;
	getCameraPosVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getChunkPos(  ):net.minecraft.util.math.ChunkPos;
	getClientCameraPosVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getClimbingPos(  ):java.util.Optional<net.minecraft.util.math.BlockPos>;
	getCommandSource(  ):any /*net.minecraft.server.command.ServerCommandSource*/;
	getCommandTags(  ):java.util.Set<string>;
	getControllingPassenger(  ):net.minecraft.entity.LivingEntity;
	getControllingVehicle(  ):net.minecraft.entity.Entity;
	getCurrentPortalEffect(  ):any /*net.minecraft.block.Portal$Effect*/;
	getCustomName(  ):net.minecraft.text.Text;
	getDamageSources(  ):any /*net.minecraft.entity.damage.DamageSources*/;
	getDamageTiltYaw(  ):float;
	getDamageTracker(  ):any /*net.minecraft.entity.damage.DamageTracker*/;
	getDataTracker(  ):any /*net.minecraft.entity.data.DataTracker*/;
	getDefaultPortalCooldown(  ):int;
	getDespawnCounter(  ):int;
	getDimensions( pose:any /*net.minecraft.entity.EntityPose*/ ):any /*net.minecraft.entity.EntityDimensions*/;
	getDisplayName(  ):net.minecraft.text.Text;
	getEatSound( stack:net.minecraft.item.ItemStack ):net.minecraft.sound.SoundEvent;
	getEffectiveExplosionResistance( explosion:any /*net.minecraft.world.explosion.Explosion*/, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, blockState:net.minecraft.block.BlockState, fluidState:net.minecraft.fluid.FluidState, max:float ):float;
	getEnchantmentTableSeed(  ):int;
	getEnderChestInventory(  ):any /*net.minecraft.inventory.EnderChestInventory*/;
	getEntityInteractionRange(  ):double;
	getEntityWorld(  ):net.minecraft.world.World;
	getEquippedItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getEquippedStack( slot:net.minecraft.entity.EquipmentSlot ):net.minecraft.item.ItemStack;
	getEyeHeight( pose:any /*net.minecraft.entity.EntityPose*/ ):float;
	getEyePos(  ):net.minecraft.util.math.Vec3d;
	getEyeY(  ):double;
	getFacing(  ):net.minecraft.util.math.Direction;
	getFallFlyingTicks(  ):int;
	getFallSounds(  ):any /*net.minecraft.entity.LivingEntity$FallSounds*/;
	getFinalGravity(  ):double;
	getFireTicks(  ):int;
	getFirstPassenger(  ):net.minecraft.entity.Entity;
	getFluidHeight( fluid:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid> ):double;
	getFovMultiplier(  ):float;
	getFreezingScale(  ):float;
	getFrozenTicks(  ):int;
	getGameProfile(  ):any /*com.mojang.authlib.GameProfile*/;
	getHandItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getHandPosOffset( item:net.minecraft.item.Item ):net.minecraft.util.math.Vec3d;
	getHandSwingProgress( tickDelta:float ):float;
	getHeadYaw(  ):float;
	getHealth(  ):float;
	getHeight(  ):float;
	getHorizontalFacing(  ):net.minecraft.util.math.Direction;
	getHungerManager(  ):net.minecraft.entity.player.HungerManager;
	getId(  ):int;
	getInventory(  ):net.minecraft.entity.player.PlayerInventory;
	getItemCooldownManager(  ):any /*net.minecraft.entity.player.ItemCooldownManager*/;
	getItemUseTime(  ):int;
	getItemUseTimeLeft(  ):int;
	getJumpBoostVelocityModifier(  ):float;
	getJumpingMount(  ):any /*net.minecraft.entity.JumpingMount*/;
	getLandingPos(  ):net.minecraft.util.math.BlockPos;
	getLastAttackTime(  ):int;
	getLastAttackedTime(  ):int;
	getLastAttacker(  ):net.minecraft.entity.LivingEntity;
	getLastDeathPos(  ):java.util.Optional<any /*net.minecraft.util.math.GlobalPos*/>;
	getLeaningPitch( tickDelta:float ):float;
	getLeashOffset( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getLeashPos( delta:float ):net.minecraft.util.math.Vec3d;
	getLerpTargetPitch(  ):float;
	getLerpTargetX(  ):double;
	getLerpTargetY(  ):double;
	getLerpTargetYaw(  ):float;
	getLerpTargetZ(  ):double;
	getLerpedPos( delta:float ):net.minecraft.util.math.Vec3d;
	getLocationBasedEnchantmentEffects(  ):any /*java.util.Map*/;
	getLootTable(  ):net.minecraft.registry.RegistryKey<any /*net.minecraft.loot.LootTable*/>;
	getLootTableSeed(  ):long;
	getLuck(  ):float;
	getMainArm(  ):any /*net.minecraft.util.Arm*/;
	getMainHandStack(  ):net.minecraft.item.ItemStack;
	getMaxAbsorption(  ):float;
	getMaxAir(  ):int;
	getMaxHealth(  ):float;
	getMinFreezeDamageTicks(  ):int;
	getMoodPercentage(  ):float;
	getMountJumpStrength(  ):float;
	getMovement(  ):net.minecraft.util.math.Vec3d;
	getMovementDirection(  ):net.minecraft.util.math.Direction;
	getMovementSpeed(  ):float;
	getName(  ):net.minecraft.text.Text;
	getNameForScoreboard(  ):string;
	getNextLevelExperience(  ):int;
	getOffHandStack(  ):net.minecraft.item.ItemStack;
	getOppositeRotationVector( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getParticleX( widthScale:double ):double;
	getParticleZ( widthScale:double ):double;
	getPassengerList(  ):java.util.List<net.minecraft.entity.Entity>;
	getPassengerRidingPos( passenger:net.minecraft.entity.Entity ):net.minecraft.util.math.Vec3d;
	getPassengersDeep(  ):java.lang.Iterable<net.minecraft.entity.Entity>;
	getPickBlockStack(  ):net.minecraft.item.ItemStack;
	getPistonBehavior(  ):any /*net.minecraft.block.piston.PistonBehavior*/;
	getPitch(  ):float;
	getPitch( tickDelta:float ):float;
	getPlayerPassengers(  ):int;
	getPortalCooldown(  ):int;
	getPos(  ):net.minecraft.util.math.Vec3d;
	getPose(  ):any /*net.minecraft.entity.EntityPose*/;
	getPoses(  ):any /*com.google.common.collect.ImmutableList*/;
	getPreferredEquipmentSlot( stack:net.minecraft.item.ItemStack ):net.minecraft.entity.EquipmentSlot;
	getPrimeAdversary(  ):net.minecraft.entity.LivingEntity;
	getProjectileDeflection( projectile:any /*net.minecraft.entity.projectile.ProjectileEntity*/ ):any /*net.minecraft.entity.ProjectileDeflection*/;
	getProjectileType( stack:net.minecraft.item.ItemStack ):net.minecraft.item.ItemStack;
	getRandom(  ):any /*net.minecraft.util.math.random.Random*/;
	getRandomBodyY(  ):double;
	getRecentDamageSource(  ):any /*net.minecraft.entity.damage.DamageSource*/;
	getRecipeBook(  ):any /*net.minecraft.client.recipebook.ClientRecipeBook*/;
	getRegistryManager(  ):any /*net.minecraft.registry.DynamicRegistryManager*/;
	getRemovalReason(  ):any /*net.minecraft.entity.Entity$RemovalReason*/;
	getRootVehicle(  ):net.minecraft.entity.Entity;
	getRotationClient(  ):any /*net.minecraft.util.math.Vec2f*/;
	getRotationVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getRotationVecClient(  ):net.minecraft.util.math.Vec3d;
	getRotationVector(  ):net.minecraft.util.math.Vec3d;
	getRotationVector( pitch:float, yaw:float ):net.minecraft.util.math.Vec3d;
	getSafeFallDistance(  ):int;
	getScale(  ):float;
	getScaleFactor(  ):float;
	getScore(  ):int;
	getScoreboard(  ):any /*net.minecraft.scoreboard.Scoreboard*/;
	getScoreboardTeam(  ):any /*net.minecraft.scoreboard.Team*/;
	getSculkShriekerWarningManager(  ):java.util.Optional<any /*net.minecraft.block.entity.SculkShriekerWarningManager*/>;
	getServer(  ):any /*net.minecraft.server.MinecraftServer*/;
	getShoulderEntityLeft(  ):net.minecraft.nbt.NbtCompound;
	getShoulderEntityRight(  ):net.minecraft.nbt.NbtCompound;
	getSkinTextures(  ):any /*net.minecraft.client.util.SkinTextures*/;
	getSleepTimer(  ):int;
	getSleepingDirection(  ):net.minecraft.util.math.Direction;
	getSleepingPosition(  ):java.util.Optional<net.minecraft.util.math.BlockPos>;
	getSoundCategory(  ):net.minecraft.sound.SoundCategory;
	getSoundPitch(  ):float;
	getStackInHand( hand:net.minecraft.util.Hand ):net.minecraft.item.ItemStack;
	getStackReference( mappedIndex:int ):any /*net.minecraft.inventory.StackReference*/;
	getStandingEyeHeight(  ):float;
	getStatHandler(  ):any /*net.minecraft.stat.StatHandler*/;
	getStatusEffect( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):net.minecraft.entity.effect.StatusEffectInstance;
	getStatusEffects(  ):java.util.Collection<net.minecraft.entity.effect.StatusEffectInstance>;
	getStepHeight(  ):float;
	getSteppingBlockState(  ):net.minecraft.block.BlockState;
	getSteppingPos(  ):net.minecraft.util.math.BlockPos;
	getStingerCount(  ):int;
	getStuckArrowCount(  ):int;
	getStyledDisplayName(  ):net.minecraft.text.Text;
	getSwimHeight(  ):double;
	getSyncedPos(  ):net.minecraft.util.math.Vec3d;
	getTargetingMargin(  ):float;
	getTeamColorValue(  ):int;
	getTrackedPosition(  ):any /*net.minecraft.entity.TrackedPosition*/;
	getType(  ):net.minecraft.entity.EntityType<any /*java.lang.Object*/>;
	getUnderwaterVisibility(  ):float;
	getUuid(  ):java.util.UUID;
	getUuidAsString(  ):string;
	getVehicle(  ):net.minecraft.entity.Entity;
	getVehicleAttachmentPos( vehicle:net.minecraft.entity.Entity ):net.minecraft.util.math.Vec3d;
	getVelocity(  ):net.minecraft.util.math.Vec3d;
	getVelocityAffectingPos(  ):net.minecraft.util.math.BlockPos;
	getVisibilityBoundingBox(  ):net.minecraft.util.math.Box;
	getWeaponStack(  ):net.minecraft.item.ItemStack;
	getWidth(  ):float;
	getWorld(  ):net.minecraft.world.World;
	getWorldSpawnPos( world:any /*net.minecraft.server.world.ServerWorld*/, basePos:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.BlockPos;
	getX(  ):double;
	getXpToDrop( world:any /*net.minecraft.server.world.ServerWorld*/, attacker:net.minecraft.entity.Entity ):int;
	getY(  ):double;
	getYaw(  ):float;
	getYaw( tickDelta:float ):float;
	getZ(  ):double;
	giveItemStack( stack:net.minecraft.item.ItemStack ):boolean;
	handleAttack( attacker:net.minecraft.entity.Entity ):boolean;
	handleFallDamage( fallDistance:float, damageMultiplier:float, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	handleStatus( status:any /*byte*/ ):void;
	hasControllingPassenger(  ):boolean;
	hasCustomName(  ):boolean;
	hasInvertedHealingAndHarm(  ):boolean;
	hasLandedInFluid(  ):boolean;
	hasNoDrag(  ):boolean;
	hasNoGravity(  ):boolean;
	hasPassenger( passenger:net.minecraft.entity.Entity ):boolean;
	hasPassenger( predicate:java.util.function.Predicate<net.minecraft.entity.Entity> ):boolean;
	hasPassengerDeep( passenger:net.minecraft.entity.Entity ):boolean;
	hasPassengers(  ):boolean;
	hasPermissionLevel( permissionLevel:int ):boolean;
	hasPlayerRider(  ):boolean;
	hasPortalCooldown(  ):boolean;
	hasReducedDebugInfo(  ):boolean;
	hasStackEquipped( slot:net.minecraft.entity.EquipmentSlot ):boolean;
	hasStatusEffect( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):boolean;
	hasVehicle(  ):boolean;
	heal( amount:float ):void;
	hurtByWater(  ):boolean;
	increaseStat( stat:any /*net.minecraft.stat.Stat*/, amount:int ):void;
	increaseStat( stat:net.minecraft.util.Identifier, amount:int ):void;
	incrementStat( stat:any /*net.minecraft.stat.Stat*/ ):void;
	incrementStat( stat:net.minecraft.util.Identifier ):void;
	init(  ):void;
	interact( entity:net.minecraft.entity.Entity, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	interact( player:net.minecraft.entity.player.PlayerEntity, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	interactAt( player:net.minecraft.entity.player.PlayerEntity, hitPos:net.minecraft.util.math.Vec3d, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	isAffectedBySplashPotions(  ):boolean;
	isAlive(  ):boolean;
	isAttackable(  ):boolean;
	isAutoJumpEnabled(  ):boolean;
	isBaby(  ):boolean;
	isBlockBreakingRestricted( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, gameMode:net.minecraft.world.GameMode ):boolean;
	isBlocking(  ):boolean;
	isClimbing(  ):boolean;
	isCollidable(  ):boolean;
	isConnectedThroughVehicle( entity:net.minecraft.entity.Entity ):boolean;
	isCrawling(  ):boolean;
	isCreative(  ):boolean;
	isCreativeLevelTwoOp(  ):boolean;
	isCustomNameVisible(  ):boolean;
	isDead(  ):boolean;
	isDescending(  ):boolean;
	isExperienceDroppingDisabled(  ):boolean;
	isFallFlying(  ):boolean;
	isFireImmune(  ):boolean;
	isFrozen(  ):boolean;
	isGlowing(  ):boolean;
	isGlowingLocal(  ):boolean;
	isHolding( item:net.minecraft.item.Item ):boolean;
	isHolding( predicate:java.util.function.Predicate<net.minecraft.item.ItemStack> ):boolean;
	isHoldingOntoLadder(  ):boolean;
	isImmuneToExplosion( explosion:any /*net.minecraft.world.explosion.Explosion*/ ):boolean;
	isInCreativeMode(  ):boolean;
	isInFluid(  ):boolean;
	isInLava(  ):boolean;
	isInPose( pose:any /*net.minecraft.entity.EntityPose*/ ):boolean;
	isInRange( entity:net.minecraft.entity.Entity, horizontalRadius:double, verticalRadius:double ):boolean;
	isInRange( entity:net.minecraft.entity.Entity, radius:double ):boolean;
	isInSneakingPose(  ):boolean;
	isInSwimmingPose(  ):boolean;
	isInsideWall(  ):boolean;
	isInsideWaterOrBubbleColumn(  ):boolean;
	isInvisible(  ):boolean;
	isInvisibleTo( player:net.minecraft.entity.player.PlayerEntity ):boolean;
	isInvulnerable(  ):boolean;
	isInvulnerableTo( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	isLimitedCraftingEnabled(  ):boolean;
	isLiving(  ):boolean;
	isLogicalSideForUpdatingMovement(  ):boolean;
	isMainPlayer(  ):boolean;
	isMobOrPlayer(  ):boolean;
	isOnFire(  ):boolean;
	isOnGround(  ):boolean;
	isOnRail(  ):boolean;
	isPartOf( entity:net.minecraft.entity.Entity ):boolean;
	isPartOfGame(  ):boolean;
	isPartVisible( modelPart:any /*net.minecraft.entity.player.PlayerModelPart*/ ):boolean;
	isPlayer(  ):boolean;
	isPushable(  ):boolean;
	isPushedByFluids(  ):boolean;
	isRegionUnloaded(  ):boolean;
	isRemoved(  ):boolean;
	isRiding(  ):boolean;
	isSilent(  ):boolean;
	isSleeping(  ):boolean;
	isSneaking(  ):boolean;
	isSneaky(  ):boolean;
	isSpectator(  ):boolean;
	isSprinting(  ):boolean;
	isSubmergedIn( fluidTag:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid> ):boolean;
	isSubmergedInWater(  ):boolean;
	isSupportedBy( pos:net.minecraft.util.math.BlockPos ):boolean;
	isSwimming(  ):boolean;
	isTarget( entity:net.minecraft.entity.LivingEntity, predicate:any /*net.minecraft.entity.ai.TargetPredicate*/ ):boolean;
	isTeamPlayer( team:any /*net.minecraft.scoreboard.AbstractTeam*/ ):boolean;
	isTeammate( other:net.minecraft.entity.Entity ):boolean;
	isTouchingWater(  ):boolean;
	isTouchingWaterOrRain(  ):boolean;
	isUsingItem(  ):boolean;
	isUsingRiptide(  ):boolean;
	isUsingSpyglass(  ):boolean;
	isWet(  ):boolean;
	jump(  ):void;
	kill(  ):void;
	lerpVelocity( tickDelta:float ):net.minecraft.util.math.Vec3d;
	lerpYaw( delta:float ):float;
	limitFallDistance(  ):void;
	lockRecipes( recipes:java.util.Collection<any /*net.minecraft.recipe.RecipeEntry*/> ):int;
	lookAt( anchorPoint:any /*net.minecraft.command.argument.EntityAnchorArgumentType$EntityAnchor*/, target:net.minecraft.util.math.Vec3d ):void;
	move( movementType:any /*net.minecraft.entity.MovementType*/, movement:net.minecraft.util.math.Vec3d ):void;
	occludeVibrationSignals(  ):boolean;
	offsetX( widthScale:double ):double;
	offsetZ( widthScale:double ):double;
	onAttacking( target:net.minecraft.entity.Entity ):void;
	onBubbleColumnCollision( drag:boolean ):void;
	onBubbleColumnSurfaceCollision( drag:boolean ):void;
	onDamaged( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	onDataTrackerUpdate( entries:java.util.List<any /*net.minecraft.entity.data.DataTracker$SerializedEntry*/> ):void;
	onDeath( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	onEquipStack( slot:net.minecraft.entity.EquipmentSlot, oldStack:net.minecraft.item.ItemStack, newStack:net.minecraft.item.ItemStack ):void;
	onExplodedBy( entity:net.minecraft.entity.Entity ):void;
	onGameModeChanged( gameMode:net.minecraft.world.GameMode ):void;
	onKilledOther( world:any /*net.minecraft.server.world.ServerWorld*/, other:net.minecraft.entity.LivingEntity ):boolean;
	onLanding(  ):void;
	onPassengerLookAround( passenger:net.minecraft.entity.Entity ):void;
	onPickupSlotClick( cursorStack:net.minecraft.item.ItemStack, slotStack:net.minecraft.item.ItemStack, clickType:any /*net.minecraft.util.ClickType*/ ):void;
	onPlayerCollision( player:net.minecraft.entity.player.PlayerEntity ):void;
	onRecipeCrafted( recipe:any /*net.minecraft.recipe.RecipeEntry*/, ingredients:java.util.List<net.minecraft.item.ItemStack> ):void;
	onRecipeDisplayed( recipe:any /*net.minecraft.recipe.RecipeEntry*/ ):void;
	onRemoved(  ):void;
	onSpawnPacket( packet:any /*net.minecraft.network.packet.s2c.play.EntitySpawnS2CPacket*/ ):void;
	onStartedTrackingBy( player:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):void;
	onStoppedTrackingBy( player:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):void;
	onStruckByLightning( world:any /*net.minecraft.server.world.ServerWorld*/, lightning:any /*net.minecraft.entity.LightningEntity*/ ):void;
	onTrackedDataSet( data:any /*net.minecraft.entity.data.TrackedData*/ ):void;
	openCommandBlockMinecartScreen( commandBlockExecutor:any /*net.minecraft.world.CommandBlockExecutor*/ ):void;
	openCommandBlockScreen( commandBlock:any /*net.minecraft.block.entity.CommandBlockBlockEntity*/ ):void;
	openEditSignScreen( sign:any /*net.minecraft.block.entity.SignBlockEntity*/, front:boolean ):void;
	openHandledScreen( factory:any /*net.minecraft.screen.NamedScreenHandlerFactory*/ ):any /*java.util.OptionalInt*/;
	openHorseInventory( horse:any /*net.minecraft.entity.passive.AbstractHorseEntity*/, inventory:net.minecraft.inventory.Inventory ):void;
	openJigsawScreen( jigsaw:any /*net.minecraft.block.entity.JigsawBlockEntity*/ ):void;
	openRidingInventory(  ):void;
	openStructureBlockScreen( structureBlock:any /*net.minecraft.block.entity.StructureBlockBlockEntity*/ ):void;
	playSound( sound:net.minecraft.sound.SoundEvent ):void;
	playSound( sound:net.minecraft.sound.SoundEvent, volume:float, pitch:float ):void;
	playSoundIfNotSilent( event:net.minecraft.sound.SoundEvent ):void;
	playSoundToPlayer( sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	populateCrashReport( section:any /*net.minecraft.util.crash.CrashReportSection*/ ):void;
	positionInPortal( portalAxis:net.minecraft.util.math.Direction$Axis, portalRect:any /*net.minecraft.world.BlockLocating$Rectangle*/ ):net.minecraft.util.math.Vec3d;
	pushAwayFrom( entity:net.minecraft.entity.Entity ):void;
	raycast( maxDistance:double, tickDelta:float, includeFluids:boolean ):net.minecraft.util.hit.HitResult;
	readCustomDataFromNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	readNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	recalculateDimensions( previous:any /*net.minecraft.entity.EntityDimensions*/ ):boolean;
	refreshPositionAfterTeleport( pos:net.minecraft.util.math.Vec3d ):void;
	refreshPositionAfterTeleport( x:double, y:double, z:double ):void;
	refreshPositionAndAngles( pos:net.minecraft.util.math.BlockPos, yaw:float, pitch:float ):void;
	refreshPositionAndAngles( pos:net.minecraft.util.math.Vec3d, yaw:float, pitch:float ):void;
	refreshPositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float ):void;
	remove( reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	removeAllPassengers(  ):void;
	removeCommandTag( tag:string ):boolean;
	removeStatusEffect( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):boolean;
	removeStatusEffectInternal( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):net.minecraft.entity.effect.StatusEffectInstance;
	requestRespawn(  ):void;
	requestTeleport( destX:double, destY:double, destZ:double ):void;
	requestTeleportAndDismount( destX:double, destY:double, destZ:double ):void;
	requestTeleportOffset( offsetX:double, offsetY:double, offsetZ:double ):void;
	resetLastAttackedTicks(  ):void;
	resetPortalCooldown(  ):void;
	resetPosition(  ):void;
	resetStat( stat:any /*net.minecraft.stat.Stat*/ ):void;
	saveNbt( nbt:net.minecraft.nbt.NbtCompound ):boolean;
	saveSelfNbt( nbt:net.minecraft.nbt.NbtCompound ):boolean;
	sendAbilitiesUpdate(  ):void;
	sendEffectToControllingPlayer( effect:net.minecraft.entity.effect.StatusEffectInstance ):void;
	sendEquipmentBreakStatus( item:net.minecraft.item.Item, slot:net.minecraft.entity.EquipmentSlot ):void;
	sendMessage( message:net.minecraft.text.Text ):void;
	sendMessage( message:net.minecraft.text.Text, overlay:boolean ):void;
	sendPickup( item:net.minecraft.entity.Entity, count:int ):void;
	sendTradeOffers( syncId:int, offers:any /*net.minecraft.village.TradeOfferList*/, levelProgress:int, experience:int, leveled:boolean, refreshable:boolean ):void;
	setAbsorptionAmount( absorptionAmount:float ):void;
	setAir( air:int ):void;
	setAngles( yaw:float, pitch:float ):void;
	setAttacker( attacker:net.minecraft.entity.LivingEntity ):void;
	setAttacking( attacking:net.minecraft.entity.player.PlayerEntity ):void;
	setBodyYaw( bodyYaw:float ):void;
	setBoundingBox( boundingBox:net.minecraft.util.math.Box ):void;
	setChangeListener( changeListener:any /*net.minecraft.world.entity.EntityChangeListener*/ ):void;
	setClientPermissionLevel( clientPermissionLevel:int ):void;
	setCurrentHand( hand:net.minecraft.util.Hand ):void;
	setCustomName( name:net.minecraft.text.Text ):void;
	setCustomNameVisible( visible:boolean ):void;
	setDespawnCounter( despawnCounter:int ):void;
	setExperience( progress:float, total:int, level:int ):void;
	setFireTicks( fireTicks:int ):void;
	setFrozenTicks( frozenTicks:int ):void;
	setGlowing( glowing:boolean ):void;
	setHeadYaw( headYaw:float ):void;
	setHealth( health:float ):void;
	setId( id:int ):void;
	setIgnoreFallDamageFromCurrentExplosion( ignoreFallDamageFromCurrentExplosion:boolean ):void;
	setInPowderSnow( inPowderSnow:boolean ):void;
	setInvisible( invisible:boolean ):void;
	setInvulnerable( invulnerable:boolean ):void;
	setJumping( jumping:boolean ):void;
	setLastDeathPos( lastDeathPos:java.util.Optional<any /*net.minecraft.util.math.GlobalPos*/> ):void;
	setLimitedCraftingEnabled( limitedCraftingEnabled:boolean ):void;
	setMainArm( arm:any /*net.minecraft.util.Arm*/ ):void;
	setMovementSpeed( movementSpeed:float ):void;
	setNearbySongPlaying( songPosition:net.minecraft.util.math.BlockPos, playing:boolean ):void;
	setNoDrag( noDrag:boolean ):void;
	setNoGravity( noGravity:boolean ):void;
	setOnFire( onFire:boolean ):void;
	setOnFireFor( seconds:float ):void;
	setOnFireForTicks( ticks:int ):void;
	setOnFireFromLava(  ):void;
	setOnGround( onGround:boolean ):void;
	setOnGround( onGround:boolean, movement:net.minecraft.util.math.Vec3d ):void;
	setPitch( pitch:float ):void;
	setPortalCooldown( portalCooldown:int ):void;
	setPos( x:double, y:double, z:double ):void;
	setPose( pose:any /*net.minecraft.entity.EntityPose*/ ):void;
	setPosition( pos:net.minecraft.util.math.Vec3d ):void;
	setPosition( x:double, y:double, z:double ):void;
	setReducedDebugInfo( reducedDebugInfo:boolean ):void;
	setRemoved( reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	setScore( score:int ):void;
	setShowsDeathScreen( showsDeathScreen:boolean ):void;
	setSilent( silent:boolean ):void;
	setSleepingPosition( pos:net.minecraft.util.math.BlockPos ):void;
	setSneaking( sneaking:boolean ):void;
	setSprinting( sprinting:boolean ):void;
	setStackInHand( hand:net.minecraft.util.Hand, stack:net.minecraft.item.ItemStack ):void;
	setStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance, source:net.minecraft.entity.Entity ):void;
	setStingerCount( stingerCount:int ):void;
	setStuckArrowCount( stuckArrowCount:int ):void;
	setSwimming( swimming:boolean ):void;
	setUuid( uuid:java.util.UUID ):void;
	setVelocity( velocity:net.minecraft.util.math.Vec3d ):void;
	setVelocity( x:double, y:double, z:double ):void;
	setVelocityClient( x:double, y:double, z:double ):void;
	setYaw( yaw:float ):void;
	shouldBroadcastConsoleToOps(  ):boolean;
	shouldCancelInteraction(  ):boolean;
	shouldCloseHandledScreenOnRespawn(  ):boolean;
	shouldControlVehicles(  ):boolean;
	shouldDamagePlayer( player:net.minecraft.entity.player.PlayerEntity ):boolean;
	shouldDismountUnderwater(  ):boolean;
	shouldDropXp(  ):boolean;
	shouldEscapePowderSnow(  ):boolean;
	shouldFilterText(  ):boolean;
	shouldIgnoreFallDamageFromCurrentExplosion(  ):boolean;
	shouldReceiveFeedback(  ):boolean;
	shouldRender( cameraX:double, cameraY:double, cameraZ:double ):boolean;
	shouldRender( distance:double ):boolean;
	shouldRenderName(  ):boolean;
	shouldSave(  ):boolean;
	shouldSlowDown(  ):boolean;
	shouldSpawnSprintingParticles(  ):boolean;
	shouldSwimInFluids(  ):boolean;
	shouldTrackOutput(  ):boolean;
	showsDeathScreen(  ):boolean;
	sleep( pos:net.minecraft.util.math.BlockPos ):void;
	slowMovement( state:net.minecraft.block.BlockState, multiplier:net.minecraft.util.math.Vec3d ):void;
	spawnSweepAttackParticles(  ):void;
	squaredDistanceTo( entity:net.minecraft.entity.Entity ):double;
	squaredDistanceTo( vector:net.minecraft.util.math.Vec3d ):double;
	squaredDistanceTo( x:double, y:double, z:double ):double;
	startFallFlying(  ):void;
	startRiding( entity:net.minecraft.entity.Entity ):boolean;
	startRiding( entity:net.minecraft.entity.Entity, force:boolean ):boolean;
	static adjustMovementForCollisions( entity:net.minecraft.entity.Entity, movement:net.minecraft.util.math.Vec3d, entityBoundingBox:net.minecraft.util.math.Box, world:net.minecraft.world.World, collisions:java.util.List<any /*net.minecraft.util.shape.VoxelShape*/> ):net.minecraft.util.math.Vec3d;
	static containsOnlyAmbientEffects( effects:java.util.Collection<net.minecraft.entity.effect.StatusEffectInstance> ):boolean;
	static createLivingAttributes(  ):any /*net.minecraft.entity.attribute.DefaultAttributeContainer$Builder*/;
	static createPlayerAttributes(  ):any /*net.minecraft.entity.attribute.DefaultAttributeContainer$Builder*/;
	static getRenderDistanceMultiplier(  ):double;
	static getSlotForHand( hand:net.minecraft.util.Hand ):net.minecraft.entity.EquipmentSlot;
	static positionInPortal( pos:net.minecraft.util.math.Vec3d ):net.minecraft.util.math.Vec3d;
	static setRenderDistanceMultiplier( value:double ):void;
	stopFallFlying(  ):void;
	stopRiding(  ):void;
	stopUsingItem(  ):void;
	streamPassengersAndSelf(  ):java.util.stream.Stream<net.minecraft.entity.Entity>;
	streamSelfAndPassengers(  ):java.util.stream.Stream<net.minecraft.entity.Entity>;
	swingHand( hand:net.minecraft.util.Hand ):void;
	swingHand( hand:net.minecraft.util.Hand, fromServerPlayer:boolean ):void;
	takeKnockback( strength:double, x:double, z:double ):void;
	teleport( world:any /*net.minecraft.server.world.ServerWorld*/, destX:double, destY:double, destZ:double, flags:java.util.Set<any /*net.minecraft.network.packet.s2c.play.PositionFlag*/>, yaw:float, pitch:float ):boolean;
	teleport( x:double, y:double, z:double, particleEffects:boolean ):boolean;
	teleportTo( teleportTarget:any /*net.minecraft.world.TeleportTarget*/ ):net.minecraft.entity.Entity;
	tick(  ):void;
	tickMovement(  ):void;
	tickNewAi(  ):void;
	tickRiding(  ):void;
	tiltScreen( deltaX:double, deltaZ:double ):void;
	toString(  ):string;
	travel( movementInput:net.minecraft.util.math.Vec3d ):void;
	triggerItemPickedUpByEntityCriteria( item:net.minecraft.entity.ItemEntity ):void;
	tryAttack( target:net.minecraft.entity.Entity ):boolean;
	tryClearCurrentExplosion(  ):void;
	tryEatFood( world:net.minecraft.world.World, stack:net.minecraft.item.ItemStack ):net.minecraft.item.ItemStack;
	trySleep( pos:net.minecraft.util.math.BlockPos ):any /*com.mojang.datafixers.util.Either*/;
	tryUsePortal( portal:any /*net.minecraft.block.Portal*/, pos:net.minecraft.util.math.BlockPos ):void;
	unlockRecipes( recipes:java.util.Collection<any /*net.minecraft.recipe.RecipeEntry*/> ):int;
	unlockRecipes( recipes:java.util.List<net.minecraft.util.Identifier> ):void;
	updateEventHandler( callback:java.util.function.BiConsumer<any /*net.minecraft.world.event.listener.EntityGameEventHandler*/, any /*net.minecraft.server.world.ServerWorld*/> ):void;
	updateHealth( health:float ):void;
	updateKilledAdvancementCriterion( entityKilled:net.minecraft.entity.Entity, score:int, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	updateLimbs( flutter:boolean ):void;
	updateMovementInFluid( tag:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid>, speed:double ):boolean;
	updatePassengerForDismount( passenger:net.minecraft.entity.LivingEntity ):net.minecraft.util.math.Vec3d;
	updatePassengerPosition( passenger:net.minecraft.entity.Entity ):void;
	updatePosition( x:double, y:double, z:double ):void;
	updatePositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float ):void;
	updateSwimming(  ):void;
	updateTrackedHeadRotation( yaw:float, interpolationSteps:int ):void;
	updateTrackedPosition( x:double, y:double, z:double ):void;
	updateTrackedPositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float, interpolationSteps:int ):void;
	updateVelocity( speed:float, movementInput:net.minecraft.util.math.Vec3d ):void;
	useBook( book:net.minecraft.item.ItemStack, hand:net.minecraft.util.Hand ):void;
	useRiptide( riptideTicks:int, riptideAttackDamage:float, stack:net.minecraft.item.ItemStack ):void;
	wakeUp(  ):void;
	wakeUp( skipSleepTimer:boolean, updateSleepingPlayers:boolean ):void;
	writeCustomDataToNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	writeNbt( nbt:net.minecraft.nbt.NbtCompound ):net.minecraft.nbt.NbtCompound;

} // end ClientPlayerEntity

} // end namespace net.minecraft.client.network

declare namespace net.minecraft.client.network {

class ClientPlayNetworkHandler/* extends ClientCommonNetworkHandler implements net.minecraft.network.listener.ClientPlayPacketListener, net.minecraft.network.listener.TickablePacketListener*/ {

	accepts( packet:net.minecraft.network.packet.Packet<any /*java.lang.Object*/> ):boolean;
	acknowledge( message:any /*net.minecraft.network.message.SignedMessage*/, displayed:boolean ):void;
	addCustomCrashReportInfo( report:any /*net.minecraft.util.crash.CrashReport*/, section:any /*net.minecraft.util.crash.CrashReportSection*/ ):void;
	clearWorld(  ):void;
	createDisconnectionInfo( reason:net.minecraft.text.Text, exception:any /*java.lang.Throwable*/ ):any /*net.minecraft.network.DisconnectionInfo*/;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	fillCrashReport( report:any /*net.minecraft.util.crash.CrashReport*/ ):void;
	getAdvancementHandler(  ):any /*net.minecraft.client.network.ClientAdvancementManager*/;
	getBrand(  ):string;
	getBrewingRecipeRegistry(  ):any /*net.minecraft.recipe.BrewingRecipeRegistry*/;
	getCommandDispatcher(  ):com.mojang.brigadier.CommandDispatcher<any /*net.minecraft.command.CommandSource*/>;
	getCommandSource(  ):any /*net.minecraft.client.network.ClientCommandSource*/;
	getConnection(  ):any /*net.minecraft.network.ClientConnection*/;
	getDataQueryHandler(  ):any /*net.minecraft.client.network.DataQueryHandler*/;
	getEnabledFeatures(  ):any /*net.minecraft.resource.featuretoggle.FeatureSet*/;
	getListedPlayerListEntries(  ):java.util.Collection<any /*net.minecraft.client.network.PlayerListEntry*/>;
	getPhase(  ):any /*net.minecraft.network.NetworkPhase*/;
	getPlayerList(  ):java.util.Collection<any /*net.minecraft.client.network.PlayerListEntry*/>;
	getPlayerListEntry( profileName:string ):any /*net.minecraft.client.network.PlayerListEntry*/;
	getPlayerListEntry( uuid:java.util.UUID ):any /*net.minecraft.client.network.PlayerListEntry*/;
	getPlayerUuids(  ):java.util.Collection<java.util.UUID>;
	getProfile(  ):any /*com.mojang.authlib.GameProfile*/;
	getRecipeManager(  ):any /*net.minecraft.recipe.RecipeManager*/;
	getRegistryManager(  ):any /*net.minecraft.registry.DynamicRegistryManager$Immutable*/;
	getScoreboard(  ):any /*net.minecraft.scoreboard.Scoreboard*/;
	getSearchManager(  ):any /*net.minecraft.client.search.SearchManager*/;
	getServerInfo(  ):any /*net.minecraft.client.network.ServerInfo*/;
	getServerLinks(  ):any /*net.minecraft.server.ServerLinks*/;
	getSessionId(  ):java.util.UUID;
	getSide(  ):any /*net.minecraft.network.NetworkSide*/;
	getWorld(  ):net.minecraft.client.world.ClientWorld;
	getWorldKeys(  ):java.util.Set<net.minecraft.registry.RegistryKey<net.minecraft.world.World>>;
	hasFeature( feature:any /*net.minecraft.resource.featuretoggle.FeatureSet*/ ):boolean;
	isConnectionOpen(  ):boolean;
	onAdvancements( packet:any /*net.minecraft.network.packet.s2c.play.AdvancementUpdateS2CPacket*/ ):void;
	onBlockBreakingProgress( packet:any /*net.minecraft.network.packet.s2c.play.BlockBreakingProgressS2CPacket*/ ):void;
	onBlockEntityUpdate( packet:any /*net.minecraft.network.packet.s2c.play.BlockEntityUpdateS2CPacket*/ ):void;
	onBlockEvent( packet:any /*net.minecraft.network.packet.s2c.play.BlockEventS2CPacket*/ ):void;
	onBlockUpdate( packet:any /*net.minecraft.network.packet.s2c.play.BlockUpdateS2CPacket*/ ):void;
	onBossBar( packet:any /*net.minecraft.network.packet.s2c.play.BossBarS2CPacket*/ ):void;
	onBundle( packet:any /*net.minecraft.network.packet.s2c.play.BundleS2CPacket*/ ):void;
	onChatMessage( packet:any /*net.minecraft.network.packet.s2c.play.ChatMessageS2CPacket*/ ):void;
	onChatSuggestions( packet:any /*net.minecraft.network.packet.s2c.play.ChatSuggestionsS2CPacket*/ ):void;
	onChunkBiomeData( packet:any /*net.minecraft.network.packet.s2c.play.ChunkBiomeDataS2CPacket*/ ):void;
	onChunkData( packet:any /*net.minecraft.network.packet.s2c.play.ChunkDataS2CPacket*/ ):void;
	onChunkDeltaUpdate( packet:any /*net.minecraft.network.packet.s2c.play.ChunkDeltaUpdateS2CPacket*/ ):void;
	onChunkLoadDistance( packet:any /*net.minecraft.network.packet.s2c.play.ChunkLoadDistanceS2CPacket*/ ):void;
	onChunkRenderDistanceCenter( packet:any /*net.minecraft.network.packet.s2c.play.ChunkRenderDistanceCenterS2CPacket*/ ):void;
	onChunkSent( packet:any /*net.minecraft.network.packet.s2c.play.ChunkSentS2CPacket*/ ):void;
	onCloseScreen( packet:any /*net.minecraft.network.packet.s2c.play.CloseScreenS2CPacket*/ ):void;
	onCommandSuggestions( packet:any /*net.minecraft.network.packet.s2c.play.CommandSuggestionsS2CPacket*/ ):void;
	onCommandTree( packet:any /*net.minecraft.network.packet.s2c.play.CommandTreeS2CPacket*/ ):void;
	onCookieRequest( packet:any /*net.minecraft.network.packet.s2c.common.CookieRequestS2CPacket*/ ):void;
	onCooldownUpdate( packet:any /*net.minecraft.network.packet.s2c.play.CooldownUpdateS2CPacket*/ ):void;
	onCraftFailedResponse( packet:any /*net.minecraft.network.packet.s2c.play.CraftFailedResponseS2CPacket*/ ):void;
	onCustomPayload( packet:any /*net.minecraft.network.packet.s2c.common.CustomPayloadS2CPacket*/ ):void;
	onCustomPayload( payload:any /*net.minecraft.network.packet.CustomPayload*/ ):void;
	onCustomReportDetails( packet:any /*net.minecraft.network.packet.s2c.common.CustomReportDetailsS2CPacket*/ ):void;
	onDamageTilt( packet:any /*net.minecraft.network.packet.s2c.play.DamageTiltS2CPacket*/ ):void;
	onDeathMessage( packet:any /*net.minecraft.network.packet.s2c.play.DeathMessageS2CPacket*/ ):void;
	onDebugSample( packet:any /*net.minecraft.network.packet.s2c.play.DebugSampleS2CPacket*/ ):void;
	onDifficulty( packet:any /*net.minecraft.network.packet.s2c.play.DifficultyS2CPacket*/ ):void;
	onDisconnect( packet:any /*net.minecraft.network.packet.s2c.common.DisconnectS2CPacket*/ ):void;
	onDisconnected( info:any /*net.minecraft.network.DisconnectionInfo*/ ):void;
	onEndCombat( packet:any /*net.minecraft.network.packet.s2c.play.EndCombatS2CPacket*/ ):void;
	onEnterCombat( packet:any /*net.minecraft.network.packet.s2c.play.EnterCombatS2CPacket*/ ):void;
	onEnterReconfiguration( packet:any /*net.minecraft.network.packet.s2c.play.EnterReconfigurationS2CPacket*/ ):void;
	onEntitiesDestroy( packet:any /*net.minecraft.network.packet.s2c.play.EntitiesDestroyS2CPacket*/ ):void;
	onEntity( packet:any /*net.minecraft.network.packet.s2c.play.EntityS2CPacket*/ ):void;
	onEntityAnimation( packet:any /*net.minecraft.network.packet.s2c.play.EntityAnimationS2CPacket*/ ):void;
	onEntityAttach( packet:any /*net.minecraft.network.packet.s2c.play.EntityAttachS2CPacket*/ ):void;
	onEntityAttributes( packet:any /*net.minecraft.network.packet.s2c.play.EntityAttributesS2CPacket*/ ):void;
	onEntityDamage( packet:any /*net.minecraft.network.packet.s2c.play.EntityDamageS2CPacket*/ ):void;
	onEntityEquipmentUpdate( packet:any /*net.minecraft.network.packet.s2c.play.EntityEquipmentUpdateS2CPacket*/ ):void;
	onEntityPassengersSet( packet:any /*net.minecraft.network.packet.s2c.play.EntityPassengersSetS2CPacket*/ ):void;
	onEntityPosition( packet:any /*net.minecraft.network.packet.s2c.play.EntityPositionS2CPacket*/ ):void;
	onEntitySetHeadYaw( packet:any /*net.minecraft.network.packet.s2c.play.EntitySetHeadYawS2CPacket*/ ):void;
	onEntitySpawn( packet:any /*net.minecraft.network.packet.s2c.play.EntitySpawnS2CPacket*/ ):void;
	onEntityStatus( packet:any /*net.minecraft.network.packet.s2c.play.EntityStatusS2CPacket*/ ):void;
	onEntityStatusEffect( packet:any /*net.minecraft.network.packet.s2c.play.EntityStatusEffectS2CPacket*/ ):void;
	onEntityTrackerUpdate( packet:any /*net.minecraft.network.packet.s2c.play.EntityTrackerUpdateS2CPacket*/ ):void;
	onEntityVelocityUpdate( packet:any /*net.minecraft.network.packet.s2c.play.EntityVelocityUpdateS2CPacket*/ ):void;
	onExperienceBarUpdate( packet:any /*net.minecraft.network.packet.s2c.play.ExperienceBarUpdateS2CPacket*/ ):void;
	onExperienceOrbSpawn( packet:any /*net.minecraft.network.packet.s2c.play.ExperienceOrbSpawnS2CPacket*/ ):void;
	onExplosion( packet:any /*net.minecraft.network.packet.s2c.play.ExplosionS2CPacket*/ ):void;
	onGameJoin( packet:any /*net.minecraft.network.packet.s2c.play.GameJoinS2CPacket*/ ):void;
	onGameMessage( packet:any /*net.minecraft.network.packet.s2c.play.GameMessageS2CPacket*/ ):void;
	onGameStateChange( packet:any /*net.minecraft.network.packet.s2c.play.GameStateChangeS2CPacket*/ ):void;
	onHealthUpdate( packet:any /*net.minecraft.network.packet.s2c.play.HealthUpdateS2CPacket*/ ):void;
	onInventory( packet:any /*net.minecraft.network.packet.s2c.play.InventoryS2CPacket*/ ):void;
	onItemPickupAnimation( packet:any /*net.minecraft.network.packet.s2c.play.ItemPickupAnimationS2CPacket*/ ):void;
	onKeepAlive( packet:any /*net.minecraft.network.packet.s2c.common.KeepAliveS2CPacket*/ ):void;
	onLightUpdate( packet:any /*net.minecraft.network.packet.s2c.play.LightUpdateS2CPacket*/ ):void;
	onLookAt( packet:any /*net.minecraft.network.packet.s2c.play.LookAtS2CPacket*/ ):void;
	onMapUpdate( packet:any /*net.minecraft.network.packet.s2c.play.MapUpdateS2CPacket*/ ):void;
	onNbtQueryResponse( packet:any /*net.minecraft.network.packet.s2c.play.NbtQueryResponseS2CPacket*/ ):void;
	onOpenHorseScreen( packet:any /*net.minecraft.network.packet.s2c.play.OpenHorseScreenS2CPacket*/ ):void;
	onOpenScreen( packet:any /*net.minecraft.network.packet.s2c.play.OpenScreenS2CPacket*/ ):void;
	onOpenWrittenBook( packet:any /*net.minecraft.network.packet.s2c.play.OpenWrittenBookS2CPacket*/ ):void;
	onOverlayMessage( packet:any /*net.minecraft.network.packet.s2c.play.OverlayMessageS2CPacket*/ ):void;
	onPacketException<T>( packet:net.minecraft.network.packet.Packet<any>, exception:any /*java.lang.Exception*/ ):void;
	onParticle( packet:any /*net.minecraft.network.packet.s2c.play.ParticleS2CPacket*/ ):void;
	onPing( packet:any /*net.minecraft.network.packet.s2c.common.CommonPingS2CPacket*/ ):void;
	onPingResult( packet:any /*net.minecraft.network.packet.s2c.query.PingResultS2CPacket*/ ):void;
	onPlaySound( packet:any /*net.minecraft.network.packet.s2c.play.PlaySoundS2CPacket*/ ):void;
	onPlaySoundFromEntity( packet:any /*net.minecraft.network.packet.s2c.play.PlaySoundFromEntityS2CPacket*/ ):void;
	onPlayerAbilities( packet:any /*net.minecraft.network.packet.s2c.play.PlayerAbilitiesS2CPacket*/ ):void;
	onPlayerActionResponse( packet:any /*net.minecraft.network.packet.s2c.play.PlayerActionResponseS2CPacket*/ ):void;
	onPlayerList( packet:any /*net.minecraft.network.packet.s2c.play.PlayerListS2CPacket*/ ):void;
	onPlayerListHeader( packet:any /*net.minecraft.network.packet.s2c.play.PlayerListHeaderS2CPacket*/ ):void;
	onPlayerPositionLook( packet:any /*net.minecraft.network.packet.s2c.play.PlayerPositionLookS2CPacket*/ ):void;
	onPlayerRemove( packet:any /*net.minecraft.network.packet.s2c.play.PlayerRemoveS2CPacket*/ ):void;
	onPlayerRespawn( packet:any /*net.minecraft.network.packet.s2c.play.PlayerRespawnS2CPacket*/ ):void;
	onPlayerSpawnPosition( packet:any /*net.minecraft.network.packet.s2c.play.PlayerSpawnPositionS2CPacket*/ ):void;
	onProfilelessChatMessage( packet:any /*net.minecraft.network.packet.s2c.play.ProfilelessChatMessageS2CPacket*/ ):void;
	onProjectilePower( packet:any /*net.minecraft.network.packet.s2c.play.ProjectilePowerS2CPacket*/ ):void;
	onRemoveEntityStatusEffect( packet:any /*net.minecraft.network.packet.s2c.play.RemoveEntityStatusEffectS2CPacket*/ ):void;
	onRemoveMessage( packet:any /*net.minecraft.network.packet.s2c.play.RemoveMessageS2CPacket*/ ):void;
	onResourcePackRemove( packet:any /*net.minecraft.network.packet.s2c.common.ResourcePackRemoveS2CPacket*/ ):void;
	onResourcePackSend( packet:any /*net.minecraft.network.packet.s2c.common.ResourcePackSendS2CPacket*/ ):void;
	onScoreboardDisplay( packet:any /*net.minecraft.network.packet.s2c.play.ScoreboardDisplayS2CPacket*/ ):void;
	onScoreboardObjectiveUpdate( packet:any /*net.minecraft.network.packet.s2c.play.ScoreboardObjectiveUpdateS2CPacket*/ ):void;
	onScoreboardScoreReset( packet:any /*net.minecraft.network.packet.s2c.play.ScoreboardScoreResetS2CPacket*/ ):void;
	onScoreboardScoreUpdate( packet:any /*net.minecraft.network.packet.s2c.play.ScoreboardScoreUpdateS2CPacket*/ ):void;
	onScreenHandlerPropertyUpdate( packet:any /*net.minecraft.network.packet.s2c.play.ScreenHandlerPropertyUpdateS2CPacket*/ ):void;
	onScreenHandlerSlotUpdate( packet:any /*net.minecraft.network.packet.s2c.play.ScreenHandlerSlotUpdateS2CPacket*/ ):void;
	onSelectAdvancementTab( packet:any /*net.minecraft.network.packet.s2c.play.SelectAdvancementTabS2CPacket*/ ):void;
	onServerLinks( packet:any /*net.minecraft.network.packet.s2c.common.ServerLinksS2CPacket*/ ):void;
	onServerMetadata( packet:any /*net.minecraft.network.packet.s2c.play.ServerMetadataS2CPacket*/ ):void;
	onServerTransfer( packet:any /*net.minecraft.network.packet.s2c.common.ServerTransferS2CPacket*/ ):void;
	onSetCameraEntity( packet:any /*net.minecraft.network.packet.s2c.play.SetCameraEntityS2CPacket*/ ):void;
	onSetTradeOffers( packet:any /*net.minecraft.network.packet.s2c.play.SetTradeOffersS2CPacket*/ ):void;
	onSignEditorOpen( packet:any /*net.minecraft.network.packet.s2c.play.SignEditorOpenS2CPacket*/ ):void;
	onSimulationDistance( packet:any /*net.minecraft.network.packet.s2c.play.SimulationDistanceS2CPacket*/ ):void;
	onStartChunkSend( packet:any /*net.minecraft.network.packet.s2c.play.StartChunkSendS2CPacket*/ ):void;
	onStatistics( packet:any /*net.minecraft.network.packet.s2c.play.StatisticsS2CPacket*/ ):void;
	onStopSound( packet:any /*net.minecraft.network.packet.s2c.play.StopSoundS2CPacket*/ ):void;
	onStoreCookie( packet:any /*net.minecraft.network.packet.s2c.common.StoreCookieS2CPacket*/ ):void;
	onSubtitle( packet:any /*net.minecraft.network.packet.s2c.play.SubtitleS2CPacket*/ ):void;
	onSynchronizeRecipes( packet:any /*net.minecraft.network.packet.s2c.play.SynchronizeRecipesS2CPacket*/ ):void;
	onSynchronizeTags( packet:any /*net.minecraft.network.packet.s2c.common.SynchronizeTagsS2CPacket*/ ):void;
	onTeam( packet:any /*net.minecraft.network.packet.s2c.play.TeamS2CPacket*/ ):void;
	onTickStep( packet:any /*net.minecraft.network.packet.s2c.play.TickStepS2CPacket*/ ):void;
	onTitle( packet:any /*net.minecraft.network.packet.s2c.play.TitleS2CPacket*/ ):void;
	onTitleClear( packet:any /*net.minecraft.network.packet.s2c.play.ClearTitleS2CPacket*/ ):void;
	onTitleFade( packet:any /*net.minecraft.network.packet.s2c.play.TitleFadeS2CPacket*/ ):void;
	onUnloadChunk( packet:any /*net.minecraft.network.packet.s2c.play.UnloadChunkS2CPacket*/ ):void;
	onUnlockRecipes( packet:any /*net.minecraft.network.packet.s2c.play.ChangeUnlockedRecipesS2CPacket*/ ):void;
	onUpdateSelectedSlot( packet:any /*net.minecraft.network.packet.s2c.play.UpdateSelectedSlotS2CPacket*/ ):void;
	onUpdateTickRate( packet:any /*net.minecraft.network.packet.s2c.play.UpdateTickRateS2CPacket*/ ):void;
	onVehicleMove( packet:any /*net.minecraft.network.packet.s2c.play.VehicleMoveS2CPacket*/ ):void;
	onWorldBorderCenterChanged( packet:any /*net.minecraft.network.packet.s2c.play.WorldBorderCenterChangedS2CPacket*/ ):void;
	onWorldBorderInitialize( packet:any /*net.minecraft.network.packet.s2c.play.WorldBorderInitializeS2CPacket*/ ):void;
	onWorldBorderInterpolateSize( packet:any /*net.minecraft.network.packet.s2c.play.WorldBorderInterpolateSizeS2CPacket*/ ):void;
	onWorldBorderSizeChanged( packet:any /*net.minecraft.network.packet.s2c.play.WorldBorderSizeChangedS2CPacket*/ ):void;
	onWorldBorderWarningBlocksChanged( packet:any /*net.minecraft.network.packet.s2c.play.WorldBorderWarningBlocksChangedS2CPacket*/ ):void;
	onWorldBorderWarningTimeChanged( packet:any /*net.minecraft.network.packet.s2c.play.WorldBorderWarningTimeChangedS2CPacket*/ ):void;
	onWorldEvent( packet:any /*net.minecraft.network.packet.s2c.play.WorldEventS2CPacket*/ ):void;
	onWorldTimeUpdate( packet:any /*net.minecraft.network.packet.s2c.play.WorldTimeUpdateS2CPacket*/ ):void;
	refreshSearchManager(  ):void;
	sendChatCommand( command:string ):void;
	sendChatMessage( content:string ):void;
	sendCommand( command:string ):boolean;
	sendPacket( packet:net.minecraft.network.packet.Packet<any /*java.lang.Object*/> ):void;
	tick(  ):void;
	toString(  ):string;
	unloadWorld(  ):void;
	updateKeyPair( keyPair:any /*net.minecraft.network.encryption.PlayerKeyPair*/ ):void;

} // end ClientPlayNetworkHandler

} // end namespace net.minecraft.client.network

declare namespace net.minecraft.entity {

class Entity/* extends java.lang.Object implements net.minecraft.entity.data.DataTracked, net.minecraft.util.Nameable, net.minecraft.world.entity.EntityLike, net.minecraft.server.command.CommandOutput, net.minecraft.scoreboard.ScoreHolder*/ {

	addCommandTag( tag:string ):boolean;
	addPortalChunkTicketAt( pos:net.minecraft.util.math.BlockPos ):void;
	addVelocity( deltaX:double, deltaY:double, deltaZ:double ):void;
	addVelocity( velocity:net.minecraft.util.math.Vec3d ):void;
	addVelocityInternal( velocity:net.minecraft.util.math.Vec3d ):void;
	animateDamage( yaw:float ):void;
	applyMirror( mirror:any /*net.minecraft.util.BlockMirror*/ ):float;
	applyRotation( rotation:any /*net.minecraft.util.BlockRotation*/ ):float;
	attemptTickInVoid(  ):void;
	baseTick(  ):void;
	bypassesLandingEffects(  ):boolean;
	bypassesSteppingEffects(  ):boolean;
	calculateDimensions(  ):void;
	canAvoidTraps(  ):boolean;
	canBeHitByProjectile(  ):boolean;
	canBeSpectated( spectator:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):boolean;
	canExplosionDestroyBlock( explosion:any /*net.minecraft.world.explosion.Explosion*/, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, explosionPower:float ):boolean;
	canFreeze(  ):boolean;
	canHit(  ):boolean;
	canModifyAt( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos ):boolean;
	canMoveVoluntarily(  ):boolean;
	canSprintAsVehicle(  ):boolean;
	canTeleportBetween( from:net.minecraft.world.World, to:net.minecraft.world.World ):boolean;
	canUsePortals( allowVehicles:boolean ):boolean;
	cannotBeSilenced(  ):boolean;
	changeLookDirection( cursorDeltaX:double, cursorDeltaY:double ):void;
	checkDespawn(  ):void;
	collidesWith( other:Entity ):boolean;
	collidesWithStateAtPos( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState ):boolean;
	copyFrom( original:Entity ):void;
	copyPositionAndRotation( entity:Entity ):void;
	createSpawnPacket( entityTrackerEntry:any /*net.minecraft.server.network.EntityTrackerEntry*/ ):net.minecraft.network.packet.Packet<any /*net.minecraft.network.listener.ClientPlayPacketListener*/>;
	damage( source:any /*net.minecraft.entity.damage.DamageSource*/, amount:float ):boolean;
	detach(  ):void;
	discard(  ):void;
	dismountVehicle(  ):void;
	distanceTo( entity:Entity ):float;
	doesNotCollide( offsetX:double, offsetY:double, offsetZ:double ):boolean;
	doesRenderOnFire(  ):boolean;
	dropItem( item:any /*net.minecraft.item.ItemConvertible*/ ):ItemEntity;
	dropItem( item:any /*net.minecraft.item.ItemConvertible*/, yOffset:int ):ItemEntity;
	dropStack( stack:net.minecraft.item.ItemStack ):ItemEntity;
	dropStack( stack:net.minecraft.item.ItemStack, yOffset:float ):ItemEntity;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/> ):void;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, entity:Entity ):void;
	entityDataRequiresOperator(  ):boolean;
	equals( o:any /*java.lang.Object*/ ):boolean;
	extinguish(  ):void;
	extinguishWithSound(  ):void;
	getAir(  ):int;
	getAttachments(  ):any /*net.minecraft.entity.EntityAttachments*/;
	getBlockPos(  ):net.minecraft.util.math.BlockPos;
	getBlockStateAtPos(  ):net.minecraft.block.BlockState;
	getBlockX(  ):int;
	getBlockY(  ):int;
	getBlockZ(  ):int;
	getBodyY( heightScale:double ):double;
	getBodyYaw(  ):float;
	getBoundingBox(  ):net.minecraft.util.math.Box;
	getBrightnessAtEyes(  ):float;
	getCameraPosVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getChunkPos(  ):net.minecraft.util.math.ChunkPos;
	getClientCameraPosVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getCommandSource(  ):any /*net.minecraft.server.command.ServerCommandSource*/;
	getCommandTags(  ):java.util.Set<string>;
	getControllingPassenger(  ):LivingEntity;
	getControllingVehicle(  ):Entity;
	getCustomName(  ):net.minecraft.text.Text;
	getDamageSources(  ):any /*net.minecraft.entity.damage.DamageSources*/;
	getDataTracker(  ):any /*net.minecraft.entity.data.DataTracker*/;
	getDefaultPortalCooldown(  ):int;
	getDimensions( pose:any /*net.minecraft.entity.EntityPose*/ ):any /*net.minecraft.entity.EntityDimensions*/;
	getDisplayName(  ):net.minecraft.text.Text;
	getEffectiveExplosionResistance( explosion:any /*net.minecraft.world.explosion.Explosion*/, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, blockState:net.minecraft.block.BlockState, fluidState:net.minecraft.fluid.FluidState, max:float ):float;
	getEntityWorld(  ):net.minecraft.world.World;
	getEyeHeight( pose:any /*net.minecraft.entity.EntityPose*/ ):float;
	getEyePos(  ):net.minecraft.util.math.Vec3d;
	getEyeY(  ):double;
	getFacing(  ):net.minecraft.util.math.Direction;
	getFinalGravity(  ):double;
	getFireTicks(  ):int;
	getFirstPassenger(  ):Entity;
	getFluidHeight( fluid:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid> ):double;
	getFreezingScale(  ):float;
	getFrozenTicks(  ):int;
	getHandPosOffset( item:net.minecraft.item.Item ):net.minecraft.util.math.Vec3d;
	getHeadYaw(  ):float;
	getHeight(  ):float;
	getHorizontalFacing(  ):net.minecraft.util.math.Direction;
	getId(  ):int;
	getLandingPos(  ):net.minecraft.util.math.BlockPos;
	getLeashOffset( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getLeashPos( delta:float ):net.minecraft.util.math.Vec3d;
	getLerpTargetPitch(  ):float;
	getLerpTargetX(  ):double;
	getLerpTargetY(  ):double;
	getLerpTargetYaw(  ):float;
	getLerpTargetZ(  ):double;
	getLerpedPos( delta:float ):net.minecraft.util.math.Vec3d;
	getMaxAir(  ):int;
	getMinFreezeDamageTicks(  ):int;
	getMovement(  ):net.minecraft.util.math.Vec3d;
	getMovementDirection(  ):net.minecraft.util.math.Direction;
	getName(  ):net.minecraft.text.Text;
	getNameForScoreboard(  ):string;
	getOppositeRotationVector( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getParticleX( widthScale:double ):double;
	getParticleZ( widthScale:double ):double;
	getPassengerList(  ):java.util.List<Entity>;
	getPassengerRidingPos( passenger:Entity ):net.minecraft.util.math.Vec3d;
	getPassengersDeep(  ):java.lang.Iterable<Entity>;
	getPickBlockStack(  ):net.minecraft.item.ItemStack;
	getPistonBehavior(  ):any /*net.minecraft.block.piston.PistonBehavior*/;
	getPitch(  ):float;
	getPitch( tickDelta:float ):float;
	getPlayerPassengers(  ):int;
	getPortalCooldown(  ):int;
	getPos(  ):net.minecraft.util.math.Vec3d;
	getPose(  ):any /*net.minecraft.entity.EntityPose*/;
	getProjectileDeflection( projectile:any /*net.minecraft.entity.projectile.ProjectileEntity*/ ):any /*net.minecraft.entity.ProjectileDeflection*/;
	getRandom(  ):any /*net.minecraft.util.math.random.Random*/;
	getRandomBodyY(  ):double;
	getRegistryManager(  ):any /*net.minecraft.registry.DynamicRegistryManager*/;
	getRemovalReason(  ):any /*net.minecraft.entity.Entity$RemovalReason*/;
	getRootVehicle(  ):Entity;
	getRotationClient(  ):any /*net.minecraft.util.math.Vec2f*/;
	getRotationVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getRotationVecClient(  ):net.minecraft.util.math.Vec3d;
	getRotationVector(  ):net.minecraft.util.math.Vec3d;
	getRotationVector( pitch:float, yaw:float ):net.minecraft.util.math.Vec3d;
	getSafeFallDistance(  ):int;
	getScoreboardTeam(  ):any /*net.minecraft.scoreboard.Team*/;
	getServer(  ):any /*net.minecraft.server.MinecraftServer*/;
	getSoundCategory(  ):net.minecraft.sound.SoundCategory;
	getStackReference( mappedIndex:int ):any /*net.minecraft.inventory.StackReference*/;
	getStandingEyeHeight(  ):float;
	getStepHeight(  ):float;
	getSteppingBlockState(  ):net.minecraft.block.BlockState;
	getSteppingPos(  ):net.minecraft.util.math.BlockPos;
	getStyledDisplayName(  ):net.minecraft.text.Text;
	getSwimHeight(  ):double;
	getSyncedPos(  ):net.minecraft.util.math.Vec3d;
	getTargetingMargin(  ):float;
	getTeamColorValue(  ):int;
	getTrackedPosition(  ):any /*net.minecraft.entity.TrackedPosition*/;
	getType(  ):EntityType<any /*java.lang.Object*/>;
	getUuid(  ):java.util.UUID;
	getUuidAsString(  ):string;
	getVehicle(  ):Entity;
	getVehicleAttachmentPos( vehicle:Entity ):net.minecraft.util.math.Vec3d;
	getVelocity(  ):net.minecraft.util.math.Vec3d;
	getVelocityAffectingPos(  ):net.minecraft.util.math.BlockPos;
	getVisibilityBoundingBox(  ):net.minecraft.util.math.Box;
	getWeaponStack(  ):net.minecraft.item.ItemStack;
	getWidth(  ):float;
	getWorld(  ):net.minecraft.world.World;
	getWorldSpawnPos( world:any /*net.minecraft.server.world.ServerWorld*/, basePos:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.BlockPos;
	getX(  ):double;
	getY(  ):double;
	getYaw(  ):float;
	getYaw( tickDelta:float ):float;
	getZ(  ):double;
	handleAttack( attacker:Entity ):boolean;
	handleFallDamage( fallDistance:float, damageMultiplier:float, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	handleStatus( status:any /*byte*/ ):void;
	hasControllingPassenger(  ):boolean;
	hasCustomName(  ):boolean;
	hasNoGravity(  ):boolean;
	hasPassenger( passenger:Entity ):boolean;
	hasPassenger( predicate:java.util.function.Predicate<Entity> ):boolean;
	hasPassengerDeep( passenger:Entity ):boolean;
	hasPassengers(  ):boolean;
	hasPermissionLevel( permissionLevel:int ):boolean;
	hasPlayerRider(  ):boolean;
	hasPortalCooldown(  ):boolean;
	hasVehicle(  ):boolean;
	interact( player:net.minecraft.entity.player.PlayerEntity, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	interactAt( player:net.minecraft.entity.player.PlayerEntity, hitPos:net.minecraft.util.math.Vec3d, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	isAlive(  ):boolean;
	isAttackable(  ):boolean;
	isCollidable(  ):boolean;
	isConnectedThroughVehicle( entity:Entity ):boolean;
	isCrawling(  ):boolean;
	isCustomNameVisible(  ):boolean;
	isDescending(  ):boolean;
	isFireImmune(  ):boolean;
	isFrozen(  ):boolean;
	isGlowing(  ):boolean;
	isGlowingLocal(  ):boolean;
	isImmuneToExplosion( explosion:any /*net.minecraft.world.explosion.Explosion*/ ):boolean;
	isInFluid(  ):boolean;
	isInLava(  ):boolean;
	isInPose( pose:any /*net.minecraft.entity.EntityPose*/ ):boolean;
	isInRange( entity:Entity, horizontalRadius:double, verticalRadius:double ):boolean;
	isInRange( entity:Entity, radius:double ):boolean;
	isInSneakingPose(  ):boolean;
	isInSwimmingPose(  ):boolean;
	isInsideWall(  ):boolean;
	isInsideWaterOrBubbleColumn(  ):boolean;
	isInvisible(  ):boolean;
	isInvisibleTo( player:net.minecraft.entity.player.PlayerEntity ):boolean;
	isInvulnerable(  ):boolean;
	isInvulnerableTo( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	isLiving(  ):boolean;
	isLogicalSideForUpdatingMovement(  ):boolean;
	isOnFire(  ):boolean;
	isOnGround(  ):boolean;
	isOnRail(  ):boolean;
	isPartOf( entity:Entity ):boolean;
	isPlayer(  ):boolean;
	isPushable(  ):boolean;
	isPushedByFluids(  ):boolean;
	isRegionUnloaded(  ):boolean;
	isRemoved(  ):boolean;
	isSilent(  ):boolean;
	isSneaking(  ):boolean;
	isSneaky(  ):boolean;
	isSpectator(  ):boolean;
	isSprinting(  ):boolean;
	isSubmergedIn( fluidTag:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid> ):boolean;
	isSubmergedInWater(  ):boolean;
	isSupportedBy( pos:net.minecraft.util.math.BlockPos ):boolean;
	isSwimming(  ):boolean;
	isTeamPlayer( team:any /*net.minecraft.scoreboard.AbstractTeam*/ ):boolean;
	isTeammate( other:Entity ):boolean;
	isTouchingWater(  ):boolean;
	isTouchingWaterOrRain(  ):boolean;
	isWet(  ):boolean;
	kill(  ):void;
	lerpYaw( delta:float ):float;
	limitFallDistance(  ):void;
	lookAt( anchorPoint:any /*net.minecraft.command.argument.EntityAnchorArgumentType$EntityAnchor*/, target:net.minecraft.util.math.Vec3d ):void;
	move( movementType:any /*net.minecraft.entity.MovementType*/, movement:net.minecraft.util.math.Vec3d ):void;
	occludeVibrationSignals(  ):boolean;
	offsetX( widthScale:double ):double;
	offsetZ( widthScale:double ):double;
	onBubbleColumnCollision( drag:boolean ):void;
	onBubbleColumnSurfaceCollision( drag:boolean ):void;
	onDamaged( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	onDataTrackerUpdate( entries:java.util.List<any /*net.minecraft.entity.data.DataTracker$SerializedEntry*/> ):void;
	onExplodedBy( entity:Entity ):void;
	onKilledOther( world:any /*net.minecraft.server.world.ServerWorld*/, other:LivingEntity ):boolean;
	onLanding(  ):void;
	onPassengerLookAround( passenger:Entity ):void;
	onPlayerCollision( player:net.minecraft.entity.player.PlayerEntity ):void;
	onRemoved(  ):void;
	onSpawnPacket( packet:any /*net.minecraft.network.packet.s2c.play.EntitySpawnS2CPacket*/ ):void;
	onStartedTrackingBy( player:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):void;
	onStoppedTrackingBy( player:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):void;
	onStruckByLightning( world:any /*net.minecraft.server.world.ServerWorld*/, lightning:any /*net.minecraft.entity.LightningEntity*/ ):void;
	onTrackedDataSet( data:any /*net.minecraft.entity.data.TrackedData*/ ):void;
	playSound( sound:net.minecraft.sound.SoundEvent, volume:float, pitch:float ):void;
	playSoundIfNotSilent( event:net.minecraft.sound.SoundEvent ):void;
	populateCrashReport( section:any /*net.minecraft.util.crash.CrashReportSection*/ ):void;
	positionInPortal( portalAxis:net.minecraft.util.math.Direction$Axis, portalRect:any /*net.minecraft.world.BlockLocating$Rectangle*/ ):net.minecraft.util.math.Vec3d;
	pushAwayFrom( entity:Entity ):void;
	raycast( maxDistance:double, tickDelta:float, includeFluids:boolean ):net.minecraft.util.hit.HitResult;
	readNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	recalculateDimensions( previous:any /*net.minecraft.entity.EntityDimensions*/ ):boolean;
	refreshPositionAfterTeleport( pos:net.minecraft.util.math.Vec3d ):void;
	refreshPositionAfterTeleport( x:double, y:double, z:double ):void;
	refreshPositionAndAngles( pos:net.minecraft.util.math.BlockPos, yaw:float, pitch:float ):void;
	refreshPositionAndAngles( pos:net.minecraft.util.math.Vec3d, yaw:float, pitch:float ):void;
	refreshPositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float ):void;
	remove( reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	removeAllPassengers(  ):void;
	removeCommandTag( tag:string ):boolean;
	requestTeleport( destX:double, destY:double, destZ:double ):void;
	requestTeleportAndDismount( destX:double, destY:double, destZ:double ):void;
	requestTeleportOffset( offsetX:double, offsetY:double, offsetZ:double ):void;
	resetPortalCooldown(  ):void;
	resetPosition(  ):void;
	saveNbt( nbt:net.minecraft.nbt.NbtCompound ):boolean;
	saveSelfNbt( nbt:net.minecraft.nbt.NbtCompound ):boolean;
	sendMessage( message:net.minecraft.text.Text ):void;
	setAir( air:int ):void;
	setAngles( yaw:float, pitch:float ):void;
	setBodyYaw( bodyYaw:float ):void;
	setBoundingBox( boundingBox:net.minecraft.util.math.Box ):void;
	setChangeListener( changeListener:any /*net.minecraft.world.entity.EntityChangeListener*/ ):void;
	setCustomName( name:net.minecraft.text.Text ):void;
	setCustomNameVisible( visible:boolean ):void;
	setFireTicks( fireTicks:int ):void;
	setFrozenTicks( frozenTicks:int ):void;
	setGlowing( glowing:boolean ):void;
	setHeadYaw( headYaw:float ):void;
	setId( id:int ):void;
	setInPowderSnow( inPowderSnow:boolean ):void;
	setInvisible( invisible:boolean ):void;
	setInvulnerable( invulnerable:boolean ):void;
	setNoGravity( noGravity:boolean ):void;
	setOnFire( onFire:boolean ):void;
	setOnFireFor( seconds:float ):void;
	setOnFireForTicks( ticks:int ):void;
	setOnFireFromLava(  ):void;
	setOnGround( onGround:boolean ):void;
	setOnGround( onGround:boolean, movement:net.minecraft.util.math.Vec3d ):void;
	setPitch( pitch:float ):void;
	setPortalCooldown( portalCooldown:int ):void;
	setPos( x:double, y:double, z:double ):void;
	setPose( pose:any /*net.minecraft.entity.EntityPose*/ ):void;
	setPosition( pos:net.minecraft.util.math.Vec3d ):void;
	setPosition( x:double, y:double, z:double ):void;
	setRemoved( reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	setSilent( silent:boolean ):void;
	setSneaking( sneaking:boolean ):void;
	setSprinting( sprinting:boolean ):void;
	setSwimming( swimming:boolean ):void;
	setUuid( uuid:java.util.UUID ):void;
	setVelocity( velocity:net.minecraft.util.math.Vec3d ):void;
	setVelocity( x:double, y:double, z:double ):void;
	setVelocityClient( x:double, y:double, z:double ):void;
	setYaw( yaw:float ):void;
	shouldBroadcastConsoleToOps(  ):boolean;
	shouldControlVehicles(  ):boolean;
	shouldDismountUnderwater(  ):boolean;
	shouldEscapePowderSnow(  ):boolean;
	shouldReceiveFeedback(  ):boolean;
	shouldRender( cameraX:double, cameraY:double, cameraZ:double ):boolean;
	shouldRender( distance:double ):boolean;
	shouldRenderName(  ):boolean;
	shouldSave(  ):boolean;
	shouldSpawnSprintingParticles(  ):boolean;
	shouldTrackOutput(  ):boolean;
	slowMovement( state:net.minecraft.block.BlockState, multiplier:net.minecraft.util.math.Vec3d ):void;
	squaredDistanceTo( entity:Entity ):double;
	squaredDistanceTo( vector:net.minecraft.util.math.Vec3d ):double;
	squaredDistanceTo( x:double, y:double, z:double ):double;
	startRiding( entity:Entity ):boolean;
	startRiding( entity:Entity, force:boolean ):boolean;
	static adjustMovementForCollisions( entity:Entity, movement:net.minecraft.util.math.Vec3d, entityBoundingBox:net.minecraft.util.math.Box, world:net.minecraft.world.World, collisions:java.util.List<any /*net.minecraft.util.shape.VoxelShape*/> ):net.minecraft.util.math.Vec3d;
	static getRenderDistanceMultiplier(  ):double;
	static setRenderDistanceMultiplier( value:double ):void;
	stopRiding(  ):void;
	streamPassengersAndSelf(  ):java.util.stream.Stream<Entity>;
	streamSelfAndPassengers(  ):java.util.stream.Stream<Entity>;
	teleport( world:any /*net.minecraft.server.world.ServerWorld*/, destX:double, destY:double, destZ:double, flags:java.util.Set<any /*net.minecraft.network.packet.s2c.play.PositionFlag*/>, yaw:float, pitch:float ):boolean;
	teleportTo( teleportTarget:any /*net.minecraft.world.TeleportTarget*/ ):Entity;
	tick(  ):void;
	tickRiding(  ):void;
	toString(  ):string;
	tryUsePortal( portal:any /*net.minecraft.block.Portal*/, pos:net.minecraft.util.math.BlockPos ):void;
	updateEventHandler( callback:java.util.function.BiConsumer<any /*net.minecraft.world.event.listener.EntityGameEventHandler*/, any /*net.minecraft.server.world.ServerWorld*/> ):void;
	updateKilledAdvancementCriterion( entityKilled:Entity, score:int, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	updateMovementInFluid( tag:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid>, speed:double ):boolean;
	updatePassengerForDismount( passenger:LivingEntity ):net.minecraft.util.math.Vec3d;
	updatePassengerPosition( passenger:Entity ):void;
	updatePosition( x:double, y:double, z:double ):void;
	updatePositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float ):void;
	updateSwimming(  ):void;
	updateTrackedHeadRotation( yaw:float, interpolationSteps:int ):void;
	updateTrackedPosition( x:double, y:double, z:double ):void;
	updateTrackedPositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float, interpolationSteps:int ):void;
	updateVelocity( speed:float, movementInput:net.minecraft.util.math.Vec3d ):void;
	writeNbt( nbt:net.minecraft.nbt.NbtCompound ):net.minecraft.nbt.NbtCompound;

} // end Entity

} // end namespace net.minecraft.entity

declare namespace net.minecraft.entity {

class LivingEntity/* extends Entity implements Attackable*/ {

	addCommandTag( tag:string ):boolean;
	addPortalChunkTicketAt( pos:net.minecraft.util.math.BlockPos ):void;
	addStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance ):boolean;
	addStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance, source:Entity ):boolean;
	addVelocity( deltaX:double, deltaY:double, deltaZ:double ):void;
	addVelocity( velocity:net.minecraft.util.math.Vec3d ):void;
	addVelocityInternal( velocity:net.minecraft.util.math.Vec3d ):void;
	animateDamage( yaw:float ):void;
	applyFluidMovingSpeed( gravity:double, falling:boolean, motion:net.minecraft.util.math.Vec3d ):net.minecraft.util.math.Vec3d;
	applyMirror( mirror:any /*net.minecraft.util.BlockMirror*/ ):float;
	applyMovementInput( movementInput:net.minecraft.util.math.Vec3d, slipperiness:float ):net.minecraft.util.math.Vec3d;
	applyRotation( rotation:any /*net.minecraft.util.BlockRotation*/ ):float;
	areItemsDifferent( stack:net.minecraft.item.ItemStack, stack2:net.minecraft.item.ItemStack ):boolean;
	attemptTickInVoid(  ):void;
	baseTick(  ):void;
	blockedByShield( source:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	bypassesLandingEffects(  ):boolean;
	bypassesSteppingEffects(  ):boolean;
	calculateDimensions(  ):void;
	canAvoidTraps(  ):boolean;
	canBeHitByProjectile(  ):boolean;
	canBeSpectated( spectator:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):boolean;
	canBreatheInWater(  ):boolean;
	canEquip( stack:net.minecraft.item.ItemStack ):boolean;
	canExplosionDestroyBlock( explosion:any /*net.minecraft.world.explosion.Explosion*/, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, explosionPower:float ):boolean;
	canFreeze(  ):boolean;
	canHaveStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance ):boolean;
	canHit(  ):boolean;
	canModifyAt( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos ):boolean;
	canMoveVoluntarily(  ):boolean;
	canSee( entity:Entity ):boolean;
	canSprintAsVehicle(  ):boolean;
	canTakeDamage(  ):boolean;
	canTarget( target:LivingEntity ):boolean;
	canTarget( type:EntityType<any /*java.lang.Object*/> ):boolean;
	canTeleportBetween( from:net.minecraft.world.World, to:net.minecraft.world.World ):boolean;
	canUsePortals( allowVehicles:boolean ):boolean;
	canUseSlot( slot:EquipmentSlot ):boolean;
	canWalkOnFluid( state:net.minecraft.fluid.FluidState ):boolean;
	cannotBeSilenced(  ):boolean;
	changeLookDirection( cursorDeltaX:double, cursorDeltaY:double ):void;
	checkDespawn(  ):void;
	clearActiveItem(  ):void;
	clearSleepingPosition(  ):void;
	clearStatusEffects(  ):boolean;
	collidesWith( other:Entity ):boolean;
	collidesWithStateAtPos( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState ):boolean;
	copyFrom( original:Entity ):void;
	copyPositionAndRotation( entity:Entity ):void;
	createSpawnPacket( entityTrackerEntry:any /*net.minecraft.server.network.EntityTrackerEntry*/ ):net.minecraft.network.packet.Packet<any /*net.minecraft.network.listener.ClientPlayPacketListener*/>;
	damage( source:any /*net.minecraft.entity.damage.DamageSource*/, amount:float ):boolean;
	detach(  ):void;
	disableExperienceDropping(  ):void;
	disablesShield(  ):boolean;
	discard(  ):void;
	dismountVehicle(  ):void;
	distanceTo( entity:Entity ):float;
	doesNotCollide( offsetX:double, offsetY:double, offsetZ:double ):boolean;
	doesRenderOnFire(  ):boolean;
	dropItem( item:any /*net.minecraft.item.ItemConvertible*/ ):ItemEntity;
	dropItem( item:any /*net.minecraft.item.ItemConvertible*/, yOffset:int ):ItemEntity;
	dropStack( stack:net.minecraft.item.ItemStack ):ItemEntity;
	dropStack( stack:net.minecraft.item.ItemStack, yOffset:float ):ItemEntity;
	eatFood( world:net.minecraft.world.World, stack:net.minecraft.item.ItemStack, foodComponent:any /*net.minecraft.component.type.FoodComponent*/ ):net.minecraft.item.ItemStack;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/> ):void;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, entity:Entity ):void;
	endCombat(  ):void;
	enterCombat(  ):void;
	entityDataRequiresOperator(  ):boolean;
	equals( o:any /*java.lang.Object*/ ):boolean;
	equipStack( slot:EquipmentSlot, stack:net.minecraft.item.ItemStack ):void;
	extinguish(  ):void;
	extinguishWithSound(  ):void;
	getAbsorptionAmount(  ):float;
	getActiveHand(  ):net.minecraft.util.Hand;
	getActiveItem(  ):net.minecraft.item.ItemStack;
	getActiveStatusEffects(  ):any /*java.util.Map*/;
	getAir(  ):int;
	getAllArmorItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getArmor(  ):int;
	getArmorItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getArmorVisibility(  ):float;
	getAttachments(  ):any /*net.minecraft.entity.EntityAttachments*/;
	getAttackDistanceScalingFactor( entity:Entity ):double;
	getAttacker(  ):LivingEntity;
	getAttacking(  ):LivingEntity;
	getAttributeBaseValue( attribute:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/> ):double;
	getAttributeInstance( attribute:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/> ):any /*net.minecraft.entity.attribute.EntityAttributeInstance*/;
	getAttributeValue( attribute:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/> ):double;
	getAttributes(  ):any /*net.minecraft.entity.attribute.AttributeContainer*/;
	getBlockPos(  ):net.minecraft.util.math.BlockPos;
	getBlockStateAtPos(  ):net.minecraft.block.BlockState;
	getBlockX(  ):int;
	getBlockY(  ):int;
	getBlockZ(  ):int;
	getBodyY( heightScale:double ):double;
	getBodyYaw(  ):float;
	getBoundingBox(  ):net.minecraft.util.math.Box;
	getBoundingBox( pose:any /*net.minecraft.entity.EntityPose*/ ):net.minecraft.util.math.Box;
	getBrain(  ):any /*net.minecraft.entity.ai.brain.Brain*/;
	getBrightnessAtEyes(  ):float;
	getCameraPosVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getChunkPos(  ):net.minecraft.util.math.ChunkPos;
	getClientCameraPosVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getClimbingPos(  ):java.util.Optional<net.minecraft.util.math.BlockPos>;
	getCommandSource(  ):any /*net.minecraft.server.command.ServerCommandSource*/;
	getCommandTags(  ):java.util.Set<string>;
	getControllingPassenger(  ):LivingEntity;
	getControllingVehicle(  ):Entity;
	getCustomName(  ):net.minecraft.text.Text;
	getDamageSources(  ):any /*net.minecraft.entity.damage.DamageSources*/;
	getDamageTiltYaw(  ):float;
	getDamageTracker(  ):any /*net.minecraft.entity.damage.DamageTracker*/;
	getDataTracker(  ):any /*net.minecraft.entity.data.DataTracker*/;
	getDefaultPortalCooldown(  ):int;
	getDespawnCounter(  ):int;
	getDimensions( pose:any /*net.minecraft.entity.EntityPose*/ ):any /*net.minecraft.entity.EntityDimensions*/;
	getDisplayName(  ):net.minecraft.text.Text;
	getEatSound( stack:net.minecraft.item.ItemStack ):net.minecraft.sound.SoundEvent;
	getEffectiveExplosionResistance( explosion:any /*net.minecraft.world.explosion.Explosion*/, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, blockState:net.minecraft.block.BlockState, fluidState:net.minecraft.fluid.FluidState, max:float ):float;
	getEntityWorld(  ):net.minecraft.world.World;
	getEquippedItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getEquippedStack( slot:EquipmentSlot ):net.minecraft.item.ItemStack;
	getEyeHeight( pose:any /*net.minecraft.entity.EntityPose*/ ):float;
	getEyePos(  ):net.minecraft.util.math.Vec3d;
	getEyeY(  ):double;
	getFacing(  ):net.minecraft.util.math.Direction;
	getFallFlyingTicks(  ):int;
	getFallSounds(  ):any /*net.minecraft.entity.LivingEntity$FallSounds*/;
	getFinalGravity(  ):double;
	getFireTicks(  ):int;
	getFirstPassenger(  ):Entity;
	getFluidHeight( fluid:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid> ):double;
	getFreezingScale(  ):float;
	getFrozenTicks(  ):int;
	getHandItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getHandPosOffset( item:net.minecraft.item.Item ):net.minecraft.util.math.Vec3d;
	getHandSwingProgress( tickDelta:float ):float;
	getHeadYaw(  ):float;
	getHealth(  ):float;
	getHeight(  ):float;
	getHorizontalFacing(  ):net.minecraft.util.math.Direction;
	getId(  ):int;
	getItemUseTime(  ):int;
	getItemUseTimeLeft(  ):int;
	getJumpBoostVelocityModifier(  ):float;
	getLandingPos(  ):net.minecraft.util.math.BlockPos;
	getLastAttackTime(  ):int;
	getLastAttackedTime(  ):int;
	getLastAttacker(  ):LivingEntity;
	getLeaningPitch( tickDelta:float ):float;
	getLeashOffset( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getLeashPos( delta:float ):net.minecraft.util.math.Vec3d;
	getLerpTargetPitch(  ):float;
	getLerpTargetX(  ):double;
	getLerpTargetY(  ):double;
	getLerpTargetYaw(  ):float;
	getLerpTargetZ(  ):double;
	getLerpedPos( delta:float ):net.minecraft.util.math.Vec3d;
	getLocationBasedEnchantmentEffects(  ):any /*java.util.Map*/;
	getLootTable(  ):net.minecraft.registry.RegistryKey<any /*net.minecraft.loot.LootTable*/>;
	getLootTableSeed(  ):long;
	getMainArm(  ):any /*net.minecraft.util.Arm*/;
	getMainHandStack(  ):net.minecraft.item.ItemStack;
	getMaxAbsorption(  ):float;
	getMaxAir(  ):int;
	getMaxHealth(  ):float;
	getMinFreezeDamageTicks(  ):int;
	getMovement(  ):net.minecraft.util.math.Vec3d;
	getMovementDirection(  ):net.minecraft.util.math.Direction;
	getMovementSpeed(  ):float;
	getName(  ):net.minecraft.text.Text;
	getNameForScoreboard(  ):string;
	getOffHandStack(  ):net.minecraft.item.ItemStack;
	getOppositeRotationVector( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getParticleX( widthScale:double ):double;
	getParticleZ( widthScale:double ):double;
	getPassengerList(  ):java.util.List<Entity>;
	getPassengerRidingPos( passenger:Entity ):net.minecraft.util.math.Vec3d;
	getPassengersDeep(  ):java.lang.Iterable<Entity>;
	getPickBlockStack(  ):net.minecraft.item.ItemStack;
	getPistonBehavior(  ):any /*net.minecraft.block.piston.PistonBehavior*/;
	getPitch(  ):float;
	getPitch( tickDelta:float ):float;
	getPlayerPassengers(  ):int;
	getPortalCooldown(  ):int;
	getPos(  ):net.minecraft.util.math.Vec3d;
	getPose(  ):any /*net.minecraft.entity.EntityPose*/;
	getPoses(  ):any /*com.google.common.collect.ImmutableList*/;
	getPreferredEquipmentSlot( stack:net.minecraft.item.ItemStack ):EquipmentSlot;
	getPrimeAdversary(  ):LivingEntity;
	getProjectileDeflection( projectile:any /*net.minecraft.entity.projectile.ProjectileEntity*/ ):any /*net.minecraft.entity.ProjectileDeflection*/;
	getProjectileType( stack:net.minecraft.item.ItemStack ):net.minecraft.item.ItemStack;
	getRandom(  ):any /*net.minecraft.util.math.random.Random*/;
	getRandomBodyY(  ):double;
	getRecentDamageSource(  ):any /*net.minecraft.entity.damage.DamageSource*/;
	getRegistryManager(  ):any /*net.minecraft.registry.DynamicRegistryManager*/;
	getRemovalReason(  ):any /*net.minecraft.entity.Entity$RemovalReason*/;
	getRootVehicle(  ):Entity;
	getRotationClient(  ):any /*net.minecraft.util.math.Vec2f*/;
	getRotationVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getRotationVecClient(  ):net.minecraft.util.math.Vec3d;
	getRotationVector(  ):net.minecraft.util.math.Vec3d;
	getRotationVector( pitch:float, yaw:float ):net.minecraft.util.math.Vec3d;
	getSafeFallDistance(  ):int;
	getScale(  ):float;
	getScaleFactor(  ):float;
	getScoreboardTeam(  ):any /*net.minecraft.scoreboard.Team*/;
	getServer(  ):any /*net.minecraft.server.MinecraftServer*/;
	getSleepingDirection(  ):net.minecraft.util.math.Direction;
	getSleepingPosition(  ):java.util.Optional<net.minecraft.util.math.BlockPos>;
	getSoundCategory(  ):net.minecraft.sound.SoundCategory;
	getSoundPitch(  ):float;
	getStackInHand( hand:net.minecraft.util.Hand ):net.minecraft.item.ItemStack;
	getStackReference( mappedIndex:int ):any /*net.minecraft.inventory.StackReference*/;
	getStandingEyeHeight(  ):float;
	getStatusEffect( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):net.minecraft.entity.effect.StatusEffectInstance;
	getStatusEffects(  ):java.util.Collection<net.minecraft.entity.effect.StatusEffectInstance>;
	getStepHeight(  ):float;
	getSteppingBlockState(  ):net.minecraft.block.BlockState;
	getSteppingPos(  ):net.minecraft.util.math.BlockPos;
	getStingerCount(  ):int;
	getStuckArrowCount(  ):int;
	getStyledDisplayName(  ):net.minecraft.text.Text;
	getSwimHeight(  ):double;
	getSyncedPos(  ):net.minecraft.util.math.Vec3d;
	getTargetingMargin(  ):float;
	getTeamColorValue(  ):int;
	getTrackedPosition(  ):any /*net.minecraft.entity.TrackedPosition*/;
	getType(  ):EntityType<any /*java.lang.Object*/>;
	getUuid(  ):java.util.UUID;
	getUuidAsString(  ):string;
	getVehicle(  ):Entity;
	getVehicleAttachmentPos( vehicle:Entity ):net.minecraft.util.math.Vec3d;
	getVelocity(  ):net.minecraft.util.math.Vec3d;
	getVelocityAffectingPos(  ):net.minecraft.util.math.BlockPos;
	getVisibilityBoundingBox(  ):net.minecraft.util.math.Box;
	getWeaponStack(  ):net.minecraft.item.ItemStack;
	getWidth(  ):float;
	getWorld(  ):net.minecraft.world.World;
	getWorldSpawnPos( world:any /*net.minecraft.server.world.ServerWorld*/, basePos:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.BlockPos;
	getX(  ):double;
	getXpToDrop( world:any /*net.minecraft.server.world.ServerWorld*/, attacker:Entity ):int;
	getY(  ):double;
	getYaw(  ):float;
	getYaw( tickDelta:float ):float;
	getZ(  ):double;
	handleAttack( attacker:Entity ):boolean;
	handleFallDamage( fallDistance:float, damageMultiplier:float, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	handleStatus( status:any /*byte*/ ):void;
	hasControllingPassenger(  ):boolean;
	hasCustomName(  ):boolean;
	hasInvertedHealingAndHarm(  ):boolean;
	hasLandedInFluid(  ):boolean;
	hasNoDrag(  ):boolean;
	hasNoGravity(  ):boolean;
	hasPassenger( passenger:Entity ):boolean;
	hasPassenger( predicate:java.util.function.Predicate<Entity> ):boolean;
	hasPassengerDeep( passenger:Entity ):boolean;
	hasPassengers(  ):boolean;
	hasPermissionLevel( permissionLevel:int ):boolean;
	hasPlayerRider(  ):boolean;
	hasPortalCooldown(  ):boolean;
	hasStackEquipped( slot:EquipmentSlot ):boolean;
	hasStatusEffect( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):boolean;
	hasVehicle(  ):boolean;
	heal( amount:float ):void;
	hurtByWater(  ):boolean;
	interact( player:net.minecraft.entity.player.PlayerEntity, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	interactAt( player:net.minecraft.entity.player.PlayerEntity, hitPos:net.minecraft.util.math.Vec3d, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	isAffectedBySplashPotions(  ):boolean;
	isAlive(  ):boolean;
	isAttackable(  ):boolean;
	isBaby(  ):boolean;
	isBlocking(  ):boolean;
	isClimbing(  ):boolean;
	isCollidable(  ):boolean;
	isConnectedThroughVehicle( entity:Entity ):boolean;
	isCrawling(  ):boolean;
	isCustomNameVisible(  ):boolean;
	isDead(  ):boolean;
	isDescending(  ):boolean;
	isExperienceDroppingDisabled(  ):boolean;
	isFallFlying(  ):boolean;
	isFireImmune(  ):boolean;
	isFrozen(  ):boolean;
	isGlowing(  ):boolean;
	isGlowingLocal(  ):boolean;
	isHolding( item:net.minecraft.item.Item ):boolean;
	isHolding( predicate:java.util.function.Predicate<net.minecraft.item.ItemStack> ):boolean;
	isHoldingOntoLadder(  ):boolean;
	isImmuneToExplosion( explosion:any /*net.minecraft.world.explosion.Explosion*/ ):boolean;
	isInCreativeMode(  ):boolean;
	isInFluid(  ):boolean;
	isInLava(  ):boolean;
	isInPose( pose:any /*net.minecraft.entity.EntityPose*/ ):boolean;
	isInRange( entity:Entity, horizontalRadius:double, verticalRadius:double ):boolean;
	isInRange( entity:Entity, radius:double ):boolean;
	isInSneakingPose(  ):boolean;
	isInSwimmingPose(  ):boolean;
	isInsideWall(  ):boolean;
	isInsideWaterOrBubbleColumn(  ):boolean;
	isInvisible(  ):boolean;
	isInvisibleTo( player:net.minecraft.entity.player.PlayerEntity ):boolean;
	isInvulnerable(  ):boolean;
	isInvulnerableTo( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	isLiving(  ):boolean;
	isLogicalSideForUpdatingMovement(  ):boolean;
	isMobOrPlayer(  ):boolean;
	isOnFire(  ):boolean;
	isOnGround(  ):boolean;
	isOnRail(  ):boolean;
	isPartOf( entity:Entity ):boolean;
	isPartOfGame(  ):boolean;
	isPlayer(  ):boolean;
	isPushable(  ):boolean;
	isPushedByFluids(  ):boolean;
	isRegionUnloaded(  ):boolean;
	isRemoved(  ):boolean;
	isSilent(  ):boolean;
	isSleeping(  ):boolean;
	isSneaking(  ):boolean;
	isSneaky(  ):boolean;
	isSpectator(  ):boolean;
	isSprinting(  ):boolean;
	isSubmergedIn( fluidTag:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid> ):boolean;
	isSubmergedInWater(  ):boolean;
	isSupportedBy( pos:net.minecraft.util.math.BlockPos ):boolean;
	isSwimming(  ):boolean;
	isTarget( entity:LivingEntity, predicate:any /*net.minecraft.entity.ai.TargetPredicate*/ ):boolean;
	isTeamPlayer( team:any /*net.minecraft.scoreboard.AbstractTeam*/ ):boolean;
	isTeammate( other:Entity ):boolean;
	isTouchingWater(  ):boolean;
	isTouchingWaterOrRain(  ):boolean;
	isUsingItem(  ):boolean;
	isUsingRiptide(  ):boolean;
	isWet(  ):boolean;
	jump(  ):void;
	kill(  ):void;
	lerpYaw( delta:float ):float;
	limitFallDistance(  ):void;
	lookAt( anchorPoint:any /*net.minecraft.command.argument.EntityAnchorArgumentType$EntityAnchor*/, target:net.minecraft.util.math.Vec3d ):void;
	move( movementType:any /*net.minecraft.entity.MovementType*/, movement:net.minecraft.util.math.Vec3d ):void;
	occludeVibrationSignals(  ):boolean;
	offsetX( widthScale:double ):double;
	offsetZ( widthScale:double ):double;
	onAttacking( target:Entity ):void;
	onBubbleColumnCollision( drag:boolean ):void;
	onBubbleColumnSurfaceCollision( drag:boolean ):void;
	onDamaged( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	onDataTrackerUpdate( entries:java.util.List<any /*net.minecraft.entity.data.DataTracker$SerializedEntry*/> ):void;
	onDeath( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	onEquipStack( slot:EquipmentSlot, oldStack:net.minecraft.item.ItemStack, newStack:net.minecraft.item.ItemStack ):void;
	onExplodedBy( entity:Entity ):void;
	onKilledOther( world:any /*net.minecraft.server.world.ServerWorld*/, other:LivingEntity ):boolean;
	onLanding(  ):void;
	onPassengerLookAround( passenger:Entity ):void;
	onPlayerCollision( player:net.minecraft.entity.player.PlayerEntity ):void;
	onRemoved(  ):void;
	onSpawnPacket( packet:any /*net.minecraft.network.packet.s2c.play.EntitySpawnS2CPacket*/ ):void;
	onStartedTrackingBy( player:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):void;
	onStoppedTrackingBy( player:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):void;
	onStruckByLightning( world:any /*net.minecraft.server.world.ServerWorld*/, lightning:any /*net.minecraft.entity.LightningEntity*/ ):void;
	onTrackedDataSet( data:any /*net.minecraft.entity.data.TrackedData*/ ):void;
	playSound( sound:net.minecraft.sound.SoundEvent ):void;
	playSound( sound:net.minecraft.sound.SoundEvent, volume:float, pitch:float ):void;
	playSoundIfNotSilent( event:net.minecraft.sound.SoundEvent ):void;
	populateCrashReport( section:any /*net.minecraft.util.crash.CrashReportSection*/ ):void;
	positionInPortal( portalAxis:net.minecraft.util.math.Direction$Axis, portalRect:any /*net.minecraft.world.BlockLocating$Rectangle*/ ):net.minecraft.util.math.Vec3d;
	pushAwayFrom( entity:Entity ):void;
	raycast( maxDistance:double, tickDelta:float, includeFluids:boolean ):net.minecraft.util.hit.HitResult;
	readCustomDataFromNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	readNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	recalculateDimensions( previous:any /*net.minecraft.entity.EntityDimensions*/ ):boolean;
	refreshPositionAfterTeleport( pos:net.minecraft.util.math.Vec3d ):void;
	refreshPositionAfterTeleport( x:double, y:double, z:double ):void;
	refreshPositionAndAngles( pos:net.minecraft.util.math.BlockPos, yaw:float, pitch:float ):void;
	refreshPositionAndAngles( pos:net.minecraft.util.math.Vec3d, yaw:float, pitch:float ):void;
	refreshPositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float ):void;
	remove( reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	removeAllPassengers(  ):void;
	removeCommandTag( tag:string ):boolean;
	removeStatusEffect( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):boolean;
	removeStatusEffectInternal( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):net.minecraft.entity.effect.StatusEffectInstance;
	requestTeleport( destX:double, destY:double, destZ:double ):void;
	requestTeleportAndDismount( destX:double, destY:double, destZ:double ):void;
	requestTeleportOffset( offsetX:double, offsetY:double, offsetZ:double ):void;
	resetPortalCooldown(  ):void;
	resetPosition(  ):void;
	saveNbt( nbt:net.minecraft.nbt.NbtCompound ):boolean;
	saveSelfNbt( nbt:net.minecraft.nbt.NbtCompound ):boolean;
	sendEffectToControllingPlayer( effect:net.minecraft.entity.effect.StatusEffectInstance ):void;
	sendEquipmentBreakStatus( item:net.minecraft.item.Item, slot:EquipmentSlot ):void;
	sendMessage( message:net.minecraft.text.Text ):void;
	sendPickup( item:Entity, count:int ):void;
	setAbsorptionAmount( absorptionAmount:float ):void;
	setAir( air:int ):void;
	setAngles( yaw:float, pitch:float ):void;
	setAttacker( attacker:LivingEntity ):void;
	setAttacking( attacking:net.minecraft.entity.player.PlayerEntity ):void;
	setBodyYaw( bodyYaw:float ):void;
	setBoundingBox( boundingBox:net.minecraft.util.math.Box ):void;
	setChangeListener( changeListener:any /*net.minecraft.world.entity.EntityChangeListener*/ ):void;
	setCurrentHand( hand:net.minecraft.util.Hand ):void;
	setCustomName( name:net.minecraft.text.Text ):void;
	setCustomNameVisible( visible:boolean ):void;
	setDespawnCounter( despawnCounter:int ):void;
	setFireTicks( fireTicks:int ):void;
	setFrozenTicks( frozenTicks:int ):void;
	setGlowing( glowing:boolean ):void;
	setHeadYaw( headYaw:float ):void;
	setHealth( health:float ):void;
	setId( id:int ):void;
	setInPowderSnow( inPowderSnow:boolean ):void;
	setInvisible( invisible:boolean ):void;
	setInvulnerable( invulnerable:boolean ):void;
	setJumping( jumping:boolean ):void;
	setMovementSpeed( movementSpeed:float ):void;
	setNearbySongPlaying( songPosition:net.minecraft.util.math.BlockPos, playing:boolean ):void;
	setNoDrag( noDrag:boolean ):void;
	setNoGravity( noGravity:boolean ):void;
	setOnFire( onFire:boolean ):void;
	setOnFireFor( seconds:float ):void;
	setOnFireForTicks( ticks:int ):void;
	setOnFireFromLava(  ):void;
	setOnGround( onGround:boolean ):void;
	setOnGround( onGround:boolean, movement:net.minecraft.util.math.Vec3d ):void;
	setPitch( pitch:float ):void;
	setPortalCooldown( portalCooldown:int ):void;
	setPos( x:double, y:double, z:double ):void;
	setPose( pose:any /*net.minecraft.entity.EntityPose*/ ):void;
	setPosition( pos:net.minecraft.util.math.Vec3d ):void;
	setPosition( x:double, y:double, z:double ):void;
	setRemoved( reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	setSilent( silent:boolean ):void;
	setSleepingPosition( pos:net.minecraft.util.math.BlockPos ):void;
	setSneaking( sneaking:boolean ):void;
	setSprinting( sprinting:boolean ):void;
	setStackInHand( hand:net.minecraft.util.Hand, stack:net.minecraft.item.ItemStack ):void;
	setStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance, source:Entity ):void;
	setStingerCount( stingerCount:int ):void;
	setStuckArrowCount( stuckArrowCount:int ):void;
	setSwimming( swimming:boolean ):void;
	setUuid( uuid:java.util.UUID ):void;
	setVelocity( velocity:net.minecraft.util.math.Vec3d ):void;
	setVelocity( x:double, y:double, z:double ):void;
	setVelocityClient( x:double, y:double, z:double ):void;
	setYaw( yaw:float ):void;
	shouldBroadcastConsoleToOps(  ):boolean;
	shouldControlVehicles(  ):boolean;
	shouldDismountUnderwater(  ):boolean;
	shouldDropXp(  ):boolean;
	shouldEscapePowderSnow(  ):boolean;
	shouldReceiveFeedback(  ):boolean;
	shouldRender( cameraX:double, cameraY:double, cameraZ:double ):boolean;
	shouldRender( distance:double ):boolean;
	shouldRenderName(  ):boolean;
	shouldSave(  ):boolean;
	shouldSpawnSprintingParticles(  ):boolean;
	shouldTrackOutput(  ):boolean;
	sleep( pos:net.minecraft.util.math.BlockPos ):void;
	slowMovement( state:net.minecraft.block.BlockState, multiplier:net.minecraft.util.math.Vec3d ):void;
	squaredDistanceTo( entity:Entity ):double;
	squaredDistanceTo( vector:net.minecraft.util.math.Vec3d ):double;
	squaredDistanceTo( x:double, y:double, z:double ):double;
	startRiding( entity:Entity ):boolean;
	startRiding( entity:Entity, force:boolean ):boolean;
	static adjustMovementForCollisions( entity:Entity, movement:net.minecraft.util.math.Vec3d, entityBoundingBox:net.minecraft.util.math.Box, world:net.minecraft.world.World, collisions:java.util.List<any /*net.minecraft.util.shape.VoxelShape*/> ):net.minecraft.util.math.Vec3d;
	static containsOnlyAmbientEffects( effects:java.util.Collection<net.minecraft.entity.effect.StatusEffectInstance> ):boolean;
	static createLivingAttributes(  ):any /*net.minecraft.entity.attribute.DefaultAttributeContainer$Builder*/;
	static getRenderDistanceMultiplier(  ):double;
	static getSlotForHand( hand:net.minecraft.util.Hand ):EquipmentSlot;
	static positionInPortal( pos:net.minecraft.util.math.Vec3d ):net.minecraft.util.math.Vec3d;
	static setRenderDistanceMultiplier( value:double ):void;
	stopRiding(  ):void;
	stopUsingItem(  ):void;
	streamPassengersAndSelf(  ):java.util.stream.Stream<Entity>;
	streamSelfAndPassengers(  ):java.util.stream.Stream<Entity>;
	swingHand( hand:net.minecraft.util.Hand ):void;
	swingHand( hand:net.minecraft.util.Hand, fromServerPlayer:boolean ):void;
	takeKnockback( strength:double, x:double, z:double ):void;
	teleport( world:any /*net.minecraft.server.world.ServerWorld*/, destX:double, destY:double, destZ:double, flags:java.util.Set<any /*net.minecraft.network.packet.s2c.play.PositionFlag*/>, yaw:float, pitch:float ):boolean;
	teleport( x:double, y:double, z:double, particleEffects:boolean ):boolean;
	teleportTo( teleportTarget:any /*net.minecraft.world.TeleportTarget*/ ):Entity;
	tick(  ):void;
	tickMovement(  ):void;
	tickRiding(  ):void;
	tiltScreen( deltaX:double, deltaZ:double ):void;
	toString(  ):string;
	travel( movementInput:net.minecraft.util.math.Vec3d ):void;
	triggerItemPickedUpByEntityCriteria( item:ItemEntity ):void;
	tryAttack( target:Entity ):boolean;
	tryEatFood( world:net.minecraft.world.World, stack:net.minecraft.item.ItemStack ):net.minecraft.item.ItemStack;
	tryUsePortal( portal:any /*net.minecraft.block.Portal*/, pos:net.minecraft.util.math.BlockPos ):void;
	updateEventHandler( callback:java.util.function.BiConsumer<any /*net.minecraft.world.event.listener.EntityGameEventHandler*/, any /*net.minecraft.server.world.ServerWorld*/> ):void;
	updateKilledAdvancementCriterion( entityKilled:Entity, score:int, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	updateLimbs( flutter:boolean ):void;
	updateMovementInFluid( tag:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid>, speed:double ):boolean;
	updatePassengerForDismount( passenger:LivingEntity ):net.minecraft.util.math.Vec3d;
	updatePassengerPosition( passenger:Entity ):void;
	updatePosition( x:double, y:double, z:double ):void;
	updatePositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float ):void;
	updateSwimming(  ):void;
	updateTrackedHeadRotation( yaw:float, interpolationSteps:int ):void;
	updateTrackedPosition( x:double, y:double, z:double ):void;
	updateTrackedPositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float, interpolationSteps:int ):void;
	updateVelocity( speed:float, movementInput:net.minecraft.util.math.Vec3d ):void;
	wakeUp(  ):void;
	writeCustomDataToNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	writeNbt( nbt:net.minecraft.nbt.NbtCompound ):net.minecraft.nbt.NbtCompound;

} // end LivingEntity

} // end namespace net.minecraft.entity

declare namespace net.minecraft.entity.player {

class PlayerEntity/* extends net.minecraft.entity.LivingEntity*/ {

	addCommandTag( tag:string ):boolean;
	addCritParticles( target:net.minecraft.entity.Entity ):void;
	addEnchantedHitParticles( target:net.minecraft.entity.Entity ):void;
	addExhaustion( exhaustion:float ):void;
	addExperience( experience:int ):void;
	addExperienceLevels( levels:int ):void;
	addPortalChunkTicketAt( pos:net.minecraft.util.math.BlockPos ):void;
	addScore( score:int ):void;
	addShoulderEntity( entityNbt:net.minecraft.nbt.NbtCompound ):boolean;
	addStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance ):boolean;
	addStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance, source:net.minecraft.entity.Entity ):boolean;
	addVelocity( deltaX:double, deltaY:double, deltaZ:double ):void;
	addVelocity( velocity:net.minecraft.util.math.Vec3d ):void;
	addVelocityInternal( velocity:net.minecraft.util.math.Vec3d ):void;
	animateDamage( yaw:float ):void;
	applyEnchantmentCosts( enchantedItem:net.minecraft.item.ItemStack, experienceLevels:int ):void;
	applyFluidMovingSpeed( gravity:double, falling:boolean, motion:net.minecraft.util.math.Vec3d ):net.minecraft.util.math.Vec3d;
	applyMirror( mirror:any /*net.minecraft.util.BlockMirror*/ ):float;
	applyMovementInput( movementInput:net.minecraft.util.math.Vec3d, slipperiness:float ):net.minecraft.util.math.Vec3d;
	applyRotation( rotation:any /*net.minecraft.util.BlockRotation*/ ):float;
	areItemsDifferent( stack:net.minecraft.item.ItemStack, stack2:net.minecraft.item.ItemStack ):boolean;
	attack( target:net.minecraft.entity.Entity ):void;
	attemptTickInVoid(  ):void;
	baseTick(  ):void;
	blockedByShield( source:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	bypassesLandingEffects(  ):boolean;
	bypassesSteppingEffects(  ):boolean;
	calculateDimensions(  ):void;
	canAvoidTraps(  ):boolean;
	canBeHitByProjectile(  ):boolean;
	canBeSpectated( spectator:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):boolean;
	canBreatheInWater(  ):boolean;
	canConsume( ignoreHunger:boolean ):boolean;
	canEquip( stack:net.minecraft.item.ItemStack ):boolean;
	canExplosionDestroyBlock( explosion:any /*net.minecraft.world.explosion.Explosion*/, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, explosionPower:float ):boolean;
	canFoodHeal(  ):boolean;
	canFreeze(  ):boolean;
	canHarvest( state:net.minecraft.block.BlockState ):boolean;
	canHaveStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance ):boolean;
	canHit(  ):boolean;
	canInteractWithBlockAt( pos:net.minecraft.util.math.BlockPos, additionalRange:double ):boolean;
	canInteractWithEntity( entity:net.minecraft.entity.Entity, additionalRange:double ):boolean;
	canInteractWithEntityIn( box:net.minecraft.util.math.Box, additionalRange:double ):boolean;
	canModifyAt( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos ):boolean;
	canModifyBlocks(  ):boolean;
	canMoveVoluntarily(  ):boolean;
	canPlaceOn( pos:net.minecraft.util.math.BlockPos, facing:net.minecraft.util.math.Direction, stack:net.minecraft.item.ItemStack ):boolean;
	canResetTimeBySleeping(  ):boolean;
	canSee( entity:net.minecraft.entity.Entity ):boolean;
	canSprintAsVehicle(  ):boolean;
	canTakeDamage(  ):boolean;
	canTarget( target:net.minecraft.entity.LivingEntity ):boolean;
	canTarget( type:net.minecraft.entity.EntityType<any /*java.lang.Object*/> ):boolean;
	canTeleportBetween( from:net.minecraft.world.World, to:net.minecraft.world.World ):boolean;
	canUsePortals( allowVehicles:boolean ):boolean;
	canUseSlot( slot:net.minecraft.entity.EquipmentSlot ):boolean;
	canWalkOnFluid( state:net.minecraft.fluid.FluidState ):boolean;
	cannotBeSilenced(  ):boolean;
	changeLookDirection( cursorDeltaX:double, cursorDeltaY:double ):void;
	checkDespawn(  ):void;
	checkFallFlying(  ):boolean;
	clearActiveItem(  ):void;
	clearCurrentExplosion(  ):void;
	clearSleepingPosition(  ):void;
	clearStatusEffects(  ):boolean;
	collidesWith( other:net.minecraft.entity.Entity ):boolean;
	collidesWithStateAtPos( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState ):boolean;
	copyFrom( original:net.minecraft.entity.Entity ):void;
	copyPositionAndRotation( entity:net.minecraft.entity.Entity ):void;
	createSpawnPacket( entityTrackerEntry:any /*net.minecraft.server.network.EntityTrackerEntry*/ ):net.minecraft.network.packet.Packet<any /*net.minecraft.network.listener.ClientPlayPacketListener*/>;
	damage( source:any /*net.minecraft.entity.damage.DamageSource*/, amount:float ):boolean;
	detach(  ):void;
	disableExperienceDropping(  ):void;
	disableShield(  ):void;
	disablesShield(  ):boolean;
	discard(  ):void;
	dismountVehicle(  ):void;
	distanceTo( entity:net.minecraft.entity.Entity ):float;
	doesNotCollide( offsetX:double, offsetY:double, offsetZ:double ):boolean;
	doesRenderOnFire(  ):boolean;
	dropItem( item:any /*net.minecraft.item.ItemConvertible*/ ):net.minecraft.entity.ItemEntity;
	dropItem( item:any /*net.minecraft.item.ItemConvertible*/, yOffset:int ):net.minecraft.entity.ItemEntity;
	dropItem( stack:net.minecraft.item.ItemStack, retainOwnership:boolean ):net.minecraft.entity.ItemEntity;
	dropItem( stack:net.minecraft.item.ItemStack, throwRandomly:boolean, retainOwnership:boolean ):net.minecraft.entity.ItemEntity;
	dropStack( stack:net.minecraft.item.ItemStack ):net.minecraft.entity.ItemEntity;
	dropStack( stack:net.minecraft.item.ItemStack, yOffset:float ):net.minecraft.entity.ItemEntity;
	eatFood( world:net.minecraft.world.World, stack:net.minecraft.item.ItemStack, foodComponent:any /*net.minecraft.component.type.FoodComponent*/ ):net.minecraft.item.ItemStack;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/> ):void;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, entity:net.minecraft.entity.Entity ):void;
	endCombat(  ):void;
	enterCombat(  ):void;
	entityDataRequiresOperator(  ):boolean;
	equals( o:any /*java.lang.Object*/ ):boolean;
	equipStack( slot:net.minecraft.entity.EquipmentSlot, stack:net.minecraft.item.ItemStack ):void;
	extinguish(  ):void;
	extinguishWithSound(  ):void;
	getAbilities(  ):any /*net.minecraft.entity.player.PlayerAbilities*/;
	getAbsorptionAmount(  ):float;
	getActiveHand(  ):net.minecraft.util.Hand;
	getActiveItem(  ):net.minecraft.item.ItemStack;
	getActiveStatusEffects(  ):any /*java.util.Map*/;
	getAir(  ):int;
	getAllArmorItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getArmor(  ):int;
	getArmorItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getArmorVisibility(  ):float;
	getAttachments(  ):any /*net.minecraft.entity.EntityAttachments*/;
	getAttackCooldownProgress( baseTime:float ):float;
	getAttackCooldownProgressPerTick(  ):float;
	getAttackDistanceScalingFactor( entity:net.minecraft.entity.Entity ):double;
	getAttacker(  ):net.minecraft.entity.LivingEntity;
	getAttacking(  ):net.minecraft.entity.LivingEntity;
	getAttributeBaseValue( attribute:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/> ):double;
	getAttributeInstance( attribute:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/> ):any /*net.minecraft.entity.attribute.EntityAttributeInstance*/;
	getAttributeValue( attribute:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/> ):double;
	getAttributes(  ):any /*net.minecraft.entity.attribute.AttributeContainer*/;
	getBaseDimensions( pose:any /*net.minecraft.entity.EntityPose*/ ):any /*net.minecraft.entity.EntityDimensions*/;
	getBlockBreakingSpeed( block:net.minecraft.block.BlockState ):float;
	getBlockInteractionRange(  ):double;
	getBlockPos(  ):net.minecraft.util.math.BlockPos;
	getBlockStateAtPos(  ):net.minecraft.block.BlockState;
	getBlockX(  ):int;
	getBlockY(  ):int;
	getBlockZ(  ):int;
	getBodyY( heightScale:double ):double;
	getBodyYaw(  ):float;
	getBoundingBox(  ):net.minecraft.util.math.Box;
	getBoundingBox( pose:any /*net.minecraft.entity.EntityPose*/ ):net.minecraft.util.math.Box;
	getBrain(  ):any /*net.minecraft.entity.ai.brain.Brain*/;
	getBrightnessAtEyes(  ):float;
	getCameraPosVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getChunkPos(  ):net.minecraft.util.math.ChunkPos;
	getClientCameraPosVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getClimbingPos(  ):java.util.Optional<net.minecraft.util.math.BlockPos>;
	getCommandSource(  ):any /*net.minecraft.server.command.ServerCommandSource*/;
	getCommandTags(  ):java.util.Set<string>;
	getControllingPassenger(  ):net.minecraft.entity.LivingEntity;
	getControllingVehicle(  ):net.minecraft.entity.Entity;
	getCustomName(  ):net.minecraft.text.Text;
	getDamageSources(  ):any /*net.minecraft.entity.damage.DamageSources*/;
	getDamageTiltYaw(  ):float;
	getDamageTracker(  ):any /*net.minecraft.entity.damage.DamageTracker*/;
	getDataTracker(  ):any /*net.minecraft.entity.data.DataTracker*/;
	getDefaultPortalCooldown(  ):int;
	getDespawnCounter(  ):int;
	getDimensions( pose:any /*net.minecraft.entity.EntityPose*/ ):any /*net.minecraft.entity.EntityDimensions*/;
	getDisplayName(  ):net.minecraft.text.Text;
	getEatSound( stack:net.minecraft.item.ItemStack ):net.minecraft.sound.SoundEvent;
	getEffectiveExplosionResistance( explosion:any /*net.minecraft.world.explosion.Explosion*/, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, blockState:net.minecraft.block.BlockState, fluidState:net.minecraft.fluid.FluidState, max:float ):float;
	getEnchantmentTableSeed(  ):int;
	getEnderChestInventory(  ):any /*net.minecraft.inventory.EnderChestInventory*/;
	getEntityInteractionRange(  ):double;
	getEntityWorld(  ):net.minecraft.world.World;
	getEquippedItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getEquippedStack( slot:net.minecraft.entity.EquipmentSlot ):net.minecraft.item.ItemStack;
	getEyeHeight( pose:any /*net.minecraft.entity.EntityPose*/ ):float;
	getEyePos(  ):net.minecraft.util.math.Vec3d;
	getEyeY(  ):double;
	getFacing(  ):net.minecraft.util.math.Direction;
	getFallFlyingTicks(  ):int;
	getFallSounds(  ):any /*net.minecraft.entity.LivingEntity$FallSounds*/;
	getFinalGravity(  ):double;
	getFireTicks(  ):int;
	getFirstPassenger(  ):net.minecraft.entity.Entity;
	getFluidHeight( fluid:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid> ):double;
	getFreezingScale(  ):float;
	getFrozenTicks(  ):int;
	getGameProfile(  ):any /*com.mojang.authlib.GameProfile*/;
	getHandItems(  ):java.lang.Iterable<net.minecraft.item.ItemStack>;
	getHandPosOffset( item:net.minecraft.item.Item ):net.minecraft.util.math.Vec3d;
	getHandSwingProgress( tickDelta:float ):float;
	getHeadYaw(  ):float;
	getHealth(  ):float;
	getHeight(  ):float;
	getHorizontalFacing(  ):net.minecraft.util.math.Direction;
	getHungerManager(  ):HungerManager;
	getId(  ):int;
	getInventory(  ):PlayerInventory;
	getItemCooldownManager(  ):any /*net.minecraft.entity.player.ItemCooldownManager*/;
	getItemUseTime(  ):int;
	getItemUseTimeLeft(  ):int;
	getJumpBoostVelocityModifier(  ):float;
	getLandingPos(  ):net.minecraft.util.math.BlockPos;
	getLastAttackTime(  ):int;
	getLastAttackedTime(  ):int;
	getLastAttacker(  ):net.minecraft.entity.LivingEntity;
	getLastDeathPos(  ):java.util.Optional<any /*net.minecraft.util.math.GlobalPos*/>;
	getLeaningPitch( tickDelta:float ):float;
	getLeashOffset( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getLeashPos( delta:float ):net.minecraft.util.math.Vec3d;
	getLerpTargetPitch(  ):float;
	getLerpTargetX(  ):double;
	getLerpTargetY(  ):double;
	getLerpTargetYaw(  ):float;
	getLerpTargetZ(  ):double;
	getLerpedPos( delta:float ):net.minecraft.util.math.Vec3d;
	getLocationBasedEnchantmentEffects(  ):any /*java.util.Map*/;
	getLootTable(  ):net.minecraft.registry.RegistryKey<any /*net.minecraft.loot.LootTable*/>;
	getLootTableSeed(  ):long;
	getLuck(  ):float;
	getMainArm(  ):any /*net.minecraft.util.Arm*/;
	getMainHandStack(  ):net.minecraft.item.ItemStack;
	getMaxAbsorption(  ):float;
	getMaxAir(  ):int;
	getMaxHealth(  ):float;
	getMinFreezeDamageTicks(  ):int;
	getMovement(  ):net.minecraft.util.math.Vec3d;
	getMovementDirection(  ):net.minecraft.util.math.Direction;
	getMovementSpeed(  ):float;
	getName(  ):net.minecraft.text.Text;
	getNameForScoreboard(  ):string;
	getNextLevelExperience(  ):int;
	getOffHandStack(  ):net.minecraft.item.ItemStack;
	getOppositeRotationVector( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getParticleX( widthScale:double ):double;
	getParticleZ( widthScale:double ):double;
	getPassengerList(  ):java.util.List<net.minecraft.entity.Entity>;
	getPassengerRidingPos( passenger:net.minecraft.entity.Entity ):net.minecraft.util.math.Vec3d;
	getPassengersDeep(  ):java.lang.Iterable<net.minecraft.entity.Entity>;
	getPickBlockStack(  ):net.minecraft.item.ItemStack;
	getPistonBehavior(  ):any /*net.minecraft.block.piston.PistonBehavior*/;
	getPitch(  ):float;
	getPitch( tickDelta:float ):float;
	getPlayerPassengers(  ):int;
	getPortalCooldown(  ):int;
	getPos(  ):net.minecraft.util.math.Vec3d;
	getPose(  ):any /*net.minecraft.entity.EntityPose*/;
	getPoses(  ):any /*com.google.common.collect.ImmutableList*/;
	getPreferredEquipmentSlot( stack:net.minecraft.item.ItemStack ):net.minecraft.entity.EquipmentSlot;
	getPrimeAdversary(  ):net.minecraft.entity.LivingEntity;
	getProjectileDeflection( projectile:any /*net.minecraft.entity.projectile.ProjectileEntity*/ ):any /*net.minecraft.entity.ProjectileDeflection*/;
	getProjectileType( stack:net.minecraft.item.ItemStack ):net.minecraft.item.ItemStack;
	getRandom(  ):any /*net.minecraft.util.math.random.Random*/;
	getRandomBodyY(  ):double;
	getRecentDamageSource(  ):any /*net.minecraft.entity.damage.DamageSource*/;
	getRegistryManager(  ):any /*net.minecraft.registry.DynamicRegistryManager*/;
	getRemovalReason(  ):any /*net.minecraft.entity.Entity$RemovalReason*/;
	getRootVehicle(  ):net.minecraft.entity.Entity;
	getRotationClient(  ):any /*net.minecraft.util.math.Vec2f*/;
	getRotationVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getRotationVecClient(  ):net.minecraft.util.math.Vec3d;
	getRotationVector(  ):net.minecraft.util.math.Vec3d;
	getRotationVector( pitch:float, yaw:float ):net.minecraft.util.math.Vec3d;
	getSafeFallDistance(  ):int;
	getScale(  ):float;
	getScaleFactor(  ):float;
	getScore(  ):int;
	getScoreboard(  ):any /*net.minecraft.scoreboard.Scoreboard*/;
	getScoreboardTeam(  ):any /*net.minecraft.scoreboard.Team*/;
	getSculkShriekerWarningManager(  ):java.util.Optional<any /*net.minecraft.block.entity.SculkShriekerWarningManager*/>;
	getServer(  ):any /*net.minecraft.server.MinecraftServer*/;
	getShoulderEntityLeft(  ):net.minecraft.nbt.NbtCompound;
	getShoulderEntityRight(  ):net.minecraft.nbt.NbtCompound;
	getSleepTimer(  ):int;
	getSleepingDirection(  ):net.minecraft.util.math.Direction;
	getSleepingPosition(  ):java.util.Optional<net.minecraft.util.math.BlockPos>;
	getSoundCategory(  ):net.minecraft.sound.SoundCategory;
	getSoundPitch(  ):float;
	getStackInHand( hand:net.minecraft.util.Hand ):net.minecraft.item.ItemStack;
	getStackReference( mappedIndex:int ):any /*net.minecraft.inventory.StackReference*/;
	getStandingEyeHeight(  ):float;
	getStatusEffect( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):net.minecraft.entity.effect.StatusEffectInstance;
	getStatusEffects(  ):java.util.Collection<net.minecraft.entity.effect.StatusEffectInstance>;
	getStepHeight(  ):float;
	getSteppingBlockState(  ):net.minecraft.block.BlockState;
	getSteppingPos(  ):net.minecraft.util.math.BlockPos;
	getStingerCount(  ):int;
	getStuckArrowCount(  ):int;
	getStyledDisplayName(  ):net.minecraft.text.Text;
	getSwimHeight(  ):double;
	getSyncedPos(  ):net.minecraft.util.math.Vec3d;
	getTargetingMargin(  ):float;
	getTeamColorValue(  ):int;
	getTrackedPosition(  ):any /*net.minecraft.entity.TrackedPosition*/;
	getType(  ):net.minecraft.entity.EntityType<any /*java.lang.Object*/>;
	getUuid(  ):java.util.UUID;
	getUuidAsString(  ):string;
	getVehicle(  ):net.minecraft.entity.Entity;
	getVehicleAttachmentPos( vehicle:net.minecraft.entity.Entity ):net.minecraft.util.math.Vec3d;
	getVelocity(  ):net.minecraft.util.math.Vec3d;
	getVelocityAffectingPos(  ):net.minecraft.util.math.BlockPos;
	getVisibilityBoundingBox(  ):net.minecraft.util.math.Box;
	getWeaponStack(  ):net.minecraft.item.ItemStack;
	getWidth(  ):float;
	getWorld(  ):net.minecraft.world.World;
	getWorldSpawnPos( world:any /*net.minecraft.server.world.ServerWorld*/, basePos:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.BlockPos;
	getX(  ):double;
	getXpToDrop( world:any /*net.minecraft.server.world.ServerWorld*/, attacker:net.minecraft.entity.Entity ):int;
	getY(  ):double;
	getYaw(  ):float;
	getYaw( tickDelta:float ):float;
	getZ(  ):double;
	giveItemStack( stack:net.minecraft.item.ItemStack ):boolean;
	handleAttack( attacker:net.minecraft.entity.Entity ):boolean;
	handleFallDamage( fallDistance:float, damageMultiplier:float, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	handleStatus( status:any /*byte*/ ):void;
	hasControllingPassenger(  ):boolean;
	hasCustomName(  ):boolean;
	hasInvertedHealingAndHarm(  ):boolean;
	hasLandedInFluid(  ):boolean;
	hasNoDrag(  ):boolean;
	hasNoGravity(  ):boolean;
	hasPassenger( passenger:net.minecraft.entity.Entity ):boolean;
	hasPassenger( predicate:java.util.function.Predicate<net.minecraft.entity.Entity> ):boolean;
	hasPassengerDeep( passenger:net.minecraft.entity.Entity ):boolean;
	hasPassengers(  ):boolean;
	hasPermissionLevel( permissionLevel:int ):boolean;
	hasPlayerRider(  ):boolean;
	hasPortalCooldown(  ):boolean;
	hasReducedDebugInfo(  ):boolean;
	hasStackEquipped( slot:net.minecraft.entity.EquipmentSlot ):boolean;
	hasStatusEffect( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):boolean;
	hasVehicle(  ):boolean;
	heal( amount:float ):void;
	hurtByWater(  ):boolean;
	increaseStat( stat:any /*net.minecraft.stat.Stat*/, amount:int ):void;
	increaseStat( stat:net.minecraft.util.Identifier, amount:int ):void;
	incrementStat( stat:any /*net.minecraft.stat.Stat*/ ):void;
	incrementStat( stat:net.minecraft.util.Identifier ):void;
	interact( entity:net.minecraft.entity.Entity, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	interact( player:PlayerEntity, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	interactAt( player:PlayerEntity, hitPos:net.minecraft.util.math.Vec3d, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	isAffectedBySplashPotions(  ):boolean;
	isAlive(  ):boolean;
	isAttackable(  ):boolean;
	isBaby(  ):boolean;
	isBlockBreakingRestricted( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, gameMode:net.minecraft.world.GameMode ):boolean;
	isBlocking(  ):boolean;
	isClimbing(  ):boolean;
	isCollidable(  ):boolean;
	isConnectedThroughVehicle( entity:net.minecraft.entity.Entity ):boolean;
	isCrawling(  ):boolean;
	isCreative(  ):boolean;
	isCreativeLevelTwoOp(  ):boolean;
	isCustomNameVisible(  ):boolean;
	isDead(  ):boolean;
	isDescending(  ):boolean;
	isExperienceDroppingDisabled(  ):boolean;
	isFallFlying(  ):boolean;
	isFireImmune(  ):boolean;
	isFrozen(  ):boolean;
	isGlowing(  ):boolean;
	isGlowingLocal(  ):boolean;
	isHolding( item:net.minecraft.item.Item ):boolean;
	isHolding( predicate:java.util.function.Predicate<net.minecraft.item.ItemStack> ):boolean;
	isHoldingOntoLadder(  ):boolean;
	isImmuneToExplosion( explosion:any /*net.minecraft.world.explosion.Explosion*/ ):boolean;
	isInCreativeMode(  ):boolean;
	isInFluid(  ):boolean;
	isInLava(  ):boolean;
	isInPose( pose:any /*net.minecraft.entity.EntityPose*/ ):boolean;
	isInRange( entity:net.minecraft.entity.Entity, horizontalRadius:double, verticalRadius:double ):boolean;
	isInRange( entity:net.minecraft.entity.Entity, radius:double ):boolean;
	isInSneakingPose(  ):boolean;
	isInSwimmingPose(  ):boolean;
	isInsideWall(  ):boolean;
	isInsideWaterOrBubbleColumn(  ):boolean;
	isInvisible(  ):boolean;
	isInvisibleTo( player:PlayerEntity ):boolean;
	isInvulnerable(  ):boolean;
	isInvulnerableTo( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	isLiving(  ):boolean;
	isLogicalSideForUpdatingMovement(  ):boolean;
	isMainPlayer(  ):boolean;
	isMobOrPlayer(  ):boolean;
	isOnFire(  ):boolean;
	isOnGround(  ):boolean;
	isOnRail(  ):boolean;
	isPartOf( entity:net.minecraft.entity.Entity ):boolean;
	isPartOfGame(  ):boolean;
	isPartVisible( modelPart:any /*net.minecraft.entity.player.PlayerModelPart*/ ):boolean;
	isPlayer(  ):boolean;
	isPushable(  ):boolean;
	isPushedByFluids(  ):boolean;
	isRegionUnloaded(  ):boolean;
	isRemoved(  ):boolean;
	isSilent(  ):boolean;
	isSleeping(  ):boolean;
	isSneaking(  ):boolean;
	isSneaky(  ):boolean;
	isSpectator(  ):boolean;
	isSprinting(  ):boolean;
	isSubmergedIn( fluidTag:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid> ):boolean;
	isSubmergedInWater(  ):boolean;
	isSupportedBy( pos:net.minecraft.util.math.BlockPos ):boolean;
	isSwimming(  ):boolean;
	isTarget( entity:net.minecraft.entity.LivingEntity, predicate:any /*net.minecraft.entity.ai.TargetPredicate*/ ):boolean;
	isTeamPlayer( team:any /*net.minecraft.scoreboard.AbstractTeam*/ ):boolean;
	isTeammate( other:net.minecraft.entity.Entity ):boolean;
	isTouchingWater(  ):boolean;
	isTouchingWaterOrRain(  ):boolean;
	isUsingItem(  ):boolean;
	isUsingRiptide(  ):boolean;
	isUsingSpyglass(  ):boolean;
	isWet(  ):boolean;
	jump(  ):void;
	kill(  ):void;
	lerpYaw( delta:float ):float;
	limitFallDistance(  ):void;
	lockRecipes( recipes:java.util.Collection<any /*net.minecraft.recipe.RecipeEntry*/> ):int;
	lookAt( anchorPoint:any /*net.minecraft.command.argument.EntityAnchorArgumentType$EntityAnchor*/, target:net.minecraft.util.math.Vec3d ):void;
	move( movementType:any /*net.minecraft.entity.MovementType*/, movement:net.minecraft.util.math.Vec3d ):void;
	occludeVibrationSignals(  ):boolean;
	offsetX( widthScale:double ):double;
	offsetZ( widthScale:double ):double;
	onAttacking( target:net.minecraft.entity.Entity ):void;
	onBubbleColumnCollision( drag:boolean ):void;
	onBubbleColumnSurfaceCollision( drag:boolean ):void;
	onDamaged( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	onDataTrackerUpdate( entries:java.util.List<any /*net.minecraft.entity.data.DataTracker$SerializedEntry*/> ):void;
	onDeath( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	onEquipStack( slot:net.minecraft.entity.EquipmentSlot, oldStack:net.minecraft.item.ItemStack, newStack:net.minecraft.item.ItemStack ):void;
	onExplodedBy( entity:net.minecraft.entity.Entity ):void;
	onKilledOther( world:any /*net.minecraft.server.world.ServerWorld*/, other:net.minecraft.entity.LivingEntity ):boolean;
	onLanding(  ):void;
	onPassengerLookAround( passenger:net.minecraft.entity.Entity ):void;
	onPickupSlotClick( cursorStack:net.minecraft.item.ItemStack, slotStack:net.minecraft.item.ItemStack, clickType:any /*net.minecraft.util.ClickType*/ ):void;
	onPlayerCollision( player:PlayerEntity ):void;
	onRecipeCrafted( recipe:any /*net.minecraft.recipe.RecipeEntry*/, ingredients:java.util.List<net.minecraft.item.ItemStack> ):void;
	onRemoved(  ):void;
	onSpawnPacket( packet:any /*net.minecraft.network.packet.s2c.play.EntitySpawnS2CPacket*/ ):void;
	onStartedTrackingBy( player:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):void;
	onStoppedTrackingBy( player:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):void;
	onStruckByLightning( world:any /*net.minecraft.server.world.ServerWorld*/, lightning:any /*net.minecraft.entity.LightningEntity*/ ):void;
	onTrackedDataSet( data:any /*net.minecraft.entity.data.TrackedData*/ ):void;
	openCommandBlockMinecartScreen( commandBlockExecutor:any /*net.minecraft.world.CommandBlockExecutor*/ ):void;
	openCommandBlockScreen( commandBlock:any /*net.minecraft.block.entity.CommandBlockBlockEntity*/ ):void;
	openEditSignScreen( sign:any /*net.minecraft.block.entity.SignBlockEntity*/, front:boolean ):void;
	openHandledScreen( factory:any /*net.minecraft.screen.NamedScreenHandlerFactory*/ ):any /*java.util.OptionalInt*/;
	openHorseInventory( horse:any /*net.minecraft.entity.passive.AbstractHorseEntity*/, inventory:net.minecraft.inventory.Inventory ):void;
	openJigsawScreen( jigsaw:any /*net.minecraft.block.entity.JigsawBlockEntity*/ ):void;
	openStructureBlockScreen( structureBlock:any /*net.minecraft.block.entity.StructureBlockBlockEntity*/ ):void;
	playSound( sound:net.minecraft.sound.SoundEvent ):void;
	playSound( sound:net.minecraft.sound.SoundEvent, volume:float, pitch:float ):void;
	playSoundIfNotSilent( event:net.minecraft.sound.SoundEvent ):void;
	playSoundToPlayer( sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	populateCrashReport( section:any /*net.minecraft.util.crash.CrashReportSection*/ ):void;
	positionInPortal( portalAxis:net.minecraft.util.math.Direction$Axis, portalRect:any /*net.minecraft.world.BlockLocating$Rectangle*/ ):net.minecraft.util.math.Vec3d;
	pushAwayFrom( entity:net.minecraft.entity.Entity ):void;
	raycast( maxDistance:double, tickDelta:float, includeFluids:boolean ):net.minecraft.util.hit.HitResult;
	readCustomDataFromNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	readNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	recalculateDimensions( previous:any /*net.minecraft.entity.EntityDimensions*/ ):boolean;
	refreshPositionAfterTeleport( pos:net.minecraft.util.math.Vec3d ):void;
	refreshPositionAfterTeleport( x:double, y:double, z:double ):void;
	refreshPositionAndAngles( pos:net.minecraft.util.math.BlockPos, yaw:float, pitch:float ):void;
	refreshPositionAndAngles( pos:net.minecraft.util.math.Vec3d, yaw:float, pitch:float ):void;
	refreshPositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float ):void;
	remove( reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	removeAllPassengers(  ):void;
	removeCommandTag( tag:string ):boolean;
	removeStatusEffect( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):boolean;
	removeStatusEffectInternal( effect:net.minecraft.registry.entry.RegistryEntry<net.minecraft.entity.effect.StatusEffect> ):net.minecraft.entity.effect.StatusEffectInstance;
	requestRespawn(  ):void;
	requestTeleport( destX:double, destY:double, destZ:double ):void;
	requestTeleportAndDismount( destX:double, destY:double, destZ:double ):void;
	requestTeleportOffset( offsetX:double, offsetY:double, offsetZ:double ):void;
	resetLastAttackedTicks(  ):void;
	resetPortalCooldown(  ):void;
	resetPosition(  ):void;
	resetStat( stat:any /*net.minecraft.stat.Stat*/ ):void;
	saveNbt( nbt:net.minecraft.nbt.NbtCompound ):boolean;
	saveSelfNbt( nbt:net.minecraft.nbt.NbtCompound ):boolean;
	sendAbilitiesUpdate(  ):void;
	sendEffectToControllingPlayer( effect:net.minecraft.entity.effect.StatusEffectInstance ):void;
	sendEquipmentBreakStatus( item:net.minecraft.item.Item, slot:net.minecraft.entity.EquipmentSlot ):void;
	sendMessage( message:net.minecraft.text.Text ):void;
	sendMessage( message:net.minecraft.text.Text, overlay:boolean ):void;
	sendPickup( item:net.minecraft.entity.Entity, count:int ):void;
	sendTradeOffers( syncId:int, offers:any /*net.minecraft.village.TradeOfferList*/, levelProgress:int, experience:int, leveled:boolean, refreshable:boolean ):void;
	setAbsorptionAmount( absorptionAmount:float ):void;
	setAir( air:int ):void;
	setAngles( yaw:float, pitch:float ):void;
	setAttacker( attacker:net.minecraft.entity.LivingEntity ):void;
	setAttacking( attacking:PlayerEntity ):void;
	setBodyYaw( bodyYaw:float ):void;
	setBoundingBox( boundingBox:net.minecraft.util.math.Box ):void;
	setChangeListener( changeListener:any /*net.minecraft.world.entity.EntityChangeListener*/ ):void;
	setCurrentHand( hand:net.minecraft.util.Hand ):void;
	setCustomName( name:net.minecraft.text.Text ):void;
	setCustomNameVisible( visible:boolean ):void;
	setDespawnCounter( despawnCounter:int ):void;
	setFireTicks( fireTicks:int ):void;
	setFrozenTicks( frozenTicks:int ):void;
	setGlowing( glowing:boolean ):void;
	setHeadYaw( headYaw:float ):void;
	setHealth( health:float ):void;
	setId( id:int ):void;
	setIgnoreFallDamageFromCurrentExplosion( ignoreFallDamageFromCurrentExplosion:boolean ):void;
	setInPowderSnow( inPowderSnow:boolean ):void;
	setInvisible( invisible:boolean ):void;
	setInvulnerable( invulnerable:boolean ):void;
	setJumping( jumping:boolean ):void;
	setLastDeathPos( lastDeathPos:java.util.Optional<any /*net.minecraft.util.math.GlobalPos*/> ):void;
	setMainArm( arm:any /*net.minecraft.util.Arm*/ ):void;
	setMovementSpeed( movementSpeed:float ):void;
	setNearbySongPlaying( songPosition:net.minecraft.util.math.BlockPos, playing:boolean ):void;
	setNoDrag( noDrag:boolean ):void;
	setNoGravity( noGravity:boolean ):void;
	setOnFire( onFire:boolean ):void;
	setOnFireFor( seconds:float ):void;
	setOnFireForTicks( ticks:int ):void;
	setOnFireFromLava(  ):void;
	setOnGround( onGround:boolean ):void;
	setOnGround( onGround:boolean, movement:net.minecraft.util.math.Vec3d ):void;
	setPitch( pitch:float ):void;
	setPortalCooldown( portalCooldown:int ):void;
	setPos( x:double, y:double, z:double ):void;
	setPose( pose:any /*net.minecraft.entity.EntityPose*/ ):void;
	setPosition( pos:net.minecraft.util.math.Vec3d ):void;
	setPosition( x:double, y:double, z:double ):void;
	setReducedDebugInfo( reducedDebugInfo:boolean ):void;
	setRemoved( reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	setScore( score:int ):void;
	setSilent( silent:boolean ):void;
	setSleepingPosition( pos:net.minecraft.util.math.BlockPos ):void;
	setSneaking( sneaking:boolean ):void;
	setSprinting( sprinting:boolean ):void;
	setStackInHand( hand:net.minecraft.util.Hand, stack:net.minecraft.item.ItemStack ):void;
	setStatusEffect( effect:net.minecraft.entity.effect.StatusEffectInstance, source:net.minecraft.entity.Entity ):void;
	setStingerCount( stingerCount:int ):void;
	setStuckArrowCount( stuckArrowCount:int ):void;
	setSwimming( swimming:boolean ):void;
	setUuid( uuid:java.util.UUID ):void;
	setVelocity( velocity:net.minecraft.util.math.Vec3d ):void;
	setVelocity( x:double, y:double, z:double ):void;
	setVelocityClient( x:double, y:double, z:double ):void;
	setYaw( yaw:float ):void;
	shouldBroadcastConsoleToOps(  ):boolean;
	shouldCancelInteraction(  ):boolean;
	shouldCloseHandledScreenOnRespawn(  ):boolean;
	shouldControlVehicles(  ):boolean;
	shouldDamagePlayer( player:PlayerEntity ):boolean;
	shouldDismountUnderwater(  ):boolean;
	shouldDropXp(  ):boolean;
	shouldEscapePowderSnow(  ):boolean;
	shouldFilterText(  ):boolean;
	shouldIgnoreFallDamageFromCurrentExplosion(  ):boolean;
	shouldReceiveFeedback(  ):boolean;
	shouldRender( cameraX:double, cameraY:double, cameraZ:double ):boolean;
	shouldRender( distance:double ):boolean;
	shouldRenderName(  ):boolean;
	shouldSave(  ):boolean;
	shouldSpawnSprintingParticles(  ):boolean;
	shouldSwimInFluids(  ):boolean;
	shouldTrackOutput(  ):boolean;
	sleep( pos:net.minecraft.util.math.BlockPos ):void;
	slowMovement( state:net.minecraft.block.BlockState, multiplier:net.minecraft.util.math.Vec3d ):void;
	spawnSweepAttackParticles(  ):void;
	squaredDistanceTo( entity:net.minecraft.entity.Entity ):double;
	squaredDistanceTo( vector:net.minecraft.util.math.Vec3d ):double;
	squaredDistanceTo( x:double, y:double, z:double ):double;
	startFallFlying(  ):void;
	startRiding( entity:net.minecraft.entity.Entity ):boolean;
	startRiding( entity:net.minecraft.entity.Entity, force:boolean ):boolean;
	static adjustMovementForCollisions( entity:net.minecraft.entity.Entity, movement:net.minecraft.util.math.Vec3d, entityBoundingBox:net.minecraft.util.math.Box, world:net.minecraft.world.World, collisions:java.util.List<any /*net.minecraft.util.shape.VoxelShape*/> ):net.minecraft.util.math.Vec3d;
	static containsOnlyAmbientEffects( effects:java.util.Collection<net.minecraft.entity.effect.StatusEffectInstance> ):boolean;
	static createLivingAttributes(  ):any /*net.minecraft.entity.attribute.DefaultAttributeContainer$Builder*/;
	static createPlayerAttributes(  ):any /*net.minecraft.entity.attribute.DefaultAttributeContainer$Builder*/;
	static getRenderDistanceMultiplier(  ):double;
	static getSlotForHand( hand:net.minecraft.util.Hand ):net.minecraft.entity.EquipmentSlot;
	static positionInPortal( pos:net.minecraft.util.math.Vec3d ):net.minecraft.util.math.Vec3d;
	static setRenderDistanceMultiplier( value:double ):void;
	stopFallFlying(  ):void;
	stopRiding(  ):void;
	stopUsingItem(  ):void;
	streamPassengersAndSelf(  ):java.util.stream.Stream<net.minecraft.entity.Entity>;
	streamSelfAndPassengers(  ):java.util.stream.Stream<net.minecraft.entity.Entity>;
	swingHand( hand:net.minecraft.util.Hand ):void;
	swingHand( hand:net.minecraft.util.Hand, fromServerPlayer:boolean ):void;
	takeKnockback( strength:double, x:double, z:double ):void;
	teleport( world:any /*net.minecraft.server.world.ServerWorld*/, destX:double, destY:double, destZ:double, flags:java.util.Set<any /*net.minecraft.network.packet.s2c.play.PositionFlag*/>, yaw:float, pitch:float ):boolean;
	teleport( x:double, y:double, z:double, particleEffects:boolean ):boolean;
	teleportTo( teleportTarget:any /*net.minecraft.world.TeleportTarget*/ ):net.minecraft.entity.Entity;
	tick(  ):void;
	tickMovement(  ):void;
	tickRiding(  ):void;
	tiltScreen( deltaX:double, deltaZ:double ):void;
	toString(  ):string;
	travel( movementInput:net.minecraft.util.math.Vec3d ):void;
	triggerItemPickedUpByEntityCriteria( item:net.minecraft.entity.ItemEntity ):void;
	tryAttack( target:net.minecraft.entity.Entity ):boolean;
	tryClearCurrentExplosion(  ):void;
	tryEatFood( world:net.minecraft.world.World, stack:net.minecraft.item.ItemStack ):net.minecraft.item.ItemStack;
	trySleep( pos:net.minecraft.util.math.BlockPos ):any /*com.mojang.datafixers.util.Either*/;
	tryUsePortal( portal:any /*net.minecraft.block.Portal*/, pos:net.minecraft.util.math.BlockPos ):void;
	unlockRecipes( recipes:java.util.Collection<any /*net.minecraft.recipe.RecipeEntry*/> ):int;
	unlockRecipes( recipes:java.util.List<net.minecraft.util.Identifier> ):void;
	updateEventHandler( callback:java.util.function.BiConsumer<any /*net.minecraft.world.event.listener.EntityGameEventHandler*/, any /*net.minecraft.server.world.ServerWorld*/> ):void;
	updateKilledAdvancementCriterion( entityKilled:net.minecraft.entity.Entity, score:int, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	updateLimbs( flutter:boolean ):void;
	updateMovementInFluid( tag:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid>, speed:double ):boolean;
	updatePassengerForDismount( passenger:net.minecraft.entity.LivingEntity ):net.minecraft.util.math.Vec3d;
	updatePassengerPosition( passenger:net.minecraft.entity.Entity ):void;
	updatePosition( x:double, y:double, z:double ):void;
	updatePositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float ):void;
	updateSwimming(  ):void;
	updateTrackedHeadRotation( yaw:float, interpolationSteps:int ):void;
	updateTrackedPosition( x:double, y:double, z:double ):void;
	updateTrackedPositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float, interpolationSteps:int ):void;
	updateVelocity( speed:float, movementInput:net.minecraft.util.math.Vec3d ):void;
	useBook( book:net.minecraft.item.ItemStack, hand:net.minecraft.util.Hand ):void;
	useRiptide( riptideTicks:int, riptideAttackDamage:float, stack:net.minecraft.item.ItemStack ):void;
	wakeUp(  ):void;
	wakeUp( skipSleepTimer:boolean, updateSleepingPlayers:boolean ):void;
	writeCustomDataToNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	writeNbt( nbt:net.minecraft.nbt.NbtCompound ):net.minecraft.nbt.NbtCompound;

} // end PlayerEntity

} // end namespace net.minecraft.entity.player

declare namespace net.minecraft.entity {

class ItemEntity/* extends Entity implements Ownable*/ {

	addCommandTag( tag:string ):boolean;
	addPortalChunkTicketAt( pos:net.minecraft.util.math.BlockPos ):void;
	addVelocity( deltaX:double, deltaY:double, deltaZ:double ):void;
	addVelocity( velocity:net.minecraft.util.math.Vec3d ):void;
	addVelocityInternal( velocity:net.minecraft.util.math.Vec3d ):void;
	animateDamage( yaw:float ):void;
	applyMirror( mirror:any /*net.minecraft.util.BlockMirror*/ ):float;
	applyRotation( rotation:any /*net.minecraft.util.BlockRotation*/ ):float;
	attemptTickInVoid(  ):void;
	baseTick(  ):void;
	bypassesLandingEffects(  ):boolean;
	bypassesSteppingEffects(  ):boolean;
	calculateDimensions(  ):void;
	canAvoidTraps(  ):boolean;
	canBeHitByProjectile(  ):boolean;
	canBeSpectated( spectator:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):boolean;
	canExplosionDestroyBlock( explosion:any /*net.minecraft.world.explosion.Explosion*/, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, explosionPower:float ):boolean;
	canFreeze(  ):boolean;
	canHit(  ):boolean;
	canModifyAt( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos ):boolean;
	canMoveVoluntarily(  ):boolean;
	canSprintAsVehicle(  ):boolean;
	canTeleportBetween( from:net.minecraft.world.World, to:net.minecraft.world.World ):boolean;
	canUsePortals( allowVehicles:boolean ):boolean;
	cannotBeSilenced(  ):boolean;
	cannotPickup(  ):boolean;
	changeLookDirection( cursorDeltaX:double, cursorDeltaY:double ):void;
	checkDespawn(  ):void;
	collidesWith( other:Entity ):boolean;
	collidesWithStateAtPos( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState ):boolean;
	copy(  ):ItemEntity;
	copyFrom( original:Entity ):void;
	copyPositionAndRotation( entity:Entity ):void;
	createSpawnPacket( entityTrackerEntry:any /*net.minecraft.server.network.EntityTrackerEntry*/ ):net.minecraft.network.packet.Packet<any /*net.minecraft.network.listener.ClientPlayPacketListener*/>;
	damage( source:any /*net.minecraft.entity.damage.DamageSource*/, amount:float ):boolean;
	detach(  ):void;
	discard(  ):void;
	dismountVehicle(  ):void;
	distanceTo( entity:Entity ):float;
	doesNotCollide( offsetX:double, offsetY:double, offsetZ:double ):boolean;
	doesRenderOnFire(  ):boolean;
	dropItem( item:any /*net.minecraft.item.ItemConvertible*/ ):ItemEntity;
	dropItem( item:any /*net.minecraft.item.ItemConvertible*/, yOffset:int ):ItemEntity;
	dropStack( stack:net.minecraft.item.ItemStack ):ItemEntity;
	dropStack( stack:net.minecraft.item.ItemStack, yOffset:float ):ItemEntity;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/> ):void;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, entity:Entity ):void;
	entityDataRequiresOperator(  ):boolean;
	equals( o:any /*java.lang.Object*/ ):boolean;
	extinguish(  ):void;
	extinguishWithSound(  ):void;
	getAir(  ):int;
	getAttachments(  ):any /*net.minecraft.entity.EntityAttachments*/;
	getBlockPos(  ):net.minecraft.util.math.BlockPos;
	getBlockStateAtPos(  ):net.minecraft.block.BlockState;
	getBlockX(  ):int;
	getBlockY(  ):int;
	getBlockZ(  ):int;
	getBodyY( heightScale:double ):double;
	getBodyYaw(  ):float;
	getBoundingBox(  ):net.minecraft.util.math.Box;
	getBrightnessAtEyes(  ):float;
	getCameraPosVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getChunkPos(  ):net.minecraft.util.math.ChunkPos;
	getClientCameraPosVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getCommandSource(  ):any /*net.minecraft.server.command.ServerCommandSource*/;
	getCommandTags(  ):java.util.Set<string>;
	getControllingPassenger(  ):LivingEntity;
	getControllingVehicle(  ):Entity;
	getCustomName(  ):net.minecraft.text.Text;
	getDamageSources(  ):any /*net.minecraft.entity.damage.DamageSources*/;
	getDataTracker(  ):any /*net.minecraft.entity.data.DataTracker*/;
	getDefaultPortalCooldown(  ):int;
	getDimensions( pose:any /*net.minecraft.entity.EntityPose*/ ):any /*net.minecraft.entity.EntityDimensions*/;
	getDisplayName(  ):net.minecraft.text.Text;
	getEffectiveExplosionResistance( explosion:any /*net.minecraft.world.explosion.Explosion*/, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, blockState:net.minecraft.block.BlockState, fluidState:net.minecraft.fluid.FluidState, max:float ):float;
	getEntityWorld(  ):net.minecraft.world.World;
	getEyeHeight( pose:any /*net.minecraft.entity.EntityPose*/ ):float;
	getEyePos(  ):net.minecraft.util.math.Vec3d;
	getEyeY(  ):double;
	getFacing(  ):net.minecraft.util.math.Direction;
	getFinalGravity(  ):double;
	getFireTicks(  ):int;
	getFirstPassenger(  ):Entity;
	getFluidHeight( fluid:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid> ):double;
	getFreezingScale(  ):float;
	getFrozenTicks(  ):int;
	getHandPosOffset( item:net.minecraft.item.Item ):net.minecraft.util.math.Vec3d;
	getHeadYaw(  ):float;
	getHeight(  ):float;
	getHorizontalFacing(  ):net.minecraft.util.math.Direction;
	getId(  ):int;
	getItemAge(  ):int;
	getLandingPos(  ):net.minecraft.util.math.BlockPos;
	getLeashOffset( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getLeashPos( delta:float ):net.minecraft.util.math.Vec3d;
	getLerpTargetPitch(  ):float;
	getLerpTargetX(  ):double;
	getLerpTargetY(  ):double;
	getLerpTargetYaw(  ):float;
	getLerpTargetZ(  ):double;
	getLerpedPos( delta:float ):net.minecraft.util.math.Vec3d;
	getMaxAir(  ):int;
	getMinFreezeDamageTicks(  ):int;
	getMovement(  ):net.minecraft.util.math.Vec3d;
	getMovementDirection(  ):net.minecraft.util.math.Direction;
	getName(  ):net.minecraft.text.Text;
	getNameForScoreboard(  ):string;
	getOppositeRotationVector( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getOwner(  ):Entity;
	getParticleX( widthScale:double ):double;
	getParticleZ( widthScale:double ):double;
	getPassengerList(  ):java.util.List<Entity>;
	getPassengerRidingPos( passenger:Entity ):net.minecraft.util.math.Vec3d;
	getPassengersDeep(  ):java.lang.Iterable<Entity>;
	getPickBlockStack(  ):net.minecraft.item.ItemStack;
	getPistonBehavior(  ):any /*net.minecraft.block.piston.PistonBehavior*/;
	getPitch(  ):float;
	getPitch( tickDelta:float ):float;
	getPlayerPassengers(  ):int;
	getPortalCooldown(  ):int;
	getPos(  ):net.minecraft.util.math.Vec3d;
	getPose(  ):any /*net.minecraft.entity.EntityPose*/;
	getProjectileDeflection( projectile:any /*net.minecraft.entity.projectile.ProjectileEntity*/ ):any /*net.minecraft.entity.ProjectileDeflection*/;
	getRandom(  ):any /*net.minecraft.util.math.random.Random*/;
	getRandomBodyY(  ):double;
	getRegistryManager(  ):any /*net.minecraft.registry.DynamicRegistryManager*/;
	getRemovalReason(  ):any /*net.minecraft.entity.Entity$RemovalReason*/;
	getRootVehicle(  ):Entity;
	getRotation( tickDelta:float ):float;
	getRotationClient(  ):any /*net.minecraft.util.math.Vec2f*/;
	getRotationVec( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getRotationVecClient(  ):net.minecraft.util.math.Vec3d;
	getRotationVector(  ):net.minecraft.util.math.Vec3d;
	getRotationVector( pitch:float, yaw:float ):net.minecraft.util.math.Vec3d;
	getSafeFallDistance(  ):int;
	getScoreboardTeam(  ):any /*net.minecraft.scoreboard.Team*/;
	getServer(  ):any /*net.minecraft.server.MinecraftServer*/;
	getSoundCategory(  ):net.minecraft.sound.SoundCategory;
	getStack(  ):net.minecraft.item.ItemStack;
	getStackReference( mappedIndex:int ):any /*net.minecraft.inventory.StackReference*/;
	getStandingEyeHeight(  ):float;
	getStepHeight(  ):float;
	getSteppingBlockState(  ):net.minecraft.block.BlockState;
	getSteppingPos(  ):net.minecraft.util.math.BlockPos;
	getStyledDisplayName(  ):net.minecraft.text.Text;
	getSwimHeight(  ):double;
	getSyncedPos(  ):net.minecraft.util.math.Vec3d;
	getTargetingMargin(  ):float;
	getTeamColorValue(  ):int;
	getTrackedPosition(  ):any /*net.minecraft.entity.TrackedPosition*/;
	getType(  ):EntityType<any /*java.lang.Object*/>;
	getUuid(  ):java.util.UUID;
	getUuidAsString(  ):string;
	getVehicle(  ):Entity;
	getVehicleAttachmentPos( vehicle:Entity ):net.minecraft.util.math.Vec3d;
	getVelocity(  ):net.minecraft.util.math.Vec3d;
	getVelocityAffectingPos(  ):net.minecraft.util.math.BlockPos;
	getVisibilityBoundingBox(  ):net.minecraft.util.math.Box;
	getWeaponStack(  ):net.minecraft.item.ItemStack;
	getWidth(  ):float;
	getWorld(  ):net.minecraft.world.World;
	getWorldSpawnPos( world:any /*net.minecraft.server.world.ServerWorld*/, basePos:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.BlockPos;
	getX(  ):double;
	getY(  ):double;
	getYaw(  ):float;
	getYaw( tickDelta:float ):float;
	getZ(  ):double;
	handleAttack( attacker:Entity ):boolean;
	handleFallDamage( fallDistance:float, damageMultiplier:float, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	handleStatus( status:any /*byte*/ ):void;
	hasControllingPassenger(  ):boolean;
	hasCustomName(  ):boolean;
	hasNoGravity(  ):boolean;
	hasPassenger( passenger:Entity ):boolean;
	hasPassenger( predicate:java.util.function.Predicate<Entity> ):boolean;
	hasPassengerDeep( passenger:Entity ):boolean;
	hasPassengers(  ):boolean;
	hasPermissionLevel( permissionLevel:int ):boolean;
	hasPlayerRider(  ):boolean;
	hasPortalCooldown(  ):boolean;
	hasVehicle(  ):boolean;
	interact( player:net.minecraft.entity.player.PlayerEntity, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	interactAt( player:net.minecraft.entity.player.PlayerEntity, hitPos:net.minecraft.util.math.Vec3d, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	isAlive(  ):boolean;
	isAttackable(  ):boolean;
	isCollidable(  ):boolean;
	isConnectedThroughVehicle( entity:Entity ):boolean;
	isCrawling(  ):boolean;
	isCustomNameVisible(  ):boolean;
	isDescending(  ):boolean;
	isFireImmune(  ):boolean;
	isFrozen(  ):boolean;
	isGlowing(  ):boolean;
	isGlowingLocal(  ):boolean;
	isImmuneToExplosion( explosion:any /*net.minecraft.world.explosion.Explosion*/ ):boolean;
	isInFluid(  ):boolean;
	isInLava(  ):boolean;
	isInPose( pose:any /*net.minecraft.entity.EntityPose*/ ):boolean;
	isInRange( entity:Entity, horizontalRadius:double, verticalRadius:double ):boolean;
	isInRange( entity:Entity, radius:double ):boolean;
	isInSneakingPose(  ):boolean;
	isInSwimmingPose(  ):boolean;
	isInsideWall(  ):boolean;
	isInsideWaterOrBubbleColumn(  ):boolean;
	isInvisible(  ):boolean;
	isInvisibleTo( player:net.minecraft.entity.player.PlayerEntity ):boolean;
	isInvulnerable(  ):boolean;
	isInvulnerableTo( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	isLiving(  ):boolean;
	isLogicalSideForUpdatingMovement(  ):boolean;
	isOnFire(  ):boolean;
	isOnGround(  ):boolean;
	isOnRail(  ):boolean;
	isPartOf( entity:Entity ):boolean;
	isPlayer(  ):boolean;
	isPushable(  ):boolean;
	isPushedByFluids(  ):boolean;
	isRegionUnloaded(  ):boolean;
	isRemoved(  ):boolean;
	isSilent(  ):boolean;
	isSneaking(  ):boolean;
	isSneaky(  ):boolean;
	isSpectator(  ):boolean;
	isSprinting(  ):boolean;
	isSubmergedIn( fluidTag:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid> ):boolean;
	isSubmergedInWater(  ):boolean;
	isSupportedBy( pos:net.minecraft.util.math.BlockPos ):boolean;
	isSwimming(  ):boolean;
	isTeamPlayer( team:any /*net.minecraft.scoreboard.AbstractTeam*/ ):boolean;
	isTeammate( other:Entity ):boolean;
	isTouchingWater(  ):boolean;
	isTouchingWaterOrRain(  ):boolean;
	isWet(  ):boolean;
	kill(  ):void;
	lerpYaw( delta:float ):float;
	limitFallDistance(  ):void;
	lookAt( anchorPoint:any /*net.minecraft.command.argument.EntityAnchorArgumentType$EntityAnchor*/, target:net.minecraft.util.math.Vec3d ):void;
	move( movementType:any /*net.minecraft.entity.MovementType*/, movement:net.minecraft.util.math.Vec3d ):void;
	occludeVibrationSignals(  ):boolean;
	offsetX( widthScale:double ):double;
	offsetZ( widthScale:double ):double;
	onBubbleColumnCollision( drag:boolean ):void;
	onBubbleColumnSurfaceCollision( drag:boolean ):void;
	onDamaged( damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	onDataTrackerUpdate( entries:java.util.List<any /*net.minecraft.entity.data.DataTracker$SerializedEntry*/> ):void;
	onExplodedBy( entity:Entity ):void;
	onKilledOther( world:any /*net.minecraft.server.world.ServerWorld*/, other:LivingEntity ):boolean;
	onLanding(  ):void;
	onPassengerLookAround( passenger:Entity ):void;
	onPlayerCollision( player:net.minecraft.entity.player.PlayerEntity ):void;
	onRemoved(  ):void;
	onSpawnPacket( packet:any /*net.minecraft.network.packet.s2c.play.EntitySpawnS2CPacket*/ ):void;
	onStartedTrackingBy( player:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):void;
	onStoppedTrackingBy( player:any /*net.minecraft.server.network.ServerPlayerEntity*/ ):void;
	onStruckByLightning( world:any /*net.minecraft.server.world.ServerWorld*/, lightning:any /*net.minecraft.entity.LightningEntity*/ ):void;
	onTrackedDataSet( data:any /*net.minecraft.entity.data.TrackedData*/ ):void;
	playSound( sound:net.minecraft.sound.SoundEvent, volume:float, pitch:float ):void;
	playSoundIfNotSilent( event:net.minecraft.sound.SoundEvent ):void;
	populateCrashReport( section:any /*net.minecraft.util.crash.CrashReportSection*/ ):void;
	positionInPortal( portalAxis:net.minecraft.util.math.Direction$Axis, portalRect:any /*net.minecraft.world.BlockLocating$Rectangle*/ ):net.minecraft.util.math.Vec3d;
	pushAwayFrom( entity:Entity ):void;
	raycast( maxDistance:double, tickDelta:float, includeFluids:boolean ):net.minecraft.util.hit.HitResult;
	readCustomDataFromNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	readNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	recalculateDimensions( previous:any /*net.minecraft.entity.EntityDimensions*/ ):boolean;
	refreshPositionAfterTeleport( pos:net.minecraft.util.math.Vec3d ):void;
	refreshPositionAfterTeleport( x:double, y:double, z:double ):void;
	refreshPositionAndAngles( pos:net.minecraft.util.math.BlockPos, yaw:float, pitch:float ):void;
	refreshPositionAndAngles( pos:net.minecraft.util.math.Vec3d, yaw:float, pitch:float ):void;
	refreshPositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float ):void;
	remove( reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	removeAllPassengers(  ):void;
	removeCommandTag( tag:string ):boolean;
	requestTeleport( destX:double, destY:double, destZ:double ):void;
	requestTeleportAndDismount( destX:double, destY:double, destZ:double ):void;
	requestTeleportOffset( offsetX:double, offsetY:double, offsetZ:double ):void;
	resetPickupDelay(  ):void;
	resetPortalCooldown(  ):void;
	resetPosition(  ):void;
	saveNbt( nbt:net.minecraft.nbt.NbtCompound ):boolean;
	saveSelfNbt( nbt:net.minecraft.nbt.NbtCompound ):boolean;
	sendMessage( message:net.minecraft.text.Text ):void;
	setAir( air:int ):void;
	setAngles( yaw:float, pitch:float ):void;
	setBodyYaw( bodyYaw:float ):void;
	setBoundingBox( boundingBox:net.minecraft.util.math.Box ):void;
	setChangeListener( changeListener:any /*net.minecraft.world.entity.EntityChangeListener*/ ):void;
	setCovetedItem(  ):void;
	setCustomName( name:net.minecraft.text.Text ):void;
	setCustomNameVisible( visible:boolean ):void;
	setDespawnImmediately(  ):void;
	setFireTicks( fireTicks:int ):void;
	setFrozenTicks( frozenTicks:int ):void;
	setGlowing( glowing:boolean ):void;
	setHeadYaw( headYaw:float ):void;
	setId( id:int ):void;
	setInPowderSnow( inPowderSnow:boolean ):void;
	setInvisible( invisible:boolean ):void;
	setInvulnerable( invulnerable:boolean ):void;
	setNeverDespawn(  ):void;
	setNoGravity( noGravity:boolean ):void;
	setOnFire( onFire:boolean ):void;
	setOnFireFor( seconds:float ):void;
	setOnFireForTicks( ticks:int ):void;
	setOnFireFromLava(  ):void;
	setOnGround( onGround:boolean ):void;
	setOnGround( onGround:boolean, movement:net.minecraft.util.math.Vec3d ):void;
	setOwner( owner:java.util.UUID ):void;
	setPickupDelay( pickupDelay:int ):void;
	setPickupDelayInfinite(  ):void;
	setPitch( pitch:float ):void;
	setPortalCooldown( portalCooldown:int ):void;
	setPos( x:double, y:double, z:double ):void;
	setPose( pose:any /*net.minecraft.entity.EntityPose*/ ):void;
	setPosition( pos:net.minecraft.util.math.Vec3d ):void;
	setPosition( x:double, y:double, z:double ):void;
	setRemoved( reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	setSilent( silent:boolean ):void;
	setSneaking( sneaking:boolean ):void;
	setSprinting( sprinting:boolean ):void;
	setStack( stack:net.minecraft.item.ItemStack ):void;
	setSwimming( swimming:boolean ):void;
	setThrower( thrower:Entity ):void;
	setToDefaultPickupDelay(  ):void;
	setUuid( uuid:java.util.UUID ):void;
	setVelocity( velocity:net.minecraft.util.math.Vec3d ):void;
	setVelocity( x:double, y:double, z:double ):void;
	setVelocityClient( x:double, y:double, z:double ):void;
	setYaw( yaw:float ):void;
	shouldBroadcastConsoleToOps(  ):boolean;
	shouldControlVehicles(  ):boolean;
	shouldDismountUnderwater(  ):boolean;
	shouldEscapePowderSnow(  ):boolean;
	shouldReceiveFeedback(  ):boolean;
	shouldRender( cameraX:double, cameraY:double, cameraZ:double ):boolean;
	shouldRender( distance:double ):boolean;
	shouldRenderName(  ):boolean;
	shouldSave(  ):boolean;
	shouldSpawnSprintingParticles(  ):boolean;
	shouldTrackOutput(  ):boolean;
	slowMovement( state:net.minecraft.block.BlockState, multiplier:net.minecraft.util.math.Vec3d ):void;
	squaredDistanceTo( entity:Entity ):double;
	squaredDistanceTo( vector:net.minecraft.util.math.Vec3d ):double;
	squaredDistanceTo( x:double, y:double, z:double ):double;
	startRiding( entity:Entity ):boolean;
	startRiding( entity:Entity, force:boolean ):boolean;
	static adjustMovementForCollisions( entity:Entity, movement:net.minecraft.util.math.Vec3d, entityBoundingBox:net.minecraft.util.math.Box, world:net.minecraft.world.World, collisions:java.util.List<any /*net.minecraft.util.shape.VoxelShape*/> ):net.minecraft.util.math.Vec3d;
	static canMerge( stack1:net.minecraft.item.ItemStack, stack2:net.minecraft.item.ItemStack ):boolean;
	static getRenderDistanceMultiplier(  ):double;
	static merge( stack1:net.minecraft.item.ItemStack, stack2:net.minecraft.item.ItemStack, maxCount:int ):net.minecraft.item.ItemStack;
	static setRenderDistanceMultiplier( value:double ):void;
	stopRiding(  ):void;
	streamPassengersAndSelf(  ):java.util.stream.Stream<Entity>;
	streamSelfAndPassengers(  ):java.util.stream.Stream<Entity>;
	teleport( world:any /*net.minecraft.server.world.ServerWorld*/, destX:double, destY:double, destZ:double, flags:java.util.Set<any /*net.minecraft.network.packet.s2c.play.PositionFlag*/>, yaw:float, pitch:float ):boolean;
	teleportTo( teleportTarget:any /*net.minecraft.world.TeleportTarget*/ ):Entity;
	tick(  ):void;
	tickRiding(  ):void;
	toString(  ):string;
	tryUsePortal( portal:any /*net.minecraft.block.Portal*/, pos:net.minecraft.util.math.BlockPos ):void;
	updateEventHandler( callback:java.util.function.BiConsumer<any /*net.minecraft.world.event.listener.EntityGameEventHandler*/, any /*net.minecraft.server.world.ServerWorld*/> ):void;
	updateKilledAdvancementCriterion( entityKilled:Entity, score:int, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	updateMovementInFluid( tag:net.minecraft.registry.tag.TagKey<net.minecraft.fluid.Fluid>, speed:double ):boolean;
	updatePassengerForDismount( passenger:LivingEntity ):net.minecraft.util.math.Vec3d;
	updatePassengerPosition( passenger:Entity ):void;
	updatePosition( x:double, y:double, z:double ):void;
	updatePositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float ):void;
	updateSwimming(  ):void;
	updateTrackedHeadRotation( yaw:float, interpolationSteps:int ):void;
	updateTrackedPosition( x:double, y:double, z:double ):void;
	updateTrackedPositionAndAngles( x:double, y:double, z:double, yaw:float, pitch:float, interpolationSteps:int ):void;
	updateVelocity( speed:float, movementInput:net.minecraft.util.math.Vec3d ):void;
	writeCustomDataToNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	writeNbt( nbt:net.minecraft.nbt.NbtCompound ):net.minecraft.nbt.NbtCompound;

} // end ItemEntity

} // end namespace net.minecraft.entity

declare namespace net.minecraft.entity {

class EntityType<T>/* extends java.lang.Object implements net.minecraft.resource.featuretoggle.ToggleableFeature, net.minecraft.util.TypeFilter<any, T>*/ {

	alwaysUpdateVelocity(  ):boolean;
	create( world:any /*net.minecraft.server.world.ServerWorld*/, afterConsumer:java.util.function.Consumer<T>, pos:net.minecraft.util.math.BlockPos, reason:any /*net.minecraft.entity.SpawnReason*/, alignPosition:boolean, invertY:boolean ):T;
	create( world:net.minecraft.world.World ):T;
	downcast( entity:Entity ):T;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getBaseClass(  ):java.lang.Class<Entity>;
	getDimensions(  ):any /*net.minecraft.entity.EntityDimensions*/;
	getHeight(  ):float;
	getLootTableId(  ):net.minecraft.registry.RegistryKey<any /*net.minecraft.loot.LootTable*/>;
	getMaxTrackDistance(  ):int;
	getName(  ):net.minecraft.text.Text;
	getRegistryEntry(  ):any /*net.minecraft.registry.entry.RegistryEntry$Reference*/;
	getRequiredFeatures(  ):any /*net.minecraft.resource.featuretoggle.FeatureSet*/;
	getSpawnBox( x:double, y:double, z:double ):net.minecraft.util.math.Box;
	getSpawnGroup(  ):any /*net.minecraft.entity.SpawnGroup*/;
	getTrackTickInterval(  ):int;
	getTranslationKey(  ):string;
	getUntranslatedName(  ):string;
	getWidth(  ):float;
	isEnabled( enabledFeatures:any /*net.minecraft.resource.featuretoggle.FeatureSet*/ ):boolean;
	isFireImmune(  ):boolean;
	isIn( entityTypeEntryList:any /*net.minecraft.registry.entry.RegistryEntryList*/ ):boolean;
	isIn( tag:net.minecraft.registry.tag.TagKey<EntityType<any /*java.lang.Object*/>> ):boolean;
	isInvalidSpawn( state:net.minecraft.block.BlockState ):boolean;
	isSaveable(  ):boolean;
	isSpawnableFarFromPlayer(  ):boolean;
	isSummonable(  ):boolean;
	spawn( world:any /*net.minecraft.server.world.ServerWorld*/, afterConsumer:java.util.function.Consumer<T>, pos:net.minecraft.util.math.BlockPos, reason:any /*net.minecraft.entity.SpawnReason*/, alignPosition:boolean, invertY:boolean ):T;
	spawn( world:any /*net.minecraft.server.world.ServerWorld*/, pos:net.minecraft.util.math.BlockPos, reason:any /*net.minecraft.entity.SpawnReason*/ ):T;
	spawnFromItemStack( world:any /*net.minecraft.server.world.ServerWorld*/, stack:net.minecraft.item.ItemStack, player:net.minecraft.entity.player.PlayerEntity, pos:net.minecraft.util.math.BlockPos, spawnReason:any /*net.minecraft.entity.SpawnReason*/, alignPosition:boolean, invertY:boolean ):T;
	static copier<T>( chained:java.util.function.Consumer<T>, world:any /*net.minecraft.server.world.ServerWorld*/, stack:net.minecraft.item.ItemStack, player:net.minecraft.entity.player.PlayerEntity ):java.util.function.Consumer<T>;
	static copier<T>( world:any /*net.minecraft.server.world.ServerWorld*/, stack:net.minecraft.item.ItemStack, player:net.minecraft.entity.player.PlayerEntity ):java.util.function.Consumer<T>;
	static customNameCopier<T>( chained:java.util.function.Consumer<T>, stack:net.minecraft.item.ItemStack ):java.util.function.Consumer<T>;
	static fromNbt( nbt:net.minecraft.nbt.NbtCompound ):java.util.Optional<EntityType<any /*java.lang.Object*/>>;
	static get( id:string ):java.util.Optional<EntityType<any /*java.lang.Object*/>>;
	static getEntityFromNbt( nbt:net.minecraft.nbt.NbtCompound, world:net.minecraft.world.World ):java.util.Optional<Entity>;
	static getId( type:EntityType<any /*java.lang.Object*/> ):net.minecraft.util.Identifier;
	static loadEntityWithPassengers( nbt:net.minecraft.nbt.NbtCompound, world:net.minecraft.world.World, entityProcessor:java.util.function.Function<Entity, Entity> ):Entity;
	static loadFromEntityNbt( world:net.minecraft.world.World, player:net.minecraft.entity.player.PlayerEntity, entity:Entity, nbt:any /*net.minecraft.component.type.NbtComponent*/ ):void;
	static nbtCopier<T>( chained:java.util.function.Consumer<T>, world:any /*net.minecraft.server.world.ServerWorld*/, stack:net.minecraft.item.ItemStack, player:net.minecraft.entity.player.PlayerEntity ):java.util.function.Consumer<T>;
	static streamFromNbt( entityNbtList:java.util.List<net.minecraft.nbt.NbtElement>, world:net.minecraft.world.World ):java.util.stream.Stream<Entity>;
	toString(  ):string;

} // end EntityType

} // end namespace net.minecraft.entity

declare namespace net.minecraft.entity {

/* enum */class EquipmentSlot/* extends java.lang.Enum<any> implements net.minecraft.util.StringIdentifiable*/ {

	// MAINHAND:EquipmentSlot;
	// OFFHAND:EquipmentSlot;
	// FEET:EquipmentSlot;
	// LEGS:EquipmentSlot;
	// CHEST:EquipmentSlot;
	// HEAD:EquipmentSlot;
	// BODY:EquipmentSlot;

	asString(  ):string;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getArmorStandSlotId(  ):int;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	getEntitySlotId(  ):int;
	getName(  ):string;
	getOffsetEntitySlotId( offset:int ):int;
	getType(  ):any /*net.minecraft.entity.EquipmentSlot$Type*/;
	isArmorSlot(  ):boolean;
	name(  ):string;
	ordinal(  ):int;
	split( stack:net.minecraft.item.ItemStack ):net.minecraft.item.ItemStack;
	toString(  ):string;

} // end EquipmentSlot

} // end namespace net.minecraft.entity

declare namespace net.minecraft.block {

class Block/* extends AbstractBlock implements net.minecraft.item.ItemConvertible*/ {

	afterBreak( world:net.minecraft.world.World, player:net.minecraft.entity.player.PlayerEntity, pos:net.minecraft.util.math.BlockPos, state:BlockState, blockEntity:any /*net.minecraft.block.entity.BlockEntity*/, tool:net.minecraft.item.ItemStack ):void;
	appendTooltip( stack:net.minecraft.item.ItemStack, context:any /*net.minecraft.item.Item$TooltipContext*/, tooltip:java.util.List<net.minecraft.text.Text>, options:any /*net.minecraft.item.tooltip.TooltipType*/ ):void;
	asItem(  ):net.minecraft.item.Item;
	canMobSpawnInside( state:BlockState ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getBlastResistance(  ):float;
	getDefaultMapColor(  ):any /*net.minecraft.block.MapColor*/;
	getDefaultState(  ):BlockState;
	getHardness(  ):float;
	getJumpVelocityMultiplier(  ):float;
	getLootTableKey(  ):net.minecraft.registry.RegistryKey<any /*net.minecraft.loot.LootTable*/>;
	getName(  ):net.minecraft.text.MutableText;
	getPickStack( world:any /*net.minecraft.world.WorldView*/, pos:net.minecraft.util.math.BlockPos, state:BlockState ):net.minecraft.item.ItemStack;
	getPlacementState( ctx:any /*net.minecraft.item.ItemPlacementContext*/ ):BlockState;
	getRegistryEntry(  ):any /*net.minecraft.registry.entry.RegistryEntry$Reference*/;
	getRequiredFeatures(  ):any /*net.minecraft.resource.featuretoggle.FeatureSet*/;
	getSettings(  ):AbstractBlock$Settings;
	getSlipperiness(  ):float;
	getStateManager(  ):any /*net.minecraft.state.StateManager*/;
	getStateWithProperties( state:BlockState ):BlockState;
	getTranslationKey(  ):string;
	getVelocityMultiplier(  ):float;
	hasDynamicBounds(  ):boolean;
	isEnabled( enabledFeatures:any /*net.minecraft.resource.featuretoggle.FeatureSet*/ ):boolean;
	onBreak( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, state:BlockState, player:net.minecraft.entity.player.PlayerEntity ):BlockState;
	onBroken( world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos, state:BlockState ):void;
	onDestroyedByExplosion( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, explosion:any /*net.minecraft.world.explosion.Explosion*/ ):void;
	onEntityLand( world:net.minecraft.world.BlockView, entity:net.minecraft.entity.Entity ):void;
	onLandedUpon( world:net.minecraft.world.World, state:BlockState, pos:net.minecraft.util.math.BlockPos, entity:net.minecraft.entity.Entity, fallDistance:float ):void;
	onPlaced( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, state:BlockState, placer:net.minecraft.entity.LivingEntity, itemStack:net.minecraft.item.ItemStack ):void;
	onSteppedOn( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, state:BlockState, entity:net.minecraft.entity.Entity ):void;
	precipitationTick( state:BlockState, world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, precipitation:any /*net.minecraft.world.biome.Biome$Precipitation*/ ):void;
	randomDisplayTick( state:BlockState, world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, random:any /*net.minecraft.util.math.random.Random*/ ):void;
	shouldDropItemsOnExplosion( explosion:any /*net.minecraft.world.explosion.Explosion*/ ):boolean;
	static cannotConnect( state:BlockState ):boolean;
	static createCodec<B>( blockFromSettings:java.util.function.Function<AbstractBlock$Settings, B> ):any /*com.mojang.serialization.MapCodec*/;
	static createCuboidShape( minX:double, minY:double, minZ:double, maxX:double, maxY:double, maxZ:double ):any /*net.minecraft.util.shape.VoxelShape*/;
	static dropStack( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction, stack:net.minecraft.item.ItemStack ):void;
	static dropStack( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, stack:net.minecraft.item.ItemStack ):void;
	static dropStacks( state:BlockState, world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos, blockEntity:any /*net.minecraft.block.entity.BlockEntity*/ ):void;
	static dropStacks( state:BlockState, world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos ):void;
	static dropStacks( state:BlockState, world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, blockEntity:any /*net.minecraft.block.entity.BlockEntity*/, entity:net.minecraft.entity.Entity, tool:net.minecraft.item.ItemStack ):void;
	static getBlockFromItem( item:net.minecraft.item.Item ):Block;
	static getDroppedStacks( state:BlockState, world:any /*net.minecraft.server.world.ServerWorld*/, pos:net.minecraft.util.math.BlockPos, blockEntity:any /*net.minecraft.block.entity.BlockEntity*/ ):java.util.List<net.minecraft.item.ItemStack>;
	static getDroppedStacks( state:BlockState, world:any /*net.minecraft.server.world.ServerWorld*/, pos:net.minecraft.util.math.BlockPos, blockEntity:any /*net.minecraft.block.entity.BlockEntity*/, entity:net.minecraft.entity.Entity, stack:net.minecraft.item.ItemStack ):java.util.List<net.minecraft.item.ItemStack>;
	static getRawIdFromState( state:BlockState ):int;
	static getStateFromRawId( stateId:int ):BlockState;
	static hasTopRim( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):boolean;
	static isFaceFullSquare( shape:any /*net.minecraft.util.shape.VoxelShape*/, side:net.minecraft.util.math.Direction ):boolean;
	static isShapeFullCube( shape:any /*net.minecraft.util.shape.VoxelShape*/ ):boolean;
	static postProcessState( state:BlockState, world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos ):BlockState;
	static pushEntitiesUpBeforeBlockChange( from:BlockState, to:BlockState, world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos ):BlockState;
	static replace( state:BlockState, newState:BlockState, world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos, flags:int ):void;
	static replace( state:BlockState, newState:BlockState, world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos, flags:int, maxUpdateDepth:int ):void;
	static shouldDrawSide( state:BlockState, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, side:net.minecraft.util.math.Direction, otherPos:net.minecraft.util.math.BlockPos ):boolean;
	static sideCoversSmallSquare( world:any /*net.minecraft.world.WorldView*/, pos:net.minecraft.util.math.BlockPos, side:net.minecraft.util.math.Direction ):boolean;
	toString(  ):string;

} // end Block

} // end namespace net.minecraft.block

declare namespace net.minecraft.block {

class BlockState/* extends AbstractBlock$AbstractBlockState*/ {

	allowsSpawning( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, type:net.minecraft.entity.EntityType<any /*java.lang.Object*/> ):boolean;
	blocksMovement(  ):boolean;
	calcBlockBreakingDelta( player:net.minecraft.entity.player.PlayerEntity, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):float;
	canBucketPlace( fluid:net.minecraft.fluid.Fluid ):boolean;
	canPathfindThrough( type:any /*net.minecraft.entity.ai.pathing.NavigationType*/ ):boolean;
	canPlaceAt( world:any /*net.minecraft.world.WorldView*/, pos:net.minecraft.util.math.BlockPos ):boolean;
	canReplace( context:any /*net.minecraft.item.ItemPlacementContext*/ ):boolean;
	contains( property:any /*net.minecraft.state.property.Property*/ ):boolean;
	createScreenHandlerFactory( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.screen.NamedScreenHandlerFactory*/;
	createWithTable( states:any /*java.util.Map*/ ):void;
	cycle<S>( property:any /*net.minecraft.state.property.Property*/ ):S;
	emitsRedstonePower(  ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	exceedsCube(  ):boolean;
	get<T>( property:any /*net.minecraft.state.property.Property*/ ):T;
	getAmbientOcclusionLightLevel( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):float;
	getBlock(  ):Block;
	getBlockEntityTicker( world:net.minecraft.world.World, blockEntityType:any /*net.minecraft.block.entity.BlockEntityType*/ ):any /*net.minecraft.block.entity.BlockEntityTicker*/;
	getCameraCollisionShape( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, context:any /*net.minecraft.block.ShapeContext*/ ):any /*net.minecraft.util.shape.VoxelShape*/;
	getCollisionShape( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.util.shape.VoxelShape*/;
	getCollisionShape( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, context:any /*net.minecraft.block.ShapeContext*/ ):any /*net.minecraft.util.shape.VoxelShape*/;
	getComparatorOutput( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos ):int;
	getCullingFace( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction ):any /*net.minecraft.util.shape.VoxelShape*/;
	getCullingShape( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.util.shape.VoxelShape*/;
	getDroppedStacks( builder:any /*net.minecraft.loot.context.LootContextParameterSet$Builder*/ ):java.util.List<net.minecraft.item.ItemStack>;
	getEntries(  ):any /*java.util.Map*/;
	getFluidState(  ):net.minecraft.fluid.FluidState;
	getHardness( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):float;
	getInstrument(  ):any /*net.minecraft.block.enums.NoteBlockInstrument*/;
	getLuminance(  ):int;
	getMapColor( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.block.MapColor*/;
	getModelOffset( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.Vec3d;
	getOpacity( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):int;
	getOrEmpty<T>( property:any /*net.minecraft.state.property.Property*/ ):java.util.Optional<T>;
	getOutlineShape( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.util.shape.VoxelShape*/;
	getOutlineShape( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, context:any /*net.minecraft.block.ShapeContext*/ ):any /*net.minecraft.util.shape.VoxelShape*/;
	getPistonBehavior(  ):any /*net.minecraft.block.piston.PistonBehavior*/;
	getProperties(  ):java.util.Collection<any /*net.minecraft.state.property.Property*/>;
	getRaycastShape( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.util.shape.VoxelShape*/;
	getRegistryEntry(  ):net.minecraft.registry.entry.RegistryEntry<Block>;
	getRenderType(  ):any /*net.minecraft.block.BlockRenderType*/;
	getRenderingSeed( pos:net.minecraft.util.math.BlockPos ):long;
	getSidesShape( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.util.shape.VoxelShape*/;
	getSoundGroup(  ):any /*net.minecraft.sound.BlockSoundGroup*/;
	getStateForNeighborUpdate( direction:net.minecraft.util.math.Direction, neighborState:BlockState, world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos, neighborPos:net.minecraft.util.math.BlockPos ):BlockState;
	getStrongRedstonePower( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction ):int;
	getWeakRedstonePower( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction ):int;
	hasBlockBreakParticles(  ):boolean;
	hasBlockEntity(  ):boolean;
	hasComparatorOutput(  ):boolean;
	hasEmissiveLighting( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):boolean;
	hasModelOffset(  ):boolean;
	hasRandomTicks(  ):boolean;
	hasSidedTransparency(  ):boolean;
	hasSolidTopSurface( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, entity:net.minecraft.entity.Entity ):boolean;
	initShapeCache(  ):void;
	isAir(  ):boolean;
	isBurnable(  ):boolean;
	isFullCube( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):boolean;
	isIn( blocks:any /*net.minecraft.registry.entry.RegistryEntryList*/ ):boolean;
	isIn( tag:net.minecraft.registry.tag.TagKey<Block> ):boolean;
	isIn( tag:net.minecraft.registry.tag.TagKey<Block>, predicate:java.util.function.Predicate<any /*net.minecraft.block.AbstractBlock$AbstractBlockState*/> ):boolean;
	isLiquid(  ):boolean;
	isOf( block:Block ):boolean;
	isOf( blockEntry:net.minecraft.registry.entry.RegistryEntry<Block> ):boolean;
	isOpaque(  ):boolean;
	isOpaqueFullCube( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):boolean;
	isReplaceable(  ):boolean;
	isSideInvisible( state:BlockState, direction:net.minecraft.util.math.Direction ):boolean;
	isSideSolid( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction, shapeType:any /*net.minecraft.block.SideShapeType*/ ):boolean;
	isSideSolidFullSquare( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction ):boolean;
	isSolid(  ):boolean;
	isSolidBlock( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):boolean;
	isSolidSurface( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, entity:net.minecraft.entity.Entity, direction:net.minecraft.util.math.Direction ):boolean;
	isToolRequired(  ):boolean;
	isTransparent( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):boolean;
	matchesKey( key:net.minecraft.registry.RegistryKey<Block> ):boolean;
	mirror( mirror:any /*net.minecraft.util.BlockMirror*/ ):BlockState;
	neighborUpdate( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, sourceBlock:Block, sourcePos:net.minecraft.util.math.BlockPos, notify:boolean ):void;
	onBlockAdded( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, state:BlockState, notify:boolean ):void;
	onBlockBreakStart( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, player:net.minecraft.entity.player.PlayerEntity ):void;
	onEntityCollision( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, entity:net.minecraft.entity.Entity ):void;
	onExploded( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, explosion:any /*net.minecraft.world.explosion.Explosion*/, stackMerger:java.util.function.BiConsumer<net.minecraft.item.ItemStack, net.minecraft.util.math.BlockPos> ):void;
	onProjectileHit( world:net.minecraft.world.World, state:BlockState, hit:net.minecraft.util.hit.BlockHitResult, projectile:any /*net.minecraft.entity.projectile.ProjectileEntity*/ ):void;
	onStacksDropped( world:any /*net.minecraft.server.world.ServerWorld*/, pos:net.minecraft.util.math.BlockPos, tool:net.minecraft.item.ItemStack, dropExperience:boolean ):void;
	onStateReplaced( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, state:BlockState, moved:boolean ):void;
	onSyncedBlockEvent( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, type:int, data:int ):boolean;
	onUse( world:net.minecraft.world.World, player:net.minecraft.entity.player.PlayerEntity, hit:net.minecraft.util.hit.BlockHitResult ):net.minecraft.util.ActionResult;
	onUseWithItem( stack:net.minecraft.item.ItemStack, world:net.minecraft.world.World, player:net.minecraft.entity.player.PlayerEntity, hand:net.minecraft.util.Hand, hit:net.minecraft.util.hit.BlockHitResult ):net.minecraft.util.ItemActionResult;
	prepare( world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos, flags:int ):void;
	prepare( world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos, flags:int, maxUpdateDepth:int ):void;
	randomTick( world:any /*net.minecraft.server.world.ServerWorld*/, pos:net.minecraft.util.math.BlockPos, random:any /*net.minecraft.util.math.random.Random*/ ):void;
	rotate( rotation:any /*net.minecraft.util.BlockRotation*/ ):BlockState;
	scheduledTick( world:any /*net.minecraft.server.world.ServerWorld*/, pos:net.minecraft.util.math.BlockPos, random:any /*net.minecraft.util.math.random.Random*/ ):void;
	shouldBlockVision( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):boolean;
	shouldPostProcess( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):boolean;
	shouldSuffocate( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):boolean;
	streamTags(  ):java.util.stream.Stream<net.minecraft.registry.tag.TagKey<Block>>;
	toString(  ):string;
	updateNeighbors( world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos, flags:int ):void;
	updateNeighbors( world:any /*net.minecraft.world.WorldAccess*/, pos:net.minecraft.util.math.BlockPos, flags:int, maxUpdateDepth:int ):void;
	with<S,V>( property:any /*net.minecraft.state.property.Property*/, value:V ):S;
	withIfExists<S,V>( property:any /*net.minecraft.state.property.Property*/, value:V ):S;

} // end BlockState

} // end namespace net.minecraft.block

declare namespace net.minecraft.block {

class AbstractBlock$Settings/* extends java.lang.Object*/ {

	air(  ):AbstractBlock$Settings;
	allowsSpawning( predicate:any /*net.minecraft.block.AbstractBlock$TypedContextPredicate*/ ):AbstractBlock$Settings;
	blockVision( predicate:any /*net.minecraft.block.AbstractBlock$ContextPredicate*/ ):AbstractBlock$Settings;
	breakInstantly(  ):AbstractBlock$Settings;
	burnable(  ):AbstractBlock$Settings;
	dropsLike( source:Block ):AbstractBlock$Settings;
	dropsNothing(  ):AbstractBlock$Settings;
	dynamicBounds(  ):AbstractBlock$Settings;
	emissiveLighting( predicate:any /*net.minecraft.block.AbstractBlock$ContextPredicate*/ ):AbstractBlock$Settings;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	hardness( hardness:float ):AbstractBlock$Settings;
	instrument( instrument:any /*net.minecraft.block.enums.NoteBlockInstrument*/ ):AbstractBlock$Settings;
	jumpVelocityMultiplier( jumpVelocityMultiplier:float ):AbstractBlock$Settings;
	liquid(  ):AbstractBlock$Settings;
	luminance( luminance:any /*java.util.function.ToIntFunction*/ ):AbstractBlock$Settings;
	mapColor( color:any /*net.minecraft.block.MapColor*/ ):AbstractBlock$Settings;
	mapColor( color:any /*net.minecraft.util.DyeColor*/ ):AbstractBlock$Settings;
	mapColor( mapColorProvider:java.util.function.Function<BlockState, any /*net.minecraft.block.MapColor*/> ):AbstractBlock$Settings;
	noBlockBreakParticles(  ):AbstractBlock$Settings;
	noCollision(  ):AbstractBlock$Settings;
	nonOpaque(  ):AbstractBlock$Settings;
	notSolid(  ):AbstractBlock$Settings;
	offset( offsetType:any /*net.minecraft.block.AbstractBlock$OffsetType*/ ):AbstractBlock$Settings;
	pistonBehavior( pistonBehavior:any /*net.minecraft.block.piston.PistonBehavior*/ ):AbstractBlock$Settings;
	postProcess( predicate:any /*net.minecraft.block.AbstractBlock$ContextPredicate*/ ):AbstractBlock$Settings;
	replaceable(  ):AbstractBlock$Settings;
	requires( ...features:any /*net.minecraft.resource.featuretoggle.FeatureFlag*/[] ):AbstractBlock$Settings;
	requiresTool(  ):AbstractBlock$Settings;
	resistance( resistance:float ):AbstractBlock$Settings;
	slipperiness( slipperiness:float ):AbstractBlock$Settings;
	solid(  ):AbstractBlock$Settings;
	solidBlock( predicate:any /*net.minecraft.block.AbstractBlock$ContextPredicate*/ ):AbstractBlock$Settings;
	sounds( soundGroup:any /*net.minecraft.sound.BlockSoundGroup*/ ):AbstractBlock$Settings;
	static copy( block:any /*net.minecraft.block.AbstractBlock*/ ):AbstractBlock$Settings;
	static copyShallow( block:any /*net.minecraft.block.AbstractBlock*/ ):AbstractBlock$Settings;
	static create(  ):AbstractBlock$Settings;
	strength( hardness:float, resistance:float ):AbstractBlock$Settings;
	strength( strength:float ):AbstractBlock$Settings;
	suffocates( predicate:any /*net.minecraft.block.AbstractBlock$ContextPredicate*/ ):AbstractBlock$Settings;
	ticksRandomly(  ):AbstractBlock$Settings;
	toString(  ):string;
	velocityMultiplier( velocityMultiplier:float ):AbstractBlock$Settings;

} // end AbstractBlock$Settings

} // end namespace net.minecraft.block

declare namespace net.minecraft.item {

class Item/* extends java.lang.Object implements net.minecraft.resource.featuretoggle.ToggleableFeature, ItemConvertible*/ {

	appendTooltip( stack:ItemStack, context:any /*net.minecraft.item.Item$TooltipContext*/, tooltip:java.util.List<net.minecraft.text.Text>, type:any /*net.minecraft.item.tooltip.TooltipType*/ ):void;
	asItem(  ):Item;
	canBeNested(  ):boolean;
	canMine( state:net.minecraft.block.BlockState, world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, miner:net.minecraft.entity.player.PlayerEntity ):boolean;
	canRepair( stack:ItemStack, ingredient:ItemStack ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	finishUsing( stack:ItemStack, world:net.minecraft.world.World, user:net.minecraft.entity.LivingEntity ):ItemStack;
	getAttributeModifiers(  ):any /*net.minecraft.component.type.AttributeModifiersComponent*/;
	getBonusAttackDamage( target:net.minecraft.entity.Entity, baseAttackDamage:float, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):float;
	getBreakSound(  ):net.minecraft.sound.SoundEvent;
	getComponents(  ):any /*net.minecraft.component.ComponentMap*/;
	getDefaultStack(  ):ItemStack;
	getDrinkSound(  ):net.minecraft.sound.SoundEvent;
	getEatSound(  ):net.minecraft.sound.SoundEvent;
	getEnchantability(  ):int;
	getItemBarColor( stack:ItemStack ):int;
	getItemBarStep( stack:ItemStack ):int;
	getMaxCount(  ):int;
	getMaxUseTime( stack:ItemStack, user:net.minecraft.entity.LivingEntity ):int;
	getMiningSpeed( stack:ItemStack, state:net.minecraft.block.BlockState ):float;
	getName(  ):net.minecraft.text.Text;
	getName( stack:ItemStack ):net.minecraft.text.Text;
	getRecipeRemainder(  ):Item;
	getRegistryEntry(  ):any /*net.minecraft.registry.entry.RegistryEntry$Reference*/;
	getRequiredFeatures(  ):any /*net.minecraft.resource.featuretoggle.FeatureSet*/;
	getTooltipData( stack:ItemStack ):java.util.Optional<any /*net.minecraft.item.tooltip.TooltipData*/>;
	getTranslationKey(  ):string;
	getTranslationKey( stack:ItemStack ):string;
	getUseAction( stack:ItemStack ):any /*net.minecraft.util.UseAction*/;
	hasGlint( stack:ItemStack ):boolean;
	hasRecipeRemainder(  ):boolean;
	inventoryTick( stack:ItemStack, world:net.minecraft.world.World, entity:net.minecraft.entity.Entity, slot:int, selected:boolean ):void;
	isCorrectForDrops( stack:ItemStack, state:net.minecraft.block.BlockState ):boolean;
	isEnabled( enabledFeatures:any /*net.minecraft.resource.featuretoggle.FeatureSet*/ ):boolean;
	isEnchantable( stack:ItemStack ):boolean;
	isItemBarVisible( stack:ItemStack ):boolean;
	isNetworkSynced(  ):boolean;
	isUsedOnRelease( stack:ItemStack ):boolean;
	onClicked( stack:ItemStack, otherStack:ItemStack, slot:any /*net.minecraft.screen.slot.Slot*/, clickType:any /*net.minecraft.util.ClickType*/, player:net.minecraft.entity.player.PlayerEntity, cursorStackReference:any /*net.minecraft.inventory.StackReference*/ ):boolean;
	onCraft( stack:ItemStack, world:net.minecraft.world.World ):void;
	onCraftByPlayer( stack:ItemStack, world:net.minecraft.world.World, player:net.minecraft.entity.player.PlayerEntity ):void;
	onItemEntityDestroyed( entity:net.minecraft.entity.ItemEntity ):void;
	onStackClicked( stack:ItemStack, slot:any /*net.minecraft.screen.slot.Slot*/, clickType:any /*net.minecraft.util.ClickType*/, player:net.minecraft.entity.player.PlayerEntity ):boolean;
	onStoppedUsing( stack:ItemStack, world:net.minecraft.world.World, user:net.minecraft.entity.LivingEntity, remainingUseTicks:int ):void;
	postDamageEntity( stack:ItemStack, target:net.minecraft.entity.LivingEntity, attacker:net.minecraft.entity.LivingEntity ):void;
	postHit( stack:ItemStack, target:net.minecraft.entity.LivingEntity, attacker:net.minecraft.entity.LivingEntity ):boolean;
	postMine( stack:ItemStack, world:net.minecraft.world.World, state:net.minecraft.block.BlockState, pos:net.minecraft.util.math.BlockPos, miner:net.minecraft.entity.LivingEntity ):boolean;
	postProcessComponents( stack:ItemStack ):void;
	static byRawId( id:int ):Item;
	static fromBlock( block:net.minecraft.block.Block ):Item;
	static getRawId( item:Item ):int;
	toString(  ):string;
	usageTick( world:net.minecraft.world.World, user:net.minecraft.entity.LivingEntity, stack:ItemStack, remainingUseTicks:int ):void;
	use( world:net.minecraft.world.World, user:net.minecraft.entity.player.PlayerEntity, hand:net.minecraft.util.Hand ):net.minecraft.util.TypedActionResult<ItemStack>;
	useOnBlock( context:any /*net.minecraft.item.ItemUsageContext*/ ):net.minecraft.util.ActionResult;
	useOnEntity( stack:ItemStack, user:net.minecraft.entity.player.PlayerEntity, entity:net.minecraft.entity.LivingEntity, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;

} // end Item

} // end namespace net.minecraft.item

declare namespace net.minecraft.item {

class ItemStack/* extends java.lang.Object implements net.minecraft.component.ComponentHolder*/ {

	addEnchantment( enchantment:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.enchantment.Enchantment*/>, level:int ):void;
	apply<T,U>( type:any /*net.minecraft.component.ComponentType*/, defaultValue:T, change:U, applier:any /*java.util.function.BiFunction*/ ):T;
	apply<T>( type:any /*net.minecraft.component.ComponentType*/, defaultValue:T, applier:any /*java.util.function.UnaryOperator*/ ):T;
	applyAttributeModifier( slot:any /*net.minecraft.component.type.AttributeModifierSlot*/, attributeModifierConsumer:java.util.function.BiConsumer<net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/>, any /*net.minecraft.entity.attribute.EntityAttributeModifier*/> ):void;
	applyAttributeModifiers( slot:net.minecraft.entity.EquipmentSlot, attributeModifierConsumer:java.util.function.BiConsumer<net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/>, any /*net.minecraft.entity.attribute.EntityAttributeModifier*/> ):void;
	applyChanges( changes:any /*net.minecraft.component.ComponentChanges*/ ):void;
	applyComponentsFrom( components:any /*net.minecraft.component.ComponentMap*/ ):void;
	applyUnvalidatedChanges( changes:any /*net.minecraft.component.ComponentChanges*/ ):void;
	canBreak( pos:any /*net.minecraft.block.pattern.CachedBlockPosition*/ ):boolean;
	canPlaceOn( pos:any /*net.minecraft.block.pattern.CachedBlockPosition*/ ):boolean;
	capCount( maxCount:int ):void;
	contains( type:any /*net.minecraft.component.ComponentType*/ ):boolean;
	copy(  ):ItemStack;
	copyAndEmpty(  ):ItemStack;
	copyComponentsToNewStack( item:any /*net.minecraft.item.ItemConvertible*/, count:int ):ItemStack;
	copyWithCount( count:int ):ItemStack;
	damage( amount:int, entity:net.minecraft.entity.LivingEntity, slot:net.minecraft.entity.EquipmentSlot ):void;
	damage( amount:int, itemAfterBreaking:any /*net.minecraft.item.ItemConvertible*/, entity:net.minecraft.entity.LivingEntity, slot:net.minecraft.entity.EquipmentSlot ):ItemStack;
	damage( amount:int, world:any /*net.minecraft.server.world.ServerWorld*/, player:any /*net.minecraft.server.network.ServerPlayerEntity*/, breakCallback:java.util.function.Consumer<Item> ):void;
	decrement( amount:int ):void;
	decrementUnlessCreative( amount:int, entity:net.minecraft.entity.LivingEntity ):void;
	encode( registries:any /*net.minecraft.registry.RegistryWrapper$WrapperLookup*/ ):net.minecraft.nbt.NbtElement;
	encode( registries:any /*net.minecraft.registry.RegistryWrapper$WrapperLookup*/, prefix:net.minecraft.nbt.NbtElement ):net.minecraft.nbt.NbtElement;
	encodeAllowEmpty( registries:any /*net.minecraft.registry.RegistryWrapper$WrapperLookup*/ ):net.minecraft.nbt.NbtElement;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	finishUsing( world:net.minecraft.world.World, user:net.minecraft.entity.LivingEntity ):ItemStack;
	get<T>( type:any /*net.minecraft.component.ComponentType*/ ):T;
	getBobbingAnimationTime(  ):int;
	getBreakSound(  ):net.minecraft.sound.SoundEvent;
	getComponentChanges(  ):any /*net.minecraft.component.ComponentChanges*/;
	getComponents(  ):any /*net.minecraft.component.ComponentMap*/;
	getCount(  ):int;
	getDamage(  ):int;
	getDefaultComponents(  ):any /*net.minecraft.component.ComponentMap*/;
	getDrinkSound(  ):net.minecraft.sound.SoundEvent;
	getEatSound(  ):net.minecraft.sound.SoundEvent;
	getEnchantments(  ):any /*net.minecraft.component.type.ItemEnchantmentsComponent*/;
	getFrame(  ):any /*net.minecraft.entity.decoration.ItemFrameEntity*/;
	getHolder(  ):net.minecraft.entity.Entity;
	getItem(  ):Item;
	getItemBarColor(  ):int;
	getItemBarStep(  ):int;
	getMaxCount(  ):int;
	getMaxDamage(  ):int;
	getMaxUseTime( user:net.minecraft.entity.LivingEntity ):int;
	getMiningSpeedMultiplier( state:net.minecraft.block.BlockState ):float;
	getName(  ):net.minecraft.text.Text;
	getOrDefault<T>( type:any /*net.minecraft.component.ComponentType*/, fallback:T ):T;
	getRarity(  ):any /*net.minecraft.util.Rarity*/;
	getRegistryEntry(  ):net.minecraft.registry.entry.RegistryEntry<Item>;
	getTooltip( context:any /*net.minecraft.item.Item$TooltipContext*/, player:net.minecraft.entity.player.PlayerEntity, type:any /*net.minecraft.item.tooltip.TooltipType*/ ):java.util.List<net.minecraft.text.Text>;
	getTooltipData(  ):java.util.Optional<any /*net.minecraft.item.tooltip.TooltipData*/>;
	getTranslationKey(  ):string;
	getUseAction(  ):any /*net.minecraft.util.UseAction*/;
	hasEnchantments(  ):boolean;
	hasGlint(  ):boolean;
	increment( amount:int ):void;
	inventoryTick( world:net.minecraft.world.World, entity:net.minecraft.entity.Entity, slot:int, selected:boolean ):void;
	isDamageable(  ):boolean;
	isDamaged(  ):boolean;
	isEmpty(  ):boolean;
	isEnchantable(  ):boolean;
	isIn( registryEntryList:any /*net.minecraft.registry.entry.RegistryEntryList*/ ):boolean;
	isIn( tag:net.minecraft.registry.tag.TagKey<Item> ):boolean;
	isInFrame(  ):boolean;
	isItemBarVisible(  ):boolean;
	isItemEnabled( enabledFeatures:any /*net.minecraft.resource.featuretoggle.FeatureSet*/ ):boolean;
	isOf( item:Item ):boolean;
	isStackable(  ):boolean;
	isSuitableFor( state:net.minecraft.block.BlockState ):boolean;
	isUsedOnRelease(  ):boolean;
	itemMatches( itemEntry:net.minecraft.registry.entry.RegistryEntry<Item> ):boolean;
	itemMatches( predicate:java.util.function.Predicate<net.minecraft.registry.entry.RegistryEntry<Item>> ):boolean;
	onClicked( stack:ItemStack, slot:any /*net.minecraft.screen.slot.Slot*/, clickType:any /*net.minecraft.util.ClickType*/, player:net.minecraft.entity.player.PlayerEntity, cursorStackReference:any /*net.minecraft.inventory.StackReference*/ ):boolean;
	onCraftByCrafter( world:net.minecraft.world.World ):void;
	onCraftByPlayer( world:net.minecraft.world.World, player:net.minecraft.entity.player.PlayerEntity, amount:int ):void;
	onItemEntityDestroyed( entity:net.minecraft.entity.ItemEntity ):void;
	onStackClicked( slot:any /*net.minecraft.screen.slot.Slot*/, clickType:any /*net.minecraft.util.ClickType*/, player:net.minecraft.entity.player.PlayerEntity ):boolean;
	onStoppedUsing( world:net.minecraft.world.World, user:net.minecraft.entity.LivingEntity, remainingUseTicks:int ):void;
	postDamageEntity( target:net.minecraft.entity.LivingEntity, player:net.minecraft.entity.player.PlayerEntity ):void;
	postHit( target:net.minecraft.entity.LivingEntity, player:net.minecraft.entity.player.PlayerEntity ):boolean;
	postMine( world:net.minecraft.world.World, state:net.minecraft.block.BlockState, pos:net.minecraft.util.math.BlockPos, miner:net.minecraft.entity.player.PlayerEntity ):void;
	remove<T>( type:any /*net.minecraft.component.ComponentType*/ ):T;
	set<T>( type:any /*net.minecraft.component.ComponentType*/, value:T ):T;
	setBobbingAnimationTime( bobbingAnimationTime:int ):void;
	setCount( count:int ):void;
	setDamage( damage:int ):void;
	setHolder( holder:net.minecraft.entity.Entity ):void;
	split( amount:int ):ItemStack;
	splitUnlessCreative( amount:int, entity:net.minecraft.entity.LivingEntity ):ItemStack;
	static areEqual( left:ItemStack, right:ItemStack ):boolean;
	static areItemsAndComponentsEqual( stack:ItemStack, otherStack:ItemStack ):boolean;
	static areItemsEqual( left:ItemStack, right:ItemStack ):boolean;
	static createExtraValidatingPacketCodec( basePacketCodec:any /*net.minecraft.network.codec.PacketCodec*/ ):any /*net.minecraft.network.codec.PacketCodec*/;
	static createOptionalCodec( fieldName:string ):any /*com.mojang.serialization.MapCodec*/;
	static fromNbt( registries:any /*net.minecraft.registry.RegistryWrapper$WrapperLookup*/, nbt:net.minecraft.nbt.NbtElement ):java.util.Optional<ItemStack>;
	static fromNbtOrEmpty( registries:any /*net.minecraft.registry.RegistryWrapper$WrapperLookup*/, nbt:net.minecraft.nbt.NbtCompound ):ItemStack;
	static listHashCode( stacks:java.util.List<ItemStack> ):int;
	static stacksEqual( left:java.util.List<ItemStack>, right:java.util.List<ItemStack> ):boolean;
	static validateComponents( components:any /*net.minecraft.component.ComponentMap*/ ):any /*com.mojang.serialization.DataResult*/;
	streamTags(  ):java.util.stream.Stream<net.minecraft.registry.tag.TagKey<Item>>;
	takesDamageFrom( source:any /*net.minecraft.entity.damage.DamageSource*/ ):boolean;
	toHoverableText(  ):net.minecraft.text.Text;
	toString(  ):string;
	usageTick( world:net.minecraft.world.World, user:net.minecraft.entity.LivingEntity, remainingUseTicks:int ):void;
	use( world:net.minecraft.world.World, user:net.minecraft.entity.player.PlayerEntity, hand:net.minecraft.util.Hand ):net.minecraft.util.TypedActionResult<ItemStack>;
	useOnBlock( context:any /*net.minecraft.item.ItemUsageContext*/ ):net.minecraft.util.ActionResult;
	useOnEntity( user:net.minecraft.entity.player.PlayerEntity, entity:net.minecraft.entity.LivingEntity, hand:net.minecraft.util.Hand ):net.minecraft.util.ActionResult;
	withItem( item:any /*net.minecraft.item.ItemConvertible*/ ):ItemStack;

} // end ItemStack

} // end namespace net.minecraft.item

declare namespace net.minecraft.util.math {

class BlockPos/* extends Vec3i*/ {

	add( i:int, j:int, k:int ):BlockPos;
	add( vec3i:Vec3i ):BlockPos;
	asLong(  ):long;
	clampToWithin( pos:Vec3d ):Vec3d;
	compareTo( vec3i:Vec3i ):int;
	crossProduct( pos:Vec3i ):BlockPos;
	down(  ):BlockPos;
	down( i:int ):BlockPos;
	east(  ):BlockPos;
	east( distance:int ):BlockPos;
	equals( o:any /*java.lang.Object*/ ):boolean;
	getComponentAlongAxis( axis:Direction$Axis ):int;
	getManhattanDistance( vec:Vec3i ):int;
	getSquaredDistance( pos:any /*net.minecraft.util.math.Position*/ ):double;
	getSquaredDistance( vec:Vec3i ):double;
	getSquaredDistance( x:double, y:double, z:double ):double;
	getSquaredDistanceFromCenter( x:double, y:double, z:double ):double;
	getX(  ):int;
	getY(  ):int;
	getZ(  ):int;
	isWithinDistance( pos:any /*net.minecraft.util.math.Position*/, distance:double ):boolean;
	isWithinDistance( vec:Vec3i, distance:double ):boolean;
	multiply( i:int ):BlockPos;
	mutableCopy(  ):BlockPos$Mutable;
	north(  ):BlockPos;
	north( distance:int ):BlockPos;
	offset( axis:Direction$Axis, i:int ):BlockPos;
	offset( direction:Direction ):BlockPos;
	offset( direction:Direction, i:int ):BlockPos;
	rotate( rotation:any /*net.minecraft.util.BlockRotation*/ ):BlockPos;
	south(  ):BlockPos;
	south( distance:int ):BlockPos;
	static add( value:long, x:int, y:int, z:int ):long;
	static asLong( x:int, y:int, z:int ):long;
	static createOffsetCodec( maxAbsValue:int ):any /*com.mojang.serialization.Codec*/;
	static findClosest( pos:BlockPos, horizontalRange:int, verticalRange:int, condition:java.util.function.Predicate<BlockPos> ):java.util.Optional<BlockPos>;
	static fromLong( packedPos:long ):BlockPos;
	static iterate( start:BlockPos, end:BlockPos ):java.lang.Iterable<BlockPos>;
	static iterate( startX:int, startY:int, startZ:int, endX:int, endY:int, endZ:int ):java.lang.Iterable<BlockPos>;
	static iterateInSquare( center:BlockPos, radius:int, firstDirection:Direction, secondDirection:Direction ):java.lang.Iterable<BlockPos$Mutable>;
	static iterateOutwards( center:BlockPos, rangeX:int, rangeY:int, rangeZ:int ):java.lang.Iterable<BlockPos>;
	static iterateRandomly( random:any /*net.minecraft.util.math.random.Random*/, count:int, around:BlockPos, range:int ):java.lang.Iterable<BlockPos>;
	static iterateRandomly( random:any /*net.minecraft.util.math.random.Random*/, count:int, minX:int, minY:int, minZ:int, maxX:int, maxY:int, maxZ:int ):java.lang.Iterable<BlockPos>;
	static iterateRecursively( pos:BlockPos, maxDepth:int, maxIterations:int, nextQueuer:java.util.function.BiConsumer<BlockPos, java.util.function.Consumer<BlockPos>>, callback:java.util.function.Predicate<BlockPos> ):int;
	static max( a:BlockPos, b:BlockPos ):BlockPos;
	static min( a:BlockPos, b:BlockPos ):BlockPos;
	static ofFloored( pos:any /*net.minecraft.util.math.Position*/ ):BlockPos;
	static ofFloored( x:double, y:double, z:double ):BlockPos;
	static offset( value:long, direction:Direction ):long;
	static removeChunkSectionLocalY( y:long ):long;
	static stream( box:Box ):java.util.stream.Stream<BlockPos>;
	static stream( box:any /*net.minecraft.util.math.BlockBox*/ ):java.util.stream.Stream<BlockPos>;
	static stream( start:BlockPos, end:BlockPos ):java.util.stream.Stream<BlockPos>;
	static stream( startX:int, startY:int, startZ:int, endX:int, endY:int, endZ:int ):java.util.stream.Stream<BlockPos>;
	static streamOutwards( center:BlockPos, maxX:int, maxY:int, maxZ:int ):java.util.stream.Stream<BlockPos>;
	static streamSouthEastSquare( pos:BlockPos ):java.util.stream.Stream<BlockPos>;
	static unpackLongX( packedPos:long ):int;
	static unpackLongY( packedPos:long ):int;
	static unpackLongZ( packedPos:long ):int;
	subtract( vec3i:Vec3i ):BlockPos;
	toBottomCenterPos(  ):Vec3d;
	toCenterPos(  ):Vec3d;
	toImmutable(  ):BlockPos;
	toShortString(  ):string;
	toString(  ):string;
	up(  ):BlockPos;
	up( distance:int ):BlockPos;
	west(  ):BlockPos;
	west( distance:int ):BlockPos;
	withY( y:int ):BlockPos;

} // end BlockPos

} // end namespace net.minecraft.util.math

declare namespace net.minecraft.util.math {

class BlockPos$Mutable/* extends BlockPos*/ {

	add( i:int, j:int, k:int ):BlockPos;
	add( vec3i:Vec3i ):BlockPos;
	asLong(  ):long;
	clamp( axis:Direction$Axis, min:int, max:int ):BlockPos$Mutable;
	clampToWithin( pos:Vec3d ):Vec3d;
	compareTo( vec3i:Vec3i ):int;
	crossProduct( pos:Vec3i ):BlockPos;
	down(  ):BlockPos;
	down( i:int ):BlockPos;
	east(  ):BlockPos;
	east( distance:int ):BlockPos;
	equals( o:any /*java.lang.Object*/ ):boolean;
	getComponentAlongAxis( axis:Direction$Axis ):int;
	getManhattanDistance( vec:Vec3i ):int;
	getSquaredDistance( pos:any /*net.minecraft.util.math.Position*/ ):double;
	getSquaredDistance( vec:Vec3i ):double;
	getSquaredDistance( x:double, y:double, z:double ):double;
	getSquaredDistanceFromCenter( x:double, y:double, z:double ):double;
	getX(  ):int;
	getY(  ):int;
	getZ(  ):int;
	isWithinDistance( pos:any /*net.minecraft.util.math.Position*/, distance:double ):boolean;
	isWithinDistance( vec:Vec3i, distance:double ):boolean;
	move( direction:Direction ):BlockPos$Mutable;
	move( direction:Direction, distance:int ):BlockPos$Mutable;
	move( dx:int, dy:int, dz:int ):BlockPos$Mutable;
	move( vec:Vec3i ):BlockPos$Mutable;
	multiply( i:int ):BlockPos;
	mutableCopy(  ):BlockPos$Mutable;
	north(  ):BlockPos;
	north( distance:int ):BlockPos;
	offset( axis:Direction$Axis, i:int ):BlockPos;
	offset( direction:Direction ):BlockPos;
	offset( direction:Direction, i:int ):BlockPos;
	rotate( rotation:any /*net.minecraft.util.BlockRotation*/ ):BlockPos;
	set( axis:any /*net.minecraft.util.math.AxisCycleDirection*/, x:int, y:int, z:int ):BlockPos$Mutable;
	set( pos:Vec3i ):BlockPos$Mutable;
	set( pos:Vec3i, direction:Direction ):BlockPos$Mutable;
	set( pos:Vec3i, x:int, y:int, z:int ):BlockPos$Mutable;
	set( pos:long ):BlockPos$Mutable;
	set( vec1:Vec3i, vec2:Vec3i ):BlockPos$Mutable;
	set( x:double, y:double, z:double ):BlockPos$Mutable;
	set( x:int, y:int, z:int ):BlockPos$Mutable;
	setX( i:int ):BlockPos$Mutable;
	setY( i:int ):BlockPos$Mutable;
	setZ( i:int ):BlockPos$Mutable;
	south(  ):BlockPos;
	south( distance:int ):BlockPos;
	static add( value:long, x:int, y:int, z:int ):long;
	static asLong( x:int, y:int, z:int ):long;
	static createOffsetCodec( maxAbsValue:int ):any /*com.mojang.serialization.Codec*/;
	static findClosest( pos:BlockPos, horizontalRange:int, verticalRange:int, condition:java.util.function.Predicate<BlockPos> ):java.util.Optional<BlockPos>;
	static fromLong( packedPos:long ):BlockPos;
	static iterate( start:BlockPos, end:BlockPos ):java.lang.Iterable<BlockPos>;
	static iterate( startX:int, startY:int, startZ:int, endX:int, endY:int, endZ:int ):java.lang.Iterable<BlockPos>;
	static iterateInSquare( center:BlockPos, radius:int, firstDirection:Direction, secondDirection:Direction ):java.lang.Iterable<BlockPos$Mutable>;
	static iterateOutwards( center:BlockPos, rangeX:int, rangeY:int, rangeZ:int ):java.lang.Iterable<BlockPos>;
	static iterateRandomly( random:any /*net.minecraft.util.math.random.Random*/, count:int, around:BlockPos, range:int ):java.lang.Iterable<BlockPos>;
	static iterateRandomly( random:any /*net.minecraft.util.math.random.Random*/, count:int, minX:int, minY:int, minZ:int, maxX:int, maxY:int, maxZ:int ):java.lang.Iterable<BlockPos>;
	static iterateRecursively( pos:BlockPos, maxDepth:int, maxIterations:int, nextQueuer:java.util.function.BiConsumer<BlockPos, java.util.function.Consumer<BlockPos>>, callback:java.util.function.Predicate<BlockPos> ):int;
	static max( a:BlockPos, b:BlockPos ):BlockPos;
	static min( a:BlockPos, b:BlockPos ):BlockPos;
	static ofFloored( pos:any /*net.minecraft.util.math.Position*/ ):BlockPos;
	static ofFloored( x:double, y:double, z:double ):BlockPos;
	static offset( value:long, direction:Direction ):long;
	static removeChunkSectionLocalY( y:long ):long;
	static stream( box:Box ):java.util.stream.Stream<BlockPos>;
	static stream( box:any /*net.minecraft.util.math.BlockBox*/ ):java.util.stream.Stream<BlockPos>;
	static stream( start:BlockPos, end:BlockPos ):java.util.stream.Stream<BlockPos>;
	static stream( startX:int, startY:int, startZ:int, endX:int, endY:int, endZ:int ):java.util.stream.Stream<BlockPos>;
	static streamOutwards( center:BlockPos, maxX:int, maxY:int, maxZ:int ):java.util.stream.Stream<BlockPos>;
	static streamSouthEastSquare( pos:BlockPos ):java.util.stream.Stream<BlockPos>;
	static unpackLongX( packedPos:long ):int;
	static unpackLongY( packedPos:long ):int;
	static unpackLongZ( packedPos:long ):int;
	subtract( vec3i:Vec3i ):BlockPos;
	toBottomCenterPos(  ):Vec3d;
	toCenterPos(  ):Vec3d;
	toImmutable(  ):BlockPos;
	toShortString(  ):string;
	toString(  ):string;
	up(  ):BlockPos;
	up( distance:int ):BlockPos;
	west(  ):BlockPos;
	west( distance:int ):BlockPos;
	withY( y:int ):BlockPos;

} // end BlockPos$Mutable

} // end namespace net.minecraft.util.math

declare namespace net.minecraft.util.math {

class Vec3d/* extends java.lang.Object implements Position*/ {

	add( vec:Vec3d ):Vec3d;
	add( x:double, y:double, z:double ):Vec3d;
	addRandom( random:any /*net.minecraft.util.math.random.Random*/, multiplier:float ):Vec3d;
	crossProduct( vec:Vec3d ):Vec3d;
	distanceTo( vec:Vec3d ):double;
	dotProduct( vec:Vec3d ):double;
	equals( o:any /*java.lang.Object*/ ):boolean;
	floorAlongAxes( axes:any /*java.util.EnumSet*/ ):Vec3d;
	getComponentAlongAxis( axis:Direction$Axis ):double;
	getX(  ):double;
	getY(  ):double;
	getZ(  ):double;
	horizontalLength(  ):double;
	horizontalLengthSquared(  ):double;
	isInRange( pos:any /*net.minecraft.util.math.Position*/, radius:double ):boolean;
	isWithinRangeOf( vec:Vec3d, horizontalRange:double, verticalRange:double ):boolean;
	length(  ):double;
	lengthSquared(  ):double;
	lerp( to:Vec3d, delta:double ):Vec3d;
	multiply( value:double ):Vec3d;
	multiply( vec:Vec3d ):Vec3d;
	multiply( x:double, y:double, z:double ):Vec3d;
	negate(  ):Vec3d;
	normalize(  ):Vec3d;
	offset( direction:Direction, value:double ):Vec3d;
	relativize( vec:Vec3d ):Vec3d;
	rotateX( angle:float ):Vec3d;
	rotateY( angle:float ):Vec3d;
	rotateZ( angle:float ):Vec3d;
	squaredDistanceTo( vec:Vec3d ):double;
	squaredDistanceTo( x:double, y:double, z:double ):double;
	static add( vec:Vec3i, deltaX:double, deltaY:double, deltaZ:double ):Vec3d;
	static fromPolar( pitch:float, yaw:float ):Vec3d;
	static fromPolar( polar:any /*net.minecraft.util.math.Vec2f*/ ):Vec3d;
	static of( vec:Vec3i ):Vec3d;
	static ofBottomCenter( vec:Vec3i ):Vec3d;
	static ofCenter( vec:Vec3i ):Vec3d;
	static ofCenter( vec:Vec3i, deltaY:double ):Vec3d;
	static unpackRgb( rgb:int ):Vec3d;
	subtract( vec:Vec3d ):Vec3d;
	subtract( x:double, y:double, z:double ):Vec3d;
	toString(  ):string;
	toVector3f(  ):org.joml.Vector3f;
	withAxis( axis:Direction$Axis, value:double ):Vec3d;

} // end Vec3d

} // end namespace net.minecraft.util.math

declare namespace net.minecraft.util.math {

class Vec3i/* extends java.lang.Object implements java.lang.Comparable<any>*/ {

	add( vec:Vec3i ):Vec3i;
	add( x:int, y:int, z:int ):Vec3i;
	compareTo( vec3i:Vec3i ):int;
	crossProduct( vec:Vec3i ):Vec3i;
	down(  ):Vec3i;
	down( distance:int ):Vec3i;
	east(  ):Vec3i;
	east( distance:int ):Vec3i;
	equals( o:any /*java.lang.Object*/ ):boolean;
	getComponentAlongAxis( axis:Direction$Axis ):int;
	getManhattanDistance( vec:Vec3i ):int;
	getSquaredDistance( pos:any /*net.minecraft.util.math.Position*/ ):double;
	getSquaredDistance( vec:Vec3i ):double;
	getSquaredDistance( x:double, y:double, z:double ):double;
	getSquaredDistanceFromCenter( x:double, y:double, z:double ):double;
	getX(  ):int;
	getY(  ):int;
	getZ(  ):int;
	isWithinDistance( pos:any /*net.minecraft.util.math.Position*/, distance:double ):boolean;
	isWithinDistance( vec:Vec3i, distance:double ):boolean;
	multiply( scale:int ):Vec3i;
	north(  ):Vec3i;
	north( distance:int ):Vec3i;
	offset( axis:Direction$Axis, distance:int ):Vec3i;
	offset( direction:Direction ):Vec3i;
	offset( direction:Direction, distance:int ):Vec3i;
	south(  ):Vec3i;
	south( distance:int ):Vec3i;
	static createOffsetCodec( maxAbsValue:int ):any /*com.mojang.serialization.Codec*/;
	subtract( vec:Vec3i ):Vec3i;
	toShortString(  ):string;
	toString(  ):string;
	up(  ):Vec3i;
	up( distance:int ):Vec3i;
	west(  ):Vec3i;
	west( distance:int ):Vec3i;

} // end Vec3i

} // end namespace net.minecraft.util.math

declare namespace net.minecraft.util.math {

class ChunkPos/* extends java.lang.Object*/ {

	equals( o:any /*java.lang.Object*/ ):boolean;
	getBlockPos( offsetX:int, y:int, offsetZ:int ):BlockPos;
	getCenterAtY( y:int ):BlockPos;
	getCenterX(  ):int;
	getCenterZ(  ):int;
	getChebyshevDistance( pos:ChunkPos ):int;
	getChebyshevDistance( x:int, z:int ):int;
	getEndX(  ):int;
	getEndZ(  ):int;
	getOffsetX( offset:int ):int;
	getOffsetZ( offset:int ):int;
	getRegionRelativeX(  ):int;
	getRegionRelativeZ(  ):int;
	getRegionX(  ):int;
	getRegionZ(  ):int;
	getSquaredDistance( pos:ChunkPos ):int;
	getSquaredDistance( pos:long ):int;
	getStartPos(  ):BlockPos;
	getStartX(  ):int;
	getStartZ(  ):int;
	static fromRegion( x:int, z:int ):ChunkPos;
	static fromRegionCenter( x:int, z:int ):ChunkPos;
	static getPackedX( pos:long ):int;
	static getPackedZ( pos:long ):int;
	static stream( center:ChunkPos, radius:int ):java.util.stream.Stream<ChunkPos>;
	static stream( pos1:ChunkPos, pos2:ChunkPos ):java.util.stream.Stream<ChunkPos>;
	static toLong( chunkX:int, chunkZ:int ):long;
	static toLong( pos:BlockPos ):long;
	toLong(  ):long;
	toString(  ):string;

} // end ChunkPos

} // end namespace net.minecraft.util.math

declare namespace net.minecraft.util.math {

class Box/* extends java.lang.Object*/ {

	contains( pos:Vec3d ):boolean;
	contains( x:double, y:double, z:double ):boolean;
	contract( value:double ):Box;
	contract( x:double, y:double, z:double ):Box;
	equals( o:any /*java.lang.Object*/ ):boolean;
	expand( value:double ):Box;
	expand( x:double, y:double, z:double ):Box;
	getAverageSideLength(  ):double;
	getBottomCenter(  ):Vec3d;
	getCenter(  ):Vec3d;
	getLengthX(  ):double;
	getLengthY(  ):double;
	getLengthZ(  ):double;
	getMax( axis:Direction$Axis ):double;
	getMaxPos(  ):Vec3d;
	getMin( axis:Direction$Axis ):double;
	getMinPos(  ):Vec3d;
	intersection( box:Box ):Box;
	intersects( box:Box ):boolean;
	intersects( minX:double, minY:double, minZ:double, maxX:double, maxY:double, maxZ:double ):boolean;
	intersects( pos1:Vec3d, pos2:Vec3d ):boolean;
	isNaN(  ):boolean;
	offset( blockPos:BlockPos ):Box;
	offset( offset:org.joml.Vector3f ):Box;
	offset( vec:Vec3d ):Box;
	offset( x:double, y:double, z:double ):Box;
	raycast( min:Vec3d, max:Vec3d ):java.util.Optional<Vec3d>;
	shrink( x:double, y:double, z:double ):Box;
	squaredMagnitude( pos:Vec3d ):double;
	static enclosing( pos1:BlockPos, pos2:BlockPos ):Box;
	static from( mutable:any /*net.minecraft.util.math.BlockBox*/ ):Box;
	static from( pos:Vec3d ):Box;
	static of( center:Vec3d, dx:double, dy:double, dz:double ):Box;
	static raycast( boxes:java.lang.Iterable<Box>, from:Vec3d, to:Vec3d, pos:BlockPos ):net.minecraft.util.hit.BlockHitResult;
	stretch( scale:Vec3d ):Box;
	stretch( x:double, y:double, z:double ):Box;
	toString(  ):string;
	union( box:Box ):Box;
	withMaxX( maxX:double ):Box;
	withMaxY( maxY:double ):Box;
	withMaxZ( maxZ:double ):Box;
	withMinX( minX:double ):Box;
	withMinY( minY:double ):Box;
	withMinZ( minZ:double ):Box;

} // end Box

} // end namespace net.minecraft.util.math

declare namespace net.minecraft.util.math {

/* enum */class Direction/* extends java.lang.Enum<any> implements net.minecraft.util.StringIdentifiable*/ {

	// DOWN:Direction;
	// UP:Direction;
	// NORTH:Direction;
	// SOUTH:Direction;
	// WEST:Direction;
	// EAST:Direction;

	asRotation(  ):float;
	asString(  ):string;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getAxis(  ):Direction$Axis;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	getDirection(  ):any /*net.minecraft.util.math.Direction$AxisDirection*/;
	getHorizontal(  ):int;
	getId(  ):int;
	getName(  ):string;
	getOffsetX(  ):int;
	getOffsetY(  ):int;
	getOffsetZ(  ):int;
	getOpposite(  ):Direction;
	getRotationQuaternion(  ):org.joml.Quaternionf;
	getUnitVector(  ):org.joml.Vector3f;
	getVector(  ):Vec3i;
	name(  ):string;
	ordinal(  ):int;
	pointsTo( yaw:float ):boolean;
	rotateClockwise( axis:Direction$Axis ):Direction;
	rotateCounterclockwise( axis:Direction$Axis ):Direction;
	rotateYClockwise(  ):Direction;
	rotateYCounterclockwise(  ):Direction;
	toString(  ):string;

} // end Direction

} // end namespace net.minecraft.util.math

declare namespace net.minecraft.util.math {

/* enum */class Direction$Axis/* extends java.lang.Enum<any> implements net.minecraft.util.StringIdentifiable, java.util.function.Predicate<any>*/ {

	// X:Direction$Axis;
	// Y:Direction$Axis;
	// Z:Direction$Axis;

	and<T>( arg0:java.util.function.Predicate<T> ):java.util.function.Predicate<T>;
	asString(  ):string;
	choose( x:double, y:double, z:double ):double;
	choose( x:int, y:int, z:int ):int;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	getName(  ):string;
	getType(  ):any /*net.minecraft.util.math.Direction$Type*/;
	isHorizontal(  ):boolean;
	isVertical(  ):boolean;
	name(  ):string;
	negate<T>(  ):java.util.function.Predicate<T>;
	or<T>( arg0:java.util.function.Predicate<T> ):java.util.function.Predicate<T>;
	ordinal(  ):int;
	test( direction:Direction ):boolean;
	toString(  ):string;

} // end Direction$Axis

} // end namespace net.minecraft.util.math

declare namespace net.minecraft.util {

/* enum */class Hand/* extends java.lang.Enum<any>*/ {

	// MAIN_HAND:Hand;
	// OFF_HAND:Hand;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end Hand

} // end namespace net.minecraft.util

declare namespace net.minecraft.util {

class Identifier/* extends java.lang.Object implements java.lang.Comparable<any>*/ {

	compareTo( identifier:Identifier ):int;
	equals( o:any /*java.lang.Object*/ ):boolean;
	getNamespace(  ):string;
	getPath(  ):string;
	static fromCommandInput( reader:any /*com.mojang.brigadier.StringReader*/ ):Identifier;
	static fromCommandInputNonEmpty( reader:any /*com.mojang.brigadier.StringReader*/ ):Identifier;
	static isCharValid( c:any /*char*/ ):boolean;
	static isNamespaceValid( namespace:string ):boolean;
	static isPathCharacterValid( character:any /*char*/ ):boolean;
	static isPathValid( path:string ):boolean;
	static of( id:string ):Identifier;
	static of( namespace:string, path:string ):Identifier;
	static ofVanilla( path:string ):Identifier;
	static splitOn( id:string, delimiter:any /*char*/ ):Identifier;
	static tryParse( id:string ):Identifier;
	static tryParse( namespace:string, path:string ):Identifier;
	static trySplitOn( id:string, delimiter:any /*char*/ ):Identifier;
	static validate( id:string ):any /*com.mojang.serialization.DataResult*/;
	toShortTranslationKey(  ):string;
	toString(  ):string;
	toTranslationKey(  ):string;
	toTranslationKey( prefix:string ):string;
	toTranslationKey( prefix:string, suffix:string ):string;
	toUnderscoreSeparatedString(  ):string;
	withPath( path:string ):Identifier;
	withPath( pathFunction:any /*java.util.function.UnaryOperator*/ ):Identifier;
	withPrefixedPath( prefix:string ):Identifier;
	withSuffixedPath( suffix:string ):Identifier;

} // end Identifier

} // end namespace net.minecraft.util

declare namespace net.minecraft.util.hit {

class HitResult/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getPos(  ):net.minecraft.util.math.Vec3d;
	getType(  ):HitResult$Type;
	squaredDistanceTo( entity:net.minecraft.entity.Entity ):double;
	toString(  ):string;

} // end HitResult

} // end namespace net.minecraft.util.hit

declare namespace net.minecraft.util.hit {

class BlockHitResult/* extends HitResult*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getBlockPos(  ):net.minecraft.util.math.BlockPos;
	getPos(  ):net.minecraft.util.math.Vec3d;
	getSide(  ):net.minecraft.util.math.Direction;
	getType(  ):HitResult$Type;
	isInsideBlock(  ):boolean;
	squaredDistanceTo( entity:net.minecraft.entity.Entity ):double;
	static createMissed( pos:net.minecraft.util.math.Vec3d, side:net.minecraft.util.math.Direction, blockPos:net.minecraft.util.math.BlockPos ):BlockHitResult;
	toString(  ):string;
	withBlockPos( blockPos:net.minecraft.util.math.BlockPos ):BlockHitResult;
	withSide( side:net.minecraft.util.math.Direction ):BlockHitResult;

} // end BlockHitResult

} // end namespace net.minecraft.util.hit

declare namespace net.minecraft.client.gui {

class DrawContext/* extends java.lang.Object*/ {

	disableScissor(  ):void;
	draw(  ):void;
	draw( drawCallback:any /*java.lang.Runnable*/ ):void;
	drawBorder( x:int, y:int, width:int, height:int, color:int ):void;
	drawCenteredTextWithShadow( textRenderer:net.minecraft.client.font.TextRenderer, text:any /*net.minecraft.text.OrderedText*/, centerX:int, y:int, color:int ):void;
	drawCenteredTextWithShadow( textRenderer:net.minecraft.client.font.TextRenderer, text:net.minecraft.text.Text, centerX:int, y:int, color:int ):void;
	drawCenteredTextWithShadow( textRenderer:net.minecraft.client.font.TextRenderer, text:string, centerX:int, y:int, color:int ):void;
	drawGuiTexture( texture:net.minecraft.util.Identifier, i:int, j:int, k:int, l:int, x:int, y:int, width:int, height:int ):void;
	drawGuiTexture( texture:net.minecraft.util.Identifier, i:int, j:int, k:int, l:int, x:int, y:int, z:int, width:int, height:int ):void;
	drawGuiTexture( texture:net.minecraft.util.Identifier, x:int, y:int, width:int, height:int ):void;
	drawGuiTexture( texture:net.minecraft.util.Identifier, x:int, y:int, z:int, width:int, height:int ):void;
	drawHorizontalLine( layer:any /*net.minecraft.client.render.RenderLayer*/, x1:int, x2:int, y:int, color:int ):void;
	drawHorizontalLine( x1:int, x2:int, y:int, color:int ):void;
	drawHoverEvent( textRenderer:net.minecraft.client.font.TextRenderer, style:net.minecraft.text.Style, x:int, y:int ):void;
	drawItem( entity:net.minecraft.entity.LivingEntity, stack:net.minecraft.item.ItemStack, x:int, y:int, seed:int ):void;
	drawItem( item:net.minecraft.item.ItemStack, x:int, y:int ):void;
	drawItem( stack:net.minecraft.item.ItemStack, x:int, y:int, seed:int ):void;
	drawItem( stack:net.minecraft.item.ItemStack, x:int, y:int, seed:int, z:int ):void;
	drawItemInSlot( textRenderer:net.minecraft.client.font.TextRenderer, stack:net.minecraft.item.ItemStack, x:int, y:int ):void;
	drawItemInSlot( textRenderer:net.minecraft.client.font.TextRenderer, stack:net.minecraft.item.ItemStack, x:int, y:int, countOverride:string ):void;
	drawItemTooltip( textRenderer:net.minecraft.client.font.TextRenderer, stack:net.minecraft.item.ItemStack, x:int, y:int ):void;
	drawItemWithoutEntity( stack:net.minecraft.item.ItemStack, x:int, y:int ):void;
	drawItemWithoutEntity( stack:net.minecraft.item.ItemStack, x:int, y:int, seed:int ):void;
	drawOrderedTooltip( textRenderer:net.minecraft.client.font.TextRenderer, text:java.util.List<any /*net.minecraft.text.OrderedText*/>, x:int, y:int ):void;
	drawSprite( x:int, y:int, z:int, width:int, height:int, sprite:any /*net.minecraft.client.texture.Sprite*/ ):void;
	drawSprite( x:int, y:int, z:int, width:int, height:int, sprite:any /*net.minecraft.client.texture.Sprite*/, red:float, green:float, blue:float, alpha:float ):void;
	drawText( textRenderer:net.minecraft.client.font.TextRenderer, text:any /*net.minecraft.text.OrderedText*/, x:int, y:int, color:int, shadow:boolean ):int;
	drawText( textRenderer:net.minecraft.client.font.TextRenderer, text:net.minecraft.text.Text, x:int, y:int, color:int, shadow:boolean ):int;
	drawText( textRenderer:net.minecraft.client.font.TextRenderer, text:string, x:int, y:int, color:int, shadow:boolean ):int;
	drawTextWithBackground( textRenderer:net.minecraft.client.font.TextRenderer, text:net.minecraft.text.Text, x:int, y:int, width:int, color:int ):int;
	drawTextWithShadow( textRenderer:net.minecraft.client.font.TextRenderer, text:any /*net.minecraft.text.OrderedText*/, x:int, y:int, color:int ):int;
	drawTextWithShadow( textRenderer:net.minecraft.client.font.TextRenderer, text:net.minecraft.text.Text, x:int, y:int, color:int ):int;
	drawTextWithShadow( textRenderer:net.minecraft.client.font.TextRenderer, text:string, x:int, y:int, color:int ):int;
	drawTextWrapped( textRenderer:net.minecraft.client.font.TextRenderer, text:any /*net.minecraft.text.StringVisitable*/, x:int, y:int, width:int, color:int ):void;
	drawTexture( texture:net.minecraft.util.Identifier, x:int, y:int, u:float, v:float, width:int, height:int, textureWidth:int, textureHeight:int ):void;
	drawTexture( texture:net.minecraft.util.Identifier, x:int, y:int, u:int, v:int, width:int, height:int ):void;
	drawTexture( texture:net.minecraft.util.Identifier, x:int, y:int, width:int, height:int, u:float, v:float, regionWidth:int, regionHeight:int, textureWidth:int, textureHeight:int ):void;
	drawTexture( texture:net.minecraft.util.Identifier, x:int, y:int, z:int, u:float, v:float, width:int, height:int, textureWidth:int, textureHeight:int ):void;
	drawTooltip( textRenderer:net.minecraft.client.font.TextRenderer, text:java.util.List<any /*net.minecraft.text.OrderedText*/>, positioner:any /*net.minecraft.client.gui.tooltip.TooltipPositioner*/, x:int, y:int ):void;
	drawTooltip( textRenderer:net.minecraft.client.font.TextRenderer, text:java.util.List<net.minecraft.text.Text>, data:java.util.Optional<any /*net.minecraft.item.tooltip.TooltipData*/>, x:int, y:int ):void;
	drawTooltip( textRenderer:net.minecraft.client.font.TextRenderer, text:java.util.List<net.minecraft.text.Text>, x:int, y:int ):void;
	drawTooltip( textRenderer:net.minecraft.client.font.TextRenderer, text:net.minecraft.text.Text, x:int, y:int ):void;
	drawVerticalLine( layer:any /*net.minecraft.client.render.RenderLayer*/, x:int, y1:int, y2:int, color:int ):void;
	drawVerticalLine( x:int, y1:int, y2:int, color:int ):void;
	enableScissor( x1:int, y1:int, x2:int, y2:int ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	fill( layer:any /*net.minecraft.client.render.RenderLayer*/, x1:int, y1:int, x2:int, y2:int, color:int ):void;
	fill( layer:any /*net.minecraft.client.render.RenderLayer*/, x1:int, y1:int, x2:int, y2:int, z:int, color:int ):void;
	fill( x1:int, y1:int, x2:int, y2:int, color:int ):void;
	fill( x1:int, y1:int, x2:int, y2:int, z:int, color:int ):void;
	fillGradient( layer:any /*net.minecraft.client.render.RenderLayer*/, startX:int, startY:int, endX:int, endY:int, colorStart:int, colorEnd:int, z:int ):void;
	fillGradient( startX:int, startY:int, endX:int, endY:int, colorStart:int, colorEnd:int ):void;
	fillGradient( startX:int, startY:int, endX:int, endY:int, z:int, colorStart:int, colorEnd:int ):void;
	fillWithLayer( layer:any /*net.minecraft.client.render.RenderLayer*/, startX:int, startY:int, endX:int, endY:int, z:int ):void;
	getMatrices(  ):any /*net.minecraft.client.util.math.MatrixStack*/;
	getScaledWindowHeight(  ):int;
	getScaledWindowWidth(  ):int;
	getVertexConsumers(  ):any /*net.minecraft.client.render.VertexConsumerProvider$Immediate*/;
	scissorContains( x:int, y:int ):boolean;
	setShaderColor( red:float, green:float, blue:float, alpha:float ):void;
	toString(  ):string;

} // end DrawContext

} // end namespace net.minecraft.client.gui

declare namespace net.minecraft.client.font {

class TextRenderer/* extends java.lang.Object*/ {

	draw( text:any /*net.minecraft.text.OrderedText*/, x:float, y:float, color:int, shadow:boolean, matrix:org.joml.Matrix4f, vertexConsumers:any /*net.minecraft.client.render.VertexConsumerProvider*/, layerType:any /*net.minecraft.client.font.TextRenderer$TextLayerType*/, backgroundColor:int, light:int ):int;
	draw( text:net.minecraft.text.Text, x:float, y:float, color:int, shadow:boolean, matrix:org.joml.Matrix4f, vertexConsumers:any /*net.minecraft.client.render.VertexConsumerProvider*/, layerType:any /*net.minecraft.client.font.TextRenderer$TextLayerType*/, backgroundColor:int, light:int ):int;
	draw( text:string, x:float, y:float, color:int, shadow:boolean, matrix:org.joml.Matrix4f, vertexConsumers:any /*net.minecraft.client.render.VertexConsumerProvider*/, layerType:any /*net.minecraft.client.font.TextRenderer$TextLayerType*/, backgroundColor:int, light:int ):int;
	draw( text:string, x:float, y:float, color:int, shadow:boolean, matrix:org.joml.Matrix4f, vertexConsumers:any /*net.minecraft.client.render.VertexConsumerProvider*/, layerType:any /*net.minecraft.client.font.TextRenderer$TextLayerType*/, backgroundColor:int, light:int, rightToLeft:boolean ):int;
	drawWithOutline( text:any /*net.minecraft.text.OrderedText*/, x:float, y:float, color:int, outlineColor:int, matrix:org.joml.Matrix4f, vertexConsumers:any /*net.minecraft.client.render.VertexConsumerProvider*/, light:int ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getTextHandler(  ):any /*net.minecraft.client.font.TextHandler*/;
	getWidth( text:any /*net.minecraft.text.OrderedText*/ ):int;
	getWidth( text:any /*net.minecraft.text.StringVisitable*/ ):int;
	getWidth( text:string ):int;
	getWrappedLinesHeight( text:any /*net.minecraft.text.StringVisitable*/, maxWidth:int ):int;
	getWrappedLinesHeight( text:string, maxWidth:int ):int;
	isRightToLeft(  ):boolean;
	mirror( text:string ):string;
	toString(  ):string;
	trimToWidth( text:any /*net.minecraft.text.StringVisitable*/, width:int ):any /*net.minecraft.text.StringVisitable*/;
	trimToWidth( text:string, maxWidth:int ):string;
	trimToWidth( text:string, maxWidth:int, backwards:boolean ):string;
	wrapLines( text:any /*net.minecraft.text.StringVisitable*/, width:int ):java.util.List<any /*net.minecraft.text.OrderedText*/>;

} // end TextRenderer

} // end namespace net.minecraft.client.font

declare namespace net.minecraft.client.toast {

interface Toast {

	draw( context:net.minecraft.client.gui.DrawContext, manager:any /*net.minecraft.client.toast.ToastManager*/, startTime:long ):any /*net.minecraft.client.toast.Toast$Visibility*/;
	getHeight(  ):int;
	getRequiredSpaceCount(  ):int;
	getType(  ):any /*java.lang.Object*/;
	getWidth(  ):int;

} // end Toast

} // end namespace net.minecraft.client.toast

declare namespace net.minecraft.text {

interface Text/* extends com.mojang.brigadier.Message, StringVisitable*/ {

	// static empty(  ):MutableText;
	// static keybind( string:string ):MutableText;
	// static literal( string:string ):MutableText;
	// static nbt( rawPath:string, interpret:boolean, separator:java.util.Optional<Text>, dataSource:any /*net.minecraft.text.NbtDataSource*/ ):MutableText;
	// static of( date:any /*java.util.Date*/ ):Text;
	// static of( id:net.minecraft.util.Identifier ):Text;
	// static of( message:com.mojang.brigadier.Message ):Text;
	// static of( pos:net.minecraft.util.math.ChunkPos ):Text;
	// static of( string:string ):Text;
	// static of( uri:any /*java.net.URI*/ ):Text;
	// static of( uuid:java.util.UUID ):Text;
	// static score( name:string, objective:string ):MutableText;
	// static selector( pattern:string, separator:java.util.Optional<Text> ):MutableText;
	// static stringifiedTranslatable( key:string, ...args:any /*java.lang.Object*/[] ):MutableText;
	// static translatable( key:string ):MutableText;
	// static translatable( key:string, ...args:any /*java.lang.Object*/[] ):MutableText;
	// static translatableWithFallback( key:string, fallback:string ):MutableText;
	// static translatableWithFallback( key:string, fallback:string, ...args:any /*java.lang.Object*/[] ):MutableText;
	asOrderedText(  ):any /*net.minecraft.text.OrderedText*/;
	asTruncatedString( length:int ):string;
	contains( text:Text ):boolean;
	copy(  ):MutableText;
	copyContentOnly(  ):MutableText;
	getContent(  ):any /*net.minecraft.text.TextContent*/;
	getLiteralString(  ):string;
	getSiblings(  ):java.util.List<Text>;
	getString(  ):string;
	getStyle(  ):Style;
	getWithStyle( style:Style ):java.util.List<Text>;
	visit<T>( styledVisitor:any /*net.minecraft.text.StringVisitable$StyledVisitor*/, style:Style ):java.util.Optional<T>;
	visit<T>( visitor:any /*net.minecraft.text.StringVisitable$Visitor*/ ):java.util.Optional<T>;
	withoutStyle(  ):java.util.List<Text>;

} // end Text

} // end namespace net.minecraft.text

declare namespace net.minecraft.text {

class MutableText/* extends java.lang.Object implements Text*/ {

	append( text:Text ):MutableText;
	append( text:string ):MutableText;
	asOrderedText(  ):any /*net.minecraft.text.OrderedText*/;
	asTruncatedString( length:int ):string;
	contains( text:Text ):boolean;
	copy(  ):MutableText;
	copyContentOnly(  ):MutableText;
	equals( o:any /*java.lang.Object*/ ):boolean;
	fillStyle( styleOverride:Style ):MutableText;
	formatted( ...formattings:net.minecraft.util.Formatting[] ):MutableText;
	formatted( formatting:net.minecraft.util.Formatting ):MutableText;
	getContent(  ):any /*net.minecraft.text.TextContent*/;
	getLiteralString(  ):string;
	getSiblings(  ):java.util.List<Text>;
	getString(  ):string;
	getStyle(  ):Style;
	getWithStyle( style:Style ):java.util.List<Text>;
	setStyle( style:Style ):MutableText;
	static of( content:any /*net.minecraft.text.TextContent*/ ):MutableText;
	styled( styleUpdater:any /*java.util.function.UnaryOperator*/ ):MutableText;
	toString(  ):string;
	visit<T>( styledVisitor:any /*net.minecraft.text.StringVisitable$StyledVisitor*/, style:Style ):java.util.Optional<T>;
	visit<T>( visitor:any /*net.minecraft.text.StringVisitable$Visitor*/ ):java.util.Optional<T>;
	withColor( color:int ):MutableText;
	withoutStyle(  ):java.util.List<Text>;

} // end MutableText

} // end namespace net.minecraft.text

declare namespace net.minecraft.network.packet {

interface Packet<T> {

	// static createCodec( encoder:any /*net.minecraft.network.codec.ValueFirstEncoder*/, decoder:any /*net.minecraft.network.codec.PacketDecoder*/ ):any /*net.minecraft.network.codec.PacketCodec*/;
	apply( listener:T ):void;
	getPacketId(  ):any /*net.minecraft.network.packet.PacketType*/;
	isWritingErrorSkippable(  ):boolean;
	transitionsNetworkState(  ):boolean;

} // end Packet

} // end namespace net.minecraft.network.packet

declare namespace com.mojang.brigadier {

class CommandDispatcher<S>/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	execute( arg0:any /*com.mojang.brigadier.ParseResults*/ ):int;
	execute( arg0:any /*com.mojang.brigadier.StringReader*/, arg1:S ):int;
	execute( arg0:string, arg1:S ):int;
	findAmbiguities( arg0:any /*com.mojang.brigadier.AmbiguityConsumer*/ ):void;
	findNode( arg0:java.util.Collection<string> ):any /*com.mojang.brigadier.tree.CommandNode*/;
	getAllUsage( arg0:any /*com.mojang.brigadier.tree.CommandNode*/, arg1:S, arg2:boolean ):[string];
	getCompletionSuggestions( arg0:any /*com.mojang.brigadier.ParseResults*/ ):any /*java.util.concurrent.CompletableFuture*/;
	getCompletionSuggestions( arg0:any /*com.mojang.brigadier.ParseResults*/, arg1:int ):any /*java.util.concurrent.CompletableFuture*/;
	getPath( arg0:any /*com.mojang.brigadier.tree.CommandNode*/ ):java.util.Collection<string>;
	getRoot(  ):any /*com.mojang.brigadier.tree.RootCommandNode*/;
	getSmartUsage( arg0:any /*com.mojang.brigadier.tree.CommandNode*/, arg1:S ):any /*java.util.Map*/;
	parse( arg0:any /*com.mojang.brigadier.StringReader*/, arg1:S ):any /*com.mojang.brigadier.ParseResults*/;
	parse( arg0:string, arg1:S ):any /*com.mojang.brigadier.ParseResults*/;
	register( arg0:any /*com.mojang.brigadier.builder.LiteralArgumentBuilder*/ ):any /*com.mojang.brigadier.tree.LiteralCommandNode*/;
	setConsumer( arg0:any /*com.mojang.brigadier.ResultConsumer*/ ):void;
	toString(  ):string;

} // end CommandDispatcher

} // end namespace com.mojang.brigadier

declare namespace com.mojang.brigadier {

interface Message {

	getString(  ):string;

} // end Message

} // end namespace com.mojang.brigadier

declare namespace org.joml {

class Vector3d/* extends java.lang.Object implements java.io.Externalizable, java.lang.Cloneable, Vector3dc*/ {

	absolute(  ):Vector3d;
	absolute( arg0:Vector3d ):Vector3d;
	add( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	add( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	add( arg0:any /*org.joml.Vector3fc*/ ):Vector3d;
	add( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3d ):Vector3d;
	add( arg0:double, arg1:double, arg2:double ):Vector3d;
	add( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	angle( arg0:any /*org.joml.Vector3dc*/ ):double;
	angleCos( arg0:any /*org.joml.Vector3dc*/ ):double;
	angleSigned( arg0:any /*org.joml.Vector3dc*/, arg1:any /*org.joml.Vector3dc*/ ):double;
	angleSigned( arg0:double, arg1:double, arg2:double, arg3:double, arg4:double, arg5:double ):double;
	ceil(  ):Vector3d;
	ceil( arg0:Vector3d ):Vector3d;
	clone(  ):any /*java.lang.Object*/;
	cross( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	cross( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	cross( arg0:double, arg1:double, arg2:double ):Vector3d;
	cross( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	distance( arg0:any /*org.joml.Vector3dc*/ ):double;
	distance( arg0:double, arg1:double, arg2:double ):double;
	distanceSquared( arg0:any /*org.joml.Vector3dc*/ ):double;
	distanceSquared( arg0:double, arg1:double, arg2:double ):double;
	div( arg0:Vector3d ):Vector3d;
	div( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	div( arg0:any /*org.joml.Vector3fc*/ ):Vector3d;
	div( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3d ):Vector3d;
	div( arg0:double ):Vector3d;
	div( arg0:double, arg1:Vector3d ):Vector3d;
	div( arg0:double, arg1:double, arg2:double ):Vector3d;
	div( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	dot( arg0:any /*org.joml.Vector3dc*/ ):double;
	dot( arg0:double, arg1:double, arg2:double ):double;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	equals( arg0:any /*org.joml.Vector3dc*/, arg1:double ):boolean;
	equals( arg0:double, arg1:double, arg2:double ):boolean;
	floor(  ):Vector3d;
	floor( arg0:Vector3d ):Vector3d;
	fma( arg0:any /*org.joml.Vector3dc*/, arg1:any /*org.joml.Vector3dc*/ ):Vector3d;
	fma( arg0:any /*org.joml.Vector3dc*/, arg1:any /*org.joml.Vector3dc*/, arg2:Vector3d ):Vector3d;
	fma( arg0:any /*org.joml.Vector3dc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Vector3d ):Vector3d;
	fma( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Vector3d;
	fma( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Vector3d ):Vector3d;
	fma( arg0:double, arg1:any /*org.joml.Vector3dc*/ ):Vector3d;
	fma( arg0:double, arg1:any /*org.joml.Vector3dc*/, arg2:Vector3d ):Vector3d;
	fma( arg0:double, arg1:any /*org.joml.Vector3fc*/ ):Vector3d;
	fma( arg0:double, arg1:any /*org.joml.Vector3fc*/, arg2:Vector3d ):Vector3d;
	get( arg0:Vector3d ):Vector3d;
	get( arg0:Vector3f ):Vector3f;
	get( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get( arg0:any /*java.nio.DoubleBuffer*/ ):any /*java.nio.DoubleBuffer*/;
	get( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get( arg0:int ):double;
	get( arg0:int, arg1:Vector3i ):Vector3i;
	get( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get( arg0:int, arg1:any /*java.nio.DoubleBuffer*/ ):any /*java.nio.DoubleBuffer*/;
	get( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	getToAddress( arg0:long ):any /*org.joml.Vector3dc*/;
	getf( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	getf( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	half( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	half( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	half( arg0:double, arg1:double, arg2:double ):Vector3d;
	half( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	hermite( arg0:any /*org.joml.Vector3dc*/, arg1:any /*org.joml.Vector3dc*/, arg2:any /*org.joml.Vector3dc*/, arg3:double, arg4:Vector3d ):Vector3d;
	isFinite(  ):boolean;
	length(  ):double;
	lengthSquared(  ):double;
	lerp( arg0:any /*org.joml.Vector3dc*/, arg1:double ):Vector3d;
	lerp( arg0:any /*org.joml.Vector3dc*/, arg1:double, arg2:Vector3d ):Vector3d;
	max( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	max( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	maxComponent(  ):int;
	min( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	min( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	minComponent(  ):int;
	mul( arg0:any /*org.joml.Matrix3dc*/ ):Vector3d;
	mul( arg0:any /*org.joml.Matrix3dc*/, arg1:Vector3d ):Vector3d;
	mul( arg0:any /*org.joml.Matrix3dc*/, arg1:Vector3f ):Vector3f;
	mul( arg0:any /*org.joml.Matrix3fc*/ ):Vector3d;
	mul( arg0:any /*org.joml.Matrix3fc*/, arg1:Vector3d ):Vector3d;
	mul( arg0:any /*org.joml.Matrix3x2dc*/ ):Vector3d;
	mul( arg0:any /*org.joml.Matrix3x2dc*/, arg1:Vector3d ):Vector3d;
	mul( arg0:any /*org.joml.Matrix3x2fc*/ ):Vector3d;
	mul( arg0:any /*org.joml.Matrix3x2fc*/, arg1:Vector3d ):Vector3d;
	mul( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	mul( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	mul( arg0:any /*org.joml.Vector3fc*/ ):Vector3d;
	mul( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3d ):Vector3d;
	mul( arg0:double ):Vector3d;
	mul( arg0:double, arg1:Vector3d ):Vector3d;
	mul( arg0:double, arg1:double, arg2:double ):Vector3d;
	mul( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	mulAdd( arg0:any /*org.joml.Vector3dc*/, arg1:any /*org.joml.Vector3dc*/ ):Vector3d;
	mulAdd( arg0:any /*org.joml.Vector3dc*/, arg1:any /*org.joml.Vector3dc*/, arg2:Vector3d ):Vector3d;
	mulAdd( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3dc*/, arg2:Vector3d ):Vector3d;
	mulAdd( arg0:double, arg1:any /*org.joml.Vector3dc*/ ):Vector3d;
	mulAdd( arg0:double, arg1:any /*org.joml.Vector3dc*/, arg2:Vector3d ):Vector3d;
	mulDirection( arg0:any /*org.joml.Matrix4dc*/ ):Vector3d;
	mulDirection( arg0:any /*org.joml.Matrix4dc*/, arg1:Vector3d ):Vector3d;
	mulDirection( arg0:any /*org.joml.Matrix4fc*/ ):Vector3d;
	mulDirection( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3d ):Vector3d;
	mulDirection( arg0:any /*org.joml.Matrix4x3dc*/ ):Vector3d;
	mulDirection( arg0:any /*org.joml.Matrix4x3dc*/, arg1:Vector3d ):Vector3d;
	mulDirection( arg0:any /*org.joml.Matrix4x3fc*/ ):Vector3d;
	mulDirection( arg0:any /*org.joml.Matrix4x3fc*/, arg1:Vector3d ):Vector3d;
	mulPosition( arg0:any /*org.joml.Matrix4dc*/ ):Vector3d;
	mulPosition( arg0:any /*org.joml.Matrix4dc*/, arg1:Vector3d ):Vector3d;
	mulPosition( arg0:any /*org.joml.Matrix4fc*/ ):Vector3d;
	mulPosition( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3d ):Vector3d;
	mulPosition( arg0:any /*org.joml.Matrix4x3dc*/ ):Vector3d;
	mulPosition( arg0:any /*org.joml.Matrix4x3dc*/, arg1:Vector3d ):Vector3d;
	mulPosition( arg0:any /*org.joml.Matrix4x3fc*/ ):Vector3d;
	mulPosition( arg0:any /*org.joml.Matrix4x3fc*/, arg1:Vector3d ):Vector3d;
	mulPositionW( arg0:any /*org.joml.Matrix4dc*/ ):double;
	mulPositionW( arg0:any /*org.joml.Matrix4dc*/, arg1:Vector3d ):double;
	mulPositionW( arg0:any /*org.joml.Matrix4fc*/ ):double;
	mulPositionW( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3d ):double;
	mulProject( arg0:any /*org.joml.Matrix4dc*/ ):Vector3d;
	mulProject( arg0:any /*org.joml.Matrix4dc*/, arg1:Vector3d ):Vector3d;
	mulProject( arg0:any /*org.joml.Matrix4dc*/, arg1:double, arg2:Vector3d ):Vector3d;
	mulProject( arg0:any /*org.joml.Matrix4fc*/ ):Vector3d;
	mulProject( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3d ):Vector3d;
	mulTranspose( arg0:any /*org.joml.Matrix3dc*/ ):Vector3d;
	mulTranspose( arg0:any /*org.joml.Matrix3dc*/, arg1:Vector3d ):Vector3d;
	mulTranspose( arg0:any /*org.joml.Matrix3fc*/ ):Vector3d;
	mulTranspose( arg0:any /*org.joml.Matrix3fc*/, arg1:Vector3d ):Vector3d;
	mulTransposeDirection( arg0:any /*org.joml.Matrix4dc*/ ):Vector3d;
	mulTransposeDirection( arg0:any /*org.joml.Matrix4dc*/, arg1:Vector3d ):Vector3d;
	mulTransposeDirection( arg0:any /*org.joml.Matrix4fc*/ ):Vector3d;
	mulTransposeDirection( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3d ):Vector3d;
	mulTransposePosition( arg0:any /*org.joml.Matrix4dc*/ ):Vector3d;
	mulTransposePosition( arg0:any /*org.joml.Matrix4dc*/, arg1:Vector3d ):Vector3d;
	mulTransposePosition( arg0:any /*org.joml.Matrix4fc*/ ):Vector3d;
	mulTransposePosition( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3d ):Vector3d;
	negate(  ):Vector3d;
	negate( arg0:Vector3d ):Vector3d;
	normalize(  ):Vector3d;
	normalize( arg0:Vector3d ):Vector3d;
	normalize( arg0:double ):Vector3d;
	normalize( arg0:double, arg1:Vector3d ):Vector3d;
	orthogonalize( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	orthogonalize( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	orthogonalizeUnit( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	orthogonalizeUnit( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	readExternal( arg0:any /*java.io.ObjectInput*/ ):void;
	reflect( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	reflect( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	reflect( arg0:double, arg1:double, arg2:double ):Vector3d;
	reflect( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	rotate( arg0:any /*org.joml.Quaterniondc*/ ):Vector3d;
	rotate( arg0:any /*org.joml.Quaterniondc*/, arg1:Vector3d ):Vector3d;
	rotateAxis( arg0:double, arg1:double, arg2:double, arg3:double ):Vector3d;
	rotateAxis( arg0:double, arg1:double, arg2:double, arg3:double, arg4:Vector3d ):Vector3d;
	rotateX( arg0:double ):Vector3d;
	rotateX( arg0:double, arg1:Vector3d ):Vector3d;
	rotateY( arg0:double ):Vector3d;
	rotateY( arg0:double, arg1:Vector3d ):Vector3d;
	rotateZ( arg0:double ):Vector3d;
	rotateZ( arg0:double, arg1:Vector3d ):Vector3d;
	rotationTo( arg0:any /*org.joml.Vector3dc*/, arg1:any /*org.joml.Quaterniond*/ ):any /*org.joml.Quaterniond*/;
	rotationTo( arg0:double, arg1:double, arg2:double, arg3:any /*org.joml.Quaterniond*/ ):any /*org.joml.Quaterniond*/;
	round(  ):Vector3d;
	round( arg0:Vector3d ):Vector3d;
	set( arg0:[double] ):Vector3d;
	set( arg0:[float] ):Vector3d;
	set( arg0:any /*java.nio.ByteBuffer*/ ):Vector3d;
	set( arg0:any /*java.nio.DoubleBuffer*/ ):Vector3d;
	set( arg0:any /*org.joml.Vector2dc*/, arg1:double ):Vector3d;
	set( arg0:any /*org.joml.Vector2fc*/, arg1:double ):Vector3d;
	set( arg0:any /*org.joml.Vector2ic*/, arg1:double ):Vector3d;
	set( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	set( arg0:any /*org.joml.Vector3fc*/ ):Vector3d;
	set( arg0:any /*org.joml.Vector3ic*/ ):Vector3d;
	set( arg0:double ):Vector3d;
	set( arg0:double, arg1:double, arg2:double ):Vector3d;
	set( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):Vector3d;
	set( arg0:int, arg1:any /*java.nio.DoubleBuffer*/ ):Vector3d;
	setComponent( arg0:int, arg1:double ):Vector3d;
	setFromAddress( arg0:long ):Vector3d;
	smoothStep( arg0:any /*org.joml.Vector3dc*/, arg1:double, arg2:Vector3d ):Vector3d;
	static distance( arg0:double, arg1:double, arg2:double, arg3:double, arg4:double, arg5:double ):double;
	static distanceSquared( arg0:double, arg1:double, arg2:double, arg3:double, arg4:double, arg5:double ):double;
	static length( arg0:double, arg1:double, arg2:double ):double;
	static lengthSquared( arg0:double, arg1:double, arg2:double ):double;
	sub( arg0:any /*org.joml.Vector3dc*/ ):Vector3d;
	sub( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	sub( arg0:any /*org.joml.Vector3fc*/ ):Vector3d;
	sub( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3d ):Vector3d;
	sub( arg0:double, arg1:double, arg2:double ):Vector3d;
	sub( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	toString(  ):string;
	toString( arg0:any /*java.text.NumberFormat*/ ):string;
	writeExternal( arg0:any /*java.io.ObjectOutput*/ ):void;
	x(  ):double;
	y(  ):double;
	z(  ):double;
	zero(  ):Vector3d;

} // end Vector3d

} // end namespace org.joml

declare namespace org.joml {

class Vector3f/* extends java.lang.Object implements java.io.Externalizable, java.lang.Cloneable, Vector3fc*/ {

	absolute(  ):Vector3f;
	absolute( arg0:Vector3f ):Vector3f;
	add( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	add( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	add( arg0:float, arg1:float, arg2:float ):Vector3f;
	add( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	angle( arg0:any /*org.joml.Vector3fc*/ ):float;
	angleCos( arg0:any /*org.joml.Vector3fc*/ ):float;
	angleSigned( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):float;
	angleSigned( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):float;
	ceil(  ):Vector3f;
	ceil( arg0:Vector3f ):Vector3f;
	clone(  ):any /*java.lang.Object*/;
	cross( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	cross( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	cross( arg0:float, arg1:float, arg2:float ):Vector3f;
	cross( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	distance( arg0:any /*org.joml.Vector3fc*/ ):float;
	distance( arg0:float, arg1:float, arg2:float ):float;
	distanceSquared( arg0:any /*org.joml.Vector3fc*/ ):float;
	distanceSquared( arg0:float, arg1:float, arg2:float ):float;
	div( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	div( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	div( arg0:float ):Vector3f;
	div( arg0:float, arg1:Vector3f ):Vector3f;
	div( arg0:float, arg1:float, arg2:float ):Vector3f;
	div( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	dot( arg0:any /*org.joml.Vector3fc*/ ):float;
	dot( arg0:float, arg1:float, arg2:float ):float;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	equals( arg0:any /*org.joml.Vector3fc*/, arg1:float ):boolean;
	equals( arg0:float, arg1:float, arg2:float ):boolean;
	floor(  ):Vector3f;
	floor( arg0:Vector3f ):Vector3f;
	fma( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Vector3f;
	fma( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Vector3f ):Vector3f;
	fma( arg0:float, arg1:any /*org.joml.Vector3fc*/ ):Vector3f;
	fma( arg0:float, arg1:any /*org.joml.Vector3fc*/, arg2:Vector3f ):Vector3f;
	get( arg0:Vector3d ):Vector3d;
	get( arg0:Vector3f ):Vector3f;
	get( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get( arg0:int ):float;
	get( arg0:int, arg1:Vector3i ):Vector3i;
	get( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	getToAddress( arg0:long ):any /*org.joml.Vector3fc*/;
	half( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	half( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	half( arg0:float, arg1:float, arg2:float ):Vector3f;
	half( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	hermite( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:any /*org.joml.Vector3fc*/, arg3:float, arg4:Vector3f ):Vector3f;
	isFinite(  ):boolean;
	length(  ):float;
	lengthSquared(  ):float;
	lerp( arg0:any /*org.joml.Vector3fc*/, arg1:float ):Vector3f;
	lerp( arg0:any /*org.joml.Vector3fc*/, arg1:float, arg2:Vector3f ):Vector3f;
	max( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	max( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	maxComponent(  ):int;
	min( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	min( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	minComponent(  ):int;
	mul( arg0:any /*org.joml.Matrix3dc*/ ):Vector3f;
	mul( arg0:any /*org.joml.Matrix3dc*/, arg1:Vector3f ):Vector3f;
	mul( arg0:any /*org.joml.Matrix3fc*/ ):Vector3f;
	mul( arg0:any /*org.joml.Matrix3fc*/, arg1:Vector3f ):Vector3f;
	mul( arg0:any /*org.joml.Matrix3x2fc*/ ):Vector3f;
	mul( arg0:any /*org.joml.Matrix3x2fc*/, arg1:Vector3f ):Vector3f;
	mul( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	mul( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	mul( arg0:float ):Vector3f;
	mul( arg0:float, arg1:Vector3f ):Vector3f;
	mul( arg0:float, arg1:float, arg2:float ):Vector3f;
	mul( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	mulAdd( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Vector3f;
	mulAdd( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Vector3f ):Vector3f;
	mulAdd( arg0:float, arg1:any /*org.joml.Vector3fc*/ ):Vector3f;
	mulAdd( arg0:float, arg1:any /*org.joml.Vector3fc*/, arg2:Vector3f ):Vector3f;
	mulDirection( arg0:any /*org.joml.Matrix4dc*/ ):Vector3f;
	mulDirection( arg0:any /*org.joml.Matrix4dc*/, arg1:Vector3f ):Vector3f;
	mulDirection( arg0:any /*org.joml.Matrix4fc*/ ):Vector3f;
	mulDirection( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3f ):Vector3f;
	mulDirection( arg0:any /*org.joml.Matrix4x3fc*/ ):Vector3f;
	mulDirection( arg0:any /*org.joml.Matrix4x3fc*/, arg1:Vector3f ):Vector3f;
	mulPosition( arg0:any /*org.joml.Matrix4fc*/ ):Vector3f;
	mulPosition( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3f ):Vector3f;
	mulPosition( arg0:any /*org.joml.Matrix4x3fc*/ ):Vector3f;
	mulPosition( arg0:any /*org.joml.Matrix4x3fc*/, arg1:Vector3f ):Vector3f;
	mulPositionW( arg0:any /*org.joml.Matrix4fc*/ ):float;
	mulPositionW( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3f ):float;
	mulProject( arg0:any /*org.joml.Matrix4fc*/ ):Vector3f;
	mulProject( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3f ):Vector3f;
	mulProject( arg0:any /*org.joml.Matrix4fc*/, arg1:float, arg2:Vector3f ):Vector3f;
	mulTranspose( arg0:any /*org.joml.Matrix3fc*/ ):Vector3f;
	mulTranspose( arg0:any /*org.joml.Matrix3fc*/, arg1:Vector3f ):Vector3f;
	mulTransposeDirection( arg0:any /*org.joml.Matrix4fc*/ ):Vector3f;
	mulTransposeDirection( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3f ):Vector3f;
	mulTransposePosition( arg0:any /*org.joml.Matrix4fc*/ ):Vector3f;
	mulTransposePosition( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3f ):Vector3f;
	negate(  ):Vector3f;
	negate( arg0:Vector3f ):Vector3f;
	normalize(  ):Vector3f;
	normalize( arg0:Vector3f ):Vector3f;
	normalize( arg0:float ):Vector3f;
	normalize( arg0:float, arg1:Vector3f ):Vector3f;
	orthogonalize( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	orthogonalize( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	orthogonalizeUnit( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	orthogonalizeUnit( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	readExternal( arg0:any /*java.io.ObjectInput*/ ):void;
	reflect( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	reflect( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	reflect( arg0:float, arg1:float, arg2:float ):Vector3f;
	reflect( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	rotate( arg0:any /*org.joml.Quaternionfc*/ ):Vector3f;
	rotate( arg0:any /*org.joml.Quaternionfc*/, arg1:Vector3f ):Vector3f;
	rotateAxis( arg0:float, arg1:float, arg2:float, arg3:float ):Vector3f;
	rotateAxis( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector3f ):Vector3f;
	rotateX( arg0:float ):Vector3f;
	rotateX( arg0:float, arg1:Vector3f ):Vector3f;
	rotateY( arg0:float ):Vector3f;
	rotateY( arg0:float, arg1:Vector3f ):Vector3f;
	rotateZ( arg0:float ):Vector3f;
	rotateZ( arg0:float, arg1:Vector3f ):Vector3f;
	rotationTo( arg0:any /*org.joml.Vector3fc*/, arg1:Quaternionf ):Quaternionf;
	rotationTo( arg0:float, arg1:float, arg2:float, arg3:Quaternionf ):Quaternionf;
	round(  ):Vector3f;
	round( arg0:Vector3f ):Vector3f;
	set( arg0:[float] ):Vector3f;
	set( arg0:any /*java.nio.ByteBuffer*/ ):Vector3f;
	set( arg0:any /*java.nio.FloatBuffer*/ ):Vector3f;
	set( arg0:any /*org.joml.Vector2dc*/, arg1:float ):Vector3f;
	set( arg0:any /*org.joml.Vector2fc*/, arg1:float ):Vector3f;
	set( arg0:any /*org.joml.Vector2ic*/, arg1:float ):Vector3f;
	set( arg0:any /*org.joml.Vector3dc*/ ):Vector3f;
	set( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	set( arg0:any /*org.joml.Vector3ic*/ ):Vector3f;
	set( arg0:double ):Vector3f;
	set( arg0:double, arg1:double, arg2:double ):Vector3f;
	set( arg0:float ):Vector3f;
	set( arg0:float, arg1:float, arg2:float ):Vector3f;
	set( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):Vector3f;
	set( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):Vector3f;
	setComponent( arg0:int, arg1:float ):Vector3f;
	setFromAddress( arg0:long ):Vector3f;
	smoothStep( arg0:any /*org.joml.Vector3fc*/, arg1:float, arg2:Vector3f ):Vector3f;
	static distance( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):float;
	static distanceSquared( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):float;
	static length( arg0:float, arg1:float, arg2:float ):float;
	static lengthSquared( arg0:float, arg1:float, arg2:float ):float;
	sub( arg0:any /*org.joml.Vector3fc*/ ):Vector3f;
	sub( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	sub( arg0:float, arg1:float, arg2:float ):Vector3f;
	sub( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	toString(  ):string;
	toString( arg0:any /*java.text.NumberFormat*/ ):string;
	writeExternal( arg0:any /*java.io.ObjectOutput*/ ):void;
	x(  ):float;
	y(  ):float;
	z(  ):float;
	zero(  ):Vector3f;

} // end Vector3f

} // end namespace org.joml

declare namespace org.joml {

class Vector3i/* extends java.lang.Object implements java.io.Externalizable, java.lang.Cloneable, Vector3ic*/ {

	absolute(  ):Vector3i;
	absolute( arg0:Vector3i ):Vector3i;
	add( arg0:any /*org.joml.Vector3ic*/ ):Vector3i;
	add( arg0:any /*org.joml.Vector3ic*/, arg1:Vector3i ):Vector3i;
	add( arg0:int, arg1:int, arg2:int ):Vector3i;
	add( arg0:int, arg1:int, arg2:int, arg3:Vector3i ):Vector3i;
	clone(  ):any /*java.lang.Object*/;
	distance( arg0:any /*org.joml.Vector3ic*/ ):double;
	distance( arg0:int, arg1:int, arg2:int ):double;
	distanceSquared( arg0:any /*org.joml.Vector3ic*/ ):long;
	distanceSquared( arg0:int, arg1:int, arg2:int ):long;
	div( arg0:float ):Vector3i;
	div( arg0:float, arg1:Vector3i ):Vector3i;
	div( arg0:int ):Vector3i;
	div( arg0:int, arg1:Vector3i ):Vector3i;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	equals( arg0:int, arg1:int, arg2:int ):boolean;
	get( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get( arg0:any /*java.nio.IntBuffer*/ ):any /*java.nio.IntBuffer*/;
	get( arg0:int ):int;
	get( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get( arg0:int, arg1:any /*java.nio.IntBuffer*/ ):any /*java.nio.IntBuffer*/;
	getToAddress( arg0:long ):any /*org.joml.Vector3ic*/;
	gridDistance( arg0:any /*org.joml.Vector3ic*/ ):long;
	gridDistance( arg0:int, arg1:int, arg2:int ):long;
	length(  ):double;
	lengthSquared(  ):long;
	max( arg0:any /*org.joml.Vector3ic*/ ):Vector3i;
	max( arg0:any /*org.joml.Vector3ic*/, arg1:Vector3i ):Vector3i;
	maxComponent(  ):int;
	min( arg0:any /*org.joml.Vector3ic*/ ):Vector3i;
	min( arg0:any /*org.joml.Vector3ic*/, arg1:Vector3i ):Vector3i;
	minComponent(  ):int;
	mul( arg0:any /*org.joml.Vector3ic*/ ):Vector3i;
	mul( arg0:any /*org.joml.Vector3ic*/, arg1:Vector3i ):Vector3i;
	mul( arg0:int ):Vector3i;
	mul( arg0:int, arg1:Vector3i ):Vector3i;
	mul( arg0:int, arg1:int, arg2:int ):Vector3i;
	mul( arg0:int, arg1:int, arg2:int, arg3:Vector3i ):Vector3i;
	negate(  ):Vector3i;
	negate( arg0:Vector3i ):Vector3i;
	readExternal( arg0:any /*java.io.ObjectInput*/ ):void;
	set( arg0:[int] ):Vector3i;
	set( arg0:any /*java.nio.ByteBuffer*/ ):Vector3i;
	set( arg0:any /*java.nio.IntBuffer*/ ):Vector3i;
	set( arg0:any /*org.joml.Vector2ic*/, arg1:int ):Vector3i;
	set( arg0:any /*org.joml.Vector3dc*/ ):Vector3i;
	set( arg0:any /*org.joml.Vector3dc*/, arg1:int ):Vector3i;
	set( arg0:any /*org.joml.Vector3fc*/, arg1:int ):Vector3i;
	set( arg0:any /*org.joml.Vector3ic*/ ):Vector3i;
	set( arg0:int ):Vector3i;
	set( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):Vector3i;
	set( arg0:int, arg1:any /*java.nio.IntBuffer*/ ):Vector3i;
	set( arg0:int, arg1:int, arg2:int ):Vector3i;
	setComponent( arg0:int, arg1:int ):Vector3i;
	setFromAddress( arg0:long ):Vector3i;
	static distance( arg0:int, arg1:int, arg2:int, arg3:int, arg4:int, arg5:int ):double;
	static distanceSquared( arg0:int, arg1:int, arg2:int, arg3:int, arg4:int, arg5:int ):long;
	static length( arg0:int, arg1:int, arg2:int ):double;
	static lengthSquared( arg0:int, arg1:int, arg2:int ):long;
	sub( arg0:any /*org.joml.Vector3ic*/ ):Vector3i;
	sub( arg0:any /*org.joml.Vector3ic*/, arg1:Vector3i ):Vector3i;
	sub( arg0:int, arg1:int, arg2:int ):Vector3i;
	sub( arg0:int, arg1:int, arg2:int, arg3:Vector3i ):Vector3i;
	toString(  ):string;
	toString( arg0:any /*java.text.NumberFormat*/ ):string;
	writeExternal( arg0:any /*java.io.ObjectOutput*/ ):void;
	x(  ):int;
	y(  ):int;
	z(  ):int;
	zero(  ):Vector3i;

} // end Vector3i

} // end namespace org.joml

declare namespace org.joml {

class Vector4f/* extends java.lang.Object implements java.io.Externalizable, java.lang.Cloneable, Vector4fc*/ {

	absolute(  ):Vector4f;
	absolute( arg0:Vector4f ):Vector4f;
	add( arg0:any /*org.joml.Vector4fc*/ ):Vector4f;
	add( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	add( arg0:float, arg1:float, arg2:float, arg3:float ):Vector4f;
	add( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector4f ):Vector4f;
	angle( arg0:any /*org.joml.Vector4fc*/ ):float;
	angleCos( arg0:any /*org.joml.Vector4fc*/ ):float;
	ceil(  ):Vector4f;
	ceil( arg0:Vector4f ):Vector4f;
	clone(  ):any /*java.lang.Object*/;
	distance( arg0:any /*org.joml.Vector4fc*/ ):float;
	distance( arg0:float, arg1:float, arg2:float, arg3:float ):float;
	distanceSquared( arg0:any /*org.joml.Vector4fc*/ ):float;
	distanceSquared( arg0:float, arg1:float, arg2:float, arg3:float ):float;
	div( arg0:any /*org.joml.Vector4fc*/ ):Vector4f;
	div( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	div( arg0:float ):Vector4f;
	div( arg0:float, arg1:Vector4f ):Vector4f;
	div( arg0:float, arg1:float, arg2:float, arg3:float ):Vector4f;
	div( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector4f ):Vector4f;
	dot( arg0:any /*org.joml.Vector4fc*/ ):float;
	dot( arg0:float, arg1:float, arg2:float, arg3:float ):float;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	equals( arg0:any /*org.joml.Vector4fc*/, arg1:float ):boolean;
	equals( arg0:float, arg1:float, arg2:float, arg3:float ):boolean;
	floor(  ):Vector4f;
	floor( arg0:Vector4f ):Vector4f;
	fma( arg0:any /*org.joml.Vector4fc*/, arg1:any /*org.joml.Vector4fc*/ ):Vector4f;
	fma( arg0:any /*org.joml.Vector4fc*/, arg1:any /*org.joml.Vector4fc*/, arg2:Vector4f ):Vector4f;
	fma( arg0:float, arg1:any /*org.joml.Vector4fc*/ ):Vector4f;
	fma( arg0:float, arg1:any /*org.joml.Vector4fc*/, arg2:Vector4f ):Vector4f;
	get( arg0:Vector4f ):Vector4f;
	get( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	get( arg0:int ):float;
	get( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get( arg0:int, arg1:any /*org.joml.Vector4i*/ ):any /*org.joml.Vector4i*/;
	getToAddress( arg0:long ):any /*org.joml.Vector4fc*/;
	hermite( arg0:any /*org.joml.Vector4fc*/, arg1:any /*org.joml.Vector4fc*/, arg2:any /*org.joml.Vector4fc*/, arg3:float, arg4:Vector4f ):Vector4f;
	isFinite(  ):boolean;
	length(  ):float;
	lengthSquared(  ):float;
	lerp( arg0:any /*org.joml.Vector4fc*/, arg1:float ):Vector4f;
	lerp( arg0:any /*org.joml.Vector4fc*/, arg1:float, arg2:Vector4f ):Vector4f;
	max( arg0:any /*org.joml.Vector4fc*/ ):Vector4f;
	max( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	maxComponent(  ):int;
	min( arg0:any /*org.joml.Vector4fc*/ ):Vector4f;
	min( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	minComponent(  ):int;
	mul( arg0:any /*org.joml.Matrix4fc*/ ):Vector4f;
	mul( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector4f ):Vector4f;
	mul( arg0:any /*org.joml.Matrix4x3fc*/ ):Vector4f;
	mul( arg0:any /*org.joml.Matrix4x3fc*/, arg1:Vector4f ):Vector4f;
	mul( arg0:any /*org.joml.Vector4fc*/ ):Vector4f;
	mul( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	mul( arg0:float ):Vector4f;
	mul( arg0:float, arg1:Vector4f ):Vector4f;
	mul( arg0:float, arg1:float, arg2:float, arg3:float ):Vector4f;
	mul( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector4f ):Vector4f;
	mulAdd( arg0:any /*org.joml.Vector4fc*/, arg1:any /*org.joml.Vector4fc*/ ):Vector4f;
	mulAdd( arg0:any /*org.joml.Vector4fc*/, arg1:any /*org.joml.Vector4fc*/, arg2:Vector4f ):Vector4f;
	mulAdd( arg0:float, arg1:any /*org.joml.Vector4fc*/ ):Vector4f;
	mulAdd( arg0:float, arg1:any /*org.joml.Vector4fc*/, arg2:Vector4f ):Vector4f;
	mulAffine( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector4f ):Vector4f;
	mulAffineTranspose( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector4f ):Vector4f;
	mulProject( arg0:any /*org.joml.Matrix4fc*/ ):Vector4f;
	mulProject( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector3f ):Vector3f;
	mulProject( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector4f ):Vector4f;
	mulTranspose( arg0:any /*org.joml.Matrix4fc*/ ):Vector4f;
	mulTranspose( arg0:any /*org.joml.Matrix4fc*/, arg1:Vector4f ):Vector4f;
	negate(  ):Vector4f;
	negate( arg0:Vector4f ):Vector4f;
	normalize(  ):Vector4f;
	normalize( arg0:Vector4f ):Vector4f;
	normalize( arg0:float ):Vector4f;
	normalize( arg0:float, arg1:Vector4f ):Vector4f;
	normalize3(  ):Vector4f;
	normalize3( arg0:Vector4f ):Vector4f;
	readExternal( arg0:any /*java.io.ObjectInput*/ ):void;
	rotate( arg0:any /*org.joml.Quaternionfc*/ ):Vector4f;
	rotate( arg0:any /*org.joml.Quaternionfc*/, arg1:Vector4f ):Vector4f;
	rotateAbout( arg0:float, arg1:float, arg2:float, arg3:float ):Vector4f;
	rotateAxis( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector4f ):Vector4f;
	rotateX( arg0:float ):Vector4f;
	rotateX( arg0:float, arg1:Vector4f ):Vector4f;
	rotateY( arg0:float ):Vector4f;
	rotateY( arg0:float, arg1:Vector4f ):Vector4f;
	rotateZ( arg0:float ):Vector4f;
	rotateZ( arg0:float, arg1:Vector4f ):Vector4f;
	round(  ):Vector4f;
	round( arg0:Vector4f ):Vector4f;
	set( arg0:[float] ):Vector4f;
	set( arg0:any /*java.nio.ByteBuffer*/ ):Vector4f;
	set( arg0:any /*java.nio.FloatBuffer*/ ):Vector4f;
	set( arg0:any /*org.joml.Vector2fc*/, arg1:float, arg2:float ):Vector4f;
	set( arg0:any /*org.joml.Vector2ic*/, arg1:float, arg2:float ):Vector4f;
	set( arg0:any /*org.joml.Vector3fc*/, arg1:float ):Vector4f;
	set( arg0:any /*org.joml.Vector3ic*/, arg1:float ):Vector4f;
	set( arg0:any /*org.joml.Vector4dc*/ ):Vector4f;
	set( arg0:any /*org.joml.Vector4fc*/ ):Vector4f;
	set( arg0:any /*org.joml.Vector4ic*/ ):Vector4f;
	set( arg0:double ):Vector4f;
	set( arg0:double, arg1:double, arg2:double, arg3:double ):Vector4f;
	set( arg0:float ):Vector4f;
	set( arg0:float, arg1:float, arg2:float ):Vector4f;
	set( arg0:float, arg1:float, arg2:float, arg3:float ):Vector4f;
	set( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):Vector4f;
	set( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):Vector4f;
	setComponent( arg0:int, arg1:float ):Vector4f;
	setFromAddress( arg0:long ):Vector4f;
	smoothStep( arg0:any /*org.joml.Vector4fc*/, arg1:float, arg2:Vector4f ):Vector4f;
	static distance( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float ):float;
	static distanceSquared( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float ):float;
	static length( arg0:float, arg1:float, arg2:float, arg3:float ):float;
	static lengthSquared( arg0:float, arg1:float, arg2:float, arg3:float ):float;
	static lengthSquared( arg0:int, arg1:int, arg2:int, arg3:int ):float;
	sub( arg0:any /*org.joml.Vector4fc*/ ):Vector4f;
	sub( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	sub( arg0:float, arg1:float, arg2:float, arg3:float ):Vector4f;
	sub( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector4f ):Vector4f;
	toString(  ):string;
	toString( arg0:any /*java.text.NumberFormat*/ ):string;
	w(  ):float;
	writeExternal( arg0:any /*java.io.ObjectOutput*/ ):void;
	x(  ):float;
	y(  ):float;
	z(  ):float;
	zero(  ):Vector4f;

} // end Vector4f

} // end namespace org.joml

declare namespace org.joml {

class Matrix4f/* extends java.lang.Object implements java.io.Externalizable, java.lang.Cloneable, Matrix4fc*/ {

	add( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	add( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	add4x3( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	add4x3( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	affineSpan( arg0:Vector3f, arg1:Vector3f, arg2:Vector3f, arg3:Vector3f ):Matrix4f;
	arcball( arg0:float, arg1:any /*org.joml.Vector3fc*/, arg2:float, arg3:float ):Matrix4f;
	arcball( arg0:float, arg1:any /*org.joml.Vector3fc*/, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	arcball( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	arcball( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	assume( arg0:int ):Matrix4f;
	billboardCylindrical( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:any /*org.joml.Vector3fc*/ ):Matrix4f;
	billboardSpherical( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	billboardSpherical( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:any /*org.joml.Vector3fc*/ ):Matrix4f;
	clone(  ):any /*java.lang.Object*/;
	cofactor3x3(  ):Matrix4f;
	cofactor3x3( arg0:Matrix4f ):Matrix4f;
	cofactor3x3( arg0:any /*org.joml.Matrix3f*/ ):any /*org.joml.Matrix3f*/;
	determinant(  ):float;
	determinant3x3(  ):float;
	determinantAffine(  ):float;
	determineProperties(  ):Matrix4f;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	equals( arg0:any /*org.joml.Matrix4fc*/, arg1:float ):boolean;
	fma4x3( arg0:any /*org.joml.Matrix4fc*/, arg1:float ):Matrix4f;
	fma4x3( arg0:any /*org.joml.Matrix4fc*/, arg1:float, arg2:Matrix4f ):Matrix4f;
	frustum( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	frustum( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	frustum( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	frustum( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean, arg7:Matrix4f ):Matrix4f;
	frustumAabb( arg0:Vector3f, arg1:Vector3f ):Matrix4f;
	frustumCorner( arg0:int, arg1:Vector3f ):Vector3f;
	frustumLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	frustumLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	frustumLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	frustumLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean, arg7:Matrix4f ):Matrix4f;
	frustumPlane( arg0:int, arg1:Vector4f ):Vector4f;
	frustumRayDir( arg0:float, arg1:float, arg2:Vector3f ):Vector3f;
	get( arg0:Matrix4f ):Matrix4f;
	get( arg0:[float] ):[float];
	get( arg0:[float], arg1:int ):[float];
	get( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get( arg0:any /*org.joml.Matrix4d*/ ):any /*org.joml.Matrix4d*/;
	get( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get( arg0:int, arg1:int ):float;
	get3x3( arg0:any /*org.joml.Matrix3d*/ ):any /*org.joml.Matrix3d*/;
	get3x3( arg0:any /*org.joml.Matrix3f*/ ):any /*org.joml.Matrix3f*/;
	get3x4( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get3x4( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get3x4( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get3x4( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get4x3( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get4x3( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get4x3( arg0:any /*org.joml.Matrix4x3f*/ ):any /*org.joml.Matrix4x3f*/;
	get4x3( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get4x3( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get4x3Transposed( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get4x3Transposed( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	get4x3Transposed( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	get4x3Transposed( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	getColumn( arg0:int, arg1:Vector3f ):Vector3f;
	getColumn( arg0:int, arg1:Vector4f ):Vector4f;
	getEulerAnglesXYZ( arg0:Vector3f ):Vector3f;
	getEulerAnglesZYX( arg0:Vector3f ):Vector3f;
	getNormalizedRotation( arg0:Quaternionf ):Quaternionf;
	getNormalizedRotation( arg0:any /*org.joml.Quaterniond*/ ):any /*org.joml.Quaterniond*/;
	getRotation( arg0:any /*org.joml.AxisAngle4d*/ ):any /*org.joml.AxisAngle4d*/;
	getRotation( arg0:any /*org.joml.AxisAngle4f*/ ):any /*org.joml.AxisAngle4f*/;
	getRow( arg0:int, arg1:Vector3f ):Vector3f;
	getRow( arg0:int, arg1:Vector4f ):Vector4f;
	getRowColumn( arg0:int, arg1:int ):float;
	getScale( arg0:Vector3f ):Vector3f;
	getToAddress( arg0:long ):any /*org.joml.Matrix4fc*/;
	getTranslation( arg0:Vector3f ):Vector3f;
	getTransposed( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	getTransposed( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	getTransposed( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	getTransposed( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	getUnnormalizedRotation( arg0:Quaternionf ):Quaternionf;
	getUnnormalizedRotation( arg0:any /*org.joml.Quaterniond*/ ):any /*org.joml.Quaterniond*/;
	identity(  ):Matrix4f;
	invert(  ):Matrix4f;
	invert( arg0:Matrix4f ):Matrix4f;
	invertAffine(  ):Matrix4f;
	invertAffine( arg0:Matrix4f ):Matrix4f;
	invertFrustum(  ):Matrix4f;
	invertFrustum( arg0:Matrix4f ):Matrix4f;
	invertOrtho(  ):Matrix4f;
	invertOrtho( arg0:Matrix4f ):Matrix4f;
	invertPerspective(  ):Matrix4f;
	invertPerspective( arg0:Matrix4f ):Matrix4f;
	invertPerspectiveView( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	invertPerspectiveView( arg0:any /*org.joml.Matrix4x3fc*/, arg1:Matrix4f ):Matrix4f;
	isAffine(  ):boolean;
	isFinite(  ):boolean;
	lerp( arg0:any /*org.joml.Matrix4fc*/, arg1:float ):Matrix4f;
	lerp( arg0:any /*org.joml.Matrix4fc*/, arg1:float, arg2:Matrix4f ):Matrix4f;
	lookAlong( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	lookAlong( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Matrix4f ):Matrix4f;
	lookAlong( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	lookAlong( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	lookAt( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:any /*org.joml.Vector3fc*/ ):Matrix4f;
	lookAt( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:any /*org.joml.Vector3fc*/, arg3:Matrix4f ):Matrix4f;
	lookAt( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float ):Matrix4f;
	lookAt( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:Matrix4f ):Matrix4f;
	lookAtLH( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:any /*org.joml.Vector3fc*/ ):Matrix4f;
	lookAtLH( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:any /*org.joml.Vector3fc*/, arg3:Matrix4f ):Matrix4f;
	lookAtLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float ):Matrix4f;
	lookAtLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:Matrix4f ):Matrix4f;
	lookAtPerspective( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:Matrix4f ):Matrix4f;
	lookAtPerspectiveLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:Matrix4f ):Matrix4f;
	m00(  ):float;
	m00( arg0:float ):Matrix4f;
	m01(  ):float;
	m01( arg0:float ):Matrix4f;
	m02(  ):float;
	m02( arg0:float ):Matrix4f;
	m03(  ):float;
	m03( arg0:float ):Matrix4f;
	m10(  ):float;
	m10( arg0:float ):Matrix4f;
	m11(  ):float;
	m11( arg0:float ):Matrix4f;
	m12(  ):float;
	m12( arg0:float ):Matrix4f;
	m13(  ):float;
	m13( arg0:float ):Matrix4f;
	m20(  ):float;
	m20( arg0:float ):Matrix4f;
	m21(  ):float;
	m21( arg0:float ):Matrix4f;
	m22(  ):float;
	m22( arg0:float ):Matrix4f;
	m23(  ):float;
	m23( arg0:float ):Matrix4f;
	m30(  ):float;
	m30( arg0:float ):Matrix4f;
	m31(  ):float;
	m31( arg0:float ):Matrix4f;
	m32(  ):float;
	m32( arg0:float ):Matrix4f;
	m33(  ):float;
	m33( arg0:float ):Matrix4f;
	mapXZY(  ):Matrix4f;
	mapXZY( arg0:Matrix4f ):Matrix4f;
	mapXZnY(  ):Matrix4f;
	mapXZnY( arg0:Matrix4f ):Matrix4f;
	mapXnYnZ(  ):Matrix4f;
	mapXnYnZ( arg0:Matrix4f ):Matrix4f;
	mapXnZY(  ):Matrix4f;
	mapXnZY( arg0:Matrix4f ):Matrix4f;
	mapXnZnY(  ):Matrix4f;
	mapXnZnY( arg0:Matrix4f ):Matrix4f;
	mapYXZ(  ):Matrix4f;
	mapYXZ( arg0:Matrix4f ):Matrix4f;
	mapYXnZ(  ):Matrix4f;
	mapYXnZ( arg0:Matrix4f ):Matrix4f;
	mapYZX(  ):Matrix4f;
	mapYZX( arg0:Matrix4f ):Matrix4f;
	mapYZnX(  ):Matrix4f;
	mapYZnX( arg0:Matrix4f ):Matrix4f;
	mapYnXZ(  ):Matrix4f;
	mapYnXZ( arg0:Matrix4f ):Matrix4f;
	mapYnXnZ(  ):Matrix4f;
	mapYnXnZ( arg0:Matrix4f ):Matrix4f;
	mapYnZX(  ):Matrix4f;
	mapYnZX( arg0:Matrix4f ):Matrix4f;
	mapYnZnX(  ):Matrix4f;
	mapYnZnX( arg0:Matrix4f ):Matrix4f;
	mapZXY(  ):Matrix4f;
	mapZXY( arg0:Matrix4f ):Matrix4f;
	mapZXnY(  ):Matrix4f;
	mapZXnY( arg0:Matrix4f ):Matrix4f;
	mapZYX(  ):Matrix4f;
	mapZYX( arg0:Matrix4f ):Matrix4f;
	mapZYnX(  ):Matrix4f;
	mapZYnX( arg0:Matrix4f ):Matrix4f;
	mapZnXY(  ):Matrix4f;
	mapZnXY( arg0:Matrix4f ):Matrix4f;
	mapZnXnY(  ):Matrix4f;
	mapZnXnY( arg0:Matrix4f ):Matrix4f;
	mapZnYX(  ):Matrix4f;
	mapZnYX( arg0:Matrix4f ):Matrix4f;
	mapZnYnX(  ):Matrix4f;
	mapZnYnX( arg0:Matrix4f ):Matrix4f;
	mapnXYnZ(  ):Matrix4f;
	mapnXYnZ( arg0:Matrix4f ):Matrix4f;
	mapnXZY(  ):Matrix4f;
	mapnXZY( arg0:Matrix4f ):Matrix4f;
	mapnXZnY(  ):Matrix4f;
	mapnXZnY( arg0:Matrix4f ):Matrix4f;
	mapnXnYZ(  ):Matrix4f;
	mapnXnYZ( arg0:Matrix4f ):Matrix4f;
	mapnXnYnZ(  ):Matrix4f;
	mapnXnYnZ( arg0:Matrix4f ):Matrix4f;
	mapnXnZY(  ):Matrix4f;
	mapnXnZY( arg0:Matrix4f ):Matrix4f;
	mapnXnZnY(  ):Matrix4f;
	mapnXnZnY( arg0:Matrix4f ):Matrix4f;
	mapnYXZ(  ):Matrix4f;
	mapnYXZ( arg0:Matrix4f ):Matrix4f;
	mapnYXnZ(  ):Matrix4f;
	mapnYXnZ( arg0:Matrix4f ):Matrix4f;
	mapnYZX(  ):Matrix4f;
	mapnYZX( arg0:Matrix4f ):Matrix4f;
	mapnYZnX(  ):Matrix4f;
	mapnYZnX( arg0:Matrix4f ):Matrix4f;
	mapnYnXZ(  ):Matrix4f;
	mapnYnXZ( arg0:Matrix4f ):Matrix4f;
	mapnYnXnZ(  ):Matrix4f;
	mapnYnXnZ( arg0:Matrix4f ):Matrix4f;
	mapnYnZX(  ):Matrix4f;
	mapnYnZX( arg0:Matrix4f ):Matrix4f;
	mapnYnZnX(  ):Matrix4f;
	mapnYnZnX( arg0:Matrix4f ):Matrix4f;
	mapnZXY(  ):Matrix4f;
	mapnZXY( arg0:Matrix4f ):Matrix4f;
	mapnZXnY(  ):Matrix4f;
	mapnZXnY( arg0:Matrix4f ):Matrix4f;
	mapnZYX(  ):Matrix4f;
	mapnZYX( arg0:Matrix4f ):Matrix4f;
	mapnZYnX(  ):Matrix4f;
	mapnZYnX( arg0:Matrix4f ):Matrix4f;
	mapnZnXY(  ):Matrix4f;
	mapnZnXY( arg0:Matrix4f ):Matrix4f;
	mapnZnXnY(  ):Matrix4f;
	mapnZnXnY( arg0:Matrix4f ):Matrix4f;
	mapnZnYX(  ):Matrix4f;
	mapnZnYX( arg0:Matrix4f ):Matrix4f;
	mapnZnYnX(  ):Matrix4f;
	mapnZnYnX( arg0:Matrix4f ):Matrix4f;
	mul( arg0:any /*org.joml.Matrix3x2fc*/ ):Matrix4f;
	mul( arg0:any /*org.joml.Matrix3x2fc*/, arg1:Matrix4f ):Matrix4f;
	mul( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	mul( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	mul( arg0:any /*org.joml.Matrix4x3fc*/ ):Matrix4f;
	mul( arg0:any /*org.joml.Matrix4x3fc*/, arg1:Matrix4f ):Matrix4f;
	mul( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:float, arg10:float, arg11:float, arg12:float, arg13:float, arg14:float, arg15:float ):Matrix4f;
	mul( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:float, arg10:float, arg11:float, arg12:float, arg13:float, arg14:float, arg15:float, arg16:Matrix4f ):Matrix4f;
	mul0( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	mul0( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	mul3x3( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float ):Matrix4f;
	mul3x3( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:Matrix4f ):Matrix4f;
	mul4x3ComponentWise( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	mul4x3ComponentWise( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	mulAffine( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	mulAffine( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	mulAffineR( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	mulAffineR( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	mulComponentWise( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	mulComponentWise( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	mulLocal( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	mulLocal( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	mulLocalAffine( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	mulLocalAffine( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	mulOrthoAffine( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	mulOrthoAffine( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	mulPerspectiveAffine( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	mulPerspectiveAffine( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	mulPerspectiveAffine( arg0:any /*org.joml.Matrix4x3fc*/ ):Matrix4f;
	mulPerspectiveAffine( arg0:any /*org.joml.Matrix4x3fc*/, arg1:Matrix4f ):Matrix4f;
	mulTranslationAffine( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	negateX(  ):Matrix4f;
	negateX( arg0:Matrix4f ):Matrix4f;
	negateY(  ):Matrix4f;
	negateY( arg0:Matrix4f ):Matrix4f;
	negateZ(  ):Matrix4f;
	negateZ( arg0:Matrix4f ):Matrix4f;
	normal(  ):Matrix4f;
	normal( arg0:Matrix4f ):Matrix4f;
	normal( arg0:any /*org.joml.Matrix3f*/ ):any /*org.joml.Matrix3f*/;
	normalize3x3(  ):Matrix4f;
	normalize3x3( arg0:Matrix4f ):Matrix4f;
	normalize3x3( arg0:any /*org.joml.Matrix3f*/ ):any /*org.joml.Matrix3f*/;
	normalizedPositiveX( arg0:Vector3f ):Vector3f;
	normalizedPositiveY( arg0:Vector3f ):Vector3f;
	normalizedPositiveZ( arg0:Vector3f ):Vector3f;
	obliqueZ( arg0:float, arg1:float ):Matrix4f;
	obliqueZ( arg0:float, arg1:float, arg2:Matrix4f ):Matrix4f;
	origin( arg0:Vector3f ):Vector3f;
	originAffine( arg0:Vector3f ):Vector3f;
	ortho( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	ortho( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	ortho( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	ortho( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean, arg7:Matrix4f ):Matrix4f;
	ortho2D( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	ortho2D( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	ortho2DLH( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	ortho2DLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	orthoCrop( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	orthoLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	orthoLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	orthoLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	orthoLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean, arg7:Matrix4f ):Matrix4f;
	orthoSymmetric( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	orthoSymmetric( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	orthoSymmetric( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean ):Matrix4f;
	orthoSymmetric( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean, arg5:Matrix4f ):Matrix4f;
	orthoSymmetricLH( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	orthoSymmetricLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	orthoSymmetricLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean ):Matrix4f;
	orthoSymmetricLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean, arg5:Matrix4f ):Matrix4f;
	perspective( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	perspective( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	perspective( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean ):Matrix4f;
	perspective( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean, arg5:Matrix4f ):Matrix4f;
	perspectiveFar(  ):float;
	perspectiveFov(  ):float;
	perspectiveFrustumSlice( arg0:float, arg1:float, arg2:Matrix4f ):Matrix4f;
	perspectiveInvOrigin( arg0:Vector3f ):Vector3f;
	perspectiveLH( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	perspectiveLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	perspectiveLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean ):Matrix4f;
	perspectiveLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean, arg5:Matrix4f ):Matrix4f;
	perspectiveNear(  ):float;
	perspectiveOffCenter( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	perspectiveOffCenter( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	perspectiveOffCenter( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	perspectiveOffCenter( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean, arg7:Matrix4f ):Matrix4f;
	perspectiveOffCenterFov( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	perspectiveOffCenterFov( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	perspectiveOffCenterFov( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	perspectiveOffCenterFov( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean, arg7:Matrix4f ):Matrix4f;
	perspectiveOffCenterFovLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	perspectiveOffCenterFovLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	perspectiveOffCenterFovLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	perspectiveOffCenterFovLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean, arg7:Matrix4f ):Matrix4f;
	perspectiveOrigin( arg0:Vector3f ):Vector3f;
	perspectiveRect( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	perspectiveRect( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	perspectiveRect( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean ):Matrix4f;
	perspectiveRect( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean, arg5:Matrix4f ):Matrix4f;
	pick( arg0:float, arg1:float, arg2:float, arg3:float, arg4:[int] ):Matrix4f;
	pick( arg0:float, arg1:float, arg2:float, arg3:float, arg4:[int], arg5:Matrix4f ):Matrix4f;
	positiveX( arg0:Vector3f ):Vector3f;
	positiveY( arg0:Vector3f ):Vector3f;
	positiveZ( arg0:Vector3f ):Vector3f;
	project( arg0:any /*org.joml.Vector3fc*/, arg1:[int], arg2:Vector3f ):Vector3f;
	project( arg0:any /*org.joml.Vector3fc*/, arg1:[int], arg2:Vector4f ):Vector4f;
	project( arg0:float, arg1:float, arg2:float, arg3:[int], arg4:Vector3f ):Vector3f;
	project( arg0:float, arg1:float, arg2:float, arg3:[int], arg4:Vector4f ):Vector4f;
	projectedGridRange( arg0:any /*org.joml.Matrix4fc*/, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	properties(  ):int;
	readExternal( arg0:any /*java.io.ObjectInput*/ ):void;
	reflect( arg0:any /*org.joml.Quaternionfc*/, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	reflect( arg0:any /*org.joml.Quaternionfc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Matrix4f ):Matrix4f;
	reflect( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	reflect( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Matrix4f ):Matrix4f;
	reflect( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	reflect( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	reflect( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	reflect( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	reflection( arg0:any /*org.joml.Quaternionfc*/, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	reflection( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	reflection( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	reflection( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	rotate( arg0:any /*org.joml.AxisAngle4f*/ ):Matrix4f;
	rotate( arg0:any /*org.joml.AxisAngle4f*/, arg1:Matrix4f ):Matrix4f;
	rotate( arg0:any /*org.joml.Quaternionfc*/ ):Matrix4f;
	rotate( arg0:any /*org.joml.Quaternionfc*/, arg1:Matrix4f ):Matrix4f;
	rotate( arg0:float, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	rotate( arg0:float, arg1:any /*org.joml.Vector3fc*/, arg2:Matrix4f ):Matrix4f;
	rotate( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	rotate( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	rotateAffine( arg0:any /*org.joml.Quaternionfc*/ ):Matrix4f;
	rotateAffine( arg0:any /*org.joml.Quaternionfc*/, arg1:Matrix4f ):Matrix4f;
	rotateAffine( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	rotateAffine( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	rotateAffineXYZ( arg0:float, arg1:float, arg2:float ):Matrix4f;
	rotateAffineXYZ( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	rotateAffineYXZ( arg0:float, arg1:float, arg2:float ):Matrix4f;
	rotateAffineYXZ( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	rotateAffineZYX( arg0:float, arg1:float, arg2:float ):Matrix4f;
	rotateAffineZYX( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	rotateAround( arg0:any /*org.joml.Quaternionfc*/, arg1:float, arg2:float, arg3:float ):Matrix4f;
	rotateAround( arg0:any /*org.joml.Quaternionfc*/, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	rotateAroundAffine( arg0:any /*org.joml.Quaternionfc*/, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	rotateAroundLocal( arg0:any /*org.joml.Quaternionfc*/, arg1:float, arg2:float, arg3:float ):Matrix4f;
	rotateAroundLocal( arg0:any /*org.joml.Quaternionfc*/, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	rotateLocal( arg0:any /*org.joml.Quaternionfc*/ ):Matrix4f;
	rotateLocal( arg0:any /*org.joml.Quaternionfc*/, arg1:Matrix4f ):Matrix4f;
	rotateLocal( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	rotateLocal( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	rotateLocalX( arg0:float ):Matrix4f;
	rotateLocalX( arg0:float, arg1:Matrix4f ):Matrix4f;
	rotateLocalY( arg0:float ):Matrix4f;
	rotateLocalY( arg0:float, arg1:Matrix4f ):Matrix4f;
	rotateLocalZ( arg0:float ):Matrix4f;
	rotateLocalZ( arg0:float, arg1:Matrix4f ):Matrix4f;
	rotateTowards( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	rotateTowards( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Matrix4f ):Matrix4f;
	rotateTowards( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	rotateTowards( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	rotateTowardsXY( arg0:float, arg1:float ):Matrix4f;
	rotateTowardsXY( arg0:float, arg1:float, arg2:Matrix4f ):Matrix4f;
	rotateTranslation( arg0:any /*org.joml.Quaternionfc*/, arg1:Matrix4f ):Matrix4f;
	rotateTranslation( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	rotateX( arg0:float ):Matrix4f;
	rotateX( arg0:float, arg1:Matrix4f ):Matrix4f;
	rotateXYZ( arg0:any /*org.joml.Vector3fc*/ ):Matrix4f;
	rotateXYZ( arg0:float, arg1:float, arg2:float ):Matrix4f;
	rotateXYZ( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	rotateY( arg0:float ):Matrix4f;
	rotateY( arg0:float, arg1:Matrix4f ):Matrix4f;
	rotateYXZ( arg0:Vector3f ):Matrix4f;
	rotateYXZ( arg0:float, arg1:float, arg2:float ):Matrix4f;
	rotateYXZ( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	rotateZ( arg0:float ):Matrix4f;
	rotateZ( arg0:float, arg1:Matrix4f ):Matrix4f;
	rotateZYX( arg0:Vector3f ):Matrix4f;
	rotateZYX( arg0:float, arg1:float, arg2:float ):Matrix4f;
	rotateZYX( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	rotation( arg0:any /*org.joml.AxisAngle4f*/ ):Matrix4f;
	rotation( arg0:any /*org.joml.Quaternionfc*/ ):Matrix4f;
	rotation( arg0:float, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	rotation( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	rotationAround( arg0:any /*org.joml.Quaternionfc*/, arg1:float, arg2:float, arg3:float ):Matrix4f;
	rotationTowards( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	rotationTowards( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	rotationTowardsXY( arg0:float, arg1:float ):Matrix4f;
	rotationX( arg0:float ):Matrix4f;
	rotationXYZ( arg0:float, arg1:float, arg2:float ):Matrix4f;
	rotationY( arg0:float ):Matrix4f;
	rotationYXZ( arg0:float, arg1:float, arg2:float ):Matrix4f;
	rotationZ( arg0:float ):Matrix4f;
	rotationZYX( arg0:float, arg1:float, arg2:float ):Matrix4f;
	scale( arg0:any /*org.joml.Vector3fc*/ ):Matrix4f;
	scale( arg0:any /*org.joml.Vector3fc*/, arg1:Matrix4f ):Matrix4f;
	scale( arg0:float ):Matrix4f;
	scale( arg0:float, arg1:Matrix4f ):Matrix4f;
	scale( arg0:float, arg1:float, arg2:float ):Matrix4f;
	scale( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	scaleAround( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	scaleAround( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	scaleAround( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	scaleAround( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	scaleAroundLocal( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	scaleAroundLocal( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	scaleAroundLocal( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	scaleAroundLocal( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Matrix4f ):Matrix4f;
	scaleLocal( arg0:float ):Matrix4f;
	scaleLocal( arg0:float, arg1:Matrix4f ):Matrix4f;
	scaleLocal( arg0:float, arg1:float, arg2:float ):Matrix4f;
	scaleLocal( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	scaleXY( arg0:float, arg1:float ):Matrix4f;
	scaleXY( arg0:float, arg1:float, arg2:Matrix4f ):Matrix4f;
	scaling( arg0:any /*org.joml.Vector3fc*/ ):Matrix4f;
	scaling( arg0:float ):Matrix4f;
	scaling( arg0:float, arg1:float, arg2:float ):Matrix4f;
	set( arg0:[float] ):Matrix4f;
	set( arg0:[float], arg1:int ):Matrix4f;
	set( arg0:any /*java.nio.ByteBuffer*/ ):Matrix4f;
	set( arg0:any /*java.nio.FloatBuffer*/ ):Matrix4f;
	set( arg0:any /*org.joml.AxisAngle4d*/ ):Matrix4f;
	set( arg0:any /*org.joml.AxisAngle4f*/ ):Matrix4f;
	set( arg0:any /*org.joml.Matrix3fc*/ ):Matrix4f;
	set( arg0:any /*org.joml.Matrix4dc*/ ):Matrix4f;
	set( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	set( arg0:any /*org.joml.Matrix4x3fc*/ ):Matrix4f;
	set( arg0:any /*org.joml.Quaterniondc*/ ):Matrix4f;
	set( arg0:any /*org.joml.Quaternionfc*/ ):Matrix4f;
	set( arg0:any /*org.joml.Vector4fc*/, arg1:any /*org.joml.Vector4fc*/, arg2:any /*org.joml.Vector4fc*/, arg3:any /*org.joml.Vector4fc*/ ):Matrix4f;
	set( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:float, arg10:float, arg11:float, arg12:float, arg13:float, arg14:float, arg15:float ):Matrix4f;
	set( arg0:int, arg1:any /*java.nio.ByteBuffer*/ ):Matrix4f;
	set( arg0:int, arg1:any /*java.nio.FloatBuffer*/ ):Matrix4f;
	set( arg0:int, arg1:int, arg2:float ):Matrix4f;
	set3x3( arg0:Matrix4f ):Matrix4f;
	set3x3( arg0:any /*org.joml.Matrix3fc*/ ):Matrix4f;
	set4x3( arg0:Matrix4f ):Matrix4f;
	set4x3( arg0:any /*org.joml.Matrix4x3fc*/ ):Matrix4f;
	setColumn( arg0:int, arg1:any /*org.joml.Vector4fc*/ ):Matrix4f;
	setFromAddress( arg0:long ):Matrix4f;
	setFromIntrinsic( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:int, arg6:int, arg7:float, arg8:float ):Matrix4f;
	setFrustum( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	setFrustum( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	setFrustumLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	setFrustumLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	setLookAlong( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Matrix4f;
	setLookAlong( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	setLookAt( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:any /*org.joml.Vector3fc*/ ):Matrix4f;
	setLookAt( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float ):Matrix4f;
	setLookAtLH( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:any /*org.joml.Vector3fc*/ ):Matrix4f;
	setLookAtLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float ):Matrix4f;
	setOrtho( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	setOrtho( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	setOrtho2D( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	setOrtho2DLH( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	setOrthoLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	setOrthoLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	setOrthoSymmetric( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	setOrthoSymmetric( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean ):Matrix4f;
	setOrthoSymmetricLH( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	setOrthoSymmetricLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean ):Matrix4f;
	setPerspective( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	setPerspective( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean ):Matrix4f;
	setPerspectiveLH( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	setPerspectiveLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean ):Matrix4f;
	setPerspectiveOffCenter( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	setPerspectiveOffCenter( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	setPerspectiveOffCenterFov( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	setPerspectiveOffCenterFov( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	setPerspectiveOffCenterFovLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Matrix4f;
	setPerspectiveOffCenterFovLH( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:boolean ):Matrix4f;
	setPerspectiveRect( arg0:float, arg1:float, arg2:float, arg3:float ):Matrix4f;
	setPerspectiveRect( arg0:float, arg1:float, arg2:float, arg3:float, arg4:boolean ):Matrix4f;
	setRotationXYZ( arg0:float, arg1:float, arg2:float ):Matrix4f;
	setRotationYXZ( arg0:float, arg1:float, arg2:float ):Matrix4f;
	setRotationZYX( arg0:float, arg1:float, arg2:float ):Matrix4f;
	setRow( arg0:int, arg1:any /*org.joml.Vector4fc*/ ):Matrix4f;
	setRowColumn( arg0:int, arg1:int, arg2:float ):Matrix4f;
	setTranslation( arg0:any /*org.joml.Vector3fc*/ ):Matrix4f;
	setTranslation( arg0:float, arg1:float, arg2:float ):Matrix4f;
	setTransposed( arg0:[float] ):Matrix4f;
	setTransposed( arg0:[float], arg1:int ):Matrix4f;
	setTransposed( arg0:any /*java.nio.ByteBuffer*/ ):Matrix4f;
	setTransposed( arg0:any /*java.nio.FloatBuffer*/ ):Matrix4f;
	setTransposed( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	setTransposedFromAddress( arg0:long ):Matrix4f;
	shadow( arg0:Vector4f, arg1:Matrix4f ):Matrix4f;
	shadow( arg0:Vector4f, arg1:any /*org.joml.Matrix4fc*/, arg2:Matrix4f ):Matrix4f;
	shadow( arg0:Vector4f, arg1:float, arg2:float, arg3:float, arg4:float ):Matrix4f;
	shadow( arg0:Vector4f, arg1:float, arg2:float, arg3:float, arg4:float, arg5:Matrix4f ):Matrix4f;
	shadow( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Matrix4f ):Matrix4f;
	shadow( arg0:float, arg1:float, arg2:float, arg3:float, arg4:any /*org.joml.Matrix4fc*/, arg5:Matrix4f ):Matrix4f;
	shadow( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float ):Matrix4f;
	shadow( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:Matrix4f ):Matrix4f;
	static perspectiveOffCenterViewFromRectangle( arg0:Vector3f, arg1:Vector3f, arg2:Vector3f, arg3:Vector3f, arg4:float, arg5:boolean, arg6:Matrix4f, arg7:Matrix4f ):void;
	sub( arg0:any /*org.joml.Matrix4fc*/ ):Matrix4f;
	sub( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	sub4x3( arg0:Matrix4f ):Matrix4f;
	sub4x3( arg0:any /*org.joml.Matrix4fc*/, arg1:Matrix4f ):Matrix4f;
	swap( arg0:Matrix4f ):Matrix4f;
	testAab( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):boolean;
	testPoint( arg0:float, arg1:float, arg2:float ):boolean;
	testSphere( arg0:float, arg1:float, arg2:float, arg3:float ):boolean;
	tile( arg0:int, arg1:int, arg2:int, arg3:int ):Matrix4f;
	tile( arg0:int, arg1:int, arg2:int, arg3:int, arg4:Matrix4f ):Matrix4f;
	toString(  ):string;
	toString( arg0:any /*java.text.NumberFormat*/ ):string;
	transform( arg0:Vector4f ):Vector4f;
	transform( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	transform( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector4f ):Vector4f;
	transformAab( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Vector3f, arg3:Vector3f ):Matrix4f;
	transformAab( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Vector3f, arg7:Vector3f ):Matrix4f;
	transformAffine( arg0:Vector4f ):Vector4f;
	transformAffine( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	transformAffine( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector4f ):Vector4f;
	transformDirection( arg0:Vector3f ):Vector3f;
	transformDirection( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	transformDirection( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	transformPosition( arg0:Vector3f ):Vector3f;
	transformPosition( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	transformPosition( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	transformProject( arg0:Vector3f ):Vector3f;
	transformProject( arg0:Vector4f ):Vector4f;
	transformProject( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	transformProject( arg0:any /*org.joml.Vector4fc*/, arg1:Vector3f ):Vector3f;
	transformProject( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	transformProject( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	transformProject( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector3f ):Vector3f;
	transformProject( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector4f ):Vector4f;
	transformTranspose( arg0:Vector4f ):Vector4f;
	transformTranspose( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	transformTranspose( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Vector4f ):Vector4f;
	translate( arg0:any /*org.joml.Vector3fc*/ ):Matrix4f;
	translate( arg0:any /*org.joml.Vector3fc*/, arg1:Matrix4f ):Matrix4f;
	translate( arg0:float, arg1:float, arg2:float ):Matrix4f;
	translate( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	translateLocal( arg0:any /*org.joml.Vector3fc*/ ):Matrix4f;
	translateLocal( arg0:any /*org.joml.Vector3fc*/, arg1:Matrix4f ):Matrix4f;
	translateLocal( arg0:float, arg1:float, arg2:float ):Matrix4f;
	translateLocal( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	translation( arg0:any /*org.joml.Vector3fc*/ ):Matrix4f;
	translation( arg0:float, arg1:float, arg2:float ):Matrix4f;
	translationRotate( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Quaternionfc*/ ):Matrix4f;
	translationRotate( arg0:float, arg1:float, arg2:float, arg3:any /*org.joml.Quaternionfc*/ ):Matrix4f;
	translationRotate( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float ):Matrix4f;
	translationRotateInvert( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Quaternionfc*/ ):Matrix4f;
	translationRotateInvert( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float ):Matrix4f;
	translationRotateScale( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Quaternionfc*/, arg2:any /*org.joml.Vector3fc*/ ):Matrix4f;
	translationRotateScale( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Quaternionfc*/, arg2:float ):Matrix4f;
	translationRotateScale( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float ):Matrix4f;
	translationRotateScale( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:float ):Matrix4f;
	translationRotateScaleInvert( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Quaternionfc*/, arg2:any /*org.joml.Vector3fc*/ ):Matrix4f;
	translationRotateScaleInvert( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Quaternionfc*/, arg2:float ):Matrix4f;
	translationRotateScaleInvert( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:float ):Matrix4f;
	translationRotateScaleMulAffine( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Quaternionfc*/, arg2:any /*org.joml.Vector3fc*/, arg3:Matrix4f ):Matrix4f;
	translationRotateScaleMulAffine( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float, arg9:float, arg10:Matrix4f ):Matrix4f;
	translationRotateTowards( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:any /*org.joml.Vector3fc*/ ):Matrix4f;
	translationRotateTowards( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float, arg8:float ):Matrix4f;
	transpose(  ):Matrix4f;
	transpose( arg0:Matrix4f ):Matrix4f;
	transpose3x3(  ):Matrix4f;
	transpose3x3( arg0:Matrix4f ):Matrix4f;
	transpose3x3( arg0:any /*org.joml.Matrix3f*/ ):any /*org.joml.Matrix3f*/;
	trapezoidCrop( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:float, arg7:float ):Matrix4f;
	unproject( arg0:any /*org.joml.Vector3fc*/, arg1:[int], arg2:Vector3f ):Vector3f;
	unproject( arg0:any /*org.joml.Vector3fc*/, arg1:[int], arg2:Vector4f ):Vector4f;
	unproject( arg0:float, arg1:float, arg2:float, arg3:[int], arg4:Vector3f ):Vector3f;
	unproject( arg0:float, arg1:float, arg2:float, arg3:[int], arg4:Vector4f ):Vector4f;
	unprojectInv( arg0:any /*org.joml.Vector3fc*/, arg1:[int], arg2:Vector3f ):Vector3f;
	unprojectInv( arg0:any /*org.joml.Vector3fc*/, arg1:[int], arg2:Vector4f ):Vector4f;
	unprojectInv( arg0:float, arg1:float, arg2:float, arg3:[int], arg4:Vector3f ):Vector3f;
	unprojectInv( arg0:float, arg1:float, arg2:float, arg3:[int], arg4:Vector4f ):Vector4f;
	unprojectInvRay( arg0:any /*org.joml.Vector2fc*/, arg1:[int], arg2:Vector3f, arg3:Vector3f ):Matrix4f;
	unprojectInvRay( arg0:float, arg1:float, arg2:[int], arg3:Vector3f, arg4:Vector3f ):Matrix4f;
	unprojectRay( arg0:any /*org.joml.Vector2fc*/, arg1:[int], arg2:Vector3f, arg3:Vector3f ):Matrix4f;
	unprojectRay( arg0:float, arg1:float, arg2:[int], arg3:Vector3f, arg4:Vector3f ):Matrix4f;
	withLookAtUp( arg0:any /*org.joml.Vector3fc*/ ):Matrix4f;
	withLookAtUp( arg0:any /*org.joml.Vector3fc*/, arg1:Matrix4f ):Matrix4f;
	withLookAtUp( arg0:float, arg1:float, arg2:float ):Matrix4f;
	withLookAtUp( arg0:float, arg1:float, arg2:float, arg3:Matrix4f ):Matrix4f;
	writeExternal( arg0:any /*java.io.ObjectOutput*/ ):void;
	zero(  ):Matrix4f;

} // end Matrix4f

} // end namespace org.joml

declare namespace org.joml {

class Quaternionf/* extends java.lang.Object implements java.io.Externalizable, java.lang.Cloneable, Quaternionfc*/ {

	add( arg0:any /*org.joml.Quaternionfc*/ ):Quaternionf;
	add( arg0:any /*org.joml.Quaternionfc*/, arg1:Quaternionf ):Quaternionf;
	add( arg0:float, arg1:float, arg2:float, arg3:float ):Quaternionf;
	add( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Quaternionf ):Quaternionf;
	angle(  ):float;
	clone(  ):any /*java.lang.Object*/;
	conjugate(  ):Quaternionf;
	conjugate( arg0:Quaternionf ):Quaternionf;
	conjugateBy( arg0:any /*org.joml.Quaternionfc*/ ):Quaternionf;
	conjugateBy( arg0:any /*org.joml.Quaternionfc*/, arg1:Quaternionf ):Quaternionf;
	difference( arg0:Quaternionf ):Quaternionf;
	difference( arg0:any /*org.joml.Quaternionfc*/, arg1:Quaternionf ):Quaternionf;
	div( arg0:any /*org.joml.Quaternionfc*/ ):Quaternionf;
	div( arg0:any /*org.joml.Quaternionfc*/, arg1:Quaternionf ):Quaternionf;
	dot( arg0:Quaternionf ):float;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	equals( arg0:any /*org.joml.Quaternionfc*/, arg1:float ):boolean;
	equals( arg0:float, arg1:float, arg2:float, arg3:float ):boolean;
	fromAxisAngleDeg( arg0:any /*org.joml.Vector3fc*/, arg1:float ):Quaternionf;
	fromAxisAngleDeg( arg0:float, arg1:float, arg2:float, arg3:float ):Quaternionf;
	fromAxisAngleRad( arg0:any /*org.joml.Vector3fc*/, arg1:float ):Quaternionf;
	fromAxisAngleRad( arg0:float, arg1:float, arg2:float, arg3:float ):Quaternionf;
	get( arg0:Matrix4f ):Matrix4f;
	get( arg0:Quaternionf ):Quaternionf;
	get( arg0:any /*org.joml.AxisAngle4d*/ ):any /*org.joml.AxisAngle4d*/;
	get( arg0:any /*org.joml.AxisAngle4f*/ ):any /*org.joml.AxisAngle4f*/;
	get( arg0:any /*org.joml.Matrix3d*/ ):any /*org.joml.Matrix3d*/;
	get( arg0:any /*org.joml.Matrix3f*/ ):any /*org.joml.Matrix3f*/;
	get( arg0:any /*org.joml.Matrix4d*/ ):any /*org.joml.Matrix4d*/;
	get( arg0:any /*org.joml.Matrix4x3d*/ ):any /*org.joml.Matrix4x3d*/;
	get( arg0:any /*org.joml.Matrix4x3f*/ ):any /*org.joml.Matrix4x3f*/;
	get( arg0:any /*org.joml.Quaterniond*/ ):any /*org.joml.Quaterniond*/;
	getAsMatrix3f( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	getAsMatrix3f( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	getAsMatrix4f( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	getAsMatrix4f( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	getAsMatrix4x3f( arg0:any /*java.nio.ByteBuffer*/ ):any /*java.nio.ByteBuffer*/;
	getAsMatrix4x3f( arg0:any /*java.nio.FloatBuffer*/ ):any /*java.nio.FloatBuffer*/;
	getEulerAnglesXYZ( arg0:Vector3f ):Vector3f;
	getEulerAnglesYXZ( arg0:Vector3f ):Vector3f;
	getEulerAnglesZXY( arg0:Vector3f ):Vector3f;
	getEulerAnglesZYX( arg0:Vector3f ):Vector3f;
	identity(  ):Quaternionf;
	integrate( arg0:float, arg1:float, arg2:float, arg3:float ):Quaternionf;
	integrate( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Quaternionf ):Quaternionf;
	invert(  ):Quaternionf;
	invert( arg0:Quaternionf ):Quaternionf;
	isFinite(  ):boolean;
	lengthSquared(  ):float;
	lookAlong( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Quaternionf;
	lookAlong( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Quaternionf ):Quaternionf;
	lookAlong( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Quaternionf;
	lookAlong( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Quaternionf ):Quaternionf;
	mul( arg0:any /*org.joml.Quaternionfc*/ ):Quaternionf;
	mul( arg0:any /*org.joml.Quaternionfc*/, arg1:Quaternionf ):Quaternionf;
	mul( arg0:float ):Quaternionf;
	mul( arg0:float, arg1:Quaternionf ):Quaternionf;
	mul( arg0:float, arg1:float, arg2:float, arg3:float ):Quaternionf;
	mul( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Quaternionf ):Quaternionf;
	nlerp( arg0:any /*org.joml.Quaternionfc*/, arg1:float ):Quaternionf;
	nlerp( arg0:any /*org.joml.Quaternionfc*/, arg1:float, arg2:Quaternionf ):Quaternionf;
	nlerpIterative( arg0:any /*org.joml.Quaternionfc*/, arg1:float, arg2:float ):Quaternionf;
	nlerpIterative( arg0:any /*org.joml.Quaternionfc*/, arg1:float, arg2:float, arg3:Quaternionf ):Quaternionf;
	normalize(  ):Quaternionf;
	normalize( arg0:Quaternionf ):Quaternionf;
	normalizedPositiveX( arg0:Vector3f ):Vector3f;
	normalizedPositiveY( arg0:Vector3f ):Vector3f;
	normalizedPositiveZ( arg0:Vector3f ):Vector3f;
	positiveX( arg0:Vector3f ):Vector3f;
	positiveY( arg0:Vector3f ):Vector3f;
	positiveZ( arg0:Vector3f ):Vector3f;
	premul( arg0:any /*org.joml.Quaternionfc*/ ):Quaternionf;
	premul( arg0:any /*org.joml.Quaternionfc*/, arg1:Quaternionf ):Quaternionf;
	premul( arg0:float, arg1:float, arg2:float, arg3:float ):Quaternionf;
	premul( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Quaternionf ):Quaternionf;
	readExternal( arg0:any /*java.io.ObjectInput*/ ):void;
	rotateAxis( arg0:float, arg1:any /*org.joml.Vector3fc*/ ):Quaternionf;
	rotateAxis( arg0:float, arg1:any /*org.joml.Vector3fc*/, arg2:Quaternionf ):Quaternionf;
	rotateAxis( arg0:float, arg1:float, arg2:float, arg3:float ):Quaternionf;
	rotateAxis( arg0:float, arg1:float, arg2:float, arg3:float, arg4:Quaternionf ):Quaternionf;
	rotateLocalX( arg0:float ):Quaternionf;
	rotateLocalX( arg0:float, arg1:Quaternionf ):Quaternionf;
	rotateLocalY( arg0:float ):Quaternionf;
	rotateLocalY( arg0:float, arg1:Quaternionf ):Quaternionf;
	rotateLocalZ( arg0:float ):Quaternionf;
	rotateLocalZ( arg0:float, arg1:Quaternionf ):Quaternionf;
	rotateTo( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Quaternionf;
	rotateTo( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/, arg2:Quaternionf ):Quaternionf;
	rotateTo( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Quaternionf;
	rotateTo( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float, arg6:Quaternionf ):Quaternionf;
	rotateX( arg0:float ):Quaternionf;
	rotateX( arg0:float, arg1:Quaternionf ):Quaternionf;
	rotateXYZ( arg0:float, arg1:float, arg2:float ):Quaternionf;
	rotateXYZ( arg0:float, arg1:float, arg2:float, arg3:Quaternionf ):Quaternionf;
	rotateY( arg0:float ):Quaternionf;
	rotateY( arg0:float, arg1:Quaternionf ):Quaternionf;
	rotateYXZ( arg0:float, arg1:float, arg2:float ):Quaternionf;
	rotateYXZ( arg0:float, arg1:float, arg2:float, arg3:Quaternionf ):Quaternionf;
	rotateZ( arg0:float ):Quaternionf;
	rotateZ( arg0:float, arg1:Quaternionf ):Quaternionf;
	rotateZYX( arg0:float, arg1:float, arg2:float ):Quaternionf;
	rotateZYX( arg0:float, arg1:float, arg2:float, arg3:Quaternionf ):Quaternionf;
	rotationAxis( arg0:any /*org.joml.AxisAngle4f*/ ):Quaternionf;
	rotationAxis( arg0:float, arg1:any /*org.joml.Vector3fc*/ ):Quaternionf;
	rotationAxis( arg0:float, arg1:float, arg2:float, arg3:float ):Quaternionf;
	rotationTo( arg0:any /*org.joml.Vector3fc*/, arg1:any /*org.joml.Vector3fc*/ ):Quaternionf;
	rotationTo( arg0:float, arg1:float, arg2:float, arg3:float, arg4:float, arg5:float ):Quaternionf;
	rotationX( arg0:float ):Quaternionf;
	rotationXYZ( arg0:float, arg1:float, arg2:float ):Quaternionf;
	rotationY( arg0:float ):Quaternionf;
	rotationYXZ( arg0:float, arg1:float, arg2:float ):Quaternionf;
	rotationZ( arg0:float ):Quaternionf;
	rotationZYX( arg0:float, arg1:float, arg2:float ):Quaternionf;
	scale( arg0:float ):Quaternionf;
	scale( arg0:float, arg1:Quaternionf ):Quaternionf;
	scaling( arg0:float ):Quaternionf;
	set( arg0:any /*org.joml.AxisAngle4d*/ ):Quaternionf;
	set( arg0:any /*org.joml.AxisAngle4f*/ ):Quaternionf;
	set( arg0:any /*org.joml.Quaterniondc*/ ):Quaternionf;
	set( arg0:any /*org.joml.Quaternionfc*/ ):Quaternionf;
	set( arg0:float, arg1:float, arg2:float, arg3:float ):Quaternionf;
	setAngleAxis( arg0:double, arg1:double, arg2:double, arg3:double ):Quaternionf;
	setAngleAxis( arg0:float, arg1:float, arg2:float, arg3:float ):Quaternionf;
	setFromNormalized( arg0:any /*org.joml.Matrix3dc*/ ):Quaternionf;
	setFromNormalized( arg0:any /*org.joml.Matrix3fc*/ ):Quaternionf;
	setFromNormalized( arg0:any /*org.joml.Matrix4dc*/ ):Quaternionf;
	setFromNormalized( arg0:any /*org.joml.Matrix4fc*/ ):Quaternionf;
	setFromNormalized( arg0:any /*org.joml.Matrix4x3dc*/ ):Quaternionf;
	setFromNormalized( arg0:any /*org.joml.Matrix4x3fc*/ ):Quaternionf;
	setFromUnnormalized( arg0:any /*org.joml.Matrix3dc*/ ):Quaternionf;
	setFromUnnormalized( arg0:any /*org.joml.Matrix3fc*/ ):Quaternionf;
	setFromUnnormalized( arg0:any /*org.joml.Matrix4dc*/ ):Quaternionf;
	setFromUnnormalized( arg0:any /*org.joml.Matrix4fc*/ ):Quaternionf;
	setFromUnnormalized( arg0:any /*org.joml.Matrix4x3dc*/ ):Quaternionf;
	setFromUnnormalized( arg0:any /*org.joml.Matrix4x3fc*/ ):Quaternionf;
	slerp( arg0:any /*org.joml.Quaternionfc*/, arg1:float ):Quaternionf;
	slerp( arg0:any /*org.joml.Quaternionfc*/, arg1:float, arg2:Quaternionf ):Quaternionf;
	static nlerp( arg0:[any /*org.joml.Quaternionfc*/], arg1:[float], arg2:Quaternionf ):any /*org.joml.Quaternionfc*/;
	static nlerpIterative( arg0:[Quaternionf], arg1:[float], arg2:float, arg3:Quaternionf ):any /*org.joml.Quaternionfc*/;
	static slerp( arg0:[Quaternionf], arg1:[float], arg2:Quaternionf ):any /*org.joml.Quaternionfc*/;
	toString(  ):string;
	toString( arg0:any /*java.text.NumberFormat*/ ):string;
	transform( arg0:Vector3d ):Vector3d;
	transform( arg0:Vector3f ):Vector3f;
	transform( arg0:Vector4f ):Vector4f;
	transform( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	transform( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	transform( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transform( arg0:any /*org.joml.Vector4dc*/, arg1:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transform( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	transform( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	transform( arg0:double, arg1:double, arg2:double, arg3:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transform( arg0:float, arg1:float, arg2:float, arg3:Vector3d ):Vector3d;
	transform( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	transform( arg0:float, arg1:float, arg2:float, arg3:Vector4f ):Vector4f;
	transformInverse( arg0:Vector3d ):Vector3d;
	transformInverse( arg0:Vector3f ):Vector3f;
	transformInverse( arg0:Vector4f ):Vector4f;
	transformInverse( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	transformInverse( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	transformInverse( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformInverse( arg0:any /*org.joml.Vector4dc*/, arg1:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformInverse( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	transformInverse( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	transformInverse( arg0:double, arg1:double, arg2:double, arg3:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformInverse( arg0:float, arg1:float, arg2:float, arg3:Vector3d ):Vector3d;
	transformInverse( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	transformInverse( arg0:float, arg1:float, arg2:float, arg3:Vector4f ):Vector4f;
	transformInverseUnit( arg0:Vector3f ):Vector3f;
	transformInverseUnit( arg0:Vector4f ):Vector4f;
	transformInverseUnit( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	transformInverseUnit( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	transformInverseUnit( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformInverseUnit( arg0:any /*org.joml.Vector4dc*/, arg1:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformInverseUnit( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	transformInverseUnit( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	transformInverseUnit( arg0:double, arg1:double, arg2:double, arg3:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformInverseUnit( arg0:float, arg1:float, arg2:float, arg3:Vector3d ):Vector3d;
	transformInverseUnit( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	transformInverseUnit( arg0:float, arg1:float, arg2:float, arg3:Vector4f ):Vector4f;
	transformPositiveX( arg0:Vector3d ):Vector3d;
	transformPositiveX( arg0:Vector3f ):Vector3f;
	transformPositiveX( arg0:Vector4f ):Vector4f;
	transformPositiveX( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformPositiveY( arg0:Vector3d ):Vector3d;
	transformPositiveY( arg0:Vector3f ):Vector3f;
	transformPositiveY( arg0:Vector4f ):Vector4f;
	transformPositiveY( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformPositiveZ( arg0:Vector3d ):Vector3d;
	transformPositiveZ( arg0:Vector3f ):Vector3f;
	transformPositiveZ( arg0:Vector4f ):Vector4f;
	transformPositiveZ( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformUnit( arg0:Vector3f ):Vector3f;
	transformUnit( arg0:Vector4f ):Vector4f;
	transformUnit( arg0:any /*org.joml.Vector3dc*/, arg1:Vector3d ):Vector3d;
	transformUnit( arg0:any /*org.joml.Vector3fc*/, arg1:Vector3f ):Vector3f;
	transformUnit( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformUnit( arg0:any /*org.joml.Vector4dc*/, arg1:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformUnit( arg0:any /*org.joml.Vector4fc*/, arg1:Vector4f ):Vector4f;
	transformUnit( arg0:double, arg1:double, arg2:double, arg3:Vector3d ):Vector3d;
	transformUnit( arg0:double, arg1:double, arg2:double, arg3:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformUnit( arg0:float, arg1:float, arg2:float, arg3:Vector3d ):Vector3d;
	transformUnit( arg0:float, arg1:float, arg2:float, arg3:Vector3f ):Vector3f;
	transformUnit( arg0:float, arg1:float, arg2:float, arg3:Vector4f ):Vector4f;
	transformUnitPositiveX( arg0:Vector3d ):Vector3d;
	transformUnitPositiveX( arg0:Vector3f ):Vector3f;
	transformUnitPositiveX( arg0:Vector4f ):Vector4f;
	transformUnitPositiveX( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformUnitPositiveY( arg0:Vector3d ):Vector3d;
	transformUnitPositiveY( arg0:Vector3f ):Vector3f;
	transformUnitPositiveY( arg0:Vector4f ):Vector4f;
	transformUnitPositiveY( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	transformUnitPositiveZ( arg0:Vector3d ):Vector3d;
	transformUnitPositiveZ( arg0:Vector3f ):Vector3f;
	transformUnitPositiveZ( arg0:Vector4f ):Vector4f;
	transformUnitPositiveZ( arg0:any /*org.joml.Vector4d*/ ):any /*org.joml.Vector4d*/;
	w(  ):float;
	writeExternal( arg0:any /*java.io.ObjectOutput*/ ):void;
	x(  ):float;
	y(  ):float;
	z(  ):float;

} // end Quaternionf

} // end namespace org.joml

declare namespace net.minecraft.world {

class World/* extends java.lang.Object implements WorldAccess, java.lang.AutoCloseable*/ {

	addBlockBreakParticles( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState ):void;
	addBlockEntity( blockEntity:any /*net.minecraft.block.entity.BlockEntity*/ ):void;
	addBlockEntityTicker( ticker:any /*net.minecraft.world.chunk.BlockEntityTickInvoker*/ ):void;
	addDetailsToCrashReport( report:any /*net.minecraft.util.crash.CrashReport*/ ):any /*net.minecraft.util.crash.CrashReportSection*/;
	addFireworkParticle( x:double, y:double, z:double, velocityX:double, velocityY:double, velocityZ:double, explosions:java.util.List<any /*net.minecraft.component.type.FireworkExplosionComponent*/> ):void;
	addImportantParticle( parameters:any /*net.minecraft.particle.ParticleEffect*/, alwaysSpawn:boolean, x:double, y:double, z:double, velocityX:double, velocityY:double, velocityZ:double ):void;
	addImportantParticle( parameters:any /*net.minecraft.particle.ParticleEffect*/, x:double, y:double, z:double, velocityX:double, velocityY:double, velocityZ:double ):void;
	addParticle( parameters:any /*net.minecraft.particle.ParticleEffect*/, alwaysSpawn:boolean, x:double, y:double, z:double, velocityX:double, velocityY:double, velocityZ:double ):void;
	addParticle( parameters:any /*net.minecraft.particle.ParticleEffect*/, x:double, y:double, z:double, velocityX:double, velocityY:double, velocityZ:double ):void;
	addSyncedBlockEvent( pos:net.minecraft.util.math.BlockPos, block:net.minecraft.block.Block, type:int, data:int ):void;
	asString(  ):string;
	breakBlock( pos:net.minecraft.util.math.BlockPos, drop:boolean ):boolean;
	breakBlock( pos:net.minecraft.util.math.BlockPos, drop:boolean, breakingEntity:net.minecraft.entity.Entity ):boolean;
	breakBlock( pos:net.minecraft.util.math.BlockPos, drop:boolean, breakingEntity:net.minecraft.entity.Entity, maxUpdateDepth:int ):boolean;
	calculateAmbientDarkness(  ):void;
	canCollide( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):boolean;
	canPlace( state:net.minecraft.block.BlockState, pos:net.minecraft.util.math.BlockPos, context:any /*net.minecraft.block.ShapeContext*/ ):boolean;
	canPlayerModifyAt( player:net.minecraft.entity.player.PlayerEntity, pos:net.minecraft.util.math.BlockPos ):boolean;
	canSetBlock( pos:net.minecraft.util.math.BlockPos ):boolean;
	close(  ):void;
	collectEntitiesByType<T>( filter:any /*net.minecraft.util.TypeFilter*/, box:net.minecraft.util.math.Box, predicate:java.util.function.Predicate<T>, result:java.util.List<T> ):void;
	collectEntitiesByType<T>( filter:any /*net.minecraft.util.TypeFilter*/, box:net.minecraft.util.math.Box, predicate:java.util.function.Predicate<T>, result:java.util.List<T>, limit:int ):void;
	containsFluid( box:net.minecraft.util.math.Box ):boolean;
	countVerticalSections(  ):int;
	createCommandRegistryWrapper( registryRef:net.minecraft.registry.RegistryKey<any /*net.minecraft.registry.Registry*/> ):any /*net.minecraft.registry.RegistryWrapper*/;
	createExplosion( entity:net.minecraft.entity.Entity, damageSource:any /*net.minecraft.entity.damage.DamageSource*/, behavior:any /*net.minecraft.world.explosion.ExplosionBehavior*/, pos:net.minecraft.util.math.Vec3d, power:float, createFire:boolean, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/ ):any /*net.minecraft.world.explosion.Explosion*/;
	createExplosion( entity:net.minecraft.entity.Entity, damageSource:any /*net.minecraft.entity.damage.DamageSource*/, behavior:any /*net.minecraft.world.explosion.ExplosionBehavior*/, x:double, y:double, z:double, power:float, createFire:boolean, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/ ):any /*net.minecraft.world.explosion.Explosion*/;
	createExplosion( entity:net.minecraft.entity.Entity, damageSource:any /*net.minecraft.entity.damage.DamageSource*/, behavior:any /*net.minecraft.world.explosion.ExplosionBehavior*/, x:double, y:double, z:double, power:float, createFire:boolean, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/, particle:any /*net.minecraft.particle.ParticleEffect*/, emitterParticle:any /*net.minecraft.particle.ParticleEffect*/, soundEvent:net.minecraft.registry.entry.RegistryEntry<net.minecraft.sound.SoundEvent> ):any /*net.minecraft.world.explosion.Explosion*/;
	createExplosion( entity:net.minecraft.entity.Entity, damageSource:any /*net.minecraft.entity.damage.DamageSource*/, behavior:any /*net.minecraft.world.explosion.ExplosionBehavior*/, x:double, y:double, z:double, power:float, createFire:boolean, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/, particles:boolean, particle:any /*net.minecraft.particle.ParticleEffect*/, emitterParticle:any /*net.minecraft.particle.ParticleEffect*/, soundEvent:net.minecraft.registry.entry.RegistryEntry<net.minecraft.sound.SoundEvent> ):any /*net.minecraft.world.explosion.Explosion*/;
	createExplosion( entity:net.minecraft.entity.Entity, x:double, y:double, z:double, power:float, createFire:boolean, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/ ):any /*net.minecraft.world.explosion.Explosion*/;
	createExplosion( entity:net.minecraft.entity.Entity, x:double, y:double, z:double, power:float, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/ ):any /*net.minecraft.world.explosion.Explosion*/;
	disconnect(  ):void;
	doesNotIntersectEntities( entity:net.minecraft.entity.Entity ):boolean;
	doesNotIntersectEntities( except:net.minecraft.entity.Entity, shape:any /*net.minecraft.util.shape.VoxelShape*/ ):boolean;
	emitGameEvent( entity:net.minecraft.entity.Entity, event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, pos:net.minecraft.util.math.BlockPos ):void;
	emitGameEvent( entity:net.minecraft.entity.Entity, event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, pos:net.minecraft.util.math.Vec3d ):void;
	emitGameEvent( event:net.minecraft.registry.RegistryKey<any /*net.minecraft.world.event.GameEvent*/>, pos:net.minecraft.util.math.BlockPos, emitter:any /*net.minecraft.world.event.GameEvent$Emitter*/ ):void;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, emitterPos:net.minecraft.util.math.Vec3d, emitter:any /*net.minecraft.world.event.GameEvent$Emitter*/ ):void;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, pos:net.minecraft.util.math.BlockPos, emitter:any /*net.minecraft.world.event.GameEvent$Emitter*/ ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	findClosestCollision( entity:net.minecraft.entity.Entity, shape:any /*net.minecraft.util.shape.VoxelShape*/, target:net.minecraft.util.math.Vec3d, x:double, y:double, z:double ):java.util.Optional<net.minecraft.util.math.Vec3d>;
	findSupportingBlockPos( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):java.util.Optional<net.minecraft.util.math.BlockPos>;
	getAmbientDarkness(  ):int;
	getBaseLightLevel( pos:net.minecraft.util.math.BlockPos, ambientDarkness:int ):int;
	getBiome( pos:net.minecraft.util.math.BlockPos ):net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.biome.Biome*/>;
	getBiomeAccess(  ):any /*net.minecraft.world.biome.source.BiomeAccess*/;
	getBiomeForNoiseGen( biomeX:int, biomeY:int, biomeZ:int ):net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.biome.Biome*/>;
	getBlockCollisions( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):java.lang.Iterable<any /*net.minecraft.util.shape.VoxelShape*/>;
	getBlockEntity( pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.block.entity.BlockEntity*/;
	getBlockEntity<T>( pos:net.minecraft.util.math.BlockPos, type:any /*net.minecraft.block.entity.BlockEntityType*/ ):java.util.Optional<T>;
	getBlockState( pos:net.minecraft.util.math.BlockPos ):net.minecraft.block.BlockState;
	getBlockTickScheduler(  ):any /*net.minecraft.world.tick.QueryableTickScheduler*/;
	getBottomSectionCoord(  ):int;
	getBottomY(  ):int;
	getBrewingRecipeRegistry(  ):any /*net.minecraft.recipe.BrewingRecipeRegistry*/;
	getBrightness( direction:net.minecraft.util.math.Direction, shaded:boolean ):float;
	getBrightness( pos:net.minecraft.util.math.BlockPos ):float;
	getChunk( chunkX:int, chunkZ:int, leastStatus:any /*net.minecraft.world.chunk.ChunkStatus*/, create:boolean ):any /*net.minecraft.world.chunk.Chunk*/;
	getChunk( chunkX:int, chunkZ:int, status:any /*net.minecraft.world.chunk.ChunkStatus*/ ):any /*net.minecraft.world.chunk.Chunk*/;
	getChunk( i:int, j:int ):any /*net.minecraft.world.chunk.WorldChunk*/;
	getChunk( pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.world.chunk.Chunk*/;
	getChunkAsView( chunkX:int, chunkZ:int ):BlockView;
	getChunkManager(  ):any /*net.minecraft.world.chunk.ChunkManager*/;
	getClosestEntity<T>( entityClass:java.lang.Class<T>, targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, entity:net.minecraft.entity.LivingEntity, x:double, y:double, z:double, box:net.minecraft.util.math.Box ):T;
	getClosestEntity<T>( entityList:java.util.List<T>, targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, entity:net.minecraft.entity.LivingEntity, x:double, y:double, z:double ):T;
	getClosestPlayer( entity:net.minecraft.entity.Entity, maxDistance:double ):net.minecraft.entity.player.PlayerEntity;
	getClosestPlayer( targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, entity:net.minecraft.entity.LivingEntity ):net.minecraft.entity.player.PlayerEntity;
	getClosestPlayer( targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, entity:net.minecraft.entity.LivingEntity, x:double, y:double, z:double ):net.minecraft.entity.player.PlayerEntity;
	getClosestPlayer( targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, x:double, y:double, z:double ):net.minecraft.entity.player.PlayerEntity;
	getClosestPlayer( x:double, y:double, z:double, maxDistance:double, ignoreCreative:boolean ):net.minecraft.entity.player.PlayerEntity;
	getClosestPlayer( x:double, y:double, z:double, maxDistance:double, targetPredicate:java.util.function.Predicate<net.minecraft.entity.Entity> ):net.minecraft.entity.player.PlayerEntity;
	getCollisions( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):java.lang.Iterable<any /*net.minecraft.util.shape.VoxelShape*/>;
	getColor( pos:net.minecraft.util.math.BlockPos, colorResolver:any /*net.minecraft.world.biome.ColorResolver*/ ):int;
	getDamageSources(  ):any /*net.minecraft.entity.damage.DamageSources*/;
	getDifficulty(  ):Difficulty;
	getDimension(  ):any /*net.minecraft.world.dimension.DimensionType*/;
	getDimensionEntry(  ):net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.dimension.DimensionType*/>;
	getDismountHeight( blockCollisionShape:any /*net.minecraft.util.shape.VoxelShape*/, belowBlockCollisionShapeGetter:java.util.function.Supplier<any /*net.minecraft.util.shape.VoxelShape*/> ):double;
	getDismountHeight( pos:net.minecraft.util.math.BlockPos ):double;
	getEmittedRedstonePower( pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction ):int;
	getEmittedRedstonePower( pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction, onlyFromGate:boolean ):int;
	getEnabledFeatures(  ):any /*net.minecraft.resource.featuretoggle.FeatureSet*/;
	getEntitiesByClass<T>( entityClass:java.lang.Class<T>, box:net.minecraft.util.math.Box, predicate:java.util.function.Predicate<T> ):java.util.List<T>;
	getEntitiesByType<T>( filter:any /*net.minecraft.util.TypeFilter*/, box:net.minecraft.util.math.Box, predicate:java.util.function.Predicate<T> ):java.util.List<T>;
	getEntityById( id:int ):net.minecraft.entity.Entity;
	getEntityCollisions( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):java.util.List<any /*net.minecraft.util.shape.VoxelShape*/>;
	getFluidState( pos:net.minecraft.util.math.BlockPos ):net.minecraft.fluid.FluidState;
	getFluidTickScheduler(  ):any /*net.minecraft.world.tick.QueryableTickScheduler*/;
	getGameRules(  ):any /*net.minecraft.world.GameRules*/;
	getGeneratorStoredBiome( biomeX:int, biomeY:int, biomeZ:int ):net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.biome.Biome*/>;
	getHeight(  ):int;
	getLevelProperties(  ):any /*net.minecraft.world.WorldProperties*/;
	getLightLevel( pos:net.minecraft.util.math.BlockPos ):int;
	getLightLevel( pos:net.minecraft.util.math.BlockPos, ambientDarkness:int ):int;
	getLightLevel( type:any /*net.minecraft.world.LightType*/, pos:net.minecraft.util.math.BlockPos ):int;
	getLightingProvider(  ):any /*net.minecraft.world.chunk.light.LightingProvider*/;
	getLocalDifficulty( pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.world.LocalDifficulty*/;
	getLuminance( pos:net.minecraft.util.math.BlockPos ):int;
	getLunarTime(  ):long;
	getMapState( id:any /*net.minecraft.component.type.MapIdComponent*/ ):any /*net.minecraft.item.map.MapState*/;
	getMaxLightLevel(  ):int;
	getMoonPhase(  ):int;
	getMoonSize(  ):float;
	getNonSpectatingEntities<T>( entityClass:java.lang.Class<T>, box:net.minecraft.util.math.Box ):java.util.List<T>;
	getOtherEntities( except:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):java.util.List<net.minecraft.entity.Entity>;
	getOtherEntities( except:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box, predicate:java.util.function.Predicate<net.minecraft.entity.Entity> ):java.util.List<net.minecraft.entity.Entity>;
	getPhototaxisFavor( pos:net.minecraft.util.math.BlockPos ):float;
	getPlayerByUuid( uuid:java.util.UUID ):net.minecraft.entity.player.PlayerEntity;
	getPlayers(  ):java.util.List<net.minecraft.entity.player.PlayerEntity>;
	getPlayers( targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, entity:net.minecraft.entity.LivingEntity, box:net.minecraft.util.math.Box ):java.util.List<net.minecraft.entity.player.PlayerEntity>;
	getProfiler(  ):any /*net.minecraft.util.profiler.Profiler*/;
	getProfilerSupplier(  ):java.util.function.Supplier<any /*net.minecraft.util.profiler.Profiler*/>;
	getRainGradient( delta:float ):float;
	getRandom(  ):any /*net.minecraft.util.math.random.Random*/;
	getRandomPosInChunk( x:int, y:int, z:int, i:int ):net.minecraft.util.math.BlockPos;
	getReceivedRedstonePower( pos:net.minecraft.util.math.BlockPos ):int;
	getReceivedStrongRedstonePower( pos:net.minecraft.util.math.BlockPos ):int;
	getRecipeManager(  ):any /*net.minecraft.recipe.RecipeManager*/;
	getRegistryKey(  ):net.minecraft.registry.RegistryKey<World>;
	getRegistryManager(  ):any /*net.minecraft.registry.DynamicRegistryManager*/;
	getScoreboard(  ):any /*net.minecraft.scoreboard.Scoreboard*/;
	getSeaLevel(  ):int;
	getSectionIndex( y:int ):int;
	getServer(  ):any /*net.minecraft.server.MinecraftServer*/;
	getSkyAngle( tickDelta:float ):float;
	getSkyAngleRadians( tickDelta:float ):float;
	getSpawnAngle(  ):float;
	getSpawnPos(  ):net.minecraft.util.math.BlockPos;
	getStatesInBox( box:net.minecraft.util.math.Box ):java.util.stream.Stream<net.minecraft.block.BlockState>;
	getStatesInBoxIfLoaded( box:net.minecraft.util.math.Box ):java.util.stream.Stream<net.minecraft.block.BlockState>;
	getStrongRedstonePower( pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction ):int;
	getTargets<T>( entityClass:java.lang.Class<T>, targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, targetingEntity:net.minecraft.entity.LivingEntity, box:net.minecraft.util.math.Box ):java.util.List<T>;
	getThunderGradient( delta:float ):float;
	getTickManager(  ):any /*net.minecraft.world.tick.TickManager*/;
	getTickOrder(  ):long;
	getTime(  ):long;
	getTimeOfDay(  ):long;
	getTopPosition( heightmap:any /*net.minecraft.world.Heightmap$Type*/, pos:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.BlockPos;
	getTopSectionCoord(  ):int;
	getTopY(  ):int;
	getTopY( heightmap:any /*net.minecraft.world.Heightmap$Type*/, x:int, z:int ):int;
	getWorldBorder(  ):any /*net.minecraft.world.border.WorldBorder*/;
	getWorldChunk( pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.world.chunk.WorldChunk*/;
	hasRain( pos:net.minecraft.util.math.BlockPos ):boolean;
	increaseAndGetMapId(  ):any /*net.minecraft.component.type.MapIdComponent*/;
	isAir( pos:net.minecraft.util.math.BlockPos ):boolean;
	isBlockSpaceEmpty( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):boolean;
	isChunkLoaded( chunkX:int, chunkZ:int ):boolean;
	isChunkLoaded( pos:net.minecraft.util.math.BlockPos ):boolean;
	isClient(  ):boolean;
	isDay(  ):boolean;
	isDebugWorld(  ):boolean;
	isDirectionSolid( pos:net.minecraft.util.math.BlockPos, entity:net.minecraft.entity.Entity, direction:net.minecraft.util.math.Direction ):boolean;
	isEmittingRedstonePower( pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction ):boolean;
	isInBuildLimit( pos:net.minecraft.util.math.BlockPos ):boolean;
	isNight(  ):boolean;
	isOutOfHeightLimit( pos:net.minecraft.util.math.BlockPos ):boolean;
	isOutOfHeightLimit( y:int ):boolean;
	isPlayerInRange( x:double, y:double, z:double, range:double ):boolean;
	isPosLoaded( x:int, z:int ):boolean;
	isRaining(  ):boolean;
	isReceivingRedstonePower( pos:net.minecraft.util.math.BlockPos ):boolean;
	isRegionLoaded( min:net.minecraft.util.math.BlockPos, max:net.minecraft.util.math.BlockPos ):boolean;
	isRegionLoaded( minX:int, minY:int, minZ:int, maxX:int, maxY:int, maxZ:int ):boolean;
	isRegionLoaded( minX:int, minZ:int, maxX:int, maxZ:int ):boolean;
	isSavingDisabled(  ):boolean;
	isSkyVisible( pos:net.minecraft.util.math.BlockPos ):boolean;
	isSkyVisibleAllowingSea( pos:net.minecraft.util.math.BlockPos ):boolean;
	isSpaceEmpty( box:net.minecraft.util.math.Box ):boolean;
	isSpaceEmpty( entity:net.minecraft.entity.Entity ):boolean;
	isSpaceEmpty( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):boolean;
	isThundering(  ):boolean;
	isTopSolid( pos:net.minecraft.util.math.BlockPos, entity:net.minecraft.entity.Entity ):boolean;
	isWater( pos:net.minecraft.util.math.BlockPos ):boolean;
	markDirty( pos:net.minecraft.util.math.BlockPos ):void;
	onBlockChanged( pos:net.minecraft.util.math.BlockPos, oldBlock:net.minecraft.block.BlockState, newBlock:net.minecraft.block.BlockState ):void;
	playSound( except:net.minecraft.entity.player.PlayerEntity, pos:net.minecraft.util.math.BlockPos, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory ):void;
	playSound( source:net.minecraft.entity.Entity, pos:net.minecraft.util.math.BlockPos, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, pos:net.minecraft.util.math.BlockPos, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, x:double, y:double, z:double, sound:net.minecraft.registry.entry.RegistryEntry<net.minecraft.sound.SoundEvent>, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, x:double, y:double, z:double, sound:net.minecraft.registry.entry.RegistryEntry<net.minecraft.sound.SoundEvent>, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float, seed:long ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, x:double, y:double, z:double, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, x:double, y:double, z:double, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, x:double, y:double, z:double, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float, seed:long ):void;
	playSound( x:double, y:double, z:double, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float, useDistance:boolean ):void;
	playSoundAtBlockCenter( pos:net.minecraft.util.math.BlockPos, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float, useDistance:boolean ):void;
	playSoundFromEntity( entity:net.minecraft.entity.Entity, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	playSoundFromEntity( source:net.minecraft.entity.player.PlayerEntity, entity:net.minecraft.entity.Entity, sound:net.minecraft.registry.entry.RegistryEntry<net.minecraft.sound.SoundEvent>, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float, seed:long ):void;
	playSoundFromEntity( source:net.minecraft.entity.player.PlayerEntity, entity:net.minecraft.entity.Entity, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	putMapState( id:any /*net.minecraft.component.type.MapIdComponent*/, state:any /*net.minecraft.item.map.MapState*/ ):void;
	raycast( context:any /*net.minecraft.world.BlockStateRaycastContext*/ ):net.minecraft.util.hit.BlockHitResult;
	raycast( context:any /*net.minecraft.world.RaycastContext*/ ):net.minecraft.util.hit.BlockHitResult;
	raycastBlock( start:net.minecraft.util.math.Vec3d, end:net.minecraft.util.math.Vec3d, pos:net.minecraft.util.math.BlockPos, shape:any /*net.minecraft.util.shape.VoxelShape*/, state:net.minecraft.block.BlockState ):net.minecraft.util.hit.BlockHitResult;
	removeBlock( pos:net.minecraft.util.math.BlockPos, move:boolean ):boolean;
	removeBlockEntity( pos:net.minecraft.util.math.BlockPos ):void;
	replaceWithStateForNeighborUpdate( direction:net.minecraft.util.math.Direction, neighborState:net.minecraft.block.BlockState, pos:net.minecraft.util.math.BlockPos, neighborPos:net.minecraft.util.math.BlockPos, flags:int, maxUpdateDepth:int ):void;
	scheduleBlockRerenderIfNeeded( pos:net.minecraft.util.math.BlockPos, old:net.minecraft.block.BlockState, updated:net.minecraft.block.BlockState ):void;
	scheduleBlockTick( pos:net.minecraft.util.math.BlockPos, block:net.minecraft.block.Block, delay:int ):void;
	scheduleBlockTick( pos:net.minecraft.util.math.BlockPos, block:net.minecraft.block.Block, delay:int, priority:any /*net.minecraft.world.tick.TickPriority*/ ):void;
	scheduleFluidTick( pos:net.minecraft.util.math.BlockPos, fluid:net.minecraft.fluid.Fluid, delay:int ):void;
	scheduleFluidTick( pos:net.minecraft.util.math.BlockPos, fluid:net.minecraft.fluid.Fluid, delay:int, priority:any /*net.minecraft.world.tick.TickPriority*/ ):void;
	sectionCoordToIndex( coord:int ):int;
	sectionIndexToCoord( index:int ):int;
	sendEntityDamage( entity:net.minecraft.entity.Entity, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	sendEntityStatus( entity:net.minecraft.entity.Entity, status:any /*byte*/ ):void;
	sendPacket( packet:net.minecraft.network.packet.Packet<any /*java.lang.Object*/> ):void;
	setBlockBreakingInfo( entityId:int, pos:net.minecraft.util.math.BlockPos, progress:int ):void;
	setBlockState( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState ):boolean;
	setBlockState( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, flags:int ):boolean;
	setBlockState( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, flags:int, maxUpdateDepth:int ):boolean;
	setLightningTicksLeft( lightningTicksLeft:int ):void;
	setMobSpawnOptions( spawnMonsters:boolean, spawnAnimals:boolean ):void;
	setRainGradient( rainGradient:float ):void;
	setThunderGradient( thunderGradient:float ):void;
	shouldTickBlockPos( pos:net.minecraft.util.math.BlockPos ):boolean;
	shouldTickBlocksInChunk( chunkPos:long ):boolean;
	shouldUpdatePostDeath( entity:net.minecraft.entity.Entity ):boolean;
	spawnEntity( entity:net.minecraft.entity.Entity ):boolean;
	static isValid( pos:net.minecraft.util.math.BlockPos ):boolean;
	syncGlobalEvent( eventId:int, pos:net.minecraft.util.math.BlockPos, data:int ):void;
	syncWorldEvent( eventId:int, pos:net.minecraft.util.math.BlockPos, data:int ):void;
	syncWorldEvent( player:net.minecraft.entity.player.PlayerEntity, eventId:int, pos:net.minecraft.util.math.BlockPos, data:int ):void;
	testBlockState( pos:net.minecraft.util.math.BlockPos, state:java.util.function.Predicate<net.minecraft.block.BlockState> ):boolean;
	testFluidState( pos:net.minecraft.util.math.BlockPos, state:java.util.function.Predicate<net.minecraft.fluid.FluidState> ):boolean;
	tickEntity<T>( tickConsumer:java.util.function.Consumer<T>, entity:T ):void;
	toString(  ):string;
	updateComparators( pos:net.minecraft.util.math.BlockPos, block:net.minecraft.block.Block ):void;
	updateListeners( pos:net.minecraft.util.math.BlockPos, oldState:net.minecraft.block.BlockState, newState:net.minecraft.block.BlockState, flags:int ):void;
	updateNeighbor( pos:net.minecraft.util.math.BlockPos, sourceBlock:net.minecraft.block.Block, sourcePos:net.minecraft.util.math.BlockPos ):void;
	updateNeighbor( state:net.minecraft.block.BlockState, pos:net.minecraft.util.math.BlockPos, sourceBlock:net.minecraft.block.Block, sourcePos:net.minecraft.util.math.BlockPos, notify:boolean ):void;
	updateNeighbors( pos:net.minecraft.util.math.BlockPos, block:net.minecraft.block.Block ):void;
	updateNeighborsAlways( pos:net.minecraft.util.math.BlockPos, sourceBlock:net.minecraft.block.Block ):void;
	updateNeighborsExcept( pos:net.minecraft.util.math.BlockPos, sourceBlock:net.minecraft.block.Block, direction:net.minecraft.util.math.Direction ):void;

} // end World

} // end namespace net.minecraft.world

declare namespace net.minecraft.client.world {

class ClientWorld/* extends net.minecraft.world.World*/ {

	addBlockBreakParticles( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState ):void;
	addBlockEntity( blockEntity:any /*net.minecraft.block.entity.BlockEntity*/ ):void;
	addBlockEntityTicker( ticker:any /*net.minecraft.world.chunk.BlockEntityTickInvoker*/ ):void;
	addDetailsToCrashReport( report:any /*net.minecraft.util.crash.CrashReport*/ ):any /*net.minecraft.util.crash.CrashReportSection*/;
	addEntity( entity:net.minecraft.entity.Entity ):void;
	addFireworkParticle( x:double, y:double, z:double, velocityX:double, velocityY:double, velocityZ:double, explosions:java.util.List<any /*net.minecraft.component.type.FireworkExplosionComponent*/> ):void;
	addImportantParticle( parameters:any /*net.minecraft.particle.ParticleEffect*/, alwaysSpawn:boolean, x:double, y:double, z:double, velocityX:double, velocityY:double, velocityZ:double ):void;
	addImportantParticle( parameters:any /*net.minecraft.particle.ParticleEffect*/, x:double, y:double, z:double, velocityX:double, velocityY:double, velocityZ:double ):void;
	addParticle( parameters:any /*net.minecraft.particle.ParticleEffect*/, alwaysSpawn:boolean, x:double, y:double, z:double, velocityX:double, velocityY:double, velocityZ:double ):void;
	addParticle( parameters:any /*net.minecraft.particle.ParticleEffect*/, x:double, y:double, z:double, velocityX:double, velocityY:double, velocityZ:double ):void;
	addSyncedBlockEvent( pos:net.minecraft.util.math.BlockPos, block:net.minecraft.block.Block, type:int, data:int ):void;
	asString(  ):string;
	breakBlock( pos:net.minecraft.util.math.BlockPos, drop:boolean ):boolean;
	breakBlock( pos:net.minecraft.util.math.BlockPos, drop:boolean, breakingEntity:net.minecraft.entity.Entity ):boolean;
	breakBlock( pos:net.minecraft.util.math.BlockPos, drop:boolean, breakingEntity:net.minecraft.entity.Entity, maxUpdateDepth:int ):boolean;
	calculateAmbientDarkness(  ):void;
	calculateColor( pos:net.minecraft.util.math.BlockPos, colorResolver:any /*net.minecraft.world.biome.ColorResolver*/ ):int;
	canCollide( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):boolean;
	canPlace( state:net.minecraft.block.BlockState, pos:net.minecraft.util.math.BlockPos, context:any /*net.minecraft.block.ShapeContext*/ ):boolean;
	canPlayerModifyAt( player:net.minecraft.entity.player.PlayerEntity, pos:net.minecraft.util.math.BlockPos ):boolean;
	canSetBlock( pos:net.minecraft.util.math.BlockPos ):boolean;
	close(  ):void;
	collectEntitiesByType<T>( filter:any /*net.minecraft.util.TypeFilter*/, box:net.minecraft.util.math.Box, predicate:java.util.function.Predicate<T>, result:java.util.List<T> ):void;
	collectEntitiesByType<T>( filter:any /*net.minecraft.util.TypeFilter*/, box:net.minecraft.util.math.Box, predicate:java.util.function.Predicate<T>, result:java.util.List<T>, limit:int ):void;
	containsFluid( box:net.minecraft.util.math.Box ):boolean;
	countVerticalSections(  ):int;
	createCommandRegistryWrapper( registryRef:net.minecraft.registry.RegistryKey<any /*net.minecraft.registry.Registry*/> ):any /*net.minecraft.registry.RegistryWrapper*/;
	createExplosion( entity:net.minecraft.entity.Entity, damageSource:any /*net.minecraft.entity.damage.DamageSource*/, behavior:any /*net.minecraft.world.explosion.ExplosionBehavior*/, pos:net.minecraft.util.math.Vec3d, power:float, createFire:boolean, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/ ):any /*net.minecraft.world.explosion.Explosion*/;
	createExplosion( entity:net.minecraft.entity.Entity, damageSource:any /*net.minecraft.entity.damage.DamageSource*/, behavior:any /*net.minecraft.world.explosion.ExplosionBehavior*/, x:double, y:double, z:double, power:float, createFire:boolean, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/ ):any /*net.minecraft.world.explosion.Explosion*/;
	createExplosion( entity:net.minecraft.entity.Entity, damageSource:any /*net.minecraft.entity.damage.DamageSource*/, behavior:any /*net.minecraft.world.explosion.ExplosionBehavior*/, x:double, y:double, z:double, power:float, createFire:boolean, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/, particle:any /*net.minecraft.particle.ParticleEffect*/, emitterParticle:any /*net.minecraft.particle.ParticleEffect*/, soundEvent:net.minecraft.registry.entry.RegistryEntry<net.minecraft.sound.SoundEvent> ):any /*net.minecraft.world.explosion.Explosion*/;
	createExplosion( entity:net.minecraft.entity.Entity, damageSource:any /*net.minecraft.entity.damage.DamageSource*/, behavior:any /*net.minecraft.world.explosion.ExplosionBehavior*/, x:double, y:double, z:double, power:float, createFire:boolean, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/, particles:boolean, particle:any /*net.minecraft.particle.ParticleEffect*/, emitterParticle:any /*net.minecraft.particle.ParticleEffect*/, soundEvent:net.minecraft.registry.entry.RegistryEntry<net.minecraft.sound.SoundEvent> ):any /*net.minecraft.world.explosion.Explosion*/;
	createExplosion( entity:net.minecraft.entity.Entity, x:double, y:double, z:double, power:float, createFire:boolean, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/ ):any /*net.minecraft.world.explosion.Explosion*/;
	createExplosion( entity:net.minecraft.entity.Entity, x:double, y:double, z:double, power:float, explosionSourceType:any /*net.minecraft.world.World$ExplosionSourceType*/ ):any /*net.minecraft.world.explosion.Explosion*/;
	disconnect(  ):void;
	doRandomBlockDisplayTicks( centerX:int, centerY:int, centerZ:int ):void;
	doesNotIntersectEntities( entity:net.minecraft.entity.Entity ):boolean;
	doesNotIntersectEntities( except:net.minecraft.entity.Entity, shape:any /*net.minecraft.util.shape.VoxelShape*/ ):boolean;
	emitGameEvent( entity:net.minecraft.entity.Entity, event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, pos:net.minecraft.util.math.BlockPos ):void;
	emitGameEvent( entity:net.minecraft.entity.Entity, event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, pos:net.minecraft.util.math.Vec3d ):void;
	emitGameEvent( event:net.minecraft.registry.RegistryKey<any /*net.minecraft.world.event.GameEvent*/>, pos:net.minecraft.util.math.BlockPos, emitter:any /*net.minecraft.world.event.GameEvent$Emitter*/ ):void;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, emitterPos:net.minecraft.util.math.Vec3d, emitter:any /*net.minecraft.world.event.GameEvent$Emitter*/ ):void;
	emitGameEvent( event:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.event.GameEvent*/>, pos:net.minecraft.util.math.BlockPos, emitter:any /*net.minecraft.world.event.GameEvent$Emitter*/ ):void;
	enqueueChunkUpdate( updater:any /*java.lang.Runnable*/ ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	findClosestCollision( entity:net.minecraft.entity.Entity, shape:any /*net.minecraft.util.shape.VoxelShape*/, target:net.minecraft.util.math.Vec3d, x:double, y:double, z:double ):java.util.Optional<net.minecraft.util.math.Vec3d>;
	findSupportingBlockPos( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):java.util.Optional<net.minecraft.util.math.BlockPos>;
	getAmbientDarkness(  ):int;
	getBaseLightLevel( pos:net.minecraft.util.math.BlockPos, ambientDarkness:int ):int;
	getBiome( pos:net.minecraft.util.math.BlockPos ):net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.biome.Biome*/>;
	getBiomeAccess(  ):any /*net.minecraft.world.biome.source.BiomeAccess*/;
	getBiomeForNoiseGen( biomeX:int, biomeY:int, biomeZ:int ):net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.biome.Biome*/>;
	getBlockCollisions( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):java.lang.Iterable<any /*net.minecraft.util.shape.VoxelShape*/>;
	getBlockEntity( pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.block.entity.BlockEntity*/;
	getBlockEntity<T>( pos:net.minecraft.util.math.BlockPos, type:any /*net.minecraft.block.entity.BlockEntityType*/ ):java.util.Optional<T>;
	getBlockState( pos:net.minecraft.util.math.BlockPos ):net.minecraft.block.BlockState;
	getBlockTickScheduler(  ):any /*net.minecraft.world.tick.QueryableTickScheduler*/;
	getBottomSectionCoord(  ):int;
	getBottomY(  ):int;
	getBrewingRecipeRegistry(  ):any /*net.minecraft.recipe.BrewingRecipeRegistry*/;
	getBrightness( direction:net.minecraft.util.math.Direction, shaded:boolean ):float;
	getBrightness( pos:net.minecraft.util.math.BlockPos ):float;
	getChunk( chunkX:int, chunkZ:int, leastStatus:any /*net.minecraft.world.chunk.ChunkStatus*/, create:boolean ):any /*net.minecraft.world.chunk.Chunk*/;
	getChunk( chunkX:int, chunkZ:int, status:any /*net.minecraft.world.chunk.ChunkStatus*/ ):any /*net.minecraft.world.chunk.Chunk*/;
	getChunk( i:int, j:int ):any /*net.minecraft.world.chunk.WorldChunk*/;
	getChunk( pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.world.chunk.Chunk*/;
	getChunkAsView( chunkX:int, chunkZ:int ):net.minecraft.world.BlockView;
	getChunkManager(  ):any /*net.minecraft.client.world.ClientChunkManager*/;
	getClosestEntity<T>( entityClass:java.lang.Class<T>, targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, entity:net.minecraft.entity.LivingEntity, x:double, y:double, z:double, box:net.minecraft.util.math.Box ):T;
	getClosestEntity<T>( entityList:java.util.List<T>, targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, entity:net.minecraft.entity.LivingEntity, x:double, y:double, z:double ):T;
	getClosestPlayer( entity:net.minecraft.entity.Entity, maxDistance:double ):net.minecraft.entity.player.PlayerEntity;
	getClosestPlayer( targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, entity:net.minecraft.entity.LivingEntity ):net.minecraft.entity.player.PlayerEntity;
	getClosestPlayer( targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, entity:net.minecraft.entity.LivingEntity, x:double, y:double, z:double ):net.minecraft.entity.player.PlayerEntity;
	getClosestPlayer( targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, x:double, y:double, z:double ):net.minecraft.entity.player.PlayerEntity;
	getClosestPlayer( x:double, y:double, z:double, maxDistance:double, ignoreCreative:boolean ):net.minecraft.entity.player.PlayerEntity;
	getClosestPlayer( x:double, y:double, z:double, maxDistance:double, targetPredicate:java.util.function.Predicate<net.minecraft.entity.Entity> ):net.minecraft.entity.player.PlayerEntity;
	getCloudsColor( tickDelta:float ):net.minecraft.util.math.Vec3d;
	getCollisions( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):java.lang.Iterable<any /*net.minecraft.util.shape.VoxelShape*/>;
	getColor( pos:net.minecraft.util.math.BlockPos, colorResolver:any /*net.minecraft.world.biome.ColorResolver*/ ):int;
	getDamageSources(  ):any /*net.minecraft.entity.damage.DamageSources*/;
	getDifficulty(  ):net.minecraft.world.Difficulty;
	getDimension(  ):any /*net.minecraft.world.dimension.DimensionType*/;
	getDimensionEffects(  ):any /*net.minecraft.client.render.DimensionEffects*/;
	getDimensionEntry(  ):net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.dimension.DimensionType*/>;
	getDismountHeight( blockCollisionShape:any /*net.minecraft.util.shape.VoxelShape*/, belowBlockCollisionShapeGetter:java.util.function.Supplier<any /*net.minecraft.util.shape.VoxelShape*/> ):double;
	getDismountHeight( pos:net.minecraft.util.math.BlockPos ):double;
	getEmittedRedstonePower( pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction ):int;
	getEmittedRedstonePower( pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction, onlyFromGate:boolean ):int;
	getEnabledFeatures(  ):any /*net.minecraft.resource.featuretoggle.FeatureSet*/;
	getEntities(  ):java.lang.Iterable<net.minecraft.entity.Entity>;
	getEntitiesByClass<T>( entityClass:java.lang.Class<T>, box:net.minecraft.util.math.Box, predicate:java.util.function.Predicate<T> ):java.util.List<T>;
	getEntitiesByType<T>( filter:any /*net.minecraft.util.TypeFilter*/, box:net.minecraft.util.math.Box, predicate:java.util.function.Predicate<T> ):java.util.List<T>;
	getEntityById( id:int ):net.minecraft.entity.Entity;
	getEntityCollisions( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):java.util.List<any /*net.minecraft.util.shape.VoxelShape*/>;
	getFluidState( pos:net.minecraft.util.math.BlockPos ):net.minecraft.fluid.FluidState;
	getFluidTickScheduler(  ):any /*net.minecraft.world.tick.QueryableTickScheduler*/;
	getGameRules(  ):any /*net.minecraft.world.GameRules*/;
	getGeneratorStoredBiome( biomeX:int, biomeY:int, biomeZ:int ):net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.world.biome.Biome*/>;
	getHeight(  ):int;
	getLevelProperties(  ):any /*net.minecraft.client.world.ClientWorld$Properties*/;
	getLightLevel( pos:net.minecraft.util.math.BlockPos ):int;
	getLightLevel( pos:net.minecraft.util.math.BlockPos, ambientDarkness:int ):int;
	getLightLevel( type:any /*net.minecraft.world.LightType*/, pos:net.minecraft.util.math.BlockPos ):int;
	getLightingProvider(  ):any /*net.minecraft.world.chunk.light.LightingProvider*/;
	getLightningTicksLeft(  ):int;
	getLocalDifficulty( pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.world.LocalDifficulty*/;
	getLuminance( pos:net.minecraft.util.math.BlockPos ):int;
	getLunarTime(  ):long;
	getMapState( id:any /*net.minecraft.component.type.MapIdComponent*/ ):any /*net.minecraft.item.map.MapState*/;
	getMaxLightLevel(  ):int;
	getMoonPhase(  ):int;
	getMoonSize(  ):float;
	getNonSpectatingEntities<T>( entityClass:java.lang.Class<T>, box:net.minecraft.util.math.Box ):java.util.List<T>;
	getOtherEntities( except:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):java.util.List<net.minecraft.entity.Entity>;
	getOtherEntities( except:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box, predicate:java.util.function.Predicate<net.minecraft.entity.Entity> ):java.util.List<net.minecraft.entity.Entity>;
	getPhototaxisFavor( pos:net.minecraft.util.math.BlockPos ):float;
	getPlayerByUuid( uuid:java.util.UUID ):net.minecraft.entity.player.PlayerEntity;
	getPlayers(  ):java.util.List<any /*net.minecraft.client.network.AbstractClientPlayerEntity*/>;
	getPlayers( targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, entity:net.minecraft.entity.LivingEntity, box:net.minecraft.util.math.Box ):java.util.List<net.minecraft.entity.player.PlayerEntity>;
	getProfiler(  ):any /*net.minecraft.util.profiler.Profiler*/;
	getProfilerSupplier(  ):java.util.function.Supplier<any /*net.minecraft.util.profiler.Profiler*/>;
	getRainGradient( delta:float ):float;
	getRandom(  ):any /*net.minecraft.util.math.random.Random*/;
	getRandomPosInChunk( x:int, y:int, z:int, i:int ):net.minecraft.util.math.BlockPos;
	getReceivedRedstonePower( pos:net.minecraft.util.math.BlockPos ):int;
	getReceivedStrongRedstonePower( pos:net.minecraft.util.math.BlockPos ):int;
	getRecipeManager(  ):any /*net.minecraft.recipe.RecipeManager*/;
	getRegistryKey(  ):net.minecraft.registry.RegistryKey<net.minecraft.world.World>;
	getRegistryManager(  ):any /*net.minecraft.registry.DynamicRegistryManager*/;
	getRegularEntityCount(  ):int;
	getScoreboard(  ):any /*net.minecraft.scoreboard.Scoreboard*/;
	getSeaLevel(  ):int;
	getSectionIndex( y:int ):int;
	getServer(  ):any /*net.minecraft.server.MinecraftServer*/;
	getSimulationDistance(  ):int;
	getSkyAngle( tickDelta:float ):float;
	getSkyAngleRadians( tickDelta:float ):float;
	getSkyBrightness( tickDelta:float ):float;
	getSkyColor( cameraPos:net.minecraft.util.math.Vec3d, tickDelta:float ):net.minecraft.util.math.Vec3d;
	getSpawnAngle(  ):float;
	getSpawnPos(  ):net.minecraft.util.math.BlockPos;
	getStarBrightness( tickDelta:float ):float;
	getStatesInBox( box:net.minecraft.util.math.Box ):java.util.stream.Stream<net.minecraft.block.BlockState>;
	getStatesInBoxIfLoaded( box:net.minecraft.util.math.Box ):java.util.stream.Stream<net.minecraft.block.BlockState>;
	getStrongRedstonePower( pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction ):int;
	getTargets<T>( entityClass:java.lang.Class<T>, targetPredicate:any /*net.minecraft.entity.ai.TargetPredicate*/, targetingEntity:net.minecraft.entity.LivingEntity, box:net.minecraft.util.math.Box ):java.util.List<T>;
	getThunderGradient( delta:float ):float;
	getTickManager(  ):any /*net.minecraft.world.tick.TickManager*/;
	getTickOrder(  ):long;
	getTime(  ):long;
	getTimeOfDay(  ):long;
	getTopPosition( heightmap:any /*net.minecraft.world.Heightmap$Type*/, pos:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.BlockPos;
	getTopSectionCoord(  ):int;
	getTopY(  ):int;
	getTopY( heightmap:any /*net.minecraft.world.Heightmap$Type*/, x:int, z:int ):int;
	getWorldBorder(  ):any /*net.minecraft.world.border.WorldBorder*/;
	getWorldChunk( pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.world.chunk.WorldChunk*/;
	handleBlockUpdate( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, flags:int ):void;
	handlePlayerActionResponse( sequence:int ):void;
	hasNoChunkUpdaters(  ):boolean;
	hasRain( pos:net.minecraft.util.math.BlockPos ):boolean;
	increaseAndGetMapId(  ):any /*net.minecraft.component.type.MapIdComponent*/;
	isAir( pos:net.minecraft.util.math.BlockPos ):boolean;
	isBlockSpaceEmpty( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):boolean;
	isChunkLoaded( chunkX:int, chunkZ:int ):boolean;
	isChunkLoaded( pos:net.minecraft.util.math.BlockPos ):boolean;
	isClient(  ):boolean;
	isDay(  ):boolean;
	isDebugWorld(  ):boolean;
	isDirectionSolid( pos:net.minecraft.util.math.BlockPos, entity:net.minecraft.entity.Entity, direction:net.minecraft.util.math.Direction ):boolean;
	isEmittingRedstonePower( pos:net.minecraft.util.math.BlockPos, direction:net.minecraft.util.math.Direction ):boolean;
	isInBuildLimit( pos:net.minecraft.util.math.BlockPos ):boolean;
	isNight(  ):boolean;
	isOutOfHeightLimit( pos:net.minecraft.util.math.BlockPos ):boolean;
	isOutOfHeightLimit( y:int ):boolean;
	isPlayerInRange( x:double, y:double, z:double, range:double ):boolean;
	isPosLoaded( x:int, z:int ):boolean;
	isRaining(  ):boolean;
	isReceivingRedstonePower( pos:net.minecraft.util.math.BlockPos ):boolean;
	isRegionLoaded( min:net.minecraft.util.math.BlockPos, max:net.minecraft.util.math.BlockPos ):boolean;
	isRegionLoaded( minX:int, minY:int, minZ:int, maxX:int, maxY:int, maxZ:int ):boolean;
	isRegionLoaded( minX:int, minZ:int, maxX:int, maxZ:int ):boolean;
	isSavingDisabled(  ):boolean;
	isSkyVisible( pos:net.minecraft.util.math.BlockPos ):boolean;
	isSkyVisibleAllowingSea( pos:net.minecraft.util.math.BlockPos ):boolean;
	isSpaceEmpty( box:net.minecraft.util.math.Box ):boolean;
	isSpaceEmpty( entity:net.minecraft.entity.Entity ):boolean;
	isSpaceEmpty( entity:net.minecraft.entity.Entity, box:net.minecraft.util.math.Box ):boolean;
	isThundering(  ):boolean;
	isTopSolid( pos:net.minecraft.util.math.BlockPos, entity:net.minecraft.entity.Entity ):boolean;
	isWater( pos:net.minecraft.util.math.BlockPos ):boolean;
	markDirty( pos:net.minecraft.util.math.BlockPos ):void;
	onBlockChanged( pos:net.minecraft.util.math.BlockPos, oldBlock:net.minecraft.block.BlockState, newBlock:net.minecraft.block.BlockState ):void;
	playSound( except:net.minecraft.entity.player.PlayerEntity, pos:net.minecraft.util.math.BlockPos, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory ):void;
	playSound( source:net.minecraft.entity.Entity, pos:net.minecraft.util.math.BlockPos, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, pos:net.minecraft.util.math.BlockPos, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, x:double, y:double, z:double, sound:net.minecraft.registry.entry.RegistryEntry<net.minecraft.sound.SoundEvent>, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, x:double, y:double, z:double, sound:net.minecraft.registry.entry.RegistryEntry<net.minecraft.sound.SoundEvent>, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float, seed:long ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, x:double, y:double, z:double, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, x:double, y:double, z:double, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	playSound( source:net.minecraft.entity.player.PlayerEntity, x:double, y:double, z:double, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float, seed:long ):void;
	playSound( x:double, y:double, z:double, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float, useDistance:boolean ):void;
	playSoundAtBlockCenter( pos:net.minecraft.util.math.BlockPos, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float, useDistance:boolean ):void;
	playSoundFromEntity( entity:net.minecraft.entity.Entity, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	playSoundFromEntity( source:net.minecraft.entity.player.PlayerEntity, entity:net.minecraft.entity.Entity, sound:net.minecraft.registry.entry.RegistryEntry<net.minecraft.sound.SoundEvent>, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float, seed:long ):void;
	playSoundFromEntity( source:net.minecraft.entity.player.PlayerEntity, entity:net.minecraft.entity.Entity, sound:net.minecraft.sound.SoundEvent, category:net.minecraft.sound.SoundCategory, volume:float, pitch:float ):void;
	processPendingUpdate( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, playerPos:net.minecraft.util.math.Vec3d ):void;
	putClientsideMapState( id:any /*net.minecraft.component.type.MapIdComponent*/, state:any /*net.minecraft.item.map.MapState*/ ):void;
	putMapState( id:any /*net.minecraft.component.type.MapIdComponent*/, state:any /*net.minecraft.item.map.MapState*/ ):void;
	randomBlockDisplayTick( centerX:int, centerY:int, centerZ:int, radius:int, random:any /*net.minecraft.util.math.random.Random*/, block:net.minecraft.block.Block, pos:net.minecraft.util.math.BlockPos$Mutable ):void;
	raycast( context:any /*net.minecraft.world.BlockStateRaycastContext*/ ):net.minecraft.util.hit.BlockHitResult;
	raycast( context:any /*net.minecraft.world.RaycastContext*/ ):net.minecraft.util.hit.BlockHitResult;
	raycastBlock( start:net.minecraft.util.math.Vec3d, end:net.minecraft.util.math.Vec3d, pos:net.minecraft.util.math.BlockPos, shape:any /*net.minecraft.util.shape.VoxelShape*/, state:net.minecraft.block.BlockState ):net.minecraft.util.hit.BlockHitResult;
	reloadColor(  ):void;
	removeBlock( pos:net.minecraft.util.math.BlockPos, move:boolean ):boolean;
	removeBlockEntity( pos:net.minecraft.util.math.BlockPos ):void;
	removeEntity( entityId:int, removalReason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	replaceWithStateForNeighborUpdate( direction:net.minecraft.util.math.Direction, neighborState:net.minecraft.block.BlockState, pos:net.minecraft.util.math.BlockPos, neighborPos:net.minecraft.util.math.BlockPos, flags:int, maxUpdateDepth:int ):void;
	resetChunkColor( chunkPos:net.minecraft.util.math.ChunkPos ):void;
	runQueuedChunkUpdates(  ):void;
	scheduleBlockRenders( x:int, y:int, z:int ):void;
	scheduleBlockRerenderIfNeeded( pos:net.minecraft.util.math.BlockPos, old:net.minecraft.block.BlockState, updated:net.minecraft.block.BlockState ):void;
	scheduleBlockTick( pos:net.minecraft.util.math.BlockPos, block:net.minecraft.block.Block, delay:int ):void;
	scheduleBlockTick( pos:net.minecraft.util.math.BlockPos, block:net.minecraft.block.Block, delay:int, priority:any /*net.minecraft.world.tick.TickPriority*/ ):void;
	scheduleFluidTick( pos:net.minecraft.util.math.BlockPos, fluid:net.minecraft.fluid.Fluid, delay:int ):void;
	scheduleFluidTick( pos:net.minecraft.util.math.BlockPos, fluid:net.minecraft.fluid.Fluid, delay:int, priority:any /*net.minecraft.world.tick.TickPriority*/ ):void;
	sectionCoordToIndex( coord:int ):int;
	sectionIndexToCoord( index:int ):int;
	sendEntityDamage( entity:net.minecraft.entity.Entity, damageSource:any /*net.minecraft.entity.damage.DamageSource*/ ):void;
	sendEntityStatus( entity:net.minecraft.entity.Entity, status:any /*byte*/ ):void;
	sendPacket( packet:net.minecraft.network.packet.Packet<any /*java.lang.Object*/> ):void;
	setBlockBreakingInfo( entityId:int, pos:net.minecraft.util.math.BlockPos, progress:int ):void;
	setBlockState( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState ):boolean;
	setBlockState( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, flags:int ):boolean;
	setBlockState( pos:net.minecraft.util.math.BlockPos, state:net.minecraft.block.BlockState, flags:int, maxUpdateDepth:int ):boolean;
	setLightningTicksLeft( lightningTicksLeft:int ):void;
	setMobSpawnOptions( spawnMonsters:boolean, spawnAnimals:boolean ):void;
	setRainGradient( rainGradient:float ):void;
	setSimulationDistance( simulationDistance:int ):void;
	setSpawnPos( pos:net.minecraft.util.math.BlockPos, angle:float ):void;
	setThunderGradient( thunderGradient:float ):void;
	setTime( time:long ):void;
	setTimeOfDay( timeOfDay:long ):void;
	shouldTickBlockPos( pos:net.minecraft.util.math.BlockPos ):boolean;
	shouldTickBlocksInChunk( chunkPos:long ):boolean;
	shouldUpdatePostDeath( entity:net.minecraft.entity.Entity ):boolean;
	spawnEntity( entity:net.minecraft.entity.Entity ):boolean;
	static isValid( pos:net.minecraft.util.math.BlockPos ):boolean;
	syncGlobalEvent( eventId:int, pos:net.minecraft.util.math.BlockPos, data:int ):void;
	syncWorldEvent( eventId:int, pos:net.minecraft.util.math.BlockPos, data:int ):void;
	syncWorldEvent( player:net.minecraft.entity.player.PlayerEntity, eventId:int, pos:net.minecraft.util.math.BlockPos, data:int ):void;
	testBlockState( pos:net.minecraft.util.math.BlockPos, state:java.util.function.Predicate<net.minecraft.block.BlockState> ):boolean;
	testFluidState( pos:net.minecraft.util.math.BlockPos, state:java.util.function.Predicate<net.minecraft.fluid.FluidState> ):boolean;
	tick( shouldKeepTicking:any /*java.util.function.BooleanSupplier*/ ):void;
	tickEntities(  ):void;
	tickEntity( entity:net.minecraft.entity.Entity ):void;
	tickEntity<T>( tickConsumer:java.util.function.Consumer<T>, entity:T ):void;
	toString(  ):string;
	unloadBlockEntities( chunk:any /*net.minecraft.world.chunk.WorldChunk*/ ):void;
	updateComparators( pos:net.minecraft.util.math.BlockPos, block:net.minecraft.block.Block ):void;
	updateListeners( pos:net.minecraft.util.math.BlockPos, oldState:net.minecraft.block.BlockState, newState:net.minecraft.block.BlockState, flags:int ):void;
	updateNeighbor( pos:net.minecraft.util.math.BlockPos, sourceBlock:net.minecraft.block.Block, sourcePos:net.minecraft.util.math.BlockPos ):void;
	updateNeighbor( state:net.minecraft.block.BlockState, pos:net.minecraft.util.math.BlockPos, sourceBlock:net.minecraft.block.Block, sourcePos:net.minecraft.util.math.BlockPos, notify:boolean ):void;
	updateNeighbors( pos:net.minecraft.util.math.BlockPos, block:net.minecraft.block.Block ):void;
	updateNeighborsAlways( pos:net.minecraft.util.math.BlockPos, sourceBlock:net.minecraft.block.Block ):void;
	updateNeighborsExcept( pos:net.minecraft.util.math.BlockPos, sourceBlock:net.minecraft.block.Block, direction:net.minecraft.util.math.Direction ):void;

} // end ClientWorld

} // end namespace net.minecraft.client.world

declare namespace net.minecraft.world {

/* enum */class GameMode/* extends java.lang.Enum<any> implements net.minecraft.util.StringIdentifiable*/ {

	// SURVIVAL:GameMode;
	// CREATIVE:GameMode;
	// ADVENTURE:GameMode;
	// SPECTATOR:GameMode;

	asString(  ):string;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	getId(  ):int;
	getName(  ):string;
	getSimpleTranslatableName(  ):net.minecraft.text.Text;
	getTranslatableName(  ):net.minecraft.text.Text;
	isBlockBreakingRestricted(  ):boolean;
	isCreative(  ):boolean;
	isSurvivalLike(  ):boolean;
	name(  ):string;
	ordinal(  ):int;
	setAbilities( abilities:any /*net.minecraft.entity.player.PlayerAbilities*/ ):void;
	toString(  ):string;

} // end GameMode

} // end namespace net.minecraft.world

declare namespace net.minecraft.world {

/* enum */class Difficulty/* extends java.lang.Enum<any> implements net.minecraft.util.StringIdentifiable*/ {

	// PEACEFUL:Difficulty;
	// EASY:Difficulty;
	// NORMAL:Difficulty;
	// HARD:Difficulty;

	asString(  ):string;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	getId(  ):int;
	getInfo(  ):net.minecraft.text.Text;
	getName(  ):string;
	getTranslatableName(  ):net.minecraft.text.Text;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end Difficulty

} // end namespace net.minecraft.world

declare namespace net.minecraft.inventory {

interface Inventory/* extends net.minecraft.util.Clearable*/ {

	// static canPlayerUse( blockEntity:any /*net.minecraft.block.entity.BlockEntity*/, player:net.minecraft.entity.player.PlayerEntity ):boolean;
	// static canPlayerUse( blockEntity:any /*net.minecraft.block.entity.BlockEntity*/, player:net.minecraft.entity.player.PlayerEntity, range:float ):boolean;
	canPlayerUse( player:net.minecraft.entity.player.PlayerEntity ):boolean;
	canTransferTo( hopperInventory:Inventory, slot:int, stack:net.minecraft.item.ItemStack ):boolean;
	clear(  ):void;
	containsAny( items:java.util.Set<net.minecraft.item.Item> ):boolean;
	containsAny( predicate:java.util.function.Predicate<net.minecraft.item.ItemStack> ):boolean;
	count( item:net.minecraft.item.Item ):int;
	getMaxCount( stack:net.minecraft.item.ItemStack ):int;
	getMaxCountPerStack(  ):int;
	getStack( slot:int ):net.minecraft.item.ItemStack;
	isEmpty(  ):boolean;
	isValid( slot:int, stack:net.minecraft.item.ItemStack ):boolean;
	markDirty(  ):void;
	onClose( player:net.minecraft.entity.player.PlayerEntity ):void;
	onOpen( player:net.minecraft.entity.player.PlayerEntity ):void;
	removeStack( slot:int ):net.minecraft.item.ItemStack;
	removeStack( slot:int, amount:int ):net.minecraft.item.ItemStack;
	setStack( slot:int, stack:net.minecraft.item.ItemStack ):void;
	size(  ):int;

} // end Inventory

} // end namespace net.minecraft.inventory

declare namespace net.minecraft.entity.player {

class PlayerInventory/* extends java.lang.Object implements net.minecraft.inventory.Inventory, net.minecraft.util.Nameable*/ {

	addPickBlock( stack:net.minecraft.item.ItemStack ):void;
	canPlayerUse( player:PlayerEntity ):boolean;
	canTransferTo( hopperInventory:net.minecraft.inventory.Inventory, slot:int, stack:net.minecraft.item.ItemStack ):boolean;
	clear(  ):void;
	clone( other:PlayerInventory ):void;
	contains( predicate:java.util.function.Predicate<net.minecraft.item.ItemStack> ):boolean;
	contains( stack:net.minecraft.item.ItemStack ):boolean;
	contains( tag:net.minecraft.registry.tag.TagKey<net.minecraft.item.Item> ):boolean;
	containsAny( items:java.util.Set<net.minecraft.item.Item> ):boolean;
	containsAny( predicate:java.util.function.Predicate<net.minecraft.item.ItemStack> ):boolean;
	count( item:net.minecraft.item.Item ):int;
	dropAll(  ):void;
	dropSelectedItem( entireStack:boolean ):net.minecraft.item.ItemStack;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getArmorStack( slot:int ):net.minecraft.item.ItemStack;
	getBlockBreakingSpeed( block:net.minecraft.block.BlockState ):float;
	getChangeCount(  ):int;
	getCustomName(  ):net.minecraft.text.Text;
	getDisplayName(  ):net.minecraft.text.Text;
	getEmptySlot(  ):int;
	getMainHandStack(  ):net.minecraft.item.ItemStack;
	getMaxCount( stack:net.minecraft.item.ItemStack ):int;
	getMaxCountPerStack(  ):int;
	getName(  ):net.minecraft.text.Text;
	getOccupiedSlotWithRoomForStack( stack:net.minecraft.item.ItemStack ):int;
	getSlotWithStack( stack:net.minecraft.item.ItemStack ):int;
	getStack( slot:int ):net.minecraft.item.ItemStack;
	getSwappableHotbarSlot(  ):int;
	hasCustomName(  ):boolean;
	indexOf( stack:net.minecraft.item.ItemStack ):int;
	insertStack( slot:int, stack:net.minecraft.item.ItemStack ):boolean;
	insertStack( stack:net.minecraft.item.ItemStack ):boolean;
	isEmpty(  ):boolean;
	isValid( slot:int, stack:net.minecraft.item.ItemStack ):boolean;
	markDirty(  ):void;
	offer( stack:net.minecraft.item.ItemStack, notifiesClient:boolean ):void;
	offerOrDrop( stack:net.minecraft.item.ItemStack ):void;
	onClose( player:PlayerEntity ):void;
	onOpen( player:PlayerEntity ):void;
	populateRecipeFinder( finder:any /*net.minecraft.recipe.RecipeMatcher*/ ):void;
	readNbt( nbtList:net.minecraft.nbt.NbtList ):void;
	remove( shouldRemove:java.util.function.Predicate<net.minecraft.item.ItemStack>, maxCount:int, craftingInventory:net.minecraft.inventory.Inventory ):int;
	removeOne( stack:net.minecraft.item.ItemStack ):void;
	removeStack( slot:int ):net.minecraft.item.ItemStack;
	removeStack( slot:int, amount:int ):net.minecraft.item.ItemStack;
	scrollInHotbar( scrollAmount:double ):void;
	setStack( slot:int, stack:net.minecraft.item.ItemStack ):void;
	size(  ):int;
	static getHotbarSize(  ):int;
	static isValidHotbarIndex( slot:int ):boolean;
	swapSlotWithHotbar( slot:int ):void;
	toString(  ):string;
	updateItems(  ):void;
	writeNbt( nbtList:net.minecraft.nbt.NbtList ):net.minecraft.nbt.NbtList;

} // end PlayerInventory

} // end namespace net.minecraft.entity.player

declare namespace net.minecraft.entity.player {

class HungerManager/* extends java.lang.Object*/ {

	add( food:int, saturationModifier:float ):void;
	addExhaustion( exhaustion:float ):void;
	eat( foodComponent:any /*net.minecraft.component.type.FoodComponent*/ ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getExhaustion(  ):float;
	getFoodLevel(  ):int;
	getPrevFoodLevel(  ):int;
	getSaturationLevel(  ):float;
	isNotFull(  ):boolean;
	readNbt( nbt:net.minecraft.nbt.NbtCompound ):void;
	setExhaustion( exhaustion:float ):void;
	setFoodLevel( foodLevel:int ):void;
	setSaturationLevel( saturationLevel:float ):void;
	toString(  ):string;
	update( player:PlayerEntity ):void;
	writeNbt( nbt:net.minecraft.nbt.NbtCompound ):void;

} // end HungerManager

} // end namespace net.minecraft.entity.player

declare namespace net.minecraft.entity.effect {

class StatusEffectInstance/* extends java.lang.Object implements java.lang.Comparable<any>*/ {

	compareTo( statusEffectInstance:StatusEffectInstance ):int;
	copyFadingFrom( effect:StatusEffectInstance ):void;
	createParticle(  ):any /*net.minecraft.particle.ParticleEffect*/;
	equals( effect:net.minecraft.registry.entry.RegistryEntry<StatusEffect> ):boolean;
	equals( o:any /*java.lang.Object*/ ):boolean;
	getAmplifier(  ):int;
	getDuration(  ):int;
	getEffectType(  ):net.minecraft.registry.entry.RegistryEntry<StatusEffect>;
	getFadeFactor( entity:net.minecraft.entity.LivingEntity, tickDelta:float ):float;
	getTranslationKey(  ):string;
	isAmbient(  ):boolean;
	isDurationBelow( duration:int ):boolean;
	isInfinite(  ):boolean;
	mapDuration( mapper:any /*it.unimi.dsi.fastutil.ints.Int2IntFunction*/ ):int;
	onApplied( entity:net.minecraft.entity.LivingEntity ):void;
	onEntityDamage( entity:net.minecraft.entity.LivingEntity, source:any /*net.minecraft.entity.damage.DamageSource*/, amount:float ):void;
	onEntityRemoval( entity:net.minecraft.entity.LivingEntity, reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	playApplySound( entity:net.minecraft.entity.LivingEntity ):void;
	shouldShowIcon(  ):boolean;
	shouldShowParticles(  ):boolean;
	skipFading(  ):void;
	static fromNbt( nbt:net.minecraft.nbt.NbtCompound ):StatusEffectInstance;
	toString(  ):string;
	update( entity:net.minecraft.entity.LivingEntity, overwriteCallback:any /*java.lang.Runnable*/ ):boolean;
	upgrade( that:StatusEffectInstance ):boolean;
	writeNbt(  ):net.minecraft.nbt.NbtElement;

} // end StatusEffectInstance

} // end namespace net.minecraft.entity.effect

declare namespace net.minecraft.entity.effect {

class StatusEffect/* extends java.lang.Object implements net.minecraft.resource.featuretoggle.ToggleableFeature*/ {

	addAttributeModifier( attribute:net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/>, id:net.minecraft.util.Identifier, amount:double, operation:any /*net.minecraft.entity.attribute.EntityAttributeModifier$Operation*/ ):StatusEffect;
	applyInstantEffect( source:net.minecraft.entity.Entity, attacker:net.minecraft.entity.Entity, target:net.minecraft.entity.LivingEntity, amplifier:int, proximity:double ):void;
	applySound( sound:net.minecraft.sound.SoundEvent ):StatusEffect;
	applyUpdateEffect( entity:net.minecraft.entity.LivingEntity, amplifier:int ):boolean;
	canApplyUpdateEffect( duration:int, amplifier:int ):boolean;
	createParticle( effect:StatusEffectInstance ):any /*net.minecraft.particle.ParticleEffect*/;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	fadeTicks( fadeTicks:int ):StatusEffect;
	forEachAttributeModifier( amplifier:int, consumer:java.util.function.BiConsumer<net.minecraft.registry.entry.RegistryEntry<any /*net.minecraft.entity.attribute.EntityAttribute*/>, any /*net.minecraft.entity.attribute.EntityAttributeModifier*/> ):void;
	getCategory(  ):any /*net.minecraft.entity.effect.StatusEffectCategory*/;
	getColor(  ):int;
	getFadeTicks(  ):int;
	getName(  ):net.minecraft.text.Text;
	getRequiredFeatures(  ):any /*net.minecraft.resource.featuretoggle.FeatureSet*/;
	getTranslationKey(  ):string;
	isBeneficial(  ):boolean;
	isEnabled( enabledFeatures:any /*net.minecraft.resource.featuretoggle.FeatureSet*/ ):boolean;
	isInstant(  ):boolean;
	onApplied( attributeContainer:any /*net.minecraft.entity.attribute.AttributeContainer*/, amplifier:int ):void;
	onApplied( entity:net.minecraft.entity.LivingEntity, amplifier:int ):void;
	onEntityDamage( entity:net.minecraft.entity.LivingEntity, amplifier:int, source:any /*net.minecraft.entity.damage.DamageSource*/, amount:float ):void;
	onEntityRemoval( entity:net.minecraft.entity.LivingEntity, amplifier:int, reason:any /*net.minecraft.entity.Entity$RemovalReason*/ ):void;
	onRemoved( attributeContainer:any /*net.minecraft.entity.attribute.AttributeContainer*/ ):void;
	playApplySound( entity:net.minecraft.entity.LivingEntity, amplifier:int ):void;
	requires( ...requiredFeatures:any /*net.minecraft.resource.featuretoggle.FeatureFlag*/[] ):StatusEffect;
	toString(  ):string;

} // end StatusEffect

} // end namespace net.minecraft.entity.effect

declare namespace net.minecraft.util {

/* enum */class ActionResult/* extends java.lang.Enum<any>*/ {

	// SUCCESS:ActionResult;
	// SUCCESS_NO_ITEM_USED:ActionResult;
	// CONSUME:ActionResult;
	// CONSUME_PARTIAL:ActionResult;
	// PASS:ActionResult;
	// FAIL:ActionResult;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	isAccepted(  ):boolean;
	name(  ):string;
	ordinal(  ):int;
	shouldIncrementStat(  ):boolean;
	shouldSwingHand(  ):boolean;
	toString(  ):string;

} // end ActionResult

} // end namespace net.minecraft.util

declare namespace net.minecraft.util {

class TypedActionResult<T>/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getResult(  ):ActionResult;
	getValue(  ):T;
	static consume<T>( data:T ):TypedActionResult<T>;
	static fail<T>( data:T ):TypedActionResult<T>;
	static pass<T>( data:T ):TypedActionResult<T>;
	static success<T>( data:T ):TypedActionResult<T>;
	static success<T>( data:T, swingHand:boolean ):TypedActionResult<T>;
	toString(  ):string;

} // end TypedActionResult

} // end namespace net.minecraft.util

declare namespace net.minecraft.util {

/* enum */class ItemActionResult/* extends java.lang.Enum<any>*/ {

	// SUCCESS:ItemActionResult;
	// CONSUME:ItemActionResult;
	// CONSUME_PARTIAL:ItemActionResult;
	// PASS_TO_DEFAULT_BLOCK_INTERACTION:ItemActionResult;
	// SKIP_DEFAULT_BLOCK_INTERACTION:ItemActionResult;
	// FAIL:ItemActionResult;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	isAccepted(  ):boolean;
	name(  ):string;
	ordinal(  ):int;
	toActionResult(  ):ActionResult;
	toString(  ):string;

} // end ItemActionResult

} // end namespace net.minecraft.util

declare namespace net.minecraft.util {

/* enum */class Hand/* extends java.lang.Enum<any>*/ {

	// MAIN_HAND:Hand;
	// OFF_HAND:Hand;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end Hand

} // end namespace net.minecraft.util

declare namespace net.minecraft.util.hit {

class HitResult/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getPos(  ):net.minecraft.util.math.Vec3d;
	getType(  ):HitResult$Type;
	squaredDistanceTo( entity:net.minecraft.entity.Entity ):double;
	toString(  ):string;

} // end HitResult

} // end namespace net.minecraft.util.hit

declare namespace net.minecraft.util.hit {

/* enum */class HitResult$Type/* extends java.lang.Enum<any>*/ {

	// MISS:HitResult$Type;
	// BLOCK:HitResult$Type;
	// ENTITY:HitResult$Type;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end HitResult$Type

} // end namespace net.minecraft.util.hit

declare namespace net.minecraft.util.hit {

class BlockHitResult/* extends HitResult*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getBlockPos(  ):net.minecraft.util.math.BlockPos;
	getPos(  ):net.minecraft.util.math.Vec3d;
	getSide(  ):net.minecraft.util.math.Direction;
	getType(  ):HitResult$Type;
	isInsideBlock(  ):boolean;
	squaredDistanceTo( entity:net.minecraft.entity.Entity ):double;
	static createMissed( pos:net.minecraft.util.math.Vec3d, side:net.minecraft.util.math.Direction, blockPos:net.minecraft.util.math.BlockPos ):BlockHitResult;
	toString(  ):string;
	withBlockPos( blockPos:net.minecraft.util.math.BlockPos ):BlockHitResult;
	withSide( side:net.minecraft.util.math.Direction ):BlockHitResult;

} // end BlockHitResult

} // end namespace net.minecraft.util.hit

declare namespace net.minecraft.util.hit {

class EntityHitResult/* extends HitResult*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getEntity(  ):net.minecraft.entity.Entity;
	getPos(  ):net.minecraft.util.math.Vec3d;
	getType(  ):HitResult$Type;
	squaredDistanceTo( entity:net.minecraft.entity.Entity ):double;
	toString(  ):string;

} // end EntityHitResult

} // end namespace net.minecraft.util.hit

declare namespace java.util {

interface List<E>/* extends SequencedCollection<E>*/ {

	// static copyOf<E>( arg0:Collection<E> ):List<E>;
	// static of<E>(  ):List<E>;
	// static of<E>( ...arg0:E[] ):List<E>;
	// static of<E>( arg0:E ):List<E>;
	// static of<E>( arg0:E, arg1:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E, arg9:E ):List<E>;
	add( arg0:E ):boolean;
	add( arg0:int, arg1:E ):void;
	addAll( arg0:Collection<E> ):boolean;
	addAll( arg0:int, arg1:Collection<E> ):boolean;
	addFirst( arg0:E ):void;
	addLast( arg0:E ):void;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:java.util.function.Consumer<T> ):void;
	get( arg0:int ):E;
	getFirst(  ):E;
	getLast(  ):E;
	indexOf( arg0:any /*java.lang.Object*/ ):int;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	lastIndexOf( arg0:any /*java.lang.Object*/ ):int;
	listIterator(  ):any /*java.util.ListIterator*/;
	listIterator( arg0:int ):any /*java.util.ListIterator*/;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	remove( arg0:int ):E;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeFirst(  ):E;
	removeIf( arg0:java.util.function.Predicate<E> ):boolean;
	removeLast(  ):E;
	replaceAll( arg0:any /*java.util.function.UnaryOperator*/ ):void;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	reversed(  ):List<E>;
	set( arg0:int, arg1:E ):E;
	size(  ):int;
	sort( arg0:any /*java.util.Comparator*/ ):void;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	subList( arg0:int, arg1:int ):List<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];
	toArray<T>( arg0:any /*java.util.function.IntFunction*/ ):[T];

} // end List

} // end namespace java.util

declare namespace java.util {

class ArrayList<E>/* extends AbstractList<E> implements List<E>, RandomAccess, java.lang.Cloneable, java.io.Serializable*/ {

	add( arg0:E ):boolean;
	add( arg0:int, arg1:E ):void;
	addAll( arg0:Collection<E> ):boolean;
	addAll( arg0:int, arg1:Collection<E> ):boolean;
	addFirst( arg0:E ):void;
	addLast( arg0:E ):void;
	clear(  ):void;
	clone(  ):any /*java.lang.Object*/;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	ensureCapacity( arg0:int ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach( arg0:java.util.function.Consumer<E> ):void;
	get( arg0:int ):E;
	getFirst(  ):E;
	getLast(  ):E;
	indexOf( arg0:any /*java.lang.Object*/ ):int;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	lastIndexOf( arg0:any /*java.lang.Object*/ ):int;
	listIterator(  ):any /*java.util.ListIterator*/;
	listIterator( arg0:int ):any /*java.util.ListIterator*/;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	remove( arg0:int ):E;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeFirst(  ):E;
	removeIf( arg0:java.util.function.Predicate<E> ):boolean;
	removeLast(  ):E;
	replaceAll( arg0:any /*java.util.function.UnaryOperator*/ ):void;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	reversed(  ):List<E>;
	set( arg0:int, arg1:E ):E;
	size(  ):int;
	sort( arg0:any /*java.util.Comparator*/ ):void;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	subList( arg0:int, arg1:int ):List<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];
	toArray<T>( arg0:any /*java.util.function.IntFunction*/ ):[T];
	toString(  ):string;
	trimToSize(  ):void;

} // end ArrayList

} // end namespace java.util

declare namespace java.util {

interface Set<E>/* extends Collection<E>*/ {

	// static copyOf<E>( arg0:Collection<E> ):Set<E>;
	// static of<E>(  ):Set<E>;
	// static of<E>( ...arg0:E[] ):Set<E>;
	// static of<E>( arg0:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E, arg9:E ):Set<E>;
	add( arg0:E ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:java.util.function.Consumer<T> ):void;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:java.util.function.Predicate<E> ):boolean;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	size(  ):int;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];
	toArray<T>( arg0:any /*java.util.function.IntFunction*/ ):[T];

} // end Set

} // end namespace java.util

declare namespace java.util {

interface Collection<E>/* extends java.lang.Iterable<E>*/ {

	add( arg0:E ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:java.util.function.Consumer<T> ):void;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:java.util.function.Predicate<E> ):boolean;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	size(  ):int;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];
	toArray<T>( arg0:any /*java.util.function.IntFunction*/ ):[T];

} // end Collection

} // end namespace java.util

declare namespace java.util {

class Optional<T>/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	filter( arg0:java.util.function.Predicate<T> ):Optional<T>;
	flatMap<U>( arg0:java.util.function.Function<T, Optional<U>> ):Optional<U>;
	get(  ):T;
	ifPresent( arg0:java.util.function.Consumer<T> ):void;
	ifPresentOrElse( arg0:java.util.function.Consumer<T>, arg1:any /*java.lang.Runnable*/ ):void;
	isEmpty(  ):boolean;
	isPresent(  ):boolean;
	map<U>( arg0:java.util.function.Function<T, U> ):Optional<U>;
	or( arg0:java.util.function.Supplier<Optional<T>> ):Optional<T>;
	orElse( arg0:T ):T;
	orElseGet( arg0:java.util.function.Supplier<T> ):T;
	orElseThrow(  ):T;
	orElseThrow<X>( arg0:java.util.function.Supplier<X> ):T;
	static empty<T>(  ):Optional<T>;
	static of<T>( arg0:T ):Optional<T>;
	static ofNullable<T>( arg0:T ):Optional<T>;
	stream(  ):java.util.stream.Stream<T>;
	toString(  ):string;

} // end Optional

} // end namespace java.util

declare namespace java.util {

class UUID/* extends java.lang.Object implements java.io.Serializable, java.lang.Comparable<any>*/ {

	clockSequence(  ):int;
	compareTo( arg0:UUID ):int;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getLeastSignificantBits(  ):long;
	getMostSignificantBits(  ):long;
	node(  ):long;
	static fromString( arg0:string ):UUID;
	static nameUUIDFromBytes( arg0:bytearray ):UUID;
	static randomUUID(  ):UUID;
	timestamp(  ):long;
	toString(  ):string;
	variant(  ):int;
	version(  ):int;

} // end UUID

} // end namespace java.util

declare namespace java.io {

class File/* extends java.lang.Object implements Serializable, java.lang.Comparable<any>*/ {

	canExecute(  ):boolean;
	canRead(  ):boolean;
	canWrite(  ):boolean;
	compareTo( arg0:File ):int;
	createNewFile(  ):boolean;
	delete(  ):boolean;
	deleteOnExit(  ):void;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	exists(  ):boolean;
	getAbsoluteFile(  ):File;
	getAbsolutePath(  ):string;
	getCanonicalFile(  ):File;
	getCanonicalPath(  ):string;
	getFreeSpace(  ):long;
	getName(  ):string;
	getParent(  ):string;
	getParentFile(  ):File;
	getPath(  ):string;
	getTotalSpace(  ):long;
	getUsableSpace(  ):long;
	isAbsolute(  ):boolean;
	isDirectory(  ):boolean;
	isFile(  ):boolean;
	isHidden(  ):boolean;
	lastModified(  ):long;
	length(  ):long;
	list(  ):[string];
	list( arg0:any /*java.io.FilenameFilter*/ ):[string];
	listFiles(  ):[File];
	listFiles( arg0:any /*java.io.FileFilter*/ ):[File];
	listFiles( arg0:any /*java.io.FilenameFilter*/ ):[File];
	mkdir(  ):boolean;
	mkdirs(  ):boolean;
	renameTo( arg0:File ):boolean;
	setExecutable( arg0:boolean ):boolean;
	setExecutable( arg0:boolean, arg1:boolean ):boolean;
	setLastModified( arg0:long ):boolean;
	setReadOnly(  ):boolean;
	setReadable( arg0:boolean ):boolean;
	setReadable( arg0:boolean, arg1:boolean ):boolean;
	setWritable( arg0:boolean ):boolean;
	setWritable( arg0:boolean, arg1:boolean ):boolean;
	static createTempFile( arg0:string, arg1:string ):File;
	static createTempFile( arg0:string, arg1:string, arg2:File ):File;
	static listRoots(  ):[File];
	toPath(  ):any /*java.nio.file.Path*/;
	toString(  ):string;
	toURI(  ):any /*java.net.URI*/;
	toURL(  ):any /*java.net.URL*/;

} // end File

} // end namespace java.io

declare namespace java.util.function {

interface Predicate<T> {

	( arg0:T ):boolean;
	// static isEqual<T>( arg0:any /*java.lang.Object*/ ):Predicate<T>;
	// static not<T>( arg0:Predicate<T> ):Predicate<T>;
	and?( arg0:Predicate<T> ):Predicate<T>;
	negate?(  ):Predicate<T>;
	or?( arg0:Predicate<T> ):Predicate<T>;

} // end Predicate

} // end namespace java.util.function

declare namespace java.util.function {

interface Consumer<T> {

	( arg0:T ):void;
	andThen?( arg0:Consumer<T> ):Consumer<T>;

} // end Consumer

} // end namespace java.util.function

declare namespace java.util.function {

interface Function<T, R> {

	( arg0:T ):R;
	// static identity<T>(  ):Function<T, T>;
	andThen?<V>( arg0:Function<R, V> ):Function<T, V>;
	compose?<V>( arg0:Function<V, T> ):Function<V, R>;

} // end Function

} // end namespace java.util.function

declare namespace java.util.function {

interface Supplier<T> {

	(  ):T;

} // end Supplier

} // end namespace java.util.function

declare namespace java.util.function {

interface BiConsumer<T, U> {

	( arg0:T, arg1:U ):void;
	andThen?( arg0:BiConsumer<T, U> ):BiConsumer<T, U>;

} // end BiConsumer

} // end namespace java.util.function

declare namespace java.util.stream {

interface Stream<T>/* extends BaseStream<T, any>*/ {

	// static builder(  ):any /*java.util.stream.Stream$Builder*/;
	// static concat<T>( arg0:Stream<T>, arg1:Stream<T> ):Stream<T>;
	// static empty<T>(  ):Stream<T>;
	// static generate<T>( arg0:java.util.function.Supplier<T> ):Stream<T>;
	// static iterate<T>( arg0:T, arg1:any /*java.util.function.UnaryOperator*/ ):Stream<T>;
	// static iterate<T>( arg0:T, arg1:java.util.function.Predicate<T>, arg2:any /*java.util.function.UnaryOperator*/ ):Stream<T>;
	// static of<T>( ...arg0:T[] ):Stream<T>;
	// static of<T>( arg0:T ):Stream<T>;
	// static ofNullable<T>( arg0:T ):Stream<T>;
	allMatch( arg0:java.util.function.Predicate<T> ):boolean;
	anyMatch( arg0:java.util.function.Predicate<T> ):boolean;
	close(  ):void;
	collect<R>( arg0:any /*java.util.stream.Collector*/ ):R;
	collect<R>( arg0:java.util.function.Supplier<R>, arg1:java.util.function.BiConsumer<R, T>, arg2:java.util.function.BiConsumer<R, R> ):R;
	count(  ):long;
	distinct(  ):Stream<T>;
	dropWhile( arg0:java.util.function.Predicate<T> ):Stream<T>;
	filter( arg0:java.util.function.Predicate<T> ):Stream<T>;
	findAny(  ):java.util.Optional<T>;
	findFirst(  ):java.util.Optional<T>;
	flatMap<R>( arg0:java.util.function.Function<T, Stream<R>> ):Stream<R>;
	flatMapToDouble( arg0:java.util.function.Function<T, any /*java.util.stream.DoubleStream*/> ):any /*java.util.stream.DoubleStream*/;
	flatMapToInt( arg0:java.util.function.Function<T, any /*java.util.stream.IntStream*/> ):any /*java.util.stream.IntStream*/;
	flatMapToLong( arg0:java.util.function.Function<T, any /*java.util.stream.LongStream*/> ):any /*java.util.stream.LongStream*/;
	forEach( arg0:java.util.function.Consumer<T> ):void;
	forEachOrdered( arg0:java.util.function.Consumer<T> ):void;
	isParallel(  ):boolean;
	iterator(  ):java.util.Iterator<T>;
	limit( arg0:long ):Stream<T>;
	map<R>( arg0:java.util.function.Function<T, R> ):Stream<R>;
	mapMulti<R>( arg0:java.util.function.BiConsumer<T, java.util.function.Consumer<R>> ):Stream<R>;
	mapMultiToDouble( arg0:java.util.function.BiConsumer<T, any /*java.util.function.DoubleConsumer*/> ):any /*java.util.stream.DoubleStream*/;
	mapMultiToInt( arg0:java.util.function.BiConsumer<T, any /*java.util.function.IntConsumer*/> ):any /*java.util.stream.IntStream*/;
	mapMultiToLong( arg0:java.util.function.BiConsumer<T, any /*java.util.function.LongConsumer*/> ):any /*java.util.stream.LongStream*/;
	mapToDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.DoubleStream*/;
	mapToInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.IntStream*/;
	mapToLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.LongStream*/;
	max( arg0:any /*java.util.Comparator*/ ):java.util.Optional<T>;
	min( arg0:any /*java.util.Comparator*/ ):java.util.Optional<T>;
	noneMatch( arg0:java.util.function.Predicate<T> ):boolean;
	onClose<S>( arg0:any /*java.lang.Runnable*/ ):S;
	parallel<S>(  ):S;
	peek( arg0:java.util.function.Consumer<T> ):Stream<T>;
	reduce( arg0:T, arg1:any /*java.util.function.BinaryOperator*/ ):T;
	reduce( arg0:any /*java.util.function.BinaryOperator*/ ):java.util.Optional<T>;
	reduce<U>( arg0:U, arg1:any /*java.util.function.BiFunction*/, arg2:any /*java.util.function.BinaryOperator*/ ):U;
	sequential<S>(  ):S;
	skip( arg0:long ):Stream<T>;
	sorted(  ):Stream<T>;
	sorted( arg0:any /*java.util.Comparator*/ ):Stream<T>;
	spliterator(  ):any /*java.util.Spliterator*/;
	takeWhile( arg0:java.util.function.Predicate<T> ):Stream<T>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<A>( arg0:any /*java.util.function.IntFunction*/ ):[A];
	toList(  ):java.util.List<T>;
	unordered<S>(  ):S;

} // end Stream

} // end namespace java.util.stream

declare namespace java.util {

interface Iterator<E> {

	forEachRemaining( arg0:java.util.function.Consumer<E> ):void;
	hasNext(  ):boolean;
	next(  ):E;
	remove(  ):void;

} // end Iterator

} // end namespace java.util

declare namespace java.lang {

interface Iterable<T> {

	forEach( arg0:java.util.function.Consumer<T> ):void;
	iterator(  ):java.util.Iterator<T>;
	spliterator(  ):any /*java.util.Spliterator*/;

} // end Iterable

} // end namespace java.lang

declare namespace net.minecraft.nbt {

interface NbtElement {

	accept( visitor:any /*net.minecraft.nbt.scanner.NbtScanner*/ ):void;
	accept( visitor:any /*net.minecraft.nbt.visitor.NbtElementVisitor*/ ):void;
	asString(  ):string;
	copy(  ):NbtElement;
	doAccept( visitor:any /*net.minecraft.nbt.scanner.NbtScanner*/ ):any /*net.minecraft.nbt.scanner.NbtScanner$Result*/;
	getNbtType(  ):any /*net.minecraft.nbt.NbtType*/;
	getSizeInBytes(  ):int;
	getType(  ):any /*byte*/;
	toString(  ):string;
	write( output:any /*java.io.DataOutput*/ ):void;

} // end NbtElement

} // end namespace net.minecraft.nbt

declare namespace net.minecraft.nbt {

class NbtCompound/* extends java.lang.Object implements NbtElement*/ {

	accept( visitor:any /*net.minecraft.nbt.scanner.NbtScanner*/ ):void;
	accept( visitor:any /*net.minecraft.nbt.visitor.NbtElementVisitor*/ ):void;
	asString(  ):string;
	contains( key:string ):boolean;
	contains( key:string, type:int ):boolean;
	containsUuid( key:string ):boolean;
	copy(  ):NbtCompound;
	copyFrom( source:NbtCompound ):NbtCompound;
	doAccept( visitor:any /*net.minecraft.nbt.scanner.NbtScanner*/ ):any /*net.minecraft.nbt.scanner.NbtScanner$Result*/;
	equals( o:any /*java.lang.Object*/ ):boolean;
	get( key:string ):NbtElement;
	getBoolean( key:string ):boolean;
	getByte( key:string ):any /*byte*/;
	getByteArray( key:string ):bytearray;
	getCompound( key:string ):NbtCompound;
	getDouble( key:string ):double;
	getFloat( key:string ):float;
	getInt( key:string ):int;
	getIntArray( key:string ):[int];
	getKeys(  ):java.util.Set<string>;
	getList( key:string, type:int ):NbtList;
	getLong( key:string ):long;
	getLongArray( key:string ):[long];
	getNbtType(  ):any /*net.minecraft.nbt.NbtType*/;
	getShort( key:string ):any /*short*/;
	getSize(  ):int;
	getSizeInBytes(  ):int;
	getString( key:string ):string;
	getType(  ):any /*byte*/;
	getType( key:string ):any /*byte*/;
	getUuid( key:string ):java.util.UUID;
	isEmpty(  ):boolean;
	put( key:string, element:NbtElement ):NbtElement;
	putBoolean( key:string, value:boolean ):void;
	putByte( key:string, value:any /*byte*/ ):void;
	putByteArray( key:string, value:bytearray ):void;
	putByteArray( key:string, value:java.util.List<any /*java.lang.Byte*/> ):void;
	putDouble( key:string, value:double ):void;
	putFloat( key:string, value:float ):void;
	putInt( key:string, value:int ):void;
	putIntArray( key:string, value:[int] ):void;
	putIntArray( key:string, value:java.util.List<int|null> ):void;
	putLong( key:string, value:long ):void;
	putLongArray( key:string, value:[long] ):void;
	putLongArray( key:string, value:java.util.List<long|null> ):void;
	putShort( key:string, value:any /*short*/ ):void;
	putString( key:string, value:string ):void;
	putUuid( key:string, value:java.util.UUID ):void;
	remove( key:string ):void;
	toString(  ):string;
	write( output:any /*java.io.DataOutput*/ ):void;

} // end NbtCompound

} // end namespace net.minecraft.nbt

declare namespace net.minecraft.nbt {

class NbtList/* extends AbstractNbtList<any>*/ {

	accept( visitor:any /*net.minecraft.nbt.scanner.NbtScanner*/ ):void;
	accept( visitor:any /*net.minecraft.nbt.visitor.NbtElementVisitor*/ ):void;
	add( i:int, nbtElement:NbtElement ):void;
	add<E>( arg0:E ):boolean;
	addAll<E>( arg0:int, arg1:java.util.Collection<E> ):boolean;
	addAll<E>( arg0:java.util.Collection<E> ):boolean;
	addElement( index:int, element:NbtElement ):boolean;
	addFirst<E>( arg0:E ):void;
	addLast<E>( arg0:E ):void;
	asString(  ):string;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:java.util.Collection<any /*java.lang.Object*/> ):boolean;
	copy(  ):NbtList;
	doAccept( visitor:any /*net.minecraft.nbt.scanner.NbtScanner*/ ):any /*net.minecraft.nbt.scanner.NbtScanner$Result*/;
	equals( o:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:java.util.function.Consumer<T> ):void;
	get( i:int ):NbtElement;
	getCompound( index:int ):NbtCompound;
	getDouble( index:int ):double;
	getFirst<E>(  ):E;
	getFloat( index:int ):float;
	getHeldType(  ):any /*byte*/;
	getInt( index:int ):int;
	getIntArray( index:int ):[int];
	getLast<E>(  ):E;
	getList( index:int ):NbtList;
	getLongArray( index:int ):[long];
	getNbtType(  ):any /*net.minecraft.nbt.NbtType*/;
	getShort( index:int ):any /*short*/;
	getSizeInBytes(  ):int;
	getString( index:int ):string;
	getType(  ):any /*byte*/;
	indexOf( arg0:any /*java.lang.Object*/ ):int;
	isEmpty(  ):boolean;
	iterator<E>(  ):java.util.Iterator<E>;
	lastIndexOf( arg0:any /*java.lang.Object*/ ):int;
	listIterator(  ):any /*java.util.ListIterator*/;
	listIterator( arg0:int ):any /*java.util.ListIterator*/;
	parallelStream<E>(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	remove( i:int ):NbtElement;
	removeAll( arg0:java.util.Collection<any /*java.lang.Object*/> ):boolean;
	removeFirst<E>(  ):E;
	removeIf<E>( arg0:java.util.function.Predicate<E> ):boolean;
	removeLast<E>(  ):E;
	replaceAll( arg0:any /*java.util.function.UnaryOperator*/ ):void;
	retainAll( arg0:java.util.Collection<any /*java.lang.Object*/> ):boolean;
	reversed<E>(  ):java.util.List<E>;
	set( i:int, nbtElement:NbtElement ):NbtElement;
	setElement( index:int, element:NbtElement ):boolean;
	size(  ):int;
	sort( arg0:any /*java.util.Comparator*/ ):void;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream<E>(  ):java.util.stream.Stream<E>;
	subList<E>( arg0:int, arg1:int ):java.util.List<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];
	toArray<T>( arg0:any /*java.util.function.IntFunction*/ ):[T];
	toString(  ):string;
	write( output:any /*java.io.DataOutput*/ ):void;

} // end NbtList

} // end namespace net.minecraft.nbt

declare namespace net.minecraft.registry {

class RegistryKey<T>/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getRegistry(  ):net.minecraft.util.Identifier;
	getRegistryRef(  ):RegistryKey<any /*net.minecraft.registry.Registry*/>;
	getValue(  ):net.minecraft.util.Identifier;
	isOf( registry:RegistryKey<any /*net.minecraft.registry.Registry*/> ):boolean;
	static createCodec( registry:RegistryKey<any /*net.minecraft.registry.Registry*/> ):any /*com.mojang.serialization.Codec*/;
	static createPacketCodec( registry:RegistryKey<any /*net.minecraft.registry.Registry*/> ):any /*net.minecraft.network.codec.PacketCodec*/;
	static of<T>( registry:RegistryKey<any /*net.minecraft.registry.Registry*/>, value:net.minecraft.util.Identifier ):RegistryKey<T>;
	static ofRegistry( registry:net.minecraft.util.Identifier ):RegistryKey<any /*net.minecraft.registry.Registry*/>;
	toString(  ):string;
	tryCast<E>( registryRef:RegistryKey<any /*net.minecraft.registry.Registry*/> ):java.util.Optional<RegistryKey<E>>;

} // end RegistryKey

} // end namespace net.minecraft.registry

declare namespace net.minecraft.registry.entry {

interface RegistryEntry<T> {

	// static of<T>( value:T ):RegistryEntry<T>;
	getIdAsString(  ):string;
	getKey(  ):java.util.Optional<net.minecraft.registry.RegistryKey<T>>;
	getKeyOrValue(  ):any /*com.mojang.datafixers.util.Either*/;
	getType(  ):any /*net.minecraft.registry.entry.RegistryEntry$Type*/;
	hasKeyAndValue(  ):boolean;
	isIn( tag:net.minecraft.registry.tag.TagKey<T> ):boolean;
	matches( entry:RegistryEntry<T> ):boolean;
	matches( predicate:java.util.function.Predicate<net.minecraft.registry.RegistryKey<T>> ):boolean;
	matchesId( id:net.minecraft.util.Identifier ):boolean;
	matchesKey( key:net.minecraft.registry.RegistryKey<T> ):boolean;
	ownerEquals( owner:any /*net.minecraft.registry.entry.RegistryEntryOwner*/ ):boolean;
	streamTags(  ):java.util.stream.Stream<net.minecraft.registry.tag.TagKey<T>>;
	value(  ):T;

} // end RegistryEntry

} // end namespace net.minecraft.registry.entry

declare namespace net.minecraft.registry.tag {

class TagKey<T>/* extends java.lang.Record*/ {

	equals( object:any /*java.lang.Object*/ ):boolean;
	id(  ):net.minecraft.util.Identifier;
	isOf( registryRef:net.minecraft.registry.RegistryKey<any /*net.minecraft.registry.Registry*/> ):boolean;
	registry(  ):net.minecraft.registry.RegistryKey<any /*net.minecraft.registry.Registry*/>;
	static codec( registry:net.minecraft.registry.RegistryKey<any /*net.minecraft.registry.Registry*/> ):any /*com.mojang.serialization.Codec*/;
	static of<T>( registry:net.minecraft.registry.RegistryKey<any /*net.minecraft.registry.Registry*/>, id:net.minecraft.util.Identifier ):TagKey<T>;
	static unprefixedCodec( registry:net.minecraft.registry.RegistryKey<any /*net.minecraft.registry.Registry*/> ):any /*com.mojang.serialization.Codec*/;
	toString(  ):string;
	tryCast<E>( registryRef:net.minecraft.registry.RegistryKey<any /*net.minecraft.registry.Registry*/> ):java.util.Optional<TagKey<E>>;

} // end TagKey

} // end namespace net.minecraft.registry.tag

declare namespace net.minecraft.fluid {

class Fluid/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getBucketFillSound(  ):java.util.Optional<net.minecraft.sound.SoundEvent>;
	getBucketItem(  ):net.minecraft.item.Item;
	getDefaultState(  ):FluidState;
	getHeight( state:FluidState ):float;
	getHeight( state:FluidState, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):float;
	getLevel( state:FluidState ):int;
	getRegistryEntry(  ):any /*net.minecraft.registry.entry.RegistryEntry$Reference*/;
	getShape( state:FluidState, world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.util.shape.VoxelShape*/;
	getStateManager(  ):any /*net.minecraft.state.StateManager*/;
	getTickRate( world:any /*net.minecraft.world.WorldView*/ ):int;
	isIn( tag:net.minecraft.registry.tag.TagKey<Fluid> ):boolean;
	isStill( state:FluidState ):boolean;
	matchesType( fluid:Fluid ):boolean;
	toString(  ):string;

} // end Fluid

} // end namespace net.minecraft.fluid

declare namespace net.minecraft.fluid {

class FluidState/* extends net.minecraft.state.State<any, any>*/ {

	canBeReplacedWith( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos, fluid:Fluid, direction:net.minecraft.util.math.Direction ):boolean;
	canFlowTo( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):boolean;
	contains( property:any /*net.minecraft.state.property.Property*/ ):boolean;
	createWithTable( states:any /*java.util.Map*/ ):void;
	cycle<S>( property:any /*net.minecraft.state.property.Property*/ ):S;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	get<T>( property:any /*net.minecraft.state.property.Property*/ ):T;
	getBlastResistance(  ):float;
	getBlockState(  ):net.minecraft.block.BlockState;
	getEntries(  ):any /*java.util.Map*/;
	getFluid(  ):Fluid;
	getHeight(  ):float;
	getHeight( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):float;
	getLevel(  ):int;
	getOrEmpty<T>( property:any /*net.minecraft.state.property.Property*/ ):java.util.Optional<T>;
	getParticle(  ):any /*net.minecraft.particle.ParticleEffect*/;
	getProperties(  ):java.util.Collection<any /*net.minecraft.state.property.Property*/>;
	getRegistryEntry(  ):net.minecraft.registry.entry.RegistryEntry<Fluid>;
	getShape( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.util.shape.VoxelShape*/;
	getVelocity( world:net.minecraft.world.BlockView, pos:net.minecraft.util.math.BlockPos ):net.minecraft.util.math.Vec3d;
	hasRandomTicks(  ):boolean;
	isEmpty(  ):boolean;
	isEqualAndStill( fluid:Fluid ):boolean;
	isIn( fluids:any /*net.minecraft.registry.entry.RegistryEntryList*/ ):boolean;
	isIn( tag:net.minecraft.registry.tag.TagKey<Fluid> ):boolean;
	isOf( fluid:Fluid ):boolean;
	isStill(  ):boolean;
	onRandomTick( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, random:any /*net.minecraft.util.math.random.Random*/ ):void;
	onScheduledTick( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos ):void;
	randomDisplayTick( world:net.minecraft.world.World, pos:net.minecraft.util.math.BlockPos, random:any /*net.minecraft.util.math.random.Random*/ ):void;
	streamTags(  ):java.util.stream.Stream<net.minecraft.registry.tag.TagKey<Fluid>>;
	toString(  ):string;
	with<S,V>( property:any /*net.minecraft.state.property.Property*/, value:V ):S;
	withIfExists<S,V>( property:any /*net.minecraft.state.property.Property*/, value:V ):S;

} // end FluidState

} // end namespace net.minecraft.fluid

declare namespace net.minecraft.sound {

class SoundEvent/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDistanceToTravel( volume:float ):float;
	getId(  ):net.minecraft.util.Identifier;
	static of( id:net.minecraft.util.Identifier ):SoundEvent;
	static of( id:net.minecraft.util.Identifier, distanceToTravel:float ):SoundEvent;
	toString(  ):string;

} // end SoundEvent

} // end namespace net.minecraft.sound

declare namespace net.minecraft.sound {

/* enum */class SoundCategory/* extends java.lang.Enum<any>*/ {

	// MASTER:SoundCategory;
	// MUSIC:SoundCategory;
	// RECORDS:SoundCategory;
	// WEATHER:SoundCategory;
	// BLOCKS:SoundCategory;
	// HOSTILE:SoundCategory;
	// NEUTRAL:SoundCategory;
	// PLAYERS:SoundCategory;
	// AMBIENT:SoundCategory;
	// VOICE:SoundCategory;

	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	getName(  ):string;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end SoundCategory

} // end namespace net.minecraft.sound

declare namespace net.minecraft.world {

interface BlockView/* extends HeightLimitView*/ {

	// static raycast<C,T>( start:net.minecraft.util.math.Vec3d, end:net.minecraft.util.math.Vec3d, context:C, blockHitFactory:any /*java.util.function.BiFunction*/, missFactory:java.util.function.Function<C, T> ):T;
	countVerticalSections(  ):int;
	getBlockEntity( pos:net.minecraft.util.math.BlockPos ):any /*net.minecraft.block.entity.BlockEntity*/;
	getBlockEntity<T>( pos:net.minecraft.util.math.BlockPos, type:any /*net.minecraft.block.entity.BlockEntityType*/ ):java.util.Optional<T>;
	getBlockState( pos:net.minecraft.util.math.BlockPos ):net.minecraft.block.BlockState;
	getBottomSectionCoord(  ):int;
	getBottomY(  ):int;
	getDismountHeight( blockCollisionShape:any /*net.minecraft.util.shape.VoxelShape*/, belowBlockCollisionShapeGetter:java.util.function.Supplier<any /*net.minecraft.util.shape.VoxelShape*/> ):double;
	getDismountHeight( pos:net.minecraft.util.math.BlockPos ):double;
	getFluidState( pos:net.minecraft.util.math.BlockPos ):net.minecraft.fluid.FluidState;
	getHeight(  ):int;
	getLuminance( pos:net.minecraft.util.math.BlockPos ):int;
	getMaxLightLevel(  ):int;
	getSectionIndex( y:int ):int;
	getStatesInBox( box:net.minecraft.util.math.Box ):java.util.stream.Stream<net.minecraft.block.BlockState>;
	getTopSectionCoord(  ):int;
	getTopY(  ):int;
	isOutOfHeightLimit( pos:net.minecraft.util.math.BlockPos ):boolean;
	isOutOfHeightLimit( y:int ):boolean;
	raycast( context:any /*net.minecraft.world.BlockStateRaycastContext*/ ):net.minecraft.util.hit.BlockHitResult;
	raycast( context:any /*net.minecraft.world.RaycastContext*/ ):net.minecraft.util.hit.BlockHitResult;
	raycastBlock( start:net.minecraft.util.math.Vec3d, end:net.minecraft.util.math.Vec3d, pos:net.minecraft.util.math.BlockPos, shape:any /*net.minecraft.util.shape.VoxelShape*/, state:net.minecraft.block.BlockState ):net.minecraft.util.hit.BlockHitResult;
	sectionCoordToIndex( coord:int ):int;
	sectionIndexToCoord( index:int ):int;

} // end BlockView

} // end namespace net.minecraft.world

declare namespace net.minecraft.text {

class Style/* extends java.lang.Object*/ {

	equals( o:any /*java.lang.Object*/ ):boolean;
	getClickEvent(  ):any /*net.minecraft.text.ClickEvent*/;
	getColor(  ):any /*net.minecraft.text.TextColor*/;
	getFont(  ):net.minecraft.util.Identifier;
	getHoverEvent(  ):any /*net.minecraft.text.HoverEvent*/;
	getInsertion(  ):string;
	isBold(  ):boolean;
	isEmpty(  ):boolean;
	isItalic(  ):boolean;
	isObfuscated(  ):boolean;
	isStrikethrough(  ):boolean;
	isUnderlined(  ):boolean;
	toString(  ):string;
	withBold( bold:boolean|null ):Style;
	withClickEvent( clickEvent:any /*net.minecraft.text.ClickEvent*/ ):Style;
	withColor( color:any /*net.minecraft.text.TextColor*/ ):Style;
	withColor( color:net.minecraft.util.Formatting ):Style;
	withColor( rgbColor:int ):Style;
	withExclusiveFormatting( formatting:net.minecraft.util.Formatting ):Style;
	withFont( font:net.minecraft.util.Identifier ):Style;
	withFormatting( ...formattings:net.minecraft.util.Formatting[] ):Style;
	withFormatting( formatting:net.minecraft.util.Formatting ):Style;
	withHoverEvent( hoverEvent:any /*net.minecraft.text.HoverEvent*/ ):Style;
	withInsertion( insertion:string ):Style;
	withItalic( italic:boolean|null ):Style;
	withObfuscated( obfuscated:boolean|null ):Style;
	withParent( parent:Style ):Style;
	withStrikethrough( strikethrough:boolean|null ):Style;
	withUnderline( underline:boolean|null ):Style;

} // end Style

} // end namespace net.minecraft.text

declare namespace net.minecraft.util {

/* enum */class Formatting/* extends java.lang.Enum<any> implements StringIdentifiable*/ {

	// BLACK:Formatting;
	// DARK_BLUE:Formatting;
	// DARK_GREEN:Formatting;
	// DARK_AQUA:Formatting;
	// DARK_RED:Formatting;
	// DARK_PURPLE:Formatting;
	// GOLD:Formatting;
	// GRAY:Formatting;
	// DARK_GRAY:Formatting;
	// BLUE:Formatting;
	// GREEN:Formatting;
	// AQUA:Formatting;
	// RED:Formatting;
	// LIGHT_PURPLE:Formatting;
	// YELLOW:Formatting;
	// WHITE:Formatting;
	// OBFUSCATED:Formatting;
	// BOLD:Formatting;
	// STRIKETHROUGH:Formatting;
	// UNDERLINE:Formatting;
	// ITALIC:Formatting;
	// RESET:Formatting;

	asString(  ):string;
	compareTo<E>( arg0:E ):int;
	describeConstable(  ):java.util.Optional<any /*java.lang.Enum$EnumDesc*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getCode(  ):any /*char*/;
	getColorIndex(  ):int;
	getColorValue(  ):int|null;
	getDeclaringClass<E>(  ):java.lang.Class<E>;
	getName(  ):string;
	isColor(  ):boolean;
	isModifier(  ):boolean;
	name(  ):string;
	ordinal(  ):int;
	toString(  ):string;

} // end Formatting

} // end namespace net.minecraft.util

