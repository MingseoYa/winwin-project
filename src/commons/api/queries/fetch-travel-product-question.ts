import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "../fragment/user";

export const FETCH_TRAVEL_PRODUCT_QUESTION = gql`
  query fetchTravelproductQuestions($page: Int, $serviceId: ID!) {
    fetchTravelproductQuestions(page: $page, travelproductId: $serviceId) {
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
