import { useState } from "react";

export default function Contact() {
  const [showName, setShowName] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [showEmile, setShowEmile] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function handleName(e) {
    setShowName(e.target.value !== ""); //  Condition === True Or False
  }
  function handleAge(e) {
    setShowAge(e.target.value !== ""); //  Condition === True Or False
  }
  function handleEmile(e) {
    setShowEmile(e.target.value !== ""); //  Condition === True Or False
  }
  function handlePass(e) {
    setShowPass(e.target.value !== ""); //  Condition === True Or False
  }
  return (
    <>
      <div className="p-24">
        <h2 className="uppercase mb-3 text-[38px] font-extrabold text-[#2c3e50] text-center">
          Contact Section
        </h2>
        <div className="icons-port text-center m-auto w-[50%] mb-4 relative">
          <i className="fa-solid fa-star text-[#2c3e50]"></i>
        </div>

        <form className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="user_name"
              className={`mb-[7px] text-[#1abc9c] ${showName ? "" : "hidden"}`}
            >
              User Name:
            </label>
            <input
              onChange={handleName}
              type="text"
              name="floating_name"
              id="user_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
              placeholder="UserName"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="floating_age"
              className={`mb-[7px] text-[#1abc9c] ${showAge ? "" : "hidden"}`}
            >
              User Age:
            </label>
            <input
              onChange={handleAge}
              type="text"
              name="floating_age"
              id="floating_age"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
              placeholder="UserAge"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="floating_email"
              className={`mb-[7px] text-[#1abc9c] ${showEmile ? "" : "hidden"}`}
            >
              User Email:
            </label>
            <input
              onChange={handleEmile}
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
              placeholder="UserEmail"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="floating_pass"
              className={`mb-[7px] text-[#1abc9c] ${showPass ? "" : "hidden"}`}
            >
              User Password:
            </label>
            <input
              onChange={handlePass}
              type="password"
              name="floating_password"
              id="floating_pass"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
              placeholder="UserPassword"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-[#1abc9c] hover:bg-[#1abc9c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}