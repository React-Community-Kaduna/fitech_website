import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function NavBar({ type, variant, className, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={className ? `btn-component ${className}` : "btn-component"}>
      {children}
    </nav>
  );
}

export default NavBar;
