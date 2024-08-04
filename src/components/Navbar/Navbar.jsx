import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="bg-[#2c3e50] py-6 fixed w-full z-[2222222222222222]">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <ul>  
          <li>
            <NavLink className=" start text-[31px] py-1 font-bold text-white uppercase" to={""}>Start Framework            </NavLink>
            </li>
          </ul>
          <ul className="flex">
            <li>
            <NavLink className="p-2 text-white font-bold uppercase" to={"about"}>About</NavLink>
            </li>
            <li>
            <NavLink className="p-2 text-white font-bold uppercase" to={"portfilio"}>portfolio</NavLink>
            </li>
            <li>
            <NavLink className="p-2 text-white font-bold uppercase" to={"contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
