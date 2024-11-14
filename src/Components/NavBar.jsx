import React, { useState, useEffect } from "react";

function NavBar({ type, variant, className, children }) {
  return (
    <nav className={className ? `nav-component ${className}` : "nav-component"}>
      {children}
    </nav>
  );
}

export default NavBar;
