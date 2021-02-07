import React, { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavBarStyleSheet.css";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const SmallProjects = () => {
  return (
    <div>
      <div className="projects my-5">
        <div>
          <Row className="justify-content-center">
            <h1 className="display-1 font-weight-bolder text-warning p-2 rounded ">
              Smaller Projects
            </h1>
          </Row>
          <div className="projects-container">
            <Row className="mt-4">
              <Col xs="12" md="6">
                <div className="small-project-card">
                  <div className="small-project-card-inner">
                    <div className="small-project-card-front">
                      <Image
                        rounded
                        src="/static/backtracking-visualizer.gif"
                      />
                    </div>
                    <div className="small-project-card-back">
                      <h1>Backtracking visualizer</h1>
                      <p>
                        Backtracking algorithm that checks all paths for
                        something and prints a visual to show what the algorithm
                        is doing.
                      </p>
                      <p>Written in Java</p>
                      <Button
                        className="see-more"
                        variant="dark"
                        onClick={() =>
                          window.open(
                            "https://github.com/louisferraro/backtracking-visualizer"
                          )
                        }
                      >
                        Check out the code{" "}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="12" md="6">
                <h1 className=" font-weight-bolder text-left mt-5 pickup">
                  {" "}
                  Backtracking Visualizer
                </h1>
                <h3 className="font-weight-bold text-left mt-3 project-title">
                  Backtracking algorithm that checks all paths for something and
                  prints a visual to show what the algorithm is doing.
                </h3>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProjects;
