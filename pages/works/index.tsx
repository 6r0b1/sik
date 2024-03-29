import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { IWork } from "@/types/interfaces";
import { getWorks } from "@/lib/contentful/contentfulCdaClient";

export default function Works({ locale, works }) {
  return (
    <>
      <Head>
        <title>should-I-know: works</title>
        <meta name="description" content="should-i-know" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header
        location={locale.works.title}
        nav={locale.nav}
        lang={locale.lang}
      />
      <main>
        <div className="spacer_50_percent"></div>
        <div className="works_list">
          {works.map((work) => (
            <div className="work_entry" key={work.id}>
              <Link className="work_link" href={`/works/${work.id}`}>
                {work[`title${locale.lang}`]}
              </Link>
              <p>{work[`description${locale.lang}`]}</p>
            </div>
          ))}
        </div>
        <div className="spacer_100"></div>
      </main>
      <Footer nav={locale.nav} />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const works: IWork[] = [
    {
      id: 1,
      title_de: "kaleiDANCEscope (Grenzenlos Kultur Edition) (2022)",
      description_de:
        "kaleiDANCEscope (Grenzenlos Kultur Edition) ist eine Musik-Box für Tänze. kaleiDANCEscope (Grenzenlos Kultur Edition) hat in Mainz während des Grenzenlos Kultur Festivals stattgefunden. Das Besondere in Mainz war, dass es im kaleiDANCEscope Tänze im Dunkeln für blinde Menschen gab.",
      title_en: "kaleiDANCEscope (Grenzenlos Kultur Edition) (2022)",
      description_en:
        "kaleiDANCEscope (grenzenlos edition) is a music box for dances. kaleiDANCEscope (grenzenlos Edition) took place in Mainz during the Grenzenlos Kultur Festival. The unique feature in Mainz was that there were dances in the dark for blind people in the kaleiDANCEscope.",
    },
    {
      id: 2,
      title_de: "kaleiDANCEscope (asphalt Edition) (2022)",
      description_de:
        "kaleiDANCEscope (asphalt Edition) ist eine Musik-Box für Tänze.. kaleiDANCEscope (asphalt Edition) wurde in Düsseldorf auf dem asphalt Festival gezeigt. Das Besondere war, dass das should-I-know lokale Tänzer*innen eingeladen und mit ihnen zusammengearbeitet haben.",
      title_en: "kaleiDANCEscope (asphalt Edition) (2022)",
      description_en:
        "kaleiDANCEscope (asphalt edition) is a music box for dances. kaleiDANCEscope (asphalt Edition) was shown in Düsseldorf at the asphalt Festival. The unique feature was that should-I-know invited local dancers and worked with them.",
    },
    {
      id: 3,
      title_de: "ohne Titel (2021)",
      description_de:
        "should-I-know hatte eine Residenz in der Herderschule in Kooperation mit dem Mousonturm in Frankfurt am Main. Im Mittelpunkt standen spiegelnde Flächen in der Schule und die Reaktionen der Körper darauf.",
      title_en: "untitled (2021)",
      description_en:
        "should-I-know had a residency at the Herderschule in cooperation with the Mousonturm in Frankfurt am Main. The focus was on reflective surfaces in the school and the bodies' reactions to them.",
    },
  ];

  return {
    props: {
      locale: require(`../../locales/${locale}.json`),
      works: works,
      // hi contentful
      // contentful: await getWorks(locale === "de_DE" ? "de-DE" : "en-GB"),
    },
  };
}

// export async function getStaticPaths() {}
