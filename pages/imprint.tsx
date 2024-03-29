import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy({ locale }) {
  return (
    <>
      <Head>
        <title>should-I-know: Impressum</title>
        <meta name="description" content="should-i-know" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header
        location={locale.imprint.title}
        nav={locale.nav}
        lang={locale.lang}
      />
      <main>
        <div className="spacer_50_percent"></div>
        <div className="works_main">
          <div className="imprint_details">
            <div className="contributor">
              <h2>{locale.imprint.title}</h2>
              <div>
                {locale.imprint.preamble.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="contributors_container">
              <div className="contributor">
                <h2>{locale.imprint.subtitle_01}</h2>
                <div>
                  {locale.imprint.text_01.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://pinkblau.de"
                  >
                    <p>www.pinkblau.de</p>
                  </a>
                </div>
              </div>
              <div className="contributor">
                <h2>{locale.imprint.subtitle_02}</h2>
                <div>
                  {locale.imprint.text_02.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://annikarestin.com/"
                  >
                    <p>www.annikarestin.com/</p>
                  </a>
                </div>
              </div>
              <div className="contributor">
                <h2>{locale.imprint.subtitle_03}</h2>
                {locale.imprint.text_03.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="sponsors_container">
              <div className="contributor">
                <h2>{locale.imprint.subtitle_04}</h2>
                <div>
                  {locale.imprint.text_04.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="contributor_image">
                <Image
                  src="/assets/sponsor_logos/AK_Kultur und Wissenschaft_Farbig_CMYK.jpg"
                  alt="Annika Restin"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="contributor_image">
                <Image
                  src="/assets/sponsor_logos/LFDK_Logo_4f.jpg"
                  alt="Annika Restin"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
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
