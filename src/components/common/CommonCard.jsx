import React from "react";
import Card from "react-bootstrap/Card";
import "../../style/CoolerCard.css"; // Import the CSS file
import { Button } from "react-bootstrap";
import { useTheme } from "../../utils/themeProvider";

const CommonCard = ({ product, review, type }) => {
  const { mode } = useTheme();
  return (
    <Card data-bs-theme={mode} className={type}>
      {type === "product" && (
        <Card.Img
          variant="top"
          src="https://th-i.thgim.com/public/incoming/x39zvx/article66458800.ece/alternates/FREE_1200/Image%201.jpg"
        />
      )}
      <Card.Body>
        {type === "review" && (
          <Card.Title>
            <q>{review.quote}</q>
          </Card.Title>
        )}
        {type === "review" && <Card.Subtitle>{review.author}</Card.Subtitle>}
        {type === "product" && <Card.Title>Model: {product.model}</Card.Title>}
        {type === "product" && (
          <Card.Text>Price: ${product.price_usd}</Card.Text>
        )}
        {type === "product" && <Button className="btn">Buy Now</Button>}
      </Card.Body>
    </Card>
  );
};

export default CommonCard;
