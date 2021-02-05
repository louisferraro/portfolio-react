
import React from 'react'
import { Row, Col, Image, Container, Button } from "react-bootstrap";

export default function News() {
    return (
        <div>
            

            <Container>
  <Row className="mt-5">
    
    <Col md={8}>
        <div className="mt-5">
    <h1 className="text-center">  News Update </h1>
    <Image className="mt-5" fluid src="/static/news.png" />
    </div>
    </Col>



    <Col md={4}>
    <Image fluid src="/static/tesla-news.png" />



    </Col>
  </Row>
  
</Container>



        </div>
    )
}
