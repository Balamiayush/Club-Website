    import React from "react";
    import { motion } from "framer-motion";
    import Marque_box from "./Marque_box";
    const Marquee_page2 = () => {
    return (
        <div className="w-full h-[50vh]  relative flex flex-col items-center   justify-center lg:gap-4 overflow-hidden  ">
        
        <Marque_box left="-left-10"/>
        <Marque_box left="left-10"/>
        <Marque_box left="-left-8"/>
        <Marque_box left="-left-40"/>
        </div>
    );
    };

    export default Marquee_page2;
