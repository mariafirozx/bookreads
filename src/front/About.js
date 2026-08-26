import React from "react";
import aboutIMG from "../assets/imgs/about.png";

import aboutIMG2 from "../assets/imgs/about2.png";
export default function About(){
    return(
        <>
        <div className="about-us">
            <div className="coverT">

            <h2 className="aboutT">about <span>us</span></h2>
            <p className="aboutDes">our journey. our values. they shape your next read. and your next <span>favorite </span></p>
            </div>
            <div className="borderAbout">

                <div className="about-cards">

                </div>
            </div>
            {/* <img className="aboutImg" src={aboutIMG2}></img> */}
            
            {/* <img className="aboutUs-poster" src={aboutIMG}></img> */}
        </div>
        </>
    )
}