import React from "react";

import { workData } from "../Data/workData";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full min-h-screen text-gray-300 bg-[#472768] py-20 relative"
      id="work"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">Work</p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {workData.map((item) => (
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-center bg-cover h-[250px] "
              key={item.id}
            >
              {/*hoverEffect*/}
              <div className="opacity-0 group-hover:opacity-100 hover:bg-gradient-to-tr to-[#472768] from-transparent  w-full h-full flex items-center justify-center flex-col px-4">
                <span className="text-2xl font-bold text-amber-200 tracking-wider mb-2">
                  {item.title}
                </span>
                <p className="text-white">{item.description}</p>
                <div className=" text-center">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-1 m-2   font-bold text-lg bg-gradient-to-r from-[#472768] to-purple-500 text-white">
                      Demo
                    </button>
                  </a>
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-1 m-2  font-bold text-lg bg-gradient-to-r from-[#472768] to-purple-500 text-white">
                      code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" absolute bottom-1  w-full flex items-center justify-center">
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

export default Work;
