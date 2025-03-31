"use client";

import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FetchTravelproductsDocument } from "@/commons/graphql/graphql";
import { ButtonPrimaryMFit } from "@/commons/components/button";
import CardService from "@/commons/components/card-service";
import InfiniteScroll from "react-infinite-scroll-component";

export function MarketService() {
  const router = useRouter();
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FetchTravelproductsDocument);

  const onNext = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchTravelproducts.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchTravelproducts?.length) {
          setHasMore(false);
          return prev;
        }
        return {
          fetchTravelproducts: [
            ...prev.fetchTravelproducts,
            ...fetchMoreResult.fetchTravelproducts,
          ],
        };
      },
    });
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>윈윈 마켓</h2>
      </header>
      <div className={styles.button_area}>
        <ButtonPrimaryMFit
          type="button"
          onClick={() => router.push("/market/new")}
        >
          서비스 등록
        </ButtonPrimaryMFit>
      </div>
      <InfiniteScroll
        next={onNext}
        hasMore={hasMore}
        loader={<div>로딩중</div>}
        dataLength={data?.fetchTravelproducts.length ?? 0}
      >
        <div className={styles.card_wrapper}>
          {data?.fetchTravelproducts.map((item) => (
            <CardService
              key={item._id}
              _id={item._id}
              images={item.images}
              name={item.name}
              remarks={item.remarks}
              tags={item.tags}
              price={item.price}
              seller={item.seller}
            />
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
}
