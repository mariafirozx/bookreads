import React from "react";
import { useState, useEffect } from "react";


export default function CurrentRead({bookPoster, bookName, AuthorName}){

    return(
        <>

        <div className="book-container">
            <div className="book-details">
                <div className="bookPos">
                    <img className="bookImg" src={bookPoster}></img>
                </div>

                <div className="detail">
                    <h3 className="bookName">{bookName}</h3>
                    <h4 className="authorName">by {AuthorName }</h4>
                    <div className="UpdateProgress">
                        <button className="btn-progress">Update progress</button>
                    </div>

                </div>
            
            </div>
            
        </div>
        
        
        </>
    )
}