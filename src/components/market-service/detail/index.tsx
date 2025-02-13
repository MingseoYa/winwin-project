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
  const [mapPosition, setMapPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  useEffect(() => {
    if (
      data?.fetchTravelproduct?.travelproductAddress?.lat &&
      data?.fetchTravelproduct?.travelproductAddress?.lng &&
      !mapPosition
    ) {
      setMapPosition({
        lat: data.fetchTravelproduct.travelproductAddress.lat,
        lng: data.fetchTravelproduct.travelproductAddress.lng,
      });
    }
  }, [data, mapPosition]);

  return (
    <main className={styles.container}>
      <MarketServiceDetailHeader />
      <div className={styles.content}>
        <section>
          <MarketServiceDeatilContentImage
            images={data?.fetchTravelproduct.images || []}
          />
          <MarketServiceDetailContentDescription
            contents={data?.fetchTravelproduct.contents || ""}
          />
          {mapPosition && data?.fetchTravelproduct.travelproductAddress && (
            <MarketServiceDetailContentLocation
              lat={mapPosition.lat}
              lng={mapPosition.lng}
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
