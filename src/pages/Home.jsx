import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Rooms from '../components/sections/Rooms'
import Services from '../components/sections/Services'
import Experiences from '../components/sections/Experiences'
import Gallery from '../components/sections/Gallery'
import Location from '../components/sections/Location'
import Contact from '../components/sections/Contact'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Experiences />
      <Gallery />
      <Location />
      <Contact />
    </div>
  )
}

export default Home