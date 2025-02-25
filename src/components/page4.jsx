import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Page4 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      x: "-100%", // Moves fully across the container
      duration: 10,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".page4",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        pin: true,
        markers: true, 
      }
    });
  }, []);

  return (
    <div className="w-full h-screen page4 flex items-center justify-center overflow-hidden relative">
      <div className="w-[200%] flex justify-center"> 
        {/* Wider container for smooth scrolling */}
        <h1 
          ref={textRef} 
          className="text-[1rem] lg:text-[10rem] font-semibold leading-none whitespace-nowrap text-center"
        >
          <span className="text-[#A071FF] rounded-2xl p-2">Join</span> us on a journey of innovation, collaboration, and growth
        </h1>
      </div>
    </div>
  );
};

export default Page4;
    