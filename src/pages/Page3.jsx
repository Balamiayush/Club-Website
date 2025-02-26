import React from 'react'
import About from '../components/About'
import Ourteam from '../components/Ourteam'
const Page3 = () => {
  return (
    <div className='w-full h-auto lg:h-[200vh]  flex flex-col items-center justify-center  lg:gap-10   '>
        <About/>
        <Ourteam/>
        
    </div>
  )
}

export default Page3