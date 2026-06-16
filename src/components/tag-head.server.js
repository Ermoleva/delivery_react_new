import Head from 'next/head';

const SITE_HOME = '/';
const SITE_TITLE = 'RatoChef';
const SITE_DESCRIPTION = 'RatoChef - сервіс правильного харчування з доставкою додому.';

export default function TagHead ({title}) {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/public/favicon.ico"/>
            <title>{title ?? SITE_TITLE}</title>
            <meta name="description" content={SITE_DESCRIPTION}/>
            <link rel="canonical" href={SITE_HOME}/>
            <meta property="og:title" content={SITE_TITLE}/>
            <meta property="og:description" content={SITE_DESCRIPTION}/>
            <meta property="og:url" content={SITE_HOME}/>
            <meta property="og:site_name" content="RatoChef"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content="/logotype.png"/>
            {/* <meta property="og:image:width" content="2500"/> */}
            {/* <meta property="og:image:height" content="1330"/> */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={SITE_TITLE}/>
            <meta name="twitter:description" content={SITE_DESCRIPTION}/>
            <meta name="twitter:image" content="/logotype.png"/>
            <meta name="fb_admins_meta_tag" content="RatoChef"/>
            <meta property="fb:admins" content="RatoChef"/>
        </Head>
    );
}
