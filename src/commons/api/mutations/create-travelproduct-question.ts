import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "../fragment/user";

export const CREATE_TRAVELPRODUCT_QUESTION = gql`
  mutation createTravelproductQuestion(
    $createTravelproductQuestionInput: CreateTravelproductQuestionInput!
    $serviceId: ID!
  ) {
    createTravelproductQuestion(
      createTravelproductQuestionInput: $createTravelproductQuestionInput
      travelproductId: $serviceId
    ) {
      _id
      contents
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;
