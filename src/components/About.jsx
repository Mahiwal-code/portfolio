import React from "react";
import ThreeDot from "./ThreeDot";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[rgb(148,77,154)] text-[rgb(216,203,203)] relative flex items-center justify-center py-20"
      id="about"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline ">About</p>
          </div>

          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi! I am Mahiwal, a frontend developer.</p>
          </div>
          <div>
            <p>
              I'm a B.E graduate with experience of working as a full-stack
              developer. I have worked on various projects using React, Node,
              Express, MongoDB, and Firebase. I have also worked on projects
              using Python, Django, and MySQL. I have a good understanding of
              data structures and algorithms. I am a quick learner and a team
              player. I am looking for a full-time opportunity as a frontend
              developer.
            </p>
          </div>
        </div>
      </div>

      <ThreeDot />
    </div>
  );
};

export default About;
