import React, { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavBarStyleSheet.css";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const PickUP = () => {
  const history = useHistory();
  const handleClick = useCallback(() => history.push("/divie"), [history]);

  return (
    <div className="projects-pickup">
      <div>
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <div style={{ paddingTop: "30px" }}>
                <h1 className="display-5 font-weight-bolder pickup">PickUP.</h1>
              </div>
              <h3 className="font-weight-bold project-title-pickup">
                A mobile app for users to find and join people playing sports
                near them.
              </h3>
              <div style={{ paddingBottom: "30px", paddingTop: "20px" }}>
                <Button
                  className="see-more-pickup"
                  variant="light"
                  onClick={handleClick}
                >
                  Check it out <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </div>
              <div style={{ paddingBottom: "30px", paddingTop: "20px" }}>
                <Image
                  fluid
                  rounded
                  className="project-images box-images"
                  src="/static/pickup-database.png"
                />
              </div>
            </Col>
            <Col md="4">
              <Image fluid src="/static/pickup-iphone.png" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PickUP;
