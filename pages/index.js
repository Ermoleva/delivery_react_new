import Slider from "../src/components/section/sliderMain"
import Component from "../src/components/section/tabs"
import Advantage from "../src/components/section/Advantage";
import Photos from "../src/components/section/photos";
import Form from "../src/components/section/Form";
import { fetchContent, fetchPrograms } from "../src/lib/contentApi";

export default function Home({ slides, advantages, programs, gallery }) {
    return (
        <>
            <Slider items={slides}/>
            <Advantage items={advantages} />
            <Component programs={programs} />
            <Photos items={gallery} />
            <Form />

        </>
    )
}

export async function getServerSideProps() {
    try {
        const [slides, advantages, programs, gallery] = await Promise.all([
            fetchContent("slides"),
            fetchContent("advantages"),
            fetchPrograms(),
            fetchContent("gallery"),
        ]);

        return { props: { slides, advantages, programs, gallery } };
    } catch (error) {
        return { props: {} };
    }
}
