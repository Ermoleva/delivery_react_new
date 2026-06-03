import styles from '../src/styles/components/Shop.module.scss'
import Articles from "../src/components/section/articles";
import { articles as defaultArticles } from "../src/data/articles";
import { fetchArticles } from "../src/lib/contentApi";

export default function Blog({ articles }) {
    return (
       <>
           <Articles items={articles} />
       </>
    )
}

export async function getServerSideProps() {
    try {
        const articles = await fetchArticles();
        return { props: { articles } };
    } catch (error) {
        return { props: { articles: defaultArticles } };
    }
}
