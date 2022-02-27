import React from 'react';
import NavBar from './components/NavBar';
import '../src/styles/App.css'
import '../src/styles/app_layout.scss'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import '../src/styles/_vibrant.scss'
import Accomplishments from './Pages/Accomplishments';

import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'



export default function App() {
  const [navToggle, setNavToggle] = useState(true);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <div className='App'>
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content"> 
          <Routes>
              <Route path="/" element={<HomePage/>}>
              </Route>
              <Route path="/home" element={<HomePage/>}>
              </Route>
              <Route path="/about" element={<AboutPage/>}>
              </Route>
              <Route path="/portfolios" element={<PortfolioPage/>}>
              </Route>
              <Route path="/blogs" element={<BlogsPage/>}>
              </Route>
              <Route path="/contact" element={<ContactPage/>}>
              </Route>
              <Route path="/awards" element={<Accomplishments/>}>
              </Route>
              
          </Routes>
          </div>
      </div>
    </div>
  )
}

