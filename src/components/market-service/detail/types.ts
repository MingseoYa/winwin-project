import { FetchTravelproductQuery } from "@/commons/graphql/graphql";

// 공통
type MarketServiceDetailCommon = FetchTravelproductQuery["fetchTravelproduct"];

// 헤더 컴포넌트 props
export type MarketServicceDetailHeaderProps = Pick<
  MarketServiceDetailCommon,
  "name" | "remarks" | "tags"
>;
