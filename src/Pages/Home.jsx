import React from "react";
import AppCarousel from "../Components/AppCarousel/Carousel";

import web from "../Assets/images/services/web.png";
import seo from "../Assets/images/services/seo.png";
import graphic from "../Assets/images/services/graphic.png";
import AppServices from "../Components/AppServices/Services";
import carouselData  from "../Data/HomeCarousel";


const Home = (props) => {
  return (
    <>
      <AppCarousel src={carouselData} />
      <AppServices web={web} seo={seo} graphic={graphic} />
    </>
  );
};

export default Home;
