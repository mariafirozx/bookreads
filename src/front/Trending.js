import react from "react";
import { useState, useEffect } from "react";

export default function Trending({img, title}){
    return(
        <>
        <div className="trending-books">
            <div className="book">
                <img src={img}></img>
                <div className="title">{title}</div>
                <div className="wrapper">
                    <div className="rating">

                        
                    </div>
                    
                </div>

            </div>
        </div>
        </>


    )
}