/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCourse = /* GraphQL */ `mutation CreateCourse(
  $input: CreateCourseInput!
  $condition: ModelCourseConditionInput
) {
  createCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCourseMutationVariables,
  APITypes.CreateCourseMutation
>;
export const updateCourse = /* GraphQL */ `mutation UpdateCourse(
  $input: UpdateCourseInput!
  $condition: ModelCourseConditionInput
) {
  updateCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCourseMutationVariables,
  APITypes.UpdateCourseMutation
>;
export const deleteCourse = /* GraphQL */ `mutation DeleteCourse(
  $input: DeleteCourseInput!
  $condition: ModelCourseConditionInput
) {
  deleteCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCourseMutationVariables,
  APITypes.DeleteCourseMutation
>;
export const createArtist = /* GraphQL */ `mutation CreateArtist(
  $input: CreateArtistInput!
  $condition: ModelArtistConditionInput
) {
  createArtist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateArtistMutationVariables,
  APITypes.CreateArtistMutation
>;
export const updateArtist = /* GraphQL */ `mutation UpdateArtist(
  $input: UpdateArtistInput!
  $condition: ModelArtistConditionInput
) {
  updateArtist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateArtistMutationVariables,
  APITypes.UpdateArtistMutation
>;
export const deleteArtist = /* GraphQL */ `mutation DeleteArtist(
  $input: DeleteArtistInput!
  $condition: ModelArtistConditionInput
) {
  deleteArtist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteArtistMutationVariables,
  APITypes.DeleteArtistMutation
>;
export const createWallet = /* GraphQL */ `mutation CreateWallet(
  $input: CreateWalletInput!
  $condition: ModelWalletConditionInput
) {
  createWallet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateWalletMutationVariables,
  APITypes.CreateWalletMutation
>;
export const updateWallet = /* GraphQL */ `mutation UpdateWallet(
  $input: UpdateWalletInput!
  $condition: ModelWalletConditionInput
) {
  updateWallet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateWalletMutationVariables,
  APITypes.UpdateWalletMutation
>;
export const deleteWallet = /* GraphQL */ `mutation DeleteWallet(
  $input: DeleteWalletInput!
  $condition: ModelWalletConditionInput
) {
  deleteWallet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteWalletMutationVariables,
  APITypes.DeleteWalletMutation
>;
export const createTransaction = /* GraphQL */ `mutation CreateTransaction(
  $input: CreateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  createTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTransactionMutationVariables,
  APITypes.CreateTransactionMutation
>;
export const updateTransaction = /* GraphQL */ `mutation UpdateTransaction(
  $input: UpdateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  updateTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTransactionMutationVariables,
  APITypes.UpdateTransactionMutation
>;
export const deleteTransaction = /* GraphQL */ `mutation DeleteTransaction(
  $input: DeleteTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  deleteTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTransactionMutationVariables,
  APITypes.DeleteTransactionMutation
>;
export const createRoyalty = /* GraphQL */ `mutation CreateRoyalty(
  $input: CreateRoyaltyInput!
  $condition: ModelRoyaltyConditionInput
) {
  createRoyalty(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRoyaltyMutationVariables,
  APITypes.CreateRoyaltyMutation
>;
export const updateRoyalty = /* GraphQL */ `mutation UpdateRoyalty(
  $input: UpdateRoyaltyInput!
  $condition: ModelRoyaltyConditionInput
) {
  updateRoyalty(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRoyaltyMutationVariables,
  APITypes.UpdateRoyaltyMutation
>;
export const deleteRoyalty = /* GraphQL */ `mutation DeleteRoyalty(
  $input: DeleteRoyaltyInput!
  $condition: ModelRoyaltyConditionInput
) {
  deleteRoyalty(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRoyaltyMutationVariables,
  APITypes.DeleteRoyaltyMutation
>;
export const createPitch = /* GraphQL */ `mutation CreatePitch(
  $input: CreatePitchInput!
  $condition: ModelPitchConditionInput
) {
  createPitch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePitchMutationVariables,
  APITypes.CreatePitchMutation
>;
export const updatePitch = /* GraphQL */ `mutation UpdatePitch(
  $input: UpdatePitchInput!
  $condition: ModelPitchConditionInput
) {
  updatePitch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePitchMutationVariables,
  APITypes.UpdatePitchMutation
>;
export const deletePitch = /* GraphQL */ `mutation DeletePitch(
  $input: DeletePitchInput!
  $condition: ModelPitchConditionInput
) {
  deletePitch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePitchMutationVariables,
  APITypes.DeletePitchMutation
>;
export const createConnection = /* GraphQL */ `mutation CreateConnection(
  $input: CreateConnectionInput!
  $condition: ModelConnectionConditionInput
) {
  createConnection(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateConnectionMutationVariables,
  APITypes.CreateConnectionMutation
>;
export const updateConnection = /* GraphQL */ `mutation UpdateConnection(
  $input: UpdateConnectionInput!
  $condition: ModelConnectionConditionInput
) {
  updateConnection(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateConnectionMutationVariables,
  APITypes.UpdateConnectionMutation
>;
export const deleteConnection = /* GraphQL */ `mutation DeleteConnection(
  $input: DeleteConnectionInput!
  $condition: ModelConnectionConditionInput
) {
  deleteConnection(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteConnectionMutationVariables,
  APITypes.DeleteConnectionMutation
>;
export const createEducationProgress = /* GraphQL */ `mutation CreateEducationProgress(
  $input: CreateEducationProgressInput!
  $condition: ModelEducationProgressConditionInput
) {
  createEducationProgress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEducationProgressMutationVariables,
  APITypes.CreateEducationProgressMutation
>;
export const updateEducationProgress = /* GraphQL */ `mutation UpdateEducationProgress(
  $input: UpdateEducationProgressInput!
  $condition: ModelEducationProgressConditionInput
) {
  updateEducationProgress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEducationProgressMutationVariables,
  APITypes.UpdateEducationProgressMutation
>;
export const deleteEducationProgress = /* GraphQL */ `mutation DeleteEducationProgress(
  $input: DeleteEducationProgressInput!
  $condition: ModelEducationProgressConditionInput
) {
  deleteEducationProgress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEducationProgressMutationVariables,
  APITypes.DeleteEducationProgressMutation
>;
export const createAnalyticsEvent = /* GraphQL */ `mutation CreateAnalyticsEvent(
  $input: CreateAnalyticsEventInput!
  $condition: ModelAnalyticsEventConditionInput
) {
  createAnalyticsEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAnalyticsEventMutationVariables,
  APITypes.CreateAnalyticsEventMutation
>;
export const updateAnalyticsEvent = /* GraphQL */ `mutation UpdateAnalyticsEvent(
  $input: UpdateAnalyticsEventInput!
  $condition: ModelAnalyticsEventConditionInput
) {
  updateAnalyticsEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAnalyticsEventMutationVariables,
  APITypes.UpdateAnalyticsEventMutation
>;
export const deleteAnalyticsEvent = /* GraphQL */ `mutation DeleteAnalyticsEvent(
  $input: DeleteAnalyticsEventInput!
  $condition: ModelAnalyticsEventConditionInput
) {
  deleteAnalyticsEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAnalyticsEventMutationVariables,
  APITypes.DeleteAnalyticsEventMutation
>;
export const createLegalDocument = /* GraphQL */ `mutation CreateLegalDocument(
  $input: CreateLegalDocumentInput!
  $condition: ModelLegalDocumentConditionInput
) {
  createLegalDocument(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLegalDocumentMutationVariables,
  APITypes.CreateLegalDocumentMutation
>;
export const updateLegalDocument = /* GraphQL */ `mutation UpdateLegalDocument(
  $input: UpdateLegalDocumentInput!
  $condition: ModelLegalDocumentConditionInput
) {
  updateLegalDocument(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLegalDocumentMutationVariables,
  APITypes.UpdateLegalDocumentMutation
>;
export const deleteLegalDocument = /* GraphQL */ `mutation DeleteLegalDocument(
  $input: DeleteLegalDocumentInput!
  $condition: ModelLegalDocumentConditionInput
) {
  deleteLegalDocument(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLegalDocumentMutationVariables,
  APITypes.DeleteLegalDocumentMutation
>;
