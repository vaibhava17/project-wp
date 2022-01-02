import { Carousel } from "antd";

const contentStyle = {
  height: "",

  color: "#fff",

  textAlign: "center",

  background: "#046da9",
};

const AppCarousel = ({ src }) => {
  return (
    <Carousel>
      <div>
        <div style={contentStyle}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-7 carousel ">
                <h3>Grow Your Business Online With Us</h3>
                <p>
                  When everything is online then why are'nt you? Take your
                  buisness online and reach the people all over the world not
                  just in Bareilly or UP. Create your professional looking
                  website design today. Or already have a website looking to
                  take it one step ahead? We will develop your website with the
                  look you imagined. Just Contact Us!! Support local developers
                  from Bareilly. Take a tour of our website and browse through
                  amazing web development plans today!
                </p>
              </div>
              <div className="col-sm">
                <img className="mx-auto" src={src} width="80%" height="80%" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>ksndkln</div>
      </div>
      <div>
        <div style={contentStyle}></div>
      </div>
      <div>
        <div style={contentStyle}></div>
      </div>
    </Carousel>
  );
};
export default AppCarousel;
