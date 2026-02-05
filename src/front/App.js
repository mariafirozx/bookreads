import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./Navbar";
import { Outlet } from 'react-router';


function App() {
  return (
    <>      
    <div className="main-container">

      <Navbar title="Bookreads"></Navbar>


      <div className="content">
        <Outlet></Outlet>
        
      </div>
      

      <footer className="contain">

                    <div className='icons'>
                            <a href='https://www.linkedin.com/in/marya-fairoz/' target='_blank'><i className="bi bi-linkedin"></i></a>
                            <a href="https://github.com/mariafirozx" target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                        <p className="text">
                            designed & created by zahra.

                        </p>
      </footer>

    </div>


    </>
  );
}

export default App;
