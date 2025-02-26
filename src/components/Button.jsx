import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Button = ({ text, href }) => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const cloneRef = useRef(null);

  // Function to manually split text into spans for animation
  const splitTextIntoSpans = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="inline-block">{char}</span>
    ));
  };

  useEffect(() => {
    if (!textRef.current || !cloneRef.current) return;

    const originalChars = textRef.current.children;
    const cloneChars = cloneRef.current.children;

    const duration = 0.5; // Slightly longer duration for fluid effect
    const stagger = { each: 0.03, ease: "power4.out" }; // Smooth easing

    // Set initial states for the cloned text
    gsap.set(cloneChars, { 
      rotationX: -90, 
      opacity: 0, 
      transformOrigin: "50% 50% -20px" 
    });

    // Create the animation timeline
    const tl = gsap.timeline({ paused: true });

    tl.to(originalChars, {
      duration: duration,
      rotationX: 90,
      transformOrigin: "50% 50% -20px",
      stagger: stagger
    });

    tl.to(originalChars, {
      duration: duration * 0.7, // Slightly quicker opacity transition
      opacity: 0,
      stagger: stagger,
      ease: "expo.inOut"
    }, 0);

    tl.to(cloneChars, {
      duration: 0.15,
      opacity: 1,
      stagger: stagger
    }, 0.001);

    tl.to(cloneChars, {
      duration: duration,
      rotationX: 0,
      stagger: stagger
    }, 0);

    // Set up hover events
    const button = buttonRef.current;
    
    const playAnimation = () => tl.play();
    const reverseAnimation = () => tl.reverse();

    button.addEventListener("mouseenter", playAnimation);
    button.addEventListener("mouseleave", reverseAnimation);

    return () => {
      button.removeEventListener("mouseenter", playAnimation);
      button.removeEventListener("mouseleave", reverseAnimation);
    };
  }, [text]);

  return (
    <a
      ref={buttonRef}
      href={href}
      className="text-[10px] uppercase lg:text-[12px] text-center text-black w-[5.5rem] lg:w-[6rem] h-[2rem] border border-black cursor-pointer rounded-full overflow-hidden relative flex items-center justify-center z-10
      group hover:bg-black transition-all duration-300 ease-in-out
      perspective-[400px]"
    >
      <div className="rotatingHeader absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
        <span ref={textRef} className="h-full w-full flex items-center justify-center transform-style-3d">
          {splitTextIntoSpans(text)}
        </span>
        <span ref={cloneRef} className="h-full w-full flex items-center justify-center absolute top-0 left-0 transform-style-3d text-white">
          {splitTextIntoSpans(text)}
        </span>
      </div>
    </a>
  );
};

export default Button;
