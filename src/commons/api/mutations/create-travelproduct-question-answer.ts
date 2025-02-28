import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "../fragment/user";

export const CREATE_TRAVELPRODUCT_QUESTION_ANSWER = gql`
  mutation createTravelproductQuestionAnswer(
    $createServiceQuestionAnswerInput: CreateTravelproductQuestionAnswerInput!
    $serviceQuestionId: ID!
  ) {
    createTravelproductQuestionAnswer(
      createTravelproductQuestionAnswerInput: $createServiceQuestionAnswerInput
      travelproductQuestionId: $serviceQuestionId
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
