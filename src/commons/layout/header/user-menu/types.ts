import { FetchUserLoggedInQuery } from "@/commons/graphql/graphql";

export interface IUserMenuDropdownProps {
  data: FetchUserLoggedInQuery;
  toggleUserMenu: () => void;
}
