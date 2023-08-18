import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoolerCard from './CoolerCard';
import '../static/css/CoolerListing.css'
function CoolerListing() {
  const [coolers, setCoolers] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/8ace208d-3b38-40ff-a412-605c1c99843d")
      .then((response) => response.json())
      .then((data) => setCoolers(data.coolers))
      .catch((error) => console.error("Error fetching coolers:", error));
  }, []);
  return (

      <Row className="container">
        {coolers.map((cooler) => (
          <Col key={cooler.id} className="mt-4">
            <CoolerCard cooler={cooler}  />
          </Col>
        ))}
      </Row>

  );
}

export default CoolerListing;
