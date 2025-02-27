import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const HScroll = () => {

  gsap.registerPlugin(ScrollTrigger);
  

  const containerRef = useRef(null);
  const racesRef = useRef(null);
  
  const getScrollAmount = () => {
    
    if (!racesRef.current) return 0;
    
    const racesWidth = racesRef.current.scrollWidth;
    return -(racesWidth - window.innerWidth);
  };
  
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tween = gsap.to(racesRef.current, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });
      
 
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top", 
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        pinSpacing: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    });
  
    return () => ctx.revert();
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="racesWrapper w-full h-screen flex items-center justify-start overflow-hidden relative"
      style={{ position: 'relative' }} // Ensure the container is positioned
    >
      <div 
        ref={racesRef}
        className="races flex"
      >
        <div className="flex items-center text-white capitalize">
          <div className="text-[6rem] sm:text-[3rem] md:text-[5rem] lg:text-[10rem] font-semibold  whitespace-nowrap">
            <span className="text-[#A071FF] rounded-2xl px-4 py-2 mx-4 transition-all duration-300 hover:bg-[#f0eaff] inline-block">Join</span> 
            <span>us on a journey of innovation, collaboration, and growth</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HScroll;