import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import '../src/styles/app_layout.scss'
import '../src/styles/_vibrant.scss'
import '../src/styles/nova.scss'
import '../src/styles/editorial.scss'
import '../src/styles/_all-blogs.scss'
import '../src/styles/_all-projects.scss'
import '../src/styles/_contact.scss'
import Layout from './layout/Layout'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Blogs from './sections/Blogs'
import Contact from './sections/Contact'
import AllBlogsPage from './Pages/AllBlogsPage'
import AllProjectsPage from './Pages/AllProjectsPage'
import LinkTree from './Pages/LinkTree'
import PhotographyPage from './Pages/PhotographyPage'
import VideosPage from './Pages/VideosPage'
import EditorialHome from './Pages/EditorialHome'
import EditorialAbout from './Pages/EditorialAbout'

function HomePage() {
  return (
    <Layout>
      {/* <Hero /> */}
      <About />
      <Experience />
      <Projects />
      <Blogs />
      <Contact />
    </Layout>
  );
}

// The page scrolls inside .App, which keeps its position across route
// changes — reset to the top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.querySelector('.App')?.scrollTo(0, 0)
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className='App'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<EditorialHome />} />
        <Route path="/about" element={<EditorialAbout />} />
        <Route path="/classic" element={<HomePage />} />
        <Route path="/blogs" element={<AllBlogsPage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/socials" element={<LinkTree />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/portfolio" element={<PhotographyPage />} />
      </Routes>
    </div>
  )
}
