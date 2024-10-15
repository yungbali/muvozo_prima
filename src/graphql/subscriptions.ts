/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCourse = /* GraphQL */ `subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onCreateCourse(filter: $filter) {
    id
    title
    description
    content
    totalLessons
    educationProgress {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseSubscriptionVariables,
  APITypes.OnCreateCourseSubscription
>;
export const onUpdateCourse = /* GraphQL */ `subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onUpdateCourse(filter: $filter) {
    id
    title
    description
    content
    totalLessons
    educationProgress {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSubscriptionVariables,
  APITypes.OnUpdateCourseSubscription
>;
export const onDeleteCourse = /* GraphQL */ `subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
  onDeleteCourse(filter: $filter) {
    id
    title
    description
    content
    totalLessons
    educationProgress {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSubscriptionVariables,
  APITypes.OnDeleteCourseSubscription
>;
export const onCreateArtist = /* GraphQL */ `subscription OnCreateArtist(
  $filter: ModelSubscriptionArtistFilterInput
  $owner: String
) {
  onCreateArtist(filter: $filter, owner: $owner) {
    id
    name
    email
    bio
    genres
    socialLinks
    wallet {
      id
      balance
      currency
      createdAt
      updatedAt
      walletArtistId
      owner
      __typename
    }
    royalties {
      nextToken
      __typename
    }
    pitches {
      nextToken
      __typename
    }
    connections {
      nextToken
      __typename
    }
    educationProgress {
      nextToken
      __typename
    }
    analyticsEvents {
      nextToken
      __typename
    }
    legalDocuments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    artistWalletId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateArtistSubscriptionVariables,
  APITypes.OnCreateArtistSubscription
>;
export const onUpdateArtist = /* GraphQL */ `subscription OnUpdateArtist(
  $filter: ModelSubscriptionArtistFilterInput
  $owner: String
) {
  onUpdateArtist(filter: $filter, owner: $owner) {
    id
    name
    email
    bio
    genres
    socialLinks
    wallet {
      id
      balance
      currency
      createdAt
      updatedAt
      walletArtistId
      owner
      __typename
    }
    royalties {
      nextToken
      __typename
    }
    pitches {
      nextToken
      __typename
    }
    connections {
      nextToken
      __typename
    }
    educationProgress {
      nextToken
      __typename
    }
    analyticsEvents {
      nextToken
      __typename
    }
    legalDocuments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    artistWalletId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateArtistSubscriptionVariables,
  APITypes.OnUpdateArtistSubscription
>;
export const onDeleteArtist = /* GraphQL */ `subscription OnDeleteArtist(
  $filter: ModelSubscriptionArtistFilterInput
  $owner: String
) {
  onDeleteArtist(filter: $filter, owner: $owner) {
    id
    name
    email
    bio
    genres
    socialLinks
    wallet {
      id
      balance
      currency
      createdAt
      updatedAt
      walletArtistId
      owner
      __typename
    }
    royalties {
      nextToken
      __typename
    }
    pitches {
      nextToken
      __typename
    }
    connections {
      nextToken
      __typename
    }
    educationProgress {
      nextToken
      __typename
    }
    analyticsEvents {
      nextToken
      __typename
    }
    legalDocuments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    artistWalletId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteArtistSubscriptionVariables,
  APITypes.OnDeleteArtistSubscription
>;
export const onCreateWallet = /* GraphQL */ `subscription OnCreateWallet(
  $filter: ModelSubscriptionWalletFilterInput
  $owner: String
) {
  onCreateWallet(filter: $filter, owner: $owner) {
    id
    balance
    currency
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    transactions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    walletArtistId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWalletSubscriptionVariables,
  APITypes.OnCreateWalletSubscription
>;
export const onUpdateWallet = /* GraphQL */ `subscription OnUpdateWallet(
  $filter: ModelSubscriptionWalletFilterInput
  $owner: String
) {
  onUpdateWallet(filter: $filter, owner: $owner) {
    id
    balance
    currency
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    transactions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    walletArtistId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWalletSubscriptionVariables,
  APITypes.OnUpdateWalletSubscription
>;
export const onDeleteWallet = /* GraphQL */ `subscription OnDeleteWallet(
  $filter: ModelSubscriptionWalletFilterInput
  $owner: String
) {
  onDeleteWallet(filter: $filter, owner: $owner) {
    id
    balance
    currency
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    transactions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    walletArtistId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWalletSubscriptionVariables,
  APITypes.OnDeleteWalletSubscription
>;
export const onCreateTransaction = /* GraphQL */ `subscription OnCreateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
  $owner: String
) {
  onCreateTransaction(filter: $filter, owner: $owner) {
    id
    amount
    type
    description
    date
    wallet {
      id
      balance
      currency
      createdAt
      updatedAt
      walletArtistId
      owner
      __typename
    }
    createdAt
    updatedAt
    walletTransactionsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTransactionSubscriptionVariables,
  APITypes.OnCreateTransactionSubscription
>;
export const onUpdateTransaction = /* GraphQL */ `subscription OnUpdateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
  $owner: String
) {
  onUpdateTransaction(filter: $filter, owner: $owner) {
    id
    amount
    type
    description
    date
    wallet {
      id
      balance
      currency
      createdAt
      updatedAt
      walletArtistId
      owner
      __typename
    }
    createdAt
    updatedAt
    walletTransactionsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTransactionSubscriptionVariables,
  APITypes.OnUpdateTransactionSubscription
>;
export const onDeleteTransaction = /* GraphQL */ `subscription OnDeleteTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
  $owner: String
) {
  onDeleteTransaction(filter: $filter, owner: $owner) {
    id
    amount
    type
    description
    date
    wallet {
      id
      balance
      currency
      createdAt
      updatedAt
      walletArtistId
      owner
      __typename
    }
    createdAt
    updatedAt
    walletTransactionsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTransactionSubscriptionVariables,
  APITypes.OnDeleteTransactionSubscription
>;
export const onCreateRoyalty = /* GraphQL */ `subscription OnCreateRoyalty(
  $filter: ModelSubscriptionRoyaltyFilterInput
  $owner: String
) {
  onCreateRoyalty(filter: $filter, owner: $owner) {
    id
    amount
    source
    date
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistRoyaltiesId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRoyaltySubscriptionVariables,
  APITypes.OnCreateRoyaltySubscription
>;
export const onUpdateRoyalty = /* GraphQL */ `subscription OnUpdateRoyalty(
  $filter: ModelSubscriptionRoyaltyFilterInput
  $owner: String
) {
  onUpdateRoyalty(filter: $filter, owner: $owner) {
    id
    amount
    source
    date
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistRoyaltiesId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRoyaltySubscriptionVariables,
  APITypes.OnUpdateRoyaltySubscription
>;
export const onDeleteRoyalty = /* GraphQL */ `subscription OnDeleteRoyalty(
  $filter: ModelSubscriptionRoyaltyFilterInput
  $owner: String
) {
  onDeleteRoyalty(filter: $filter, owner: $owner) {
    id
    amount
    source
    date
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistRoyaltiesId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRoyaltySubscriptionVariables,
  APITypes.OnDeleteRoyaltySubscription
>;
export const onCreatePitch = /* GraphQL */ `subscription OnCreatePitch(
  $filter: ModelSubscriptionPitchFilterInput
  $owner: String
) {
  onCreatePitch(filter: $filter, owner: $owner) {
    id
    title
    description
    audioFileUrl
    status
    submissionDate
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistPitchesId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePitchSubscriptionVariables,
  APITypes.OnCreatePitchSubscription
>;
export const onUpdatePitch = /* GraphQL */ `subscription OnUpdatePitch(
  $filter: ModelSubscriptionPitchFilterInput
  $owner: String
) {
  onUpdatePitch(filter: $filter, owner: $owner) {
    id
    title
    description
    audioFileUrl
    status
    submissionDate
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistPitchesId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePitchSubscriptionVariables,
  APITypes.OnUpdatePitchSubscription
>;
export const onDeletePitch = /* GraphQL */ `subscription OnDeletePitch(
  $filter: ModelSubscriptionPitchFilterInput
  $owner: String
) {
  onDeletePitch(filter: $filter, owner: $owner) {
    id
    title
    description
    audioFileUrl
    status
    submissionDate
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistPitchesId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePitchSubscriptionVariables,
  APITypes.OnDeletePitchSubscription
>;
export const onCreateConnection = /* GraphQL */ `subscription OnCreateConnection(
  $filter: ModelSubscriptionConnectionFilterInput
  $owner: String
) {
  onCreateConnection(filter: $filter, owner: $owner) {
    id
    name
    role
    email
    status
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistConnectionsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateConnectionSubscriptionVariables,
  APITypes.OnCreateConnectionSubscription
>;
export const onUpdateConnection = /* GraphQL */ `subscription OnUpdateConnection(
  $filter: ModelSubscriptionConnectionFilterInput
  $owner: String
) {
  onUpdateConnection(filter: $filter, owner: $owner) {
    id
    name
    role
    email
    status
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistConnectionsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateConnectionSubscriptionVariables,
  APITypes.OnUpdateConnectionSubscription
>;
export const onDeleteConnection = /* GraphQL */ `subscription OnDeleteConnection(
  $filter: ModelSubscriptionConnectionFilterInput
  $owner: String
) {
  onDeleteConnection(filter: $filter, owner: $owner) {
    id
    name
    role
    email
    status
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistConnectionsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteConnectionSubscriptionVariables,
  APITypes.OnDeleteConnectionSubscription
>;
export const onCreateEducationProgress = /* GraphQL */ `subscription OnCreateEducationProgress(
  $filter: ModelSubscriptionEducationProgressFilterInput
  $owner: String
) {
  onCreateEducationProgress(filter: $filter, owner: $owner) {
    id
    completedLessons
    lastAccessedDate
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    course {
      id
      title
      description
      content
      totalLessons
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    artistEducationProgressId
    courseEducationProgressId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEducationProgressSubscriptionVariables,
  APITypes.OnCreateEducationProgressSubscription
>;
export const onUpdateEducationProgress = /* GraphQL */ `subscription OnUpdateEducationProgress(
  $filter: ModelSubscriptionEducationProgressFilterInput
  $owner: String
) {
  onUpdateEducationProgress(filter: $filter, owner: $owner) {
    id
    completedLessons
    lastAccessedDate
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    course {
      id
      title
      description
      content
      totalLessons
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    artistEducationProgressId
    courseEducationProgressId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEducationProgressSubscriptionVariables,
  APITypes.OnUpdateEducationProgressSubscription
>;
export const onDeleteEducationProgress = /* GraphQL */ `subscription OnDeleteEducationProgress(
  $filter: ModelSubscriptionEducationProgressFilterInput
  $owner: String
) {
  onDeleteEducationProgress(filter: $filter, owner: $owner) {
    id
    completedLessons
    lastAccessedDate
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    course {
      id
      title
      description
      content
      totalLessons
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    artistEducationProgressId
    courseEducationProgressId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEducationProgressSubscriptionVariables,
  APITypes.OnDeleteEducationProgressSubscription
>;
export const onCreateAnalyticsEvent = /* GraphQL */ `subscription OnCreateAnalyticsEvent(
  $filter: ModelSubscriptionAnalyticsEventFilterInput
  $owner: String
) {
  onCreateAnalyticsEvent(filter: $filter, owner: $owner) {
    id
    eventType
    eventData
    timestamp
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistAnalyticsEventsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAnalyticsEventSubscriptionVariables,
  APITypes.OnCreateAnalyticsEventSubscription
>;
export const onUpdateAnalyticsEvent = /* GraphQL */ `subscription OnUpdateAnalyticsEvent(
  $filter: ModelSubscriptionAnalyticsEventFilterInput
  $owner: String
) {
  onUpdateAnalyticsEvent(filter: $filter, owner: $owner) {
    id
    eventType
    eventData
    timestamp
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistAnalyticsEventsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAnalyticsEventSubscriptionVariables,
  APITypes.OnUpdateAnalyticsEventSubscription
>;
export const onDeleteAnalyticsEvent = /* GraphQL */ `subscription OnDeleteAnalyticsEvent(
  $filter: ModelSubscriptionAnalyticsEventFilterInput
  $owner: String
) {
  onDeleteAnalyticsEvent(filter: $filter, owner: $owner) {
    id
    eventType
    eventData
    timestamp
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistAnalyticsEventsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAnalyticsEventSubscriptionVariables,
  APITypes.OnDeleteAnalyticsEventSubscription
>;
export const onCreateLegalDocument = /* GraphQL */ `subscription OnCreateLegalDocument(
  $filter: ModelSubscriptionLegalDocumentFilterInput
  $owner: String
) {
  onCreateLegalDocument(filter: $filter, owner: $owner) {
    id
    title
    description
    fileUrl
    status
    uploadDate
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistLegalDocumentsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLegalDocumentSubscriptionVariables,
  APITypes.OnCreateLegalDocumentSubscription
>;
export const onUpdateLegalDocument = /* GraphQL */ `subscription OnUpdateLegalDocument(
  $filter: ModelSubscriptionLegalDocumentFilterInput
  $owner: String
) {
  onUpdateLegalDocument(filter: $filter, owner: $owner) {
    id
    title
    description
    fileUrl
    status
    uploadDate
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistLegalDocumentsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLegalDocumentSubscriptionVariables,
  APITypes.OnUpdateLegalDocumentSubscription
>;
export const onDeleteLegalDocument = /* GraphQL */ `subscription OnDeleteLegalDocument(
  $filter: ModelSubscriptionLegalDocumentFilterInput
  $owner: String
) {
  onDeleteLegalDocument(filter: $filter, owner: $owner) {
    id
    title
    description
    fileUrl
    status
    uploadDate
    artist {
      id
      name
      email
      bio
      genres
      socialLinks
      createdAt
      updatedAt
      artistWalletId
      owner
      __typename
    }
    createdAt
    updatedAt
    artistLegalDocumentsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLegalDocumentSubscriptionVariables,
  APITypes.OnDeleteLegalDocumentSubscription
>;
