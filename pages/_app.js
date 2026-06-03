import '../src/styles/globals.css'
import Footer from '../src/components/section/footer';
import Header from '../src/components/section/header';
import TagHead from '../src/components/tag-head.server';

function MyApp({Component, pageProps}) {
    return <>

        <TagHead/>
        <Header/>
        <div className="content">
            <Component {...pageProps} />
        </div>
        <Footer/>

    </>
}

export default MyApp
