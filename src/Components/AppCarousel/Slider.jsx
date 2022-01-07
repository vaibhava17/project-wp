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
                {/* When everything is online then why are'nt you? Take your
                buisness online and reach the people all over the world not just
                in Bareilly or UP. Create your professional looking website
                design today. Or already have a website looking to take it one
                step ahead? We will develop your website with the look you
                imagined. Just Contact Us!! Support local developers from
                Bareilly. Take a tour of our website and browse through amazing
                web development plans today! */}
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
