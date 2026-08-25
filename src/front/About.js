import React from "react";
import aboutIMG from "../assets/imgs/about.png";


export default function About(){
    return(
        <>
        <div className="about-us">
            <h2 className="aboutT">About Us</h2>
            <img className="aboutUs-poster" src={aboutIMG}></img>
            <p className="aboutDes"></p>
            <div className="about-cards">

            </div>
        </div>
        </>
    )
}