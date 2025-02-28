import {
  ChevronDown,
  ChevronUp,
  MessageCircleReply,
  Pencil,
  X,
} from "lucide-react";
import styles from "./styles.module.css";
import Image from "next/image";
import AnswerItem from "../answer-item";
import AnswerWrite from "../answer-write";
import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  FetchTravelproductDocument,
  FetchTravelproductQuestionAnswersDocument,
  FetchTravelproductQuestionAnswersQuery,
  FetchUserLoggedInDocument,
} from "@/commons/graphql/graphql";
import { useFormattedDate } from "@/commons/hooks/use-formatted-date";
import { QuestionItemProps } from "./types";
import { useParams } from "next/navigation";

export default function QuestionItem({
  id,
  contents,
  createdAt,
  user,
}: QuestionItemProps) {
  const { formatYYMMDDHHMM } = useFormattedDate(createdAt || "");
  const { serviceId } = useParams() as { serviceId: string };

  const [isAnswer, setIsAnswer] = useState(false); // 답변이 있는지
  const [isArrowDown, setIsArrowDown] = useState(false); // 답변 목록 볼 수 있는 화살표
  const [isQuestionUser, setIsQuestionUser] = useState(false); // 질문한 유저인지
  const [isSeller, setIsSeller] = useState(false); // 서비스 판매하는 유저인지

  // useLazyQuery를 사용하여 클릭 시에만 데이터 불러오기
  const [fetchAnswers, { data, loading }] =
    useLazyQuery<FetchTravelproductQuestionAnswersQuery>(
      FetchTravelproductQuestionAnswersDocument
    );

  const { data: loggedUserData } = useQuery(FetchUserLoggedInDocument);
  const { data: serviceData } = useQuery(FetchTravelproductDocument, {
    variables: { serviceId },
  });

  useEffect(() => {
    setIsQuestionUser(loggedUserData?.fetchUserLoggedIn._id === user._id);
    setIsSeller(
      loggedUserData?.fetchUserLoggedIn._id ===
        serviceData?.fetchTravelproduct.seller?._id
    );
  }, [loggedUserData, user]);

  // 답변 목록 토글
  const toggleArrowDown = async () => {
    if (!isArrowDown) {
      await fetchAnswers({ variables: { serviceQuestionId: id } }); // 버튼 클릭 시에만 데이터를 불러옴
    }
    setIsArrowDown((prev) => !prev);
  };

  // 답변하기 버튼
  const toggleAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  return (
    <div className={styles.question_box}>
      <div className={styles.question_item}>
        <div className={styles.profile_header}>
          <div className={styles.profile}>
            <Image
              src={
                user.picture
                  ? `https://storage.googleapis.com/${user.picture}`
                  : "/images/default-profile.png" // 기본 프로필 이미지
              }
              width={0}
              height={0}
              sizes="100vw"
              className={styles.profile_image}
              alt="프로필"
            />
            <div className={styles.profile_name}>{user.name}</div>
          </div>
          {isQuestionUser && (
            <div className={styles.action_button_container}>
              <Pencil width={20} height={20} className={styles.gray70} />
              <X width={20} height={20} className={styles.gray70} />
            </div>
          )}
        </div>

        <div className={styles.contents}>{contents}</div>
        <div className={styles.bottom}>
          <div className={styles.date}>{formatYYMMDDHHMM}</div>
          {isArrowDown ? (
            <ChevronUp className={styles.gray70} onClick={toggleArrowDown} />
          ) : (
            <ChevronDown className={styles.gray70} onClick={toggleArrowDown} />
          )}
        </div>
      </div>
      <div className={styles.answer}>
        {isSeller && (
          <button
            type="button"
            className={styles.answer_button}
            onClick={toggleAnswer}
          >
            <MessageCircleReply className={styles.gray70} />
            <div>답변 하기</div>
          </button>
        )}
      </div>
      {/* 답변 작성하기 */}
      {isAnswer && (
        <AnswerWrite
          serviceQuestionId={id}
          isEdit={false}
          toggleAnswer={toggleAnswer}
          toggleArrowDown={toggleArrowDown}
        />
      )}

      {/* 답변 리스트 불러오기 (클릭 시에 네트워크 요청 됨) */}
      {isArrowDown && (
        <div className={styles.answer_list}>
          {loading && data?.fetchTravelproductQuestionAnswers.length ? (
            data?.fetchTravelproductQuestionAnswers.map((answer) => (
              <AnswerItem
                key={answer._id}
                contents={answer.contents}
                createdAt={answer.createdAt}
                user={answer.user}
              />
            ))
          ) : (
            <div className={styles.no_answer}>
              아직 답변이 등록되지 않았습니다.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
