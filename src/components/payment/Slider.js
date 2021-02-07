import React from "react";
import {
  Row,
  Col,
  Container,
  Nav,
  NavItem,
  Grid,
  Image,
} from "react-bootstrap";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="sliders">
      <div className="slider mt-5">
        <Container>
          <Row>
            <Col md={6} className="py-2">
              <div className="slider-h  mt-5">
                <h1>
                  A finance app for beginner investors to monitor their
                  portfolio and analyze stocks.
                </h1>
              </div>

              <div className="slider-p  mt-5">
                <p>
                  {" "}
                  View historical price charts, build a watchlist
                  <br /> and monitor company earnings, <br />
                  import your portfoilio, and more.
                </p>
              </div>

              <Container>
                <Row>
                  <Col className="mt-3">
                    <button
                      onClick={() => window.open("https://divieapp.web.app")}
                      className="btns"
                    >
                      Check it out
                    </button>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={6}>
              <div class="grid-item">
                <Image fluid src="/static/tesla-iphone.png" />
              </div>
              <div class="grid-item">
                <Image fluid src="/static/tesla-news.png" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="companies py-5">
        <Container>
          <div>
            <Row className="justify-content-center py-5">
              <Col xs="5" md="2">
                <Image fluid src="/static/react-logo.png" />
              </Col>
              <Col xs="5" md="2">
                <Image fluid src="/static/node-logo.png" />
              </Col>
              <Col xs="5" md="2">
                <Image fluid src="/static/firebase-logo.png" />
              </Col>
              <Col xs="5" md="2">
                <Image fluid src="/static/python-logo.png" />
              </Col>
              <Col xs="5" md="2">
                <Image fluid src="/static/redux-logo.png" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
