"use client";

import styles from "./styles.module.css";
import Dompurify from "dompurify";
import useFetchTravelproduct from "@/components/market-service/hook";

export default function MarketServiceDetailContentDescription() {
  const { data } = useFetchTravelproduct();
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>서비스 설명</h2>
      {typeof window !== "undefined" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchTravelproduct.contents || ""),
          }}
        />
      ) : (
        <div></div>
      )}
    </section>
  );
}
