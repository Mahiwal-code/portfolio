import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#512857] relative" id="home">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[rgb(161,207,240)]">Hi! my name is </p>
        <h1 className="tet-4xl sm:text-7xl font-bold text-[rgb(255,255,255)]">
          Mahiwal
        </h1>
        <h2 className="tet-4xl sm:text-7xl font-bold text-[rgb(127,127,130)]">
          I'm a full-stack developer
        </h2>
        <p className="text-[rgb(127,127,127)] py-4 max-w-[700px]">
          A dedicated and highly motivated developer with proficiency in python
          and web development looking to work in an organisation where I can
          utilise my full potential to achieve the shared goal.
        </p>
        <div>
          <button className="">
            <a
              href="#work"
              className="text-[rgb(156,175,242)] group px-6 py-3 my-2 flex items-center hover:bg-[rgb(33,53,83)] hover:border-[#512857]"
            >
              View work
              <span className="group-hover:rotate-90 duration-1000">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </a>
          </button>
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

export default Home;
