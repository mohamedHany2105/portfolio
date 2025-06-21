import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
const App = () => {
  return (
  <>
  <Navbar/>
  <Hero/>
  <ShowcaseSection/>
  <LogoShowcase/>
  <FeatureCards/>
  
  </>
  )
}

export default App