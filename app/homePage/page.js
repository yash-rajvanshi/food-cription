import React from 'react'
import Footer from '@/sections/Footer'
import LandingPage from '@/sections/LandingPage'
import Welcome from '@/sections/Welcome'
import Why from '@/sections/Why'
import How from '@/sections/How'
import Crave from '@/sections/Crave'
const HomePage = () => {
  return (
    <div>
      <LandingPage/>
      <Welcome/>
      <How/>
      <Crave/>
      <Why/>
      <Footer/>
    </div>
  )
}

export default HomePage
