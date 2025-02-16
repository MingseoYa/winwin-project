import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_BUING_ANAD_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;
