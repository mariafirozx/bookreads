import react from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CurrentRead from "./CurrentRead";

/**
 * 
 * import assets
 */

import bookPos from "../assets/imgs/34.jpeg";


export default function Home(){
    return(
        <>

        <div className="right-container">
            <section className="current-read">
                <h5 className="currentHead">Currently Reading</h5>
                <CurrentRead

                bookPoster={bookPos}
                bookName={"Come & Get it"}
                AuthorName={"Kiley Reid"}
                >
                </CurrentRead>

            </section>

            <div className="want-to-read">

            </div>
            
        </div>
        
        </>
    )
}