import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'

const Home = () => {
  return (
   <>
    <Navbar />
    <Category />
    <FoodItems />
    <Cart />
   </>
  )
}

export default Home