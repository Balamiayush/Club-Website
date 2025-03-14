import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import teamData from "../assets/data.json";
import gsap from "gsap";

const Ourteam = () => {
  const [team, setTeam] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    setTeam(teamData);

    gsap.fromTo(
      ".team-member",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, []);

  const handleMouseEnter = (e, index) => {
    const circle = document.getElementById(`circle-${index}`);
    const member = document.getElementById(`member-${index}`);

    gsap.to(circle, {
      scale: 1,
      opacity: 0.9,
      duration: 0.5,
      ease: "power2.out",
    });

    // Add a subtle text animation when hovering
    gsap.to(member.querySelector(".member-name"), {
      color: "#A071FF",
      x: 5,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(member.querySelector(".member-position"), {
      fontWeight: "600",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e, index) => {
    const circle = document.getElementById(`circle-${index}`);
    if (circle) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(circle, {
        x: x - circle.offsetWidth / 2,
        y: y - circle.offsetHeight / 2,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    const circle = document.getElementById(`circle-${index}`);
    const member = document.getElementById(`member-${index}`);

    gsap.to(circle, {
      scale: 0,
    });

    // Reset text animations
    gsap.to(member.querySelector(".member-name"), {
      color: "#000",
      x: 0,
    });

    gsap.to(member.querySelector(".member-position"), {
      fontWeight: "400",
    });
  };

  return (
    <div
      className="w-full h-full lg:mt-10 bg-white flex gap-4 flex-col px-4 lg:px-10 pt-6 pb-10 relative"
      ref={containerRef}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-3"
      >
        <p className="text-3xl font-semibold text-[#A071FF]">Our Team</p>
        <hr className="w-full h-[1px] bg-gray-300" />
      </motion.div>

      {team.map((member, index) => (
        <motion.div
          key={member.id}
          id={`member-${index}`}
          className="team-member w-full flex justify-between items-center py-5 px-4 relative border-b border-black cursor-pointer"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={(e) => handleMouseEnter(e, index)}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div
            id={`circle-${index}`}
            className="circle w-35 h-35 opacity-0 scale-0 bg-gradient-to-br from-purple-400 to-blue-500 absolute rounded-full z-0 pointer-events-none blur-sm"
          ></div>

          <div className="flex lg:gap-10 gap-4 items-center z-10">
            <h1 className="text-3xl font-bold text-[#555555]">{member.id}</h1>
            <h1 className="member-name text-[1rem] lg:text-[1.8rem] font-medium transition-all duration-300">
              {member.name}
            </h1>
          </div>
          <h2 className="member-position text-gray-600 transition-all duration-300">
            {member.position}
          </h2>
        </motion.div>
      ))}
    </div>
  );
};

export default Ourteam;
