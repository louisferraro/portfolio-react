import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Jumbotron,
  Row,
  Col,
  Container,
  Button,
  Image,
  Fade,
} from "react-bootstrap";

import Particles from "react-particles-js";

const Footer = () => {
  return (
    <div
      className="contact"
      style={{
        backgroundSize: "cover",
      }}
    >
      <Particles
        className="particles-contact"
        params={{
          particles: {
            number: {
              value: 25,
              density: {
                enable: false,
                value_area: 5000,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.5,
            },
            size: {
              value: 1,
            },
          },
          retina_detect: true,
        }}
      />
      <Container fluid>
        <Row className="justify-content-center py-5"></Row>
      </Container>
    </div>
  );
};

export default Footer;
