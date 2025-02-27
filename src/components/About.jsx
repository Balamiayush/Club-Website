import React from 'react'

const About = ({title,description}) => {
  return (
  
    <div className='w-full lg:h-[60vh] flex flex-col justify-center  px-4 lg:px-10 '>
    <p className='text-[#A071FF]  text-[1rem] lg:text-[2.1rem] font-semibold leading-none '>{title}</p>
    <div className='    flex   flex-col lg:py-5  '>
    <div style={{fontFamily:'gilroyRegular'}} className=' text-[1rem] lg:text-[2rem] font-semibold leading-[1.2] '>
    {description}
    </div>
    </div>
    </div>

  )
}

export default About