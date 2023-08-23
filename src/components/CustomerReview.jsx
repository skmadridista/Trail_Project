import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "../style/CustomerReview.css";
import { useTheme } from "../utils/themeProvider";

const CustomerReview = () => {
  const { mode } = useTheme();
  const reviews = [
    {
      name: "Maria Kate",
      role: "Photographer",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
    {
      name: "John Doe",
      role: "Web Developer",
      quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
    {
      name: "Anna Deynah",
      role: "Web Developer",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
  ];

  return (
    <Container className="py-5">
      <Carousel data-bs-theme={mode === "light" ? "dark" : "light"}>
        {reviews.map((item, index) => (
          <Carousel.Item key={index} className="text-center">
            <img
              src="https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png"
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "150px" }}
            />
            <Row className="justify-content-center">
              <Col lg="8">
                <h5 className="mb-3">{item.name}</h5>
                <p>{item.role}</p>
                <q className="">

                  {item.quote}
                </q>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CustomerReview;
