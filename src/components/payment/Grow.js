import React from 'react'
import { Row, Col, Container,Nav,NavItem,Button,Image}  from "react-bootstrap";
import "./Grow.css"

export default function Grow() {
    return (
        <div className="grow mt-5">
            
            <Container>
  <Row>
    <Col>
    <h4 className=" skpe mt-5 py-3"> Optimize your payments</h4>
    <h1 className="">Grow your revenue</h1> 
    </Col>
    {/* <Col>  </Col> */}
  </Row>
  
</Container>
            

            

            
          
            

            <Container>
  <Row>
    <Col md={6} className="mt-5">
    <h2 className="skpe mt-5"> Beat fraud</h2>
    <p className="mt-5">Stripe Radar uses sophisticated<span className= "skpe"> machine <br/>learning </span> trained daily on data from millions of <br/> global businesses to protect you from fraudsters.</p>
    
    
    <Image fluid src="/static/payment/beat.png" />
    
    
    <p> Device fingerprinting and proxy detection </p>
                
                <p> Custom rules and allow and block lists</p>
                
                <p> Dynamic 3D Secure </p>
                
                <p> Review queues and advanced fraud insights </p>

    
    </Col>
    <Col md={6} className="mt-5">
    <h2 className="skpe mt-5"> Maximize acceptance</h2>

    <p className="mt-5">Stripe’s data scientists and engineers obsess over every decline. From   <span className="skpe" > Adaptive Acceptance</span> to automatic card updates, our platform is built to increase acceptance.</p>
    
   


    <Image fluid src="/static/payment/max.png" />











   
    <p> Intelligent MID and MCC assignment </p>
                
                <p> Direct integrations to the card networks</p>
                
                <p> Auto-ISO optimizations </p>
                
                <p> Smart payments retries </p>
                <p> Card account updater</p>




    </Col>
  </Row>
  
</Container>
        </div>
    )
}
