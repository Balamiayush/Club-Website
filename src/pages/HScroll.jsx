import React, { useRef, useEffect, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const HScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef(null);
  const [scrollStart, setScrollStart] = useState("150% top"); 
  useEffect(() => {
 
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScrollStart("top top"); // Decrease value for mobile
      } else {
        setScrollStart("150% top"); // Normal value for larger screens
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to(textRef.current, {
      x: "-100%", 
      duration: 10,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".page4",
        start: scrollStart, 
        end: "bottom bottom",
        scrub: 10,
        pin: true,
      }
    });
  }, [scrollStart]); 

  return (
    <div className="w-full h-[50vh] lg:h-[80vh] page4 flex items-center justify-center overflow-hidden relative">
      <div className="w-[200%] flex justify-center relative"> 
    
        <div
          ref={textRef} 
          className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[10rem] absolute left-10 lg:left-100 font-semibold leading-none whitespace-nowrap text-center"
        >
          <span className="text-[#A071FF] rounded-2xl p-2">Join</span> us on a journey of innovation, collaboration, and growth
        </div>
      </div>
    </div>
  );
};

export default HScroll;
