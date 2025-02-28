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

import { QuestionItemProps } from "./types";
import { useFormattedDate } from "@/commons/hooks/use-formatted-date";
import useQuestionItem from "./hook";

export default function QuestionItem({
  id,
  contents,
  createdAt,
  user,
}: QuestionItemProps) {
  const { formatYYMMDDHHMM } = useFormattedDate(createdAt || "");
  const {
    isAnswer,
    isArrowDown,
    isQuestionUser,
    isSeller,
    data,
    loading,
    toggleArrowDown,
    toggleAnswer,
  } = useQuestionItem({ id, user });
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
