import React from 'react'
import Navigation from '../Components/Navigation/Navigation'
import HomeSection from '../Components/HomeSection//HomeSection'
import Collections from '../Components/Collections/Collections'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navigation/>
      <HomeSection/>
      <Collections/>
      <Footer/>
    </>
  )
}

export default Home