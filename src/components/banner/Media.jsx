import React from 'react'
import { BsGithub } from "react-icons/bs";
import leet from './leet.png';
import gfg from './gfg.png';
import {  FaLinkedinIn } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/hanu-agarwal-966212200' target="_blank">
              <FaLinkedinIn />
              </a>
            </span> <span className="bannerIcon">
              <a href='https://github.com/Hanu812002'>
              <BsGithub />
              </a>
            </span> 
            <span className="bannerIcon">
              <a href='https://auth.geeksforgeeks.org/user/hanu_30/' target="_blank">
              <img src={gfg} alt="gfgh" />
              </a>
            </span>
            <span className="bannerIcon">
              <a href='https://leetcode.com/hanua_30/' target="_blank">
              <img src={leet} alt="gfgh"  style={{height:"50px"}}/>
              </a>
            </span>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
  )
}

export default Media