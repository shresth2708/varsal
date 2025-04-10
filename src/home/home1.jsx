import React from 'react'
import Navbar from '../Components/navbar/navbar'
import Hero from './hero/hero'  
import Gallery from './gallery/gallery1.jsx'
import Story from './story/story'
import Footer from '../Components/footer/footer'
import Search from '../Components/search/search'


const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Search /> */}
      <Hero />
      <Gallery />
      <Story />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
