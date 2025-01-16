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
  description: "I am a motivated and curious individual with a passion for learning and growth. My journey is driven by a dedication to personal and professional development, a collaborative spirit, and a commitment to making meaningful contributions in everything I pursue.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nonim Udara"
    },
    {
      fieldName: "Phone",
      fieldValue: "+94 76 116 5455"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years"
    },
    // {
    //   fieldName: "Skype",
    //   fieldValue: "nonim.01"
    // },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan"
    },
    {
      fieldName: "Email",
      fieldValue: "nonimudara123@gmail.com"
    },
    {
      fieldName: "Freelancer",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala"
    },
  ]
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svj",
  title: "My experience",
  description: "My work experience has been a journey of growth and learning, allowing me to develop valuable skills and adapt to diverse challenges. Each role has strengthened my expertise, fostered collaboration, and prepared me to contribute meaningfully in my field with confidence and dedication.",
  items: [
    {
      company: "Donext | Ambalangoda, Southern Province, Sri Lanka",
      position: "Intern",
      duration: "2024 July - present",
      pharagraph: "Developed and deployed full-stack web applications using Next.js, React, TypeScript, Tailwind CSS, and PostgreSQL. My projects include Learning Management System, LK Model Zone, Potimate, and contributions to various other projects, showcasing expertise in building responsive, high-performance websites and applications."
    },
    // {
    //   company: "Web Design Studio",
    //   position: "Front-end Developer Intern",
    //   duration: "Summer 2021",
    // },
    // {
    //   company: "E-commerce Startup",
    //   position: "Freelance Web Developer",
    //   duration: "2020 - 2021",
    // },
    // {
    //   company: "Tech Academy",
    //   position: "Teaching Assistant",
    //   duration: "2019 - 2020",
    // },
    // {
    //   company: "Digital Agency",
    //   position: "UI/UX Designer",
    //   duration: "2018 - 2019",
    // },
    // {
    //   company: "Software Development Firm",
    //   position: "Junior Developer",
    //   duration: "2017 - 2018",
    // },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svj",
  title: "My education",
  description: "My educational journey has been one of discovery and growth, providing me with a strong foundation of knowledge and skills. It has prepared me to tackle challenges, pursue my goals, and contribute meaningfully to my field with confidence and determination.",
  items: [
    {
      institution: "MR / Vijitha Central College",
      degree: "G.C.E. Ordinary Level Examination",
      pharagraph: "Subject including ICT",
      duration: "2015",
    },
    {
      institution: "ST . Servatius College Matara",
      degree: " G.C.E Advanced Level Examination",
      pharagraph: "Physical Science Stream",
      duration: "2018",
    },
    {
      institution: "NSBM affiliated with University of Plymouth",
      degree: "BSc (Hons) in Software Engineering",
      pharagraph: "Awarded: Second Class Honours (Upper Division)",
      duration: "2020 - 2023",
    },
  ],
};

// skills date
const skills = {
  title: "My skills",
  description: "My skills include a blend of technical expertise and problem-solving abilities, complemented by strong communication and adaptability. I am proficient in below skills, with a focus on delivering quality results and continuously refining my capabilities to meet evolving challenges.",
  skillList: [
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
    {
      icon: <FaNodeJs />,
      name: "node.js",
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
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] w-full">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] w-full max-w-[730px] py-6 px-6 sm:px-8 lg:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-full lg:max-w-[260px] min-h-[60px] text-left lg:text-left mb-[-10px]"
                          >
                            {item.position}
                          </h3>
                          <p className="text-white/60 text-justify lg:text-left">{item.pharagraph}</p>
                          <div className="flex items-start gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] mt-3 rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl 
                        flex flex-col justify-center items-center lg:items-start
                        gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-auto min-h-[60px]
                          text-center lg:text-left">{item.degree}</h3>
                          <h3 className="text-xl max-w-auto min-h-[60px]
                          text-center lg:text-left">{item.pharagraph}</h3>
                          <div className="flex items-start gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent mt-[12px]"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>


                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] 
                          rounded-xl flex justify-center items-center 
                          group">
                            <div className="text-6xl group-hover:text-accent 
                            transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[750px] 
                mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center 
                      xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;