import React from 'react';
import Photo from './images/portrait.jpg';
import './Portrait.css';

function Portrait() {
  return <div className="portrait-img"><img src={Photo} alt="Me, Zian Choudhury" /></div>;
}

export default Portrait;
