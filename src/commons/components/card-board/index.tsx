import Image from "next/image";
import styles from "./styles.module.css";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { ICardProductProps } from "./types";

export default function CardBoard({
  _id,
  writer,
  title,
  contents,
  likeCount,
  dislikeCount,
  images,
}: ICardProductProps) {
  const image = images?.length
    ? `https://storage.googleapis.com/${images[0]}`
    : "/images/default.jpg";
  return (
    <Link href={`/comunity/${_id}`}>
      <div className={styles.card}>
        {/* 왼쪽 */}
        <div className={styles.left_area}>
          <p className={styles.writer}>{writer}</p>
          <p className={styles.title}>{title}</p>
          {/* TODO: 에디터 내용 */}
          <p className={styles.contents}>{contents}</p>
          <div className={styles.icon_area}>
            <div className={styles.like}>
              <ThumbsUp color="#c7c7c7" size={16} />
              <p className={styles.like_count}>{likeCount}</p>
            </div>
            <div className={styles.dislike}>
              <ThumbsDown color="#c7c7c7" size={16} />
              <p className={styles.dislike_count}>{dislikeCount}</p>
            </div>
          </div>
        </div>
        {/* 오른쪽-사진 */}
        <div className={styles.right_area}>
          <Image
            src={image}
            width={0}
            height={0}
            alt="thumbnail"
            sizes="100vw"
            className={styles.thumbnail}
          />
        </div>
      </div>
    </Link>
  );
}
