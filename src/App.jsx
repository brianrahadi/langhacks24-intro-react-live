import { useState } from 'react'

import './App.css'
import './default.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import GuestbookSection from './components/GuestbookSection'


function App() {
  return (
    <>
      <Header/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <GuestbookSection/>
      </main>
    </>
  )
}

export default App
