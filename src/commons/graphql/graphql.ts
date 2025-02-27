/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Board = {
  __typename?: 'Board';
  _id: Scalars['ID']['output'];
  boardAddress?: Maybe<BoardAddress>;
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  dislikeCount: Scalars['Int']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  likeCount: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  writer?: Maybe<Scalars['String']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type BoardAddress = {
  __typename?: 'BoardAddress';
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  addressDetail?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type BoardAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressDetail?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type BoardComment = {
  __typename?: 'BoardComment';
  _id: Scalars['ID']['output'];
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  rating: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  writer?: Maybe<Scalars['String']['output']>;
};

export type CreateBoardCommentInput = {
  contents: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Float']['input'];
  writer?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBoardInput = {
  boardAddress?: InputMaybe<BoardAddressInput>;
  contents: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  password?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  writer?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTravelproductInput = {
  contents: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  remarks: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  travelproductAddress?: InputMaybe<TravelproductAddressInput>;
};

export type CreateTravelproductQuestionAnswerInput = {
  contents: Scalars['String']['input'];
};

export type CreateTravelproductQuestionInput = {
  contents: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type FileManager = {
  __typename?: 'FileManager';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  isUsed: Scalars['Boolean']['output'];
  size?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard: Board;
  createBoardComment: BoardComment;
  createPointTransactionOfBuyingAndSelling: Travelproduct;
  createPointTransactionOfLoading: PointTransaction;
  createTravelproduct: Travelproduct;
  createTravelproductQuestion: TravelproductQuestion;
  createTravelproductQuestionAnswer: TravelproductQuestionAnswer;
  createUser: User;
  deleteBoard: Scalars['ID']['output'];
  deleteBoardComment: Scalars['ID']['output'];
  deleteBoards: Array<Scalars['ID']['output']>;
  deleteTravelproduct: Scalars['ID']['output'];
  deleteTravelproductQuestion: Scalars['ID']['output'];
  deleteTravelproductQuestionAnswer: Scalars['String']['output'];
  dislikeBoard: Scalars['Int']['output'];
  likeBoard: Scalars['Int']['output'];
  loginUser: Token;
  loginUserExample: Token;
  logoutUser: Scalars['Boolean']['output'];
  resetUserPassword: Scalars['Boolean']['output'];
  restoreAccessToken: Token;
  toggleTravelproductPick: Scalars['Int']['output'];
  updateBoard: Board;
  updateBoardComment: BoardComment;
  updateTravelproduct: Travelproduct;
  updateTravelproductQuestion: TravelproductQuestion;
  updateTravelproductQuestionAnswer: TravelproductQuestionAnswer;
  updateUser: User;
  uploadFile: FileManager;
};


export type MutationCreateBoardArgs = {
  createBoardInput: CreateBoardInput;
};


export type MutationCreateBoardCommentArgs = {
  boardId: Scalars['ID']['input'];
  createBoardCommentInput: CreateBoardCommentInput;
};


export type MutationCreatePointTransactionOfBuyingAndSellingArgs = {
  useritemId: Scalars['ID']['input'];
};


export type MutationCreatePointTransactionOfLoadingArgs = {
  paymentId: Scalars['ID']['input'];
};


export type MutationCreateTravelproductArgs = {
  createTravelproductInput: CreateTravelproductInput;
};


export type MutationCreateTravelproductQuestionArgs = {
  createTravelproductQuestionInput: CreateTravelproductQuestionInput;
  travelproductId: Scalars['ID']['input'];
};


export type MutationCreateTravelproductQuestionAnswerArgs = {
  createTravelproductQuestionAnswerInput: CreateTravelproductQuestionAnswerInput;
  travelproductQuestionId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type MutationDeleteBoardCommentArgs = {
  boardCommentId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteBoardsArgs = {
  boardIds: Array<Scalars['ID']['input']>;
};


export type MutationDeleteTravelproductArgs = {
  travelproductId: Scalars['ID']['input'];
};


export type MutationDeleteTravelproductQuestionArgs = {
  travelproductQuestionId: Scalars['ID']['input'];
};


export type MutationDeleteTravelproductQuestionAnswerArgs = {
  travelproductQuestionAnswerId: Scalars['ID']['input'];
};


export type MutationDislikeBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type MutationLikeBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginUserExampleArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationResetUserPasswordArgs = {
  password: Scalars['String']['input'];
};


export type MutationToggleTravelproductPickArgs = {
  travelproductId: Scalars['ID']['input'];
};


export type MutationUpdateBoardArgs = {
  boardId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  updateBoardInput: UpdateBoardInput;
};


export type MutationUpdateBoardCommentArgs = {
  boardCommentId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  updateBoardCommentInput: UpdateBoardCommentInput;
};


export type MutationUpdateTravelproductArgs = {
  travelproductId: Scalars['ID']['input'];
  updateTravelproductInput: UpdateTravelproductInput;
};


export type MutationUpdateTravelproductQuestionArgs = {
  travelproductQuestionId: Scalars['ID']['input'];
  updateTravelproductQuestionInput: UpdateTravelproductQuestionInput;
};


export type MutationUpdateTravelproductQuestionAnswerArgs = {
  travelproductQuestionAnswerId: Scalars['ID']['input'];
  updateTravelproductQuestionAnswerInput: UpdateTravelproductQuestionAnswerInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};

export type PointTransaction = {
  __typename?: 'PointTransaction';
  _id: Scalars['ID']['output'];
  amount: Scalars['Int']['output'];
  balance: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  impUid?: Maybe<Scalars['ID']['output']>;
  status: Scalars['String']['output'];
  statusDetail: Scalars['String']['output'];
  travelproduct?: Maybe<Travelproduct>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  fetchBoard: Board;
  fetchBoardComments: Array<BoardComment>;
  fetchBoards: Array<Board>;
  fetchBoardsCount: Scalars['Int']['output'];
  fetchBoardsCountOfMine: Scalars['Int']['output'];
  fetchBoardsOfMine: Array<Board>;
  fetchBoardsOfTheBest: Array<Board>;
  fetchPointTransactions: Array<PointTransaction>;
  fetchPointTransactionsCountOfBuying: Scalars['Int']['output'];
  fetchPointTransactionsCountOfLoading: Scalars['Int']['output'];
  fetchPointTransactionsCountOfSelling: Scalars['Int']['output'];
  fetchPointTransactionsOfBuying: Array<PointTransaction>;
  fetchPointTransactionsOfLoading: Array<PointTransaction>;
  fetchPointTransactionsOfSelling: Array<PointTransaction>;
  fetchTravelproduct: Travelproduct;
  fetchTravelproductQuestionAnswers: Array<TravelproductQuestionAnswer>;
  fetchTravelproductQuestions: Array<TravelproductQuestion>;
  fetchTravelproducts: Array<Travelproduct>;
  fetchTravelproductsCountIBought: Scalars['Int']['output'];
  fetchTravelproductsCountIPicked: Scalars['Int']['output'];
  fetchTravelproductsCountISold: Scalars['Int']['output'];
  fetchTravelproductsIBought: Array<Travelproduct>;
  fetchTravelproductsIPicked: Array<Travelproduct>;
  fetchTravelproductsISold: Array<Travelproduct>;
  fetchTravelproductsOfTheBest: Array<Travelproduct>;
  fetchUserLoggedIn: User;
};


export type QueryFetchBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type QueryFetchBoardCommentsArgs = {
  boardId: Scalars['ID']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchBoardsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryFetchBoardsCountArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryFetchPointTransactionsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchPointTransactionsOfBuyingArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchPointTransactionsOfLoadingArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchPointTransactionsOfSellingArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchTravelproductArgs = {
  travelproductId: Scalars['ID']['input'];
};


export type QueryFetchTravelproductQuestionAnswersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  travelproductQuestionId: Scalars['ID']['input'];
};


export type QueryFetchTravelproductQuestionsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  travelproductId: Scalars['ID']['input'];
};


export type QueryFetchTravelproductsArgs = {
  isSoldout?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchTravelproductsIBoughtArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchTravelproductsIPickedArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchTravelproductsISoldArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
};

export type Travelproduct = {
  __typename?: 'Travelproduct';
  _id: Scalars['ID']['output'];
  buyer?: Maybe<User>;
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  pickedCount?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  remarks: Scalars['String']['output'];
  seller?: Maybe<User>;
  soldAt?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  travelproductAddress?: Maybe<TravelproductAddress>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TravelproductAddress = {
  __typename?: 'TravelproductAddress';
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  addressDetail?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type TravelproductAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressDetail?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type TravelproductQuestion = {
  __typename?: 'TravelproductQuestion';
  _id: Scalars['ID']['output'];
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  travelproduct: Travelproduct;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type TravelproductQuestionAnswer = {
  __typename?: 'TravelproductQuestionAnswer';
  _id: Scalars['ID']['output'];
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  travelproductQuestion: TravelproductQuestion;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type UpdateBoardCommentInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateBoardInput = {
  boardAddress?: InputMaybe<BoardAddressInput>;
  contents?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTravelproductInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  travelproductAddress?: InputMaybe<TravelproductAddressInput>;
};

export type UpdateTravelproductQuestionAnswerInput = {
  contents: Scalars['String']['input'];
};

export type UpdateTravelproductQuestionInput = {
  contents: Scalars['String']['input'];
};

export type UpdateUserInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userPoint?: Maybe<UserPoint>;
};

export type UserPoint = {
  __typename?: 'UserPoint';
  _id: Scalars['ID']['output'];
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type SellerFragmentFragment = { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null };

export type UserFragmentFragment = { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null };

export type CreatePointTransactionOfBuyingAndSellingMutationVariables = Exact<{
  useritemId: Scalars['ID']['input'];
}>;


export type CreatePointTransactionOfBuyingAndSellingMutation = { __typename?: 'Mutation', createPointTransactionOfBuyingAndSelling: { __typename?: 'Travelproduct', _id: string } };

export type CreatePointTransactionOfLoadingMutationVariables = Exact<{
  paymentId: Scalars['ID']['input'];
}>;


export type CreatePointTransactionOfLoadingMutation = { __typename?: 'Mutation', createPointTransactionOfLoading: { __typename?: 'PointTransaction', _id: string, impUid?: string | null, amount: number, balance: number, status: string, statusDetail: string } };

export type CreateTravelproductMutationVariables = Exact<{
  createTravelproductInput: CreateTravelproductInput;
}>;


export type CreateTravelproductMutation = { __typename?: 'Mutation', createTravelproduct: { __typename?: 'Travelproduct', _id: string, seller?: { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null } | null } };

export type CreateTravelproductQuestionAnswerMutationVariables = Exact<{
  createServiceQuestionAnswerInput: CreateTravelproductQuestionAnswerInput;
  serviceQuestionId: Scalars['ID']['input'];
}>;


export type CreateTravelproductQuestionAnswerMutation = { __typename?: 'Mutation', createTravelproductQuestionAnswer: { __typename?: 'TravelproductQuestionAnswer', _id: string, contents: string, user: { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null } } };

export type CreateTravelproductQuestionMutationVariables = Exact<{
  createTravelproductQuestionInput: CreateTravelproductQuestionInput;
  serviceId: Scalars['ID']['input'];
}>;


export type CreateTravelproductQuestionMutation = { __typename?: 'Mutation', createTravelproductQuestion: { __typename?: 'TravelproductQuestion', _id: string, contents: string, user: { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null } } };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string } };

export type DeleteTravelproductMutationVariables = Exact<{
  serviceId: Scalars['ID']['input'];
}>;


export type DeleteTravelproductMutation = { __typename?: 'Mutation', deleteTravelproduct: string };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'Token', accessToken: string } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser: boolean };

export type ToggleTravelproductPickMutationVariables = Exact<{
  serviceId: Scalars['ID']['input'];
}>;


export type ToggleTravelproductPickMutation = { __typename?: 'Mutation', toggleTravelproductPick: number };

export type UpdateTravelproductQuestionMutationVariables = Exact<{
  updateTravelproductQuestionInput: UpdateTravelproductQuestionInput;
  travelproductQuestionId: Scalars['ID']['input'];
}>;


export type UpdateTravelproductQuestionMutation = { __typename?: 'Mutation', updateTravelproductQuestion: { __typename?: 'TravelproductQuestion', _id: string, contents: string, createdAt: any, updatedAt: any, travelproduct: { __typename?: 'Travelproduct', _id: string }, user: { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null } } };

export type UpdateTravelproductMutationVariables = Exact<{
  updateTravelproductInput: UpdateTravelproductInput;
  serviceId: Scalars['ID']['input'];
}>;


export type UpdateTravelproductMutation = { __typename?: 'Mutation', updateTravelproduct: { __typename?: 'Travelproduct', _id: string, name: string, remarks: string, contents: string, price?: number | null, tags?: Array<string> | null, images?: Array<string> | null, pickedCount?: number | null, travelproductAddress?: { __typename?: 'TravelproductAddress', address?: string | null } | null } };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile: { __typename?: 'FileManager', url: string } };

export type FetchBoardsOfTheBestQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchBoardsOfTheBestQuery = { __typename?: 'Query', fetchBoardsOfTheBest: Array<{ __typename?: 'Board', _id: string, writer?: string | null, title: string, contents: string, images?: Array<string> | null, likeCount: number, dislikeCount: number }> };

export type FetchTravelproductsOfTheBestQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTravelproductsOfTheBestQuery = { __typename?: 'Query', fetchTravelproductsOfTheBest: Array<{ __typename?: 'Travelproduct', _id: string, name: string, remarks: string, price?: number | null, tags?: Array<string> | null, images?: Array<string> | null, pickedCount?: number | null, seller?: { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null } | null }> };

export type FetchTravelproductQuestionAnswersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  serviceQuestionId: Scalars['ID']['input'];
}>;


export type FetchTravelproductQuestionAnswersQuery = { __typename?: 'Query', fetchTravelproductQuestionAnswers: Array<{ __typename?: 'TravelproductQuestionAnswer', _id: string, contents: string, createdAt: any, user: { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null } }> };

export type FetchTravelproductQuestionsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  serviceId: Scalars['ID']['input'];
}>;


export type FetchTravelproductQuestionsQuery = { __typename?: 'Query', fetchTravelproductQuestions: Array<{ __typename?: 'TravelproductQuestion', _id: string, contents: string, createdAt: any, user: { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null } }> };

export type FetchTravelproductQueryVariables = Exact<{
  serviceId: Scalars['ID']['input'];
}>;


export type FetchTravelproductQuery = { __typename?: 'Query', fetchTravelproduct: { __typename?: 'Travelproduct', _id: string, name: string, remarks: string, contents: string, price?: number | null, tags?: Array<string> | null, images?: Array<string> | null, pickedCount?: number | null, travelproductAddress?: { __typename?: 'TravelproductAddress', address?: string | null, addressDetail?: string | null, lat?: number | null, lng?: number | null } | null, seller?: { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null } | null } };

export type FetchTravelproductsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchTravelproductsQuery = { __typename?: 'Query', fetchTravelproducts: Array<{ __typename?: 'Travelproduct', _id: string, name: string, remarks: string, contents: string, price?: number | null, tags?: Array<string> | null, images?: Array<string> | null, buyer?: { __typename?: 'User', name: string, picture?: string | null } | null, seller?: { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null } | null }> };

export type FetchTravelproductsIPickedQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTravelproductsIPickedQuery = { __typename?: 'Query', fetchTravelproductsIPicked: Array<{ __typename?: 'Travelproduct', _id: string, name: string, remarks: string, contents: string, price?: number | null, tags?: Array<string> | null, images?: Array<string> | null, pickedCount?: number | null, soldAt?: any | null, seller?: { __typename?: 'User', _id: string, name: string, email: string, picture?: string | null } | null }> };

export type FetchUserLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUserLoggedInQuery = { __typename?: 'Query', fetchUserLoggedIn: { __typename?: 'User', _id: string, email: string, name: string, picture?: string | null, userPoint?: { __typename?: 'UserPoint', amount: number } | null } };

export type RestoreAccessTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RestoreAccessTokenMutation = { __typename?: 'Mutation', restoreAccessToken: { __typename?: 'Token', accessToken: string } };

export const SellerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SellerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<SellerFragmentFragment, unknown>;
export const UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const CreatePointTransactionOfBuyingAndSellingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPointTransactionOfBuyingAndSelling"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"useritemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPointTransactionOfBuyingAndSelling"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"useritemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"useritemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreatePointTransactionOfBuyingAndSellingMutation, CreatePointTransactionOfBuyingAndSellingMutationVariables>;
export const CreatePointTransactionOfLoadingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPointTransactionOfLoading"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPointTransactionOfLoading"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paymentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"impUid"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusDetail"}}]}}]}}]} as unknown as DocumentNode<CreatePointTransactionOfLoadingMutation, CreatePointTransactionOfLoadingMutationVariables>;
export const CreateTravelproductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTravelproduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTravelproductInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTravelproductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTravelproduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTravelproductInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTravelproductInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SellerFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SellerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<CreateTravelproductMutation, CreateTravelproductMutationVariables>;
export const CreateTravelproductQuestionAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTravelproductQuestionAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createServiceQuestionAnswerInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTravelproductQuestionAnswerInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceQuestionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTravelproductQuestionAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTravelproductQuestionAnswerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createServiceQuestionAnswerInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"travelproductQuestionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceQuestionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<CreateTravelproductQuestionAnswerMutation, CreateTravelproductQuestionAnswerMutationVariables>;
export const CreateTravelproductQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTravelproductQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTravelproductQuestionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTravelproductQuestionInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTravelproductQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTravelproductQuestionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTravelproductQuestionInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"travelproductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<CreateTravelproductQuestionMutation, CreateTravelproductQuestionMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteTravelproductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTravelproduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTravelproduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}]}}]} as unknown as DocumentNode<DeleteTravelproductMutation, DeleteTravelproductMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutUser"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const ToggleTravelproductPickDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleTravelproductPick"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleTravelproductPick"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}]}}]} as unknown as DocumentNode<ToggleTravelproductPickMutation, ToggleTravelproductPickMutationVariables>;
export const UpdateTravelproductQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTravelproductQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTravelproductQuestionInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTravelproductQuestionInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTravelproductQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTravelproductQuestionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTravelproductQuestionInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"travelproductQuestionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"travelproduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<UpdateTravelproductQuestionMutation, UpdateTravelproductQuestionMutationVariables>;
export const UpdateTravelproductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTravelproduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTravelproductInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTravelproductInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTravelproduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTravelproductInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTravelproductInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"travelproductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"pickedCount"}},{"kind":"Field","name":{"kind":"Name","value":"travelproductAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTravelproductMutation, UpdateTravelproductMutationVariables>;
export const UploadFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<UploadFileMutation, UploadFileMutationVariables>;
export const FetchBoardsOfTheBestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoardsOfTheBest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoardsOfTheBest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikeCount"}}]}}]}}]} as unknown as DocumentNode<FetchBoardsOfTheBestQuery, FetchBoardsOfTheBestQueryVariables>;
export const FetchTravelproductsOfTheBestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchTravelproductsOfTheBest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproductsOfTheBest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"pickedCount"}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SellerFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SellerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<FetchTravelproductsOfTheBestQuery, FetchTravelproductsOfTheBestQueryVariables>;
export const FetchTravelproductQuestionAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchTravelproductQuestionAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceQuestionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproductQuestionAnswers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"travelproductQuestionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceQuestionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<FetchTravelproductQuestionAnswersQuery, FetchTravelproductQuestionAnswersQueryVariables>;
export const FetchTravelproductQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchTravelproductQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproductQuestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"travelproductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<FetchTravelproductQuestionsQuery, FetchTravelproductQuestionsQueryVariables>;
export const FetchTravelproductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchTravelproduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"pickedCount"}},{"kind":"Field","name":{"kind":"Name","value":"travelproductAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"addressDetail"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lng"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SellerFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SellerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<FetchTravelproductQuery, FetchTravelproductQueryVariables>;
export const FetchTravelproductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchTravelproducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"buyer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SellerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SellerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<FetchTravelproductsQuery, FetchTravelproductsQueryVariables>;
export const FetchTravelproductsIPickedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchTravelproductsIPicked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproductsIPicked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"pickedCount"}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SellerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"soldAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SellerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]} as unknown as DocumentNode<FetchTravelproductsIPickedQuery, FetchTravelproductsIPickedQueryVariables>;
export const FetchUserLoggedInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchUserLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchUserLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"userPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]} as unknown as DocumentNode<FetchUserLoggedInQuery, FetchUserLoggedInQueryVariables>;
export const RestoreAccessTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"restoreAccessToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restoreAccessToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RestoreAccessTokenMutation, RestoreAccessTokenMutationVariables>;