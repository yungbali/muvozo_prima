/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCourseInput = {
  id?: string | null,
  title: string,
  description: string,
  content?: string | null,
  totalLessons: number,
};

export type ModelCourseConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  totalLessons?: ModelIntInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  title: string,
  description: string,
  content?: string | null,
  totalLessons: number,
  educationProgress?: ModelEducationProgressConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEducationProgressConnection = {
  __typename: "ModelEducationProgressConnection",
  items:  Array<EducationProgress | null >,
  nextToken?: string | null,
};

export type EducationProgress = {
  __typename: "EducationProgress",
  id: string,
  completedLessons: number,
  lastAccessedDate: string,
  artist?: Artist | null,
  course?: Course | null,
  createdAt: string,
  updatedAt: string,
  artistEducationProgressId?: string | null,
  courseEducationProgressId?: string | null,
  owner?: string | null,
};

export type Artist = {
  __typename: "Artist",
  id: string,
  name: string,
  email: string,
  bio?: string | null,
  genres?: Array< string | null > | null,
  socialLinks?: string | null,
  wallet?: Wallet | null,
  royalties?: ModelRoyaltyConnection | null,
  pitches?: ModelPitchConnection | null,
  connections?: ModelConnectionConnection | null,
  educationProgress?: ModelEducationProgressConnection | null,
  analyticsEvents?: ModelAnalyticsEventConnection | null,
  legalDocuments?: ModelLegalDocumentConnection | null,
  createdAt: string,
  updatedAt: string,
  artistWalletId?: string | null,
  owner?: string | null,
};

export type Wallet = {
  __typename: "Wallet",
  id: string,
  balance: number,
  currency: string,
  artist?: Artist | null,
  transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
  walletArtistId?: string | null,
  owner?: string | null,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  amount: number,
  type: TransactionType,
  description?: string | null,
  date: string,
  wallet?: Wallet | null,
  createdAt: string,
  updatedAt: string,
  walletTransactionsId?: string | null,
  owner?: string | null,
};

export enum TransactionType {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
  ROYALTY_PAYMENT = "ROYALTY_PAYMENT",
}


export type ModelRoyaltyConnection = {
  __typename: "ModelRoyaltyConnection",
  items:  Array<Royalty | null >,
  nextToken?: string | null,
};

export type Royalty = {
  __typename: "Royalty",
  id: string,
  amount: number,
  source: string,
  date: string,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
  artistRoyaltiesId?: string | null,
  owner?: string | null,
};

export type ModelPitchConnection = {
  __typename: "ModelPitchConnection",
  items:  Array<Pitch | null >,
  nextToken?: string | null,
};

export type Pitch = {
  __typename: "Pitch",
  id: string,
  title: string,
  description: string,
  audioFileUrl?: string | null,
  status: PitchStatus,
  submissionDate: string,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
  artistPitchesId?: string | null,
  owner?: string | null,
};

export enum PitchStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}


export type ModelConnectionConnection = {
  __typename: "ModelConnectionConnection",
  items:  Array<Connection | null >,
  nextToken?: string | null,
};

export type Connection = {
  __typename: "Connection",
  id: string,
  name: string,
  role: string,
  email?: string | null,
  status: ConnectionStatus,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
  artistConnectionsId?: string | null,
  owner?: string | null,
};

export enum ConnectionStatus {
  PENDING = "PENDING",
  CONNECTED = "CONNECTED",
}


export type ModelAnalyticsEventConnection = {
  __typename: "ModelAnalyticsEventConnection",
  items:  Array<AnalyticsEvent | null >,
  nextToken?: string | null,
};

export type AnalyticsEvent = {
  __typename: "AnalyticsEvent",
  id: string,
  eventType: string,
  eventData?: string | null,
  timestamp: string,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
  artistAnalyticsEventsId?: string | null,
  owner?: string | null,
};

export type ModelLegalDocumentConnection = {
  __typename: "ModelLegalDocumentConnection",
  items:  Array<LegalDocument | null >,
  nextToken?: string | null,
};

export type LegalDocument = {
  __typename: "LegalDocument",
  id: string,
  title: string,
  description?: string | null,
  fileUrl: string,
  status: DocumentStatus,
  uploadDate: string,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
  artistLegalDocumentsId?: string | null,
  owner?: string | null,
};

export enum DocumentStatus {
  DRAFT = "DRAFT",
  SIGNED = "SIGNED",
  EXPIRED = "EXPIRED",
}


export type UpdateCourseInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  content?: string | null,
  totalLessons?: number | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateArtistInput = {
  id?: string | null,
  name: string,
  email: string,
  bio?: string | null,
  genres?: Array< string | null > | null,
  socialLinks?: string | null,
  artistWalletId?: string | null,
};

export type ModelArtistConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  genres?: ModelStringInput | null,
  socialLinks?: ModelStringInput | null,
  and?: Array< ModelArtistConditionInput | null > | null,
  or?: Array< ModelArtistConditionInput | null > | null,
  not?: ModelArtistConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  artistWalletId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateArtistInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  bio?: string | null,
  genres?: Array< string | null > | null,
  socialLinks?: string | null,
  artistWalletId?: string | null,
};

