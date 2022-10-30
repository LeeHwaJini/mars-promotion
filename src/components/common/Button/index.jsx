import React from "react";
import "./index.scss";

const Button = ({ children, size, theme, ...rest }) => {

  console.log(rest);

  return (
    <button className={`Button ${size} ${theme}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
