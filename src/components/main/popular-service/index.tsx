"use client";
import CardService from "@/commons/components/card-service";
import styles from "./styles.module.css";
import { useQuery } from "@apollo/client";
import {
  FetchTravelproductsOfTheBestDocument,
  FetchTravelproductsOfTheBestQuery,
} from "@/commons/graphql/graphql";

export function MainPopularService() {
  const { data } = useQuery<FetchTravelproductsOfTheBestQuery>(
    FetchTravelproductsOfTheBestDocument
  );
  console.log(data?.fetchTravelproductsOfTheBest);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>윈윈 인기 서비스</h2>
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
