import React from 'react'
import Footer from '@/sections/Footer'
import LandingPage from '@/sections/LandingPage'
import Welcome from '@/sections/Welcome'
import Why from '@/sections/Why'
const HomePage = () => {
  return (
    <div>
      <LandingPage/>
      <Welcome/>
      <Why/>
      <Footer/>
    </div>
  )
}

export default HomePage
