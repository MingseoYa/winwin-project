"use client";
import { ExternalLink, MessageCircle } from "lucide-react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "../contact";
import { MarketServiceDetailAsideProps } from "../types";
import { useParams } from "next/navigation";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import {
  CreatePointTransactionOfBuyingAndSellingDocument,
  FetchTravelproductDocument,
  FetchUserLoggedInDocument,
} from "@/commons/graphql/graphql";
import { Modal } from "antd";

export function MarketServiceDetailAside({
  price,
  seller,
}: MarketServiceDetailAsideProps) {
  const { serviceId } = useParams() as { serviceId: string };
  const { data: userData, refetch } = useQuery(FetchUserLoggedInDocument);
  const { data } = useQuery(FetchTravelproductDocument, {
    variables: { serviceId },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const [createPoingTransactionOfBuyingAndSelling] = useMutation(
    CreatePointTransactionOfBuyingAndSellingDocument
  );

  const onClickBooking = async () => {
    if (!data) return;
    try {
      const result = await createPoingTransactionOfBuyingAndSelling({
        variables: {
          useritemId: data.fetchTravelproduct._id,
        },
      });
      console.log(result);
      await refetch();
      Modal.success({ content: "예약 완료되었습니다" });
    } catch (error) {
      if (error instanceof ApolloError) {
        // console.error(error?.graphQLErrors[0].message);q
        Modal.error({
          content: error?.graphQLErrors[0].message,
        });
      }
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.card}>
        <div className={styles.price}>{price}원</div>
        <ul className={styles.warnings}>
          <li>윈윈에서 포인트 충전 후 구매하실 수 있습니다.</li>
          <li>상세 설명에 사용기한을 꼭 확인해 주세요.</li>
        </ul>
        <button className={styles.payment_button} onClick={onClickBooking}>
          예약하기
        </button>
      </div>
      <div className={`${styles.card} ${styles.seller_card}`}>
        <div className={styles.seller_info}>
          <Image
            src={
              seller?.picture
                ? `https://storage.googleapis.com/${seller.picture}`
                : "/images/default-profile.png" // 기본 프로필 이미지
            }
            alt="판매자 프로필"
            width={64}
            height={64}
            className={styles.seller_image}
          />
          <div>
            <h3 className={styles.seller_name}>{seller?.name}</h3>
            <p className={styles.seller_title}>{seller?.email}</p>
          </div>
        </div>
        <a href="#" className={styles.portfolio_link}>
          <ExternalLink className={styles.icon} />
          포트폴리오 보기
        </a>
        <button className={styles.inquiry_button} onClick={toggleModal}>
          <MessageCircle className={styles.icon} />
          문의하기
        </button>
        {isModalOpen && (
          <ContactModal
            seller={seller}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
          />
        )}
      </div>
    </div>
  );
}
