import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { getWorkById } from "@/lib/contentful/contentfulCdaClient";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LightBox from "../../components/LightBox";

import { IWork } from "@/types/interfaces";

export default function Work({ locale, work }) {
  const [modalState, setModalState] = useState("_hidden");
  const [selectedImage, setSelectedImage] = useState(0);
  const linkData = work.links?.map((link, index) => ({
    href: link,
    linkText: work.linkDescriptions[index],
  }));
  const creditsData = work.roles?.map((credit, index) => ({
    role: credit,
    name: work.people[index],
  }));
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
        <title>should-I-know: work</title>
        <meta name="description" content="Generated by create next app" />
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
            src={`https:${work.mainImage.fields.file.url}`}
            alt={
              work.mainImage.fields.description
                ? work.mainImage.fields.description
                : ""
            }
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="spacer_100"></div>
        <div className="works_main">
          <div className="work_details">
            <h2>{work.title}</h2>
            {work.longDescription.content.map((paragraph, index) => (
              <p key={index}>{paragraph.content[0].value}</p>
            ))}
            {work.links && (
              <div className="work_details">
                <h2>{locale.works.links}</h2>
                {linkData.map((link, index) => (
                  <div key={index} className="link_container">
                    <p className="indicator">{"->"}</p>

                    <a href={link.href} target="_blank" rel="noreferrer">
                      <p>{link.linkText}</p>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
          {work.dates && (
            <div className="work_dates">
              <h2>Dates</h2>
              {work.dates.map((date, index) => (
                <p key={index}>{date}</p>
              ))}
            </div>
          )}
        </div>
        <div className="spacer_100"></div>
        <div className="image_grid">
          {work.images &&
            work.images.map(
              (image, index) => (
                console.log("image", image),
                (
                  <div className="grid_item" key={index}>
                    <div
                      className="grid_shader"
                      onClick={() => openModal(index)}
                    ></div>
                    <Image
                      className="grid_image"
                      src={`https:${image.fields.file.url}`}
                      alt={image.fields.description}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )
              )
            )}
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
                images={work.images}
                selectedIndex={selectedImage}
                locale={locale}
              />
            </div>
          )}
        </div>

        <div className="spacer_100"></div>
        {work.roles && (
          <div className="credits_wrapper">
            <div className="credits">
              <h2>Credits</h2>
              <div className="credits_list">
                {creditsData.map((credit, index) => (
                  <>
                    <div key={index} className="credits_list_item">
                      <p className="credit_name">{credit.role}</p>
                      <p className="credit_person">{credit.name}</p>
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

export async function getServerSideProps({ locale, params }) {
  const work = await getWorkById(
    params.id,
    locale === "de_DE" ? "de-DE" : "en-GB"
  );
  if (!work) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locale: require(`../../locales/${locale}.json`),
      work,
    },
  };
}
