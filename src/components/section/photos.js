import React from "react";
import Slider from "react-slick";
import Image from "next/future/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/components/Photos.module.scss";

const photoSlides = [
  "/images/photo1.png",
  "/images/photo2.png",
  "/images/photo3.png",
  "/images/photo4.png",
  "/images/photo5.png",
  "/images/photo6.png",
  "/images/photo3.png",
  "/images/photo4.png",
  "/images/photo2.png",
  "/images/photo5.png",
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  variableWidth: true,
  swipeToSlide: true,
  draggable: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Photos({ items }) {
  const photos = items?.length ? items.map((item) => item.image || item.image_path) : photoSlides;

  return (
    <section className={styles.photos}>
      <h1 className={styles.photos__title}>Фото страв</h1>
      <Slider {...sliderSettings}>
        {photos.map((photo, index) => (
          <div key={`${photo}-${index}`}>
            <Image
              src={photo}
              alt={`Фото страва ${index + 1}`}
              width={360}
              height={540}
              layout="raw"
              className={styles.photos__img}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
