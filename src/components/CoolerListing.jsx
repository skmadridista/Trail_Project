import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import CoolerCard from "./CoolerCard";
import { Container } from "react-bootstrap";
import CommonCard from "./common/CommonCard";
function CoolerListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/3019d9e1-f97b-434e-9033-3af2f08be01e")
      .then((response) => response.json())
      .then((data) => setProducts(data.coolers))
      .catch((error) => console.error("Error fetching coolers:", error));
  }, []);
  return (
    <Container className="d-flex justify-content-center">
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={6} sm={6} md={4} lg={3}>
            <CommonCard product={product} type="product" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CoolerListing;
