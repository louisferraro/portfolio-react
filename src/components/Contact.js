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
import { bounce, fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium"; // third party library to streamline CSS
import fadeIn from "react-animations/lib/fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typist from "react-typist";
import { useEffect, useState } from "react";
import Particles from "react-particles-js";

const handleSubmit = () => {
  console.log("submit");
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      className="contact"
      style={{
        backgroundSize: "cover",
      }}
    >
      {/* <Particles
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
      /> */}
      <Container fluid>
        <Row className="justify-content-center py-5">
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                aria-describedby="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
