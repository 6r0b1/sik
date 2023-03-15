import Image from "next/image";
import React from "react";

import Carousel from "react-bootstrap/Carousel";

function LightBox({ images, selectedIndex }) {
    return (
        <>
            <Carousel
                defaultActiveIndex={selectedIndex}
                interval={null}
                variant="dark"
                touch={true}
                keyboard={true}
            >
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <div className="slider_image_wrapper">
                            <Image
                                alt={image.alt}
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
