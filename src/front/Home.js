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
                <div className="top">

                    <h5 className="currentHead">Currently Reading</h5>
                    <a className="see-more"> See more</a>
                </div>

                <CurrentRead

                bookPoster={bookPos}
                bookName={"Come & Get it"}
                AuthorName={"Kiley Reid"}
                >
                </CurrentRead>

            </section>

            <section className="want-to-read">
                <div className="top">
                    <h5 className="wantToHead"> Want to Read</h5>
                    <a className="see-more">See more</a>
                </div>

            </section>
            
        </div>
        
        </>
    )
}