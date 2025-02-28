"use client";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CustomArrowProps } from "react-slick";
import useFetchTravelproduct from "@/components/market-service/hook";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button onClick={onClick} type="button" className={styles.next}></button>
  );
};
const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button onClick={onClick} type="button" className={styles.prev}></button>
  );
};

export function MarketServiceDeatilContentImage() {
  const { data } = useFetchTravelproduct();
  const images = data?.fetchTravelproduct.images || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.slider_container}>
      {images.length > 1 ? (
        // 이미지가 2개 이상이면 슬라이더로 렌더링
        <Slider {...settings}>
          {images?.map((src, index) => (
            <div key={src} className={styles.slide}>
              <div className={styles.image_wrapper}>
                <Image
                  src={`https://storage.googleapis.com/${src}`}
                  alt={`슬라이더 이미지 ${index + 1}`}
                  fill
                  className={styles.image}
                  priority
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : images.length === 1 ? (
        // 이미지가 1개만 있을 경우
        <div className={styles.image_wrapper}>
          <Image
            src={`https://storage.googleapis.com/${images[0]}`}
            alt="상품 이미지"
            fill
            className={styles.image}
            priority
          />
        </div>
      ) : (
        // 이미지 없으면 기본 이미지
        <div className={styles.image_wrapper}>
          <Image
            src="/images/default.jpg"
            alt="기본 이미지"
            fill
            className={styles.image}
            priority
          />
        </div>
      )}
    </div>
  );
}
