import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navlinks";
const Header = () => {
  return (
    <div className=" py-8 px-6 container mx-auto  flex justify-between items-center">
      <h1 className="font-extrabold text-4xl  text-indigo-500 tracking-wider">
        NFT
      </h1>
      <nav className="flex items-center gap-8">
        {
        navLinks.map((item, index) => {
          return (
            <NavLink
              className="font-medium text-gray-300 text-lg tracking-wide  border-b duration-200 py-1 border-b-transparent transition-all hover:border-indigo-500 "
              to={item.path}
              key={index}
            >
              {item.title}
            </NavLink>
          );
        })}
      </nav>
      <button className="py-2 px-6 rounded-lg bg-indigo-500">Login</button>
    </div>
  );
};

export default Header;
