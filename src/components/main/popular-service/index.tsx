"use client";
import CardService from "@/commons/components/card-service";
import styles from "./styles.module.css";
import { useQuery } from "@apollo/client";
import {
  FetchTravelproductsOfTheBestDocument,
  FetchTravelproductsOfTheBestQuery,
} from "@/commons/graphql/graphql";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function MainPopularService() {
  const { data } = useQuery<FetchTravelproductsOfTheBestQuery>(
    FetchTravelproductsOfTheBestDocument
  );

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>윈윈 인기 서비스</h2>
        <div className={styles.toMarket}>
          <Link href="/market">전체보기</Link>
          <ChevronRight size={16} />
        </div>
      </header>

      <div className={styles.card_container}>
        {data?.fetchTravelproductsOfTheBest.map((data) => (
          <div key={data._id} className={styles.card_wrapper}>
            <CardService
              _id={data._id}
              images={data.images}
              name={data.name}
              remarks={data.remarks}
              tags={data.tags}
              price={data.price}
              seller={data.seller}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
