import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
         
          <h2 className="text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
          
          <ResumeCard
            title="Front-end developer - Studiovity"
            subTitle="Frbrary 2024- Present"
            des="World's first web and app-based screenplay & film production management
             software. Create a professional Call Sheet, Shot list & production calendar."
          />
            
          <ResumeCard
            title="Angular Developer - Lannet Infotech "
            subTitle="July 2023 - December 2023"
           
            des="Laneet Infotech(Laneet Infotech Is The Most Comprehensive Development Ecosystem That Lets You Build High-Quality Service-Oriented Transactional Applications And Innovative Systems Efficiently And Quickly.)"
          />
            <ResumeCard
            title="Front-end Developer DSC KIET"
            subTitle="September 2022- July 2024"
            des="DSC(A Student Driven Club)"
          />
        </div>
      </div>
      <div>
        {/* <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
