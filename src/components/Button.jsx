import React from "react";

const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      className="text-[10px] uppercase lg:text-[12px] text-center text-black w-[5.5rem] lg:w-[6rem] h-[2rem] border border-black cursor-pointer rounded-full overflow-hidden relative flex items-center justify-center 
      group hover:bg-black hover:text-white transition-all duration-300 ease-in-out
      perspective-[400px]"
    >
      <div className="rotatingHeader absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
        <span  className="h-full w-full flex items-center  justify-center transform-style-3d">
          {text}
        </span>
      </div>
    </a>
  );
};

export default Button;
