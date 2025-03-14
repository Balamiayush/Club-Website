import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
    const headings = [
        " Inspire",
        " Innovate",
        " Impact"
    ];
    
    const headingRef = useRef(null);
    const charRefs = useRef([]);
    
 
    const renderCharacters = (text) => {
        return text.split("").map((char, index) => (
            <motion.span 
                key={index}
                ref={el => charRefs.current[index] = el}
                className="inline-block" 
            >
                {char}
            </motion.span>
        ));
    };
    
    useGSAP(() => {
        if (!headingRef.current) return;
     
        gsap.killTweensOf(charRefs.current);
        
   
        gsap.set(charRefs.current, {
            y: 50,
            opacity: 0
        });
        
        
        gsap.to(charRefs.current, {
            duration: 0.6,
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(1.7)",
            delay: 0.2
        });
    }, [currentHeadingIndex]);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadingIndex(prev => (prev + 1) % headings.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full px-4'>
            <Navbar/>
            <div className="hero-content flex lg:mt-5 flex-col justify-center w-full items-center lg:justify-between lg:flex-row">
                <h1 className='font-bold text-[3rem] lg:text-[5rem] flex items-center gap-2'>
                    <span className='text-[#A071FF] bg-[#EEE8FA] rounded-2xl p-2 '>We</span>
                    <motion.span 
                        ref={headingRef}
                        className='rounded-2xl p-2 inline-block overflow-hidden '
                    >
                        {renderCharacters(headings[currentHeadingIndex])}
                    </motion.span>
                </h1>
                <div className="btns flex gap-2 mt-2 lg:mt-0">
                    {["Facebook", "Instagram", "LinkedIn", "GitHub"].map((platform) => (
                        <Button key={platform} text={platform} />
                    ))}
                </div>
            </div>
            <div className="img w-full h-[50vh] lg:h-[90vh] mt-4">
                <img className='w-full h-full object-cover' src="https://github.com/Balamiayush/Club-Website.git" alt="" />
            </div>
        </div>
    );
}

export default Hero