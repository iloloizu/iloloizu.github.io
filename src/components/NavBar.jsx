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
                    <NavLink to="/home" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/experience" activeClassName="active">
                        Experience
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/awards" activeClassName="awards">
                    Awards
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active">
                        Portfolio
                    </NavLink>
                </li>    
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active">
                        Blogs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active">
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