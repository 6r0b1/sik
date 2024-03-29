import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LightBox from "../components/LightBox";

import { IImages } from "@/types/interfaces";

export default function About({ locale, images }) {
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
        <title>should-I-know: Über</title>
        <meta name="description" content="should-i-know" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header
        location={locale.about.title}
        nav={locale.nav}
        lang={locale.lang}
      />
      <main>
        <div className="spacer_100"></div>
        <div className="main_image_container">
          <Image
            src="/statics/about_main.jpg"
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
            <h2>should-I-know</h2>
            {locale.about.text_01.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="work_dates">
            <h2>Kontakt</h2>

            <p>
              email:
              <br />
              mail@should-I-know.com
            </p>
          </div>
        </div>
        <div className="spacer_100"></div>
        <div className="image_grid">
          {images.map((image, index) => (
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
                images={images}
                selectedIndex={selectedImage}
                locale={locale}
              />
            </div>
          )}
        </div>
        <div className="spacer_100"></div>
      </main>
      <Footer nav={locale.nav} />
    </>
  );
}

export function getStaticProps({ locale }) {
  const images: IImages[] = [
    { src: "/statics/about_01.jpg", alt_de: "", alt_en: "" },
    { src: "/statics/about_02.jpg", alt_de: "", alt_en: "" },
    { src: "/statics/about_03.jpg", alt_de: "", alt_en: "" },
    { src: "/statics/about_04.jpg", alt_de: "", alt_en: "" },
    { src: "/statics/about_05.jpg", alt_de: "", alt_en: "" },
    { src: "/statics/about_06.jpg", alt_de: "", alt_en: "" },
    { src: "/statics/about_07.jpg", alt_de: "", alt_en: "" },
  ];
  return {
    props: {
      locale: require(`../locales/${locale}.json`),
      images: images,
    },
  };
}
