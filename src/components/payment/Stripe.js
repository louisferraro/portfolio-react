import React from 'react'
import { Row, Col, Container,Nav,NavItem,Button,Image}  from "react-bootstrap";
import "./Stripe.css";

export default function Stripe() {
    return (
        <div className="stripe mt-5 ">

<Container>
  <Row>
    <Col>
    <h4  className="skpe mt-5 "> Get started right </h4>

            <h1 className="mt-4"> Pick the integration that’s right for you</h1>


            <p className="mt-4">Stripe provides flexible integration options that simplify PCI compliance  without <br/> compromising on the checkout experience.</p>
            
    
    </Col>
 
  </Row>
  
</Container>

            










            <Container>
  <Row>
    <Col md={6} className="mt-5 py-5">
    <h4 ClassName="skpe"> Hosted payment page </h4>

    <p>Simplify your integration using Stripe Checkout. It dynamically adapts to your customer’s device and location to increase conversion, and supports coupons, tax rates, and more.</p>
    </Col>
    <Col md={6} className="mt-5 shadow-lg">
        
        
    <Image fluid src="/static/payment/host.png" />
        
        </Col>
  </Row>
  
</Container>





<div className="mt-5">


<Container>
  <Row>
    <Col md={6} className="mt-5 pt-5 ">
    <h1 className= "skpe"> Fully customizable flows</h1>


    <p>Design your own payments form on your site using Stripe Elements—our rich, prebuilt UI components. Or contact us to build a fully API-based integration with your own UI.</p>
    </Col>
    <Col md={6}  className="mt-5 shadow-lg"> 
    
    <Image fluid src="/static/payment/flow.png" />

    </Col>
  </Row>
  
</Container>
  
</div>












<div className="mt-5">
 

<Container>
  
  
<h2 className="skpe mt-5">More ways to integrate</h2>
  <Row>
    <Col  md={3} className="mt-3">
    <div className="icon">
    
    </div>
    <h5> Flexible invoicing</h5>
    <p>Create customizable invoices to accept recurring or one-off payments.</p>
    
    </Col>
    <Col md={3} className="mt-3">
    <div className="icon">
    <h5>Mobile apps</h5>
    <p>Accept payments in your iOS or Android app using our mobile SDKs.</p>
    </div>
    </Col>
    <Col md={3} className="mt-3">
    <div className="icon">
<h5>In-person payments</h5>
<p> Use Stripe Terminal to extend Stripe payments to your point of sale solution.</p>
    </div>
    </Col>

    <Col md={3} className="mt-3">
    <div className="icon">
<h5> Third-party integrations</h5>
<p>Explore our partner directory for prebuilt integrations to popular platforms and plugins.</p>
    </div>
    </Col>
  </Row>
</Container>

</div>










        </div>
    )
}
