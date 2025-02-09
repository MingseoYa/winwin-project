import { gql } from "@apollo/client";

export const FETCH_TRAVELPRODUCT_QUESTION_ANSWERS = gql`
  query fetchTravelproductQuestionAnswers($page: Int, $serviceQuestionId: ID!) {
    fetchTravelproductQuestionAnswers(
      page: $page
      travelproductQuestionId: $serviceQuestionId
    ) {
      _id
      contents
      user {
        _id
        name
        picture
      }
      createdAt
    }
  }
`;
