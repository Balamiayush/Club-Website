import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='w-full h-[50vh]  bg-gray-700'>
      <motion.h1 style={{

      }} className='text-white text-[15rem]   text-center  font-bold   pt-10'>
        SAY  HELLO.
      </motion.h1>
    </div>

  );
};

export default Footer;