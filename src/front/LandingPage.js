import react from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Landing.css";
import "../styles/Features.css";
import landingPic from "../assets/imgs/landingPic3.jpg"
import featureIMG from "../assets/imgs/features-sec2.jpg"


export default function LandingPage({onGetStarted, onSignin}){
    const navigate = useNavigate();

    const handleSignIn = ()=>{
        onSignin?.() || navigate('/home');
    }

    return(
        <>
          <div className="lp2">
            <section className="hero-section">

                    <div className="lp2-left">
                        <nav className="lp2-nav">
                            <div className="lp2-logo">BookReads</div>
                            <div className="lp2-nav-links">
                                <a className="lp2-nav-link">Features</a>
                                <a className="lp2-nav-link">How It Works</a>
                                <a className="lp2-nav-link">About</a>
                            </div>
                            <button className="lp2-signin" onClick={handleSignIn}>Sign in</button>
                        </nav>

                        <div className="lp2-hero-content">
                            <div className="lp2-eyebrow"><span></span>For every kind of imaginary</div>
                            <h1 className="lp2-h1">Deciding Your Next<em>Read?</em></h1>
                            <p className="lp2-sub">You have come to right place! Here you can track, discover and talk about your recent books. From unlocking thousands of books to building a community, we offer you all.</p>
                            <div className="lp2-btns">
                                <button className="btn-go" onClick={onGetStarted}>Get Started for Free</button>
                                <button className="btn-ghost">Browse Books →</button>
                            </div>
                            <div className="lp2-stats">
                                <div className="lp2-stat"><span>12k+</span><p>Books tracked</p></div>
                                <div className="lp2-stat"><span>5k+</span><p>Active readers</p></div>
                                <div className="lp2-stat"><span>98%</span><p>Love it</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="lp2-right">
                        <img src={landingPic} className="lp2-img" alt="Library illustration" />
                        <div className="edge-fade"></div>
                    </div>


                </section>

                <section className="features-section">
                        <div className="left">
                            <div className="arrow-pointer">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                                    <path 
                                    d="M10 40 Q30 30, 50 50 M50 50 L40 45 M50 50 L45 60" 
                                    stroke="var(--secondary-primary)" 
                                    strokeWidth="3" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    fill="none"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="right">
                            <img src={featureIMG} className="feature-img"/>
                            <h2 className="corner-headline" data-position="first">Your Archive.</h2>
                        </div>
                        <div className="features-headline">

                            <div className="lp2-eyebrow features"><span></span>Featured Features</div>

                            <h1 className="headline"> A place to remember your <span>books & share </span> your current obsession with friends.</h1>
                            <p className="sub-features">Everything you need to track your books, categorize, and search up trending and most read books by the community</p>

                        </div>

                        <div className="features-cards">
                            <div className="card-container">
                                <div className="card-img">
                                    <img></img>
                                </div>
                            </div>
                        </div>



                </section>
            </div>
        
        </>
    )
}