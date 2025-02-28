"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import ContactModal from "../contact";
import useFetchTravelproduct from "../../hook";
import { useState } from "react";
import { ExternalLink, MessageCircle } from "lucide-react";
import { Modal } from "antd";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import {
  CreatePointTransactionOfBuyingAndSellingDocument,
  FetchUserLoggedInDocument,
} from "@/commons/graphql/graphql";

export function MarketServiceDetailAside() {
  const { data } = useFetchTravelproduct();
  const { refetch } = useQuery(FetchUserLoggedInDocument);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // 예약하기 뮤테이션
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
      // 사용자 포인트 차감 반영 위해 refetch
      await refetch();
      Modal.success({ content: "예약 완료되었습니다" });
    } catch (error) {
      if (error instanceof ApolloError) {
        Modal.error({
          content: error?.graphQLErrors[0].message,
        });
      }
    }
  };

  return (
    <div className={styles.sidebar}>
      {/* 예약하기 카드 */}
      <div className={styles.card}>
        <div className={styles.price}>
          {data?.fetchTravelproduct.price?.toLocaleString()}원
        </div>
        <ul className={styles.warnings}>
          <li>윈윈에서 포인트 충전 후 구매하실 수 있습니다.</li>
          <li>상세 설명에 사용기한을 꼭 확인해 주세요.</li>
        </ul>
        <button className={styles.payment_button} onClick={onClickBooking}>
          예약하기
        </button>
      </div>

      {/* 판매자 정보 및 문의하기 카드 */}
      <div className={`${styles.card} ${styles.seller_card}`}>
        <div className={styles.seller_info}>
          <Image
            src={
              data?.fetchTravelproduct.seller?.picture
                ? `https://storage.googleapis.com/${data.fetchTravelproduct.seller.picture}`
                : "/images/default-profile.png" // 기본 프로필 이미지
            }
            alt="판매자 프로필"
            width={64}
            height={64}
            className={styles.seller_image}
          />
          <div>
            <h3 className={styles.seller_name}>
              {data?.fetchTravelproduct.seller?.name}
            </h3>
            <p className={styles.seller_title}>
              {data?.fetchTravelproduct.seller?.email}
            </p>
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
        {/* 문의하기 모달 */}
        {isModalOpen && (
          <ContactModal
            seller={data?.fetchTravelproduct.seller}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
          />
        )}
      </div>
    </div>
  );
}
