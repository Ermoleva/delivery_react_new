import AboutMe from "../src/components/section/AboutMe";
import OurHistory from "../src/components/section/ourHistory";
import Info from "../src/components/section/info"
import Photos from "../src/components/section/photos";
import Form from "../src/components/section/Form";

export default function About() {
    return (
        <>
            <AboutMe/>
            <OurHistory />
            <Info />
            <Photos />
            <Form />
        </>
    )
}
