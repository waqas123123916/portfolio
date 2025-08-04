import React from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { socials } from '../constants'
import Marquee from '../components/Marquee'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Contact = () => {
    const items=[
        "just imagin, I code",
        "just imagin, I code",
        "just imagin, I code",
        "just imagin, I code",
        "just imagin, I code",
        "just imagin, I code",
    ]
    const text = `Got a question , how or project Idea ?`

    useGSAP(()=>{
        gsap.from(".social-link",{
            y:100,
            opacity:0,
            delay:0.5,
            duration:1,
            stagger:0.3,
            ease:"back.out",
            scrollTrigger:{
                trigger:"social-link",
            },
        })
    },[])
  return (
    <section id="contact" className="flex flex-col justify-between min-h-screen bg-[#2A3B4C] ">
        <div>
            <AnimatedHeaderSection
            subTitle={"You Dream It, I Code it"}
            title={'Contact'}
            text={text}
            textColor={"text-white"}
            withScrollTrigger={true}
            />
            <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
                <div className='flex flex-col w-full gap-10'>
                    <div className='social-link'>
                        <h2>E-Mail</h2>
                        <div className='w-full h-px my-2 bg-white/30' />
                        <p className='text-xl tracking-wider lowercase md:text-2xl lg:text-3xl'>
                            wm635980@gmail.com
                        </p>
                    </div>
                        <div className='social-link'>
                        <h2>Phone</h2>
                        <div className='w-full h-px my-2 bg-white/30' />
                        <p className='text-xl  lowercase md:text-2xl lg:text-3xl'>
                           +92 325 6056044
                        </p>
                    </div>
                        <div className='social-link'>
                        <h2>Social Media</h2>
                        <div className='w-full h-px my-2 bg-white/30' />
                        <p className='flex flex-wrap gap-2'>
                            {
                                socials.map((social,index)=>(
                                    <a href={social.href} key={index} className='text-xs leading-loose tracking-wider uppercase md:text-sm hover:text-white/80 transition-colors duration-200 '>
                                        {"{"}
                                        {social.name}
                                        {"}"}
                                    </a>
                                ))
                            }
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <Marquee items={items} className='text-white bg-transparent'  />
    </section>
  )
}

export default Contact