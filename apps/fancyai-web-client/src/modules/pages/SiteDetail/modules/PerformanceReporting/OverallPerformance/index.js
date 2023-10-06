import Title from "antd/es/typography/Title";
import {
  StyledCard,
  StyledVisitorCard,
  StyledVisitorAction,
  StyledStateText,
  StyledVisitorCardAmount,
  StyledVisitorCardDescription,
  StyledTitle,
} from "./index.styled";
import { Row, Col } from "antd";
import StatGraphs from "./StatGraphs";
import BarGraphs from "./BarGraphs";

const stateData = [
  { name: "Jan", Clicks: 150, Impressions: 270 },
  { name: "Feb", Clicks: 250, Impressions: 200 },
  { name: "Mar", Clicks: 180, Impressions: 280 },
  { name: "Apr", Clicks: 278, Impressions: 250 },
  { name: "May", Clicks: 250, Impressions: 300 },
  { name: "Jun", Clicks: 350, Impressions: 250 },
  { name: "Jul", Clicks: 280, Impressions: 300 },
  { name: "Aug", Clicks: 340, Impressions: 240 },
  { name: "Sep", Clicks: 280, Impressions: 300 },
  { name: "Oct", Clicks: 400, Impressions: 270 },
  { name: "Nov", Clicks: 250, Impressions: 240 },
  { name: "Dec", Clicks: 400, Impressions: 270 },
];
const barData = [
  { name: "Jan", amt: 150 },
  { name: "Feb", amt: 250 },
  { name: "Mar", amt: 180 },
  { name: "Apr", amt: 278 },
  { name: "May", amt: 250 },
  { name: "Jun", amt: 350 },
  { name: "Jul", amt: 280 },
  { name: "Aug", amt: 340 },
  { name: "Sep", amt: 280 },
  { name: "Oct", amt: 400 },
  { name: "Nov", amt: 250 },
  { name: "Dec", amt: 400 },
];
const OverallPerformance = ({ prop1 }) => {
  return (
    <>
      <StyledCard bordered={false}>
        <StyledTitle level={5}>Overall Performance</StyledTitle>
      </StyledCard>
      <StyledCard bordered={false}>
        <Row gutter={18}>
          <Col xs={24} md={24} lg={12}>
            <StyledTitle level={5}>Revenue Gained</StyledTitle>
            <StyledVisitorCardAmount>$149</StyledVisitorCardAmount>
            <StyledVisitorCardDescription>
              $101 Yesterday
            </StyledVisitorCardDescription>
            <BarGraphs data={barData} keys="amt" />
          </Col>
          <Col xs={24} md={24} lg={12}>
            <StyledTitle level={5}>Est. Revenue Gain (10 Year)</StyledTitle>
            <StyledVisitorCardAmount>$24.149</StyledVisitorCardAmount>
            <StyledVisitorCardDescription>
              $10,101 Last Year
            </StyledVisitorCardDescription>
            <BarGraphs data={barData} keys="amt" />
          </Col>
        </Row>
      </StyledCard>
      <StyledVisitorCard
        title="Search Impressions & Clicks"
        extra={
          <StyledVisitorAction>
            <div className="visitor-action-view">
              <div className="visitor-action-item">
                <span
                  className="dot-visitor"
                  style={{ backgroundColor: "#0A8FDC" }}
                />
                Clicks
              </div>
              <div className="visitor-action-item">
                <span
                  className="dot-visitor"
                  style={{ backgroundColor: "#F04F47" }}
                />
                Impressions
              </div>
            </div>
            <StyledStateText>Last 15 Months</StyledStateText>
          </StyledVisitorAction>
        }
      >
        <StatGraphs data={stateData} XKey="Clicks" YKey="Impressions" />
      </StyledVisitorCard>
      <StyledVisitorCard
        title="Conversions & Revenue"
        extra={
          <StyledVisitorAction>
            <div className="visitor-action-view">
              <div className="visitor-action-item">
                <span
                  className="dot-visitor"
                  style={{ backgroundColor: "#0A8FDC" }}
                />
                Clicks
              </div>
              <div className="visitor-action-item">
                <span
                  className="dot-visitor"
                  style={{ backgroundColor: "#F04F47" }}
                />
                Impressions
              </div>
            </div>
            <StyledStateText>Last 15 Months</StyledStateText>
          </StyledVisitorAction>
        }
      >
        <StatGraphs data={stateData} XKey="Clicks" YKey="Impressions" />
      </StyledVisitorCard>
    </>
  );
};

export default OverallPerformance;
