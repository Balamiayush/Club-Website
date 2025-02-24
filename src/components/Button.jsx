import React from 'react'

const Button = ({text, href}) => {
  return (
    <a href={href} className=" text-[10px] uppercase lg:text-[10px] text-center text-black px-5 py-2 border-1 cursor-pointer rounded-full hover:bg-[#EEE8FA] duration-100">{text}</a>
  )
}

export default Button