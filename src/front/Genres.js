import React from "react";
import aboutIMG from "../assets/imgs/about-book.png";

export default function Genres(){
    return(
        <>
        <div className="about-us">
            <div className="coverT">

            <h2 className="aboutT">Our Genre</h2>
            </div>

            <div className="genreList">

                    <div className="genre">
                        <span>Young adult</span>

                    </div>
                <h3 className="genre">Fantasy</h3>
                <h3 className="genre">Fiction</h3>
                <h3 className="genre">Romance</h3>
                <h3 className="genre">Science Fiction</h3>
                <h3 className="genre">Historical Fiction</h3>
                <h3 className="genre">Horror</h3>
                <h3 className="genre">Thriller</h3>
                <h3 className="genre">Magical Realism</h3>



            </div>
            <p className="aboutDes">find your next favorite read from the many selection of genre! </p>





            {/* <div className="borderAbout">

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
            </div> */}
            
        </div>
        </>
    )
}