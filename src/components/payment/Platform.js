import React from 'react'
import "./Platform.css"
import { Row, Col, Container,Nav,NavItem,Button,Tabs,Image}  from "react-bootstrap";
import  "./Platform.css"

export default function Platform() {
    return (
        <div className="platform mt-5 ">

<Container>
  <Row>
    <Col md={6} className="mt-5">

        <h5 className="sky"> Full-featured platform</h5>
        <h1 className="white mt-4">Developer-centric</h1>
     
   <p className="white mt-4"> Rapidly build production-ready integrations with modern tools, from React components to real-time webhooks. Using Stripe’s developer platform means less maintenance for legacy systems and more focus on customer and product experiences.</p>
    
    
<ul className="sky mt-5">
    <li> Sample code and examples</li>
    <li> CLI for development and testing</li>
    <li> Versioned API changes</li>
    <li> Webhooks </li>
    <li>  Test environment</li>
    <li> Metadata support</li>
    </ul>


<button className="btn">
Explore the docs 
</button>
   
    </Col>
    <Col md={6}className="mt-5">


    <Image fluid src="/static/payment/platform.png" />
    </Col>
  </Row>
  
</Container>
            
        </div>
    )
}
