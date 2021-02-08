import React from "react";
import "./Stripe.css";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import Flipcard from "./payment/Flipcard";

export default function Stripe() {
  return (
    <div className="container-fluid bg-light py-5">
      <Flipcard />

      <div className="dd">
        <div className="des"></div>
      </div>
      <div className="designer mt-5">
        <div className="designer-content ">
          <Container>
            <Row>
              <Col md={6}>
                <h5 className="caption">Attention to Detail</h5>

                <h1 className="mt-4"></h1>

                <div className="body mt-4">
                  <p>
                    We agonize over the right abstractions so your teams <br />
                    don’t need to stitch together disparate systems or <br />
                    spend months integrating payments functionality.
                  </p>
                </div>

                <Button variant="info">Read the docs </Button>

                <div className="two-conent mt-5">
                  <Container>
                    <Row>
                      <Col md={6}>
                        <div className="icon"></div>

                        <h5> Tools for every stack</h5>

                        <div className="body">
                          <p>
                            We offer client and server libraries in everything
                            from React and PHP to .NET and iOS.
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <h5> Prebuilt integrations</h5>

                        <div className="body">
                          <p>
                            Use integrations for systems like Shopify,
                            WooCommerce, NetSuite, and more.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
              <Col md={6}>
                <Image fluid src="/static/leetcode.png" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="dess"></div>
    </div>
  );
}
