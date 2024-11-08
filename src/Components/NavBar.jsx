import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  let Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Trainings",
      link: "/trainings",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <img className="w-[150px]" src={logo} alt="Community logo" />
        </div>
        <button
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen((e) => !e)}
        >
          {isMenuOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
        </button>
        <ul
          className={`md:flex md:items-center md:pb-5 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-5 transition-all duration-500 ease-in ${
            isMenuOpen ? "top-10 opacity-100" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <span className="flex flex-col md:flex-row gap-5 md:ml-[200px]">
            <Button className="bg-[#1E90FF] px-5 py-3 rounded md:ml-8 hover:bg-gray-500 duration-500 text-[white]">
              Join Us
            </Button>
            <Button className="bg-none border-2 px-5 py-3 rounded hover:bg-gray-500 hover:text-white duration-500">
              Contact Us
            </Button>
          </span>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
