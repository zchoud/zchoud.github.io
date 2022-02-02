import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './Banner';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import Block from './block'

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Banner />
    <Block />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
