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

import WorkSliderBtns from "@/components/WorkSliderBtns";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Vehicle Automotive Spare Parts Sales Platform",
    title: "project 1",
    description:
      "This system fosters strong client relationships by offering a user-friendl platform for Sri Lankan citizens to buy and sell genuine spare parts effortlessly. With efficient categorization, a seamless buying experience, and the ability to locate nearby repair centers, it serves as a one-stop solution for automotive needs, catering to both Administrators and Users.",
    stack: [{ name: "ReactJS" }, { name: "React Native" }, { name: "ExpressJS" }, { name: "NodeJS" }, { name: "MongoDB" }, { name: "GitHub" }, { name: "Microsoft Azure" }],
    image: '/assets/work/thumb1a.jpg',
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Web Application School Management System",
    title: "project 2",
    description:
      "E-Learning management system for school A/L students with including all functionalities for teachers students and admins.",
    stack: [{ name: "AngularJS" }, { name: "ExpressJS" }, { name: "NodeJS" }, { name: "MongoDB" }, { name: "GitHub" }],
    image: '/assets/work/thumb1.jpg',
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Web Application Accident Management System",
    title: "project 3",
    description:
      "Collaborative web app for Sri Lankan Road Development Authority Police & Insurance Cos. Enables easy driver reporting & tracks accidents. Graphs display accident types causes & frequency for enhanced analysis & safer roads.",
    stack: [{ name: "ASP.NET with C#" }, { name: "Microsoft SQL Server" }, { name: "Microsoft Azure" }],
    image: '/assets/work/thumb1.jpg',
    live: "",
    github: "",
  },
  
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update projrct state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent 
              text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-[1.2] text-white
              group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-x-2 gap-y-1 text-center">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent inline">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/60"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                    bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl 
                      group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>
                          Live Project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                    bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl 
                      group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>
                          Github Project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center 
                    items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 
                      z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max 
              xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work