import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../src/styles/app_layout.scss'
import '../src/styles/_vibrant.scss'
import '../src/styles/nova.scss'
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

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<AllBlogsPage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/socials" element={<LinkTree />} />
      </Routes>
    </div>
  )
}

