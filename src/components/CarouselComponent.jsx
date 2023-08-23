import React from "react";
import { Carousel } from "react-bootstrap";
import "../style/CarouselComponent.css";
import { useTheme } from "../utils/themeProvider";
import ImageComponent from "./common/ImageComponent";

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
  const { mode } = useTheme();

  return (
    <Carousel
      data-bs-theme={mode === "light" ? "dark" : "light"}
      className="my-2"
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <ImageComponent src={image.src} alt={image.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
