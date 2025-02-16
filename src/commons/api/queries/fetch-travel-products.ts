import { gql } from "@apollo/client";

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
        name
        picture
      }
      images
    }
  }
`;
