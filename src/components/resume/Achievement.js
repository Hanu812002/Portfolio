import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
        
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
        <ResumeCard
            title="Finalist Coderangers Rategain
            "
            des="Achieved rank 4 among 13000+ team"
          />
            <ResumeCard
            title="Patent Published
            "
            des="Smart Care (202311040373)"
          />
          
          <ResumeCard
            title="Research paper Published

            "
            des="Smart Health Care System"
          />
          <ResumeCard
            title="Geeks For Geeks Rank 1 in Institution"
            des="Solved 800+ DSA problem on Geeks For Geeks and have Programming score 2300+."
          />
          
          <ResumeCard
            title="5+ online Hacathon Winner"
            des="Setting the objectives, defining 'Success' Typically, a Hackathon event is expected to deliver at least a set of interesting, novel ideas."
          />
          {/* <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        </div>
      </div>
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        {/* </div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Achievement;
