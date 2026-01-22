import react from "react";
import {useState, useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import bookmark from '../assets/imgs/bookmark.png';




export default function Navbar(props){
    return(
        <>
        <div className="navContainer">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">

                    <div className="brand">

                        <div className="bookmarkImg">
                            <img className="bookmark" src={bookmark}></img>

                        </div>
                        <Link to='home/' className="navbar-brand fw-bold text-dark">{props.title}

                        
                        
                        </Link>
                    </div>


                     <form class="search d-flex">
                        <i class="search-Icon bi bi-search"></i>
                        <input class="search-field form-control me-2" type="search" placeholder="Search for books" aria-label="Search">
                        </input>
                        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                    </form>

                        <div className="nav-list">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                                <li className="nav-item">
                                    <a className="Home">Home</a>

                                </li>
                                <li className="nav-item">
                                    <a className="myBooks">My Books</a>
                                </li>

                                <li className="nav-item">
                                    <a className="Browse">Browse</a>
                                </li>
                                <li className="nav-item">
                                    <a className="Community">Community</a>
                                </li>
                            </ul>
                        </div>

                </div>

            </nav>
        </div>
        </>
    )
}
