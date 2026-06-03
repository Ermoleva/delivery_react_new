import Link from "next/link";
import Image from "next/future/image";
import styles from "../../styles/components/Articles.module.scss";
import { articles as defaultArticles } from "../../data/articles";
import { formatArticleDate, getArticleHref } from "../../lib/contentApi";

export default function Articles({ items = defaultArticles }) {
  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.articles__items}>
          {items.map((article) => (
            <article key={article.slug} className={styles.articles__item}>
              <Link href={getArticleHref(article.slug)}>
                <a className={styles.articles__link}>
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    width={380}
                    height={260}
                    layout="raw"
                    className={styles.articles__img}
                  />
                </a>
              </Link>

              <h2 className={styles.articles__title}>{article.title}</h2>

              <div className={styles.articles__info}>
                <p className={styles.articles__date}>{formatArticleDate(article.date)}</p>
                <Link href={getArticleHref(article.slug)}>
                  <a className={styles.articles__btn}>Докладніше</a>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
