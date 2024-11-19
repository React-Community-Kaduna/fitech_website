/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";

function Button({ type, variant, className, children }) {
  return (
    <button
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
    >
      {children}
    </button>
  );
}

export default Button;