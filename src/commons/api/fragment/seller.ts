import { gql } from "@apollo/client";

export const SELLER_FRAGMENT = gql`
  fragment SellerFragment on User {
    _id
    name
    email
    picture
  }
`;
