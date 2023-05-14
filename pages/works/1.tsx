import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LightBox from "../../components/LightBox";

import { IWork } from "@/types/interfaces";

export default function Works({ locale, works }) {
    const [modalState, setModalState] = useState("_hidden");
    const [selectedImage, setSelectedImage] = useState(0);

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
            <Header
                location={locale.works.details}
                nav={locale.nav}
                lang={locale.lang}
            />
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
                        <h2>{works[0][`title${locale.lang}`]}</h2>
                        {works[0][`description_long${locale.lang}`] ? (
                            works[0][`description_long${locale.lang}`].map(
                                (paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                )
                            )
                        ) : (
                            <p>{works[0][`description${locale.lang}`]}</p>
                        )}
                        {works[0].links && (
                            <div className="work_details">
                                <h2>{locale.works.links}</h2>
                                {works[0].links.map((link, index) => (
                                    <div key={index} className="link_container">
                                        <div>
                                            <p>{"->"}</p>
                                        </div>
                                        {link.link !== "" ? (
                                            <a
                                                href={link.link}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <p>
                                                    {
                                                        link[
                                                            `link_text${locale.lang}`
                                                        ]
                                                    }
                                                </p>
                                            </a>
                                        ) : (
                                            <p>
                                                {
                                                    link[
                                                        `link_text${locale.lang}`
                                                    ]
                                                }
                                            </p>
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
                                    alt={image[`alt${locale.lang}`]}
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
                                locale={locale}
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
                                                {credit[`role${locale.lang}`]}:
                                            </p>
                                            <p className="credit_person">
                                                {credit[`name${locale.lang}`]}
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
    const works: IWork[] = [
        {
            id: 1,
            title_de: "kaleiDANCEscope (Grenzenlos Kultur Edition) (2022)",
            description_de:
                "kaleiDANCEscope (Grenzenlos Kultur Edition) ist eine Musik-Box für Tänze. kaleiDANCEscope (Grenzenlos Kultur Edition) hat in Mainz während des Grenzenlos Kultur Festivals stattgefunden. Das Besondere in Mainz war, dass es im kaleiDANCEscope Tänze im Dunkeln für blinde Menschen gab.",
            description_long_de: [
                "kaleiDANCEscope (Grenzenlos Kultur Edition) ist eine Musik-Box für Tänze. In einem umgebauten Wohn-Wagen kann man sich verschiedene Tänze wünschen. Dafür geht man in den Wohn-Wagen hinein. Die Gäste und die Performer*innen sind in dem Wagen immer zu zweit allein. Was getanzt wird, entscheiden die Gäste. Die Performer*innen haben alle unterschiedliche Hintergründe: manche kommen aus dem zeitgenössischen Tanz, andere aus dem klassischen Tanz und dann gibt es auch welche, die lokale Tänze aufführen. Eine Performance dauert zwischen 3 und 7 Minuten. Es ist eine persönliche Begegnung in einem öffentlichen Raum, weil der Wohn-Wagen überall aufgestellt werden kann. Das kaleiDANCEscope fährt von Ort zu Ort und sammelt verschiedene Tänze. Das sind auch Tänze, diewenig im Theater gezeigt werden.",
                "kaleiDANCEscope (Grenzenlos Kultur Edition) hat in Mainz während des Grenzenlos Kultur Festivals stattgefunden. Das Besondere in Mainz war, dass es im kaleiDANCEscope Tänze im Dunkeln für blinde Menschen gab. Sehende Menschen haben eine Dunkel-Brille aufgezogen, damit sie die gleiche Erfahrung machen.",
            ],
            title_en: "kaleiDANCEscope (Grenzenlos Kultur Edition) (2022)",
            description_en:
                "kaleiDANCEscope (Grenzenlos Kultur Edition) ist eine Musik-Box für Tänze. kaleiDANCEscope (Grenzenlos Kultur Edition) hat in Mainz während des Grenzenlos Kultur Festivals stattgefunden. Das Besondere in Mainz war, dass es im kaleiDANCEscope Tänze im Dunkeln für blinde Menschen gab.",
            description_long_en: [
                "kaleiDANCEscope (Grenzenlos Kultur Edition) ist eine Musik-Box für Tänze. In einem umgebauten Wohn-Wagen kann man sich verschiedene Tänze wünschen. Dafür geht man in den Wohn-Wagen hinein. Die Gäste und die Performer*innen sind in dem Wagen immer zu zweit allein. Was getanzt wird, entscheiden die Gäste. Die Performer*innen haben alle unterschiedliche Hintergründe: manche kommen aus dem zeitgenössischen Tanz, andere aus dem klassischen Tanz und dann gibt es auch welche, die lokale Tänze aufführen. Eine Performance dauert zwischen 3 und 7 Minuten. Es ist eine persönliche Begegnung in einem öffentlichen Raum, weil der Wohn-Wagen überall aufgestellt werden kann. Das kaleiDANCEscope fährt von Ort zu Ort und sammelt verschiedene Tänze. Das sind auch Tänze, diewenig im Theater gezeigt werden.",
                "kaleiDANCEscope (Grenzenlos Kultur Edition) hat in Mainz während des Grenzenlos Kultur Festivals stattgefunden. Das Besondere in Mainz war, dass es im kaleiDANCEscope Tänze im Dunkeln für blinde Menschen gab. Sehende Menschen haben eine Dunkel-Brille aufgezogen, damit sie die gleiche Erfahrung machen.",
            ],
            links: [
                {
                    link: "https://www.staatstheater-mainz.com/web/veranstaltungen/grenzenlos-kultur-vol-24/kaleidancescope",
                    link_text_de:
                        "kaleiDANCEscope beim Grenzenlos Kultur Festival",
                    link_text_en:
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
            main_img_src: "/works/images/kds_asphalt_cover.jpg",
            images: [
                {
                    src: "/works/images/kds_mainz_01.jpg",
                    alt_de: "image one",
                    alt_en: "image one",
                },
                {
                    src: "/works/images/kds_mainz_03.jpg",
                    alt_de: "image two",
                    alt_en: "image two",
                },
                {
                    src: "/works/images/kds_mainz_04.jpg",
                    alt_de: "image three",
                    alt_en: "image three",
                },
                {
                    src: "/works/images/kds_mainz_05.jpg",
                    alt_de: "image four",
                    alt_en: "image four",
                },
                {
                    src: "/works/images/kds_mainz_06.jpg",
                    alt_de: "image five",
                    alt_en: "image five",
                },
                {
                    src: "/works/images/kds_mainz_07.jpg",
                    alt_de: "image six",
                    alt_en: "image six",
                },
            ],
            credits: [
                {
                    role_de: "Künstlerische Leitung",
                    role_en: "Künstlerische Leitung",
                    name_de: "should-I-know",
                    name_en: "should-I-know",
                },
                {
                    role_de: "Co-Choreografie, Performance",
                    role_en: "Co-Choreografie, Performance",
                    name_de: "Jungyun Bae",
                    name_en: "Jungyun Bae",
                },
                {
                    role_de: "Co-Choreografie, Performance",
                    role_en: "Co-Choreografie, Performance",
                    name_de: "Juan Urbina",
                    name_en: "Juan Urbina",
                },
                {
                    role_de: "Publikum-Betreuung, Performance",
                    role_en: "Publikum-Betreuung, Performance",
                    name_de: "Maria Werner",
                    name_en: "Maria Werner",
                },
                {
                    role_de: "DJ-Set",
                    role_en: "DJ-Set",
                    name_de: "sherryaeri",
                    name_en: "sherryaeri",
                },
                {
                    role_de: "Bühnenbild",
                    role_en: "Bühnenbild",
                    name_de: "Fivos Theodosakis",
                    name_en: "Fivos Theodosakis",
                },
                {
                    role_de: "technische Unterstützung",
                    role_en: "technische Unterstützung",
                    name_de: "David Schnaegelberger",
                    name_en: "David Schnaegelberger",
                },
                {
                    role_de: "Produktionsleitung",
                    role_en: "Produktionsleitung",
                    name_de: "Laureen Laser",
                    name_en: "Laureen Laser",
                },
                {
                    role_de: "Regiesassistenz",
                    role_en: "Regiesassistenz",
                    name_de: "Rui Wu",
                    name_en: "Rui Wu",
                },
                {
                    role_de: "Lektorat, Übersetzung",
                    role_en: "Lektorat, Übersetzung",
                    name_de: "Annika Restin",
                    name_en: "Annika Restin",
                },
                {
                    role_de: "Illustration",
                    role_en: "Illustration",
                    name_de: "Christian Wischnewski",
                    name_en: "Christian Wischnewski",
                },
                {
                    role_de: "Audiodeskription",
                    role_en: "Audiodeskription",
                    name_de:
                        '"T_OHR - Zentrum für Sehbehinderten- und Blindenreportage in Gesellschaft und Sport" unter der Trägerschaft der AWO Südwest gGmbH',
                    name_en:
                        '"T_OHR - Zentrum für Sehbehinderten- und Blindenreportage in Gesellschaft und Sport" unter der Trägerschaft der AWO Südwest gGmbH',
                },
                {
                    role_de: "Vielen Dank an",
                    role_en: "Vielen Dank an",
                    name_de:
                        "Aljoscha Gößling, Rouwe Hahn, Konrad Jesdinsky, Milena Mönch, Leander Ripchinsky, Emmanuel Roch, Ayhan Toprak, Nele Warthemann, Jugendhaus Frankfurter Berg Frankfurt, Ateliergemeinschaft ES365 Düsseldorf.",
                    name_en:
                        "Aljoscha Gößling, Rouwe Hahn, Konrad Jesdinsky, Milena Mönch, Leander Ripchinsky, Emmanuel Roch, Ayhan Toprak, Nele Warthemann, Jugendhaus Frankfurter Berg Frankfurt, Ateliergemeinschaft ES365 Düsseldorf.",
                },
                {
                    role_de: "Eine Produktion von",
                    role_en: "Eine Produktion von",
                    name_de:
                        "should-I-know in Koproduktion mit dem dem Festival Grenzenlos Kultur, dem asphalt Festival und dem FFT Düsseldorf, gefördert vom NRW Landesbüro Freie Darstellende Künste, vom Fonds Darstellende Künste aus Mitteln der Beauftragten der Bundesregierung für Kultur und Medien im Rahmen von NEUSTART KULTUR und vom Ministerium für Kultur und Wissenschaft des Landes NRW – regionale Kulturpolitik NRW (RKP) im Rahmen des Projektes STADT DER FREUDE.",
                    name_en:
                        "should-I-know in Koproduktion mit dem dem Festival Grenzenlos Kultur, dem asphalt Festival und dem FFT Düsseldorf, gefördert vom NRW Landesbüro Freie Darstellende Künste, vom Fonds Darstellende Künste aus Mitteln der Beauftragten der Bundesregierung für Kultur und Medien im Rahmen von NEUSTART KULTUR und vom Ministerium für Kultur und Wissenschaft des Landes NRW – regionale Kulturpolitik NRW (RKP) im Rahmen des Projektes STADT DER FREUDE.",
                },
            ],
        },
    ];
    return {
        props: {
            locale: require(`../../locales/${locale}.json`),
            works: works,
        },
    };
}
