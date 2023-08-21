import React from "react";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import "../static/css/CoolerCard.css"; // Import the CSS file
import { useTheme } from "../utils/themeProvider";

const CoolerCard = ({ cooler }) => {
  const { hanldeModeChange, mode } = useTheme();
  return (
    <Row>
      <Col>
        <Card data-bs-theme={mode}>
          <Card.ImgOverlay>
            <Badge
              pill
              bg="warning"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              20% Off
            </Badge>
          </Card.ImgOverlay>
          <Card.Img
            variant="top"
            src="https://th-i.thgim.com/public/incoming/x39zvx/article66458800.ece/alternates/FREE_1200/Image%201.jpg"
          />
          <Card.Body>
            <Card.Title>{cooler.model}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {cooler.brand}
            </Card.Subtitle>
            <Card.Text>Color: {cooler.color}</Card.Text>
            <Card.Text>Price: ${cooler.price_usd}</Card.Text>
          </Card.Body>

          <Button
            // style={{
            //   margin: "4px",
            //   borderColor: primarycolor,
            // }}
            className="btn"
          >
            Buy Now
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default CoolerCard;
