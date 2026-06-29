import react from "react";
import { useEffect, useState } from "react";


export default function BookCard({img, title, author, rank, type = "trending"}){
    return(
        <>

            <div className= {`tb-card ${type}`}>
                <span className="tb-rank">{rank}</span>
                <img src={img} alt={title} className="tb-cover" />
                <div className="tb-body">
                    <div className="tb-name">{title}</div>
                    <div className="tb-author">by {author}</div>
                    <div className="tb-stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                        <span className="tb-rating-num">4.6</span>
                    </div>
                    <div className="tb-btn">
                        <div className="dropdown">
                            <button className="tb-wtr-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-flip="false" data-bs-strategy="fixed">
                                Want to Read
                            </button>
                            <ul className="dropdown-menu dropdown-menu-start tb-dropdown">
                                <li><a className="dropdown-item" href="#">Want to Read</a></li>
                                <li><a className="dropdown-item" href="#">Currently Reading</a></li>
                                <li><a className="dropdown-item" href="#">Read</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       
       
       
       
        </>
    )
}