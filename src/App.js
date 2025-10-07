import React from 'react';
import '../src/styles/App.css'
import '../src/styles/app_layout.scss'
import '../src/styles/_vibrant.scss'
import Layout from './layout/Layout'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Writing from './sections/Writing'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className='App'>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
      </Layout>
    </div>
  )
}

