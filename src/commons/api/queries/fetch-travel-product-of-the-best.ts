import { gql } from "@apollo/client";
import { SELLER_FRAGMENT } from "../fragment/seller";

export const FETCH_TRAVELPRODUCTS_OF_THE_BEST = gql`
  query fetchTravelproductsOfTheBest {
    fetchTravelproductsOfTheBest {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
      seller {
        ...SellerFragment
      }
    }
  }
  ${SELLER_FRAGMENT}
`;
