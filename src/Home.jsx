import React from 'react'
import Announsment from './components/Announsment'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import Catogories from './components/Catogories'
import Products from './components/Products'






const Home = () => {
  return (
    <div>
      <Announsment/>
      <NavBar/>
      <Slider/>
      <Catogories/>
      <Products/>
    </div>
  )
}

export default Home