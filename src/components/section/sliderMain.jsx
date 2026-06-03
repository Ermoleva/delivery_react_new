import React from "react";
import Slider from "react-slick";
import Image from "next/future/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/components/SliderMain.module.scss";

const slides = [
  {
    id: "detox",
    image: "/images/slider1.png",
    imageAlt: "Detox програма",
    title: "Detox-програма - смачне очищення організму",
    subtitle: "8 пляшечок натуральних смузі та фрешів.",
    ctaLabel: "Замовити",
    ctaText: "Пробний день усього: 427 грн",
  },
  {
    id: "healthy-food",
    image: "/images/slider2.png",
    imageAlt: "Сервіс правильного харчування",
    title: "Сервіс правильного харчування. Худни швидко!",
    subtitle: null,
    ctaLabel: "Замовити",
    ctaText: "Пробний день -30%",
  },
  {
    id: "coach",
    image: "/images/slider3.png",
    imageAlt: "Кобилинський Кирило",
    title: "Довіртеся професіоналам. Я Кобилинський Кирило",
    subtitle:
      "Майстер спорту України з важкої атлетики. Вища освіта інституту фізкультури (НУФВСУ).",
    ctaLabel: "Мій Instagram",
    ctaText: "Завжди відкритий для клієнтів",
  },
  {
    id: "keto",
    image: "/images/slider4.png",
    imageAlt: "Кето-харчування",
    title: "Кето-харчування - смачне та екстремально швидке схуднення",
    subtitle: "4 прийоми їжі.",
    ctaLabel: "Замовити",
    ctaText: "Пробний день від 490 грн",
  },
];

function ArrowLeft({ className, onClick }) {
  return (
    <button
      type="button"
      className={`${className || ""} ${styles.arrow__left}`}
      onClick={onClick}
      aria-label="Попередній слайд"
    />
  );
}

function ArrowRight({ className, onClick }) {
  return (
    <button
      type="button"
      className={`${className || ""} ${styles.arrow__right}`}
      onClick={onClick}
      aria-label="Следующий слайд"
    />
  );
}

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 600,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  cssEase: "ease",
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
};

export default function SliderMain({ items = slides }) {
  return (
    <section className={styles.slider} aria-label="Головний слайдер">
      <Slider {...sliderSettings}>
        {items.map((slide) => (
          <div key={slide.id} className={styles.slider__item}>
            <div className={styles.slider__wrapp}>
              <div className={styles.slider__wrapp_text}>
                <h1 className={styles.slider__title}>{slide.title}</h1>
                {slide.subtitle ? (
                  <h2 className={styles.slider__subtitle}>{slide.subtitle}</h2>
                ) : null}
                <div className={styles.slider__link}>
                  <a href="#" className={styles.slider__button}>
                    {slide.ctaLabel}
                  </a>
                  <p className={styles.slider__link_text}>{slide.ctaText}</p>
                </div>
              </div>
              <div className={styles.slider__pic}>
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  width={620}
                  height={520}
                  layout="raw"
                  className={styles.slider__img}
                  priority={slide.id === "detox"}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
