import { useState } from "react";
import imgesOne from "../../assets/poert1.png";
import imgesTwo from "../../assets/port2.png";
import imgesThree from "../../assets/port3.png";

export default function Portfolio() {
  const [shows, setShow] = useState(false);
  function xox(e) {
    const imgSrc = e.target.closest(".group").querySelector("img").src;
    setShow(imgSrc);
  }
  return (
    <>
      <div className="p-24">
        <h2 className="uppercase mb-3 text-[38px] font-extrabold text-[#2c3e50] text-center">
          portfolio component
        </h2>
        <div className="icons-port text-center m-auto w-[50%] mb-4 relative">
          <i className="fa-solid fa-star text-[#2c3e50]"></i>
        </div>
        <div className="container mx-auto">
          <div className="row-tw gap-10 flex flex-wrap justify-center">
            <div className="relative w-[30%] group">
              <div className="popup fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[111111111]">
                {shows && <img src={shows} alt="" />}
              </div>
              <div className="overlay absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <i
                onClick={xox}
                className="text-white fa-solid fa-plus fa-6x absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></i>
              <img src={imgesOne} className="rounded-[6px]" alt="portfolio" />
            </div>
            <div className="relative w-[30%] group">
              <div className="popup fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[111111111]">
                {shows && <img src={shows} alt="" />}
              </div>
              <div className="overlay absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <i
                onClick={xox}
                className="text-white fa-solid fa-plus fa-6x absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></i>
              <img src={imgesTwo} className="rounded-[6px]" alt="portfolio" />
            </div>
            <div className="relative w-[30%] group">
              <div className="popup fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[111111111]">
                {shows && <img src={shows} alt="" />}
              </div>
              <div className="overlay absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <i
                onClick={xox}
                className="text-white fa-solid fa-plus fa-6x absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></i>
              <img src={imgesThree} className="rounded-[6px]" alt="portfolio" />
            </div>
            <div className="relative w-[30%] group">
              <div className="popup fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[111111111]">
                {shows && <img src={shows} alt="" />}
              </div>
              <div className="overlay absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <i
                onClick={xox}
                className="text-white fa-solid fa-plus fa-6x absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></i>
              <img src={imgesOne} className="rounded-[6px]" alt="portfolio" />
            </div>
            <div className="relative w-[30%] group">
              <div className="popup fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[111111111]">
                {shows && <img src={shows} alt="" />}
              </div>
              <div className="overlay absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <i
                onClick={xox}
                className="text-white fa-solid fa-plus fa-6x absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></i>
              <img src={imgesTwo} className="rounded-[6px]" alt="portfolio" />
            </div>
            <div className="relative w-[30%] group">
              <div className="popup fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[111111111]">
                {shows && <img src={shows} alt="" />}
              </div>
              <div className="overlay absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <i
                onClick={xox}
                className="text-white fa-solid fa-plus fa-6x absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></i>
              <img src={imgesThree} className="rounded-[6px]" alt="portfolio" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
