import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './Banner';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import Bio from './Bio';
import Skills from './Skills';
import Education from './Education';

ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <Navigation />
    <Bio />
    <Skills />
    <Education />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
