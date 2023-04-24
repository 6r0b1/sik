import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LightBox from "../../components/LightBox";

import { IWork } from "@/types/interfaces";

export default function Works({ locale }) {
    const [modalState, setModalState] = useState("_hidden");
    const [selectedImage, setSelectedImage] = useState(0);
    const works: IWork[] = [
        {
            id: 1,
            title: "kaleiDANCEscope (asphalt Edition) (2022)",
            description:
                "kaleiDANCEscope (asphalt Edition) ist eine Musik-Box für Tänze.. kaleiDANCEscope (asphalt Edition) wurde in Düsseldorf auf dem asphalt Festival gezeigt. Das Besondere war, dass das should-I-know lokale Tänzer*innen eingeladen und mit ihnen zusammengearbeitet haben.",
            description_long: [
                "kaleiDANCEscope (asphalt Edition) ist eine Musik-Box für Tänze. In einem umgebauten Wohn-Wagen kann man sich verschiedene Tänze wünschen. Dafür geht man in den Wohn-Wagen hinein. Die Gäste und die Performer*innen sind in dem Wagen immer zu zweit allein. Was getanzt wird, entscheiden die Gäste. Die Performer*innen haben alle unterschiedliche Hintergründe: manche kommen aus dem zeitgenössischen Tanz, andere aus dem klassischen Tanz und dann gibt es auch welche, die lokale Tänze aufführen. Eine Performance dauert zwischen 3 und 7 Minuten. Es ist eine persönliche Begegnung in einem öffentlichen Raum, weil der Wohn-Wagen überall aufgestellt werden kann. Das kaleiDANCEscope fährt von Ort zu Ort und sammelt verschiedene Tänze. Das sind auch Tänze, die wenig im Theater gezeigt werden.",
                "kaleiDANCEscope (asphalt Edition) wurde in Düsseldorf auf dem asphalt Festival gezeigt. Das Besondere war, dass das kaleiDANCEscope auf verschiedenen Markt-Plätzen zu sehen war. Außerdem haben should-I-know lokale Tänzer*innen eingeladen und mit ihnen zusammengearbeitet.",
            ],
            links: [
                {
                    link: "",
                    link_text:
                        '"Die Tanzwunschmaschine ist eine begehbare Schatzkiste. Darin funkelt es ganz wunderbar. Wer sie wieder verlässt, lächelt ein vergnügliches Ich-weiß-da-was-Lächeln, das man sofort stibitzen möchte. Es ist eben schon ein bisschen magisch, was sich da als Premiere in dem lavendelblauen Wohnwagen auf dem Gertrudismarkt in Eller abspielt."',
                },
                {
                    link: "https://rp-online.de/kultur/kaleidancescope-setzt-musikwuensche-in-tanz-um_aid-72586861",
                    link_text:
                        "Glücksmomente in der Disco-Kugel (Sema Kouschkerian, RP Online, 08.07.2022)",
                },
                {
                    link: "https://www.theycallitkleinparis.de/2022/07/05/tuemay-kilincel-cornelius-schaper-im-interview-taenze-zum-preis-einer-tasse-kaffee/",
                    link_text:
                        "Tümay Kılınçel & Cornelius Schaper im Interview – „Tänze zum Preis einer Tasse Kaffee“ (Alexandra Wehrmann, theycallitkleinparis, 05.07.2022)",
                },
                {
                    link: "https://www.asphalt-festival.de/events/2022/kaleidancescope/",
                    link_text: "kaleiDANCEscope beim asphalt Festival",
                },
                {
                    link: "https://vimeo.com/showcase/9917103/video/761536023#t=142s",
                    link_text: "Video kaleiDANCEscope (asphalt Edition)",
                },
            ],
            dates: [
                {
                    date: "Do. 07.07.",
                    time: "13 – 18 Uhr",
                    venue: "Wochenmarkt Eller, Gertrudisplatz",
                },
                {
                    date: "Fr. 08.07.",
                    time: "13 – 18 Uhr",
                    venue: "Rheinischer Bauernmarkt Unterbilk, Friedensplätzchen",
                },
                {
                    date: "Sa. 09.07.",
                    time: "12 – 17 Uhr",
                    venue: "Trödelmarkt Aachener Platz, Ulenbergstr. 10",
                },
            ],
            main_img_src: "/works/images/kds_asphalt_cover.jpg",
            images: [
                { src: "/works/images/kds_gk_01.jpg", alt: "" },
                { src: "/works/images/kds_gk_02.jpg", alt: "" },
                { src: "/works/images/kds_gk_03.jpg", alt: "" },
                { src: "/works/images/kds_gk_04.jpg", alt: "" },
                { src: "/works/images/kds_gk_05.jpg", alt: "" },
                { src: "/works/images/kds_gk_06.jpg", alt: "" },
                { src: "/works/images/kds_gk_07.jpg", alt: "" },
                { src: "/works/images/kds_gk_09.jpg", alt: "" },
                { src: "/works/images/kds_gk_10.jpg", alt: "" },
                { src: "/works/images/kds_gk_11.jpg", alt: "" },
                { src: "/works/images/kds_gk_08.jpg", alt: "" },
                { src: "/works/images/kds_gk_12.jpg", alt: "" },
            ],
            credits: [
                {
                    role: "Künstlerische Leitung, Choreografie, Performance",
                    name: "Tümay Kılınçel",
                },
                {
                    role: "Künstlerische Leitung, Video",
                    name: "Cornelius Schaper",
                },
                {
                    role: "Choreografische Leitung, Performance",
                    name: "Jungyun Bae",
                },
                {
                    role: "Co-Choreografie, Performance",
                    name: "Juan Urbina",
                },
                {
                    role: "Co-Choreografie",
                    name: "Ayda El Fassi El Fehri, Kübra Sekin",
                },
                {
                    role: "lokale Co-Choreografie, Performance",
                    name: "Kim Gorol, Evgenia Tarutin, Manis Sjahroeddin",
                },
                {
                    role: "Publikum-Betreuung, Performance",
                    name: "Alina Rohde",
                },
                {
                    role: "Bühnenbild",
                    name: "Fivos Theodosakis",
                },
                {
                    role: "Lektorat, Übersetzung",
                    name: "Annika Restin",
                },
                {
                    role: "DJ-Set",
                    name: "Monita Wagma",
                },
                {
                    role: "Illustration",
                    name: "Christian Wischnewski",
                },
                {
                    role: "technische Unterstützung",
                    name: "David Schnaegelberger",
                },
                {
                    role: "Produktionsleitung",
                    name: "Laureen Laser, Alina Rohde",
                },
                {
                    role: "Produktionsassistenz",
                    name: "Rui Wu",
                },
                {
                    role: "Vielen Dank an",
                    name: "Aljoscha Gößling, Rouwe Hahn, Konrad Jesdinsky, Milena Mönch, Leander Ripchinsky, Emmanuel Roch, Ayhan Toprak, Nele Warthemann, Jugendhaus Frankfurter Berg Frankfurt, Ateliergemeinschaft ES365 Düsseldorf.",
                },
                {
                    role: "Eine Produktion von",
                    name: "should-I-know in Koproduktion mit dem asphalt Festival und dem FFT Düsseldorf, gefördert vom NRW Landesbüro Freie Darstellende Künste, vom Fonds Darstellende Künste aus Mitteln der Beauftragten der Bundesregierung für Kultur und Medien im Rahmen von NEUSTART KULTUR und vom Ministerium für Kultur und Wissenschaft des Landes NRW – regionale Kulturpolitik NRW (RKP) im Rahmen des Projektes STADT DER FREUDE.",
                },
            ],
        },
    ];
    function openModal(index) {
        setSelectedImage(index);
        setModalState("_shown");
    }
    function closeModal() {
        setModalState("_hidden");
    }
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
            <Header location={locale.works.details} nav={locale.nav} />
            <main>
                <div className="spacer_100"></div>
                <div className="main_image_container">
                    <Image
                        src={`${works[0].main_img_src}`}
                        alt=""
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="spacer_100"></div>
                <div className="works_main">
                    <div className="work_details">
                        <h2>{works[0].title}</h2>
                        {works[0].description_long ? (
                            works[0].description_long.map(
                                (paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                )
                            )
                        ) : (
                            <p>{works[0].description}</p>
                        )}
                        {works[0].links && (
                            <div className="work_details">
                                <h2>{locale.works.links}</h2>
                                {works[0].links.map((link, index) => (
                                    <div key={index} className="link_container">
                                        {"->"}
                                        {link.link !== "" ? (
                                            <a
                                                href={link.link}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <p>{link.link_text}</p>
                                            </a>
                                        ) : (
                                            <p>{link.link_text}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {works[0].dates && (
                        <div className="work_dates">
                            <h2>Dates</h2>
                            {works[0].dates.map((date, index) => (
                                <p key={index}>
                                    {date.date} | {date.time}
                                    <br />
                                    {date.venue}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div className="spacer_100"></div>
                <div className="image_grid">
                    {works[0].images &&
                        works[0].images.map((image, index) => (
                            <div className="grid_item" key={index}>
                                <div
                                    className="grid_shader"
                                    onClick={() => openModal(index)}
                                ></div>
                                <Image
                                    className="grid_image"
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        ))}
                </div>
                <div className={`modal_bg${modalState}`}>
                    {modalState === "_shown" && (
                        <div className="lightbox_slider">
                            <Image
                                className="close_button"
                                onClick={closeModal}
                                alt="close button"
                                src="/controls/close.svg"
                                width={35}
                                height={35}
                            />
                            <LightBox
                                images={works[0].images}
                                selectedIndex={selectedImage}
                            />
                        </div>
                    )}
                </div>

                <div className="spacer_100"></div>
                {works[0].credits && (
                    <div className="credits_wrapper">
                        <div className="credits">
                            <h2>Credits</h2>
                            <div className="credits_list">
                                {works[0].credits.map((credit, index) => (
                                    <>
                                        <div
                                            key={index}
                                            className="credits_list_item"
                                        >
                                            <p className="credit_name">
                                                {credit.role}:
                                            </p>
                                            <p className="credit_person">
                                                {credit.name}
                                            </p>
                                        </div>
                                        <div className="line"></div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <div className="spacer_100"></div>
            </main>
            <Footer nav={locale.nav} />
        </>
    );
}

export function getServerSideProps({ locale }) {
    return {
        props: {
            locale: require(`../../locales/${locale}.json`),
        },
    };
}
