import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Education.css'
import EducationCard from './EducationCard';

function Education() {
  return (
    <div id='edu-wrap'>
    <div id='education-group'>
      <Container fluid>
          <Row>
            <Col className="edu-grp-title">
              <h1>Education</h1>
            </Col>
          </Row>
          <Row className='edu-crd-grp'>
              <Col>
                <EducationCard program="Computer Programming & Analysis"/>
                <EducationCard program="Mechanical Engineering"/>
              </Col>
          </Row>
      </Container>
    </div>
    </div>
  )
}

export default Education