/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
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
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      content
      totalLessons
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const getArtist = /* GraphQL */ `query GetArtist($id: ID!) {
  getArtist(id: $id) {
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
` as GeneratedQuery<APITypes.GetArtistQueryVariables, APITypes.GetArtistQuery>;
export const listArtists = /* GraphQL */ `query ListArtists(
  $filter: ModelArtistFilterInput
  $limit: Int
  $nextToken: String
) {
  listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArtistsQueryVariables,
  APITypes.ListArtistsQuery
>;
export const getWallet = /* GraphQL */ `query GetWallet($id: ID!) {
  getWallet(id: $id) {
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
` as GeneratedQuery<APITypes.GetWalletQueryVariables, APITypes.GetWalletQuery>;
export const listWallets = /* GraphQL */ `query ListWallets(
  $filter: ModelWalletFilterInput
  $limit: Int
  $nextToken: String
) {
  listWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      balance
      currency
      createdAt
      updatedAt
      walletArtistId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWalletsQueryVariables,
  APITypes.ListWalletsQuery
>;
export const getTransaction = /* GraphQL */ `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTransactionQueryVariables,
  APITypes.GetTransactionQuery
>;
export const listTransactions = /* GraphQL */ `query ListTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      type
      description
      date
      createdAt
      updatedAt
      walletTransactionsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionsQueryVariables,
  APITypes.ListTransactionsQuery
>;
export const getRoyalty = /* GraphQL */ `query GetRoyalty($id: ID!) {
  getRoyalty(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRoyaltyQueryVariables,
  APITypes.GetRoyaltyQuery
>;
export const listRoyalties = /* GraphQL */ `query ListRoyalties(
  $filter: ModelRoyaltyFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoyalties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      source
      date
      createdAt
      updatedAt
      artistRoyaltiesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRoyaltiesQueryVariables,
  APITypes.ListRoyaltiesQuery
>;
export const getPitch = /* GraphQL */ `query GetPitch($id: ID!) {
  getPitch(id: $id) {
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
` as GeneratedQuery<APITypes.GetPitchQueryVariables, APITypes.GetPitchQuery>;
export const listPitches = /* GraphQL */ `query ListPitches(
  $filter: ModelPitchFilterInput
  $limit: Int
  $nextToken: String
) {
  listPitches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      audioFileUrl
      status
      submissionDate
      createdAt
      updatedAt
      artistPitchesId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPitchesQueryVariables,
  APITypes.ListPitchesQuery
>;
export const getConnection = /* GraphQL */ `query GetConnection($id: ID!) {
  getConnection(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetConnectionQueryVariables,
  APITypes.GetConnectionQuery
>;
export const listConnections = /* GraphQL */ `query ListConnections(
  $filter: ModelConnectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      role
      email
      status
      createdAt
      updatedAt
      artistConnectionsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConnectionsQueryVariables,
  APITypes.ListConnectionsQuery
>;
export const getEducationProgress = /* GraphQL */ `query GetEducationProgress($id: ID!) {
  getEducationProgress(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEducationProgressQueryVariables,
  APITypes.GetEducationProgressQuery
>;
export const listEducationProgresses = /* GraphQL */ `query ListEducationProgresses(
  $filter: ModelEducationProgressFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducationProgresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      completedLessons
      lastAccessedDate
      createdAt
      updatedAt
      artistEducationProgressId
      courseEducationProgressId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEducationProgressesQueryVariables,
  APITypes.ListEducationProgressesQuery
>;
export const getAnalyticsEvent = /* GraphQL */ `query GetAnalyticsEvent($id: ID!) {
  getAnalyticsEvent(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAnalyticsEventQueryVariables,
  APITypes.GetAnalyticsEventQuery
>;
export const listAnalyticsEvents = /* GraphQL */ `query ListAnalyticsEvents(
  $filter: ModelAnalyticsEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnalyticsEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      eventType
      eventData
      timestamp
      createdAt
      updatedAt
      artistAnalyticsEventsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAnalyticsEventsQueryVariables,
  APITypes.ListAnalyticsEventsQuery
>;
export const getLegalDocument = /* GraphQL */ `query GetLegalDocument($id: ID!) {
  getLegalDocument(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLegalDocumentQueryVariables,
  APITypes.GetLegalDocumentQuery
>;
export const listLegalDocuments = /* GraphQL */ `query ListLegalDocuments(
  $filter: ModelLegalDocumentFilterInput
  $limit: Int
  $nextToken: String
) {
  listLegalDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      fileUrl
      status
      uploadDate
      createdAt
      updatedAt
      artistLegalDocumentsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLegalDocumentsQueryVariables,
  APITypes.ListLegalDocumentsQuery
>;
