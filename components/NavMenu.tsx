import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const NavMenu: NextPage<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="flex items-center justify-end bg-slate-300 p-2 dark:bg-slate-700 dark:text-slate-100">
        <div className="z-10 mr-auto block bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-2xl font-bold -tracking-wider text-transparent">
          LOGO
        </div>
        <button
          onClick={toggleMenu}
          className="menu rounded border border-indigo-300 sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <div className="hidden bg-slate-200 sm:flex">
          <div className="m-1 bg-yellow-400 p-2 text-white">home</div>
          <div className="m-1 bg-yellow-400 p-2 text-white">about</div>
          <div className="m-1 bg-yellow-400 p-2 text-white">contact</div>
        </div>
      </div>
      <div
        className={`ease-in-outdark:text-slate-100 absolute w-full transform bg-slate-300 py-3 transition-transform delay-150 duration-500 ${
          !isOpen ? "-translate-y-80" : "translate-y-0"
        } sm:-translate-y-80`}
      >
        <div className="m-1 bg-yellow-400 p-2 text-white">home</div>
        <div className="m-1 bg-yellow-400 p-2 text-white">about</div>
        <div className="m-1 bg-yellow-400 p-2 text-white">contact</div>
      </div>
    </div>
  );
};

export default NavMenu;
