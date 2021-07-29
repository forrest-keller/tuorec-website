import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};





export enum ActivityTypes {
  Hiking = 'hiking',
  Backpacking = 'backpacking',
  Swimming = 'swimming',
  Camping = 'camping'
}

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  photoPerson: Array<Person>;
  photosPlace: Array<Place>;
  photoProduct: Array<Product>;
  photoPost: Array<Post>;
  photoEvent: Array<Event>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPhotoPersonArgs = {
  where?: Maybe<PersonWhereInput>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPhotosPlaceArgs = {
  where?: Maybe<PlaceWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPhotoProductArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPhotoPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPhotoEventArgs = {
  where?: Maybe<EventWhereInput>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  photoPerson?: Maybe<PersonCreateManyInlineInput>;
  photosPlace?: Maybe<PlaceCreateManyInlineInput>;
  photoProduct?: Maybe<ProductCreateManyInlineInput>;
  photoPost?: Maybe<PostCreateManyInlineInput>;
  photoEvent?: Maybe<EventCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photoPerson_every?: Maybe<PersonWhereInput>;
  photoPerson_some?: Maybe<PersonWhereInput>;
  photoPerson_none?: Maybe<PersonWhereInput>;
  photosPlace_every?: Maybe<PlaceWhereInput>;
  photosPlace_some?: Maybe<PlaceWhereInput>;
  photosPlace_none?: Maybe<PlaceWhereInput>;
  photoProduct_every?: Maybe<ProductWhereInput>;
  photoProduct_some?: Maybe<ProductWhereInput>;
  photoProduct_none?: Maybe<ProductWhereInput>;
  photoPost_every?: Maybe<PostWhereInput>;
  photoPost_some?: Maybe<PostWhereInput>;
  photoPost_none?: Maybe<PostWhereInput>;
  photoEvent_every?: Maybe<EventWhereInput>;
  photoEvent_some?: Maybe<EventWhereInput>;
  photoEvent_none?: Maybe<EventWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  photoPerson?: Maybe<PersonUpdateManyInlineInput>;
  photosPlace?: Maybe<PlaceUpdateManyInlineInput>;
  photoProduct?: Maybe<ProductUpdateManyInlineInput>;
  photoPost?: Maybe<PostUpdateManyInlineInput>;
  photoEvent?: Maybe<EventUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photoPerson_every?: Maybe<PersonWhereInput>;
  photoPerson_some?: Maybe<PersonWhereInput>;
  photoPerson_none?: Maybe<PersonWhereInput>;
  photosPlace_every?: Maybe<PlaceWhereInput>;
  photosPlace_some?: Maybe<PlaceWhereInput>;
  photosPlace_none?: Maybe<PlaceWhereInput>;
  photoProduct_every?: Maybe<ProductWhereInput>;
  photoProduct_some?: Maybe<ProductWhereInput>;
  photoProduct_none?: Maybe<ProductWhereInput>;
  photoPost_every?: Maybe<PostWhereInput>;
  photoPost_some?: Maybe<PostWhereInput>;
  photoPost_none?: Maybe<PostWhereInput>;
  photoEvent_every?: Maybe<EventWhereInput>;
  photoEvent_some?: Maybe<EventWhereInput>;
  photoEvent_none?: Maybe<EventWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type Event = Node & {
  __typename?: 'Event';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Event>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** OPTIONAL: Generates name from activities and location by default. */
  name?: Maybe<Scalars['String']>;
  /** OPTIONAL: Uses place description by default. */
  description?: Maybe<Scalars['String']>;
  content: EventContentRichText;
  startTime: Scalars['DateTime'];
  endTime: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** OPTIONAL: Uses first location photo by default. */
  photo?: Maybe<Asset>;
  people: Array<Person>;
  place?: Maybe<Place>;
  meetingPlace?: Maybe<Place>;
  pricing?: Maybe<Pricing>;
  type: EventTypes;
  activities: Array<ActivityTypes>;
  /** List of Event versions */
  history: Array<Version>;
};


export type EventDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type EventCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EventUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EventPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EventPhotoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EventPeopleArgs = {
  where?: Maybe<PersonWhereInput>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type EventPlaceArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EventMeetingPlaceArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EventPricingArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EventHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type EventConnectInput = {
  /** Document to connect */
  where: EventWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type EventConnection = {
  __typename?: 'EventConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<EventEdge>;
  aggregate: Aggregate;
};

export type EventContentRichText = {
  __typename?: 'EventContentRichText';
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  json: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
  references: Array<EventContentRichTextEmbeddedTypes>;
};

export type EventContentRichTextEmbeddedTypes = Asset;

export type EventCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content: Scalars['RichTextAST'];
  startTime: Scalars['DateTime'];
  endTime: Scalars['DateTime'];
  photo?: Maybe<AssetCreateOneInlineInput>;
  people?: Maybe<PersonCreateManyInlineInput>;
  place?: Maybe<PlaceCreateOneInlineInput>;
  meetingPlace?: Maybe<PlaceCreateOneInlineInput>;
  pricing?: Maybe<PricingCreateOneInlineInput>;
  type: EventTypes;
  activities?: Maybe<Array<ActivityTypes>>;
};

export type EventCreateManyInlineInput = {
  /** Create and connect multiple existing Event documents */
  create?: Maybe<Array<EventCreateInput>>;
  /** Connect multiple existing Event documents */
  connect?: Maybe<Array<EventWhereUniqueInput>>;
};

export type EventCreateOneInlineInput = {
  /** Create and connect one Event document */
  create?: Maybe<EventCreateInput>;
  /** Connect one existing Event document */
  connect?: Maybe<EventWhereUniqueInput>;
};

/** An edge in a connection. */
export type EventEdge = {
  __typename?: 'EventEdge';
  /** The item at the end of the edge. */
  node: Event;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type EventManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EventWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  startTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  startTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  startTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  startTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  startTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  startTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  startTime_gte?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  endTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  endTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  endTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  endTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  endTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  endTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  endTime_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photo?: Maybe<AssetWhereInput>;
  people_every?: Maybe<PersonWhereInput>;
  people_some?: Maybe<PersonWhereInput>;
  people_none?: Maybe<PersonWhereInput>;
  place?: Maybe<PlaceWhereInput>;
  meetingPlace?: Maybe<PlaceWhereInput>;
  pricing?: Maybe<PricingWhereInput>;
  type?: Maybe<EventTypes>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<EventTypes>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<EventTypes>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<EventTypes>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  activities?: Maybe<Array<ActivityTypes>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  activities_not?: Maybe<Array<ActivityTypes>>;
  /** Matches if the field array contains *all* items provided to the filter */
  activities_contains_all?: Maybe<Array<ActivityTypes>>;
  /** Matches if the field array contains at least one item provided to the filter */
  activities_contains_some?: Maybe<Array<ActivityTypes>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  activities_contains_none?: Maybe<Array<ActivityTypes>>;
};

export enum EventOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  ActivitiesAsc = 'activities_ASC',
  ActivitiesDesc = 'activities_DESC'
}

export enum EventTypes {
  Trip = 'trip'
}

export type EventUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  photo?: Maybe<AssetUpdateOneInlineInput>;
  people?: Maybe<PersonUpdateManyInlineInput>;
  place?: Maybe<PlaceUpdateOneInlineInput>;
  meetingPlace?: Maybe<PlaceUpdateOneInlineInput>;
  pricing?: Maybe<PricingUpdateOneInlineInput>;
  type?: Maybe<EventTypes>;
  activities?: Maybe<Array<ActivityTypes>>;
};

export type EventUpdateManyInlineInput = {
  /** Create and connect multiple Event documents */
  create?: Maybe<Array<EventCreateInput>>;
  /** Connect multiple existing Event documents */
  connect?: Maybe<Array<EventConnectInput>>;
  /** Override currently-connected documents with multiple existing Event documents */
  set?: Maybe<Array<EventWhereUniqueInput>>;
  /** Update multiple Event documents */
  update?: Maybe<Array<EventUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Event documents */
  upsert?: Maybe<Array<EventUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Event documents */
  disconnect?: Maybe<Array<EventWhereUniqueInput>>;
  /** Delete multiple Event documents */
  delete?: Maybe<Array<EventWhereUniqueInput>>;
};

export type EventUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  type?: Maybe<EventTypes>;
  activities?: Maybe<Array<ActivityTypes>>;
};

export type EventUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: EventWhereInput;
  /** Update many input */
  data: EventUpdateManyInput;
};

export type EventUpdateOneInlineInput = {
  /** Create and connect one Event document */
  create?: Maybe<EventCreateInput>;
  /** Update single Event document */
  update?: Maybe<EventUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Event document */
  upsert?: Maybe<EventUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Event document */
  connect?: Maybe<EventWhereUniqueInput>;
  /** Disconnect currently connected Event document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Event document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type EventUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EventWhereUniqueInput;
  /** Document to update */
  data: EventUpdateInput;
};

export type EventUpsertInput = {
  /** Create document if it didn't exist */
  create: EventCreateInput;
  /** Update document if it exists */
  update: EventUpdateInput;
};

export type EventUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EventWhereUniqueInput;
  /** Upsert data */
  data: EventUpsertInput;
};

/** Identifies documents */
export type EventWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EventWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  startTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  startTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  startTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  startTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  startTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  startTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  startTime_gte?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  endTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  endTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  endTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  endTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  endTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  endTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  endTime_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photo?: Maybe<AssetWhereInput>;
  people_every?: Maybe<PersonWhereInput>;
  people_some?: Maybe<PersonWhereInput>;
  people_none?: Maybe<PersonWhereInput>;
  place?: Maybe<PlaceWhereInput>;
  meetingPlace?: Maybe<PlaceWhereInput>;
  pricing?: Maybe<PricingWhereInput>;
  type?: Maybe<EventTypes>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<EventTypes>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<EventTypes>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<EventTypes>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  activities?: Maybe<Array<ActivityTypes>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  activities_not?: Maybe<Array<ActivityTypes>>;
  /** Matches if the field array contains *all* items provided to the filter */
  activities_contains_all?: Maybe<Array<ActivityTypes>>;
  /** Matches if the field array contains at least one item provided to the filter */
  activities_contains_some?: Maybe<Array<ActivityTypes>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  activities_contains_none?: Maybe<Array<ActivityTypes>>;
};

/** References Event record uniquely */
export type EventWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Group = Node & {
  __typename?: 'Group';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Group>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  content: GroupContentRichText;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  people: Array<Person>;
  /** List of Group versions */
  history: Array<Version>;
};


export type GroupDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GroupCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type GroupUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type GroupPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type GroupPeopleArgs = {
  where?: Maybe<PersonWhereInput>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type GroupHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type GroupConnectInput = {
  /** Document to connect */
  where: GroupWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GroupConnection = {
  __typename?: 'GroupConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<GroupEdge>;
  aggregate: Aggregate;
};

export type GroupContentRichText = {
  __typename?: 'GroupContentRichText';
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  json: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
  references: Array<GroupContentRichTextEmbeddedTypes>;
};

export type GroupContentRichTextEmbeddedTypes = Asset;

export type GroupCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  content: Scalars['RichTextAST'];
  people?: Maybe<PersonCreateManyInlineInput>;
};

export type GroupCreateManyInlineInput = {
  /** Create and connect multiple existing Group documents */
  create?: Maybe<Array<GroupCreateInput>>;
  /** Connect multiple existing Group documents */
  connect?: Maybe<Array<GroupWhereUniqueInput>>;
};

export type GroupCreateOneInlineInput = {
  /** Create and connect one Group document */
  create?: Maybe<GroupCreateInput>;
  /** Connect one existing Group document */
  connect?: Maybe<GroupWhereUniqueInput>;
};

/** An edge in a connection. */
export type GroupEdge = {
  __typename?: 'GroupEdge';
  /** The item at the end of the edge. */
  node: Group;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GroupManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GroupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GroupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GroupWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  people_every?: Maybe<PersonWhereInput>;
  people_some?: Maybe<PersonWhereInput>;
  people_none?: Maybe<PersonWhereInput>;
};

export enum GroupOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type GroupUpdateInput = {
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  people?: Maybe<PersonUpdateManyInlineInput>;
};

export type GroupUpdateManyInlineInput = {
  /** Create and connect multiple Group documents */
  create?: Maybe<Array<GroupCreateInput>>;
  /** Connect multiple existing Group documents */
  connect?: Maybe<Array<GroupConnectInput>>;
  /** Override currently-connected documents with multiple existing Group documents */
  set?: Maybe<Array<GroupWhereUniqueInput>>;
  /** Update multiple Group documents */
  update?: Maybe<Array<GroupUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Group documents */
  upsert?: Maybe<Array<GroupUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Group documents */
  disconnect?: Maybe<Array<GroupWhereUniqueInput>>;
  /** Delete multiple Group documents */
  delete?: Maybe<Array<GroupWhereUniqueInput>>;
};

export type GroupUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
};

export type GroupUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GroupWhereInput;
  /** Update many input */
  data: GroupUpdateManyInput;
};

export type GroupUpdateOneInlineInput = {
  /** Create and connect one Group document */
  create?: Maybe<GroupCreateInput>;
  /** Update single Group document */
  update?: Maybe<GroupUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Group document */
  upsert?: Maybe<GroupUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Group document */
  connect?: Maybe<GroupWhereUniqueInput>;
  /** Disconnect currently connected Group document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Group document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GroupUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GroupWhereUniqueInput;
  /** Document to update */
  data: GroupUpdateInput;
};

export type GroupUpsertInput = {
  /** Create document if it didn't exist */
  create: GroupCreateInput;
  /** Update document if it exists */
  update: GroupUpdateInput;
};

export type GroupUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GroupWhereUniqueInput;
  /** Upsert data */
  data: GroupUpsertInput;
};

/** Identifies documents */
export type GroupWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GroupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GroupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GroupWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  people_every?: Maybe<PersonWhereInput>;
  people_some?: Maybe<PersonWhereInput>;
  people_none?: Maybe<PersonWhereInput>;
};

