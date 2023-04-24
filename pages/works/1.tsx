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
            title: "kaleiDANCEscope (Grenzenlos Kultur Edition) (2022)",
            description:
                "kaleiDANCEscope (Grenzenlos Kultur Edition) ist eine Musik-Box für Tänze. kaleiDANCEscope (Grenzenlos Kultur Edition) hat in Mainz während des Grenzenlos Kultur Festivals stattgefunden. Das Besondere in Mainz war, dass es im kaleiDANCEscope Tänze im Dunkeln für blinde Menschen gab.",
            description_long: [
                "kaleiDANCEscope (Grenzenlos Kultur Edition) ist eine Musik-Box für Tänze. In einem umgebauten Wohn-Wagen kann man sich verschiedene Tänze wünschen. Dafür geht man in den Wohn-Wagen hinein. Die Gäste und die Performer*innen sind in dem Wagen immer zu zweit allein. Was getanzt wird, entscheiden die Gäste. Die Performer*innen haben alle unterschiedliche Hintergründe: manche kommen aus dem zeitgenössischen Tanz, andere aus dem klassischen Tanz und dann gibt es auch welche, die lokale Tänze aufführen. Eine Performance dauert zwischen 3 und 7 Minuten. Es ist eine persönliche Begegnung in einem öffentlichen Raum, weil der Wohn-Wagen überall aufgestellt werden kann. Das kaleiDANCEscope fährt von Ort zu Ort und sammelt verschiedene Tänze. Das sind auch Tänze, diewenig im Theater gezeigt werden.",
                "kaleiDANCEscope (Grenzenlos Kultur Edition) hat in Mainz während des Grenzenlos Kultur Festivals stattgefunden. Das Besondere in Mainz war, dass es im kaleiDANCEscope Tänze im Dunkeln für blinde Menschen gab. Sehende Menschen haben eine Dunkel-Brille aufgezogen, damit sie die gleiche Erfahrung machen.",
            ],
            links: [
                {
                    link: "https://www.staatstheater-mainz.com/web/veranstaltungen/grenzenlos-kultur-vol-24/kaleidancescope",
                    link_text:
                        "kaleiDANCEscope beim Grenzenlos Kultur Festival",
                },
            ],
            dates: [
                {
                    date: "28.9. + 29.9.",
                    time: "15-19 Uhr",
                    venue: "Gutenbergplatz",
                },
            ],
            main_img_src: "/works/images/kaleidanceskope_08_web_kuekelhahn.jpg",
            images: [
                { src: "/works/images/kds_mainz_01.jpg", alt: "image one" },
                { src: "/works/images/kds_mainz_03.jpg", alt: "image two" },
                { src: "/works/images/kds_mainz_04.jpg", alt: "image three" },
                { src: "/works/images/kds_mainz_05.jpg", alt: "image one" },
                { src: "/works/images/kds_mainz_06.jpg", alt: "image two" },
                { src: "/works/images/kds_mainz_07.jpg", alt: "image three" },
            ],
            credits: [
                {
                    role: "Künstlerische Leitung",
                    name: "should-I-know",
                },
                {
                    role: "Co-Choreografie, Performance",
                    name: "Jungyun Bae",
                },
                {
                    role: "Co-Choreografie, Performance",
                    name: "Juan Urbina",
                },
                {
                    role: "Publikum-Betreuung, Performance",
                    name: "Maria Werner",
                },
                {
                    role: "DJ-Set",
                    name: "sherryaeri",
                },
                {
                    role: "Bühnenbild",
                    name: "Fivos Theodosakis",
                },
                {
                    role: "technische Unterstützung",
                    name: "David Schnaegelberger",
                },
                {
                    role: "Produktionsleitung",
                    name: "Laureen Laser",
                },
                {
                    role: "Regiesassistenz",
                    name: "Rui Wu",
                },
                {
                    role: "Lektorat, Übersetzung",
                    name: "Annika Restin",
                },
                {
                    role: "Illustration",
                    name: "Christian Wischnewski",
                },
                {
                    role: "Audiodeskription",
                    name: '"T_OHR - Zentrum für Sehbehinderten- und Blindenreportage in Gesellschaft und Sport" unter der Trägerschaft der AWO Südwest gGmbH',
                },
                {
                    role: "Vielen Dank an",
                    name: "Aljoscha Gößling, Rouwe Hahn, Konrad Jesdinsky, Milena Mönch, Leander Ripchinsky, Emmanuel Roch, Ayhan Toprak, Nele Warthemann, Jugendhaus Frankfurter Berg Frankfurt, Ateliergemeinschaft ES365 Düsseldorf.",
                },
                {
                    role: "Eine Produktion von",
                    name: "should-I-know in Koproduktion mit dem dem Festival Grenzenlos Kultur, dem asphalt Festival und dem FFT Düsseldorf, gefördert vom NRW Landesbüro Freie Darstellende Künste, vom Fonds Darstellende Künste aus Mitteln der Beauftragten der Bundesregierung für Kultur und Medien im Rahmen von NEUSTART KULTUR und vom Ministerium für Kultur und Wissenschaft des Landes NRW – regionale Kulturpolitik NRW (RKP) im Rahmen des Projektes STADT DER FREUDE.",
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
            <Header location="works | details" nav={locale.nav} />
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
