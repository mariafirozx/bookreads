import react from "react";
import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

export default function PageFlip(){
    return(
        <>

        <HTMLFlipBook
                            width={420}
                            height={300}
                            size="fixed"
                            showCover={true}
                            showPageCorners={true}
                            useMouseEvents={true}
                            drawShadow={true}
                            flippingTime={900}
                            maxShadowOpacity={0.4}
                        >

                            <div className="hiw-page hiw-cover">
                                <span>BOOKREADS</span>

                                <h2>
                                    How it
                                    <br />
                                    works.
                                </h2>
                            </div>

                            <div className="hiw-page">
                                <span className="page-number">
                                    01
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
                                    02
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
                                    03
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
        </>
    )
}