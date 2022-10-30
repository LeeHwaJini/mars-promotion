import React from "react";
import "./index.scss";

const Header = ({ children, ...rest }) => {

  console.log(rest);

  return (
    <div className="header" {...rest}>
      <div className="header-arrow-prev"></div>
      <div className="header-title">{children}</div>
    </div>
  );
};

export default Header;
