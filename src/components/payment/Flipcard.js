import React from "react";
import "./Flipcard.css";
import { Row, Col, Image, Container, Button, Modal } from "react-bootstrap";

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
          White Mobile Project
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
          Sneaky Elves
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>A 2d Top-Down game built with Unity in C#</h4>
        <p>Used prefabs to generate enemy entities within each level.</p>
        <p>
          Wrote enemy AI to determine how smart the enemies were for each of the
          three levels. For Level 1, enemies will only chase you if you get in
          their vision cone. Level 2 enemies have abilities of Level 1 but will
          roam randomly in a predefined radius. Level 3 can has Level 2 AI but
          can also "hear" footsteps of closeby users.
        </p>
        <Button
          onClick={() =>
            window.open("https://github.com/louisferraro/sneaky-elves-game")
          }
        >
          Check out the code
        </Button>
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
      <div className="container pt-3">
        <div className="grid">
          <div className="grid-item shadow-lg border border-light visa img">
            <Image
              fluid
              src="/static/visa.png"
              onClick={() => setModalShowVisa(true)}
            />

            <MyVerticallyCenteredModalVisa
              show={modalShowVisa}
              onHide={() => setModalShowVisa(false)}
            />
          </div>
          <div className="grid-item grid-item--width2 grid-item shadow-lg border border-light card img">
            <Image
              fluid
              src="/static/backtracking-visualizer.gif"
              width="600px"
              onClick={() => setModalShowCard(true)}
            />

            <MyVerticallyCenteredModalCard
              show={modalShowCard}
              onHide={() => setModalShowCard(false)}
            />
          </div>
          <div className="grid-item grid-item--height1 border border-light Blackmobile img">
            <Image
              fluid
              src="/static/tesla-iphone.png"
              onClick={() => setModalShowMobile(true)}
            />

            <MyVerticallyCenteredModalMobile
              show={modalShowMobile}
              onHide={() => setModalShowMobile(false)}
            />
          </div>
          <div className="grid-item grid-item--width1 height2 w border border-light Mobilewhite img">
            <Image
              fluid
              src="/static/pickup-iphone.png"
              width="300px"
              onClick={() => setModalShowMobileWhite(true)}
            />

            <MyVerticallyCenteredModalMobileWhite
              show={modalShowMobileWhite}
              onHide={() => setModalShowMobileWhite(false)}
            />
          </div>
          {/* <div className="grid-item grid-item shadow-lg border border-light whitemobile ">

  <Image fluid src="/static/mobilewhite.png" width="300px" />
  </div> */}
          <div className="grid-item width75 text-center Chart img">
            <video
              width="700px"
              fluid
              onClick={() => setModalShowChart(true)}
              className="video-container video-container-overlay"
              autoPlay
              loop
              muted
              data-reactid=".0.1.0.0"
            >
              <source
                type="video/mp4"
                data-reactid=".0.1.0.0.0"
                src="static/cut-demo-sneakyelves.mov"
              ></source>
            </video>

            <MyVerticallyCenteredModalChart
              show={modalShowChart}
              onHide={() => setModalShowChart(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
