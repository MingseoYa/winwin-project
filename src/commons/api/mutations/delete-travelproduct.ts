import { gql } from "@apollo/client";

export const DELETE_PRODUCT = gql`
  mutation deleteTravelproduct($serviceId: ID!) {
    deleteTravelproduct(travelproductId: $serviceId)
  }
`;
