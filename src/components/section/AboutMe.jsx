import Image from "next/future/image";
import styles from "../../styles/components/About.module.scss";
import image from "../../images/slider3.png";

const aboutParagraphs = [
  "Я майстер спорту України з важкої атлетики, а також був у складі збірної України.",
  "У мене вища освіта Національного університету фізичного виховання і спорту України (НУФВСУ), а також у минулому я професійний фітнес-тренер!",
];

export default function AboutMe() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about__info}>
          <h2 className={styles.about__info_title}>
            Вітаю! Мене звуть <span>Іванов Іван</span>, і я є {" "}
            <span>засновником RatoChef.</span>
          </h2>

          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.about__info_text}>
              {paragraph}
            </p>
          ))}

          <h3 className={styles.about__info_subtitle}>
            І я хочу Вам розповісти більше про RatoChef.
          </h3>
        </div>

        <Image
          src={image}
          alt="Основатель RatoChef"
          layout="raw"
          className={styles.about__img}
        />
      </div>
    </section>
  );
}
