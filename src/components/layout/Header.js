import React, { useState } from "react";
import Input from "./Input";

import City from "./City";
const Header = (props) => {
  return (
    <div className="header-background">
      <div className="header-inner-div">
        <div className="header-1">
          <div className="logo-div" style={{ cursor: "pointer" }}>
            <i className="fa fa-bolt" aria-hidden="true"></i>{" "}
            {/* <span style={{ marginLeft: "10px" }}>{props.brand}</span> */}
          </div>

          <div className="header-search">
            <div className="input-block">
              <Input />
            </div>
            <div className="input-logo">search</div>
          </div>
        </div>
        <div className="header-sub-heading">
          <div className="header-2">
            <City />
          </div>
        </div>
      </div>
    </div>
  );
};
Header.defaultProps = {
  brand: "WEATHER FORECAST",
};
export default Header;
