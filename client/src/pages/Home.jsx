import React from 'react'
import Announsment from '../components/Announsment'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Catogories from '../components/Catogories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'






const Home = () => {
  return (
    <div>
      <NavBar/>
      <Announsment/>
      <Slider/>
      <Catogories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home