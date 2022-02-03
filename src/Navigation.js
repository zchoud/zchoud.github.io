import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg" className="fixed-top">
        <Container fluid id="nav-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Item className="px-5">
                <Nav.Link>About</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-5">
                <Nav.Link>Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-5">
                <Nav.Link>Education</Nav.Link>
              </Nav.Item>
              <Nav.Item className="px-5">
                <Nav.Link>Experience</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
