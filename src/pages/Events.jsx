import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import logo from "../assets/logo.png";
import Button from "../Components/Button";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Events() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col bg-none">
      <NavBar className="w-full fixed top-0 left-0 z-50 bg-[#e5e5e5]">
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
            className={`md:flex md:items-center md:pb-5 pb-10 absolute md:static bg-[#e5e5e5] md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-5 transition-all duration-500 ease-in ${
              isMenuOpen ? "top-0 opacity-100 pt-14" : "top-[-490px]"
            }`}
          >
            {/* Menu items */}
            <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500">
              <Link to="/about">About</Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500">
              <Link to="/training">Trainings</Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500">
              <Link to="/events">Events</Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500">
              <Link to="/blog">Blogs</Link>
            </li>

            <span className="flex flex-col md:flex-row gap-5 lg:ml-[130px]">
              <Button className="bg-[#1E90FF] p-3 rounded-lg md:ml-8 hover:bg-gray-500 duration-500 text-[white]">
                Join Us
              </Button>
              <Button className="bg-none px-5 py-3 border-2 border-white rounded-lg hover:bg-gray-500 hover:text-white duration-500">
                Contact Us
              </Button>
            </span>
          </ul>
        </div>
      </NavBar>
      <div className="w-full h-[300px] mt-[200px] flex flex-col justify-center items-center text-4xl text-green-700">
        <h1>Coming soon</h1>
        <p>Our developers are working on it</p>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
