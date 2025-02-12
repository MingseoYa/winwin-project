"use client";
import CardService from "@/commons/components/card-service";
import styles from "./styles.module.css";
import { useQuery } from "@apollo/client";
import { FetchTravelproductsDocument } from "@/commons/graphql/graphql";
import { ButtonPrimaryMFit } from "@/commons/components/button";
import { useRouter } from "next/navigation";

export function MarketService() {
  const { data } = useQuery(FetchTravelproductsDocument);
  const router = useRouter();
  const onClickService = () => {
    router.push("/market/new");
  };
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>윈윈 마켓</h2>
      </header>
      <div className={styles.button_area}>
        <ButtonPrimaryMFit type="button" onClick={onClickService}>
          서비스 등록
        </ButtonPrimaryMFit>
      </div>
      <div className={styles.card_container}>
        {data?.fetchTravelproducts.map((data) => (
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
