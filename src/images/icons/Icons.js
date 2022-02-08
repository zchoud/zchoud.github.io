import React from "react";
import "./Icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap'
import $ from 'jquery'

function Icons() {
  //initialize array
  var elements = new Array(4);
  //loop through array initializing a 2d array
  for (let index = 0; index < elements.length; index++) {
    elements[index] = new Array(4);
  }
  //function importAll: takes in dependencies (see require.context note) and an array
  //returns an object with key value pairs depending on the first item
  //stores the object names in the second argument array to be gone through
  function importAll(r, elements) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
      let row = Math.trunc(index / 4);
      let col = index % 4;
      elements[row][col] = item;
    });
    return images;
  }
  const icons = importAll(require.context("./", false, /\.(svg)$/), elements);
  let colIndex = 0;
  return (
    <div className="icon-body">
    <Container>
      <Row>
      {elements.map((row, rownum) => 
      {
        return ((row.map((element, colnum) => 
        { 
          let filename = element.substring(2, element.length); 
          colIndex++;
          return (<Col key={'c' + colIndex}><img src={icons[`${filename}`]} key={rownum + "" + colnum} alt="icon" /></Col>);
        })));
      }
      )}
      </Row>
    </Container>
    </div>
  );
}

export default Icons;
