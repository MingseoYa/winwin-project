/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  fragment UserFragment on User {\n    _id\n    email\n    name\n    picture\n  }\n": types.UserFragmentFragmentDoc,
    "\n  mutation createTravelproduct(\n    $createTravelproductInput: CreateTravelproductInput!\n  ) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n      seller {\n        _id\n        name\n      }\n    }\n  }\n": types.CreateTravelproductDocument,
    "\n  mutation createTravelproductQuestionAnswer(\n    $createServiceQuestionAnswerInput: CreateTravelproductQuestionAnswerInput!\n    $serviceQuestionId: ID!\n  ) {\n    createTravelproductQuestionAnswer(\n      createTravelproductQuestionAnswerInput: $createServiceQuestionAnswerInput\n      travelproductQuestionId: $serviceQuestionId\n    ) {\n      _id\n      contents\n      user {\n        _id\n      }\n    }\n  }\n": types.CreateTravelproductQuestionAnswerDocument,
    "\n  mutation createTravelproductQuestion(\n    $createTravelproductQuestionInput: CreateTravelproductQuestionInput!\n    $serviceId: ID!\n  ) {\n    createTravelproductQuestion(\n      createTravelproductQuestionInput: $createTravelproductQuestionInput\n      travelproductId: $serviceId\n    ) {\n      _id\n      contents\n      user {\n        _id\n      }\n    }\n  }\n": types.CreateTravelproductQuestionDocument,
    "\n  mutation createUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation logoutUser {\n    logoutUser\n  }\n": types.LogoutUserDocument,
    "\n  mutation toggleTravelproductPick($serviceId: ID!) {\n    toggleTravelproductPick(travelproductId: $serviceId)\n  }\n": types.ToggleTravelproductPickDocument,
    "\n  mutation updateTravelproduct(\n    $updateTravelproductInput: UpdateTravelproductInput!\n    $travelproductId: ID!\n  ) {\n    updateTravelproduct(\n      updateTravelproductInput: $updateTravelproductInput\n      travelproductId: $travelproductId\n    ) {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      travelproductAddress {\n        address\n      }\n    }\n  }\n": types.UpdateTravelproductDocument,
    "\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n": types.UploadFileDocument,
    "\n  query fetchBoardsOfTheBest {\n    fetchBoardsOfTheBest {\n      _id\n      writer\n      title\n      contents\n      images\n      likeCount\n      dislikeCount\n    }\n  }\n": types.FetchBoardsOfTheBestDocument,
    "\n  query fetchTravelproductsOfTheBest {\n    fetchTravelproductsOfTheBest {\n      _id\n      name\n      remarks\n      price\n      tags\n      images\n      pickedCount\n      seller {\n        name\n        picture\n      }\n    }\n  }\n": types.FetchTravelproductsOfTheBestDocument,
    "\n  query fetchTravelproductQuestionAnswers($page: Int, $serviceQuestionId: ID!) {\n    fetchTravelproductQuestionAnswers(\n      page: $page\n      travelproductQuestionId: $serviceQuestionId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        name\n        picture\n      }\n      createdAt\n    }\n  }\n": types.FetchTravelproductQuestionAnswersDocument,
    "\n  query fetchTravelproductQuestions($page: Int, $serviceId: ID!) {\n    fetchTravelproductQuestions(page: $page, travelproductId: $serviceId) {\n      _id\n      contents\n      user {\n        ...UserFragment\n      }\n      createdAt\n    }\n  }\n  \n": types.FetchTravelproductQuestionsDocument,
    "\n  query fetchTravelproduct($serviceId: ID!) {\n    fetchTravelproduct(travelproductId: $serviceId) {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      travelproductAddress {\n        address\n        addressDetail\n        lat\n        lng\n      }\n      seller {\n        _id\n        name\n        picture\n        email\n      }\n    }\n  }\n": types.FetchTravelproductDocument,
    "\n  query fetchTravelproducts {\n    fetchTravelproducts {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      buyer {\n        name\n        picture\n      }\n      images\n    }\n  }\n": types.FetchTravelproductsDocument,
    "\n  query fetchTravelproductsIPicked {\n    fetchTravelproductsIPicked {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      seller {\n        _id\n        name\n        picture\n      }\n      soldAt\n    }\n  }\n": types.FetchTravelproductsIPickedDocument,
    "\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n      picture\n      userPoint {\n        amount\n      }\n    }\n  }\n": types.FetchUserLoggedInDocument,
    "\n  mutation restoreAccessToken {\n    restoreAccessToken {\n      accessToken\n    }\n  }\n": types.RestoreAccessTokenDocument,
    "\n  mutation updateTravelproductQuestion(\n    $updateTravelproductQuestionInput: UpdateTravelproductQuestionInput!\n    $travelproductQuestionId: ID!\n  ) {\n    updateTravelproductQuestion(\n      updateTravelproductQuestionInput: $updateTravelproductQuestionInput\n      travelproductQuestionId: $travelproductQuestionId\n    ) {\n      _id\n      contents\n      travelproduct {\n        _id\n      }\n      user {\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.UpdateTravelproductQuestionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserFragment on User {\n    _id\n    email\n    name\n    picture\n  }\n"): (typeof documents)["\n  fragment UserFragment on User {\n    _id\n    email\n    name\n    picture\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createTravelproduct(\n    $createTravelproductInput: CreateTravelproductInput!\n  ) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n      seller {\n        _id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createTravelproduct(\n    $createTravelproductInput: CreateTravelproductInput!\n  ) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n      seller {\n        _id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createTravelproductQuestionAnswer(\n    $createServiceQuestionAnswerInput: CreateTravelproductQuestionAnswerInput!\n    $serviceQuestionId: ID!\n  ) {\n    createTravelproductQuestionAnswer(\n      createTravelproductQuestionAnswerInput: $createServiceQuestionAnswerInput\n      travelproductQuestionId: $serviceQuestionId\n    ) {\n      _id\n      contents\n      user {\n        _id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createTravelproductQuestionAnswer(\n    $createServiceQuestionAnswerInput: CreateTravelproductQuestionAnswerInput!\n    $serviceQuestionId: ID!\n  ) {\n    createTravelproductQuestionAnswer(\n      createTravelproductQuestionAnswerInput: $createServiceQuestionAnswerInput\n      travelproductQuestionId: $serviceQuestionId\n    ) {\n      _id\n      contents\n      user {\n        _id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createTravelproductQuestion(\n    $createTravelproductQuestionInput: CreateTravelproductQuestionInput!\n    $serviceId: ID!\n  ) {\n    createTravelproductQuestion(\n      createTravelproductQuestionInput: $createTravelproductQuestionInput\n      travelproductId: $serviceId\n    ) {\n      _id\n      contents\n      user {\n        _id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createTravelproductQuestion(\n    $createTravelproductQuestionInput: CreateTravelproductQuestionInput!\n    $serviceId: ID!\n  ) {\n    createTravelproductQuestion(\n      createTravelproductQuestionInput: $createTravelproductQuestionInput\n      travelproductId: $serviceId\n    ) {\n      _id\n      contents\n      user {\n        _id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation logoutUser {\n    logoutUser\n  }\n"): (typeof documents)["\n  mutation logoutUser {\n    logoutUser\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation toggleTravelproductPick($serviceId: ID!) {\n    toggleTravelproductPick(travelproductId: $serviceId)\n  }\n"): (typeof documents)["\n  mutation toggleTravelproductPick($serviceId: ID!) {\n    toggleTravelproductPick(travelproductId: $serviceId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateTravelproduct(\n    $updateTravelproductInput: UpdateTravelproductInput!\n    $travelproductId: ID!\n  ) {\n    updateTravelproduct(\n      updateTravelproductInput: $updateTravelproductInput\n      travelproductId: $travelproductId\n    ) {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      travelproductAddress {\n        address\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateTravelproduct(\n    $updateTravelproductInput: UpdateTravelproductInput!\n    $travelproductId: ID!\n  ) {\n    updateTravelproduct(\n      updateTravelproductInput: $updateTravelproductInput\n      travelproductId: $travelproductId\n    ) {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      travelproductAddress {\n        address\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardsOfTheBest {\n    fetchBoardsOfTheBest {\n      _id\n      writer\n      title\n      contents\n      images\n      likeCount\n      dislikeCount\n    }\n  }\n"): (typeof documents)["\n  query fetchBoardsOfTheBest {\n    fetchBoardsOfTheBest {\n      _id\n      writer\n      title\n      contents\n      images\n      likeCount\n      dislikeCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchTravelproductsOfTheBest {\n    fetchTravelproductsOfTheBest {\n      _id\n      name\n      remarks\n      price\n      tags\n      images\n      pickedCount\n      seller {\n        name\n        picture\n      }\n    }\n  }\n"): (typeof documents)["\n  query fetchTravelproductsOfTheBest {\n    fetchTravelproductsOfTheBest {\n      _id\n      name\n      remarks\n      price\n      tags\n      images\n      pickedCount\n      seller {\n        name\n        picture\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchTravelproductQuestionAnswers($page: Int, $serviceQuestionId: ID!) {\n    fetchTravelproductQuestionAnswers(\n      page: $page\n      travelproductQuestionId: $serviceQuestionId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        name\n        picture\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchTravelproductQuestionAnswers($page: Int, $serviceQuestionId: ID!) {\n    fetchTravelproductQuestionAnswers(\n      page: $page\n      travelproductQuestionId: $serviceQuestionId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        name\n        picture\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchTravelproductQuestions($page: Int, $serviceId: ID!) {\n    fetchTravelproductQuestions(page: $page, travelproductId: $serviceId) {\n      _id\n      contents\n      user {\n        ...UserFragment\n      }\n      createdAt\n    }\n  }\n  \n"): (typeof documents)["\n  query fetchTravelproductQuestions($page: Int, $serviceId: ID!) {\n    fetchTravelproductQuestions(page: $page, travelproductId: $serviceId) {\n      _id\n      contents\n      user {\n        ...UserFragment\n      }\n      createdAt\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchTravelproduct($serviceId: ID!) {\n    fetchTravelproduct(travelproductId: $serviceId) {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      travelproductAddress {\n        address\n        addressDetail\n        lat\n        lng\n      }\n      seller {\n        _id\n        name\n        picture\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  query fetchTravelproduct($serviceId: ID!) {\n    fetchTravelproduct(travelproductId: $serviceId) {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      travelproductAddress {\n        address\n        addressDetail\n        lat\n        lng\n      }\n      seller {\n        _id\n        name\n        picture\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchTravelproducts {\n    fetchTravelproducts {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      buyer {\n        name\n        picture\n      }\n      images\n    }\n  }\n"): (typeof documents)["\n  query fetchTravelproducts {\n    fetchTravelproducts {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      buyer {\n        name\n        picture\n      }\n      images\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchTravelproductsIPicked {\n    fetchTravelproductsIPicked {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      seller {\n        _id\n        name\n        picture\n      }\n      soldAt\n    }\n  }\n"): (typeof documents)["\n  query fetchTravelproductsIPicked {\n    fetchTravelproductsIPicked {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      seller {\n        _id\n        name\n        picture\n      }\n      soldAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n      picture\n      userPoint {\n        amount\n      }\n    }\n  }\n"): (typeof documents)["\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n      picture\n      userPoint {\n        amount\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation restoreAccessToken {\n    restoreAccessToken {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation restoreAccessToken {\n    restoreAccessToken {\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateTravelproductQuestion(\n    $updateTravelproductQuestionInput: UpdateTravelproductQuestionInput!\n    $travelproductQuestionId: ID!\n  ) {\n    updateTravelproductQuestion(\n      updateTravelproductQuestionInput: $updateTravelproductQuestionInput\n      travelproductQuestionId: $travelproductQuestionId\n    ) {\n      _id\n      contents\n      travelproduct {\n        _id\n      }\n      user {\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation updateTravelproductQuestion(\n    $updateTravelproductQuestionInput: UpdateTravelproductQuestionInput!\n    $travelproductQuestionId: ID!\n  ) {\n    updateTravelproductQuestion(\n      updateTravelproductQuestionInput: $updateTravelproductQuestionInput\n      travelproductQuestionId: $travelproductQuestionId\n    ) {\n      _id\n      contents\n      travelproduct {\n        _id\n      }\n      user {\n        name\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;