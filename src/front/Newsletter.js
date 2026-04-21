import React from "react";
import { useState, useEffect } from "react";

export default function Newsletter({newsTitle, newsImage}){
    return(
        <>
            <div className="mainNews">
                <div className="news-card">
                        <h4 className="news-title">{newsTitle}</h4>
                        <div className="newsImg">
                            <img src={newsImage}></img>
                        </div>                    
                </div>

            </div>
        
        </>
    )
}