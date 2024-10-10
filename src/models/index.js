// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TransactionType = {
  "DEPOSIT": "DEPOSIT",
  "WITHDRAWAL": "WITHDRAWAL",
  "ROYALTY_PAYMENT": "ROYALTY_PAYMENT"
};

const PitchStatus = {
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED",
  "REJECTED": "REJECTED"
};

const ConnectionStatus = {
  "PENDING": "PENDING",
  "CONNECTED": "CONNECTED"
};

const DocumentStatus = {
  "DRAFT": "DRAFT",
  "SIGNED": "SIGNED",
  "EXPIRED": "EXPIRED"
};

const { Artist, Wallet, Transaction, Royalty, Pitch, Connection, Course, EducationProgress, AnalyticsEvent, LegalDocument } = initSchema(schema);

export {
  Artist,
  Wallet,
  Transaction,
  Royalty,
  Pitch,
  Connection,
  Course,
  EducationProgress,
  AnalyticsEvent,
  LegalDocument,
  TransactionType,
  PitchStatus,
  ConnectionStatus,
  DocumentStatus
};