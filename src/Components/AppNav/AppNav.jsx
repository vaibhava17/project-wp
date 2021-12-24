import React from "react";

const AppNav = (props) => {
  return (
    <>
      <div className="nav d-flex justify-content-between p-3 bg-warning align-items-center">
        <div className="nav-items">
          <h1>AppNav</h1>
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
