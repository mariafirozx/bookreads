import react from "react";
import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

export default function PageFlip(){
    return(
        <>
            <div className="flip-wrap">

                 <HTMLFlipBook
                           width={350}
                            height={379}
                            size="fixed"

                            showCover={false}
                            usePortrait={false}

                            showPageCorners={true}
                            useMouseEvents={true}

                            drawShadow={true}
                            maxShadowOpacity={0.6}
                            flippingTime={700}

                            mobileScrollSupport={true}
                        >

                            <div className="hiw-page hiw-cover">
                                <span>BOOKREADS</span>

                                <h2 className="titleCover">
                                    “The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”
                                    <br/>
                                    <h4>

                                    ― Jane Austen, Northanger Abbey
                                    </h4>
                                </h2>
                            </div>

                            <div className="hiw-page">
                                <span className="page-number">
                                    Chapter One
                                </span>

                                <h2>
                                    Create your
                                    <br />
                                    shelf.
                                </h2>

                                <p>
                                    Create your own shelves and
                                    organize your books exactly
                                    how you want.
                                </p>
                            </div>

                            <div className="hiw-page">
                                <span className="page-number">
                                    Chapter Two
                                </span>

                                <h2>
                                    Track your
                                    <br />
                                    reads.
                                </h2>

                                <p>
                                    Keep track of what you're
                                    currently reading and what
                                    you want to read next.
                                </p>
                            </div>

                            <div className="hiw-page">
                                <span className="page-number">
                                    Chapter Three
                                </span>

                                <h2>
                                    Review &
                                    <br />
                                    share.
                                </h2>

                                <p>
                                    Share your thoughts and
                                    discover what your friends
                                    are reading.
                                </p>
                            </div>

                            <div className="hiw-page hiw-back">
                                <h2>
                                    Happy
                                    <br />
                                    reading.
                                </h2>
                            </div>

                </HTMLFlipBook>
            </div>
        </>
    )
}