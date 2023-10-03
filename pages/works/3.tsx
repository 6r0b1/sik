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
        <meta name="description" content="should-i-know" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                (paragraph, index) => <p key={index}>{paragraph}</p>
              )
            ) : (
              <p>{works[0][`description${locale.lang}`]}</p>
            )}
            {works[0].links && (
              <div className="work_details">
                <h2>{locale.works.links}</h2>
                {works[0].links.map((link, index) => (
                  <div key={index} className="link_container">
                    <p className="indicator">{"->"}</p>
                    {link.link !== "" ? (
                      <a href={link.link} target="_blank" rel="noreferrer">
                        <p>{link[`link_text${locale.lang}`]}</p>
                      </a>
                    ) : (
                      <p>{link[`link_text${locale.lang}`]}</p>
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
                    <div key={index} className="credits_list_item">
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
      title_de: "untitled (2021)",
      description_de:
        "should-I-know hatte eine Residenz in der Herderschule in Kooperation mit dem Mousonturm in Frankfurt am Main. Im Mittelpunkt standen spiegelnde Flächen in der Schule und die Reaktionen der Körper darauf.",
      description_long_de: [
        "should-I-know hatte eine Residenz in der Herderschule in Kooperation mit dem Mousonturm in Frankfurt am Main. Im Mittelpunkt standen spiegelnde Flächen in der Schule und die Reaktionen der Körper darauf.",
        "Es ging bei der Residenz darum, in den Schul-Räumen Störungen zu erforschen. Dazu hat should-I-know spiegelndes Material benutzt und in der 1. Etage von der Schule eine Nische mit Rettungsfolie ausgekleidet. In der 2. Etage wurden die Glas-Türen mit Spiegel-Karton bestückt. Die Aktionen hatten keinen Titel, aber alle, die mit der Schule zu tun haben, konnten sich eigene Namen dafür ausdenken.",
        "Es ist herausgekommen, dass sich der gewohnte Weg der Menschen in der Schule durch die „spiegelnden Störungen“ im Schul-Gebäude verändert. Die Körper springen, drehen und tanzen im Raum. Sie reflektieren mit der Spiegelung und man sieht sich selbst und andere neu.",
      ],
      title_en: "ohne Titel (2021)",
      description_en:
        "should-I-know hatte eine Residenz in der Herderschule in Kooperation mit dem Mousonturm in Frankfurt am Main. Im Mittelpunkt standen spiegelnde Flächen in der Schule und die Reaktionen der Körper darauf.",
      description_long_en: [
        "should-I-know had a residency at the Herderschule in cooperation with the Mousonturm in Frankfurt am Main. The focus was on reflective surfaces in the school and the bodies' reactions to them.",
        "The aim of the residency was to explore disturbances in the school rooms. To do this, should-I-know used reflective material and lined a niche on the first floor of the school with rescue foil. On the 2nd floor, the glass doors were lined with mirrored cardboard. The actions had no title, but everyone involved with the school could come up with their own names for them.",
        'It has turned out that the usual path of the people in the school is changed by the "mirroring disturbances" in the school building. The bodies jump, turn and dance in the space. They mirror with the reflection and one sees oneself and others as new.',
      ],
      links: [
        {
          link: "https://tanzplattformrheinmain.de/de/professionell-tanzen/residenzen/residenz-an-schulen/",
          link_text_de: "Herder-Residenz bei der Tanzplattform Rhein-Main",
          link_text_en: "Herder-Residenz bei der Tanzplattform Rhein-Main",
        },
      ],
      dates: [
        {
          date: "Oktober, November 2021",
          time: "tägl.",
          venue: "IGS Herder, Frankfurt am Main",
        },
      ],
      main_img_src: "/works/images/hmr_03.jpg",
      images: [
        { src: "/works/images/hmr_01.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_02.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_03.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_04.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_05.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_06.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_07.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_08.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_09.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_10.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_11.jpg", alt_de: "", alt_en: "" },
        { src: "/works/images/hmr_12.jpg", alt_de: "", alt_en: "" },
      ],
      credits: [
        {
          role_de: "Künstlerische Leitung",
          role_en: "Artistic Direction",
          name_de: "Tümay Kılınçel",
          name_en: "Tümay Kılınçel",
        },
        {
          role_de: "Künstlerische Leitung",
          role_en: "Artistic Direction",
          name_de: "Cornelius Schaper",
          name_en: "Cornelius Schaper",
        },
        {
          role_de: "InitiatorInnen & Förderung",
          role_en: "InitiatorInnen & Förderung",
          name_de:
            "Die Tanzplattform Rhein-Main, ein Projekt von Künstler*innenhaus Mousonturm und Hessischem Staatsballett, wird ermöglicht durch den Kulturfonds Frankfurt RheinMain und gefördert vom Kulturamt der Stadt Frankfurt am Main, dem Hessischen Ministerium für Wissenschaft und Kunst und der Stiftungsallianz [Aventis Foundation, BHF BANK Stiftung, Crespo Foundation, Hans Erich und Marie Elfriede Dotter-Stiftung, Dr. Marschner Stiftung, Stiftung Polytechnische Gesellschaft Frankfurt am Main].",
          name_en:
            "Tanzplattform Rhein-Main, a project of Künstler*innenhaus Mousonturm and Hessian State Ballet, is made possible by the Kulturfonds Frankfurt RheinMain and is funded by the Cultural Office of the City of Frankfurt am Main, the Hessian Ministry of Science and Art and the Foundation Alliance [Aventis Foundation, BHF Bank Foundation, Crespo Foundation, Hans Erich and Marie Elfriede Dotter Foundation, Dr. Marschner Foundation, Foundation Polytechnic Society Frankfurt am Main].",
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
