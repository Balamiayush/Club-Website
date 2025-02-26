import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.footer 
      className="w-full bg-white py-8 px-6 border-t border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-8">
          {/* Email with highlight effect */}
          <motion.div 
            className="relative inline-block mb-2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <motion.div 
              className="absolute inset-0 bg-blue-200 rounded"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: hovered ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.a 
              href="mailto:icibiofmmc@gmail.com" 
              className="relative px-2 py-1 text-blue-600 font-medium"
              whileHover={{ scale: 1.02 }}
            >
              itclubofmmc@gmail.com
            </motion.a>
          </motion.div>
          
          
          {/* Main heading with letter animation */}
          <motion.h2 
            className="text-6xl font-black text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {"SAY HELLO.".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.3 + index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  color: "#3B82F6",
                  transition: { duration: 0.2 } 
                }}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        
        {/* Footer links section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              {['Twitter', 'LinkedIn', 'Instagram'].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Team'].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Copyright'].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-12 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;