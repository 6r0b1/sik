import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { IWork } from "@/types/interfaces";

export default function Works() {
    const works: IWork[] = [
        {
            id: 1,
            title: "kaleiDANCEscope (Edition asphalt Festival)",
            description:
                "Id est officid que sit et vellaboreic tem quis rehendae laut iliquia cuptatame simetur? Quiatur aut omnisquatur as eum, ut porpossimus sum renducidenis explitaspit untet alitio. Is et voluptatqui omnime oditatem.",
        },
        {
            id: 2,
            title: "Other Performance Title",
            description:
                "Id est officid que sit et vellaboreic tem quis rehendae laut iliquia cuptatame simetur? Quiatur aut omnisquatur as eum, ut porpossimus sum renducidenis explitaspit untet alitio. Is et voluptatqui omnime oditatem.Mus sam quatibus. Bo. Epeditio. Cusdam et estibus, quos explign atquasp erferita quae eatia comnit expe con preius rerovit!",
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
            <Header location="works" />
            <main>
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
            </main>
            <Footer />
        </>
    );
}
