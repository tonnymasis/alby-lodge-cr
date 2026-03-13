import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Rooms from '../components/sections/Rooms'
import Contact from '../components/sections/Contact'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Rooms />
      <Contact />
    </div>
  )
}

export default Home