export type DeleteArtistInput = {
  id: string,
};

export type CreateWalletInput = {
  id?: string | null,
  balance: number,
  currency: string,
  walletArtistId?: string | null,
};

export type ModelWalletConditionInput = {
  balance?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  and?: Array< ModelWalletConditionInput | null > | null,
  or?: Array< ModelWalletConditionInput | null > | null,
  not?: ModelWalletConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  walletArtistId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateWalletInput = {
  id: string,
  balance?: number | null,
  currency?: string | null,
  walletArtistId?: string | null,
};

export type DeleteWalletInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  amount: number,
  type: TransactionType,
  description?: string | null,
  date: string,
  walletTransactionsId?: string | null,
};

export type ModelTransactionConditionInput = {
  amount?: ModelFloatInput | null,
  type?: ModelTransactionTypeInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  walletTransactionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelTransactionTypeInput = {
  eq?: TransactionType | null,
  ne?: TransactionType | null,
};

export type UpdateTransactionInput = {
  id: string,
  amount?: number | null,
  type?: TransactionType | null,
  description?: string | null,
  date?: string | null,
  walletTransactionsId?: string | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type CreateRoyaltyInput = {
  id?: string | null,
  amount: number,
  source: string,
  date: string,
  artistRoyaltiesId?: string | null,
};

export type ModelRoyaltyConditionInput = {
  amount?: ModelFloatInput | null,
  source?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelRoyaltyConditionInput | null > | null,
  or?: Array< ModelRoyaltyConditionInput | null > | null,
  not?: ModelRoyaltyConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  artistRoyaltiesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateRoyaltyInput = {
  id: string,
  amount?: number | null,
  source?: string | null,
  date?: string | null,
  artistRoyaltiesId?: string | null,
};

export type DeleteRoyaltyInput = {
  id: string,
};

export type CreatePitchInput = {
  id?: string | null,
  title: string,
  description: string,
  audioFileUrl?: string | null,
  status: PitchStatus,
  submissionDate: string,
  artistPitchesId?: string | null,
};

export type ModelPitchConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  audioFileUrl?: ModelStringInput | null,
  status?: ModelPitchStatusInput | null,
  submissionDate?: ModelStringInput | null,
  and?: Array< ModelPitchConditionInput | null > | null,
  or?: Array< ModelPitchConditionInput | null > | null,
  not?: ModelPitchConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  artistPitchesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelPitchStatusInput = {
  eq?: PitchStatus | null,
  ne?: PitchStatus | null,
};

export type UpdatePitchInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  audioFileUrl?: string | null,
  status?: PitchStatus | null,
  submissionDate?: string | null,
  artistPitchesId?: string | null,
};

export type DeletePitchInput = {
  id: string,
};

export type CreateConnectionInput = {
  id?: string | null,
  name: string,
  role: string,
  email?: string | null,
  status: ConnectionStatus,
  artistConnectionsId?: string | null,
};

export type ModelConnectionConditionInput = {
  name?: ModelStringInput | null,
  role?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelConnectionStatusInput | null,
  and?: Array< ModelConnectionConditionInput | null > | null,
  or?: Array< ModelConnectionConditionInput | null > | null,
  not?: ModelConnectionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  artistConnectionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelConnectionStatusInput = {
  eq?: ConnectionStatus | null,
  ne?: ConnectionStatus | null,
};

export type UpdateConnectionInput = {
  id: string,
  name?: string | null,
  role?: string | null,
  email?: string | null,
  status?: ConnectionStatus | null,
  artistConnectionsId?: string | null,
};

export type DeleteConnectionInput = {
  id: string,
};

export type CreateEducationProgressInput = {
  id?: string | null,
  completedLessons: number,
  lastAccessedDate: string,
  artistEducationProgressId?: string | null,
  courseEducationProgressId?: string | null,
};

export type ModelEducationProgressConditionInput = {
  completedLessons?: ModelIntInput | null,
  lastAccessedDate?: ModelStringInput | null,
  and?: Array< ModelEducationProgressConditionInput | null > | null,
  or?: Array< ModelEducationProgressConditionInput | null > | null,
  not?: ModelEducationProgressConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  artistEducationProgressId?: ModelIDInput | null,
  courseEducationProgressId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateEducationProgressInput = {
  id: string,
  completedLessons?: number | null,
  lastAccessedDate?: string | null,
  artistEducationProgressId?: string | null,
  courseEducationProgressId?: string | null,
};

export type DeleteEducationProgressInput = {
  id: string,
};

export type CreateAnalyticsEventInput = {
  id?: string | null,
  eventType: string,
  eventData?: string | null,
  timestamp: string,
  artistAnalyticsEventsId?: string | null,
};

export type ModelAnalyticsEventConditionInput = {
  eventType?: ModelStringInput | null,
  eventData?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelAnalyticsEventConditionInput | null > | null,
  or?: Array< ModelAnalyticsEventConditionInput | null > | null,
  not?: ModelAnalyticsEventConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  artistAnalyticsEventsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateAnalyticsEventInput = {
  id: string,
  eventType?: string | null,
  eventData?: string | null,
  timestamp?: string | null,
  artistAnalyticsEventsId?: string | null,
};

export type DeleteAnalyticsEventInput = {
  id: string,
};

export type CreateLegalDocumentInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  fileUrl: string,
  status: DocumentStatus,
  uploadDate: string,
  artistLegalDocumentsId?: string | null,
};

export type ModelLegalDocumentConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  fileUrl?: ModelStringInput | null,
  status?: ModelDocumentStatusInput | null,
  uploadDate?: ModelStringInput | null,
  and?: Array< ModelLegalDocumentConditionInput | null > | null,
  or?: Array< ModelLegalDocumentConditionInput | null > | null,
  not?: ModelLegalDocumentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  artistLegalDocumentsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelDocumentStatusInput = {
  eq?: DocumentStatus | null,
  ne?: DocumentStatus | null,
};

export type UpdateLegalDocumentInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  fileUrl?: string | null,
  status?: DocumentStatus | null,
  uploadDate?: string | null,
  artistLegalDocumentsId?: string | null,
};

export type DeleteLegalDocumentInput = {
  id: string,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  totalLessons?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelArtistFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  genres?: ModelStringInput | null,
  socialLinks?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
  artistWalletId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelArtistConnection = {
  __typename: "ModelArtistConnection",
  items:  Array<Artist | null >,
  nextToken?: string | null,
};

export type ModelWalletFilterInput = {
  id?: ModelIDInput | null,
  balance?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWalletFilterInput | null > | null,
  or?: Array< ModelWalletFilterInput | null > | null,
  not?: ModelWalletFilterInput | null,
  walletArtistId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelWalletConnection = {
  __typename: "ModelWalletConnection",
  items:  Array<Wallet | null >,
  nextToken?: string | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  type?: ModelTransactionTypeInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
  walletTransactionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelRoyaltyFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  source?: ModelStringInput | null,
  date?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoyaltyFilterInput | null > | null,
  or?: Array< ModelRoyaltyFilterInput | null > | null,
  not?: ModelRoyaltyFilterInput | null,
  artistRoyaltiesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelPitchFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  audioFileUrl?: ModelStringInput | null,
  status?: ModelPitchStatusInput | null,
  submissionDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPitchFilterInput | null > | null,
  or?: Array< ModelPitchFilterInput | null > | null,
  not?: ModelPitchFilterInput | null,
  artistPitchesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelConnectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  role?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelConnectionStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConnectionFilterInput | null > | null,
  or?: Array< ModelConnectionFilterInput | null > | null,
  not?: ModelConnectionFilterInput | null,
  artistConnectionsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelEducationProgressFilterInput = {
  id?: ModelIDInput | null,
  completedLessons?: ModelIntInput | null,
  lastAccessedDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEducationProgressFilterInput | null > | null,
  or?: Array< ModelEducationProgressFilterInput | null > | null,
  not?: ModelEducationProgressFilterInput | null,
  artistEducationProgressId?: ModelIDInput | null,
  courseEducationProgressId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelAnalyticsEventFilterInput = {
  id?: ModelIDInput | null,
  eventType?: ModelStringInput | null,
  eventData?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAnalyticsEventFilterInput | null > | null,
  or?: Array< ModelAnalyticsEventFilterInput | null > | null,
  not?: ModelAnalyticsEventFilterInput | null,
  artistAnalyticsEventsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelLegalDocumentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  fileUrl?: ModelStringInput | null,
  status?: ModelDocumentStatusInput | null,
  uploadDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLegalDocumentFilterInput | null > | null,
  or?: Array< ModelLegalDocumentFilterInput | null > | null,
  not?: ModelLegalDocumentFilterInput | null,
  artistLegalDocumentsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  totalLessons?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  courseEducationProgressId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionArtistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  genres?: ModelSubscriptionStringInput | null,
  socialLinks?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArtistFilterInput | null > | null,
  or?: Array< ModelSubscriptionArtistFilterInput | null > | null,
  artistRoyaltiesId?: ModelSubscriptionIDInput | null,
  artistPitchesId?: ModelSubscriptionIDInput | null,
  artistConnectionsId?: ModelSubscriptionIDInput | null,
  artistEducationProgressId?: ModelSubscriptionIDInput | null,
  artistAnalyticsEventsId?: ModelSubscriptionIDInput | null,
  artistLegalDocumentsId?: ModelSubscriptionIDInput | null,
  artistWalletId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionWalletFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  balance?: ModelSubscriptionFloatInput | null,
  currency?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWalletFilterInput | null > | null,
  or?: Array< ModelSubscriptionWalletFilterInput | null > | null,
  walletTransactionsId?: ModelSubscriptionIDInput | null,
  walletArtistId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTransactionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionRoyaltyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  source?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoyaltyFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoyaltyFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionPitchFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  audioFileUrl?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  submissionDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPitchFilterInput | null > | null,
  or?: Array< ModelSubscriptionPitchFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionConnectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConnectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionConnectionFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionEducationProgressFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  completedLessons?: ModelSubscriptionIntInput | null,
  lastAccessedDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEducationProgressFilterInput | null > | null,
  or?: Array< ModelSubscriptionEducationProgressFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionAnalyticsEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  eventType?: ModelSubscriptionStringInput | null,
  eventData?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAnalyticsEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionAnalyticsEventFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionLegalDocumentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  fileUrl?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  uploadDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLegalDocumentFilterInput | null > | null,
  or?: Array< ModelSubscriptionLegalDocumentFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description: string,
    content?: string | null,
    totalLessons: number,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description: string,
    content?: string | null,
    totalLessons: number,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description: string,
    content?: string | null,
    totalLessons: number,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArtistMutationVariables = {
  input: CreateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type CreateArtistMutation = {
  createArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    genres?: Array< string | null > | null,
    socialLinks?: string | null,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    royalties?:  {
      __typename: "ModelRoyaltyConnection",
      nextToken?: string | null,
    } | null,
    pitches?:  {
      __typename: "ModelPitchConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    analyticsEvents?:  {
      __typename: "ModelAnalyticsEventConnection",
      nextToken?: string | null,
    } | null,
    legalDocuments?:  {
      __typename: "ModelLegalDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistWalletId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateArtistMutationVariables = {
  input: UpdateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type UpdateArtistMutation = {
  updateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    genres?: Array< string | null > | null,
    socialLinks?: string | null,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    royalties?:  {
      __typename: "ModelRoyaltyConnection",
      nextToken?: string | null,
    } | null,
    pitches?:  {
      __typename: "ModelPitchConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    analyticsEvents?:  {
      __typename: "ModelAnalyticsEventConnection",
      nextToken?: string | null,
    } | null,
    legalDocuments?:  {
      __typename: "ModelLegalDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistWalletId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteArtistMutationVariables = {
  input: DeleteArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type DeleteArtistMutation = {
  deleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    genres?: Array< string | null > | null,
    socialLinks?: string | null,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    royalties?:  {
      __typename: "ModelRoyaltyConnection",
      nextToken?: string | null,
    } | null,
    pitches?:  {
      __typename: "ModelPitchConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    analyticsEvents?:  {
      __typename: "ModelAnalyticsEventConnection",
      nextToken?: string | null,
    } | null,
    legalDocuments?:  {
      __typename: "ModelLegalDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistWalletId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateWalletMutationVariables = {
  input: CreateWalletInput,
  condition?: ModelWalletConditionInput | null,
};

export type CreateWalletMutation = {
  createWallet?:  {
    __typename: "Wallet",
    id: string,
    balance: number,
    currency: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletArtistId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateWalletMutationVariables = {
  input: UpdateWalletInput,
  condition?: ModelWalletConditionInput | null,
};

export type UpdateWalletMutation = {
  updateWallet?:  {
    __typename: "Wallet",
    id: string,
    balance: number,
    currency: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletArtistId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteWalletMutationVariables = {
  input: DeleteWalletInput,
  condition?: ModelWalletConditionInput | null,
};

export type DeleteWalletMutation = {
  deleteWallet?:  {
    __typename: "Wallet",
    id: string,
    balance: number,
    currency: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletArtistId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount: number,
    type: TransactionType,
    description?: string | null,
    date: string,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletTransactionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount: number,
    type: TransactionType,
    description?: string | null,
    date: string,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletTransactionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount: number,
    type: TransactionType,
    description?: string | null,
    date: string,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletTransactionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateRoyaltyMutationVariables = {
  input: CreateRoyaltyInput,
  condition?: ModelRoyaltyConditionInput | null,
};

export type CreateRoyaltyMutation = {
  createRoyalty?:  {
    __typename: "Royalty",
    id: string,
    amount: number,
    source: string,
    date: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistRoyaltiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateRoyaltyMutationVariables = {
  input: UpdateRoyaltyInput,
  condition?: ModelRoyaltyConditionInput | null,
};

export type UpdateRoyaltyMutation = {
  updateRoyalty?:  {
    __typename: "Royalty",
    id: string,
    amount: number,
    source: string,
    date: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistRoyaltiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteRoyaltyMutationVariables = {
  input: DeleteRoyaltyInput,
  condition?: ModelRoyaltyConditionInput | null,
};

export type DeleteRoyaltyMutation = {
  deleteRoyalty?:  {
    __typename: "Royalty",
    id: string,
    amount: number,
    source: string,
    date: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistRoyaltiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreatePitchMutationVariables = {
  input: CreatePitchInput,
  condition?: ModelPitchConditionInput | null,
};

export type CreatePitchMutation = {
  createPitch?:  {
    __typename: "Pitch",
    id: string,
    title: string,
    description: string,
    audioFileUrl?: string | null,
    status: PitchStatus,
    submissionDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistPitchesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePitchMutationVariables = {
  input: UpdatePitchInput,
  condition?: ModelPitchConditionInput | null,
};

export type UpdatePitchMutation = {
  updatePitch?:  {
    __typename: "Pitch",
    id: string,
    title: string,
    description: string,
    audioFileUrl?: string | null,
    status: PitchStatus,
    submissionDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistPitchesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePitchMutationVariables = {
  input: DeletePitchInput,
  condition?: ModelPitchConditionInput | null,
};

export type DeletePitchMutation = {
  deletePitch?:  {
    __typename: "Pitch",
    id: string,
    title: string,
    description: string,
    audioFileUrl?: string | null,
    status: PitchStatus,
    submissionDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistPitchesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateConnectionMutationVariables = {
  input: CreateConnectionInput,
  condition?: ModelConnectionConditionInput | null,
};

export type CreateConnectionMutation = {
  createConnection?:  {
    __typename: "Connection",
    id: string,
    name: string,
    role: string,
    email?: string | null,
    status: ConnectionStatus,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistConnectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateConnectionMutationVariables = {
  input: UpdateConnectionInput,
  condition?: ModelConnectionConditionInput | null,
};

export type UpdateConnectionMutation = {
  updateConnection?:  {
    __typename: "Connection",
    id: string,
    name: string,
    role: string,
    email?: string | null,
    status: ConnectionStatus,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistConnectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteConnectionMutationVariables = {
  input: DeleteConnectionInput,
  condition?: ModelConnectionConditionInput | null,
};

export type DeleteConnectionMutation = {
  deleteConnection?:  {
    __typename: "Connection",
    id: string,
    name: string,
    role: string,
    email?: string | null,
    status: ConnectionStatus,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistConnectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateEducationProgressMutationVariables = {
  input: CreateEducationProgressInput,
  condition?: ModelEducationProgressConditionInput | null,
};

export type CreateEducationProgressMutation = {
  createEducationProgress?:  {
    __typename: "EducationProgress",
    id: string,
    completedLessons: number,
    lastAccessedDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    course?:  {
      __typename: "Course",
      id: string,
      title: string,
      description: string,
      content?: string | null,
      totalLessons: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistEducationProgressId?: string | null,
    courseEducationProgressId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateEducationProgressMutationVariables = {
  input: UpdateEducationProgressInput,
  condition?: ModelEducationProgressConditionInput | null,
};

export type UpdateEducationProgressMutation = {
  updateEducationProgress?:  {
    __typename: "EducationProgress",
    id: string,
    completedLessons: number,
    lastAccessedDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    course?:  {
      __typename: "Course",
      id: string,
      title: string,
      description: string,
      content?: string | null,
      totalLessons: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistEducationProgressId?: string | null,
    courseEducationProgressId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteEducationProgressMutationVariables = {
  input: DeleteEducationProgressInput,
  condition?: ModelEducationProgressConditionInput | null,
};

export type DeleteEducationProgressMutation = {
  deleteEducationProgress?:  {
    __typename: "EducationProgress",
    id: string,
    completedLessons: number,
    lastAccessedDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    course?:  {
      __typename: "Course",
      id: string,
      title: string,
      description: string,
      content?: string | null,
      totalLessons: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistEducationProgressId?: string | null,
    courseEducationProgressId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateAnalyticsEventMutationVariables = {
  input: CreateAnalyticsEventInput,
  condition?: ModelAnalyticsEventConditionInput | null,
};

export type CreateAnalyticsEventMutation = {
  createAnalyticsEvent?:  {
    __typename: "AnalyticsEvent",
    id: string,
    eventType: string,
    eventData?: string | null,
    timestamp: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAnalyticsEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateAnalyticsEventMutationVariables = {
  input: UpdateAnalyticsEventInput,
  condition?: ModelAnalyticsEventConditionInput | null,
};

export type UpdateAnalyticsEventMutation = {
  updateAnalyticsEvent?:  {
    __typename: "AnalyticsEvent",
    id: string,
    eventType: string,
    eventData?: string | null,
    timestamp: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAnalyticsEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteAnalyticsEventMutationVariables = {
  input: DeleteAnalyticsEventInput,
  condition?: ModelAnalyticsEventConditionInput | null,
};

export type DeleteAnalyticsEventMutation = {
  deleteAnalyticsEvent?:  {
    __typename: "AnalyticsEvent",
    id: string,
    eventType: string,
    eventData?: string | null,
    timestamp: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAnalyticsEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateLegalDocumentMutationVariables = {
  input: CreateLegalDocumentInput,
  condition?: ModelLegalDocumentConditionInput | null,
};

export type CreateLegalDocumentMutation = {
  createLegalDocument?:  {
    __typename: "LegalDocument",
    id: string,
    title: string,
    description?: string | null,
    fileUrl: string,
    status: DocumentStatus,
    uploadDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistLegalDocumentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateLegalDocumentMutationVariables = {
  input: UpdateLegalDocumentInput,
  condition?: ModelLegalDocumentConditionInput | null,
};

export type UpdateLegalDocumentMutation = {
  updateLegalDocument?:  {
    __typename: "LegalDocument",
    id: string,
    title: string,
    description?: string | null,
    fileUrl: string,
    status: DocumentStatus,
    uploadDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistLegalDocumentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteLegalDocumentMutationVariables = {
  input: DeleteLegalDocumentInput,
  condition?: ModelLegalDocumentConditionInput | null,
};

export type DeleteLegalDocumentMutation = {
  deleteLegalDocument?:  {
    __typename: "LegalDocument",
    id: string,
    title: string,
    description?: string | null,
    fileUrl: string,
    status: DocumentStatus,
    uploadDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistLegalDocumentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description: string,
    content?: string | null,
    totalLessons: number,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      title: string,
      description: string,
      content?: string | null,
      totalLessons: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArtistQueryVariables = {
  id: string,
};

export type GetArtistQuery = {
  getArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    genres?: Array< string | null > | null,
    socialLinks?: string | null,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    royalties?:  {
      __typename: "ModelRoyaltyConnection",
      nextToken?: string | null,
    } | null,
    pitches?:  {
      __typename: "ModelPitchConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    analyticsEvents?:  {
      __typename: "ModelAnalyticsEventConnection",
      nextToken?: string | null,
    } | null,
    legalDocuments?:  {
      __typename: "ModelLegalDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistWalletId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListArtistsQueryVariables = {
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArtistsQuery = {
  listArtists?:  {
    __typename: "ModelArtistConnection",
    items:  Array< {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWalletQueryVariables = {
  id: string,
};

export type GetWalletQuery = {
  getWallet?:  {
    __typename: "Wallet",
    id: string,
    balance: number,
    currency: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletArtistId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListWalletsQueryVariables = {
  filter?: ModelWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWalletsQuery = {
  listWallets?:  {
    __typename: "ModelWalletConnection",
    items:  Array< {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount: number,
    type: TransactionType,
    description?: string | null,
    date: string,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletTransactionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      type: TransactionType,
      description?: string | null,
      date: string,
      createdAt: string,
      updatedAt: string,
      walletTransactionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoyaltyQueryVariables = {
  id: string,
};

export type GetRoyaltyQuery = {
  getRoyalty?:  {
    __typename: "Royalty",
    id: string,
    amount: number,
    source: string,
    date: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistRoyaltiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListRoyaltiesQueryVariables = {
  filter?: ModelRoyaltyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoyaltiesQuery = {
  listRoyalties?:  {
    __typename: "ModelRoyaltyConnection",
    items:  Array< {
      __typename: "Royalty",
      id: string,
      amount: number,
      source: string,
      date: string,
      createdAt: string,
      updatedAt: string,
      artistRoyaltiesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPitchQueryVariables = {
  id: string,
};

export type GetPitchQuery = {
  getPitch?:  {
    __typename: "Pitch",
    id: string,
    title: string,
    description: string,
    audioFileUrl?: string | null,
    status: PitchStatus,
    submissionDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistPitchesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPitchesQueryVariables = {
  filter?: ModelPitchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPitchesQuery = {
  listPitches?:  {
    __typename: "ModelPitchConnection",
    items:  Array< {
      __typename: "Pitch",
      id: string,
      title: string,
      description: string,
      audioFileUrl?: string | null,
      status: PitchStatus,
      submissionDate: string,
      createdAt: string,
      updatedAt: string,
      artistPitchesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConnectionQueryVariables = {
  id: string,
};

export type GetConnectionQuery = {
  getConnection?:  {
    __typename: "Connection",
    id: string,
    name: string,
    role: string,
    email?: string | null,
    status: ConnectionStatus,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistConnectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListConnectionsQueryVariables = {
  filter?: ModelConnectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConnectionsQuery = {
  listConnections?:  {
    __typename: "ModelConnectionConnection",
    items:  Array< {
      __typename: "Connection",
      id: string,
      name: string,
      role: string,
      email?: string | null,
      status: ConnectionStatus,
      createdAt: string,
      updatedAt: string,
      artistConnectionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEducationProgressQueryVariables = {
  id: string,
};

export type GetEducationProgressQuery = {
  getEducationProgress?:  {
    __typename: "EducationProgress",
    id: string,
    completedLessons: number,
    lastAccessedDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    course?:  {
      __typename: "Course",
      id: string,
      title: string,
      description: string,
      content?: string | null,
      totalLessons: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistEducationProgressId?: string | null,
    courseEducationProgressId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListEducationProgressesQueryVariables = {
  filter?: ModelEducationProgressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEducationProgressesQuery = {
  listEducationProgresses?:  {
    __typename: "ModelEducationProgressConnection",
    items:  Array< {
      __typename: "EducationProgress",
      id: string,
      completedLessons: number,
      lastAccessedDate: string,
      createdAt: string,
      updatedAt: string,
      artistEducationProgressId?: string | null,
      courseEducationProgressId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAnalyticsEventQueryVariables = {
  id: string,
};

export type GetAnalyticsEventQuery = {
  getAnalyticsEvent?:  {
    __typename: "AnalyticsEvent",
    id: string,
    eventType: string,
    eventData?: string | null,
    timestamp: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAnalyticsEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListAnalyticsEventsQueryVariables = {
  filter?: ModelAnalyticsEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnalyticsEventsQuery = {
  listAnalyticsEvents?:  {
    __typename: "ModelAnalyticsEventConnection",
    items:  Array< {
      __typename: "AnalyticsEvent",
      id: string,
      eventType: string,
      eventData?: string | null,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
      artistAnalyticsEventsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLegalDocumentQueryVariables = {
  id: string,
};

export type GetLegalDocumentQuery = {
  getLegalDocument?:  {
    __typename: "LegalDocument",
    id: string,
    title: string,
    description?: string | null,
    fileUrl: string,
    status: DocumentStatus,
    uploadDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistLegalDocumentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListLegalDocumentsQueryVariables = {
  filter?: ModelLegalDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLegalDocumentsQuery = {
  listLegalDocuments?:  {
    __typename: "ModelLegalDocumentConnection",
    items:  Array< {
      __typename: "LegalDocument",
      id: string,
      title: string,
      description?: string | null,
      fileUrl: string,
      status: DocumentStatus,
      uploadDate: string,
      createdAt: string,
      updatedAt: string,
      artistLegalDocumentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description: string,
    content?: string | null,
    totalLessons: number,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description: string,
    content?: string | null,
    totalLessons: number,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    description: string,
    content?: string | null,
    totalLessons: number,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
  owner?: string | null,
};

export type OnCreateArtistSubscription = {
  onCreateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    genres?: Array< string | null > | null,
    socialLinks?: string | null,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    royalties?:  {
      __typename: "ModelRoyaltyConnection",
      nextToken?: string | null,
    } | null,
    pitches?:  {
      __typename: "ModelPitchConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    analyticsEvents?:  {
      __typename: "ModelAnalyticsEventConnection",
      nextToken?: string | null,
    } | null,
    legalDocuments?:  {
      __typename: "ModelLegalDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistWalletId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
  owner?: string | null,
};

export type OnUpdateArtistSubscription = {
  onUpdateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    genres?: Array< string | null > | null,
    socialLinks?: string | null,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    royalties?:  {
      __typename: "ModelRoyaltyConnection",
      nextToken?: string | null,
    } | null,
    pitches?:  {
      __typename: "ModelPitchConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    analyticsEvents?:  {
      __typename: "ModelAnalyticsEventConnection",
      nextToken?: string | null,
    } | null,
    legalDocuments?:  {
      __typename: "ModelLegalDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistWalletId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
  owner?: string | null,
};

export type OnDeleteArtistSubscription = {
  onDeleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    genres?: Array< string | null > | null,
    socialLinks?: string | null,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    royalties?:  {
      __typename: "ModelRoyaltyConnection",
      nextToken?: string | null,
    } | null,
    pitches?:  {
      __typename: "ModelPitchConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    educationProgress?:  {
      __typename: "ModelEducationProgressConnection",
      nextToken?: string | null,
    } | null,
    analyticsEvents?:  {
      __typename: "ModelAnalyticsEventConnection",
      nextToken?: string | null,
    } | null,
    legalDocuments?:  {
      __typename: "ModelLegalDocumentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistWalletId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateWalletSubscriptionVariables = {
  filter?: ModelSubscriptionWalletFilterInput | null,
  owner?: string | null,
};

export type OnCreateWalletSubscription = {
  onCreateWallet?:  {
    __typename: "Wallet",
    id: string,
    balance: number,
    currency: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletArtistId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateWalletSubscriptionVariables = {
  filter?: ModelSubscriptionWalletFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWalletSubscription = {
  onUpdateWallet?:  {
    __typename: "Wallet",
    id: string,
    balance: number,
    currency: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletArtistId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteWalletSubscriptionVariables = {
  filter?: ModelSubscriptionWalletFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWalletSubscription = {
  onDeleteWallet?:  {
    __typename: "Wallet",
    id: string,
    balance: number,
    currency: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletArtistId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount: number,
    type: TransactionType,
    description?: string | null,
    date: string,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletTransactionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount: number,
    type: TransactionType,
    description?: string | null,
    date: string,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletTransactionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount: number,
    type: TransactionType,
    description?: string | null,
    date: string,
    wallet?:  {
      __typename: "Wallet",
      id: string,
      balance: number,
      currency: string,
      createdAt: string,
      updatedAt: string,
      walletArtistId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    walletTransactionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateRoyaltySubscriptionVariables = {
  filter?: ModelSubscriptionRoyaltyFilterInput | null,
  owner?: string | null,
};

export type OnCreateRoyaltySubscription = {
  onCreateRoyalty?:  {
    __typename: "Royalty",
    id: string,
    amount: number,
    source: string,
    date: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistRoyaltiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateRoyaltySubscriptionVariables = {
  filter?: ModelSubscriptionRoyaltyFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRoyaltySubscription = {
  onUpdateRoyalty?:  {
    __typename: "Royalty",
    id: string,
    amount: number,
    source: string,
    date: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistRoyaltiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteRoyaltySubscriptionVariables = {
  filter?: ModelSubscriptionRoyaltyFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRoyaltySubscription = {
  onDeleteRoyalty?:  {
    __typename: "Royalty",
    id: string,
    amount: number,
    source: string,
    date: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistRoyaltiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreatePitchSubscriptionVariables = {
  filter?: ModelSubscriptionPitchFilterInput | null,
  owner?: string | null,
};

export type OnCreatePitchSubscription = {
  onCreatePitch?:  {
    __typename: "Pitch",
    id: string,
    title: string,
    description: string,
    audioFileUrl?: string | null,
    status: PitchStatus,
    submissionDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistPitchesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePitchSubscriptionVariables = {
  filter?: ModelSubscriptionPitchFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePitchSubscription = {
  onUpdatePitch?:  {
    __typename: "Pitch",
    id: string,
    title: string,
    description: string,
    audioFileUrl?: string | null,
    status: PitchStatus,
    submissionDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistPitchesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePitchSubscriptionVariables = {
  filter?: ModelSubscriptionPitchFilterInput | null,
  owner?: string | null,
};

export type OnDeletePitchSubscription = {
  onDeletePitch?:  {
    __typename: "Pitch",
    id: string,
    title: string,
    description: string,
    audioFileUrl?: string | null,
    status: PitchStatus,
    submissionDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistPitchesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateConnectionSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionFilterInput | null,
  owner?: string | null,
};

export type OnCreateConnectionSubscription = {
  onCreateConnection?:  {
    __typename: "Connection",
    id: string,
    name: string,
    role: string,
    email?: string | null,
    status: ConnectionStatus,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistConnectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateConnectionSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateConnectionSubscription = {
  onUpdateConnection?:  {
    __typename: "Connection",
    id: string,
    name: string,
    role: string,
    email?: string | null,
    status: ConnectionStatus,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistConnectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteConnectionSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteConnectionSubscription = {
  onDeleteConnection?:  {
    __typename: "Connection",
    id: string,
    name: string,
    role: string,
    email?: string | null,
    status: ConnectionStatus,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistConnectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateEducationProgressSubscriptionVariables = {
  filter?: ModelSubscriptionEducationProgressFilterInput | null,
  owner?: string | null,
};

export type OnCreateEducationProgressSubscription = {
  onCreateEducationProgress?:  {
    __typename: "EducationProgress",
    id: string,
    completedLessons: number,
    lastAccessedDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    course?:  {
      __typename: "Course",
      id: string,
      title: string,
      description: string,
      content?: string | null,
      totalLessons: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistEducationProgressId?: string | null,
    courseEducationProgressId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateEducationProgressSubscriptionVariables = {
  filter?: ModelSubscriptionEducationProgressFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEducationProgressSubscription = {
  onUpdateEducationProgress?:  {
    __typename: "EducationProgress",
    id: string,
    completedLessons: number,
    lastAccessedDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    course?:  {
      __typename: "Course",
      id: string,
      title: string,
      description: string,
      content?: string | null,
      totalLessons: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistEducationProgressId?: string | null,
    courseEducationProgressId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteEducationProgressSubscriptionVariables = {
  filter?: ModelSubscriptionEducationProgressFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEducationProgressSubscription = {
  onDeleteEducationProgress?:  {
    __typename: "EducationProgress",
    id: string,
    completedLessons: number,
    lastAccessedDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    course?:  {
      __typename: "Course",
      id: string,
      title: string,
      description: string,
      content?: string | null,
      totalLessons: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistEducationProgressId?: string | null,
    courseEducationProgressId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateAnalyticsEventSubscriptionVariables = {
  filter?: ModelSubscriptionAnalyticsEventFilterInput | null,
  owner?: string | null,
};

export type OnCreateAnalyticsEventSubscription = {
  onCreateAnalyticsEvent?:  {
    __typename: "AnalyticsEvent",
    id: string,
    eventType: string,
    eventData?: string | null,
    timestamp: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAnalyticsEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateAnalyticsEventSubscriptionVariables = {
  filter?: ModelSubscriptionAnalyticsEventFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAnalyticsEventSubscription = {
  onUpdateAnalyticsEvent?:  {
    __typename: "AnalyticsEvent",
    id: string,
    eventType: string,
    eventData?: string | null,
    timestamp: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAnalyticsEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteAnalyticsEventSubscriptionVariables = {
  filter?: ModelSubscriptionAnalyticsEventFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAnalyticsEventSubscription = {
  onDeleteAnalyticsEvent?:  {
    __typename: "AnalyticsEvent",
    id: string,
    eventType: string,
    eventData?: string | null,
    timestamp: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAnalyticsEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateLegalDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionLegalDocumentFilterInput | null,
  owner?: string | null,
};

export type OnCreateLegalDocumentSubscription = {
  onCreateLegalDocument?:  {
    __typename: "LegalDocument",
    id: string,
    title: string,
    description?: string | null,
    fileUrl: string,
    status: DocumentStatus,
    uploadDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistLegalDocumentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateLegalDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionLegalDocumentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLegalDocumentSubscription = {
  onUpdateLegalDocument?:  {
    __typename: "LegalDocument",
    id: string,
    title: string,
    description?: string | null,
    fileUrl: string,
    status: DocumentStatus,
    uploadDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistLegalDocumentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteLegalDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionLegalDocumentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLegalDocumentSubscription = {
  onDeleteLegalDocument?:  {
    __typename: "LegalDocument",
    id: string,
    title: string,
    description?: string | null,
    fileUrl: string,
    status: DocumentStatus,
    uploadDate: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      genres?: Array< string | null > | null,
      socialLinks?: string | null,
      createdAt: string,
      updatedAt: string,
      artistWalletId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistLegalDocumentsId?: string | null,
    owner?: string | null,
  } | null,
};
