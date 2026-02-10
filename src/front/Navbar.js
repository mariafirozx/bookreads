import react from "react";
import {useState, useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import bookmark from '../assets/imgs/bookmark.png';
import dummyavatar from '../assets/imgs/dummy-avatar.jpg';
import dummyavatar2 from '../assets/imgs/dummy-avatar2.png';



export default function Navbar(props){
    const [OpenDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) =>{
        setOpenDropdown(drop => (drop === name ? null : name))
    }
    

    return(
        <>
        <div className="navContainer">
            <nav className="navbar navbar-expand-lg sticky-top navbar-light ">
                <div className="container-fluid">

                    <div className="brand">

                        <div className="bookmarkImg">
                            <img className="bookmark" src={bookmark}></img>

                        </div>
                        <Link to='home/' className="navbar-brand fw-bold text-dark">{props.title}</Link>
                    </div>

                        <div className="nav-list">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                                <li className="nav-item">
                                    <a className="Home active">Home</a>

                                </li>
                                <li className="nav-item">
                                    <a className="myBooks">My Books</a>
                                </li>
                                <li className="nav-item dropdown" onClick={ () => toggleDropdown('browse')}>
                                    <a className={` dropdown-toggle Browse ${OpenDropdown === "browse"? "activeDrop" : ''}`} href="#">Browse</a>

                                    {OpenDropdown === 'browse' && (

                                        <ul className="list dropdown-menu show ">
                                            <h4 className="favGenreTitle">Favorite Genres</h4>
                                            <li><a className="dropdown-item" href="#">Fantasy</a></li>
                                            <li><a className="dropdown-item" href="#">Fiction</a></li>
                                            <li><a className="dropdown-item" href="#">Gay and Lesbian</a></li>
                                            <li><a className="dropdown-item" href="#">Horror</a></li>
                                            <li><a className="dropdown-item" href="#">Romance</a></li>
                                            <li><a className="dropdown-item" href="#">Thriller</a></li>

                                        </ul>

                                    )}
                                </li>
                                
                                <li className="nav-item">
                                    <a className="Community">Community</a>
                                </li>
                            </ul>
                        </div>
                     <form className="search d-flex">
                        <i className="search-Icon bi bi-search"></i>
                        <input className="search-field form-control me-2" type="search" placeholder="Search for books" aria-label="Search">
                        </input>
                        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                    </form>


                    <div className="user-container">

                        <div className="user-notif">
                            <i class="notifIcon bi bi-bell-fill"></i>
                        </div>

                        <div className="user dropdown">
                            <div className={`userPro-wrapper ${OpenDropdown === "profile" ? "active": ""}`}>
                                <img className= "userPro rounded-circle" src={dummyavatar2} onClick={ () => toggleDropdown('profile')}></img>
                            </div>

                            {OpenDropdown === 'profile' && (
                                <ul className= "user-list dropdown-menu show">

                                    <h4 className="user-name">Hey, zahra</h4>
                                    <li><a className="dropdown-item"href="#profile">Profile</a></li>
                                    <li><a className="dropdown-item"href="#friends">Friends</a></li>
                                    <li><a className="dropdown-item"href="#comments">Comments</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item"href="#AccountSettings">Account Settings</a></li>
                                    <li><a className="dropdown-item"href="#signout">Sign Out</a></li>

                                </ul>

                            )}

                        </div>

                    </div>


                </div>

            </nav>
        </div>
        </>
    )
}
