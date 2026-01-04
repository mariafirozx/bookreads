import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './front/App.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './front/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path ='\' element={<App/>}></Route>
    </Routes>
  </Router>
);


// reportWebVitals();
