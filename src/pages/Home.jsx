import React from 'react'
import Announsment from '../components/Announsment'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Catogories from '../components/Catogories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'






const Home = () => {
  return (
    <div>
      <Announsment/>
      <NavBar/>
      <Slider/>
      <Catogories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default Home