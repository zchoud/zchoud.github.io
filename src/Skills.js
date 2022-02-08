import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icons from './images/icons/Icons'
import './Skills.css';

function Skills() {

  return (
    <div id="icon-set">
    <Container>
          <Row><h1>Skills</h1></Row>
          <Row><Icons /></Row>
    </Container>
    </div>
  );
}

export default Skills;
