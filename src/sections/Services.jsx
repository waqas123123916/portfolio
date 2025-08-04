import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { div } from "three/tsl";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  const text = `I build secure, hight - performance full-stack apps with smonth UX to drive growth not headaches.`;
  const serviceRef = useRef([])
  const isDesktop = useMediaQuery({minWidth:'768px'})

  useGSAP(()=>{
    serviceRef.current.forEach((el)=>{
        if(!el) return;
        gsap.from(el,{
            y:200,
            scrollTrigger:{
              trigger:el,
              start:'top 80%'
            },
            duration:1,
            ease:'circ.out'
        })
    })
  })
  return (
    <section id="services" className="min-h-screen bg-[#2A3B4C] rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene , Beyond the screen"}
        title={"Waqas Mehmood"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {
        servicesData.map((service,index)=>(
            <div  
            ref={(el)=>(serviceRef.current[index]=el)}
            key={index}
            className="sticky px-10 pt-6 pb-12 text-white bg-[#2A3B4C] border-t-2 border-[#5A8A8D]/50 top-0"
              style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
            >
                <div className="flex items-center justify-between gap-4 font-light">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl" >{service.title}</h2>
                        <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty ">{service.description} </p>
                        <div className="flex flex-col gap2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                        {
                            service.items.map((item,ItemIndex)=>(
                            <div key={`item-${index}-${ItemIndex}`}>
                                    <h3 className="flex">
                                    <span className="mr-12">
                                        0{ItemIndex + 1}
                                    </span>
                                    {item.title}
                                </h3>
                                {
                                    ItemIndex < service.items.length -1 && (
                                        <div className="w-full h-px my-2 bg-[#5A8A8D]/60" />
                                            
                                    )
                                }
                                </div>
                            ))
                        }</div>
                    </div>
                </div>
            </div>
        ))
      }
    </section>
  );
};

export default Services;
