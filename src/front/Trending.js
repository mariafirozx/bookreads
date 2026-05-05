import react from "react";
import { useState, useEffect } from "react";

export default function Trending({img, title, author}){
    return(
        <>
        <div className="trending-books-section">
            <div className="book">
                <img src={img}></img>
                <div className="top-book">
                  <div className="title">{title}
                        <span className="author">by {author}</span>
                    </div>

                </div>
                    <div className="rating">
                        <i class="bi bi-star-fill"></i>
                        <div className="rating-rate">
                            4.6
                        </div>
                    
                </div>


            </div>
                <div className="selective-btn">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        Want to Read
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start show">
                        <li><a className="dropdown-item" href="#">Want to Read</a></li>
                        <li><a className="dropdown-item" href="#">Currently Reading</a></li>
                        <li><a className="dropdown-item" href="#">Read</a></li>
                    </ul>

                </div>
        </div>
        </>


    )
}