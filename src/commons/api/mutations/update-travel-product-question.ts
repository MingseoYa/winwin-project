import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "../fragment/user";

export const UPDATE_TRAVEL_PRODUCT_QUESTION = gql`
  mutation updateTravelproductQuestion(
    $updateTravelproductQuestionInput: UpdateTravelproductQuestionInput!
    $travelproductQuestionId: ID!
  ) {
    updateTravelproductQuestion(
      updateTravelproductQuestionInput: $updateTravelproductQuestionInput
      travelproductQuestionId: $travelproductQuestionId
    ) {
      _id
      contents
      travelproduct {
        _id
      }
      user {
        ...UserFragment
      }
      createdAt
      updatedAt
    }
  }
  ${USER_FRAGMENT}
`;
