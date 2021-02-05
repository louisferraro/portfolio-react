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

const Intro = () => {
  const [typist, setTypist] = useState(1);

  // use this to infinitely do typing animation
  useEffect(() => {
    setTypist(1);
  }, [typist]);

  return (
    <div
      className="header"
      style={{
        backgroundSize: "cover",
      }}
    >
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 75,
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
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center py-5">
            <Col md={8} sm={12}>
              <StyleRoot>
                <h1
                  className="display-1 font-weight-bolder h1 introText"
                  style={styles.fadeInDown}
                >
                  Hello, I'm Louis Ferraro.
                </h1>
                <h3
                  className="display-4 font-weight-light introText"
                  style={styles.fadeIn}
                >
                  {typist ? (
                    <Typist onTypingDone={() => setTypist(0)}>
                      Software Engineer
                      <Typist.Delay ms={800} />
                      <Typist.Backspace count={17} delay={1000} />
                      UI/UX Designer
                      <Typist.Backspace count={14} delay={1000} />
                      Full Stack Developer
                      <Typist.Backspace count={20} delay={1000} />
                    </Typist>
                  ) : (
                    ""
                  )}
                </h3>
                <h3
                  className="lead font-weight-light introText"
                  style={styles.fadeIn}
                >
                  Mostly working with React.js, Node.js, Python, Firebase/Cloud
                  Services, Javascript, etc.
                </h3>
                <h3
                  className="lead font-weight-light introText"
                  style={styles.fadeIn}
                >
                  Check out my projects below.
                </h3>
                <h3
                  className="lead font-weight-light introText"
                  style={styles.fadeIn}
                >
                  <div>
                    <Button
                      variant="light"
                      onClick={() =>
                        window.open("https://github.com/louisferraro")
                      }
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>{" "}
                    <Button
                      variant="light"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/louis-ferraro/"
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Button>
                  </div>
                </h3>
              </StyleRoot>
            </Col>
          </Row>
          <div style={styles.fadeIn}>
            <Row className="justify-content-center py-5">
              <Col xs="5" md="1">
                <Image fluid src="/static/react-logo.png" />
              </Col>
              <Col xs="5" md="1">
                <Fade in>
                  <Image fluid src="/static/node-logo.png" />
                </Fade>
              </Col>
              <Col xs="5" md="1">
                <Image fluid src="/static/firebase-logo.png" />
              </Col>
              <Col xs="5" md="1">
                <Image fluid src="/static/python-logo.png" />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="5" md="1">
                <Image fluid src="/static/java-logo.png" />
              </Col>
              <Col xs="5" md="1">
                <Image fluid src="/static/git-logo.png" />
              </Col>
              <Col xs="5" md="1">
                <Image fluid src="/static/redux-logo.png" />
              </Col>
              <Col xs="5" md="1">
                <Image fluid src="/static/atlassian-logo.png" />
              </Col>
            </Row>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
  },
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
  fadeInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
  },
  fadeIn: {
    animation: "x 2.5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
  images: {
    width: 450,
    height: 600,
    borderRadius: 15,
    aspectRatio: 20,
    animation: "x 3s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
  brandingHeader: {
    color: "white",
  },
  brandingImage: {
    animation: "x 4s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
  },
};

export default Intro;
