import React from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";

export default function Stackrecording() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Image fluid src="/static/tesla-iphone.png" />
          </Col>
          <Col md={8}>
            <div className="mt-5">
              <h1 className="text-center"> Stocks Recording </h1>
              <Image
                className="mt-5 z-depth-5"
                fluid
                src="/static/stock-page-recording-mockup.gif "
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
