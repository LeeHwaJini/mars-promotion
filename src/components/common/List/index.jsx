import React from "react";
import "./index.scss";

const List = ({ children, type, ...rest }) => {

  return (
    <div className={`List ${type}`} {...rest}>
      <div className="prj-icon"></div>
      <div className="prj-title-content">
        <div className="prj-title-area">
          <div className="prj-title">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default List;
