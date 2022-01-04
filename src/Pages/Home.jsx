import React from "react";
import AppCarousel from "../Components/AppCarousel/Carousel";
import img from "../Assets/images/carousel/c6.png";
import img2 from "../Assets/images/carousel/c7.png";
import img3 from "../Assets/images/carousel/seo.png";
import img4 from "../Assets/images/carousel/graphics.png";
import AppServices from "../Components/AppServices/Services";

const Home = (props) => {
  return (
    <>
      <AppCarousel src={img} sr={img2} seo={img3} graphics={img4} />
      <AppServices />
    </>
  );
};

export default Home;