/** References Group record uniquely */
export type GroupWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one person */
  createPerson?: Maybe<Person>;
  /** Update one person */
  updatePerson?: Maybe<Person>;
  /** Delete one person from _all_ existing stages. Returns deleted document. */
  deletePerson?: Maybe<Person>;
  /** Upsert one person */
  upsertPerson?: Maybe<Person>;
  /** Publish one person */
  publishPerson?: Maybe<Person>;
  /** Unpublish one person from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPerson?: Maybe<Person>;
  /** Update many Person documents */
  updateManyPeopleConnection: PersonConnection;
  /** Delete many Person documents, return deleted documents */
  deleteManyPeopleConnection: PersonConnection;
  /** Publish many Person documents */
  publishManyPeopleConnection: PersonConnection;
  /** Find many Person documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPeopleConnection: PersonConnection;
  /**
   * Update many people
   * @deprecated Please use the new paginated many mutation (updateManyPeopleConnection)
   */
  updateManyPeople: BatchPayload;
  /**
   * Delete many Person documents
   * @deprecated Please use the new paginated many mutation (deleteManyPeopleConnection)
   */
  deleteManyPeople: BatchPayload;
  /**
   * Publish many Person documents
   * @deprecated Please use the new paginated many mutation (publishManyPeopleConnection)
   */
  publishManyPeople: BatchPayload;
  /**
   * Unpublish many Person documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPeopleConnection)
   */
  unpublishManyPeople: BatchPayload;
  /** Create one group */
  createGroup?: Maybe<Group>;
  /** Update one group */
  updateGroup?: Maybe<Group>;
  /** Delete one group from _all_ existing stages. Returns deleted document. */
  deleteGroup?: Maybe<Group>;
  /** Upsert one group */
  upsertGroup?: Maybe<Group>;
  /** Publish one group */
  publishGroup?: Maybe<Group>;
  /** Unpublish one group from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGroup?: Maybe<Group>;
  /** Update many Group documents */
  updateManyGroupsConnection: GroupConnection;
  /** Delete many Group documents, return deleted documents */
  deleteManyGroupsConnection: GroupConnection;
  /** Publish many Group documents */
  publishManyGroupsConnection: GroupConnection;
  /** Find many Group documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGroupsConnection: GroupConnection;
  /**
   * Update many groups
   * @deprecated Please use the new paginated many mutation (updateManyGroupsConnection)
   */
  updateManyGroups: BatchPayload;
  /**
   * Delete many Group documents
   * @deprecated Please use the new paginated many mutation (deleteManyGroupsConnection)
   */
  deleteManyGroups: BatchPayload;
  /**
   * Publish many Group documents
   * @deprecated Please use the new paginated many mutation (publishManyGroupsConnection)
   */
  publishManyGroups: BatchPayload;
  /**
   * Unpublish many Group documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGroupsConnection)
   */
  unpublishManyGroups: BatchPayload;
  /** Create one place */
  createPlace?: Maybe<Place>;
  /** Update one place */
  updatePlace?: Maybe<Place>;
  /** Delete one place from _all_ existing stages. Returns deleted document. */
  deletePlace?: Maybe<Place>;
  /** Upsert one place */
  upsertPlace?: Maybe<Place>;
  /** Publish one place */
  publishPlace?: Maybe<Place>;
  /** Unpublish one place from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPlace?: Maybe<Place>;
  /** Update many Place documents */
  updateManyPlacesConnection: PlaceConnection;
  /** Delete many Place documents, return deleted documents */
  deleteManyPlacesConnection: PlaceConnection;
  /** Publish many Place documents */
  publishManyPlacesConnection: PlaceConnection;
  /** Find many Place documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPlacesConnection: PlaceConnection;
  /**
   * Update many places
   * @deprecated Please use the new paginated many mutation (updateManyPlacesConnection)
   */
  updateManyPlaces: BatchPayload;
  /**
   * Delete many Place documents
   * @deprecated Please use the new paginated many mutation (deleteManyPlacesConnection)
   */
  deleteManyPlaces: BatchPayload;
  /**
   * Publish many Place documents
   * @deprecated Please use the new paginated many mutation (publishManyPlacesConnection)
   */
  publishManyPlaces: BatchPayload;
  /**
   * Unpublish many Place documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPlacesConnection)
   */
  unpublishManyPlaces: BatchPayload;
  /** Create one pricing */
  createPricing?: Maybe<Pricing>;
  /** Update one pricing */
  updatePricing?: Maybe<Pricing>;
  /** Delete one pricing from _all_ existing stages. Returns deleted document. */
  deletePricing?: Maybe<Pricing>;
  /** Upsert one pricing */
  upsertPricing?: Maybe<Pricing>;
  /** Publish one pricing */
  publishPricing?: Maybe<Pricing>;
  /** Unpublish one pricing from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPricing?: Maybe<Pricing>;
  /** Update many Pricing documents */
  updateManyPricingsConnection: PricingConnection;
  /** Delete many Pricing documents, return deleted documents */
  deleteManyPricingsConnection: PricingConnection;
  /** Publish many Pricing documents */
  publishManyPricingsConnection: PricingConnection;
  /** Find many Pricing documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPricingsConnection: PricingConnection;
  /**
   * Update many pricings
   * @deprecated Please use the new paginated many mutation (updateManyPricingsConnection)
   */
  updateManyPricings: BatchPayload;
  /**
   * Delete many Pricing documents
   * @deprecated Please use the new paginated many mutation (deleteManyPricingsConnection)
   */
  deleteManyPricings: BatchPayload;
  /**
   * Publish many Pricing documents
   * @deprecated Please use the new paginated many mutation (publishManyPricingsConnection)
   */
  publishManyPricings: BatchPayload;
  /**
   * Unpublish many Pricing documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPricingsConnection)
   */
  unpublishManyPricings: BatchPayload;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Create one event */
  createEvent?: Maybe<Event>;
  /** Update one event */
  updateEvent?: Maybe<Event>;
  /** Delete one event from _all_ existing stages. Returns deleted document. */
  deleteEvent?: Maybe<Event>;
  /** Upsert one event */
  upsertEvent?: Maybe<Event>;
  /** Publish one event */
  publishEvent?: Maybe<Event>;
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEvent?: Maybe<Event>;
  /** Update many Event documents */
  updateManyEventsConnection: EventConnection;
  /** Delete many Event documents, return deleted documents */
  deleteManyEventsConnection: EventConnection;
  /** Publish many Event documents */
  publishManyEventsConnection: EventConnection;
  /** Find many Event documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventsConnection: EventConnection;
  /**
   * Update many events
   * @deprecated Please use the new paginated many mutation (updateManyEventsConnection)
   */
  updateManyEvents: BatchPayload;
  /**
   * Delete many Event documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventsConnection)
   */
  deleteManyEvents: BatchPayload;
  /**
   * Publish many Event documents
   * @deprecated Please use the new paginated many mutation (publishManyEventsConnection)
   */
  publishManyEvents: BatchPayload;
  /**
   * Unpublish many Event documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventsConnection)
   */
  unpublishManyEvents: BatchPayload;
  /** Create one post */
  createPost?: Maybe<Post>;
  /** Update one post */
  updatePost?: Maybe<Post>;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>;
  /** Upsert one post */
  upsertPost?: Maybe<Post>;
  /** Publish one post */
  publishPost?: Maybe<Post>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>;
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection;
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection;
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection;
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection;
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload;
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload;
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload;
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};


export type MutationUpdatePersonArgs = {
  where: PersonWhereUniqueInput;
  data: PersonUpdateInput;
};


export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};


export type MutationUpsertPersonArgs = {
  where: PersonWhereUniqueInput;
  upsert: PersonUpsertInput;
};


