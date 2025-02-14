import { gql } from "@apollo/client";

export const TOGGLE_TRAVEL_PRODUCT_PICK = gql`
  mutation toggleTravelproductPick($serviceId: ID!) {
    toggleTravelproductPick(travelproductId: $serviceId)
  }
`;
