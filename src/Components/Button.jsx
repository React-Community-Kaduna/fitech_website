/* eslint-disable react/no-unknown-property */
import React from "react";

function Button({ type, variant, className, onClick, children }) {
  return (
    <button
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
