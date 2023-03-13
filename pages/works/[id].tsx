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
            description_long:
                "Id est officid que sit et vellaboreic tem quis rehendae laut iliquia cuptatame simetur? Quiatur aut omnisquatur as eum, ut porpossimus sum renducidenis explitaspit untet alitio. Is et voluptatqui omnime oditatem.",
            main_img_src: "/works/images/kaleidanceskope_08_web_kuekelhahn.jpg",
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
            <main>
                <Header location="works | details" />
                <div className="spacer_100"></div>
                <Image
                    src={`${works[0].main_img_src}`}
                    alt={works[0].title}
                    width={1400}
                    height={820}
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className="spacer_100"></div>
                <div className="works_main">
                    <div className="work_details">
                        <h2>{works[0].title}</h2>
                        <p>{works[0].description_long}</p>
                    </div>
                    <div className="dates"></div>
                </div>
                <Footer />
            </main>
        </>
    );
}
