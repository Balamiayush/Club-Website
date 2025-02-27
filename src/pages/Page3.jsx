import React from 'react'
import About from '../components/About'
import Ourteam from '../components/Ourteam'
const Page3 = () => {
  return (
    <div className='w-full h-auto lg:h-[200vh]  flex flex-col items-center justify-center  lg:gap-10   '>
        <About title="About Us" description="We are a vibrant community of tech enthusiasts focused on innovation, creativity, and growth. Bringing together students from diverse backgrounds, we explore the limitless potential of technology to shape the future. Through hands-on projects, workshops, and networking, we empower members to develop their abilities and turn ideas into reality. Join us in building a brighter, tech-driven future." />
        <Ourteam/>
        
    </div>
  )
}

export default Page3