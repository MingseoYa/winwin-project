"use client";
import { useQuery } from "@apollo/client";
import styles from "./styles.module.css";
import {
  FetchBoardsOfTheBestDocument,
  FetchBoardsOfTheBestQuery,
} from "@/commons/graphql/graphql";
import CardBoard from "@/commons/components/card-board";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MainPopularBoard() {
  const { data } = useQuery<FetchBoardsOfTheBestQuery>(
    FetchBoardsOfTheBestDocument
  );
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>윈윈 인기 글</h2>
        <div className={styles.toComunity}>
          <Link href="/comunity">전체보기</Link>
          <ChevronRight size={16} />
        </div>
      </header>
      <div className={styles.card_container}>
        {data?.fetchBoardsOfTheBest.map((data) => (
          <CardBoard
            key={data._id}
            _id={data._id}
            writer={data.writer}
            title={data.title}
            contents={data.contents}
            images={data.images}
            likeCount={data.likeCount}
            dislikeCount={data.dislikeCount}
          />
        ))}
      </div>
    </section>
  );
}
