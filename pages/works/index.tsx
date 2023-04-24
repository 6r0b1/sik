import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { IWork } from "@/types/interfaces";

export default function Works({ locale }) {
    const works: IWork[] = [
        {
            id: 1,
            title: "kaleiDANCEscope (Grenzenlos Kultur Edition) (2022)",
            description:
                "kaleiDANCEscope (Grenzenlos Kultur Edition) ist eine Musik-Box für Tänze. kaleiDANCEscope (Grenzenlos Kultur Edition) hat in Mainz während des Grenzenlos Kultur Festivals stattgefunden. Das Besondere in Mainz war, dass es im kaleiDANCEscope Tänze im Dunkeln für blinde Menschen gab.",
        },
        {
            id: 2,
            title: "kaleiDANCEscope (asphalt Edition) (2022)",
            description:
                "kaleiDANCEscope (asphalt Edition) ist eine Musik-Box für Tänze.. kaleiDANCEscope (asphalt Edition) wurde in Düsseldorf auf dem asphalt Festival gezeigt. Das Besondere war, dass das should-I-know lokale Tänzer*innen eingeladen und mit ihnen zusammengearbeitet haben.",
        },
        {
            id: 3,
            title: "ohne Titel (2021)",
            description:
                "should-I-know hatte eine Residenz in der Herderschule in Kooperation mit dem Mousonturm in Frankfurt am Main. Im Mittelpunkt standen spiegelnde Flächen in der Schule und die Reaktionen der Körper darauf.",
        },
    ];
    return (
        <>
            <Head>
                <title>should-I-know: works</title>
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
            <Header location="works" nav={locale.nav} />
            <main>
                <div className="spacer_50_percent"></div>
                <div className="works_list">
                    {works.map((work) => (
                        <div className="work_entry" key={work.id}>
                            <Link
                                className="work_link"
                                href={`/works/${work.id}`}
                            >
                                {work.title}
                            </Link>
                            <p>{work.description}</p>
                        </div>
                    ))}
                </div>
                <div className="spacer_100"></div>
            </main>
            <Footer nav={locale.nav} />
        </>
    );
}

export function getStaticProps({ locale }) {
    return {
        props: {
            locale: require(`../../locales/${locale}.json`),
        },
    };
}
