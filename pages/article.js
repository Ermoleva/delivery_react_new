import Link from "next/link";
import Image from "next/future/image";
import styles from "../src/styles/components/Article.module.scss";
import inst from "../src/images/inst_icon.svg";
import facebook from "../src/images/facebook_icon.svg";
import back from "../src/images/article_back_arrow.svg";
import { articles as defaultArticles, getArticleBySlug } from "../src/data/articles";
import {
  fetchArticle,
  fetchArticles,
  formatArticleDate,
  getArticleHref,
} from "../src/lib/contentApi";

function ArticleText({ paragraphs }) {
  return (
    <p className={styles.article__text}>
      {paragraphs.map((paragraph, index) => (
        <span key={paragraph}>
          {index > 0 && (
            <>
              <br />
              <br />
            </>
          )}
          {paragraph}
        </span>
      ))}
    </p>
  );
}

function ShareLinks() {
  return (
    <div className={styles.article__share}>
      <p>Поділитися:</p>
      <div className={styles.article__social_item}>
        <a href="#" className={styles.article__social_img_link}>
          <Image
            src={inst}
            alt="Instagram"
            layout="raw"
            className={styles.article__social_img}
          />
        </a>
      </div>
      <div className={styles.article__social_item}>
        <a href="#" className={styles.article__social_img_link}>
          <Image
            src={facebook}
            alt="Facebook"
            layout="raw"
            className={styles.article__social_img}
          />
        </a>
      </div>
    </div>
  );
}

function RelatedArticleCard({ article }) {
  return (
    <div className={styles.articles__item}>
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
        <button className={styles.articles__btn}>
          <Link href={getArticleHref(article.slug)}>
            <a>Докладніше</a>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default function Article({ article, relatedArticles }) {

  return (
    <section className={styles.article}>
      <div className={styles.container}>
        <Image
          src={article.mainImage}
          alt={article.mainImageAlt}
          width={1180}
          height={520}
          layout="raw"
          className={styles.article__img}
        />

        <div className={styles.article__name}>
          <div className={styles.article__title_wrapp}>
            <Link href="/blog">
              <a className={styles.article__back}>
                <Image
                  src={back}
                  alt="Назад"
                  layout="raw"
                  className={styles.article__back_img}
                />
              </a>
            </Link>
            <div className={styles.article__name__wrapp}>
              <h2 className={styles.article__title}>{article.title}</h2>
              <p className={styles.article__date}>{formatArticleDate(article.date)}</p>
            </div>
          </div>
          <ShareLinks />
        </div>

        {article.sections.map((section, index) => (
          <div key={`${article.slug}-${index}`}>
            {section.image && (
              <Image
                src={section.image}
                alt={section.imageAlt}
                width={1180}
                height={520}
                layout="raw"
                className={styles.article__info_img}
              />
            )}
            <ArticleText paragraphs={section.paragraphs} />
          </div>
        ))}

        <div className={styles.article__footer}>
          <Link href="/blog">
            <a className={styles.article__footer_back_link}>
              <Image
                src={back}
                alt="Назад"
                layout="raw"
                className={styles.article__footer_back_img}
              />
              Назад
            </a>
          </Link>
          <div className={styles.article__footer_button}>
            <button className={styles.article__footer_btn}>
              <Link href="/">
                <a>Прогами харчування</a>
              </Link>
            </button>
          </div>
          <ShareLinks />
        </div>

        <div className={styles.article__more}>
          <h2 className={styles.article__more_title}>
           Вас може зацікавити:
          </h2>
          <div className={styles.article__more_items}>
            {relatedArticles.map((relatedArticle) => (
              <RelatedArticleCard
                key={relatedArticle.slug}
                article={relatedArticle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;

  try {
    const [article, articles] = await Promise.all([
      fetchArticle(slug),
      fetchArticles(),
    ]);

    return {
      props: {
        article,
        relatedArticles: articles
          .filter((item) => item.slug !== article.slug)
          .slice(0, 3),
      },
    };
  } catch (error) {
    const article = getArticleBySlug(slug);

    return {
      props: {
        article,
        relatedArticles: defaultArticles
          .filter((item) => item.slug !== article.slug)
          .slice(0, 3),
      },
    };
  }
}
