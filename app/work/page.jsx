"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
    "Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. ",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "JavaScript"}],
    image: 'assets/work/thumb1.png',
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
    "Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. ",
    stack: [{name: "Next.js"}, {name: "Tailwind.css"}, {name: "Node.js"}],
    image: 'assets/work/thumb2.png',
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
    "Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. ",
    stack: [{name: "Next.js"}, {name: "Tailwind.css"}],
    image: 'assets/work/thumb3.png',
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        projects
      </div>
    </motion.div>
  )
}

export default Work