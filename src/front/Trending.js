import react from "react";
import { useState, useEffect } from "react";

export default function Trending({img, title, author}){
    return(
        <>
        <div className="trending-books">
            <div className="book">
                <img src={img}></img>
                <div className="top-book">
                    <div className="title">{title}

                        <span className="author">{author}</span>
                    </div>

                </div>
                    <div className="rating">
                        <i class="bi bi-star-fill"></i>
                        <div className="rating-rate">
                            4.6
                        </div>
                    
                </div>

            </div>
        </div>
        </>


    )
}