export type MutationPublishPersonArgs = {
  where: PersonWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPersonArgs = {
  where: PersonWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPeopleConnectionArgs = {
  where?: Maybe<PersonManyWhereInput>;
  data: PersonUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPeopleConnectionArgs = {
  where?: Maybe<PersonManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPeopleConnectionArgs = {
  where?: Maybe<PersonManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPeopleConnectionArgs = {
  where?: Maybe<PersonManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPeopleArgs = {
  where?: Maybe<PersonManyWhereInput>;
  data: PersonUpdateManyInput;
};


export type MutationDeleteManyPeopleArgs = {
  where?: Maybe<PersonManyWhereInput>;
};


export type MutationPublishManyPeopleArgs = {
  where?: Maybe<PersonManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPeopleArgs = {
  where?: Maybe<PersonManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateGroupArgs = {
  data: GroupCreateInput;
};


export type MutationUpdateGroupArgs = {
  where: GroupWhereUniqueInput;
  data: GroupUpdateInput;
};


export type MutationDeleteGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationUpsertGroupArgs = {
  where: GroupWhereUniqueInput;
  upsert: GroupUpsertInput;
};


export type MutationPublishGroupArgs = {
  where: GroupWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishGroupArgs = {
  where: GroupWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyGroupsConnectionArgs = {
  where?: Maybe<GroupManyWhereInput>;
  data: GroupUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyGroupsConnectionArgs = {
  where?: Maybe<GroupManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyGroupsConnectionArgs = {
  where?: Maybe<GroupManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyGroupsConnectionArgs = {
  where?: Maybe<GroupManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyGroupsArgs = {
  where?: Maybe<GroupManyWhereInput>;
  data: GroupUpdateManyInput;
};


export type MutationDeleteManyGroupsArgs = {
  where?: Maybe<GroupManyWhereInput>;
};


export type MutationPublishManyGroupsArgs = {
  where?: Maybe<GroupManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyGroupsArgs = {
  where?: Maybe<GroupManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePlaceArgs = {
  data: PlaceCreateInput;
};


export type MutationUpdatePlaceArgs = {
  where: PlaceWhereUniqueInput;
  data: PlaceUpdateInput;
};


export type MutationDeletePlaceArgs = {
  where: PlaceWhereUniqueInput;
};


export type MutationUpsertPlaceArgs = {
  where: PlaceWhereUniqueInput;
  upsert: PlaceUpsertInput;
};


export type MutationPublishPlaceArgs = {
  where: PlaceWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPlaceArgs = {
  where: PlaceWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPlacesConnectionArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  data: PlaceUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPlacesConnectionArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPlacesConnectionArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPlacesConnectionArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPlacesArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  data: PlaceUpdateManyInput;
};


export type MutationDeleteManyPlacesArgs = {
  where?: Maybe<PlaceManyWhereInput>;
};


export type MutationPublishManyPlacesArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPlacesArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePricingArgs = {
  data: PricingCreateInput;
};


export type MutationUpdatePricingArgs = {
  where: PricingWhereUniqueInput;
  data: PricingUpdateInput;
};


export type MutationDeletePricingArgs = {
  where: PricingWhereUniqueInput;
};


export type MutationUpsertPricingArgs = {
  where: PricingWhereUniqueInput;
  upsert: PricingUpsertInput;
};


export type MutationPublishPricingArgs = {
  where: PricingWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPricingArgs = {
  where: PricingWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPricingsConnectionArgs = {
  where?: Maybe<PricingManyWhereInput>;
  data: PricingUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPricingsConnectionArgs = {
  where?: Maybe<PricingManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPricingsConnectionArgs = {
  where?: Maybe<PricingManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPricingsConnectionArgs = {
  where?: Maybe<PricingManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPricingsArgs = {
  where?: Maybe<PricingManyWhereInput>;
  data: PricingUpdateManyInput;
};


export type MutationDeleteManyPricingsArgs = {
  where?: Maybe<PricingManyWhereInput>;
};


export type MutationPublishManyPricingsArgs = {
  where?: Maybe<PricingManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPricingsArgs = {
  where?: Maybe<PricingManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationUpdateProductArgs = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  where: ProductWhereUniqueInput;
  upsert: ProductUpsertInput;
};


export type MutationPublishProductArgs = {
  where: ProductWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishProductArgs = {
  where: ProductWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyProductsConnectionArgs = {
  where?: Maybe<ProductManyWhereInput>;
  data: ProductUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProductsConnectionArgs = {
  where?: Maybe<ProductManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProductsConnectionArgs = {
  where?: Maybe<ProductManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyProductsConnectionArgs = {
  where?: Maybe<ProductManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyProductsArgs = {
  where?: Maybe<ProductManyWhereInput>;
  data: ProductUpdateManyInput;
};


export type MutationDeleteManyProductsArgs = {
  where?: Maybe<ProductManyWhereInput>;
};


export type MutationPublishManyProductsArgs = {
  where?: Maybe<ProductManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyProductsArgs = {
  where?: Maybe<ProductManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationUpdateEventArgs = {
  where: EventWhereUniqueInput;
  data: EventUpdateInput;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationUpsertEventArgs = {
  where: EventWhereUniqueInput;
  upsert: EventUpsertInput;
};


export type MutationPublishEventArgs = {
  where: EventWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishEventArgs = {
  where: EventWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  data: EventUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
  data: EventUpdateManyInput;
};


export type MutationDeleteManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
};


export type MutationPublishManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationUpdatePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  upsert: PostUpsertInput;
};


export type MutationPublishPostArgs = {
  where: PostWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPostArgs = {
  where: PostWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  data: PostUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPostsConnectionArgs = {
  where?: Maybe<PostManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  data: PostUpdateManyInput;
};


export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
};


export type MutationPublishManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPostsArgs = {
  where?: Maybe<PostManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type Person = Node & {
  __typename?: 'Person';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Person>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  content: PersonContentRichText;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  photo: Asset;
  groups: Array<Group>;
  /** List of Person versions */
  history: Array<Version>;
};


export type PersonDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PersonCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PersonUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PersonPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PersonPhotoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PersonGroupsArgs = {
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type PersonHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PersonConnectInput = {
  /** Document to connect */
  where: PersonWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PersonConnection = {
  __typename?: 'PersonConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PersonEdge>;
  aggregate: Aggregate;
};

export type PersonContentRichText = {
  __typename?: 'PersonContentRichText';
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  json: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
  references: Array<PersonContentRichTextEmbeddedTypes>;
};

export type PersonContentRichTextEmbeddedTypes = Asset;

export type PersonCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  content: Scalars['RichTextAST'];
  photo: AssetCreateOneInlineInput;
  ckri2a0qx0ytm01we6zlm4t7a?: Maybe<EventCreateManyInlineInput>;
  groups?: Maybe<GroupCreateManyInlineInput>;
};

export type PersonCreateManyInlineInput = {
  /** Create and connect multiple existing Person documents */
  create?: Maybe<Array<PersonCreateInput>>;
  /** Connect multiple existing Person documents */
  connect?: Maybe<Array<PersonWhereUniqueInput>>;
};

export type PersonCreateOneInlineInput = {
  /** Create and connect one Person document */
  create?: Maybe<PersonCreateInput>;
  /** Connect one existing Person document */
  connect?: Maybe<PersonWhereUniqueInput>;
};

/** An edge in a connection. */
export type PersonEdge = {
  __typename?: 'PersonEdge';
  /** The item at the end of the edge. */
  node: Person;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PersonManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PersonWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photo?: Maybe<AssetWhereInput>;
  groups_every?: Maybe<GroupWhereInput>;
  groups_some?: Maybe<GroupWhereInput>;
  groups_none?: Maybe<GroupWhereInput>;
};

export enum PersonOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC'
}

export type PersonUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  photo?: Maybe<AssetUpdateOneInlineInput>;
  ckri2a0qx0ytm01we6zlm4t7a?: Maybe<EventUpdateManyInlineInput>;
  groups?: Maybe<GroupUpdateManyInlineInput>;
};

export type PersonUpdateManyInlineInput = {
  /** Create and connect multiple Person documents */
  create?: Maybe<Array<PersonCreateInput>>;
  /** Connect multiple existing Person documents */
  connect?: Maybe<Array<PersonConnectInput>>;
  /** Override currently-connected documents with multiple existing Person documents */
  set?: Maybe<Array<PersonWhereUniqueInput>>;
  /** Update multiple Person documents */
  update?: Maybe<Array<PersonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Person documents */
  upsert?: Maybe<Array<PersonUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Person documents */
  disconnect?: Maybe<Array<PersonWhereUniqueInput>>;
  /** Delete multiple Person documents */
  delete?: Maybe<Array<PersonWhereUniqueInput>>;
};

export type PersonUpdateManyInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
};

export type PersonUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PersonWhereInput;
  /** Update many input */
  data: PersonUpdateManyInput;
};

export type PersonUpdateOneInlineInput = {
  /** Create and connect one Person document */
  create?: Maybe<PersonCreateInput>;
  /** Update single Person document */
  update?: Maybe<PersonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Person document */
  upsert?: Maybe<PersonUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Person document */
  connect?: Maybe<PersonWhereUniqueInput>;
  /** Disconnect currently connected Person document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Person document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PersonUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PersonWhereUniqueInput;
  /** Document to update */
  data: PersonUpdateInput;
};

export type PersonUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonCreateInput;
  /** Update document if it exists */
  update: PersonUpdateInput;
};

export type PersonUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PersonWhereUniqueInput;
  /** Upsert data */
  data: PersonUpsertInput;
};

/** Identifies documents */
export type PersonWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PersonWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photo?: Maybe<AssetWhereInput>;
  groups_every?: Maybe<GroupWhereInput>;
  groups_some?: Maybe<GroupWhereInput>;
  groups_none?: Maybe<GroupWhereInput>;
};

/** References Person record uniquely */
export type PersonWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Place = Node & {
  __typename?: 'Place';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Place>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description: Scalars['String'];
  content: PlaceContentRichText;
  location: Location;
  address: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  photos: Array<Asset>;
  /** List of Place versions */
  history: Array<Version>;
};


export type PlaceDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PlaceCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PlaceUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PlacePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PlacePhotosArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type PlaceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PlaceConnectInput = {
  /** Document to connect */
  where: PlaceWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PlaceConnection = {
  __typename?: 'PlaceConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PlaceEdge>;
  aggregate: Aggregate;
};

export type PlaceContentRichText = {
  __typename?: 'PlaceContentRichText';
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  json: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
  references: Array<PlaceContentRichTextEmbeddedTypes>;
};

export type PlaceContentRichTextEmbeddedTypes = Asset;

export type PlaceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description: Scalars['String'];
  content: Scalars['RichTextAST'];
  location: LocationInput;
  address: Scalars['String'];
  photos: AssetCreateManyInlineInput;
  ckri29bab0ysu01weaqy51nf7?: Maybe<EventCreateManyInlineInput>;
  ckri88r180s2z01xsdx8b42i3?: Maybe<EventCreateManyInlineInput>;
};

export type PlaceCreateManyInlineInput = {
  /** Create and connect multiple existing Place documents */
  create?: Maybe<Array<PlaceCreateInput>>;
  /** Connect multiple existing Place documents */
  connect?: Maybe<Array<PlaceWhereUniqueInput>>;
};

export type PlaceCreateOneInlineInput = {
  /** Create and connect one Place document */
  create?: Maybe<PlaceCreateInput>;
  /** Connect one existing Place document */
  connect?: Maybe<PlaceWhereUniqueInput>;
};

/** An edge in a connection. */
export type PlaceEdge = {
  __typename?: 'PlaceEdge';
  /** The item at the end of the edge. */
  node: Place;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PlaceManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photos_every?: Maybe<AssetWhereInput>;
  photos_some?: Maybe<AssetWhereInput>;
  photos_none?: Maybe<AssetWhereInput>;
};

export enum PlaceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC'
}

export type PlaceUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  location?: Maybe<LocationInput>;
  address?: Maybe<Scalars['String']>;
  photos?: Maybe<AssetUpdateManyInlineInput>;
  ckri29bab0ysu01weaqy51nf7?: Maybe<EventUpdateManyInlineInput>;
  ckri88r180s2z01xsdx8b42i3?: Maybe<EventUpdateManyInlineInput>;
};

export type PlaceUpdateManyInlineInput = {
  /** Create and connect multiple Place documents */
  create?: Maybe<Array<PlaceCreateInput>>;
  /** Connect multiple existing Place documents */
  connect?: Maybe<Array<PlaceConnectInput>>;
  /** Override currently-connected documents with multiple existing Place documents */
  set?: Maybe<Array<PlaceWhereUniqueInput>>;
  /** Update multiple Place documents */
  update?: Maybe<Array<PlaceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Place documents */
  upsert?: Maybe<Array<PlaceUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Place documents */
  disconnect?: Maybe<Array<PlaceWhereUniqueInput>>;
  /** Delete multiple Place documents */
  delete?: Maybe<Array<PlaceWhereUniqueInput>>;
};

export type PlaceUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  location?: Maybe<LocationInput>;
  address?: Maybe<Scalars['String']>;
};

export type PlaceUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PlaceWhereInput;
  /** Update many input */
  data: PlaceUpdateManyInput;
};

export type PlaceUpdateOneInlineInput = {
  /** Create and connect one Place document */
  create?: Maybe<PlaceCreateInput>;
  /** Update single Place document */
  update?: Maybe<PlaceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Place document */
  upsert?: Maybe<PlaceUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Place document */
  connect?: Maybe<PlaceWhereUniqueInput>;
  /** Disconnect currently connected Place document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Place document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PlaceUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PlaceWhereUniqueInput;
  /** Document to update */
  data: PlaceUpdateInput;
};

export type PlaceUpsertInput = {
  /** Create document if it didn't exist */
  create: PlaceCreateInput;
  /** Update document if it exists */
  update: PlaceUpdateInput;
};

export type PlaceUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PlaceWhereUniqueInput;
  /** Upsert data */
  data: PlaceUpsertInput;
};

/** Identifies documents */
export type PlaceWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photos_every?: Maybe<AssetWhereInput>;
  photos_some?: Maybe<AssetWhereInput>;
  photos_none?: Maybe<AssetWhereInput>;
};

/** References Place record uniquely */
export type PlaceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Post = Node & {
  __typename?: 'Post';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Post>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description: Scalars['String'];
  content: PostContentRichText;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  photo: Asset;
  displayLocations: Array<WebsiteLocations>;
  /** List of Post versions */
  history: Array<Version>;
};


export type PostDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PostCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PostUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PostPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PostPhotoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PostHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PostConnectInput = {
  /** Document to connect */
  where: PostWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PostEdge>;
  aggregate: Aggregate;
};

export type PostContentRichText = {
  __typename?: 'PostContentRichText';
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  json: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
  references: Array<PostContentRichTextEmbeddedTypes>;
};

export type PostContentRichTextEmbeddedTypes = Asset;

export type PostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description: Scalars['String'];
  content: Scalars['RichTextAST'];
  photo: AssetCreateOneInlineInput;
  displayLocations?: Maybe<Array<WebsiteLocations>>;
};

export type PostCreateManyInlineInput = {
  /** Create and connect multiple existing Post documents */
  create?: Maybe<Array<PostCreateInput>>;
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateOneInlineInput = {
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>;
  /** Connect one existing Post document */
  connect?: Maybe<PostWhereUniqueInput>;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** The item at the end of the edge. */
  node: Post;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PostManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photo?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  displayLocations?: Maybe<Array<WebsiteLocations>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  displayLocations_not?: Maybe<Array<WebsiteLocations>>;
  /** Matches if the field array contains *all* items provided to the filter */
  displayLocations_contains_all?: Maybe<Array<WebsiteLocations>>;
  /** Matches if the field array contains at least one item provided to the filter */
  displayLocations_contains_some?: Maybe<Array<WebsiteLocations>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  displayLocations_contains_none?: Maybe<Array<WebsiteLocations>>;
};

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DisplayLocationsAsc = 'displayLocations_ASC',
  DisplayLocationsDesc = 'displayLocations_DESC'
}

export type PostUpdateInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  photo?: Maybe<AssetUpdateOneInlineInput>;
  displayLocations?: Maybe<Array<WebsiteLocations>>;
};

export type PostUpdateManyInlineInput = {
  /** Create and connect multiple Post documents */
  create?: Maybe<Array<PostCreateInput>>;
  /** Connect multiple existing Post documents */
  connect?: Maybe<Array<PostConnectInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set?: Maybe<Array<PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update?: Maybe<Array<PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert?: Maybe<Array<PostUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  /** Delete multiple Post documents */
  delete?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  displayLocations?: Maybe<Array<WebsiteLocations>>;
};

export type PostUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PostWhereInput;
  /** Update many input */
  data: PostUpdateManyInput;
};

export type PostUpdateOneInlineInput = {
  /** Create and connect one Post document */
  create?: Maybe<PostCreateInput>;
  /** Update single Post document */
  update?: Maybe<PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert?: Maybe<PostUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Post document */
  connect?: Maybe<PostWhereUniqueInput>;
  /** Disconnect currently connected Post document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Post document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PostWhereUniqueInput;
  /** Document to update */
  data: PostUpdateInput;
};

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput;
  /** Update document if it exists */
  update: PostUpdateInput;
};

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PostWhereUniqueInput;
  /** Upsert data */
  data: PostUpsertInput;
};

/** Identifies documents */
export type PostWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photo?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  displayLocations?: Maybe<Array<WebsiteLocations>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  displayLocations_not?: Maybe<Array<WebsiteLocations>>;
  /** Matches if the field array contains *all* items provided to the filter */
  displayLocations_contains_all?: Maybe<Array<WebsiteLocations>>;
  /** Matches if the field array contains at least one item provided to the filter */
  displayLocations_contains_some?: Maybe<Array<WebsiteLocations>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  displayLocations_contains_none?: Maybe<Array<WebsiteLocations>>;
};

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Pricing = Node & {
  __typename?: 'Pricing';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Pricing>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  price: Scalars['Float'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Ex: $5 per day */
  period?: Maybe<TimePeriods>;
  /** List of Pricing versions */
  history: Array<Version>;
};


export type PricingDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PricingCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PricingUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PricingPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PricingHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PricingConnectInput = {
  /** Document to connect */
  where: PricingWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PricingConnection = {
  __typename?: 'PricingConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PricingEdge>;
  aggregate: Aggregate;
};

export type PricingCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price: Scalars['Float'];
  ckri22ju50nor01z1eg7e0ozn?: Maybe<ProductCreateManyInlineInput>;
  ckri2yveq0q1l01xsdys4ev3n?: Maybe<EventCreateManyInlineInput>;
  period?: Maybe<TimePeriods>;
};

export type PricingCreateManyInlineInput = {
  /** Create and connect multiple existing Pricing documents */
  create?: Maybe<Array<PricingCreateInput>>;
  /** Connect multiple existing Pricing documents */
  connect?: Maybe<Array<PricingWhereUniqueInput>>;
};

export type PricingCreateOneInlineInput = {
  /** Create and connect one Pricing document */
  create?: Maybe<PricingCreateInput>;
  /** Connect one existing Pricing document */
  connect?: Maybe<PricingWhereUniqueInput>;
};

/** An edge in a connection. */
export type PricingEdge = {
  __typename?: 'PricingEdge';
  /** The item at the end of the edge. */
  node: Pricing;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PricingManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PricingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PricingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PricingWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  period?: Maybe<TimePeriods>;
  /** All values that are not equal to given value. */
  period_not?: Maybe<TimePeriods>;
  /** All values that are contained in given list. */
  period_in?: Maybe<Array<TimePeriods>>;
  /** All values that are not contained in given list. */
  period_not_in?: Maybe<Array<TimePeriods>>;
};

export enum PricingOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PeriodAsc = 'period_ASC',
  PeriodDesc = 'period_DESC'
}

export type PricingUpdateInput = {
  price?: Maybe<Scalars['Float']>;
  ckri22ju50nor01z1eg7e0ozn?: Maybe<ProductUpdateManyInlineInput>;
  ckri2yveq0q1l01xsdys4ev3n?: Maybe<EventUpdateManyInlineInput>;
  period?: Maybe<TimePeriods>;
};

export type PricingUpdateManyInlineInput = {
  /** Create and connect multiple Pricing documents */
  create?: Maybe<Array<PricingCreateInput>>;
  /** Connect multiple existing Pricing documents */
  connect?: Maybe<Array<PricingConnectInput>>;
  /** Override currently-connected documents with multiple existing Pricing documents */
  set?: Maybe<Array<PricingWhereUniqueInput>>;
  /** Update multiple Pricing documents */
  update?: Maybe<Array<PricingUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Pricing documents */
  upsert?: Maybe<Array<PricingUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Pricing documents */
  disconnect?: Maybe<Array<PricingWhereUniqueInput>>;
  /** Delete multiple Pricing documents */
  delete?: Maybe<Array<PricingWhereUniqueInput>>;
};

export type PricingUpdateManyInput = {
  price?: Maybe<Scalars['Float']>;
  period?: Maybe<TimePeriods>;
};

export type PricingUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PricingWhereInput;
  /** Update many input */
  data: PricingUpdateManyInput;
};

export type PricingUpdateOneInlineInput = {
  /** Create and connect one Pricing document */
  create?: Maybe<PricingCreateInput>;
  /** Update single Pricing document */
  update?: Maybe<PricingUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Pricing document */
  upsert?: Maybe<PricingUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Pricing document */
  connect?: Maybe<PricingWhereUniqueInput>;
  /** Disconnect currently connected Pricing document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Pricing document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PricingUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PricingWhereUniqueInput;
  /** Document to update */
  data: PricingUpdateInput;
};

export type PricingUpsertInput = {
  /** Create document if it didn't exist */
  create: PricingCreateInput;
  /** Update document if it exists */
  update: PricingUpdateInput;
};

export type PricingUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PricingWhereUniqueInput;
  /** Upsert data */
  data: PricingUpsertInput;
};

/** Identifies documents */
export type PricingWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PricingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PricingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PricingWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  period?: Maybe<TimePeriods>;
  /** All values that are not equal to given value. */
  period_not?: Maybe<TimePeriods>;
  /** All values that are contained in given list. */
  period_in?: Maybe<Array<TimePeriods>>;
  /** All values that are not contained in given list. */
  period_not_in?: Maybe<Array<TimePeriods>>;
};

/** References Pricing record uniquely */
export type PricingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Product = Node & {
  __typename?: 'Product';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description: Scalars['String'];
  content: ProductContentRichText;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  photo: Asset;
  pricings: Array<Pricing>;
  /** List of Product versions */
  history: Array<Version>;
};


export type ProductDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ProductCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductPhotoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProductPricingsArgs = {
  where?: Maybe<PricingWhereInput>;
  orderBy?: Maybe<PricingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ProductHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ProductConnectInput = {
  /** Document to connect */
  where: ProductWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  aggregate: Aggregate;
};

export type ProductContentRichText = {
  __typename?: 'ProductContentRichText';
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  json: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
  references: Array<ProductContentRichTextEmbeddedTypes>;
};

export type ProductContentRichTextEmbeddedTypes = Asset;

export type ProductCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description: Scalars['String'];
  content: Scalars['RichTextAST'];
  photo: AssetCreateOneInlineInput;
  pricings?: Maybe<PricingCreateManyInlineInput>;
};

export type ProductCreateManyInlineInput = {
  /** Create and connect multiple existing Product documents */
  create?: Maybe<Array<ProductCreateInput>>;
  /** Connect multiple existing Product documents */
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Create and connect one Product document */
  create?: Maybe<ProductCreateInput>;
  /** Connect one existing Product document */
  connect?: Maybe<ProductWhereUniqueInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** The item at the end of the edge. */
  node: Product;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photo?: Maybe<AssetWhereInput>;
  pricings_every?: Maybe<PricingWhereInput>;
  pricings_some?: Maybe<PricingWhereInput>;
  pricings_none?: Maybe<PricingWhereInput>;
};

export enum ProductOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

export type ProductUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  photo?: Maybe<AssetUpdateOneInlineInput>;
  pricings?: Maybe<PricingUpdateManyInlineInput>;
};

export type ProductUpdateManyInlineInput = {
  /** Create and connect multiple Product documents */
  create?: Maybe<Array<ProductCreateInput>>;
  /** Connect multiple existing Product documents */
  connect?: Maybe<Array<ProductConnectInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: Maybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: Maybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  /** Delete multiple Product documents */
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProductWhereInput;
  /** Update many input */
  data: ProductUpdateManyInput;
};

export type ProductUpdateOneInlineInput = {
  /** Create and connect one Product document */
  create?: Maybe<ProductCreateInput>;
  /** Update single Product document */
  update?: Maybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: Maybe<ProductUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Product document */
  connect?: Maybe<ProductWhereUniqueInput>;
  /** Disconnect currently connected Product document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Product document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductWhereUniqueInput;
  /** Document to update */
  data: ProductUpdateInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProductWhereUniqueInput;
  /** Upsert data */
  data: ProductUpsertInput;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProductWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  photo?: Maybe<AssetWhereInput>;
  pricings_every?: Maybe<PricingWhereInput>;
  pricings_some?: Maybe<PricingWhereInput>;
  pricings_none?: Maybe<PricingWhereInput>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple people */
  people: Array<Person>;
  /** Retrieve a single person */
  person?: Maybe<Person>;
  /** Retrieve multiple people using the Relay connection interface */
  peopleConnection: PersonConnection;
  /** Retrieve document version */
  personVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple groups */
  groups: Array<Group>;
  /** Retrieve a single group */
  group?: Maybe<Group>;
  /** Retrieve multiple groups using the Relay connection interface */
  groupsConnection: GroupConnection;
  /** Retrieve document version */
  groupVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple places */
  places: Array<Place>;
  /** Retrieve a single place */
  place?: Maybe<Place>;
  /** Retrieve multiple places using the Relay connection interface */
  placesConnection: PlaceConnection;
  /** Retrieve document version */
  placeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pricings */
  pricings: Array<Pricing>;
  /** Retrieve a single pricing */
  pricing?: Maybe<Pricing>;
  /** Retrieve multiple pricings using the Relay connection interface */
  pricingsConnection: PricingConnection;
  /** Retrieve document version */
  pricingVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple events */
  events: Array<Event>;
  /** Retrieve a single event */
  event?: Maybe<Event>;
  /** Retrieve multiple events using the Relay connection interface */
  eventsConnection: EventConnection;
  /** Retrieve document version */
  eventVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<Post>;
  /** Retrieve a single post */
  post?: Maybe<Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection;
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPeopleArgs = {
  where?: Maybe<PersonWhereInput>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPersonArgs = {
  where: PersonWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPeopleConnectionArgs = {
  where?: Maybe<PersonWhereInput>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPersonVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGroupsArgs = {
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryGroupArgs = {
  where: GroupWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryGroupsConnectionArgs = {
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryGroupVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPlacesArgs = {
  where?: Maybe<PlaceWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPlaceArgs = {
  where: PlaceWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPlacesConnectionArgs = {
  where?: Maybe<PlaceWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPlaceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPricingsArgs = {
  where?: Maybe<PricingWhereInput>;
  orderBy?: Maybe<PricingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPricingArgs = {
  where: PricingWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPricingsConnectionArgs = {
  where?: Maybe<PricingWhereInput>;
  orderBy?: Maybe<PricingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPricingVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductsConnectionArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEventsArgs = {
  where?: Maybe<EventWhereInput>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryEventsConnectionArgs = {
  where?: Maybe<EventWhereInput>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryEventVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPostsConnectionArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPostVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export enum TimePeriods {
  Hour = 'hour',
  Day = 'day',
  Week = 'week'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum WebsiteLocations {
  Home = 'home',
  Gear = 'gear',
  Events = 'events',
  Posts = 'posts',
  Banner = 'banner'
}

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type EventFragment = (
  { __typename?: 'Event' }
  & Pick<Event, 'id' | 'name' | 'description' | 'activities' | 'startTime' | 'endTime'>
  & { photo?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'url'>
  )>, pricing?: Maybe<(
    { __typename?: 'Pricing' }
    & PricingFragment
  )>, place?: Maybe<(
    { __typename?: 'Place' }
    & Pick<Place, 'name' | 'description'>
    & { photos: Array<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'url'>
    )> }
  )> }
);

export type EventsListQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy: EventOrderByInput;
  startTimeAfter: Scalars['DateTime'];
}>;


export type EventsListQuery = (
  { __typename?: 'Query' }
  & { eventsConnection: (
    { __typename?: 'EventConnection' }
    & { edges: Array<(
      { __typename?: 'EventEdge' }
      & Pick<EventEdge, 'cursor'>
      & { node: (
        { __typename?: 'Event' }
        & EventFragment
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ) }
  ) }
);

export type PostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'description' | 'createdAt'>
  & { photo: (
    { __typename?: 'Asset' }
    & Pick<Asset, 'url'>
  ) }
);

export type PostsListQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy: PostOrderByInput;
}>;


export type PostsListQuery = (
  { __typename?: 'Query' }
  & { postsConnection: (
    { __typename?: 'PostConnection' }
    & { edges: Array<(
      { __typename?: 'PostEdge' }
      & Pick<PostEdge, 'cursor'>
      & { node: (
        { __typename?: 'Post' }
        & PostFragment
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ) }
  ) }
);

export type PricingFragment = (
  { __typename?: 'Pricing' }
  & Pick<Pricing, 'id' | 'price' | 'period'>
);

export type ProductListQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy: ProductOrderByInput;
}>;


export type ProductListQuery = (
  { __typename?: 'Query' }
  & { productsConnection: (
    { __typename?: 'ProductConnection' }
    & { edges: Array<(
      { __typename?: 'ProductEdge' }
      & Pick<ProductEdge, 'cursor'>
      & { node: (
        { __typename?: 'Product' }
        & ProductFragment
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ) }
  ) }
);

export type ProductFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'name' | 'description'>
  & { pricings: Array<(
    { __typename?: 'Pricing' }
    & PricingFragment
  )>, photo: (
    { __typename?: 'Asset' }
    & Pick<Asset, 'url'>
  ) }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ActivityTypes: ActivityTypes;
  Aggregate: ResolverTypeWrapper<Aggregate>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Asset: ResolverTypeWrapper<Asset>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  AssetConnectInput: AssetConnectInput;
  AssetConnection: ResolverTypeWrapper<AssetConnection>;
  AssetCreateInput: AssetCreateInput;
  AssetCreateLocalizationDataInput: AssetCreateLocalizationDataInput;
  AssetCreateLocalizationInput: AssetCreateLocalizationInput;
  AssetCreateLocalizationsInput: AssetCreateLocalizationsInput;
  AssetCreateManyInlineInput: AssetCreateManyInlineInput;
  AssetCreateOneInlineInput: AssetCreateOneInlineInput;
  AssetEdge: ResolverTypeWrapper<AssetEdge>;
  AssetManyWhereInput: AssetManyWhereInput;
  AssetOrderByInput: AssetOrderByInput;
  AssetTransformationInput: AssetTransformationInput;
  AssetUpdateInput: AssetUpdateInput;
  AssetUpdateLocalizationDataInput: AssetUpdateLocalizationDataInput;
  AssetUpdateLocalizationInput: AssetUpdateLocalizationInput;
  AssetUpdateLocalizationsInput: AssetUpdateLocalizationsInput;
  AssetUpdateManyInlineInput: AssetUpdateManyInlineInput;
  AssetUpdateManyInput: AssetUpdateManyInput;
  AssetUpdateManyLocalizationDataInput: AssetUpdateManyLocalizationDataInput;
  AssetUpdateManyLocalizationInput: AssetUpdateManyLocalizationInput;
  AssetUpdateManyLocalizationsInput: AssetUpdateManyLocalizationsInput;
  AssetUpdateManyWithNestedWhereInput: AssetUpdateManyWithNestedWhereInput;
  AssetUpdateOneInlineInput: AssetUpdateOneInlineInput;
  AssetUpdateWithNestedWhereUniqueInput: AssetUpdateWithNestedWhereUniqueInput;
  AssetUpsertInput: AssetUpsertInput;
  AssetUpsertLocalizationInput: AssetUpsertLocalizationInput;
  AssetUpsertWithNestedWhereUniqueInput: AssetUpsertWithNestedWhereUniqueInput;
  AssetWhereInput: AssetWhereInput;
  AssetWhereUniqueInput: AssetWhereUniqueInput;
  BatchPayload: ResolverTypeWrapper<BatchPayload>;
  Color: ResolverTypeWrapper<Color>;
  ColorInput: ColorInput;
  ConnectPositionInput: ConnectPositionInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DocumentFileTypes: DocumentFileTypes;
  DocumentOutputInput: DocumentOutputInput;
  DocumentTransformationInput: DocumentTransformationInput;
  DocumentVersion: ResolverTypeWrapper<DocumentVersion>;
  Event: ResolverTypeWrapper<Event>;
  EventConnectInput: EventConnectInput;
  EventConnection: ResolverTypeWrapper<EventConnection>;
  EventContentRichText: ResolverTypeWrapper<Omit<EventContentRichText, 'references'> & { references: Array<ResolversTypes['EventContentRichTextEmbeddedTypes']> }>;
  EventContentRichTextEmbeddedTypes: ResolversTypes['Asset'];
  EventCreateInput: EventCreateInput;
  EventCreateManyInlineInput: EventCreateManyInlineInput;
  EventCreateOneInlineInput: EventCreateOneInlineInput;
  EventEdge: ResolverTypeWrapper<EventEdge>;
  EventManyWhereInput: EventManyWhereInput;
  EventOrderByInput: EventOrderByInput;
  EventTypes: EventTypes;
  EventUpdateInput: EventUpdateInput;
  EventUpdateManyInlineInput: EventUpdateManyInlineInput;
  EventUpdateManyInput: EventUpdateManyInput;
  EventUpdateManyWithNestedWhereInput: EventUpdateManyWithNestedWhereInput;
  EventUpdateOneInlineInput: EventUpdateOneInlineInput;
  EventUpdateWithNestedWhereUniqueInput: EventUpdateWithNestedWhereUniqueInput;
  EventUpsertInput: EventUpsertInput;
  EventUpsertWithNestedWhereUniqueInput: EventUpsertWithNestedWhereUniqueInput;
  EventWhereInput: EventWhereInput;
  EventWhereUniqueInput: EventWhereUniqueInput;
  Group: ResolverTypeWrapper<Group>;
  GroupConnectInput: GroupConnectInput;
  GroupConnection: ResolverTypeWrapper<GroupConnection>;
  GroupContentRichText: ResolverTypeWrapper<Omit<GroupContentRichText, 'references'> & { references: Array<ResolversTypes['GroupContentRichTextEmbeddedTypes']> }>;
  GroupContentRichTextEmbeddedTypes: ResolversTypes['Asset'];
  GroupCreateInput: GroupCreateInput;
  GroupCreateManyInlineInput: GroupCreateManyInlineInput;
  GroupCreateOneInlineInput: GroupCreateOneInlineInput;
  GroupEdge: ResolverTypeWrapper<GroupEdge>;
  GroupManyWhereInput: GroupManyWhereInput;
  GroupOrderByInput: GroupOrderByInput;
  GroupUpdateInput: GroupUpdateInput;
  GroupUpdateManyInlineInput: GroupUpdateManyInlineInput;
  GroupUpdateManyInput: GroupUpdateManyInput;
  GroupUpdateManyWithNestedWhereInput: GroupUpdateManyWithNestedWhereInput;
  GroupUpdateOneInlineInput: GroupUpdateOneInlineInput;
  GroupUpdateWithNestedWhereUniqueInput: GroupUpdateWithNestedWhereUniqueInput;
  GroupUpsertInput: GroupUpsertInput;
  GroupUpsertWithNestedWhereUniqueInput: GroupUpsertWithNestedWhereUniqueInput;
  GroupWhereInput: GroupWhereInput;
  GroupWhereUniqueInput: GroupWhereUniqueInput;
  Hex: ResolverTypeWrapper<Scalars['Hex']>;
  ImageFit: ImageFit;
  ImageResizeInput: ImageResizeInput;
  ImageTransformationInput: ImageTransformationInput;
  Json: ResolverTypeWrapper<Scalars['Json']>;
  Locale: Locale;
  Location: ResolverTypeWrapper<Location>;
  LocationInput: LocationInput;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Asset'] | ResolversTypes['Event'] | ResolversTypes['Group'] | ResolversTypes['Person'] | ResolversTypes['Place'] | ResolversTypes['Post'] | ResolversTypes['Pricing'] | ResolversTypes['Product'] | ResolversTypes['User'];
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Person: ResolverTypeWrapper<Person>;
  PersonConnectInput: PersonConnectInput;
  PersonConnection: ResolverTypeWrapper<PersonConnection>;
  PersonContentRichText: ResolverTypeWrapper<Omit<PersonContentRichText, 'references'> & { references: Array<ResolversTypes['PersonContentRichTextEmbeddedTypes']> }>;
  PersonContentRichTextEmbeddedTypes: ResolversTypes['Asset'];
  PersonCreateInput: PersonCreateInput;
  PersonCreateManyInlineInput: PersonCreateManyInlineInput;
  PersonCreateOneInlineInput: PersonCreateOneInlineInput;
  PersonEdge: ResolverTypeWrapper<PersonEdge>;
  PersonManyWhereInput: PersonManyWhereInput;
  PersonOrderByInput: PersonOrderByInput;
  PersonUpdateInput: PersonUpdateInput;
  PersonUpdateManyInlineInput: PersonUpdateManyInlineInput;
  PersonUpdateManyInput: PersonUpdateManyInput;
  PersonUpdateManyWithNestedWhereInput: PersonUpdateManyWithNestedWhereInput;
  PersonUpdateOneInlineInput: PersonUpdateOneInlineInput;
  PersonUpdateWithNestedWhereUniqueInput: PersonUpdateWithNestedWhereUniqueInput;
  PersonUpsertInput: PersonUpsertInput;
  PersonUpsertWithNestedWhereUniqueInput: PersonUpsertWithNestedWhereUniqueInput;
  PersonWhereInput: PersonWhereInput;
  PersonWhereUniqueInput: PersonWhereUniqueInput;
  Place: ResolverTypeWrapper<Place>;
  PlaceConnectInput: PlaceConnectInput;
  PlaceConnection: ResolverTypeWrapper<PlaceConnection>;
  PlaceContentRichText: ResolverTypeWrapper<Omit<PlaceContentRichText, 'references'> & { references: Array<ResolversTypes['PlaceContentRichTextEmbeddedTypes']> }>;
  PlaceContentRichTextEmbeddedTypes: ResolversTypes['Asset'];
  PlaceCreateInput: PlaceCreateInput;
  PlaceCreateManyInlineInput: PlaceCreateManyInlineInput;
  PlaceCreateOneInlineInput: PlaceCreateOneInlineInput;
  PlaceEdge: ResolverTypeWrapper<PlaceEdge>;
  PlaceManyWhereInput: PlaceManyWhereInput;
  PlaceOrderByInput: PlaceOrderByInput;
  PlaceUpdateInput: PlaceUpdateInput;
  PlaceUpdateManyInlineInput: PlaceUpdateManyInlineInput;
  PlaceUpdateManyInput: PlaceUpdateManyInput;
  PlaceUpdateManyWithNestedWhereInput: PlaceUpdateManyWithNestedWhereInput;
  PlaceUpdateOneInlineInput: PlaceUpdateOneInlineInput;
  PlaceUpdateWithNestedWhereUniqueInput: PlaceUpdateWithNestedWhereUniqueInput;
  PlaceUpsertInput: PlaceUpsertInput;
  PlaceUpsertWithNestedWhereUniqueInput: PlaceUpsertWithNestedWhereUniqueInput;
  PlaceWhereInput: PlaceWhereInput;
  PlaceWhereUniqueInput: PlaceWhereUniqueInput;
  Post: ResolverTypeWrapper<Post>;
  PostConnectInput: PostConnectInput;
  PostConnection: ResolverTypeWrapper<PostConnection>;
  PostContentRichText: ResolverTypeWrapper<Omit<PostContentRichText, 'references'> & { references: Array<ResolversTypes['PostContentRichTextEmbeddedTypes']> }>;
  PostContentRichTextEmbeddedTypes: ResolversTypes['Asset'];
  PostCreateInput: PostCreateInput;
  PostCreateManyInlineInput: PostCreateManyInlineInput;
  PostCreateOneInlineInput: PostCreateOneInlineInput;
  PostEdge: ResolverTypeWrapper<PostEdge>;
  PostManyWhereInput: PostManyWhereInput;
  PostOrderByInput: PostOrderByInput;
  PostUpdateInput: PostUpdateInput;
  PostUpdateManyInlineInput: PostUpdateManyInlineInput;
  PostUpdateManyInput: PostUpdateManyInput;
  PostUpdateManyWithNestedWhereInput: PostUpdateManyWithNestedWhereInput;
  PostUpdateOneInlineInput: PostUpdateOneInlineInput;
  PostUpdateWithNestedWhereUniqueInput: PostUpdateWithNestedWhereUniqueInput;
  PostUpsertInput: PostUpsertInput;
  PostUpsertWithNestedWhereUniqueInput: PostUpsertWithNestedWhereUniqueInput;
  PostWhereInput: PostWhereInput;
  PostWhereUniqueInput: PostWhereUniqueInput;
  Pricing: ResolverTypeWrapper<Pricing>;
  PricingConnectInput: PricingConnectInput;
  PricingConnection: ResolverTypeWrapper<PricingConnection>;
  PricingCreateInput: PricingCreateInput;
  PricingCreateManyInlineInput: PricingCreateManyInlineInput;
  PricingCreateOneInlineInput: PricingCreateOneInlineInput;
  PricingEdge: ResolverTypeWrapper<PricingEdge>;
  PricingManyWhereInput: PricingManyWhereInput;
  PricingOrderByInput: PricingOrderByInput;
  PricingUpdateInput: PricingUpdateInput;
  PricingUpdateManyInlineInput: PricingUpdateManyInlineInput;
  PricingUpdateManyInput: PricingUpdateManyInput;
  PricingUpdateManyWithNestedWhereInput: PricingUpdateManyWithNestedWhereInput;
  PricingUpdateOneInlineInput: PricingUpdateOneInlineInput;
  PricingUpdateWithNestedWhereUniqueInput: PricingUpdateWithNestedWhereUniqueInput;
  PricingUpsertInput: PricingUpsertInput;
  PricingUpsertWithNestedWhereUniqueInput: PricingUpsertWithNestedWhereUniqueInput;
  PricingWhereInput: PricingWhereInput;
  PricingWhereUniqueInput: PricingWhereUniqueInput;
  Product: ResolverTypeWrapper<Product>;
  ProductConnectInput: ProductConnectInput;
  ProductConnection: ResolverTypeWrapper<ProductConnection>;
  ProductContentRichText: ResolverTypeWrapper<Omit<ProductContentRichText, 'references'> & { references: Array<ResolversTypes['ProductContentRichTextEmbeddedTypes']> }>;
  ProductContentRichTextEmbeddedTypes: ResolversTypes['Asset'];
  ProductCreateInput: ProductCreateInput;
  ProductCreateManyInlineInput: ProductCreateManyInlineInput;
  ProductCreateOneInlineInput: ProductCreateOneInlineInput;
  ProductEdge: ResolverTypeWrapper<ProductEdge>;
  ProductManyWhereInput: ProductManyWhereInput;
  ProductOrderByInput: ProductOrderByInput;
  ProductUpdateInput: ProductUpdateInput;
  ProductUpdateManyInlineInput: ProductUpdateManyInlineInput;
  ProductUpdateManyInput: ProductUpdateManyInput;
  ProductUpdateManyWithNestedWhereInput: ProductUpdateManyWithNestedWhereInput;
  ProductUpdateOneInlineInput: ProductUpdateOneInlineInput;
  ProductUpdateWithNestedWhereUniqueInput: ProductUpdateWithNestedWhereUniqueInput;
  ProductUpsertInput: ProductUpsertInput;
  ProductUpsertWithNestedWhereUniqueInput: ProductUpsertWithNestedWhereUniqueInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  PublishLocaleInput: PublishLocaleInput;
  Query: ResolverTypeWrapper<{}>;
  RGBA: ResolverTypeWrapper<Rgba>;
  RGBAHue: ResolverTypeWrapper<Scalars['RGBAHue']>;
  RGBAInput: RgbaInput;
  RGBATransparency: ResolverTypeWrapper<Scalars['RGBATransparency']>;
  RichText: ResolverTypeWrapper<RichText>;
  RichTextAST: ResolverTypeWrapper<Scalars['RichTextAST']>;
  Stage: Stage;
  SystemDateTimeFieldVariation: SystemDateTimeFieldVariation;
  TimePeriods: TimePeriods;
  UnpublishLocaleInput: UnpublishLocaleInput;
  User: ResolverTypeWrapper<User>;
  UserConnectInput: UserConnectInput;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserCreateManyInlineInput: UserCreateManyInlineInput;
  UserCreateOneInlineInput: UserCreateOneInlineInput;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserKind: UserKind;
  UserManyWhereInput: UserManyWhereInput;
  UserOrderByInput: UserOrderByInput;
  UserUpdateManyInlineInput: UserUpdateManyInlineInput;
  UserUpdateOneInlineInput: UserUpdateOneInlineInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  Version: ResolverTypeWrapper<Version>;
  VersionWhereInput: VersionWhereInput;
  WebsiteLocations: WebsiteLocations;
  _FilterKind: _FilterKind;
  _MutationInputFieldKind: _MutationInputFieldKind;
  _MutationKind: _MutationKind;
  _OrderDirection: _OrderDirection;
  _RelationInputCardinality: _RelationInputCardinality;
  _RelationInputKind: _RelationInputKind;
  _RelationKind: _RelationKind;
  _SystemDateTimeFieldVariation: _SystemDateTimeFieldVariation;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Aggregate: Aggregate;
  Int: Scalars['Int'];
  Asset: Asset;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  String: Scalars['String'];
  Float: Scalars['Float'];
  AssetConnectInput: AssetConnectInput;
  AssetConnection: AssetConnection;
  AssetCreateInput: AssetCreateInput;
  AssetCreateLocalizationDataInput: AssetCreateLocalizationDataInput;
  AssetCreateLocalizationInput: AssetCreateLocalizationInput;
  AssetCreateLocalizationsInput: AssetCreateLocalizationsInput;
  AssetCreateManyInlineInput: AssetCreateManyInlineInput;
  AssetCreateOneInlineInput: AssetCreateOneInlineInput;
  AssetEdge: AssetEdge;
  AssetManyWhereInput: AssetManyWhereInput;
  AssetTransformationInput: AssetTransformationInput;
  AssetUpdateInput: AssetUpdateInput;
  AssetUpdateLocalizationDataInput: AssetUpdateLocalizationDataInput;
  AssetUpdateLocalizationInput: AssetUpdateLocalizationInput;
  AssetUpdateLocalizationsInput: AssetUpdateLocalizationsInput;
  AssetUpdateManyInlineInput: AssetUpdateManyInlineInput;
  AssetUpdateManyInput: AssetUpdateManyInput;
  AssetUpdateManyLocalizationDataInput: AssetUpdateManyLocalizationDataInput;
  AssetUpdateManyLocalizationInput: AssetUpdateManyLocalizationInput;
  AssetUpdateManyLocalizationsInput: AssetUpdateManyLocalizationsInput;
  AssetUpdateManyWithNestedWhereInput: AssetUpdateManyWithNestedWhereInput;
  AssetUpdateOneInlineInput: AssetUpdateOneInlineInput;
  AssetUpdateWithNestedWhereUniqueInput: AssetUpdateWithNestedWhereUniqueInput;
  AssetUpsertInput: AssetUpsertInput;
  AssetUpsertLocalizationInput: AssetUpsertLocalizationInput;
  AssetUpsertWithNestedWhereUniqueInput: AssetUpsertWithNestedWhereUniqueInput;
  AssetWhereInput: AssetWhereInput;
  AssetWhereUniqueInput: AssetWhereUniqueInput;
  BatchPayload: BatchPayload;
  Color: Color;
  ColorInput: ColorInput;
  ConnectPositionInput: ConnectPositionInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  DocumentOutputInput: DocumentOutputInput;
  DocumentTransformationInput: DocumentTransformationInput;
  DocumentVersion: DocumentVersion;
  Event: Event;
  EventConnectInput: EventConnectInput;
  EventConnection: EventConnection;
  EventContentRichText: Omit<EventContentRichText, 'references'> & { references: Array<ResolversParentTypes['EventContentRichTextEmbeddedTypes']> };
  EventContentRichTextEmbeddedTypes: ResolversParentTypes['Asset'];
  EventCreateInput: EventCreateInput;
  EventCreateManyInlineInput: EventCreateManyInlineInput;
  EventCreateOneInlineInput: EventCreateOneInlineInput;
  EventEdge: EventEdge;
  EventManyWhereInput: EventManyWhereInput;
  EventUpdateInput: EventUpdateInput;
  EventUpdateManyInlineInput: EventUpdateManyInlineInput;
  EventUpdateManyInput: EventUpdateManyInput;
  EventUpdateManyWithNestedWhereInput: EventUpdateManyWithNestedWhereInput;
  EventUpdateOneInlineInput: EventUpdateOneInlineInput;
  EventUpdateWithNestedWhereUniqueInput: EventUpdateWithNestedWhereUniqueInput;
  EventUpsertInput: EventUpsertInput;
  EventUpsertWithNestedWhereUniqueInput: EventUpsertWithNestedWhereUniqueInput;
  EventWhereInput: EventWhereInput;
  EventWhereUniqueInput: EventWhereUniqueInput;
  Group: Group;
  GroupConnectInput: GroupConnectInput;
  GroupConnection: GroupConnection;
  GroupContentRichText: Omit<GroupContentRichText, 'references'> & { references: Array<ResolversParentTypes['GroupContentRichTextEmbeddedTypes']> };
  GroupContentRichTextEmbeddedTypes: ResolversParentTypes['Asset'];
  GroupCreateInput: GroupCreateInput;
  GroupCreateManyInlineInput: GroupCreateManyInlineInput;
  GroupCreateOneInlineInput: GroupCreateOneInlineInput;
  GroupEdge: GroupEdge;
  GroupManyWhereInput: GroupManyWhereInput;
  GroupUpdateInput: GroupUpdateInput;
  GroupUpdateManyInlineInput: GroupUpdateManyInlineInput;
  GroupUpdateManyInput: GroupUpdateManyInput;
  GroupUpdateManyWithNestedWhereInput: GroupUpdateManyWithNestedWhereInput;
  GroupUpdateOneInlineInput: GroupUpdateOneInlineInput;
  GroupUpdateWithNestedWhereUniqueInput: GroupUpdateWithNestedWhereUniqueInput;
  GroupUpsertInput: GroupUpsertInput;
  GroupUpsertWithNestedWhereUniqueInput: GroupUpsertWithNestedWhereUniqueInput;
  GroupWhereInput: GroupWhereInput;
  GroupWhereUniqueInput: GroupWhereUniqueInput;
  Hex: Scalars['Hex'];
  ImageResizeInput: ImageResizeInput;
  ImageTransformationInput: ImageTransformationInput;
  Json: Scalars['Json'];
  Location: Location;
  LocationInput: LocationInput;
  Long: Scalars['Long'];
  Mutation: {};
  Node: ResolversParentTypes['Asset'] | ResolversParentTypes['Event'] | ResolversParentTypes['Group'] | ResolversParentTypes['Person'] | ResolversParentTypes['Place'] | ResolversParentTypes['Post'] | ResolversParentTypes['Pricing'] | ResolversParentTypes['Product'] | ResolversParentTypes['User'];
  PageInfo: PageInfo;
  Person: Person;
  PersonConnectInput: PersonConnectInput;
  PersonConnection: PersonConnection;
  PersonContentRichText: Omit<PersonContentRichText, 'references'> & { references: Array<ResolversParentTypes['PersonContentRichTextEmbeddedTypes']> };
  PersonContentRichTextEmbeddedTypes: ResolversParentTypes['Asset'];
  PersonCreateInput: PersonCreateInput;
  PersonCreateManyInlineInput: PersonCreateManyInlineInput;
  PersonCreateOneInlineInput: PersonCreateOneInlineInput;
  PersonEdge: PersonEdge;
  PersonManyWhereInput: PersonManyWhereInput;
  PersonUpdateInput: PersonUpdateInput;
  PersonUpdateManyInlineInput: PersonUpdateManyInlineInput;
  PersonUpdateManyInput: PersonUpdateManyInput;
  PersonUpdateManyWithNestedWhereInput: PersonUpdateManyWithNestedWhereInput;
  PersonUpdateOneInlineInput: PersonUpdateOneInlineInput;
  PersonUpdateWithNestedWhereUniqueInput: PersonUpdateWithNestedWhereUniqueInput;
  PersonUpsertInput: PersonUpsertInput;
  PersonUpsertWithNestedWhereUniqueInput: PersonUpsertWithNestedWhereUniqueInput;
  PersonWhereInput: PersonWhereInput;
  PersonWhereUniqueInput: PersonWhereUniqueInput;
  Place: Place;
  PlaceConnectInput: PlaceConnectInput;
  PlaceConnection: PlaceConnection;
  PlaceContentRichText: Omit<PlaceContentRichText, 'references'> & { references: Array<ResolversParentTypes['PlaceContentRichTextEmbeddedTypes']> };
  PlaceContentRichTextEmbeddedTypes: ResolversParentTypes['Asset'];
  PlaceCreateInput: PlaceCreateInput;
  PlaceCreateManyInlineInput: PlaceCreateManyInlineInput;
  PlaceCreateOneInlineInput: PlaceCreateOneInlineInput;
  PlaceEdge: PlaceEdge;
  PlaceManyWhereInput: PlaceManyWhereInput;
  PlaceUpdateInput: PlaceUpdateInput;
  PlaceUpdateManyInlineInput: PlaceUpdateManyInlineInput;
  PlaceUpdateManyInput: PlaceUpdateManyInput;
  PlaceUpdateManyWithNestedWhereInput: PlaceUpdateManyWithNestedWhereInput;
  PlaceUpdateOneInlineInput: PlaceUpdateOneInlineInput;
  PlaceUpdateWithNestedWhereUniqueInput: PlaceUpdateWithNestedWhereUniqueInput;
  PlaceUpsertInput: PlaceUpsertInput;
  PlaceUpsertWithNestedWhereUniqueInput: PlaceUpsertWithNestedWhereUniqueInput;
  PlaceWhereInput: PlaceWhereInput;
  PlaceWhereUniqueInput: PlaceWhereUniqueInput;
  Post: Post;
  PostConnectInput: PostConnectInput;
  PostConnection: PostConnection;
  PostContentRichText: Omit<PostContentRichText, 'references'> & { references: Array<ResolversParentTypes['PostContentRichTextEmbeddedTypes']> };
  PostContentRichTextEmbeddedTypes: ResolversParentTypes['Asset'];
  PostCreateInput: PostCreateInput;
  PostCreateManyInlineInput: PostCreateManyInlineInput;
  PostCreateOneInlineInput: PostCreateOneInlineInput;
  PostEdge: PostEdge;
  PostManyWhereInput: PostManyWhereInput;
  PostUpdateInput: PostUpdateInput;
  PostUpdateManyInlineInput: PostUpdateManyInlineInput;
  PostUpdateManyInput: PostUpdateManyInput;
  PostUpdateManyWithNestedWhereInput: PostUpdateManyWithNestedWhereInput;
  PostUpdateOneInlineInput: PostUpdateOneInlineInput;
  PostUpdateWithNestedWhereUniqueInput: PostUpdateWithNestedWhereUniqueInput;
  PostUpsertInput: PostUpsertInput;
  PostUpsertWithNestedWhereUniqueInput: PostUpsertWithNestedWhereUniqueInput;
  PostWhereInput: PostWhereInput;
  PostWhereUniqueInput: PostWhereUniqueInput;
  Pricing: Pricing;
  PricingConnectInput: PricingConnectInput;
  PricingConnection: PricingConnection;
  PricingCreateInput: PricingCreateInput;
  PricingCreateManyInlineInput: PricingCreateManyInlineInput;
  PricingCreateOneInlineInput: PricingCreateOneInlineInput;
  PricingEdge: PricingEdge;
  PricingManyWhereInput: PricingManyWhereInput;
  PricingUpdateInput: PricingUpdateInput;
  PricingUpdateManyInlineInput: PricingUpdateManyInlineInput;
  PricingUpdateManyInput: PricingUpdateManyInput;
  PricingUpdateManyWithNestedWhereInput: PricingUpdateManyWithNestedWhereInput;
  PricingUpdateOneInlineInput: PricingUpdateOneInlineInput;
  PricingUpdateWithNestedWhereUniqueInput: PricingUpdateWithNestedWhereUniqueInput;
  PricingUpsertInput: PricingUpsertInput;
  PricingUpsertWithNestedWhereUniqueInput: PricingUpsertWithNestedWhereUniqueInput;
  PricingWhereInput: PricingWhereInput;
  PricingWhereUniqueInput: PricingWhereUniqueInput;
  Product: Product;
  ProductConnectInput: ProductConnectInput;
  ProductConnection: ProductConnection;
  ProductContentRichText: Omit<ProductContentRichText, 'references'> & { references: Array<ResolversParentTypes['ProductContentRichTextEmbeddedTypes']> };
  ProductContentRichTextEmbeddedTypes: ResolversParentTypes['Asset'];
  ProductCreateInput: ProductCreateInput;
  ProductCreateManyInlineInput: ProductCreateManyInlineInput;
  ProductCreateOneInlineInput: ProductCreateOneInlineInput;
  ProductEdge: ProductEdge;
  ProductManyWhereInput: ProductManyWhereInput;
  ProductUpdateInput: ProductUpdateInput;
  ProductUpdateManyInlineInput: ProductUpdateManyInlineInput;
  ProductUpdateManyInput: ProductUpdateManyInput;
  ProductUpdateManyWithNestedWhereInput: ProductUpdateManyWithNestedWhereInput;
  ProductUpdateOneInlineInput: ProductUpdateOneInlineInput;
  ProductUpdateWithNestedWhereUniqueInput: ProductUpdateWithNestedWhereUniqueInput;
  ProductUpsertInput: ProductUpsertInput;
  ProductUpsertWithNestedWhereUniqueInput: ProductUpsertWithNestedWhereUniqueInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  PublishLocaleInput: PublishLocaleInput;
  Query: {};
  RGBA: Rgba;
  RGBAHue: Scalars['RGBAHue'];
  RGBAInput: RgbaInput;
  RGBATransparency: Scalars['RGBATransparency'];
  RichText: RichText;
  RichTextAST: Scalars['RichTextAST'];
  UnpublishLocaleInput: UnpublishLocaleInput;
  User: User;
  UserConnectInput: UserConnectInput;
  UserConnection: UserConnection;
  UserCreateManyInlineInput: UserCreateManyInlineInput;
  UserCreateOneInlineInput: UserCreateOneInlineInput;
  UserEdge: UserEdge;
  UserManyWhereInput: UserManyWhereInput;
  UserUpdateManyInlineInput: UserUpdateManyInlineInput;
  UserUpdateOneInlineInput: UserUpdateOneInlineInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  Version: Version;
  VersionWhereInput: VersionWhereInput;
};

export type MarkDirectiveArgs = {   localized?: Maybe<Scalars['Boolean']>;
  default?: Maybe<Scalars['Boolean']>;
  fallback?: Maybe<Scalars['Boolean']>;
  fallbackLocales?: Maybe<Array<Scalars['String']>>;
  pageInfo?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
  countable?: Maybe<Scalars['Boolean']>;
  edge?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['Boolean']>;
  mutationKind?: Maybe<_MutationKind>;
  mutationInputFieldKind?: Maybe<_MutationInputFieldKind>;
  filter?: Maybe<Scalars['String']>;
  filterKind?: Maybe<_FilterKind>;
  filterIsList?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Boolean']>;
  orderDirection?: Maybe<_OrderDirection>;
  connection?: Maybe<Scalars['String']>;
  localizations?: Maybe<Scalars['Boolean']>;
  modelVersions?: Maybe<Scalars['Boolean']>;
  documentVersion?: Maybe<Scalars['Boolean']>;
  stages?: Maybe<Scalars['Boolean']>;
  createdAtField?: Maybe<Scalars['String']>;
  updatedAtField?: Maybe<Scalars['String']>;
  relationInputKind?: Maybe<_RelationInputKind>;
  relationKind?: Maybe<_RelationKind>;
  relationInputCardinality?: Maybe<_RelationInputCardinality>;
  reverseRelationInputCardinality?: Maybe<_RelationInputCardinality>;
  createInputType?: Maybe<Scalars['String']>;
  createLocalizationInputType?: Maybe<Scalars['String']>;
  fieldType?: Maybe<Scalars['String']>;
  whereUniqueInput?: Maybe<Scalars['String']>;
  isConnectInput?: Maybe<Scalars['Boolean']>;
  isMemberInput?: Maybe<Scalars['Boolean']>;
  unionType?: Maybe<Scalars['Boolean']>;
  model?: Maybe<Scalars['String']>;
  systemDateTimeFieldVariation?: Maybe<_SystemDateTimeFieldVariation>;
  versionRetentionCount?: Maybe<Scalars['Int']>;
  versionRetentionPeriod?: Maybe<Scalars['Int']>;
  validations?: Maybe<Scalars['String']>;
  storageId?: Maybe<Scalars['String']>;
  isRichTextType?: Maybe<Scalars['Boolean']>;
  isListRichText?: Maybe<Scalars['Boolean']>;
  richTextType?: Maybe<Scalars['String']>;
  isUnidirectional?: Maybe<Scalars['Boolean']>;
  replaceableWithUserId?: Maybe<Scalars['Boolean']>; };

export type MarkDirectiveResolver<Result, Parent, ContextType = any, Args = MarkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type PermissionDirectiveArgs = {   resources?: Maybe<Array<Scalars['String']>>;
  actions?: Maybe<Array<Scalars['String']>>; };

export type PermissionDirectiveResolver<Result, Parent, ContextType = any, Args = PermissionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type PsqlDirectiveArgs = {   table?: Maybe<Scalars['String']>;
  localizationTable?: Maybe<Scalars['String']>;
  column?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  join?: Maybe<Array<Scalars['String']>>;
  idColumn?: Maybe<Scalars['String']>;
  prio?: Maybe<Scalars['String']>;
  memberColumns?: Maybe<Array<Scalars['String']>>;
  updatedAtColumn?: Maybe<Scalars['String']>; };

export type PsqlDirectiveResolver<Result, Parent, ContextType = any, Args = PsqlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RemoteDirectiveArgs = {   url: Scalars['String'];
  method: Scalars['String'];
  headers?: Maybe<Scalars['Json']>;
  requestParamFields: Array<Scalars['String']>;
  payloadFields: Array<Scalars['String']>; };

export type RemoteDirectiveResolver<Result, Parent, ContextType = any, Args = RemoteDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Aggregate'] = ResolversParentTypes['Aggregate']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localizations?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<AssetLocalizationsArgs, 'locales' | 'includeCurrent'>>;
  documentInStages?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<AssetDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<AssetCreatedAtArgs, 'variation'>>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<AssetUpdatedAtArgs, 'variation'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AssetPublishedAtArgs, 'variation'>>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<AssetCreatedByArgs, never>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<AssetUpdatedByArgs, never>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<AssetPublishedByArgs, never>>;
  photoPerson?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<AssetPhotoPersonArgs, never>>;
  photosPlace?: Resolver<Array<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<AssetPhotosPlaceArgs, never>>;
  photoProduct?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<AssetPhotoProductArgs, never>>;
  photoPost?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<AssetPhotoPostArgs, never>>;
  photoEvent?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<AssetPhotoEventArgs, never>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<AssetHistoryArgs, 'limit' | 'skip'>>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<AssetUrlArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetConnection'] = ResolversParentTypes['AssetConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['AssetEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetEdge'] = ResolversParentTypes['AssetEdge']> = {
  node?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = {
  count?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Color'] = ResolversParentTypes['Color']> = {
  hex?: Resolver<ResolversTypes['Hex'], ParentType, ContextType>;
  rgba?: Resolver<ResolversTypes['RGBA'], ParentType, ContextType>;
  css?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DocumentVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentVersion'] = ResolversParentTypes['DocumentVersion']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['EventContentRichText'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<EventCreatedByArgs, never>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<EventUpdatedByArgs, never>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<EventPublishedByArgs, never>>;
  photo?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<EventPhotoArgs, never>>;
  people?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<EventPeopleArgs, never>>;
  place?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<EventPlaceArgs, never>>;
  meetingPlace?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<EventMeetingPlaceArgs, never>>;
  pricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<EventPricingArgs, never>>;
  type?: Resolver<ResolversTypes['EventTypes'], ParentType, ContextType>;
  activities?: Resolver<Array<ResolversTypes['ActivityTypes']>, ParentType, ContextType>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<EventHistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventConnection'] = ResolversParentTypes['EventConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['EventEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventContentRichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventContentRichText'] = ResolversParentTypes['EventContentRichText']> = {
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  json?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  references?: Resolver<Array<ResolversTypes['EventContentRichTextEmbeddedTypes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventContentRichTextEmbeddedTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventContentRichTextEmbeddedTypes'] = ResolversParentTypes['EventContentRichTextEmbeddedTypes']> = {
  __resolveType: TypeResolveFn<'Asset', ParentType, ContextType>;
};

export type EventEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventEdge'] = ResolversParentTypes['EventEdge']> = {
  node?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<GroupDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['GroupContentRichText'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<GroupCreatedByArgs, never>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<GroupUpdatedByArgs, never>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<GroupPublishedByArgs, never>>;
  people?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<GroupPeopleArgs, never>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<GroupHistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupConnection'] = ResolversParentTypes['GroupConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GroupEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupContentRichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupContentRichText'] = ResolversParentTypes['GroupContentRichText']> = {
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  json?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  references?: Resolver<Array<ResolversTypes['GroupContentRichTextEmbeddedTypes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupContentRichTextEmbeddedTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupContentRichTextEmbeddedTypes'] = ResolversParentTypes['GroupContentRichTextEmbeddedTypes']> = {
  __resolveType: TypeResolveFn<'Asset', ParentType, ContextType>;
};

export type GroupEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupEdge'] = ResolversParentTypes['GroupEdge']> = {
  node?: Resolver<ResolversTypes['Group'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hex'], any> {
  name: 'Hex';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  distance?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<LocationDistanceArgs, 'from'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationCreateAssetArgs, 'data'>>;
  updateAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'where' | 'data'>>;
  deleteAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationDeleteAssetArgs, 'where'>>;
  upsertAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUpsertAssetArgs, 'where' | 'upsert'>>;
  publishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationPublishAssetArgs, 'where' | 'publishBase' | 'withDefaultLocale' | 'to'>>;
  unpublishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUnpublishAssetArgs, 'where' | 'from' | 'unpublishBase'>>;
  updateManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyAssetsConnectionArgs, 'data'>>;
  deleteManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<MutationDeleteManyAssetsConnectionArgs, never>>;
  publishManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<MutationPublishManyAssetsConnectionArgs, 'from' | 'to' | 'publishBase' | 'withDefaultLocale'>>;
  unpublishManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyAssetsConnectionArgs, 'stage' | 'from' | 'unpublishBase'>>;
  updateManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyAssetsArgs, 'data'>>;
  deleteManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyAssetsArgs, never>>;
  publishManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyAssetsArgs, 'to' | 'publishBase' | 'withDefaultLocale'>>;
  unpublishManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyAssetsArgs, 'from' | 'unpublishBase'>>;
  createPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationCreatePersonArgs, 'data'>>;
  updatePerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationUpdatePersonArgs, 'where' | 'data'>>;
  deletePerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationDeletePersonArgs, 'where'>>;
  upsertPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationUpsertPersonArgs, 'where' | 'upsert'>>;
  publishPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationPublishPersonArgs, 'where' | 'to'>>;
  unpublishPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationUnpublishPersonArgs, 'where' | 'from'>>;
  updateManyPeopleConnection?: Resolver<ResolversTypes['PersonConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyPeopleConnectionArgs, 'data'>>;
  deleteManyPeopleConnection?: Resolver<ResolversTypes['PersonConnection'], ParentType, ContextType, RequireFields<MutationDeleteManyPeopleConnectionArgs, never>>;
  publishManyPeopleConnection?: Resolver<ResolversTypes['PersonConnection'], ParentType, ContextType, RequireFields<MutationPublishManyPeopleConnectionArgs, 'from' | 'to'>>;
  unpublishManyPeopleConnection?: Resolver<ResolversTypes['PersonConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyPeopleConnectionArgs, 'stage' | 'from'>>;
  updateManyPeople?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPeopleArgs, 'data'>>;
  deleteManyPeople?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyPeopleArgs, never>>;
  publishManyPeople?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyPeopleArgs, 'to'>>;
  unpublishManyPeople?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyPeopleArgs, 'from'>>;
  createGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<MutationCreateGroupArgs, 'data'>>;
  updateGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<MutationUpdateGroupArgs, 'where' | 'data'>>;
  deleteGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<MutationDeleteGroupArgs, 'where'>>;
  upsertGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<MutationUpsertGroupArgs, 'where' | 'upsert'>>;
  publishGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<MutationPublishGroupArgs, 'where' | 'to'>>;
  unpublishGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<MutationUnpublishGroupArgs, 'where' | 'from'>>;
  updateManyGroupsConnection?: Resolver<ResolversTypes['GroupConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyGroupsConnectionArgs, 'data'>>;
  deleteManyGroupsConnection?: Resolver<ResolversTypes['GroupConnection'], ParentType, ContextType, RequireFields<MutationDeleteManyGroupsConnectionArgs, never>>;
  publishManyGroupsConnection?: Resolver<ResolversTypes['GroupConnection'], ParentType, ContextType, RequireFields<MutationPublishManyGroupsConnectionArgs, 'from' | 'to'>>;
  unpublishManyGroupsConnection?: Resolver<ResolversTypes['GroupConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyGroupsConnectionArgs, 'stage' | 'from'>>;
  updateManyGroups?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyGroupsArgs, 'data'>>;
  deleteManyGroups?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyGroupsArgs, never>>;
  publishManyGroups?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyGroupsArgs, 'to'>>;
  unpublishManyGroups?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyGroupsArgs, 'from'>>;
  createPlace?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<MutationCreatePlaceArgs, 'data'>>;
  updatePlace?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<MutationUpdatePlaceArgs, 'where' | 'data'>>;
  deletePlace?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<MutationDeletePlaceArgs, 'where'>>;
  upsertPlace?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<MutationUpsertPlaceArgs, 'where' | 'upsert'>>;
  publishPlace?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<MutationPublishPlaceArgs, 'where' | 'to'>>;
  unpublishPlace?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<MutationUnpublishPlaceArgs, 'where' | 'from'>>;
  updateManyPlacesConnection?: Resolver<ResolversTypes['PlaceConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyPlacesConnectionArgs, 'data'>>;
  deleteManyPlacesConnection?: Resolver<ResolversTypes['PlaceConnection'], ParentType, ContextType, RequireFields<MutationDeleteManyPlacesConnectionArgs, never>>;
  publishManyPlacesConnection?: Resolver<ResolversTypes['PlaceConnection'], ParentType, ContextType, RequireFields<MutationPublishManyPlacesConnectionArgs, 'from' | 'to'>>;
  unpublishManyPlacesConnection?: Resolver<ResolversTypes['PlaceConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyPlacesConnectionArgs, 'stage' | 'from'>>;
  updateManyPlaces?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPlacesArgs, 'data'>>;
  deleteManyPlaces?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyPlacesArgs, never>>;
  publishManyPlaces?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyPlacesArgs, 'to'>>;
  unpublishManyPlaces?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyPlacesArgs, 'from'>>;
  createPricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<MutationCreatePricingArgs, 'data'>>;
  updatePricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<MutationUpdatePricingArgs, 'where' | 'data'>>;
  deletePricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<MutationDeletePricingArgs, 'where'>>;
  upsertPricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<MutationUpsertPricingArgs, 'where' | 'upsert'>>;
  publishPricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<MutationPublishPricingArgs, 'where' | 'to'>>;
  unpublishPricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<MutationUnpublishPricingArgs, 'where' | 'from'>>;
  updateManyPricingsConnection?: Resolver<ResolversTypes['PricingConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyPricingsConnectionArgs, 'data'>>;
  deleteManyPricingsConnection?: Resolver<ResolversTypes['PricingConnection'], ParentType, ContextType, RequireFields<MutationDeleteManyPricingsConnectionArgs, never>>;
  publishManyPricingsConnection?: Resolver<ResolversTypes['PricingConnection'], ParentType, ContextType, RequireFields<MutationPublishManyPricingsConnectionArgs, 'from' | 'to'>>;
  unpublishManyPricingsConnection?: Resolver<ResolversTypes['PricingConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyPricingsConnectionArgs, 'stage' | 'from'>>;
  updateManyPricings?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPricingsArgs, 'data'>>;
  deleteManyPricings?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyPricingsArgs, never>>;
  publishManyPricings?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyPricingsArgs, 'to'>>;
  unpublishManyPricings?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyPricingsArgs, 'from'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'where' | 'data'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'where'>>;
  upsertProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpsertProductArgs, 'where' | 'upsert'>>;
  publishProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationPublishProductArgs, 'where' | 'to'>>;
  unpublishProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUnpublishProductArgs, 'where' | 'from'>>;
  updateManyProductsConnection?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyProductsConnectionArgs, 'data'>>;
  deleteManyProductsConnection?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<MutationDeleteManyProductsConnectionArgs, never>>;
  publishManyProductsConnection?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<MutationPublishManyProductsConnectionArgs, 'from' | 'to'>>;
  unpublishManyProductsConnection?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyProductsConnectionArgs, 'stage' | 'from'>>;
  updateManyProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyProductsArgs, 'data'>>;
  deleteManyProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyProductsArgs, never>>;
  publishManyProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyProductsArgs, 'to'>>;
  unpublishManyProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyProductsArgs, 'from'>>;
  createEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationCreateEventArgs, 'data'>>;
  updateEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'where' | 'data'>>;
  deleteEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationDeleteEventArgs, 'where'>>;
  upsertEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationUpsertEventArgs, 'where' | 'upsert'>>;
  publishEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationPublishEventArgs, 'where' | 'to'>>;
  unpublishEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationUnpublishEventArgs, 'where' | 'from'>>;
  updateManyEventsConnection?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyEventsConnectionArgs, 'data'>>;
  deleteManyEventsConnection?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, RequireFields<MutationDeleteManyEventsConnectionArgs, never>>;
  publishManyEventsConnection?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, RequireFields<MutationPublishManyEventsConnectionArgs, 'from' | 'to'>>;
  unpublishManyEventsConnection?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyEventsConnectionArgs, 'stage' | 'from'>>;
  updateManyEvents?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyEventsArgs, 'data'>>;
  deleteManyEvents?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyEventsArgs, never>>;
  publishManyEvents?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyEventsArgs, 'to'>>;
  unpublishManyEvents?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyEventsArgs, 'from'>>;
  createPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'data'>>;
  updatePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'where' | 'data'>>;
  deletePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'where'>>;
  upsertPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpsertPostArgs, 'where' | 'upsert'>>;
  publishPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationPublishPostArgs, 'where' | 'to'>>;
  unpublishPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUnpublishPostArgs, 'where' | 'from'>>;
  updateManyPostsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyPostsConnectionArgs, 'data'>>;
  deleteManyPostsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, RequireFields<MutationDeleteManyPostsConnectionArgs, never>>;
  publishManyPostsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, RequireFields<MutationPublishManyPostsConnectionArgs, 'from' | 'to'>>;
  unpublishManyPostsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyPostsConnectionArgs, 'stage' | 'from'>>;
  updateManyPosts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPostsArgs, 'data'>>;
  deleteManyPosts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyPostsArgs, never>>;
  publishManyPosts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyPostsArgs, 'to'>>;
  unpublishManyPosts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyPostsArgs, 'from'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Asset' | 'Event' | 'Group' | 'Person' | 'Place' | 'Post' | 'Pricing' | 'Product' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<PersonDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['PersonContentRichText'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PersonCreatedByArgs, never>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PersonUpdatedByArgs, never>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PersonPublishedByArgs, never>>;
  photo?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, RequireFields<PersonPhotoArgs, never>>;
  groups?: Resolver<Array<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<PersonGroupsArgs, never>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<PersonHistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonConnection'] = ResolversParentTypes['PersonConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PersonEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonContentRichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonContentRichText'] = ResolversParentTypes['PersonContentRichText']> = {
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  json?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  references?: Resolver<Array<ResolversTypes['PersonContentRichTextEmbeddedTypes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonContentRichTextEmbeddedTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonContentRichTextEmbeddedTypes'] = ResolversParentTypes['PersonContentRichTextEmbeddedTypes']> = {
  __resolveType: TypeResolveFn<'Asset', ParentType, ContextType>;
};

export type PersonEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEdge'] = ResolversParentTypes['PersonEdge']> = {
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Place'] = ResolversParentTypes['Place']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<PlaceDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['PlaceContentRichText'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PlaceCreatedByArgs, never>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PlaceUpdatedByArgs, never>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PlacePublishedByArgs, never>>;
  photos?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<PlacePhotosArgs, never>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<PlaceHistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaceConnection'] = ResolversParentTypes['PlaceConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PlaceEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaceContentRichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaceContentRichText'] = ResolversParentTypes['PlaceContentRichText']> = {
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  json?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  references?: Resolver<Array<ResolversTypes['PlaceContentRichTextEmbeddedTypes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaceContentRichTextEmbeddedTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaceContentRichTextEmbeddedTypes'] = ResolversParentTypes['PlaceContentRichTextEmbeddedTypes']> = {
  __resolveType: TypeResolveFn<'Asset', ParentType, ContextType>;
};

export type PlaceEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaceEdge'] = ResolversParentTypes['PlaceEdge']> = {
  node?: Resolver<ResolversTypes['Place'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<PostDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['PostContentRichText'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PostCreatedByArgs, never>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PostUpdatedByArgs, never>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PostPublishedByArgs, never>>;
  photo?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, RequireFields<PostPhotoArgs, never>>;
  displayLocations?: Resolver<Array<ResolversTypes['WebsiteLocations']>, ParentType, ContextType>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<PostHistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostConnection'] = ResolversParentTypes['PostConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PostEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostContentRichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostContentRichText'] = ResolversParentTypes['PostContentRichText']> = {
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  json?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  references?: Resolver<Array<ResolversTypes['PostContentRichTextEmbeddedTypes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostContentRichTextEmbeddedTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostContentRichTextEmbeddedTypes'] = ResolversParentTypes['PostContentRichTextEmbeddedTypes']> = {
  __resolveType: TypeResolveFn<'Asset', ParentType, ContextType>;
};

export type PostEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostEdge'] = ResolversParentTypes['PostEdge']> = {
  node?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pricing'] = ResolversParentTypes['Pricing']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<PricingDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PricingCreatedByArgs, never>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PricingUpdatedByArgs, never>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<PricingPublishedByArgs, never>>;
  period?: Resolver<Maybe<ResolversTypes['TimePeriods']>, ParentType, ContextType>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<PricingHistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingConnection'] = ResolversParentTypes['PricingConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PricingEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingEdge'] = ResolversParentTypes['PricingEdge']> = {
  node?: Resolver<ResolversTypes['Pricing'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<ProductDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['ProductContentRichText'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<ProductCreatedByArgs, never>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<ProductUpdatedByArgs, never>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<ProductPublishedByArgs, never>>;
  photo?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, RequireFields<ProductPhotoArgs, never>>;
  pricings?: Resolver<Array<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<ProductPricingsArgs, never>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<ProductHistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ProductEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductContentRichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductContentRichText'] = ResolversParentTypes['ProductContentRichText']> = {
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  json?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  references?: Resolver<Array<ResolversTypes['ProductContentRichTextEmbeddedTypes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductContentRichTextEmbeddedTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductContentRichTextEmbeddedTypes'] = ResolversParentTypes['ProductContentRichTextEmbeddedTypes']> = {
  __resolveType: TypeResolveFn<'Asset', ParentType, ContextType>;
};

export type ProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']> = {
  node?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id' | 'stage' | 'locales'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'stage' | 'locales'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where' | 'stage' | 'locales'>>;
  usersConnection?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<QueryUsersConnectionArgs, 'stage' | 'locales'>>;
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetsArgs, 'stage' | 'locales'>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'where' | 'stage' | 'locales'>>;
  assetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<QueryAssetsConnectionArgs, 'stage' | 'locales'>>;
  assetVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryAssetVersionArgs, 'where'>>;
  people?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryPeopleArgs, 'stage' | 'locales'>>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryPersonArgs, 'where' | 'stage' | 'locales'>>;
  peopleConnection?: Resolver<ResolversTypes['PersonConnection'], ParentType, ContextType, RequireFields<QueryPeopleConnectionArgs, 'stage' | 'locales'>>;
  personVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryPersonVersionArgs, 'where'>>;
  groups?: Resolver<Array<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGroupsArgs, 'stage' | 'locales'>>;
  group?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGroupArgs, 'where' | 'stage' | 'locales'>>;
  groupsConnection?: Resolver<ResolversTypes['GroupConnection'], ParentType, ContextType, RequireFields<QueryGroupsConnectionArgs, 'stage' | 'locales'>>;
  groupVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryGroupVersionArgs, 'where'>>;
  places?: Resolver<Array<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<QueryPlacesArgs, 'stage' | 'locales'>>;
  place?: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<QueryPlaceArgs, 'where' | 'stage' | 'locales'>>;
  placesConnection?: Resolver<ResolversTypes['PlaceConnection'], ParentType, ContextType, RequireFields<QueryPlacesConnectionArgs, 'stage' | 'locales'>>;
  placeVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryPlaceVersionArgs, 'where'>>;
  pricings?: Resolver<Array<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<QueryPricingsArgs, 'stage' | 'locales'>>;
  pricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType, RequireFields<QueryPricingArgs, 'where' | 'stage' | 'locales'>>;
  pricingsConnection?: Resolver<ResolversTypes['PricingConnection'], ParentType, ContextType, RequireFields<QueryPricingsConnectionArgs, 'stage' | 'locales'>>;
  pricingVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryPricingVersionArgs, 'where'>>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductsArgs, 'stage' | 'locales'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'where' | 'stage' | 'locales'>>;
  productsConnection?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<QueryProductsConnectionArgs, 'stage' | 'locales'>>;
  productVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryProductVersionArgs, 'where'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventsArgs, 'stage' | 'locales'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'where' | 'stage' | 'locales'>>;
  eventsConnection?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, RequireFields<QueryEventsConnectionArgs, 'stage' | 'locales'>>;
  eventVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryEventVersionArgs, 'where'>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostsArgs, 'stage' | 'locales'>>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'where' | 'stage' | 'locales'>>;
  postsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, RequireFields<QueryPostsConnectionArgs, 'stage' | 'locales'>>;
  postVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryPostVersionArgs, 'where'>>;
};

export type RgbaResolvers<ContextType = any, ParentType extends ResolversParentTypes['RGBA'] = ResolversParentTypes['RGBA']> = {
  r?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  g?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  b?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  a?: Resolver<ResolversTypes['RGBATransparency'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RgbaHueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBAHue'], any> {
  name: 'RGBAHue';
}

export interface RgbaTransparencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBATransparency'], any> {
  name: 'RGBATransparency';
}

export type RichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['RichText'] = ResolversParentTypes['RichText']> = {
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RichTextAstScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RichTextAST'], any> {
  name: 'RichTextAST';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<UserDocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['UserKind'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Version'] = ResolversParentTypes['Version']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Aggregate?: AggregateResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetConnection?: AssetConnectionResolvers<ContextType>;
  AssetEdge?: AssetEdgeResolvers<ContextType>;
  BatchPayload?: BatchPayloadResolvers<ContextType>;
  Color?: ColorResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DocumentVersion?: DocumentVersionResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventConnection?: EventConnectionResolvers<ContextType>;
  EventContentRichText?: EventContentRichTextResolvers<ContextType>;
  EventContentRichTextEmbeddedTypes?: EventContentRichTextEmbeddedTypesResolvers<ContextType>;
  EventEdge?: EventEdgeResolvers<ContextType>;
  Group?: GroupResolvers<ContextType>;
  GroupConnection?: GroupConnectionResolvers<ContextType>;
  GroupContentRichText?: GroupContentRichTextResolvers<ContextType>;
  GroupContentRichTextEmbeddedTypes?: GroupContentRichTextEmbeddedTypesResolvers<ContextType>;
  GroupEdge?: GroupEdgeResolvers<ContextType>;
  Hex?: GraphQLScalarType;
  Json?: GraphQLScalarType;
  Location?: LocationResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonConnection?: PersonConnectionResolvers<ContextType>;
  PersonContentRichText?: PersonContentRichTextResolvers<ContextType>;
  PersonContentRichTextEmbeddedTypes?: PersonContentRichTextEmbeddedTypesResolvers<ContextType>;
  PersonEdge?: PersonEdgeResolvers<ContextType>;
  Place?: PlaceResolvers<ContextType>;
  PlaceConnection?: PlaceConnectionResolvers<ContextType>;
  PlaceContentRichText?: PlaceContentRichTextResolvers<ContextType>;
  PlaceContentRichTextEmbeddedTypes?: PlaceContentRichTextEmbeddedTypesResolvers<ContextType>;
  PlaceEdge?: PlaceEdgeResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostConnection?: PostConnectionResolvers<ContextType>;
  PostContentRichText?: PostContentRichTextResolvers<ContextType>;
  PostContentRichTextEmbeddedTypes?: PostContentRichTextEmbeddedTypesResolvers<ContextType>;
  PostEdge?: PostEdgeResolvers<ContextType>;
  Pricing?: PricingResolvers<ContextType>;
  PricingConnection?: PricingConnectionResolvers<ContextType>;
  PricingEdge?: PricingEdgeResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductConnection?: ProductConnectionResolvers<ContextType>;
  ProductContentRichText?: ProductContentRichTextResolvers<ContextType>;
  ProductContentRichTextEmbeddedTypes?: ProductContentRichTextEmbeddedTypesResolvers<ContextType>;
  ProductEdge?: ProductEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RGBA?: RgbaResolvers<ContextType>;
  RGBAHue?: GraphQLScalarType;
  RGBATransparency?: GraphQLScalarType;
  RichText?: RichTextResolvers<ContextType>;
  RichTextAST?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  Version?: VersionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  mark?: MarkDirectiveResolver<any, any, ContextType>;
  permission?: PermissionDirectiveResolver<any, any, ContextType>;
  psql?: PsqlDirectiveResolver<any, any, ContextType>;
  remote?: RemoteDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
export const PricingFragmentDoc = gql`
    fragment Pricing on Pricing {
  id
  price
  period
}
    `;
export const EventFragmentDoc = gql`
    fragment Event on Event {
  id
  name
  description
  activities
  startTime
  endTime
  photo {
    url
  }
  pricing {
    ...Pricing
  }
  place {
    name
    description
    photos {
      url
    }
  }
}
    ${PricingFragmentDoc}`;
export const PostFragmentDoc = gql`
    fragment Post on Post {
  id
  title
  description
  createdAt
  photo {
    url
  }
}
    `;
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  id
  name
  description
  pricings {
    ...Pricing
  }
  photo {
    url
  }
}
    ${PricingFragmentDoc}`;
export const EventsListDocument = gql`
    query EventsList($first: Int!, $skip: Int!, $orderBy: EventOrderByInput!, $startTimeAfter: DateTime!) {
  eventsConnection(
    first: $first
    skip: $skip
    orderBy: $orderBy
    where: {startTime_gt: $startTimeAfter}
  ) {
    edges {
      cursor
      node {
        ...Event
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    ${EventFragmentDoc}`;

/**
 * __useEventsListQuery__
 *
 * To run a query within a React component, call `useEventsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *      startTimeAfter: // value for 'startTimeAfter'
 *   },
 * });
 */
export function useEventsListQuery(baseOptions: Apollo.QueryHookOptions<EventsListQuery, EventsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsListQuery, EventsListQueryVariables>(EventsListDocument, options);
      }
export function useEventsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsListQuery, EventsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsListQuery, EventsListQueryVariables>(EventsListDocument, options);
        }
export type EventsListQueryHookResult = ReturnType<typeof useEventsListQuery>;
export type EventsListLazyQueryHookResult = ReturnType<typeof useEventsListLazyQuery>;
export type EventsListQueryResult = Apollo.QueryResult<EventsListQuery, EventsListQueryVariables>;
export const PostsListDocument = gql`
    query PostsList($first: Int!, $skip: Int!, $orderBy: PostOrderByInput!) {
  postsConnection(first: $first, skip: $skip, orderBy: $orderBy) {
    edges {
      cursor
      node {
        ...Post
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    ${PostFragmentDoc}`;

/**
 * __usePostsListQuery__
 *
 * To run a query within a React component, call `usePostsListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function usePostsListQuery(baseOptions: Apollo.QueryHookOptions<PostsListQuery, PostsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsListQuery, PostsListQueryVariables>(PostsListDocument, options);
      }
export function usePostsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsListQuery, PostsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsListQuery, PostsListQueryVariables>(PostsListDocument, options);
        }
export type PostsListQueryHookResult = ReturnType<typeof usePostsListQuery>;
export type PostsListLazyQueryHookResult = ReturnType<typeof usePostsListLazyQuery>;
export type PostsListQueryResult = Apollo.QueryResult<PostsListQuery, PostsListQueryVariables>;
export const ProductListDocument = gql`
    query ProductList($first: Int!, $skip: Int!, $orderBy: ProductOrderByInput!) {
  productsConnection(first: $first, skip: $skip, orderBy: $orderBy) {
    edges {
      cursor
      node {
        ...Product
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useProductListQuery(baseOptions: Apollo.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
      }
export function useProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;