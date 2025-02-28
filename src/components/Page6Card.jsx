import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2, // Stagger effect
      ease: "easeOut",
    },
  }),
};

const data = [
  {
    title: "Collaboration",
    description:
      "We create a supportive space where teamwork and shared knowledge thrive, fostering collective success.",
    icon: "🤝",
  },
  {
    title: "Growth",
    description:
      "We empower each member to develop both personally and professionally, unlocking their full potential.",
    icon: "🌱",
  },
  {
    title: "Inclusivity",
    description:
      "We embrace diverse ideas, perspectives, and talents, ensuring everyone has a voice and opportunity.",
    icon: "🌍",
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality and driving innovation in everything we do.",
    icon: "🏆",
  },
];

const Page6Card = () => {
  return (
    <div className="w-full flex flex-col cursor-grab items-center space-y-6 py-10">
      {data.map((item, i) => (
        <motion.div
          key={i}
          className="w-full max-w-xl p-6 border rounded-lg shadow-md bg-white flex items-start space-x-4"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <div className="text-3xl bg-gray-500 rounded-full p-2">{item.icon}</div>
          <div>
            <h3 className="text-[1rem] lg:text-[1.5rem] font-semibold ">{item.title}</h3>
            <p className="text-gray-600 text-[0.8rem] lg:text-[1rem] mt-2">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Page6Card;
