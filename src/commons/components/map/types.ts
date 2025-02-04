import { MarketServiceDetailCommon } from "@/components/market-service/detail/types";

export type KakaoMapProps = Pick<
  NonNullable<MarketServiceDetailCommon["travelproductAddress"]>,
  "lat" | "lng"
> & { cssprop: string };
