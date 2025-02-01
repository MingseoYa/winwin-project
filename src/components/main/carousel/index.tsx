"use client";

import styles from "./styles.module.css";

import dynamic from "next/dynamic";
import Image from "next/image";
import { CustomArrowProps } from "react-slick";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const images = [
  "/images/banner-1.jpg",
  "/images/banner-2.jpg",
  "/images/banner-3.jpg",
];

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

export default function MainCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // 화살표 버튼을 커스텀해서 사용
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.image_wrapper}>
              <Image
                src={src}
                alt={`슬라이더 이미지 ${index + 1}`}
                fill
                className={styles.image}
                priority
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
