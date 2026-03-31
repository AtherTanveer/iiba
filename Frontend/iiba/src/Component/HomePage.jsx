import React from 'react'
import Home from '../Home'
import Hero from './Hero'
import Service from "./Services"
import MemberLayout from './MemberLayout'
import Contact from './Contact'
import GoNews from '../NewsSection/GoNews'
import IIBAHighlight from './IIBAHighligh'
import IIBASlider from './IIBASlider'
import IIBAanimatSlide from './IIBAanimatSlide'
import IIBAProtectionSection from './IIBAProtectionSection'

const HomePage = () => {
  return (
   <>
   <Home/>
   <IIBAProtectionSection/>
   <Hero/>
    <IIBAHighlight/>
   <Service/>
   <MemberLayout/>
   <IIBASlider/>
   <Contact/>
   <GoNews/>
   <IIBAanimatSlide/>
   </>
  )
}

export default HomePage