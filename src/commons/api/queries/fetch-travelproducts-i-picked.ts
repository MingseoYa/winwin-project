import { gql } from "@apollo/client";
import { SELLER_FRAGMENT } from "../fragment/seller";

export const FETCH_TRAVELPRODUCTSIPICKED = gql`
  query fetchTravelproductsIPicked {
    fetchTravelproductsIPicked {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        ...SellerFragment
      }
      soldAt
    }
  }
  ${SELLER_FRAGMENT}
`;
