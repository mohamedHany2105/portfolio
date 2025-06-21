import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { expCards } from '../constants'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)


const ShowcaseSection = () => {



    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)


    const projects = [
        project1Ref.current, project2Ref.current, project3Ref.current
    ]
    useGSAP(() => {
        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 })
    }, [])
    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity: 0
            }, {
            y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1)
            , scrollTrigger: {
                trigger: card, start: 'top bottom-=100'
            }
        }
        )
    })




    return (
        <section ref={sectionRef} id='work' className='app-showcase'>
            <div className='w-full'>

                <div className='showcaselayout'>

                    {/* LEFT */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="../../public/images/project1.png" alt="Ryde" />


                        </div>
                        <div className='text-content'>
                            <h2> ON- Demand Rides maed simple With a powerful,user-friendly app called Ryde</h2>
                            <p className='text-white-50 md:text-xl'>
                                An app built with React Native,Expo, &
                                Tailwindcssnfor a fast,user-friendly experience
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='imgae-wrapper bg-[#ffefdb] rounded-lg '>
                                <img src="../../public/images/project2.png" alt="liberary management platform" />
                            </div>
                            <h2>
                                Library Management platform
                            </h2>
                        </div>
                        <div className='project' ref={project3Ref}>
                            <div className='imgae-wrapper bg-[#ffe7eb]  rounded-lg'>
                                <img src="../../public/images/project3.png" alt="directory" />
                            </div>
                            <h2>
                                Startup Showcase
                            </h2>
                        </div>
                    </div>


                </div>

            </div>

        </section>
    )
}

export default ShowcaseSection