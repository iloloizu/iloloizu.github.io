import React from 'react';
import avatar from '../images/avatar.jpeg'
import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss'
import {useState} from "react"


function NavBar() {
    const [isClicked, setIsClicked] = useState(false)

    function myFunction() {
      let element = document.body;
     
      element.classList.toggle("dark");
    
      setIsClicked(isClicked => !isClicked);
    }

  return (
    <div className="NavBar">
        <nav className="nav">
        <div className="profile">
            <img src={avatar} alt="Ilolo Izu"/><br/>
        </div>
            <ol className='nav-items'>
                <li className="nav-item">
                    <NavLink to="/home">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/experience">
                        Experience
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/awards">
                    Awards
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios">
                        Portfolio
                    </NavLink>
                </li>    
                <li className="nav-item">
                    <NavLink to="/blogs">
                        Blogs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
                
            </ol>
            <footer className="footer">
            <button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</button><br/>
                <p>©2022 Ilolo Izu</p>
            </footer>
        </nav>
    </div>
  )
}

export default NavBar;