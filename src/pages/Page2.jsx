import React, { useState } from 'react'
import { ScrollVelocity } from '../components/ScrollVelocity'

const Page2 = ({ texts, velocity }) => {
  const [span, setSpan] = useState(
    <div className="w-[4rem] h-[4rem] rounded-full bg-purple-600"></div>
  )

  return (
    <div className="w-full lg:h-screen mt-10 lg:mt-0 flex flex-col items-center justify-center lg:gap-10">
      <div className="text-[#A071FF] text-center text-[1rem] lg:text-[1.5rem] font-semibold leading-none">
        <h1>
          Empowering students through technology
          <br />
          with innovation, collaboration, and learning at heart.
        </h1>
      </div>
      <ScrollVelocity
        texts={[
          <>
          {span}Innovative {span} Collaborative {span} Empowering {span} Visionary
          </>,
          <>
           {span} Innovative {span} Collaborative {span} Empowering {span} Visionary
          </>,
          <>
           {span} Innovative {span} Collaborative {span} Empowering {span} Visionary
          </>,
          <>
            {span} Innovative {span} Collaborative {span} Empowering {span} Visionary
          </>,
        ]}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </div>
  )
}

export default Page2
