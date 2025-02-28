import { FetchTravelproductQuery } from "@/commons/graphql/graphql";

export type MarketServiceDetailCommon =
  FetchTravelproductQuery["fetchTravelproduct"];

export type KakaoMapProps = Pick<
  NonNullable<MarketServiceDetailCommon["travelproductAddress"]>,
  "lat" | "lng"
> & { cssprop: string };

export type KakaoMapCommons = Pick<
  NonNullable<MarketServiceDetailCommon["travelproductAddress"]>,
  "lat" | "lng"
>;
