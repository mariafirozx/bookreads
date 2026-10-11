import {useState} from "react";
import aboutIMG from "../assets/imgs/about-book.png";
import GenreDisplay from "./GenreDisplay";
import { div } from "framer-motion/client";

const GENRE = [
    {name: "Young Adult", img: ["/imgs/YA/YA1.jpg", "/imgs/YA/YA2.jpg", "/imgs/YA/YA3.jpg","/imgs/YA/YA4.jpg"]},
    {name: "Fantasy", img: ["/imgs/FANTASY/fantasy1.jpg", "/imgs/FANTASY/fantasy2.jpg", "/imgs/FANTASY/fantasy3.jpg","/imgs/FANTASY/fantasy4.jpg"]},
    {name: "Fiction", img: ["/imgs/FICTION/fiction1.jpg", "/imgs/FICTION/fiction2.jpg","/imgs/FICTION/fiction3.jpg","/imgs/FICTION/fiction4.jpg"]},
    {name: "Romance", img: ["/imgs/ROMANCE/romance1.jpg", "/imgs/ROMANCE/romance2.jpg","/imgs/ROMANCE/romance3.jpg","/imgs/ROMANCE/romance4.jpg"]},
    {name: "Science Fiction", img: ["/imgs/SCIENCE-FICTION/sf1.jpg","/imgs/SCIENCE-FICTION/sf2.jpg","/imgs/SCIENCE-FICTION/sf3.jpg","/imgs/SCIENCE-FICTION/sf4.jpg"]},
    {name:"Historical Fiction", img: ["imgs/HISTORICAL-F/hf1.jpg","imgs/HISTORICAL-F/hf2.jpg","imgs/HISTORICAL-F/hf3.jpg","imgs/HISTORICAL-F/hf4jpg"]},
    {name: "Horror", img: ["imgs/HORROR/horror1.jpg","imgs/HORROR/horror2.jpg","imgs/HORROR/horror3.jpg", "imgs/HORROR/horror4.jpg"]},
    {name: "Thriller", img: ["imgs/THRILLER/thriller1.jpg", "imgs/THRILLER/thriller2.jpg","imgs/THRILLER/thriller3.jpg","imgs/THRILLER/thriller4.jpg"]},
    {name: "Magical Realism", img:["imgs/MAGICAL-REAL/mr1.jpg", "imgs/MAGICAL-REAL/mr2.jpg", "imgs/MAGICAL-REAL/mr3.jpg", "imgs/MAGICAL-REAL/mr4.jpg"]},

];

export default function Genres(){
    const [hovered, setHovered] = useState(null);
    const [leaving, setLeaving] = useState(null);

    const handleHover = (i) =>{
        setLeaving(null);
        setHovered(i);
    }
    const handleLeave = (i) => {
        setHovered(null);
        setLeaving(i);
    }

    //active clause

    return(
        <>
        <div className="about-us">
            <div className="coverT">
            <h2 className="aboutT">Our Genre</h2>
            </div>

            <div className="genreList">

                {
                    GENRE.map((genre, i) =>{ //array not an obj 

                        const active = hovered === i || leaving === i;
                        return(
                           
                            <div className="genre-row" key={genre.name}>
                               
                                <GenreDisplay
                                books={genre.img.slice(0,2)}
                                side="left"
                                active={active}
                                >
                                </GenreDisplay>

                                <h3
                                    className={`genre ${hovered === i ? "is-hovered" : ""} ${leaving === i ? "is-leaving" : ""}`}
                                    onMouseEnter={()=> handleHover(i)}
                                    onMouseLeave={() => handleLeave(i)}
                                    onAnimationEnd={()=> leaving == i && setLeaving(null)}
                                >
                                    {genre.name}
                                </h3>
                                <GenreDisplay
                                    books={genre.img.slice(2,4)}
                                    side="right"
                                    active={active}
                                />
                        </div>
                        )
                })}

                    {/* <div className="genre">
                        <span>Young Adult</span>

                    </div> */}
                {/* <h3 className="genre">Fantasy</h3>
                <h3 className="genre">Fiction</h3>
                <h3 className="genre">Romance</h3>
                <h3 className="genre">Science Fiction</h3>
                <h3 className="genre">Historical Fiction</h3>
                <h3 className="genre">Horror</h3>
                <h3 className="genre">Thriller</h3>
                <h3 className="genre">Magical Realism</h3> */}



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