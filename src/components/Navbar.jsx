import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";

import logo from "../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[rgb(33,53,83)] text-gray-50  top-0 left-0 scroll-smooth shadow-lg z-50">
      <div>
        <a href="/">
          <img src={logo} alt="Logo" style={{ width: "150px" }} />
        </a>
      </div>
      {/*menu*/}
      <div>
        <ul className="hidden md:flex">
          <li>
            <a className="line" href="#home">
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="line">
              {" "}
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="line">
              {" "}
              Skills
            </a>
          </li>
          <li>
            {" "}
            <a href="#work" className="line">
              {" "}
              Project
            </a>
          </li>
        </ul>
      </div>

      {/*mobile menu*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*mobile menu icon*/}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[rgb(33,53,83)] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl" onClick={handleClick}>
          <a href="#home" className="line">
            {" "}
            Home
          </a>
        </li>
        <li className="py-6 text-4xl" onClick={handleClick}>
          <a href="#about" className="line">
            {" "}
            About
          </a>
        </li>
        <li className="py-6 text-4xl" onClick={handleClick}>
          <a href="#skills" className="line">
            {" "}
            Skill
          </a>
        </li>
        <li className="py-6 text-4xl" onClick={handleClick}>
          <a href="#work" className="line">
            {" "}
            Project
          </a>
        </li>
      </ul>

      {/*social icons*/}
      <div className="hidden sm:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[40px] flex justy-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[rgb(33,53,83)] group/color">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mahiwal-sahu"
              target="_blank"
              rel="noreferrer"
            >
              linkedin{" "}
              <FaLinkedin
                size={30}
                className="group-hover/color:text-blue-500"
              />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex justy-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[rgb(33,53,83)] group/color">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Mahiwal-code"
              target="_blank"
              rel="noreferrer"
            >
              Github{" "}
              <FaGithub size={30} className="group-hover/color:text-blue-500" />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex justy-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[rgb(33,53,83)] group/color">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:mahicode01@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email{" "}
              <HiOutlineMail
                size={30}
                className="group-hover/color:text-blue-500"
              />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[rgb(33,53,83)] group/color">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://shrtco.de/2N3a7f"
              target="_blank"
              rel="noreferrer"
            >
              Resume{" "}
              <IoIosPaper
                size={30}
                className="group-hover/color:text-blue-500"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
