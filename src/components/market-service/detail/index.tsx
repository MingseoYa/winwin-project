"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import styles from "./styles.module.css";
import {
  FetchTravelproductDocument,
  FetchTravelproductQuery,
} from "@/commons/graphql/graphql";
import MarketServiceDetailHeader from "./header";
import { MarketServiceDeatilContentImage } from "./content/image";
import { MarketServiceDetailAside } from "./aside";
import MarketServiceDetailContentDescription from "./content/description";
import MarketServiceDetailContentLocation from "./content/location";
import { useEffect, useState } from "react";
export default function MarketServiceDetail() {
  const { serviceId } = useParams() as { serviceId: string };
  const { data } = useQuery<FetchTravelproductQuery>(
    FetchTravelproductDocument,
    {
      variables: { serviceId },
    }
  );
  // const [mapPosition, setMapPosition] = useState<number | null>(null);
  // data가 로드된 후 카카오맵 초기화
  // useEffect(() => {
  //   if (data?.fetchTravelproduct?.travelproductAddress && !mapPosition) {
  //     setMapPosition({
  //       lat: data.fetchTravelproduct.travelproductAddress.lat,
  //       lng: data.fetchTravelproduct.travelproductAddress.lng,
  //     });
  //   }
  // }, [data, mapPosition]);
  // console.log("mapPosition: ", mapPosition);
  return (
    <main className={styles.container}>
      <MarketServiceDetailHeader
        name={data?.fetchTravelproduct.name || ""}
        remarks={data?.fetchTravelproduct.remarks || ""}
        tags={data?.fetchTravelproduct.tags || []}
      />
      <div className={styles.content}>
        <section>
          <MarketServiceDeatilContentImage
            images={data?.fetchTravelproduct.images || []}
          />
          <MarketServiceDetailContentDescription
            contents={data?.fetchTravelproduct.contents || ""}
          />
          {data?.fetchTravelproduct.travelproductAddress && (
            <MarketServiceDetailContentLocation
              travelproductAddress={
                data.fetchTravelproduct.travelproductAddress
              }
            />
          )}
        </section>
        <aside>
          <MarketServiceDetailAside
            price={data?.fetchTravelproduct.price || 0}
            seller={data?.fetchTravelproduct.seller}
          />
        </aside>
      </div>
    </main>
  );
}
