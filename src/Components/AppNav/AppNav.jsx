import React from "react";
import logo from "../../Assets/images/logo/logo.png";
import navcss from "./AppNav.module.css";

const AppNav = (props) => {
  return (
    <>
      <div className="nav d-flex justify-content-between px-3 bg-warning bg-gradient align-items-center">
        <div className="nav-items">
          <img src={logo} alt="logo" className={navcss.logo} />
        </div>
        <div className="nav-items">
          <ul className="row list-unstyled m-0">
            <li className="nav-links col">Home</li>
            <li className="nav-links col">About</li>
            <li className="nav-links col">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppNav;
