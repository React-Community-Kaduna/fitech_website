import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[102px] flex justify-around items-center sticky top-0 py-5 px-10 bg-white">
      <div className="w-full px-5 flex justify-between items-center">
        <img className="w-[100px]" src={logo} alt="Community logo" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-4 top-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-10 items-center text-black">
          <p>Home</p>
          <p>About</p>
          <p>Training</p>
          <p>Blog</p>
          <div className="flex flex-row gap-5 items-center">
            <Button />
            <Button />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white p-5 flex flex-col gap-3 items-center shadow-md">
          <p>Home</p>
          <p>About</p>
          <p>Training</p>
          <p>Blog</p>
          <div className="flex flex-row gap-5 items-center">
            <Button />
            <Button />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
