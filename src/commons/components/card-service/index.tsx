import Image from "next/image";
import styles from "./styles.module.css";
import { formatPrice } from "@/commons/utils/format-price";
import { ICardServiceProps } from "./types";
import Link from "next/link";

// 메인 페이지, 마켓 페이지에서 사용하는 service 공통 컴포넌트

export default function CardService({
  _id,
  images,
  name,
  remarks,
  tags,
  price,
  seller,
}: ICardServiceProps) {
  const image = images?.length
    ? `https://storage.googleapis.com/${images[0]}`
    : "/images/default.jpg";
  return (
    <Link href={`/market/${_id}`}>
      <div className={styles.card}>
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          className={styles.card_image}
          alt=""
        />
        <div className={styles.contents}>
          <div className={styles.contents_top}>
            <h3 className={styles.name}>{name}</h3>
            <h4 className={styles.remarks}>{remarks}</h4>
          </div>
          <div className={styles.contents_bottom}>
            <h4 className={styles.tags}>
              {tags?.length ? tags.join(" ") : "\u00A0"}
            </h4>
            <div className={styles.bottom}>
              <div className={styles.user}>
                <Image
                  src="/images/default-profile.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.user_image}
                  alt="userImage"
                />
                <h4 className={styles.user_name}>{seller?.name}</h4>
              </div>
              <h3 className={styles.price}>{price && formatPrice(price)} 원</h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
