import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2c3e50]">
        <div className="container mx-auto  p-10">
          <div className="all-box-foot flex justify-around text-center flex-wrap">
          <div className="box">
            <h3 className="text-[27px] font-bold text-white mb-2">LOCATION</h3>
            <p className="mb-4 text-white">2215 John Daniel Drive</p>
            <p  className="mb-4 text-white">Clark, MO 65243</p>
          </div>
          <div className="box">
            <h3 className="text-[27px] font-bold text-white mb-2">AROUND THE WEB</h3>
            <div className="soical">
              <i className="fa-brands fa-facebook mx-1 icon border border-1 border-white p-3 rounded-[50px] text-white"></i>
              <i className="fa-brands fa-twitter mx-1 icon border border-1 border-white p-3 rounded-[50px] text-white"></i>
              <i className="fa-brands fa-linkedin-in mx-1 icon border border-1 border-white p-3 rounded-[50px] text-white"></i>
              <i className="fa-solid fa-globe mx-1 icon border border-1 border-white p-3 rounded-[50px] text-white"></i>
            </div>
          </div>
          <div className="box">
            <h3 className="text-[27px] font-bold text-white mb-2">ABOUT FREELANCER</h3>
            <p className="mb-4 text-white">Freelance is a free to use, licensed <br /> Bootstrap theme created by Route</p>
          </div>
          </div>
        </div>
        <div className="foot-end bg-[#1a252f] p-3">
            <p className="text-center mb-[16px] pt-[10px] text-white">Copyright © Your Website 2021</p>
          </div>
      </footer>
    </>
  );
}
