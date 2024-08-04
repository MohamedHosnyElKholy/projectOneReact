import React from "react";
import imageOne from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <div className="home bg-[#1abc9c] p-24">
      <div className="container mx-auto">
        <img src={imageOne} className="w-[250px] m-auto" alt="Home" />
        <h2 className="text-[38px] mb-4 font-bold text-white uppercase text-center">start Framework</h2>
        <div className="icons text-center m-auto w-[50%] mb-4">
          <i className="fa-solid fa-star text-white"></i>
        </div>
        <p className="text-center text-white">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
