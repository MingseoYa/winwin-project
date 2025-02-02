"use client";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";
import { useQuery } from "@apollo/client";
import {
  FetchTravelproductDocument,
  FetchTravelproductQuery,
} from "@/commons/graphql/graphql";
import MarketServiceDetailHeader from "./header";
export default function MarketServiceDetail() {
  const { serviceId } = useParams() as { serviceId: string };
  const { data } = useQuery<FetchTravelproductQuery>(
    FetchTravelproductDocument,
    {
      variables: { serviceId },
    }
  );
  console.log(data?.fetchTravelproduct);
  return (
    <main className={styles.container}>
      <MarketServiceDetailHeader
        name={data?.fetchTravelproduct.name || ""}
        remarks={data?.fetchTravelproduct.remarks || ""}
        tags={data?.fetchTravelproduct.tags}
      />
      <div className={styles.content}>
        <section>
          {/* 사진 */}
          {/* 설명 */}
          {/* 위치 */}
        </section>
        <aside>{/* 문의하기모달 */}</aside>
      </div>
    </main>
  );
}
