import react from "react";
import {useState, useEffect} from "react";

//passed as prop for genre list
export default function GenreDisplay({books, side, active}){
 
    return(
        <>
        <div className={`book-container-genre book-container-genre-${side} ${active ? "is-visible": ""}`}>
            {
                books.map((src, i) =>(
                  
                <div className="book-outline" key={i}>
                    <img src={src}></img>
                </div>
                ))
            }
        </div>
        </>
    )
}