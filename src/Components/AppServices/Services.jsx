import { Card, Col, Row, Tabs } from "antd";

const AppServices = ({ web, seo, graphic }) => {
  return (
    <>
      <div className="container p-5 ">
        <div className="site-card-wrapper">
          <Row gutter={16} className="mx-auto">
            <Col className="text-center mb-3" sm={8}>
              <Card
                title="Web Designing and Development "
                bordered={false}
                className="h-100 w-100"
              >
                <img src={web} height="40%" width="40%" />

                <p className="text-start p-1">
                  Web design is a profession where a person designs a web page
                  or a web site. The web page can have graphics, music,
                  animations, and many other things on it. Some web design is
                  done for businesses, and some is done for individual people.
                  Some web designs are used a lot and have standard templates
                  that are free for people to use
                </p>
              </Card>
            </Col>
            <Col className="text-center  mb-3" sm={8}>
              <Card
                title="SEO (Search Engine Optimization)"
                bordered={false}
                className="h-100"
              >
                <img src={seo} height="50%" width="50%" />

                <p className="text-start p-4">
                  SEO stands for Search Engine Optimization, which is the
                  practice of increasing the quantity and quality of traffic to
                  your website through organic search engine results.
                </p>
              </Card>
            </Col>
            <Col className="text-center mb-3" sm={8}>
              <Card
                title="Logo And GFX Graphics Designing"
                bordered={false}
                className="h-100"
              >
                <img src={graphic} height="40%" width="40%" />
                <p className="text-start">
                  Graphic design is the process of visual communication through
                  the use of typography, photography, iconography and
                  illustration. The field is considered a subset of visual
                  communication and communication design,.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default AppServices;
