import React from "react";
import ThreeCardsComponent from "../components/ThreeCardsComponent";

const Page5 = () => {
  return (
    <>

    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-10">
      <p className="text-[#A071FF] text-[1rem] lg:text-[1.5rem] font-semibold">
        OUR MISSION
      </p>
    

      <div className="w-full  ">
        <p className="text-[1rem] text-center lg:text-[2.2rem] font-light leading-[1] ">
          Our mission is to inspire curiosity, foster innovation through creative problem-solving, 
          and create impactful projects that equip students with the tools to lead in the evolving tech landscape.
        </p>
      </div>


      <div className="w-full flex justify-center ">
        <ThreeCardsComponent />
      </div>
    </div>
    </>
  );
};

export default Page5;
