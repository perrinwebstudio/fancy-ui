import {
  SiteDetailSubMenuVertical,
  useSiteDetail,
} from "@crema/modules/siteDetail";
import { Card, Col, Row } from "antd";
import StrategicAnalysis from "./StrategicAnalysis";

const SitePerformanceReporting = ({ prop1 }) => {
  const { id, subMenu } = useSiteDetail();

  return (
    <Row gutter={20}>
      <Col lg={7} xl={6}>
        <SiteDetailSubMenuVertical />
      </Col>
      <Col lg={17} xl={18}>
        <Card bordered={false}>
          {subMenu === "strategic_analysis" && <StrategicAnalysis />}
        </Card>
      </Col>
    </Row>
  );
};

export default SitePerformanceReporting;
