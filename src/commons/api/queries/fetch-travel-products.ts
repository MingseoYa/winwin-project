import { gql } from "@apollo/client";
import { SELLER_FRAGMENT } from "../fragment/seller";

export const FETCH_PRODUCTS = gql`
  query fetchTravelproducts($page: Int) {
    fetchTravelproducts(page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      buyer {
        name
        picture
      }
      seller {
        ...SellerFragment
      }
      images
    }
  }
  ${SELLER_FRAGMENT}
`;
