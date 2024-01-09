/* eslint-disable no-unused-vars */


import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="h-[32px] w-[124px]" />
      <ul className="List list-none sm:flex hidden flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
      <img src={Toggle?close:menu}
      alt="menu"
      className="w-[28px] h-[28px] object-contain"
      onClick={(prev)=>{setToggle(!Toggle)}} />

      </div>
      <div className={`${Toggle?'flex':'hidden'} p-6 sidebar bg-black-gradient  absolute top-20 right-0 min-w-[140px] pb-4  rounded-xl mx-4 my-2`}>
      <ul className="List list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white
              ${index === navLinks.length - 1 ? "mb-0" : "mb-10"}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;

