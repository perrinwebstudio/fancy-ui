import {
  SiteDetailSubMenuVertical,
  useSiteDetail,
} from "@crema/modules/siteDetail";
import { Card, Col, Row } from "antd";
import StrategicAnalysis from "./StrategicAnalysis";
import OverallPerformance from "./OverallPerformance";
import KeywordPerformance from "./KeywordPerformance";
import SitePerformance from "./SitePerformance";
import SearchPerformance from "./SearchPerformance";
import UserPerformance from "./UserPerformance";

const SitePerformanceReporting = ({ prop1 }) => {
  const { id, subMenu } = useSiteDetail();

  return (
    <Row gutter={20}>
      <Col xs={8} lg={5}>
        <SiteDetailSubMenuVertical />
      </Col>
      <Col xs={16} lg={19}>
        {subMenu === "strategic_analysis" && <StrategicAnalysis />}
        {subMenu === "overall_performance" && <OverallPerformance />}
        {subMenu === "keyword_performance" && <KeywordPerformance />}
        {subMenu === "site_performance" && <SitePerformance />}
        {subMenu === "search_performance" && <SearchPerformance />}
        {subMenu === "user_performance" && <UserPerformance />}
      </Col>
    </Row>
  );
};

export default SitePerformanceReporting;
