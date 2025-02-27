import React from "react";
import ThreeCardsComponent from "../components/ThreeCardsComponent";
import About from "../components/About";


const Page5 = () => {
  return (
    <>

    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-10">
    <About title='OUR MISSION' description="Our mission is to inspire curiosity, foster innovation through creative problem-solving, and create impactful projects that equip students with the tools to lead in the evolving tech landscape." />


      <div className="w-full flex justify-center ">
        <ThreeCardsComponent />
      </div>
    </div>
    </>
  );
};

export default Page5;
