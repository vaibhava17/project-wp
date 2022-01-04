import { Card, Col, Row, Tabs } from "antd";

const { TabPane } = Tabs;

const AppServices = ({}) => {
  return (
    <>
      <div className="container p-5 ">
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default AppServices;
