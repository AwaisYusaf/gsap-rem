"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { data } from "@/constants/data";


type Props = {};

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimationSection({}: Props) {
  const [activeSection, setActiveSection] = useState(1);
  const [activeSectionData,setActiveSectionData] = useState<any>({});


  useEffect(() => {
    gsap.to("#right", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom 80%",
      },
      position: "sticky",
      top: "0",
    });

    gsap.to("#left-p1", {
      scrollTrigger: {
        trigger: "#left-p1",
        start: "-20% 40%",
        end: "120% 50%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 1,
      scrollBehavior: "smooth",
      onStart: () => {
        setActiveSection(1);
      },
    });

    gsap.to("#left-p2", {
      scrollTrigger: {
        trigger: "#left-p2",
        start: "-20% 40%",
        end: "120% 50%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 1,
      scrollBehavior: "smooth",
      onStart: () => {
        setActiveSection(2);
      },
    });

    gsap.to("#left-p3", {
      scrollTrigger: {
        trigger: "#left-p3",

        start: "-30% 40%",
        end: "150% 50%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 1,
      scrollBehavior: "smooth",
      onStart: () => {
        setActiveSection(3);
      },
      
    });
  }, []);

  useEffect(() => {
    setActiveSectionData(data[activeSection-1]);
  }, [activeSection]);

  return (
    <div
      id="container"
      className="flex mx-auto max-w-6xl space-x-12 lg:min-h-[200vh] min-h-[150vh]"
    >
        {/* {Left Section} */}
      <div className="basis-1/2 lg:px-8 md:px-4 px-2 flex flex-col mt-24 space-y-6" id="left">
        <div className="h-20" />
        {data.map((section,index)=>{
            return <div key={index} id={section.id} className="lg:w-[80%] w-full opacity-20 ">
            <h2 className="lg:text-xl text-base font-semibold">{section.heading}</h2>
            <p className="lg:text-base md:text-sm text-xs text-gray-500">{section.content}</p>
          </div>
          
        })}
      </div>
      {/* {Right Section} */}
      <div
        className="flex md:flex-row flex-col justify-center items-center basis-1/2 lg:space-x-4 space-x-2 h-screen  w-full"
        id="right"
      >
        <div className="relative overflow-hidden">
          <h2 className="text-center mb-4 font-semibold">OSO</h2>
          <Image
            src="/assets/phone1.png "
            className="w-60 h-auto"
            width={400}
            height={800}
            alt="phone"
          />
          <span className="absolute top-[50%] w-full text-center font-bold lg:text-xl md:text-lg text-base mx-auto">
            {activeSectionData?.heading}
          </span>
        </div>
        <div className="relative overflow-hidden">
          <h2 className="text-center mb-4 font-semibold">ChatGPT</h2>
          <Image
            src="/assets/phone2.png"
            className="w-60 h-auto"
            width={400}
            height={800}
            alt="phone"
          />
          <span className="absolute lg:h-fit h-60 lg:top-[40%] md:top-[30%] top-[25%] lg:px-12 md:px-6 px-3 lg:text-sm text-xs">
          {activeSectionData?.content}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ScrollAnimationSection;
