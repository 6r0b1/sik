import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Accessibility({ locale }) {
    return (
        <>
            <Head>
                <title>should-I-know: Barrierefreiheit</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main>
                <Header location={locale.accessibility.title} />

                <div className="spacer_50_percent"></div>
                <div className="works_main">
                    <div className="work_details">
                        <h2>{locale.accessibility.subtitle_01}</h2>
                        {locale.accessibility.text_01.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                        <h2>{locale.accessibility.subtitle_02}</h2>
                        <p>{locale.accessibility.text_02}</p>
                        <p>info@sould-i-know.de</p>
                    </div>
                </div>
                <div className="spacer_100"></div>
                <Footer nav={locale.nav} />
            </main>
        </>
    );
}

export function getStaticProps({ locale }) {
    return {
        props: {
            locale: require(`../locales/${locale}.json`),
        },
    };
}
