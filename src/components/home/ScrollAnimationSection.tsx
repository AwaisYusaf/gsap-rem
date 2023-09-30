"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { data } from "@/constants/data";

type Props = {};


gsap.registerPlugin(ScrollTrigger);

function ScrollAnimationSection({ }: Props) {
  const [activeSection, setActiveSection] = useState(1);
  const [activeSectionData, setActiveSectionData] = useState<any>({});


  useEffect(() => {
    gsap.to("#right", {
      scrollTrigger: {
        trigger: "#root",
        start: "top top",
        end: "bottom 80%",
      },
      position: "sticky",
      top: "0",
    });

    gsap.to("#left-p1", {
      scrollTrigger: {
        trigger: "#left-p1",
        start: "-20% 30%",
        end: "120% 35%",
        toggleActions: "play reverse play reverse",
        // markers: true,
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
        start: "-20% 30%",
        end: "110% 35%",
        toggleActions: "play reverse play reverse",
        // markers: true,
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
        start: "-20% 30%",
        end: "150% 35%",
        // markers: true,
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
    setActiveSectionData(data[activeSection - 1]);
  }, [activeSection]);

  return (
    <div
      id="container"
      className="flex mx-auto max-w-7xl space-x-12  lg:px-8 md:px-6 px-4"
    >
      {/* {Left Section} */}
      <div className="basis-1/2 flex flex-col space-y-6 snap-y snap-mandatory min-h-[140vh] z-0 overflow-x-hidden md:mb-0 mb-16" id="left">
        <div className="xl:h-52 lg:h-40 md:h-40 h-20" />
        {data.map((section, index) => {
          return <div key={index} id={section.id} className="lg:w-[80%] w-full flex flex-col space-y-2 opacity-20 snap-center snap-always shrink-0 ">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold">{section.heading}</h2>
            <p className="lg:text-2xl md:text-xl text-lg text-[#637381] font-light">{section.content}</p>
          </div>

        })}
      </div>
      {/* {Right Section} */}
      <div
        className="flex md:flex-row -mt-20 flex-col md:space-y-0 space-y-3 justify-center items-center basis-1/2 lg:space-x-4 space-x-2 h-screen w-full"
        id="right"
      >
        <div className="relative overflow-hidden">
          <h2 className="text-center md:mb-4 mb-2 font-semibold md:text-xl text-lg">OSO</h2>
          <Image
            src="/assets/phone1.png"
            className="h-auto"
            width={400}
            height={800}
            alt="phone"
          />
          <span className="absolute top-[50%] w-full text-center font-bold lg:text-xl md:text-lg text-base mx-auto">
            {activeSectionData?.heading}
          </span>
        </div>
        <div className="relative overflow-hidden">
          <h2 className="text-center md:mb-4 mb-2 font-semibold md:text-xl text-lg">ChatGPT</h2>
          <Image
            src="/assets/phone2.png"
            className="h-auto"
            width={400}
            height={800}
            alt="phone2"
          />
          <span className="absolute lg:h-fit h-60 lg:top-[40%] md:top-[30%] top-[25%] lg:px-12 px-6 text-sm ">
            {activeSectionData?.content}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ScrollAnimationSection;
