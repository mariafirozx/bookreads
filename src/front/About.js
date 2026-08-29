import React from "react";
import aboutIMG from "../assets/imgs/about-book.png";

export default function About(){
    return(
        <>
        <div className="about-us">
            <div className="coverT">

            <h2 className="aboutT">about <span>us</span></h2>
            <p className="aboutDes">our journey. our values. they shape your next read. and your next <span>favorite </span></p>
            </div>
            <div className="borderAbout">

            <img className="aboutImg" src={aboutIMG}></img>
                <div className="about-cards">

                     <div className="about-card card-one">
        <span>01</span>
        <h3>Our Journey</h3>
        <p>
            From discovering new stories to building a community around them.
        </p>
    </div>

    <div className="about-card card-two">
        <span>02</span>
        <h3>Our Values</h3>
        <p>
            We believe every reader deserves a place to find their next favorite.
        </p>
    </div>

    <div className="about-card card-three">
        <span>03</span>
        <h3>Our Community</h3>
        <p>
            A space for readers to share, review and discover.
        </p>
    </div>


                </div>
            </div>
            
            {/* <img className="aboutUs-poster" src={aboutIMG}></img> */}
        </div>
        </>
    )
}