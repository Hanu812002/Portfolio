import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, netflix,crypto,todo} from "../../assets/index";
// import {netflix} from "../../projects";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Smart Contact Manager"
          des="HTML,CSS,SpringBoot,BootStrap,SQL"
          src={projectOne}
          link="https://github.com/Hanu812002/Smart-Contact-Manager"
        />
        <ProjectsCard
          title="Smart Care"

          des="Html,Css,Javascript,ExpressJS,MongoDB"
          src={projectTwo}
        />
        <ProjectsCard
          title="NetFlix Clone"
          link= "https://github.com/Hanu812002/Netflix_clone"
          des="Reactjs,TailwindCss,Firebase 9,Material Ui"
          src={netflix}
        />
        <ProjectsCard
          title="Coder's Map"
          link="https://github.com/Hanu812002/coder-s-map"
          des="HTML,CSS and Javascript"
          src={projectThree}
        />
        <ProjectsCard
          title="Crpto App"
          link="https://github.com/Hanu812002/Crypto-"
          des="Reactjs,sass,Chakra-UI, Chart.js"
          src={crypto}
        />
        <ProjectsCard
          title="Todo App"
          link="https://github.com/Hanu812002/To_Do_list"
          des="Reactjs,Firebase 8,Bootstrap"
          src={todo}
        />
      </div>
    </section>
  );
}

export default Projects