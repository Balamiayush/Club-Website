import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
const Navbar = ({products, whitepaper}) => {

  
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      console.log(window.scrollY)
      if(window.scrollY > 10){
        document.querySelector(".navright").classList.add("bg-black")
      }else{
        document.querySelector(".navright").classList.remove("bg-black")
      }
    })
  },[])
  const [position, setPosition] = useState({ left: 0, width: 0, height: 0, opacity: 0 });
  const [activeIndex, setActiveIndex] = useState(null);
  const navRef = useRef(null);

  const handleMouseEnter = useCallback((e, index) => {
    if (!navRef.current) return;
    const { left, width } = e.target.getBoundingClientRect();
    const navLeft = navRef.current.getBoundingClientRect().left;

    setPosition({ left: left - navLeft, width, height: e.target.clientHeight });
    setActiveIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveIndex(null);
    setPosition({ left: 0, width: 0, height: 0, opacity: 0 });
  }, []);

  return (
    <nav className="w-full  h-20 p-2 lg:px-10 navright transition-all duration-300  z-50  flex justify-between items-center ">
      {/* Left Section */}
      <div className="flex items-center ">
        <h1>Hello!</h1>
      </div>

      <div ref={navRef} className="relative flex items-center   z-10">
        {["Home", "About", "Mission", "Values", "Contact"].map((item, index) => (
          <a
            key={index}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseLeave={handleMouseLeave}
            className={`text-[0.7rem] px-3 py-2 lg:px-5
            font-[Roobert2]
              relative rounded-full transition-all duration-300 ${
              activeIndex === index ? "text-white" : "text-black"
            }`}
            href="#"
          >
            {item}
          </a>
        ))}
      
    
        <motion.div
          animate={position}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute z-[-1] top-1/2 -translate-y-1/2  rounded-[25px] bg-[#000]"
        />
      </div>
      
    </nav>
  );
};

export default Navbar;