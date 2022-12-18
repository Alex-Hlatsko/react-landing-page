import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Footer from '../../Components/Footer/Footer'
import StoreSection from '../../Components/StoreSection/StoreSection'
import Products from '../../Components/Products/Products'

const Store = () => {
  return (
    <>
      <Navigation />
      <StoreSection/>
      <Products />
      <Footer />
    </>
  )
}

export default Store