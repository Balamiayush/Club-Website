import React from 'react';
import { motion } from 'framer-motion';

const Marque_box = ({ left }) => {
  return (
    <motion.div
      className="w-full h-[5rem] relative "
    >
      <motion.div
      
        className={`texts flex items-center justify-center absolute ${left}`}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <h1  key={index} className="lg:text-[2.5rem] text-[1.5rem] font-bold flex items-center gap-2 lg:gap-8 ">
            <span className="lg:w-[4rem] lg:h-[4rem] w-[3rem] h-[3rem] bg-purple-500 rounded-full"></span>
            Innovative
            <span className="lg:w-[4rem] lg:h-[4rem] w-[3rem] h-[3rem] bg-purple-500 rounded-full"></span>
            Collaborative
            <span className="lg:w-[4rem] lg:h-[4rem] w-[3rem] h-[3rem] bg-purple-500 rounded-full"></span>
            Empowering
            <span className="lg:w-[4rem] lg:h-[4rem] w-[3rem] h-[3rem] bg-purple-500 rounded-full"></span>
            Visionary <span></span>
          </h1>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Marque_box;