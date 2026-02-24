import React from 'react'
import Home from '../Home'
import Hero from './Hero'
import Service from "./Services"
import MemberLayout from './MemberLayout'
import Contact from './Contact'

const HomePage = () => {
  return (
   <>
   <Home/>
   <Hero/>
   <Service/>
   <MemberLayout/>
   <Contact/>
   </>
  )
}

export default HomePage