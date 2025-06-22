import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
const App = () => {
  return (
  <>
  <Navbar/>
  <Hero/>
  <ShowcaseSection/>
  <LogoShowcase/>
  <FeatureCards/>
  <Experience/>
  {/* <Contact/> */}
  <Footer/>
  
  </>
  )
}

export default App