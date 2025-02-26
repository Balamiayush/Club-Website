import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loading = () => {
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
  useEffect(() => {
    
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