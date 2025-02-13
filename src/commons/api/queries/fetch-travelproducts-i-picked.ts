import { gql } from "@apollo/client";

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
        _id
        name
        picture
      }
      soldAt
    }
  }
`;
