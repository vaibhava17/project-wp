import { Carousel } from "antd";
import Slider from "./Slider";

const AppCarousel = ({ src }) => {
  return (
    <Carousel autoplay>
      {src.map((item, index) => (
        <Slider src={item.img} name={item.name} context={item.context} key={index}/>
      ))}
    </Carousel>
  );
};
export default AppCarousel;


