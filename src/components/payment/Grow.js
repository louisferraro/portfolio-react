import React from "react";
import {
  Row,
  Col,
  Container,
  Nav,
  NavItem,
  Button,
  Image,
} from "react-bootstrap";
import "./Grow.css";

export default function Grow() {
  return (
    <div className="grow mt-5">
      <Container>
        <Row>
          <Col md={12} className="mt-5">
            <h2 className="skpe mt-5">Reducing Firestore Reads by 99%</h2>

            <p className="mt-5">
              Initially, one single day of stock price was stored as a single
              collection in Firestore. When the chart was displayed, the
              frontend would make about 1000 reads every time that component
              mounted. To optimize this, I stored each datapoint as one big
              object in the backend after making the request, and then stored
              that object as one document in Firestore. This way, about 1000
              reads became just 1.
            </p>

            <Image fluid src="/static/one-read-db.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
