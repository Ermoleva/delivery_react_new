import Image from "next/future/image";
import styles from "../../styles/components/OurHistory.module.scss";
import history from "../../images/history_img.png";
import photo from "../../images/photo_team.png";

const historyParagraphs = [
  "Довгий час я спостерігав, як людям бракує часу для правильного і здорового харчування, навіть просто регулярного харчування.",
  "Вони могли поснідати, в обід з'їсти щось на кшталт шаурми або снека, а ввечері через голод наїстися, що погано впливало на їхній обмін речовин і, звичайно, здоров'я.",
  "Бажання хоч якось змінити ситуацію і допомогти людям не давало мені спокою, тому я вирішив відкрити доставку їжі правильного харчування.",
  "Я зі своїм 17-річним досвідом у спорті та професійною освітою разом із дієтологом розробив раціони правильного харчування з підрахунком калорій (КБЖВ).",
];

export default function OurHistory() {
  return (
    <>
      <section className={styles.history}>
        <Image
          src={history}
          alt="История GastroChef"
          layout="raw"
          className={styles.history__img}
        />

        <div className={styles.history__info}>
          <h2 className={styles.history__info_title}>
            Історія GastroChef почалася понад 6 років тому...
          </h2>

          {historyParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.history__info_text}>
              {paragraph}
            </p>
          ))}

          <h3 className={styles.history__info_subtitle}>
            Знайомтеся! Команда GastroChef!
          </h3>
        </div>
      </section>

      <section className={styles.photo}>
        <Image
          src={photo}
          alt="Команда GastroChef"
          layout="raw"
          className={styles.photo__img}
        />
      </section>
    </>
  );
}
