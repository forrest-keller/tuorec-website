import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AggregateKeySpecifier = ('count' | AggregateKeySpecifier)[];
export type AggregateFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetKeySpecifier = ('stage' | 'locale' | 'localizations' | 'documentInStages' | 'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'handle' | 'fileName' | 'height' | 'width' | 'size' | 'mimeType' | 'createdBy' | 'updatedBy' | 'publishedBy' | 'photoPerson' | 'photosPlace' | 'photoProduct' | 'photoPost' | 'photoEvent' | 'history' | 'url' | AssetKeySpecifier)[];
export type AssetFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	localizations?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	photoPerson?: FieldPolicy<any> | FieldReadFunction<any>,
	photosPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	photoProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	photoPost?: FieldPolicy<any> | FieldReadFunction<any>,
	photoEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | AssetConnectionKeySpecifier)[];
export type AssetConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetEdgeKeySpecifier = ('node' | 'cursor' | AssetEdgeKeySpecifier)[];
export type AssetEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchPayloadKeySpecifier = ('count' | BatchPayloadKeySpecifier)[];
export type BatchPayloadFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ColorKeySpecifier = ('hex' | 'rgba' | 'css' | ColorKeySpecifier)[];
export type ColorFieldPolicy = {
	hex?: FieldPolicy<any> | FieldReadFunction<any>,
	rgba?: FieldPolicy<any> | FieldReadFunction<any>,
	css?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentVersionKeySpecifier = ('id' | 'stage' | 'revision' | 'createdAt' | 'data' | DocumentVersionKeySpecifier)[];
export type DocumentVersionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventKeySpecifier = ('stage' | 'documentInStages' | 'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'name' | 'description' | 'content' | 'startTime' | 'endTime' | 'createdBy' | 'updatedBy' | 'publishedBy' | 'photo' | 'people' | 'place' | 'meetingPlace' | 'pricing' | 'type' | 'activities' | 'history' | EventKeySpecifier)[];
export type EventFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	people?: FieldPolicy<any> | FieldReadFunction<any>,
	place?: FieldPolicy<any> | FieldReadFunction<any>,
	meetingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	pricing?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	activities?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | EventConnectionKeySpecifier)[];
export type EventConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventContentRichTextKeySpecifier = ('raw' | 'json' | 'html' | 'markdown' | 'text' | 'references' | EventContentRichTextKeySpecifier)[];
export type EventContentRichTextFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	json?: FieldPolicy<any> | FieldReadFunction<any>,
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventEdgeKeySpecifier = ('node' | 'cursor' | EventEdgeKeySpecifier)[];
export type EventEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupKeySpecifier = ('stage' | 'documentInStages' | 'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'name' | 'content' | 'createdBy' | 'updatedBy' | 'publishedBy' | 'people' | 'history' | GroupKeySpecifier)[];
export type GroupFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	people?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | GroupConnectionKeySpecifier)[];
export type GroupConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupContentRichTextKeySpecifier = ('raw' | 'json' | 'html' | 'markdown' | 'text' | 'references' | GroupContentRichTextKeySpecifier)[];
export type GroupContentRichTextFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	json?: FieldPolicy<any> | FieldReadFunction<any>,
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupEdgeKeySpecifier = ('node' | 'cursor' | GroupEdgeKeySpecifier)[];
export type GroupEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('latitude' | 'longitude' | 'distance' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	distance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createAsset' | 'updateAsset' | 'deleteAsset' | 'upsertAsset' | 'publishAsset' | 'unpublishAsset' | 'updateManyAssetsConnection' | 'deleteManyAssetsConnection' | 'publishManyAssetsConnection' | 'unpublishManyAssetsConnection' | 'updateManyAssets' | 'deleteManyAssets' | 'publishManyAssets' | 'unpublishManyAssets' | 'createPerson' | 'updatePerson' | 'deletePerson' | 'upsertPerson' | 'publishPerson' | 'unpublishPerson' | 'updateManyPeopleConnection' | 'deleteManyPeopleConnection' | 'publishManyPeopleConnection' | 'unpublishManyPeopleConnection' | 'updateManyPeople' | 'deleteManyPeople' | 'publishManyPeople' | 'unpublishManyPeople' | 'createGroup' | 'updateGroup' | 'deleteGroup' | 'upsertGroup' | 'publishGroup' | 'unpublishGroup' | 'updateManyGroupsConnection' | 'deleteManyGroupsConnection' | 'publishManyGroupsConnection' | 'unpublishManyGroupsConnection' | 'updateManyGroups' | 'deleteManyGroups' | 'publishManyGroups' | 'unpublishManyGroups' | 'createPlace' | 'updatePlace' | 'deletePlace' | 'upsertPlace' | 'publishPlace' | 'unpublishPlace' | 'updateManyPlacesConnection' | 'deleteManyPlacesConnection' | 'publishManyPlacesConnection' | 'unpublishManyPlacesConnection' | 'updateManyPlaces' | 'deleteManyPlaces' | 'publishManyPlaces' | 'unpublishManyPlaces' | 'createPricing' | 'updatePricing' | 'deletePricing' | 'upsertPricing' | 'publishPricing' | 'unpublishPricing' | 'updateManyPricingsConnection' | 'deleteManyPricingsConnection' | 'publishManyPricingsConnection' | 'unpublishManyPricingsConnection' | 'updateManyPricings' | 'deleteManyPricings' | 'publishManyPricings' | 'unpublishManyPricings' | 'createProduct' | 'updateProduct' | 'deleteProduct' | 'upsertProduct' | 'publishProduct' | 'unpublishProduct' | 'updateManyProductsConnection' | 'deleteManyProductsConnection' | 'publishManyProductsConnection' | 'unpublishManyProductsConnection' | 'updateManyProducts' | 'deleteManyProducts' | 'publishManyProducts' | 'unpublishManyProducts' | 'createEvent' | 'updateEvent' | 'deleteEvent' | 'upsertEvent' | 'publishEvent' | 'unpublishEvent' | 'updateManyEventsConnection' | 'deleteManyEventsConnection' | 'publishManyEventsConnection' | 'unpublishManyEventsConnection' | 'updateManyEvents' | 'deleteManyEvents' | 'publishManyEvents' | 'unpublishManyEvents' | 'createPost' | 'updatePost' | 'deletePost' | 'upsertPost' | 'publishPost' | 'unpublishPost' | 'updateManyPostsConnection' | 'deleteManyPostsConnection' | 'publishManyPostsConnection' | 'unpublishManyPostsConnection' | 'updateManyPosts' | 'deleteManyPosts' | 'publishManyPosts' | 'unpublishManyPosts' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	publishAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyAssetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyAssetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyAssetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyAssetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	createPerson?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePerson?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePerson?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertPerson?: FieldPolicy<any> | FieldReadFunction<any>,
	publishPerson?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishPerson?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyPeopleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyPeopleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyPeopleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyPeopleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyPeople?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyPeople?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyPeople?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyPeople?: FieldPolicy<any> | FieldReadFunction<any>,
	createGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	publishGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyGroupsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyGroupsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyGroupsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyGroupsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	createPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePlace?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePlace?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	publishPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyPlacesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyPlacesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyPlacesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyPlacesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyPlaces?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyPlaces?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyPlaces?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyPlaces?: FieldPolicy<any> | FieldReadFunction<any>,
	createPricing?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePricing?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePricing?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertPricing?: FieldPolicy<any> | FieldReadFunction<any>,
	publishPricing?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishPricing?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyPricingsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyPricingsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyPricingsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyPricingsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyPricings?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyPricings?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyPricings?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyPricings?: FieldPolicy<any> | FieldReadFunction<any>,
	createProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	publishProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyProductsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyProductsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyProductsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyProductsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	createEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	publishEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyEventsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyEventsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyEventsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyEventsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	createPost?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePost?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePost?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertPost?: FieldPolicy<any> | FieldReadFunction<any>,
	publishPost?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishPost?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyPostsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyPostsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyPostsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyPostsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyPosts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | 'stage' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor' | 'pageSize' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PersonKeySpecifier = ('stage' | 'documentInStages' | 'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'firstName' | 'lastName' | 'content' | 'createdBy' | 'updatedBy' | 'publishedBy' | 'photo' | 'groups' | 'history' | PersonKeySpecifier)[];
export type PersonFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PersonConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | PersonConnectionKeySpecifier)[];
export type PersonConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PersonContentRichTextKeySpecifier = ('raw' | 'json' | 'html' | 'markdown' | 'text' | 'references' | PersonContentRichTextKeySpecifier)[];
export type PersonContentRichTextFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	json?: FieldPolicy<any> | FieldReadFunction<any>,
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PersonEdgeKeySpecifier = ('node' | 'cursor' | PersonEdgeKeySpecifier)[];
export type PersonEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceKeySpecifier = ('stage' | 'documentInStages' | 'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'name' | 'description' | 'content' | 'location' | 'address' | 'createdBy' | 'updatedBy' | 'publishedBy' | 'photos' | 'history' | PlaceKeySpecifier)[];
export type PlaceFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	photos?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | PlaceConnectionKeySpecifier)[];
export type PlaceConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceContentRichTextKeySpecifier = ('raw' | 'json' | 'html' | 'markdown' | 'text' | 'references' | PlaceContentRichTextKeySpecifier)[];
export type PlaceContentRichTextFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	json?: FieldPolicy<any> | FieldReadFunction<any>,
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceEdgeKeySpecifier = ('node' | 'cursor' | PlaceEdgeKeySpecifier)[];
export type PlaceEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('stage' | 'documentInStages' | 'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'title' | 'description' | 'content' | 'createdBy' | 'updatedBy' | 'publishedBy' | 'photo' | 'displayLocations' | 'history' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	displayLocations?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | PostConnectionKeySpecifier)[];
export type PostConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostContentRichTextKeySpecifier = ('raw' | 'json' | 'html' | 'markdown' | 'text' | 'references' | PostContentRichTextKeySpecifier)[];
export type PostContentRichTextFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	json?: FieldPolicy<any> | FieldReadFunction<any>,
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostEdgeKeySpecifier = ('node' | 'cursor' | PostEdgeKeySpecifier)[];
export type PostEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PricingKeySpecifier = ('stage' | 'documentInStages' | 'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'price' | 'createdBy' | 'updatedBy' | 'publishedBy' | 'period' | 'history' | PricingKeySpecifier)[];
export type PricingFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	period?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PricingConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | PricingConnectionKeySpecifier)[];
export type PricingConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PricingEdgeKeySpecifier = ('node' | 'cursor' | PricingEdgeKeySpecifier)[];
export type PricingEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('stage' | 'documentInStages' | 'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'name' | 'description' | 'content' | 'createdBy' | 'updatedBy' | 'publishedBy' | 'photo' | 'pricings' | 'history' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	pricings?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ProductConnectionKeySpecifier)[];
export type ProductConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductContentRichTextKeySpecifier = ('raw' | 'json' | 'html' | 'markdown' | 'text' | 'references' | ProductContentRichTextKeySpecifier)[];
export type ProductContentRichTextFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	json?: FieldPolicy<any> | FieldReadFunction<any>,
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductEdgeKeySpecifier = ('node' | 'cursor' | ProductEdgeKeySpecifier)[];
export type ProductEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('node' | 'users' | 'user' | 'usersConnection' | 'assets' | 'asset' | 'assetsConnection' | 'assetVersion' | 'people' | 'person' | 'peopleConnection' | 'personVersion' | 'groups' | 'group' | 'groupsConnection' | 'groupVersion' | 'places' | 'place' | 'placesConnection' | 'placeVersion' | 'pricings' | 'pricing' | 'pricingsConnection' | 'pricingVersion' | 'products' | 'product' | 'productsConnection' | 'productVersion' | 'events' | 'event' | 'eventsConnection' | 'eventVersion' | 'posts' | 'post' | 'postsConnection' | 'postVersion' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	usersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	assetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	assetVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	people?: FieldPolicy<any> | FieldReadFunction<any>,
	person?: FieldPolicy<any> | FieldReadFunction<any>,
	peopleConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	personVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	groupsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	groupVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	places?: FieldPolicy<any> | FieldReadFunction<any>,
	place?: FieldPolicy<any> | FieldReadFunction<any>,
	placesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	placeVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	pricings?: FieldPolicy<any> | FieldReadFunction<any>,
	pricing?: FieldPolicy<any> | FieldReadFunction<any>,
	pricingsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	pricingVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	productVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	eventsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	eventVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	postsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	postVersion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RGBAKeySpecifier = ('r' | 'g' | 'b' | 'a' | RGBAKeySpecifier)[];
export type RGBAFieldPolicy = {
	r?: FieldPolicy<any> | FieldReadFunction<any>,
	g?: FieldPolicy<any> | FieldReadFunction<any>,
	b?: FieldPolicy<any> | FieldReadFunction<any>,
	a?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RichTextKeySpecifier = ('raw' | 'html' | 'markdown' | 'text' | RichTextKeySpecifier)[];
export type RichTextFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('stage' | 'documentInStages' | 'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'name' | 'picture' | 'isActive' | 'kind' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('node' | 'cursor' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VersionKeySpecifier = ('id' | 'stage' | 'revision' | 'createdAt' | VersionKeySpecifier)[];
export type VersionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateKeySpecifier | (() => undefined | AggregateKeySpecifier),
		fields?: AggregateFieldPolicy,
	},
	Asset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetKeySpecifier | (() => undefined | AssetKeySpecifier),
		fields?: AssetFieldPolicy,
	},
	AssetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetConnectionKeySpecifier | (() => undefined | AssetConnectionKeySpecifier),
		fields?: AssetConnectionFieldPolicy,
	},
	AssetEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetEdgeKeySpecifier | (() => undefined | AssetEdgeKeySpecifier),
		fields?: AssetEdgeFieldPolicy,
	},
	BatchPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchPayloadKeySpecifier | (() => undefined | BatchPayloadKeySpecifier),
		fields?: BatchPayloadFieldPolicy,
	},
	Color?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ColorKeySpecifier | (() => undefined | ColorKeySpecifier),
		fields?: ColorFieldPolicy,
	},
	DocumentVersion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentVersionKeySpecifier | (() => undefined | DocumentVersionKeySpecifier),
		fields?: DocumentVersionFieldPolicy,
	},
	Event?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventKeySpecifier | (() => undefined | EventKeySpecifier),
		fields?: EventFieldPolicy,
	},
	EventConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventConnectionKeySpecifier | (() => undefined | EventConnectionKeySpecifier),
		fields?: EventConnectionFieldPolicy,
	},
	EventContentRichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventContentRichTextKeySpecifier | (() => undefined | EventContentRichTextKeySpecifier),
		fields?: EventContentRichTextFieldPolicy,
	},
	EventEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventEdgeKeySpecifier | (() => undefined | EventEdgeKeySpecifier),
		fields?: EventEdgeFieldPolicy,
	},
	Group?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupKeySpecifier | (() => undefined | GroupKeySpecifier),
		fields?: GroupFieldPolicy,
	},
	GroupConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupConnectionKeySpecifier | (() => undefined | GroupConnectionKeySpecifier),
		fields?: GroupConnectionFieldPolicy,
	},
	GroupContentRichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupContentRichTextKeySpecifier | (() => undefined | GroupContentRichTextKeySpecifier),
		fields?: GroupContentRichTextFieldPolicy,
	},
	GroupEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupEdgeKeySpecifier | (() => undefined | GroupEdgeKeySpecifier),
		fields?: GroupEdgeFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Person?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PersonKeySpecifier | (() => undefined | PersonKeySpecifier),
		fields?: PersonFieldPolicy,
	},
	PersonConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PersonConnectionKeySpecifier | (() => undefined | PersonConnectionKeySpecifier),
		fields?: PersonConnectionFieldPolicy,
	},
	PersonContentRichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PersonContentRichTextKeySpecifier | (() => undefined | PersonContentRichTextKeySpecifier),
		fields?: PersonContentRichTextFieldPolicy,
	},
	PersonEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PersonEdgeKeySpecifier | (() => undefined | PersonEdgeKeySpecifier),
		fields?: PersonEdgeFieldPolicy,
	},
	Place?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceKeySpecifier | (() => undefined | PlaceKeySpecifier),
		fields?: PlaceFieldPolicy,
	},
	PlaceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceConnectionKeySpecifier | (() => undefined | PlaceConnectionKeySpecifier),
		fields?: PlaceConnectionFieldPolicy,
	},
	PlaceContentRichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceContentRichTextKeySpecifier | (() => undefined | PlaceContentRichTextKeySpecifier),
		fields?: PlaceContentRichTextFieldPolicy,
	},
	PlaceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceEdgeKeySpecifier | (() => undefined | PlaceEdgeKeySpecifier),
		fields?: PlaceEdgeFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	PostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostConnectionKeySpecifier | (() => undefined | PostConnectionKeySpecifier),
		fields?: PostConnectionFieldPolicy,
	},
	PostContentRichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostContentRichTextKeySpecifier | (() => undefined | PostContentRichTextKeySpecifier),
		fields?: PostContentRichTextFieldPolicy,
	},
	PostEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostEdgeKeySpecifier | (() => undefined | PostEdgeKeySpecifier),
		fields?: PostEdgeFieldPolicy,
	},
	Pricing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PricingKeySpecifier | (() => undefined | PricingKeySpecifier),
		fields?: PricingFieldPolicy,
	},
	PricingConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PricingConnectionKeySpecifier | (() => undefined | PricingConnectionKeySpecifier),
		fields?: PricingConnectionFieldPolicy,
	},
	PricingEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PricingEdgeKeySpecifier | (() => undefined | PricingEdgeKeySpecifier),
		fields?: PricingEdgeFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductConnectionKeySpecifier | (() => undefined | ProductConnectionKeySpecifier),
		fields?: ProductConnectionFieldPolicy,
	},
	ProductContentRichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductContentRichTextKeySpecifier | (() => undefined | ProductContentRichTextKeySpecifier),
		fields?: ProductContentRichTextFieldPolicy,
	},
	ProductEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductEdgeKeySpecifier | (() => undefined | ProductEdgeKeySpecifier),
		fields?: ProductEdgeFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RGBA?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RGBAKeySpecifier | (() => undefined | RGBAKeySpecifier),
		fields?: RGBAFieldPolicy,
	},
	RichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RichTextKeySpecifier | (() => undefined | RichTextKeySpecifier),
		fields?: RichTextFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	},
	Version?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VersionKeySpecifier | (() => undefined | VersionKeySpecifier),
		fields?: VersionFieldPolicy,
	}
};