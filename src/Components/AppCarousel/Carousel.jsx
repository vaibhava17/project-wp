import { Carousel } from "antd";
import Slide from "./Slide";

const AppCarousel = ({ src }) => {
  return (
    <Carousel autoplay>
      {src.map((item, i) => (
        <Slide
          src={item.img}
          name={item.name}
          context={item.context}
          index={item.id}
          key={i}
        />
      ))}
    </Carousel>
  );
};
export default AppCarousel;
