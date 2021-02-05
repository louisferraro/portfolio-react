import React from 'react'
import "./Projectimages.css"
import { Row, Col, Image, Container, Button } from "react-bootstrap";

export default function Projectimages() {
    return (
        <div className="container-fluid bg-light py-5">
            


            <div className="container ">
                <Row>  
                    <Col>
                    <h2 className="display-3 font-weight-bolder d-block divie mb-5 text-center  "> Portfolio Hightlights</h2>
                    </Col>   </Row>

            
<div class="grid">
  <div class="grid-item shadow-lg  ">
      <Image fluid src="/static/portfolio-value.png"/>
  </div>
  <div class="grid-item grid-item--width2 grid-item shadow-lg  ">
  <Image fluid src="/static/dividend-payout.png"/>
  </div>
  <div class="grid-item grid-item grid-item--height1   shadow-lg ">

  <Image fluid src="/static/diversification.png"/>
  </div>
  <div class="grid-item grid-item shadow-lg  ">

  <Image fluid src="/static/tesla-iphonmockup.gif"/>
  </div>
  <div class="grid-item grid-item--width2 shadow-lg  ">

  <Image fluid src="/static/netflix.png"/>
  </div>

  <div class="grid-item grid-item--width4  z-depth-4  ">

<Image fluid src="/static/charts-stock.png"/>
</div>
  




</div>

</div>








        </div>
    )
}
