"use client";

import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
 } from "react-icons/fa";

 import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

 // about date
 const about = {
  title: "About me",
  describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Nonim Udara"
    },
    {
      fieldname: "Phone",
      fieldValue: "1111111111"
    },
    {
      fieldname: "Experience",
      fieldValue: "3+ years"
    },
    {
      fieldname: "Skype",
      fieldValue: "nonim.01"
    },
    {
      fieldname: "Nationality",
      fieldValue: "Sri Lankan"
    },
    {
      fieldname: "Email",
      fieldValue: "nonimudara123@gmail.com"
    },
    {
      fieldname: "Freelancer",
      fieldValue: "Available"
    },
    {
      fieldname: "Languages",
      fieldValue: "English, Sinhala"
    },
  ]
 };

//experience data
const experience = {
  icon : "/assets/resume/badge.svj",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022-Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-end Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

//education data
const education = {
  icon : "/assets/resume/cap.svj",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// skills date
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  skillList : [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      resume page
    </motion.div>
  )
}

export default Resume;