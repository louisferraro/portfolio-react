import React, { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavBarStyleSheet.css";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Divie = () => {
  const history = useHistory();
  const handleClick = useCallback(() => history.push("/divie"), [history]);

  return (
    <div className="projects">
      <div>
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h1 className="display-5 font-weight-bolder divie">Divie.</h1>
              <h3 className="font-weight-bold project-title">
                An application for beginner/intermediate investors to monitor
                their portfolio and analyze stocks.
              </h3>
              {/* padding bottom to account for natural padding in container */}
              <div style={{ paddingBottom: "30px", paddingTop: "20px" }}>
                <Button
                  className="see-more"
                  variant="dark"
                  onClick={handleClick}
                >
                  Check it out <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </div>
              <Image
                fluid
                rounded
                className="project-images box-images"
                src="/static/main-dash.png"
              />
            </Col>
            <Col md="4">
              <Image fluid src="/static/tesla-iphone.png" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Divie;
