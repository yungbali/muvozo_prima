import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-expect-error - Suppressing type error due to auto-generated code
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum TransactionType {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
  ROYALTY_PAYMENT = "ROYALTY_PAYMENT"
}

export enum PitchStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

export enum ConnectionStatus {
  PENDING = "PENDING",
  CONNECTED = "CONNECTED"
}

export enum DocumentStatus {
  DRAFT = "DRAFT",
  SIGNED = "SIGNED",
  EXPIRED = "EXPIRED"
}



type EagerArtist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Artist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly bio?: string | null;
  readonly genres?: (string | null)[] | null;
  readonly socialLinks?: string | null;
  readonly wallet?: Wallet | null;
  readonly royalties?: (Royalty | null)[] | null;
  readonly pitches?: (Pitch | null)[] | null;
  readonly connections?: (Connection | null)[] | null;
  readonly educationProgress?: (EducationProgress | null)[] | null;
  readonly analyticsEvents?: (AnalyticsEvent | null)[] | null;
  readonly legalDocuments?: (LegalDocument | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistWalletId?: string | null;
}

type LazyArtist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Artist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly bio?: string | null;
  readonly genres?: (string | null)[] | null;
  readonly socialLinks?: string | null;
  readonly wallet: AsyncItem<Wallet | undefined>;
  readonly royalties: AsyncCollection<Royalty>;
  readonly pitches: AsyncCollection<Pitch>;
  readonly connections: AsyncCollection<Connection>;
  readonly educationProgress: AsyncCollection<EducationProgress>;
  readonly analyticsEvents: AsyncCollection<AnalyticsEvent>;
  readonly legalDocuments: AsyncCollection<LegalDocument>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistWalletId?: string | null;
}

export declare type Artist = LazyLoading extends LazyLoadingDisabled ? EagerArtist : LazyArtist

export declare const Artist: (new (init: ModelInit<Artist>) => Artist) & {
  copyOf(source: Artist, mutator: (draft: MutableModel<Artist>) => MutableModel<Artist> | void): Artist;
}

type EagerWallet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wallet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly balance: number;
  readonly currency: string;
  readonly artist?: Artist | null;
  readonly transactions?: (Transaction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly walletArtistId?: string | null;
}

type LazyWallet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wallet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly balance: number;
  readonly currency: string;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly transactions: AsyncCollection<Transaction>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly walletArtistId?: string | null;
}

export declare type Wallet = LazyLoading extends LazyLoadingDisabled ? EagerWallet : LazyWallet

export declare const Wallet: (new (init: ModelInit<Wallet>) => Wallet) & {
  copyOf(source: Wallet, mutator: (draft: MutableModel<Wallet>) => MutableModel<Wallet> | void): Wallet;
}

type EagerTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly type: TransactionType | keyof typeof TransactionType;
  readonly description?: string | null;
  readonly date: string;
  readonly wallet?: Wallet | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly walletTransactionsId?: string | null;
}

type LazyTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly type: TransactionType | keyof typeof TransactionType;
  readonly description?: string | null;
  readonly date: string;
  readonly wallet: AsyncItem<Wallet | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly walletTransactionsId?: string | null;
}

export declare type Transaction = LazyLoading extends LazyLoadingDisabled ? EagerTransaction : LazyTransaction

export declare const Transaction: (new (init: ModelInit<Transaction>) => Transaction) & {
  copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

type EagerRoyalty = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Royalty, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly source: string;
  readonly date: string;
  readonly artist?: Artist | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistRoyaltiesId?: string | null;
}

type LazyRoyalty = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Royalty, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly source: string;
  readonly date: string;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistRoyaltiesId?: string | null;
}

export declare type Royalty = LazyLoading extends LazyLoadingDisabled ? EagerRoyalty : LazyRoyalty

export declare const Royalty: (new (init: ModelInit<Royalty>) => Royalty) & {
  copyOf(source: Royalty, mutator: (draft: MutableModel<Royalty>) => MutableModel<Royalty> | void): Royalty;
}

type EagerPitch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pitch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly audioFileUrl?: string | null;
  readonly status: PitchStatus | keyof typeof PitchStatus;
  readonly submissionDate: string;
  readonly artist?: Artist | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistPitchesId?: string | null;
}

