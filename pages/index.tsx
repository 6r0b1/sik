import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ locale }) {
  return (
    <>
      <Head>
        <title>should-I-know</title>
        <meta name="description" content="should-i-know" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Header location="" nav={locale.nav} lang={locale.lang} />
        <video
          className="hero_background"
          src="/statics/backdrop_01.mov"
          autoPlay
          muted
          loop
          playsInline
          poster="/statics/backdrop_01.jpg"
        ></video>
        <div className="hero">
          <div className="hero_txt">
            <h1>
              should-
              <br />
              I-know
            </h1>
          </div>
          <Footer nav={locale.nav} />
        </div>
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

// export const getServerSideProps = withSessionSsr(
//     async ({ req, res, locale }) => {
//         const user = req.session.user;

//         if (!user) {
//             return {
//                 notFound: true,
//             };
//         }

//         return {
//             props: {
//                 locale: require(`../locales/${locale}.json`),
//             },
//         };
//     }
// );
