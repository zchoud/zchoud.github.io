import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Banner from './Banner';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import Bio from './Bio';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <React.StrictMode>
    <Banner />
    <Navigation />
    <Bio />
    <Skills />    
    <Experience />
    <Education />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
