import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ThreeDot from "./ThreeDot";

const Home = () => {
  return (
    <div
      className="w-full min-h-max bg-[#512857] relative pt-32 pb-20"
      id="home"
    >
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[rgb(161,207,240)]">Hi! my name is </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-[rgb(255,255,255)]">
          Mahiwal
        </h1>
        <h2 className="tet-4xl sm:text-7xl font-bold text-[rgb(127,127,130)]">
          I'm a frontend developer
        </h2>
        <p className="text-[rgb(127,127,127)] py-4 max-w-[700px]">
          A dedicated and highly motivated developer with proficiency in python
          and web development looking to work in an organisation where I can
          utilise my full potential to achieve the shared goal.
        </p>
        <div>
          <button className="">
            <a
              href="#project"
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
      <ThreeDot />
    </div>
  );
};

export default Home;
