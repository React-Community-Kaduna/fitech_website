import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import logo from "../assets/logo.png";
import Button from "../Components/Button";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AiOutlineBlock } from "react-icons/ai";
import { CiCloudOn } from "react-icons/ci";
import { DiIllustrator } from "react-icons/di";
import { IoGlobeOutline } from "react-icons/io5";
import bkg from "../assets/back.jpeg";

function Card({ tag, img, title, description }) {
  return (
    <div className="md:w-[411px] w-full flex flex-col items-center justify-center gap-4 p-4">
      <div className="w-full h-[60%] flex items-center justify-center">
        <img src={img.bkg} alt="" />
      </div>
      <span></span>
      <h3 className="text-xl font-semibold"></h3>
      <p className="text-center"></p>
    </div>
  );
}

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
      </NavBar>
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-[70px] md:mt-[100px] lg:mt-[150px] overflow-x-hidden">
        <div className="w-full flex flex-col">
          <h3>Discover Topics</h3>
          <p className="my-5">
            Discover hot topics, discussions, webinars and more
          </p>
          <div className="flex gap-3">
            <Button className="w-[80px] h-[60px] p-3 bg-[#1E90FF] text-white rounded-lg text-[10px] flex flex-col items-center justify-center">
              <span className="text-[22px]">
                <AiOutlineBlock />
              </span>
              All Topics
            </Button>
            <Button className="w-[80px] h-[60px] p-3  border-2 border-gray-400 rounded-lg text-[10px] flex flex-col items-center justify-center">
              <span className="text-[22px]">
                <AiOutlineBlock />
              </span>
              Blochchain
            </Button>
            <Button className="w-[80px] h-[60px] p-3 leading-3  border-2 border-gray-400 rounded-lg text-[10px] flex flex-col items-center justify-center">
              <span className="mb-1 text-[22px]">
                <IoGlobeOutline />
              </span>
              Web Development
            </Button>
            <Button className="w-[80px] h-[60px] p-3 leading-3  border-2 border-gray-400 rounded-lg text-[10px] flex flex-col items-center justify-center">
              <span className="mb-1 text-[22px]">
                <DiIllustrator />
              </span>
              Data Science
            </Button>
            <Button className="w-[80px] h-[60px] p-3 leading-3 border-2 border-gray-400 rounded-lg text-[10px] flex flex-col items-center justify-center">
              <span className="mb-1 text-[22px]">
                <CiCloudOn />
              </span>
              Cloud Computing
            </Button>
          </div>
        </div>
        <section className="w-full mt-10">
          <h3>Upcoming Events</h3>
          <div>
            <Card />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Events;
