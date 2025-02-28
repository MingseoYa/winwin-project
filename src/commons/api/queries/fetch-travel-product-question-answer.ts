import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "../fragment/user";

export const FETCH_TRAVELPRODUCT_QUESTION_ANSWERS = gql`
  query fetchTravelproductQuestionAnswers($page: Int, $serviceQuestionId: ID!) {
    fetchTravelproductQuestionAnswers(
      page: $page
      travelproductQuestionId: $serviceQuestionId
    ) {
      _id
      contents
      user {
        ...UserFragment
      }
      createdAt
    }
  }
  ${USER_FRAGMENT}
`;
