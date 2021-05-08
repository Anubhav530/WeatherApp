import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import NavigationBar from './NavigationBar';
// import './NavigationBar.css';
import FetchData from './FetchData';
import './FetchData.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FetchData />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
