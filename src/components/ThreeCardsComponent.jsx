import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2, // Stagger effect
      ease: "easeOut",
    },
  }),
};

const Card = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-white border border-black rounded-xl shadow-sm p-6 w-[300px] h-[220px] flex flex-col items-start justify-center text-left  hover:shadow-lg"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <div className="bg-purple-100 p-3 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </motion.div>
  );
};

const ThreeCardsComponent = () => {
  const cards = [
    {
      icon: <span className="text-xl">✨</span>,
      title: "Inspire",
      description: "Spark curiosity and drive a passion for technology.",
    },
    {
      icon: <span className="text-xl">⚙️</span>,
      title: "Innovate",
      description: "Boost ideas and spark bold, forward-thinking solutions.",
    },
    {
      icon: <span className="text-xl">👣</span>,
      title: "Impact",
      description: "Create projects that leave a lasting community impact.",
    },
  ];

  return (
    <div className="flex gap-6 justify-center items-center flex-wrap mt-10">
      {cards.map((card, index) => (
        <Card key={index} {...card} index={index} />
      ))}
    </div>
  );
};

export default ThreeCardsComponent;
