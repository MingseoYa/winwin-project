import { CornerDownRight } from "lucide-react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useFormattedDate } from "@/commons/hooks/use-formatted-date";
import { QuestionItemProps } from "./types";

export default function AnswerItem({
  contents,
  createdAt,
  user,
}: QuestionItemProps) {
  const { formatYYMMDDHHMM } = useFormattedDate(createdAt || "");
  return (
    <div className={styles.question_box}>
      <div className={styles.left}>
        <CornerDownRight className={styles.gray70} />
      </div>
      <div className={styles.question_item}>
        <div className={styles.profile_header}>
          <div className={styles.profile}>
            <Image
              src={
                user?.picture
                  ? `https://storage.googleapis.com/${user.picture}`
                  : "/images/default-profile.png" // 기본 프로필 이미지
              }
              width={0}
              height={0}
              sizes="100vw"
              className={styles.profile_image}
              alt="프로필"
            />
            <div className={styles.profile_name}>{user?.name}</div>
          </div>
        </div>

        <div className={styles.contents}>{contents}</div>
        <div className={styles.date}>{formatYYMMDDHHMM}</div>
      </div>
    </div>
  );
}
