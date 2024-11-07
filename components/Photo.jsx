"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn"
          }
        }}
      >
        { /* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut"
            }
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full mix-blend-lighten
          absolute">
          <Image
            src="/assets/profile.PNG"
            alt=""
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>
        { /* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[350px] xl:h-[556px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            x="3"
            y="3"
            width="500"
            height="500"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            rx="30"  // Adjust the radius for more rounding
            ry="30"  // Same as rx for consistent rounded corners
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "15 25 92 72", "4 250 22 22"],
              rotate: [0, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

      </motion.div>
    </div>
  )
}

export default Photo