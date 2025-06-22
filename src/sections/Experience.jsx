import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)





const Experience = () => {

  useGSAP(() => {

    gsap.utils.toArray('.-expText').forEach((text) => {

      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut'
        , scrollTrigger: {
          trigger: text,
        }
      })
    })
    gsap.to('.timeline', {
      transformOrigin: 'bottome bottom'
      , ease: 'power2.inOut'
      , scrollTrigger: {
        trigger: '.timeline'
        , start: 'top 60%',
        end: '70% center',
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          })
        }
      }
    })



  }, [])




  return (
    <section id="experience" className='w-fll md:mt-40 mt-10 section-padding xl:px-0'>
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional work Experience "
          sub="💼 My Career Overview"
        />
        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>



            {expCards.map((card, index) => (
              <div key={card.title} className='exp-card-wrapper'>
                <div className='xl:w-2/6'>
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </GlowCard>

                </div>



                <div className='xl:w-4/6'>
                  <div className='flex items-start'>
                    <div className='timeline-wrapper'>
                      <div className='timeline' />
                      <div className='gradient-line w-1 h-full' />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className='font-semibold text-3xl'>{card.title} </h1>
                        <p className='my-5 text-white-50 '>
                          📅{card.date}

                        </p>
                        <p className='text-[#839cb5] italic'>
                          responsibilities
                        </p>
                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                          {card.responsibilities.map((responsibility, i) => (
                            <li key={i} className='text-lg'>
                              {responsibility}

                            </li>

                          )

                          )}
                        </ul>
                      </div>
                    </div>

                  </div>

                </div>


              </div>
            ))}

          </div>

        </div>




      </div>



    </section>
  )
}

export default Experience