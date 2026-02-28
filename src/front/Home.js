import react from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CurrentRead from "./CurrentRead";
import ToRead from "./ToRead";
/**
 * 
 * import assets
 */

import bookPos from "../assets/imgs/34.jpeg";



export default function Home(){
    const currentRead = [
        {
            id: 1,
            bookPoster: "/imgs/7.jpg",
            bookName: "Archive of Unknown Universe",
            AuthorName: "Ruben Ryes JR."
        },
        {
            id: 2,
            bookPoster: "/imgs/7.jpg",
            bookName: "Archive of Unknown Universe",
            AuthorName: "Ruben Ryes JR."
    
        },
        {
            id: 3,
            bookPoster: "/imgs/7.jpg",
            bookName: "Archive of Unknown Universe",
            AuthorName: "Ruben Ryes JR."
        }
    ]

    return(
        <>

        <div className="right-container">
            <section className="current-read">
                <div className="top">

                    <h5 className="currentHead">Currently Reading</h5>
                    <a className="see-more"> View All</a>
                </div>

                {currentRead.map((curr)=>(
                    <CurrentRead
                    bookPoster={curr.bookPoster}
                    bookName={curr.bookName}
                    AuthorName={curr.AuthorName}
                    
                    ></CurrentRead>
                ))}

                {/* <CurrentRead

                bookPoster={bookPos}
                bookName={"Come & Get it"}
                AuthorName={"Kiley Reid"}
                >
                </CurrentRead> */}

            

            </section>
            <div className="divider"></div>

            <section className="want-to-read">
                <div className="top">
                    <h5 className="wantToHead"> Want to Read</h5>
                    <a className="see-more">View All</a>
                </div>

                <ToRead></ToRead>



            </section>
            
           
        </div>
        
        </>
    )
}