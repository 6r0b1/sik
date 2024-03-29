import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy({ locale }) {
  return (
    <>
      <Head>
        <title>should-I-know: Datenschutz</title>
        <meta name="description" content="should-i-know" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header
        location={locale.privacy.subtitle_01}
        nav={locale.nav}
        lang={locale.lang}
      />
      <main>
        <div className="spacer_50_percent"></div>
        <div className="works_main">
          <div className="work_details">
            <h2>{locale.privacy.title}</h2>
            {locale.privacy.preamble.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2>{locale.privacy.subtitle_01}</h2>
            {locale.privacy.text_01.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2>{locale.privacy.subtitle_02}</h2>
            {locale.privacy.text_02.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2>{locale.privacy.subtitle_03}</h2>
            {locale.privacy.text_03.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2>{locale.privacy.subtitle_04}</h2>
            {locale.privacy.text_04.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2>{locale.privacy.subtitle_05}</h2>
            {locale.privacy.text_05.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2>{locale.privacy.subtitle_06}</h2>
            {locale.privacy.text_06.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="spacer_100"></div>

        <div className="spacer_100"></div>
      </main>
      <Footer nav={locale.nav} />
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
