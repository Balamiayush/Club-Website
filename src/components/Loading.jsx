import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loading = ({ setLoading }) => {
  const [text, setText] = useState([
    ". नमस्ते",
    ".hello",
    ".Hola",
    ".Bonjour",
    ".Hallo",
    ".Ciao",
    ".Olá",
    ".ज्वजलपा",
  ]);
  const [currentText, setCurrentText] = useState(0);
  const [completedCycles, setCompletedCycles] = useState(0);

  // Function to disable all scrolling
  const disableScroll = () => {
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    // Lock the scroll position
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.width = '100%';
    
    // Prevent touchmove events
    document.addEventListener('touchmove', preventDefault, { passive: false });
    // Prevent wheel events
    document.addEventListener('wheel', preventDefault, { passive: false });
  }
  
  // Function to prevent default for events
  const preventDefault = (e) => {
    e.preventDefault();
  }

  // Function to re-enable scrolling
  const enableScroll = () => {
    // Get the current scroll position from body's top property
    const scrollY = document.body.style.top ? parseInt(document.body.style.top || '0') * -1 : 0;
    
    // Reset body styles
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // Restore scroll position
    window.scrollTo(0, scrollY);
    
    // Remove event listeners
    document.removeEventListener('touchmove', preventDefault);
    document.removeEventListener('wheel', preventDefault);
  }

  useEffect(() => {
    // Disable all scrolling
    disableScroll();
    
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const nextIndex = (prevText + 1) % text.length;
        if (nextIndex === 0) {
          setCompletedCycles((prev) => prev + 1);
        }
        return nextIndex;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      // Re-enable scrolling when component unmounts
      enableScroll();
    };
  }, []);

  useGSAP(() => {
    if (completedCycles >= 1) {
      gsap.to(".loading", {
        top: "-100%",
        borderRadius: "20%",
        duration: 1,
        ease: "power1.out",
        onComplete: () => {
          // Re-enable scrolling after animation completes
          enableScroll();
          
          // Remove the element from DOM after animation
          const loadingElement = document.querySelector(".loading");
          if (loadingElement) {
            loadingElement.style.display = "none";
          }
        }
      });
    }
  }, [completedCycles]); 

  return (
    <div onClick={()=>setLoading(false)}     className="w-full loading fixed bg-white top-0 left-0 z-[100] h-screen flex items-center justify-center scroll-none">
      <div className="text-[2rem] lg:text-[4rem] font-semibold leading-none">
        {text[currentText]}
      </div>
    </div>
  );
};

export default Loading;