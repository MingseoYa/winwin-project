import { UserFragmentFragment } from "@/commons/graphql/graphql";

export type QuestionItemProps = {
  id: string;
  contents: string;
  createdAt: string;
  user: UserFragmentFragment;
};
