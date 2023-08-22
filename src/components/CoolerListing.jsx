import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoolerCard from "./CoolerCard";
import { Container } from "react-bootstrap";
function CoolerListing() {
  const [coolers, setCoolers] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/3019d9e1-f97b-434e-9033-3af2f08be01e")
      .then((response) => response.json())
      .then((data) => setCoolers(data.coolers))
      .catch((error) => console.error("Error fetching coolers:", error));
  }, []);
  return (
    <Container className="d-flex justify-content-center">
      <Row>
        {coolers.map((cooler) => (
          <Col key={cooler.id} xs={6} sm={6} md={4} lg={3}>
            <CoolerCard cooler={cooler} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CoolerListing;
