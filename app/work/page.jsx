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
  }
]

const Work = () => {
  return (
    <div className="text-center">work page</div>
  )
}

export default Work