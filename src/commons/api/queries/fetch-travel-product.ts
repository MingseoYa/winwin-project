import { gql } from "@apollo/client";

export const FETCH_TRAVELPRODUCT = gql`
  query fetchTravelproduct($serviceId: ID!) {
    fetchTravelproduct(travelproductId: $serviceId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      travelproductAddress {
        address
        addressDetail
        lat
        lng
      }
      seller {
        _id
        name
        picture
      }
    }
  }
`;
