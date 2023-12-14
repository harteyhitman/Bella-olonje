import React from 'react'
import './Global.scss'
import Navbar from './components/Navbar'
import FoodTray from './components/FoodTray'
import FoodForAll from './components/FoodForAll'
import HowAppWork from './components/HowAppWork'
import Getstarted from './components/Getstarted'
import Favourites from './components/Favourites'
import Delivery from './components/Delivery'
import Download from './components/Download'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <FoodTray />
      <FoodForAll />
      <HowAppWork />
      <Getstarted />
      <Favourites />
      <Delivery />
      <Download />
      <Footer />
    </div>
  )
}

export default App