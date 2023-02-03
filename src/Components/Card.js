import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

// image
export function CardComponent({ imageSrc }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={imageSrc} />
      </Card>
    </Col>
  );
}

// image grid
export default function CardGroupComponent({ imageArr }) {
  return (
    <Row xs={1} md={3} lg={3} className="g-2">
      {imageArr.map((imageSrc, key) => (
        <CardComponent imageSrc={imageSrc.src.landscape} key={key} />
      ))}
    </Row>
  );
}
