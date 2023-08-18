import React from "react";
import { Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "../static/css/CoolerCard.css"; // Import the CSS file
import { useTheme } from "../utils/themeProvider";

const CoolerCard = ({ cooler }) => {
  const theme = useTheme();

  return (
    <Card
      style={{ width: "18rem", borderColor: theme.currentView.colors.primary }}
    >
      {/* <Row className="justify-content-center"> */}
      {/* <Col md={4} className="mb-4"> */}
      <Card.Body>
        <Card.Title>{cooler.model}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {cooler.brand}
        </Card.Subtitle>
        <Card.Text>
          Socket Compatibility: {cooler.socketCompatibility.join(", ")}
          <br />
          Fan Speed: {cooler.fanSpeed.min}-{cooler.fanSpeed.max}
          {cooler.fanSpeed.units}
          <br />
          Noise Level: {cooler.noiseLevel.idle}-{cooler.noiseLevel.max}
          {cooler.noiseLevel.units}
          <br />
          {cooler.radiatorSize && (
            <span>
              Radiator Size: {cooler.radiatorSize}
              <br />
            </span>
          )}
          {cooler.heatpipes && (
            <span>
              Heatpipes: {cooler.heatpipes}
              <br />
            </span>
          )}
          {cooler.height && (
            <span>
              Height: {cooler.height}
              <br />
            </span>
          )}
          Price: ${cooler.price}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      {/* </Col>
      </Row> */}
    </Card>
  );
};

export default CoolerCard;
