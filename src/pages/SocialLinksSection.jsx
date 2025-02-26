import React from 'react';
import { motion } from 'framer-motion';

const SocialLinksSection = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'GitHub', url: 'https://github.com' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.02,
      backgroundColor: 'rgba(245, 245, 255, 0.1)',
      transition: { 
        type: 'spring',
        stiffness: 300
      }
    }
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { 
      x: 5,
      transition: { 
        type: 'spring',
        stiffness: 300
      }
    }
  };

  const contactBadgeVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: 'spring',
        stiffness: 300
      }
    }
  };

  return (
    <div className=" w-full h-screen px-4  lg:px-10 flex flex-col justify-center bg-white rounded-lg shadow-md">
      <div className="mb-6 flex flex-col items-start ">
        <motion.span 
          className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm lg:text-2xl font-medium mb-3"
          whileHover="hover"
          variants={contactBadgeVariants}
        >
          CONTACT
        </motion.span>
        <motion.h2 
          className="text-2xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Want to join us on this exciting journey?
        </motion.h2>
      </div>

      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            className={`flex items-center justify-between w-full p-4 border rounded-lg text-gray-800 hover:text-gray-900 ${
              index === 0 ? 'border-blue-200' : 'border-gray-200'
            }`}
            variants={linkVariants}
            whileHover="hover"
          >
            <span className="font-medium">{link.name}</span>
            <motion.span
              variants={arrowVariants}
              className="text-xl"
            >
              →
            </motion.span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialLinksSection;