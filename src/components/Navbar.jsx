import React, { useRef, useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import { gsap } from "gsap"; 
import { useGSAP } from "@gsap/react"; 
 
const Navbar = () => { 
  const [heading, setHeading] = useState([ 
    "Hello!", 
    "MMC IT CLUB" 
  ]); 
  const [position, setPosition] = useState({ 
    left: 0, 
    width: 0, 
    height: 0, 
    opacity: 0, 
  });
  const [isOpen, setIsOpen] = useState(false);
   
  const navRef = useRef(null); 
  const headerRef = useRef(null); 
  const animationRef = useRef(null); 
  const menuItems = ["Home", "About", "Mission", "Values", "Contact"]; 

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => { 
    const interval = setInterval(() => { 
      setHeading(prev => [...prev.slice(1), prev[0]]); 
       
      if (headerRef.current) { 
        animateHeaderText(heading[1]);  
      } 
    }, 3000);  
     
    return () => clearInterval(interval); 
  }, [heading]); 
 
  const animateHeaderText = (newText) => { 
    const headerElement = headerRef.current; 
    if (!headerElement) return; 
     
    if (animationRef.current) { 
      animationRef.current.kill(); 
    } 
  
    const tl = gsap.timeline(); 
    animationRef.current = tl; 
     
    tl.to(headerElement, { 
      duration: 0.4, 
      y: -50, 
      opacity: 0, 
      ease: "power2.in", 
      onComplete: () => { 
        // Update the text 
        headerElement.textContent = newText; 
        // Reset position 
        gsap.set(headerElement, { y: 50 }); 
      } 
    }); 
     
    tl.to(headerElement, { 
      duration: 0.4, 
      y: 0, 
      opacity: 1, 
      ease: "power2.out" 
    }); 
  }; 
 
  const handleMouseEnter = (e) => { 
    if (!navRef.current) return; 
    const { left, width, height } = e.target.getBoundingClientRect(); 
    const navLeft = navRef.current.getBoundingClientRect().left; 
     
    setPosition({ left: left - navLeft, width, height, opacity: 1 }); 
  }; 

  const handleMouseLeave = () => { 
    setPosition((prev) => ({ ...prev, left: 0, width: 0, height: 0, opacity: 0 })); 
  }; 
  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (custom) => {
      if (custom === 1) return { rotate: 45, y: 12 };
      if (custom === 3) return { rotate: -45, y: -12 };
      return { opacity: 0 };
    }
  };

 
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    closed: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 } 
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 24
      } 
    }
  };
 
  return ( 
    <>
      <nav className="w-full h-20 flex justify-between items-center transition-all duration-300 z-50  "> 
        <div className="flex items-center overflow-hidden h-16 "> 
          <motion.a 
            href="/" 
            ref={headerRef} 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{duration:1}} 
            style={{ fontFamily: 'gilroyBold' }}  
            className="text-[1.5rem] heading lg:text-[2.5rem] cursor-pointer font-bold" 
          > 
            {heading[0+1]} 
          </motion.a> 
        </div> 
         
        {/* Desktop Navigation */}
        <div ref={navRef} className="relative items-center bg-[#EEE8FA] hidden lg:flex rounded-full h-10 px-2 z-10"> 
          {menuItems.map((item, index) => ( 
            <motion.a 
              key={index} 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
              onFocus={handleMouseEnter} 
              onBlur={handleMouseLeave} 
              className="text-[0.7rem] a lg:text-[1rem] px-3 lg:px-5 py-2 relative rounded-full transition-all duration-300 text-black hover:text-white" 
              href="#" 
            > 
              {item} 
            </motion.a> 
          ))} 
           
          <motion.div 
            initial={{opacity:0}} 
            animate={position} 
            transition={{ type: "spring", stiffness: 200, damping: 20 }} 
            className="absolute z-[-1] top-1/2 -translate-y-1/2 rounded-[25px] bg-black" 
          /> 
        </div>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <motion.div 
          className="w-10 h-10  items-center justify-center flex flex-col gap-2  lg:hidden cursor-pointer z-50 "
          onClick={toggleMenu}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <motion.div 
            className="w-10 h-1 bg-black rounded-full "
            variants={lineVariants}
            custom={1}
          />
          <motion.div 
            className="w-10 h-1 bg-black rounded-full "
            variants={lineVariants}
            custom={2}
          />
          <motion.div 
            className="w-10 h-1 bg-black rounded-full"
            variants={lineVariants}
            custom={3}
          />
        </motion.div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed top-20 left-0 right-0 bg-white shadow-lg z-10 overflow-hidden lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div className="flex flex-col py-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="px-8 py-4 text-[2rem] font-medium border-b border-gray-900  hover:bg-[#EEE8FA] hover:text-black transition-colors"
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ 
                    scale: 1.03, 
                    x: 10, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  ); 
}; 
 
export default Navbar;