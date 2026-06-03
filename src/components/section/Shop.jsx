import Link from "next/link";
import Image from "next/future/image";
import styles from "../../styles/components/Shop.module.scss";
import first from "../../images/shop-candy.png";
import second from "../../images/shop-granols.png";

const shopItems = [
  {
    id: "candy",
    title: "Корисні цукерки",
    href: "/shopItem",
    image: first,
    imageAlt: "Корисні цукерки",
    itemClassName: styles.shop__item,
    linkClassName: styles.shop__more_link,
  },
  {
    id: "granola",
    title: "Гранола",
    href: "/shopItem",
    image: second,
    imageAlt: "Гранола",
    itemClassName: styles.shop__item_soon,
    linkClassName: styles.shop__more_link_soon,
  },
];

export default function Products() {
  return (
    <section className={styles.shop}>
      <div className={styles.container}>
        <div className={styles.shop__items}>
          {shopItems.map((item) => (
            <div key={item.id} className={item.itemClassName}>
              <Link href={item.href}>
                <a>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    layout="raw"
                    className={styles.shop__img}
                  />
                </a>
              </Link>

              <div className={styles.shop__name}>
                <h2 className={styles.shop__title}>{item.title}</h2>
                <Link href={item.href}>
                  <a className={item.linkClassName}>
                    <span className={styles.shop__more_btn}>Ассортимент</span>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
