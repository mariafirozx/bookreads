import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './front/App.js';
import LandingPage from './front/LandingPage.js';
import Home from './front/Home.js';
import { BrowserRouter as Router, Routes, Route , Navigate, replace} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route element={<App/>}>
        {/* <Route index element ={<LandingPage/>}/> */}

        {/* <Route index element={<Home/>}/>  */}
         <Route path="home" element ={<Home/>}></Route>
      
      </Route>

    </Routes>
  </Router>
);


// reportWebVitals();
