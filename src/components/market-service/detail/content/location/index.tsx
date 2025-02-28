"use client";

import { KakaoMapStandardSFull } from "@/commons/components/map";
import styles from "./styles.module.css";
import useFetchTravelproduct from "@/components/market-service/hook";

export default function MarketServiceDetailContentLocation() {
  const { data } = useFetchTravelproduct();
  const travelproduct = data?.fetchTravelproduct;
  const address = travelproduct?.travelproductAddress;
  const lat = address?.lat;
  const lng = address?.lng;

  // lat, lng 값이 없으면 아무것도 렌더링 하지 않음
  if (!lat || !lng) return null;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>서비스 지역</h2>
      <KakaoMapStandardSFull lat={lat} lng={lng} />
    </section>
  );
}
