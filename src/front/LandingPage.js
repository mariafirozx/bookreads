import react from "react";
import "../styles/Landing.css";
import landingPic from "../assets/imgs/landingPic.jpg"


export default function LandingPage({onGetStarted, onSignin}){
    return(
        <>

         <div className="lp2">
            {/* Nav */}
            <nav className="lp2-nav">
                <div className="lp2-logo">
                    <div className="logo-dot"></div>
                    BookReads
                </div>
                <div className="lp2-nav-links">
                    <a className="lp2-nav-link">Browse</a>
                    <a className="lp2-nav-link">Community</a>
                    <a className="lp2-nav-link">About</a>
                    <button className="lp2-signin" onClick={onSignin}>Sign In</button>
                </div>
            </nav>

            {/* Split Hero */}
            <div className="lp2-hero">
                {/* Left — teal text side */}
                <div className="lp2-left">
                    <div className="lp2-eyebrow">
                        <span></span>For every kind of reader
                    </div>
                    <h1 className="lp2-h1">
                        Discover<br />Your Next
                        <em>Chapter.</em>
                    </h1>
                    <p className="lp2-sub">
                        Track your books, uncover your next great read, and connect with a community that lives for stories.
                    </p>
                    <div className="lp2-btns">
                        <button className="btn-go" onClick={onGetStarted}>Get Started — Free</button>
                        <button className="btn-ghost">Browse Books →</button>
                    </div>
                    <div className="lp2-stats">
                        <div className="lp2-stat"><span>12k+</span><p>Books tracked</p></div>
                        <div className="lp2-stat"><span>5k+</span><p>Active readers</p></div>
                        <div className="lp2-stat"><span>98%</span><p>Love it</p></div>
                    </div>
                </div>

                {/* Right — illustration */}
                <div className="lp2-right">
                    <img src={landingPic} className="lp2-img" alt="Library illustration" />
                    <div className="edge-fade"></div>   {/* teal fade on left edge */}
                </div>
            </div>

            {/* Features, CTA etc. below — keep from previous Landing.js */}
        </div>
    
        </>
    )
}