import React from "react";
import {
  Row,
  Col,
  Container,
  Nav,
  NavItem,
  Button,
  Tabs,
  Image,
} from "react-bootstrap";
export default function Global() {
  return (
    <div className="global mt-5">
      {/* <h4 className="skpe"> Scale internationally</h4>

            <h1 className="mt-4"> Global from day one</h1>

            <p className="mt-3"> Let your international customers pay with their preferred payment method, and improve conversion. Stripe supports  <span className="skpe" > 135+ currencies </span> and offers a unified API for cards, wallets, bank debits, and more.</p> */}

      <Container>
        <Row>
          <Col md={8}>
            <h4 className="skpe"> Scale internationally</h4>

            <h1 className="mt-4"> Global from day one</h1>

            <p className="mt-3">
              {" "}
              Let your international customers pay with their preferred payment
              method, and improve conversion. Stripe supports{" "}
              <span className="skpe"> 135+ currencies </span> and offers a
              unified API for cards, wallets, bank debits, and more.
            </p>
          </Col>
          <Col md={4}> </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={4} className="mt-5 py-5">
            <h2> Card payments</h2>
            <p>
              Accept all major debit and credit cards from customers around the
              world. Card payments make up over 40% of global online payments.
            </p>
          </Col>
          <Col md={8} className="mt-5">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/Cards">
                  <h5>Cards</h5>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey=" SEPA iDEAL">
                  <h5> SEPA Debit</h5>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey=" IDEAL">
                  <h5>IDEAL </h5>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Alipay ">
                  <h5>Alipay</h5>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Image
              fluid
              src="/static/payment/card.png "
              className="shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
