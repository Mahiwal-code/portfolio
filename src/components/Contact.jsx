import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-max w-full bg-slate-700 flex flex-col pt-10 pb-5 items-center gap-5 "
    >
      <p className="text-purple-400 text-3xl font-semibold md:hidden">
        Let's Connect!
      </p>
      <div className="w-full  md:hidden flex ">
        <ul className="flex w-full md:gap-5 gap-1 justify-center">
          <li className="px-2 py-1 flex justy-between items-center   bg-[rgb(33,53,83)] shadow-lg hover:scale-105 rounded-full transition duration-300 shadow-slate-600 group/color text-sm">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mahiwal-sahu"
              target="_blank"
              rel="noreferrer"
            >
              linkedin{" "}
              <FaLinkedin className="group-hover/color:text-blue-500 w-5" />
            </a>
          </li>
          <li className="px-2 py-1 flex justy-between items-center   bg-[rgb(33,53,83)] shadow-lg hover:scale-105 rounded-full transition duration-300 shadow-slate-600 group/color text-sm">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Mahiwal-code"
              target="_blank"
              rel="noreferrer"
            >
              Github{" "}
              <FaGithub className="group-hover/color:text-blue-400 w-5" />
            </a>
          </li>
          <li className="px-2 py-1 flex justy-between items-center   bg-[rgb(33,53,83)] shadow-lg hover:scale-105 rounded-full transition duration-300 shadow-slate-600 group/color text-sm">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:mahicode01@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email{" "}
              <HiOutlineMail className="group-hover/color:text-blue-300 w-5" />
            </a>
          </li>
          <li className="px-2 py-1 flex justify-between items-center   bg-[rgb(33,53,83)] shadow-lg hover:scale-105 rounded-full transition duration-300 shadow-slate-600 group/color text-sm">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://shrtco.de/2N3a7f"
              target="_blank"
              rel="noreferrer"
            >
              Resume{" "}
              <IoIosPaper className="group-hover/color:text-blue-500 w-5" />
            </a>
          </li>
        </ul>
      </div>

      <p className="text-white text-lg">Copyright &copy; 2023</p>
    </section>
  );
}
