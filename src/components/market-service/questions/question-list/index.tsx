"use client";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";
import { useQuery } from "@apollo/client";
import {
  FetchTravelproductQuestionsDocument,
  FetchTravelproductQuestionsQuery,
} from "@/commons/graphql/graphql";
import QuestionItem from "../question-item";

export function MarketServiceDetailQuestions() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { data } = useQuery<FetchTravelproductQuestionsQuery>(
    FetchTravelproductQuestionsDocument,
    {
      variables: { serviceId },
    }
  );
  console.log(data?.fetchTravelproductQuestions);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>서비스 문의</h2>
      {data && data?.fetchTravelproductQuestions.length > 0 ? (
        <div>
          {data?.fetchTravelproductQuestions.map((question) => (
            <QuestionItem
              key={question._id}
              id={question._id}
              contents={question.contents}
              createdAt={question.createdAt}
              user={question.user}
            />
          ))}
        </div>
      ) : (
        <div className={styles.no_question}>등록된 문의사항이 없습니다.</div>
      )}
    </section>
  );
}
