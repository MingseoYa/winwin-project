import { FetchBoardsOfTheBestQuery } from "@/commons/graphql/graphql";

// ✅ 자동 생성된 타입에서 개별 Product 타입 가져오기
export type ICardProductProps =
  FetchBoardsOfTheBestQuery["fetchBoardsOfTheBest"][0];
