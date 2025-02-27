// import React from 'react';
// import { motion } from 'framer-motion';

// const Marque_box = ({ left, direction }) => {
//   return (
//     <motion.div
//       className="w-full h-[5rem] relative overflow-hidden"
//     >
//       <motion.div
//         className={`texts flex items-center justify-center absolute ${left}`}
//         animate={{ x: direction === direction ? '-100%' : '100%' }}
//         transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//       >
//         {Array.from({ length: 4 }).map((_, index) => (
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5,  }}
//             key={index}
//             className={`lg:text-[2.5rem] text-[1.5rem] font-bold flex items-center gap-2 lg:gap-8`}
//           >
//             <span className="lg:w-[4rem] lg:h-[4rem] w-[3rem] h-[3rem] bg-purple-500 rounded-full"></span>
//             Innovative
//             <span className="lg:w-[4rem] lg:h-[4rem] w-[3rem] h-[3rem] bg-purple-500 rounded-full"></span>
//             Collaborative
//             <span className="lg:w-[4rem] lg:h-[4rem] w-[3rem] h-[3rem] bg-purple-500 rounded-full"></span>
//             Empowering
//             <span className="lg:w-[4rem] lg:h-[4rem] w-[3rem] h-[3rem] bg-purple-500 rounded-full"></span>
//             Visionary <span></span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Marque_box;