import react from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CurrentRead from "./CurrentRead";
import ToRead from "./ToRead";
import Newsletter from "./Newsletter";
import Trending from "./Trending";
/**
 * 
 * import assets
 */

import bookPos from "../assets/imgs/34.jpeg";


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

    const news = [
        {
            id: 1,
            newsTitle: "5 Most Anticipated Books To Movie Adaptation this Year",
            newsImage: "/imgs/news.jpg"
        },
        {
            id: 2,
            newsTitle: "Reading is the New Fact Checking in Today's World of Illegal Wars",
            newsImage: "/imgs/news2.jpg"
        }

    ]


    const trending = [
        {
            id: 1,
            img: "/imgs/8.jpg",
            title: "A Marriage at Sea",
            author: "Sophie Elmhirst"

        },
        {
            id: 2,
            img: "/imgs/16.jpg",
            title: "Welcome to the Hyunam-Dong Bookshop",
            author: "Hwang Bo-Reum"

        }
    ]

    return(
        <>

        <div className="homepage">

             <div className="left-container">
                <section className="newsletter">
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

                </section>

             </div>

            <div className="main-page">
                
            <h1 className="heading">Trending This Week</h1>
                <section className="trending_books">
                    <div className="tb-track">

                        {trending.map((trend,i)=>(

                            <Trending
                                key={trend.id}
                                rank={i+1}
                                img={trend.img}
                                title={trend.title}
                                author={trend.author}
                            ></Trending>
                        ))}
                    </div>

                   
                </section>

                <section className="todays_rec">
                    <h1 className="heading rec">Todays Recommendation for You</h1>

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