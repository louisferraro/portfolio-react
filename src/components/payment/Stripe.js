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
import "./Stripe.css";

export default function Stripe() {
  return (
    <div className="stripe mt-5 ">
      <Container>
        <Row>
          <Col md={6} className="mt-5 py-5">
            <h1 className="skpe">Main Dashboard</h1>
            <h5>The UX</h5>
            <p>
              This is what users see when they first come to the app. Users can
              view information such as their balance, their average stock price,
              etc. This is their portfolio at a glance.
            </p>
            <h5>The Tech</h5>
            <p>
              {" "}
              Used TD Ameritrade's API to allow users to connect their bank
              info. This info is stored in the DB as well as Redux so any
              component can easily use this data. User's favorites are also
              stored in firestore as well as the Redux store.
            </p>
          </Col>
          <Col md={6} className="mt-5 ">
            <Image fluid src="/static/main-dash.png" />
          </Col>
        </Row>
      </Container>

      <div className="mt-5">
        <Container>
          <Row>
            <Col md={6} className="mt-5 pt-5 ">
              <h1 className="skpe"> Stock Stats</h1>
              <h5> The UX</h5>
              <p>
                Users can look at financial data such as price targets, balance
                sheets, income statements, and company financials. The company
                description is also toggle-able. The information is displayed in
                order from easiest to digest to hardest.
              </p>
              <h5>The Tech</h5>
              <p>
                {" "}
                The data is fetched from the database based on the stock ticker.
                If this info is not already in the database, multiple API
                requests are made to different providers to put them in the
                database, then it's retrieved.
              </p>
            </Col>
            <Col md={6} className="mt-5">
              <Image fluid src="/static/netflix.png" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mt-5">
        <Container>
          <Row>
            <Col md={6} className="mt-5 pt-5 ">
              <h1 className="skpe">Charts</h1>
              <h5> The UX</h5>
              <p>
                Users can view 1 year of stock price along with MACD, RSI, and
                20 day EMA. Users can also export this data to csv.
              </p>
              <h5>The Tech</h5>
              <p>
                {" "}
                Again, this data is fetched from the database and displayed in
                the same way as the stats component.
              </p>
            </Col>
            <Col md={6} className="mt-5">
              <Image fluid src="/static/charts.png" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
