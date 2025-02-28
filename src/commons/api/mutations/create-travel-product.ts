import { gql } from "@apollo/client";
import { SELLER_FRAGMENT } from "../fragment/seller";

export const CREATE_TRAVEL_PRODUCT = gql`
  mutation createTravelproduct(
    $createTravelproductInput: CreateTravelproductInput!
  ) {
    createTravelproduct(createTravelproductInput: $createTravelproductInput) {
      _id
      seller {
        ...SellerFragment
      }
    }
  }
  ${SELLER_FRAGMENT}
`;
