import React from 'react'
import { Row, Col, Image, Container, Button } from "react-bootstrap";






export default function Maindash() {
    return (
        <div>
            <Container>
  <Row>
    <Col md={4}>
    <Image fluid src="/static/diversification.png" />


    </Col>
    <Col md={8}>
        <div className="mt-5">
    <h1 className="text-center">  Dividends is the best project </h1>
    <Image className="mt-5" fluid src="/static/dividends.png" />
    </div>
    </Col>
  </Row>
  
</Container>
        </div>
    )
}
