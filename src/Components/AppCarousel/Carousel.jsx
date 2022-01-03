import { Carousel } from "antd";
import AppButton from "../AppButton/AppButton";

const contentStyle = {
  height: "100%",

  color: "#fff",

  textAlign: "center",

  background: "#046da9",
};

const AppCarousel = ({ src, sr, seo, graphics }) => {
  return (
    <Carousel autoplay>
      <div>
        <div style={contentStyle}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-7 carousel mt-4">
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
      <div>
        <div style={contentStyle}>
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-sm ">
                <img
                  className="mx-auto"
                  src={sr}
                  width="105%"
                  height="105%"
                  alt="logo"
                />
              </div>
              <div className="col-sm-7 carousel ">
                <h3>Website designing and development </h3>
                <p>
                  Web design is a profession where a person designs a web page
                  or a web site. The web page can have graphics, music,
                  animations, and many other things on it. Some web design is
                  done for businesses, and some is done for individual people.
                  Some web designs are used a lot and have standard templates
                  that are free for people to use
                </p>
                <button className="btn btn-danger">Know more</button>
                <hr></hr>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-sm ">
                <img
                  className="mx-auto"
                  src={seo}
                  width="80%"
                  height="80%"
                  alt="logo"
                />
              </div>
              <div className="col-sm-7 carousel ">
                <h3>SEO (Search Engine Optimization)</h3>
                <p>
                  Google (or any search engine you're using) has a crawler that
                  goes out and gathers information about all the content they
                  can find on the Internet. The crawlers bring all those 1s and
                  0s back to the search engine to build an index. That index is
                  then fed through an algorithm that tries to match all that
                  data with your query.
                </p>
                <button className="btn btn-danger">Know more</button>
                <hr></hr>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-sm ">
                <img
                  className="mx-auto"
                  src={graphics}
                  width="65%"
                  height="65%"
                  alt="logo"
                />
              </div>
              <div className="col-sm-7 carousel ">
                <h3>Logo And GFX Graphics Designing</h3>
                <ul>
                  <li>Visual identity graphic design</li>
                  <li>Marketing & advertising graphic design.</li>
                  <li>User interface graphic design</li>
                  <li>Publication graphic design</li>
                  <li>Packaging graphic design</li>
                  <li>Motion graphic design</li>
                  <li>Environmental graphic design</li>
                  <li>Art and illustration for graphic design</li>
                </ul>
                <button className="btn btn-danger">Know more</button>
                <hr></hr>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default AppCarousel;
