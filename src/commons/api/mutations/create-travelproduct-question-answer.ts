import { gql } from "@apollo/client";

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
        _id
      }
    }
  }
`;
