import React from "react";

const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      className="text-[10px] uppercase lg:text-[12px] text-center text-black w-[5.5rem] lg:w-[6rem] h-[2rem] border-1 cursor-pointer rounded-full overflow-hidden relative flex items-center justify-center z-10
      group hover:bg-black hover:text-white transition-all duration-300 ease-in-out
      "
    >
      <span className="absolute z-[-1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-400 ease-in-out  group-hover:-translate-y-[200%]">
        {text}
      </span>
      <span className="absolute z-[-1] top-1/2 left-1/2 -translate-x-1/2 translate-y-full transition-transform duration-400  ease-in-out group-hover:translate-y-[-50%]">
        {text}
      </span>
    </a>
  );
};

export default Button;
