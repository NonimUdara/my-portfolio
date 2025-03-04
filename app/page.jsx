"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handlePreviewAndDownloadCV = () => {
    const cvUrl = "/resume.pdf"; // URL of the CV file in the public directory

    // Open the document in a new tab
    // window.open(cvUrl, "_blank");

    // Trigger the download
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Nonim_Udara_CV.pdf"; // Desired downloaded file name
    link.click();
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Nonim Udara</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a software developer with a passion for creating innovative and user-friendly software solutions.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handlePreviewAndDownloadCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl ml-2" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex
                justify-center items-center text-base bg-primary hover:bg-white
                hover:border-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