type LazyPitch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pitch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly audioFileUrl?: string | null;
  readonly status: PitchStatus | keyof typeof PitchStatus;
  readonly submissionDate: string;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistPitchesId?: string | null;
}

export declare type Pitch = LazyLoading extends LazyLoadingDisabled ? EagerPitch : LazyPitch

export declare const Pitch: (new (init: ModelInit<Pitch>) => Pitch) & {
  copyOf(source: Pitch, mutator: (draft: MutableModel<Pitch>) => MutableModel<Pitch> | void): Pitch;
}

type EagerConnection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Connection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly email?: string | null;
  readonly status: ConnectionStatus | keyof typeof ConnectionStatus;
  readonly artist?: Artist | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistConnectionsId?: string | null;
}

type LazyConnection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Connection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly email?: string | null;
  readonly status: ConnectionStatus | keyof typeof ConnectionStatus;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistConnectionsId?: string | null;
}

export declare type Connection = LazyLoading extends LazyLoadingDisabled ? EagerConnection : LazyConnection

export declare const Connection: (new (init: ModelInit<Connection>) => Connection) & {
  copyOf(source: Connection, mutator: (draft: MutableModel<Connection>) => MutableModel<Connection> | void): Connection;
}

type EagerCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly content?: string | null;
  readonly totalLessons: number;
  readonly educationProgress?: (EducationProgress | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly content?: string | null;
  readonly totalLessons: number;
  readonly educationProgress: AsyncCollection<EducationProgress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Course = LazyLoading extends LazyLoadingDisabled ? EagerCourse : LazyCourse

export declare const Course: (new (init: ModelInit<Course>) => Course) & {
  copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

type EagerEducationProgress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EducationProgress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly completedLessons: number;
  readonly lastAccessedDate: string;
  readonly artist?: Artist | null;
  readonly course?: Course | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistEducationProgressId?: string | null;
  readonly courseEducationProgressId?: string | null;
}

type LazyEducationProgress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EducationProgress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly completedLessons: number;
  readonly lastAccessedDate: string;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly course: AsyncItem<Course | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistEducationProgressId?: string | null;
  readonly courseEducationProgressId?: string | null;
}

export declare type EducationProgress = LazyLoading extends LazyLoadingDisabled ? EagerEducationProgress : LazyEducationProgress

export declare const EducationProgress: (new (init: ModelInit<EducationProgress>) => EducationProgress) & {
  copyOf(source: EducationProgress, mutator: (draft: MutableModel<EducationProgress>) => MutableModel<EducationProgress> | void): EducationProgress;
}

type EagerAnalyticsEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AnalyticsEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventType: string;
  readonly eventData?: string | null;
  readonly timestamp: string;
  readonly artist?: Artist | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistAnalyticsEventsId?: string | null;
}

type LazyAnalyticsEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AnalyticsEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventType: string;
  readonly eventData?: string | null;
  readonly timestamp: string;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistAnalyticsEventsId?: string | null;
}

export declare type AnalyticsEvent = LazyLoading extends LazyLoadingDisabled ? EagerAnalyticsEvent : LazyAnalyticsEvent

export declare const AnalyticsEvent: (new (init: ModelInit<AnalyticsEvent>) => AnalyticsEvent) & {
  copyOf(source: AnalyticsEvent, mutator: (draft: MutableModel<AnalyticsEvent>) => MutableModel<AnalyticsEvent> | void): AnalyticsEvent;
}

type EagerLegalDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LegalDocument, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly fileUrl: string;
  readonly status: DocumentStatus | keyof typeof DocumentStatus;
  readonly uploadDate: string;
  readonly artist?: Artist | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistLegalDocumentsId?: string | null;
}

type LazyLegalDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LegalDocument, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly fileUrl: string;
  readonly status: DocumentStatus | keyof typeof DocumentStatus;
  readonly uploadDate: string;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistLegalDocumentsId?: string | null;
}

export declare type LegalDocument = LazyLoading extends LazyLoadingDisabled ? EagerLegalDocument : LazyLegalDocument

export declare const LegalDocument: (new (init: ModelInit<LegalDocument>) => LegalDocument) & {
  copyOf(source: LegalDocument, mutator: (draft: MutableModel<LegalDocument>) => MutableModel<LegalDocument> | void): LegalDocument;
}