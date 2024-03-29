import Image from "next/image";
import React from "react";

import Carousel from "react-bootstrap/Carousel";

function LightBox({ images, selectedIndex, locale }) {
    return (
        <>
            <Carousel
                defaultActiveIndex={selectedIndex}
                interval={null}
                indicators={false}
                variant="light"
                touch={true}
                keyboard={true}
            >
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <div className="slider_image_wrapper">
                            <Image
                                alt={image[`alt${locale.lang}`]}
                                src={image.src}
                                fill
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default LightBox;
