import React from "react";
import { Row, Col, Container, Nav, NavItem } from "react-bootstrap";
import "./Top.css";
export default function Top() {
  return (
    <div className="top">
      <Container>
        <Row>
          <Col md={6}>
            <div className="logo">
              <svg
                class="ProductIcon ProductIcon--Payments ProductNav__icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Payments logo</title>
                <path
                  d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z"
                  fill="url(#product-icon-payments--a)"
                ></path>
                <path
                  d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z"
                  fill="#8a84ff"
                ></path>
                <path
                  d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z"
                  fill="url(#product-icon-payments--b)"
                ></path>
                <defs>
                  <linearGradient
                    id="product-icon-payments--a"
                    x1="20"
                    y1="4.13"
                    x2="20"
                    y2="21.13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      stop-color="#282c34
"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#282c34
"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="product-icon-payments--b"
                    x1="35"
                    y1="11.28"
                    x2="35"
                    y2="28.72"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#8a84ff"></stop>
                    <stop offset="1" stop-color="#8a84ff"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <a>
              {" "}
              <h1 className="title"> Divie </h1>{" "}
            </a>
          </Col>
          <Col md={6}>
            <div className="nav">
              <Nav defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
