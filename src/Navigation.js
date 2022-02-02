import { Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg" >
        <Container fluid id="nav-container">
          <Navbar.Toggle aria-controls="navbar-dark" />
          <Navbar.Collapse id="navbar-dark">
            <Nav className='m-auto'>
              <NavDropdown id="nav-dropdown-dark" title="Dropdown" menuVariant="dark">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
