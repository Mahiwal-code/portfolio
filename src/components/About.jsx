import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[rgb(148,77,154)] text-[rgb(216,203,203)] relative "
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
      <div className=" absolute bottom-10  w-full flex items-center justify-center">
        <p className="h-10 flex gap-5  items-center">
          <span className="w-1 h-1 rounded-full bg-slate-400 block"></span>
          <span className="w-2 h-2 rounded-full bg-slate-300 block"></span>
          <span className="w-3 h-3 rounded-full bg-slate-200 block"></span>
          <span className="w-2 h-2 rounded-full bg-slate-300 block"></span>
          <span className="w-1 h-1 rounded-full bg-slate-400 block"></span>
        </p>
      </div>
    </div>
  );
};

export default About;
