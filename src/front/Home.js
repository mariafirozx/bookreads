/**
 * 
 * import assets
 */
import react from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CurrentRead from "./CurrentRead";
import ToRead from "./ToRead";
import Newsletter from "./Newsletter";
import Trending from "./Trending";
import BookCard from "./BookCard";

import bookPos from "../assets/imgs/34.jpeg";
import {trending} from "../back/TrendingBooks.js"
import { recommended } from "../back/RecommendBooks.js";
import { news } from "../back/NewsletterAPI.js";

export default function Home(){

    const currentRead = [
        {
            id: 1,
            bookPoster: "/imgs/7.jpg",
            bookName: "Archive of Unknown Universe",
            AuthorName: "Ruben Ryes JR."
        },
        {
            id: 2,
            bookPoster: "/imgs/14.jpg",
            bookName: "The Wedding People",
            AuthorName: "Allison Epoch"
    
        },
        {
            id: 3,
            bookPoster: "/imgs/18.jpg",
            bookName: "Cosmic Love at the Multiverse Hair Show",
            AuthorName: "Annie Mare"
        }
    ]

    


    return(
        <>

        <div className="homepage">

             <div className="left-container">
                {/* <section className="newsletter">
                    <div className="newsletter-layout">
                        <div className="headingContainer">
                            <h5 className="headingNews">Latest News</h5>

                        </div>
                            <div className="content">
                                {news.map((newsLetter,i)=>(
                                    <Newsletter
                                        key={i}
                                        newsTitle={newsLetter.newsTitle}
                                        newsImage={newsLetter.newsImage}
                                    >

                                    </Newsletter>
                                ))}


                            </div>
                    </div>

                </section> */}

                    <section className="newsletter">
                        <div className="nl-widget">
                            <div className="nl-header">
                                <div className="nl-header-inner">
                                    <div className="nl-dot"></div>
                                    <h5 className="headingNews">Latest News</h5>
                                </div>
                            </div>
                            <div className="nl-body">
                                {news.map((n) => (
                                    <Newsletter
                                        key={n.id}
                                        newsTitle={n.newsTitle}
                                        newsImage={n.newsImage}
                                        newsTag={n.newsTag}
                                        newsDate={n.newsDate}
                                    />
                                ))}
                            </div>
                            <div className="nl-footer">
                                <a className="nl-see-all">View all news →</a>
                            </div>
                        </div>
                    </section>

             </div>

            <div className="main-page">
                
            <h1 className="heading">Trending This Week</h1>
                <section className="trending_books">
                    <div className="tb-track">
                        <div className="grid-container-tb">

                            {trending.map((trend,i)=>(

                                <BookCard
                                    key={trend.id}
                                    rank={i+1}
                                    img={trend.img}
                                    title={trend.title}
                                    author={trend.author}
                                    type="trending"
                                ></BookCard>
                            ))}
                        </div>

                    </div>

                   
                </section>

            <h1 className="heading rec">Todays Recommendation for You</h1>
                <section className="todays_rec">
                    <div className="rb-track">
                        <div className="grid-container-rb">
                        {
                            recommended.map((rec, i)=>(
                                <BookCard
                                    key={rec.id}
                                    img={rec.img}
                                    title={rec.title}
                                    author={rec.author}
                                    type="recommended"
                                ></BookCard>
                            ))
                        }


                            
                        </div>
                    </div>

                </section>
            </div>

            <div className="right-container">
                <section className="current-read">
                    <div className="top">

                        <h5 className="currentHead">Currently Reading</h5>
                        <a className="see-more"> View All</a>
                    </div>

                    {currentRead.map((curr,i)=>(
                        <CurrentRead
                        key={i}
                        bookPoster={curr.bookPoster}
                        bookName={curr.bookName}
                        AuthorName={curr.AuthorName}
                        
                        ></CurrentRead>
                    ))}

                    {/* <CurrentRead


                    bookPoster={bookPos}
                    bookName={"Come & Get it"}
                    AuthorName={"Kiley Reid"}
                    >
                    </CurrentRead> */}

                

                </section>
                <div className="divider"></div>

                <section className="want-to-read">
                    <div className="top">
                        <h5 className="wantToHead"> Want to Read</h5>
                        <a className="see-more">View All</a>
                    </div>

                    <ToRead></ToRead>
                </section>
                
            
            </div>
        </div>

        </>
    )
}