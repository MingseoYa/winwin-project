import { FetchTravelproductQuery } from "@/commons/graphql/graphql";

// 공통
export type MarketServiceDetailCommon =
  FetchTravelproductQuery["fetchTravelproduct"];

// 헤더 컴포넌트 props
export type MarketServicceDetailHeaderProps = Pick<
  MarketServiceDetailCommon,
  "name" | "remarks" | "tags"
>;

export type MarketServiceDeatilContentImageProps = Pick<
  MarketServiceDetailCommon,
  "images"
>;

export type MarketServiceDetailContentDescriptionProps = Pick<
  MarketServiceDetailCommon,
  "contents"
>;

export type MarketServiceDetailAsideProps = Pick<
  MarketServiceDetailCommon,
  "price" | "seller"
>;

export type MarketServiceDetailContactModalProps = Pick<
  MarketServiceDetailCommon,
  "seller"
> & {
  isModalOpen: boolean;
  toggleModal: () => void;
};

export type MarketServiceDetailContentLocationProps = Pick<
  MarketServiceDetailCommon,
  "travelproductAddress"
>;
