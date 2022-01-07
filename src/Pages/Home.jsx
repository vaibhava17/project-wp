import React from "react";
import AppCarousel from "../Components/AppCarousel/Carousel";
import img from "../Assets/images/carousel/c6.png";
import img2 from "../Assets/images/carousel/c7.png";
import img3 from "../Assets/images/carousel/seo.png";
import img4 from "../Assets/images/carousel/graphics.png";
import web from "../Assets/images/services/web.png";
import seo from "../Assets/images/services/seo.png";
import graphic from "../Assets/images/services/graphic.png";
import AppServices from "../Components/AppServices/Services";

const carouselData = [
  {
    img: img,
    name: "Grow your business online with us",
    context: "When everything is online then why are'nt you? Take your buisness online and reach the people all over the world not just in Bareilly or UP. Create your professional looking websitedesign today. Or already have a website looking to take it one step ahead? We will develop your website with the look you imagined. Just Contact Us!! Support local developers from Bareilly. Take a tour of our website and browse through amazing web development plans today!",
  },
  {
    img: img2,
    name: "Website designing and development",
    context: "Web design is a profession where a person designs a web page or a web site. The web page can have graphics, music, animations, and many other things on it. Some web design is done for businesses, and some is done for individual people. Some web designs are used a lot and have standard templates that are free for people to use",
  },
  {
    img: img3,
    name: "SEO (Search Engine Optimization)",
    context: "Google (or any search engine you're using) has a crawler that goes out and gathers information about all the content they can find on the Internet. The crawlers bring all those 1s and 0s back to the search engine to build an index. That index is then fed through an algorithm that tries to match all that data with your query.",
  },
  {
    img: img4,
    name: "Logo And GFX Graphics Designing",
    context: "Visual identity graphic design, Marketing & advertising graphic design, User interface graphic design, Publication graphic design, Packaging graphic design, Motion graphic design, Environmental graphic design, Art and illustration for graphic design",
  }
]

const Home = (props) => {
  return (
    <>
      <AppCarousel src={carouselData} />
      <AppServices web={web} seo={seo} graphic={graphic}/>
    </>
  );
};

export default Home;
