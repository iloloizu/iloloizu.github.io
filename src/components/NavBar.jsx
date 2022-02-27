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
            <ul className='nav-items'>
                <li className="nav-item">
                    <NavLink to="/home" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/awards" exact activeClassName="awards">
                    Awards
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" exact activeClassName="active">
                        Portfolio
                    </NavLink>
                </li>    
                <li className="nav-item">
                    <NavLink to="/blogs" exact activeClassName="active">
                        Blogs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active">
                        Contact
                    </NavLink>
                </li>

            </ul>
            <footer className="footer">
            <button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</button><br/>
                <p>©2022 Ilolo Izu</p>
            </footer>
        </nav>
    </div>
  )
}

export default NavBar;