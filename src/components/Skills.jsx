import React from "react";

import { skillsData } from "../Data/skillsData";
import ThreeDot from "./ThreeDot";

function Skills() {
  return (
    <div
      name="skills"
      className=" w-full min-h-screen bg-[rgb(82,45,93)] text-gray-300 py-20 relative "
      id="skills"
    >
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline text-[rgb(181,177,177)]">
            Skills
          </p>
          <p className="py-4"> These are the technologies i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((item) => (
            <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4"
              key={item.id}
            >
              <img className="w-20 mx-auto" src={item.image} alt="HTML icon" />
              <p className="my-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <ThreeDot />
    </div>
  );
}

export default Skills;
