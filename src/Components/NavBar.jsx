import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./Button";
import { navigationList } from "../constants";
import { LucidePhone } from "lucide-react";

// eslint-disable-next-line no-unused-vars
function NavBar({ type, variant, className, children }) {
  return (
    <nav className={className ? `nav-component ${className}` : "nav-component"}>
      {children}
    </nav>
  );
}

export function NavBarContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:flex items-center justify-between px-7 z-50 bg-[#FAFAFAFF] md:bg-[#FAFAFA44] md:backdrop-blur-2xl">
      <div className="font-bold py-5 text-2xl cursor-pointer flex items-center">
        <Link to="/">
          <img className="w-[150px]" src={logo} alt="Community logo" />
        </Link>
      </div>
      <button
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        onClick={() => setIsMenuOpen((e) => !e)}
      >
        {isMenuOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
      </button>
      <div
        className={`md:flex md:items-center md:pb-5 pb-10 absolute md:static bg-[#FAFAFAEE] backdrop-blur-md md:backdrop-blur-none md:bg-transparent md:z-auto z-[-1] left-0 w-full h-screen lg:h-auto md:w-auto md:pl-0 p-5 gap-5 transition-all duration-400 ease-in ${isMenuOpen ? "top-0 opacity-100 pt-14" : "top-[-100dvh] lg:top-[-500px]"
          }`}
      >
        {/* Menu items */}
        <ul className="md:flex md:items-center md:static bg-transparent md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in">
          {navigationList.map((item) => (
            <li key={item.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                className={({ isActive }) => {
                  return (
                    "px-3 py-2 z-50 rounded-md duration-500" +
                    (isActive
                      ? "bg-gray-900 underline decoration-4 decoration-blue-500 underline-offset-8"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white")
                  );
                }}
                key={item.name}
                to={item.href}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <span className="flex flex-col items-center md:flex-row gap-5">
          <Link to="/registration">
            <Button className="bg-[#1E90FF] border-2 border-[#1E90FF] w-auto p-3 rounded-lg md:ml-8 hover:bg-gray-500 duration-500 text-[white]">
              Register Now
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="group flex flex-row items-center gap-x-3 bg-none px-5 py-3 border border-[#BBBBBB] rounded-lg hover:bg-gray-200 hover:text-black duration-500">
              <LucidePhone size={16} className="group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" /> Contact Us
            </Button>
          </Link>
        </span>
      </div>
    </div>
  )
}

export function PageNavBar() {
  return (
    <NavBar className="w-full fixed top-0 left-0 z-50">
      <NavBarContent />
    </NavBar>
  )
}

export default NavBar;
