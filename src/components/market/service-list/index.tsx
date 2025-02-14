"use client";
import styles from "./styles.module.css";
import { useQuery } from "@apollo/client";
import { FetchTravelproductsDocument } from "@/commons/graphql/graphql";
import { ButtonPrimaryMFit } from "@/commons/components/button";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FixedSizeGrid as Grid } from "react-window";
import CardService from "@/commons/components/card-service";

export function MarketService() {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FetchTravelproductsDocument);
  const router = useRouter();
  const listRef = useRef(null);

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

  const columnCount = 5;
  const rowHeight = 332;
  const rowCount = Math.ceil(
    (data?.fetchTravelproducts.length ?? 0) / columnCount
  );
  const totalHeight = rowHeight * rowCount;
  const items = data?.fetchTravelproducts ?? [];

  // 스크롤이 없는 경우 자동으로 onNext() 실행하여 데이터 로드
  useEffect(() => {
    const checkScroll = () => {
      if (window.innerHeight >= document.body.scrollHeight) {
        onNext(); // 화면이 커서 스크롤이 없을 경우 자동으로 데이터 로드
      }
    };
    checkScroll(); // 초기 실행
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [items.length]);

  return (
    <section className={styles.container} style={{ minHeight: "150vh" }}>
      {/* ✅ 강제 스크롤 생성 */}
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
        dataLength={items.length}
        next={onNext}
        hasMore={hasMore}
        loader={<p>로딩중...</p>}
        scrollThreshold={0.9} // 90% 스크롤을 내렸을 때 onNext()가 실행될지를 결정
      >
        <Grid
          ref={listRef}
          columnCount={columnCount}
          rowCount={rowCount}
          columnWidth={227}
          rowHeight={rowHeight}
          width={1136}
          height={totalHeight}
          itemData={items}
          outerElementType={OuterElement}
        >
          {({ columnIndex, rowIndex, style, data }) => {
            const itemIndex = rowIndex * columnCount + columnIndex;
            const item = data?.[itemIndex];
            if (!item) return null;

            return (
              <div
                key={item._id}
                style={{ ...style }}
                className={styles.card_wrapper}
              >
                <CardService
                  _id={item._id}
                  images={item.images}
                  name={item.name}
                  remarks={item.remarks}
                  tags={item.tags}
                  price={item.price}
                  seller={item.seller}
                />
              </div>
            );
          }}
        </Grid>
      </InfiniteScroll>
    </section>
  );
}

// 내부 스크롤 제거를 위한 커스텀 컴포넌트 적용
const OuterElement = ({ children, ...props }) => (
  <div {...props} style={{ position: "relative" }}>
    {children}
  </div>
);
