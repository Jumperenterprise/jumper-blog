import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import './index.css';
import App from './App';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
