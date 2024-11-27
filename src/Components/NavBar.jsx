import React, { useState, useEffect } from "react";

// eslint-disable-next-line no-unused-vars
function NavBar({ type, variant, className, children }) {
  return (
    <nav className={className ? `nav-component ${className}` : "nav-component"}>
      {children}
    </nav>
  );
}

export default NavBar;