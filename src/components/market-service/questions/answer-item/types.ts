import { UserFragmentFragment } from "@/commons/graphql/graphql";

export type QuestionItemProps = {
  contents?: string;
  createdAt?: string;
  user: UserFragmentFragment;
};
