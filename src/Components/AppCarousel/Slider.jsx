import React from "react";
import AppButton from "../AppButton/AppButton";

const contentStyle = {
  height: "100%",

  color: "#fff",

  textAlign: "center",

  background: "#046da9",
};

const Slider = ({src, name, context}) => {
  return (
    <div>
      <div style={contentStyle}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 carousel mt-4">
              <h3>{name}</h3>
              <p>
                  {context}
                
              </p>
              <AppButton
                label={"Get a Quote"}
                withBg
                className={"border-0 rounded-pill"}
              />
            </div>
            <div className="col-sm">
              <img
                className="mx-auto"
                src={src}
                width="80%"
                height="80%"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
