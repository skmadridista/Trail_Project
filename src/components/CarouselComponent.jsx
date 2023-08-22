import React from "react";
import { Carousel, Ratio } from "react-bootstrap";
import "../static/css/CarouselComponent.css";
import { useTheme } from "../utils/themeProvider";

const images = [
  {
    src: "https://blog.havells.com/wp-content/uploads/2018/04/Tips-to-Make-Your-Air-Cooler-Perform-Better-This-Summer.jpg",
    alt: "First slide",
  },
  {
    src: "https://images.jdmagicbox.com/quickquotes/images_main/godrej-interio-slim00374-11-10-2020-6201-195563843-2q352.png",
    alt: "Second slide",
  },
  {
    src: "https://blog.havells.com/wp-content/uploads/2018/04/Tips-to-Make-Your-Air-Cooler-Perform-Better-This-Summer.jpg",
    alt: "Third slide",
  },
];

function CarouselComponent() {
  const { hanldeModeChange, mode } = useTheme();

  return (
    <Carousel
      data-bs-theme={mode === "light" ? "dark" : "light"}
      className="my-2"
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          {window.innerWidth <= 768 ? (
            <Ratio aspectRatio="21x9">
              <img
                className="d-block mx-auto rounded"
                src={image.src}
                alt={image.alt}
              />
            </Ratio>
          ) : (
            <img
              className="d-block mx-auto rounded"
              src={image.src}
              alt={image.alt}
              width="800" // Set your preferred width for larger screens
              height="400" // Set your preferred height for larger screen
            />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
