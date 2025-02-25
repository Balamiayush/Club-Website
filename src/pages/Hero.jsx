import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
const Hero = () => {
    return (
        <div className='w-full px-4  lg:px-10 '>
        <Navbar/>
        <div className="hero-content flex lg:mt-5 flex-col justify-center w-full items-center lg:justify-between lg:flex-row ">
            <h1 className='font-bold text-[3rem] lg:text-[5rem]'><span className='text-[#A071FF] bg-[#EEE8FA] rounded-2xl p-2'>We</span> Inspire</h1>
            <div className="btns flex gap-2 mt-2 lg:mt-0">
        {["facebook", "lnstagram", "Linkedin", "github"].map((platform) => (
            <Button key={platform} text={platform} />
        ))}
            </div>
        </div>
        <div className="img w-full h-[50vh] lg:h-[90vh] mt-4">
             <img className='w-full h-full object-cover' src="https://s3-alpha-sig.figma.com/img/d342/d1d3/237977ea1c20a0446f9b1ee213a25112?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TZp6PvzC~JJzscq8lJMbsvgX8gdlCuXzabyfq1yPlHSF6eIMfpt4XsEOlTU9CbJRQsQEPP8alJTnsAl7BODvQuSK82PsGXbDsDYbULeV83hiKoPxszWCQp6DLqYNnk1p2LRonhqMM1Vtg4r4rX~uUXMu4xsLw~Ox-RvhKFoNlVXkUJUYUFs4PC~W~LT~yci8rzBMuEE2tX4KSX-VLiapfbINTZozcRy1MN7uAWvWYOoAGrzsQG62P4pVNmiR5DF~Ee1tGAj1HTPzlNq-tBEEefgAI7xEFbEIXHOh0o-MS8cUxF0ooyoSpx51aBycE~oDgQFGFmwMEg55IDJEfVDkDw__" alt="" />
        </div>
    </div>
  )
}

export default Hero