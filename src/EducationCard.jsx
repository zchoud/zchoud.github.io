import { Card } from "react-bootstrap";
import Circle from "./images/others/Circle";
import { propTypes } from "react-bootstrap/esm/Image";
import './EducationCard.css'

import React from "react";

function EducationCard (props) {
  return (
    <div id="card-elements">
        <div className="background-off"></div>
        <Card>
        <Card.Title>
            <p><Circle /></p>
            <h3>{props.program}</h3>    
        </Card.Title>
        <Card.Body>
                
        </Card.Body>
        </Card>
    </div>
  );
}

EducationCard.propTypes = {
    program: propTypes.string,
    
}

export default EducationCard