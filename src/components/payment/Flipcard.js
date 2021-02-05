import React from 'react'
import  "./Flipcard.css"
import { Row, Col, Image, Container, Button,Modal } from "react-bootstrap";








function MyVerticallyCenteredModalVisa(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Visa Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Visa Project Detail</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}










function MyVerticallyCenteredModalCard(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Card Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Card Project Detail</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}








function MyVerticallyCenteredModalMobile(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Mobile Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Mobile Project Detail</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}











function MyVerticallyCenteredModalMobileWhite(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         White  Mobile Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>White Mobile Project Detail</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}





function MyVerticallyCenteredModalChart(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Chart Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Chart Project Detail</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}














































export default function Flipcard() {

  const [modalShowVisa, setModalShowVisa] = React.useState(false);
  const [modalShowCard, setModalShowCard] = React.useState(false);
  const [modalShowMobile, setModalShowMobile] = React.useState(false);
  const [modalShowMobileWhite, setModalShowMobileWhite] = React.useState(false);
  const [modalShowChart, setModalShowChart] = React.useState(false);
  
    return (
        
        <div className="flip">
          

            <div className="container mt-5 pt-3">
                <Row>  
                    <Col>
                    <h2 className="display-3 font-weight-bolder d-block divie mb-5 text-center  "> Portfolio Hightlights</h2>
                    </Col>   </Row>

            




  
<div className="grid">
  <div className="grid-item shadow-lg border border-light visa">
      <Image fluid src="/static/visa.png" onClick={() => setModalShowVisa(true)}/>


      <MyVerticallyCenteredModalVisa
        show={modalShowVisa}
        onHide={() => setModalShowVisa(false)}
      />
      
  </div>
  <div className="grid-item grid-item--width2 grid-item shadow-lg border border-light card">
  <Image fluid src="/static/card.png" width="600px"  onClick={() => setModalShowCard(true)}/>



  <MyVerticallyCenteredModalCard
        show={modalShowCard}
        onHide={() => setModalShowCard(false)}
      />
  

  </div>
  <div className="grid-item grid-item--height1 border border-light  shadow-lg Blackmobile">

  <Image fluid src="/static/mobile.png" onClick={() => setModalShowMobile(true)}/>


  <MyVerticallyCenteredModalMobile
        show={modalShowMobile}
        onHide={() => setModalShowMobile(false)}
      />

  </div>
  <div className="grid-item grid-item--width1 height2 w border border-light  shadow-lg Mobilewhite">

  <Image fluid src="/static/mobilewhite.png" width="300px"onClick={() => setModalShowMobileWhite(true)} />
 




  <MyVerticallyCenteredModalMobileWhite
        show={modalShowMobileWhite}
        onHide={() => setModalShowMobileWhite(false)}
      />




  </div>
  {/* <div className="grid-item grid-item shadow-lg border border-light whitemobile ">

  <Image fluid src="/static/mobilewhite.png" width="300px" />
  </div> */}
  <div className="grid-item width75 shadow-lg border border-light text-center Chart ">

  <Image fluid src="/static/grahphic.png" width="1000px"  className="img-fluid" onClick={() => setModalShowChart(true)}/>
  
  <MyVerticallyCenteredModalChart
        show={modalShowChart}
        onHide={() => setModalShowChart(false)}
      />

  </div>
  
</div>

  







</div>



</div>


    
    )
}
