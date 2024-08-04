import React from "react";

export default function About() {
  return (
    <div className="bg-[#1abc9c] p-60">
        <h2 className="mb-4 text-[38px] mb-4 font-bold text-white uppercase text-center">
          about component
        </h2>
        <div className="icons text-center m-auto w-[50%] mb-4">
          <i className="fa-solid fa-star text-white"></i>
        </div>
        <div className="content flex gap-3 text-center">
          <p className="w-full text-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="w-full text-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
    </div>
  );
}
