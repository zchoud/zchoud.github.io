import React from 'react';
import Photo from './portrait.jpg';
import './Portrait.css';

function Portrait() {
  return <div class="portrait-img"><img src={Photo} alt="Me, Zian Choudhury" /></div>;
}

export default Portrait;
