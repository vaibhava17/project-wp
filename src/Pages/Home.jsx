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


const Home = (props) => {
  return (
    <>
      <AppCarousel src={img} sr={img2} seo={img3} graphics={img4} />
      <AppServices web={web} seo={seo} graphic={graphic}/>
    </>
  );
};

export default Home;
