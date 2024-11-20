/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../Components/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  // { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#e5e5e5]">
      <div className="md:flex items-center justify-between py-4 px-7 z-50">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
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
        <ul
          className={`md:w-full md:flex md:items-center md:pb-5 pb-10 absolute md:static bg-[#e5e5e5] md:bg-transparent md:z-auto z-[-1] left-0 w-full md:pl-16 p-5 transition-all duration-500 ease-in ${
            isMenuOpen ? "top-0 opacity-100 pt-14" : "top-[-490px]"
          }`}
        >
          {/* Menu items */}
          {navigation.map((item) => (
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                className={({ isActive }) => {
                  console.log(item.href + " " + isActive);
                  return (
                    "px-3 py-2 rounded-md duration-500" +
                    (isActive
                      ? "bg-white text-gray-900"
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
          <span className="flex flex-col md:flex-row gap-5 lg:ml-[130px]">
            <a href="https://discord.gg/9REgpp5r">
              <Button className="bg-[#1E90FF] p-3 rounded-lg md:ml-8 hover:bg-gray-500 duration-500 text-[white]">
                Join Us
              </Button>
            </a>
            <Button className="bg-none px-5 py-3 border-2 border-white rounded-lg hover:bg-gray-500 hover:text-white duration-500">
              Contact Us
            </Button>
          </span>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
