// import React from 'react'
import HeroExperience from '../components/HeroExperience.jsx'
import { words } from "../constants/index.js"
import Button from "../components/Button.jsx"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import AnimatedCounter from "../components/AnimatedCounter";





const Hero=()=>{
  useGSAP(()=>{
    gsap.fromTo('.hero-text h1',{
      y:50,
      opacity:0,
    },{
      y:0,
      opacity:1,
      stagger:0.2,
      duration:5,
      ease:'power2.inOut'

    })
    
  })

  return (
    <section id="hero" className='relative overflow-hidden'>
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className='hero-layout'>
        {/* left:hero */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shiping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>  that Delfiver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Hi , i'm Mohamed Hany

            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12 "
              id="counter"
              text="See my work"
            />
          </div>
        </header>
        {/* right:3d */}

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>

      </div>


<AnimatedCounter/>
    </section>

  )
}

export default Hero