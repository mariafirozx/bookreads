import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './front/App.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './front/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// reportWebVitals();
