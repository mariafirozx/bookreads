import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"
import bookmark from '../assets/imgs/bookmark.png';
import footerPic from '../assets/imgs/footerPic.jpg'



export default function Footer({props}) {
    return (
        <footer className="site-footer">
            <div className="footer-art">
                <img src={footerPic} alt="" className="footer-painting"/>
                <div className="footer-art-fade"></div>
            </div>
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-logo brand">Bookreads
                        {/* <div className="bookmarkImg">
                            <img className="bookmark" src={bookmark}></img>

                        </div>
                        <Link to='/' className="navbar-brand fw-bold text-dark">{props.title}</Link>  */}


                    </div>
                    <p className="footer-tagline">Your next great read is one search away!</p>
                    <div className="footer-social">
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-pinterest"></i></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h6>Explore</h6>
                        <a href="#">Home</a>
                        <a href="#">Browse</a>
                        <a href="#">My Books</a>
                        <a href="#">Community</a>
                    </div>
                    <div className="footer-col">
                        <h6>Company</h6>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">Press</a>
                    </div>
                    <div className="footer-col">
                        <h6>Support</h6>
                        <a href="#">Help Center</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Bookreads. All rights reserved.</p>
                <p>created by maria.</p>
            </div>
        </footer>
    );
}