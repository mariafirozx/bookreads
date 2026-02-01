import react from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CurrentRead from "./CurrentRead";


export default function Home(){
    return(
        <>

        <div className="right-container">
            
            <section className="current-read">
                {/* <CurrentRead></CurrentRead> */}

            </section>

            <div className="want-to-read">

            </div>
            
        </div>
        
        </>
    )
}