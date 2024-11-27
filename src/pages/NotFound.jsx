import React, { useState, useEffect } from "react";
import NavBar, { PageNavBar } from "../Components/NavBar";
import Footer from "../Components/Footer";

import logo from "../assets/logo.png";
import Button from "../Components/Button";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { LucideTrafficCone } from "lucide-react";

function NotFound() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col bg-none">
      <PageNavBar />
      <div className="w-full h-[400px] mt-[200px] flex flex-col justify-center items-center gap-y-8 text-4xl text-gray-700">
        <LucideTrafficCone size={160} strokeWidth={1} color="#FF872B" />
        <h3 className="font-medium">Development in Progress</h3>
        <h4>Check back soon</h4>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
