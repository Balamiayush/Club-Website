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
                <img className='w-full h-full object-cover' src="https://scontent.fmey1-1.fna.fbcdn.net/v/t39.30808-6/476284638_122133411470534129_2169891444524222368_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0MhHfJS2iksQ7kNvgHTjdQ-&_nc_oc=Adja2_7roJYjW2jeu1DVpFyhGsK18roC5cH3JZWHs-VRGMb05aSkEQkLa_7Oc55VJXE&_nc_zt=23&_nc_ht=scontent.fmey1-1.fna&_nc_gid=AI5h3sGFYinVt3POqNpZTl2&oh=00_AYG_xYIh41nkJLGyktbMcJkQxUdl22JpUpaWS0y5Bgj1HQ&oe=67D98F1C" alt="" />
            </div>
        </div>
    );
}

export default Hero