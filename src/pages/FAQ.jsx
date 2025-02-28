import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";

const faqs = [
  {
    question: "What Is MMC IT Club?",
    answer:
      "MMC IT Club is a community of tech enthusiasts at Makawanpur Multiple Campus dedicated to fostering collaboration, innovation, and learning in the field of Information Technology.",
  },
  {
    question: "Who Can Join The MMC IT Club?",
    answer: "Any student enrolled at Makawanpur Multiple Campus who is interested in technology, coding, designing, or learning new IT skills can join the club.",
  },
  {
    question: "What Activities Does The MMC IT Club Organize?",
    answer:
      "The club organizes workshops, seminars, hackathons, coding competitions, project showcases, and collaborative events to enhance technical and professional skills.",
  },
  {
    question: "How Can I Become A Member Of The MMC IT Club?",
    answer: "You can become a member by filling out the membership form available on the website or by contacting the club coordinators directly during enrollment periods.",
  },
  {
    question: "How Can I Contribute To The Club's Initiatives?",
    answer:
      "Members can contribute by participating in events, volunteering for organizing teams, sharing ideas, or leading projects. Feel free to collaborate and showcase your skills!",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-300 cursor-pointer p-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Question Section */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33325 18.0002H17.9999M17.9999 18.0002H34.6666M17.9999 18.0002V1.3335M17.9999 18.0002V34.6668" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 : <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33325 18.0002H17.9999M17.9999 18.0002H34.6666M17.9999 18.0002V1.3335M17.9999 18.0002V34.6668" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
        </motion.div>
      </div>

      {/* Animated Answer Section */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 mt-2">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center px-6">
      <div className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-[1rem] lg:text-[1.5rem] font-semibold inline-block mb-4">
        FAQ
      </div>
      <h2 className="text-[1rem] lg:text-[1.5rem] font-bold">We're here to answer all your questions.</h2>
      <div className="mt-6 border-t border-gray-300">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
