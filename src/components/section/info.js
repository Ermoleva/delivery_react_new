import Image from "next/future/image";
import styles from "../../styles/components/Info.module.scss";
import inst from "../../images/inst_icon.svg";
import facebook from "../../images/facebook_icon.svg";
import info from "../../images/info_png.png";

const socialLinks = [
  {
    id: "instagram",
    href: "#",
    icon: inst,
    label: "Instagram GastroChef",
  },
  {
    id: "facebook",
    href: "#",
    icon: facebook,
    label: "Facebook GastroChef",
  },
];

const infoParagraphs = [
  "GastroChef - правильне харчування з доставкою додому, створене, щоб полегшити життя, звільнити час від готування, зайвих перекусів і фастфуду та дати можливість почуватися легко, повним енергії й сил для нових звершень і перемог.",
  "Усі продукти для приготування правильного харчування закуповуються тільки з сертифікатами, а раціони готуються на сучасній і безпечній кухні вночі перед приїздом до вас!",
];

export default function Info() {
  return (
    <section className={styles.info}>
      <div className={styles.info__wrapp}>
        <h2 className={styles.info__title}>«GastroChef – легко для зайнятих»</h2>

        {infoParagraphs.map((paragraph) => (
          <p key={paragraph} className={styles.info__text}>
            {paragraph}
          </p>
        ))}

        <p className={styles.info__text_main}>
          Друзі, якщо у вас залишилися питання, ви можете легко зателефонувати
          нам або написати мені особисто в Instagram чи Facebook.
        </p>

        <h3 className={styles.info__subtitle}>
          З повагою, Кобилинський Кирило.
        </h3>

        <div className={styles.info__social}>
          <div className={styles.info__social_icon}>
            {socialLinks.map((socialLink) => (
              <div key={socialLink.id} className={styles.info__social_item}>
                <a
                  href={socialLink.href}
                  className={styles.info__social_img_link}
                  aria-label={socialLink.label}
                >
                  <Image
                    src={socialLink.icon}
                    alt={socialLink.label}
                    layout="raw"
                    className={styles.info__social_img}
                  />
                </a>
              </div>
            ))}
          </div>
          <p className={styles.info__social_text}>- Я в соціальних мережах</p>
        </div>
      </div>

      <Image
        src={info}
        alt="Інформація про GastroChef"
        layout="raw"
        className={styles.info__img}
      />
    </section>
  );
}
