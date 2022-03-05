import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./Experience.css";

function Experience() {
  return (
    <Container id="exp-group" fluid>
      <Row>
        <Col className="exp-head">
          <h1>Experience</h1>
        </Col>
      </Row>
      <div>
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>
              <div style={{display: "flex", width: "100%"}}>
              <span style={{alignContent: 'left'}}>Victoria Park Community Homes - Assistant Project Manager</span> <span style={{alignContent: 'right'}}>2019-2020</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
}

export default Experience;
