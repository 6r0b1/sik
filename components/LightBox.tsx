import Image from "next/image";
import React from "react";

import Carousel from "react-bootstrap/Carousel";

function LightBox({ images, selectedIndex }) {
    return (
        <>
            {/* <div className="lightbox_slider">
                <Image
                    alt="close button"
                    src="/controls/close.svg"
                    width={35}
                    height={35}
                    style={{ marginRight: "20px" }}
                /> */}
            <Carousel
                defaultActiveIndex={selectedIndex}
                interval={null}
                variant="dark"
            >
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <Image
                            alt={image.alt}
                            src={image.src}
                            width={1400}
                            height={820}
                            style={{ objectFit: "contain" }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            {/* </div> */}
        </>
    );
}

export default LightBox;
