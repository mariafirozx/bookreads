import React from "react";
import { useState, useEffect } from "react";

export default function Newsletter({newsTitle, newsImage, newsTag ="News", newsDate="May 2025"}){
    return(
        <>
            {/* <div className="mainNews">
                <div className="news-card">
                        <h4 className="news-title">{newsTitle}</h4>
                        <div className="newsImg">
                            <img src={newsImage}></img>
                        </div>                    
                </div>

            </div> */}

             <div className="nl-card">
            <div className="nl-img-wrap">
                <img src={newsImage} alt={newsTitle} />
            </div>
            <span className="nl-tag">{newsTag}</span>
            <div className="nl-title">{newsTitle}</div>
            <div className="nl-meta">
                <span className="nl-read">→ Read more</span>
                <span className="nl-date">{newsDate}</span>
            </div>
        </div>
        
        </>
    )
}