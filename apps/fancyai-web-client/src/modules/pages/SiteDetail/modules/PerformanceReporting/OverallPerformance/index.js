import Title from "antd/es/typography/Title";
import {
  StyledCard,
  StyledVisitorCard,
  StyledVisitorAction,
  StyledStateText,
  StyledVisitorCardAmount,
  StyledVisitorCardDescription,
  StyledTitle,
  StyledHeaderCard,
} from "./index.styled";
import { Row, Col } from "antd";
import StatGraphs from "./StatGraphs";
import BarGraphs from "./BarGraphs";
import { useSiteDetail } from "@crema/modules/siteDetail";
import {
  useFetchConversionsRevenueQuery,
  useFetchRevenueDataQuery,
  useFetchSearchImpressionClickQuery,
} from "apps/fancyai-web-client/src/core/api/apiPerformanceReport";
import {
  parse15MonthLineChartData,
  parseBarChartData,
  parseLineChartData,
} from "../Utils";
import AppLoader from "@crema/components/AppLoader";

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
const OverallPerformance = ({ prop1 }) => {
  const { id: siteId } = useSiteDetail();

  const { data, isLoading: revenueDataLoading } = useFetchRevenueDataQuery(
    {
      siteId,
    },
    {
      skip: !Boolean(siteId),
    }
  );

  const revenueData = data?.data;

  const {
    data: searchImpressionClickData,
    isLoading: searchImpressionClickLoading,
  } = useFetchSearchImpressionClickQuery(
    {
      siteId,
    },
    {
      skip: !Boolean(siteId),
    }
  );

  const { data: conversionsRevenueData, isLoading: conversionsRevenueLoading } =
    useFetchConversionsRevenueQuery(
      {
        siteId,
      },
      {
        skip: !Boolean(siteId),
      }
    );

  return (
    <>
      <StyledHeaderCard bordered={false}>
        <StyledTitle level={5}>Overall Performance</StyledTitle>
      </StyledHeaderCard>
      <StyledCard bordered={false}>
        {revenueDataLoading ? (
          <AppLoader />
        ) : (
          <Row gutter={18}>
            <Col xs={24} md={24} lg={12}>
              <StyledTitle level={5}>Revenue Gained</StyledTitle>
              <StyledVisitorCardAmount>
                ${revenueData?.revenueToday?.toLocaleString() ?? 0}
              </StyledVisitorCardAmount>
              <StyledVisitorCardDescription>
                ${revenueData?.revenueYesterday?.toLocaleString() ?? 0}{" "}
                Yesterday
              </StyledVisitorCardDescription>
              <BarGraphs
                data={parseBarChartData(revenueData?.thisYearData, "revenue")}
                keys="amt"
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <StyledTitle level={5}>Est. Revenue Gain (10 Year)</StyledTitle>
              <StyledVisitorCardAmount>
                ${revenueData?.tenYearRevenue?.toLocaleString() ?? 0}
              </StyledVisitorCardAmount>
              <StyledVisitorCardDescription>
                ${revenueData?.lastYearRevenue?.toLocaleString() ?? 0} Last Year
              </StyledVisitorCardDescription>
              <BarGraphs
                data={parseBarChartData(revenueData?.lastYearData, "revenue")}
                keys="amt"
              />
            </Col>
          </Row>
        )}
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
        {searchImpressionClickLoading ? (
          <AppLoader />
        ) : (
          <StatGraphs
            data={parse15MonthLineChartData(
              searchImpressionClickData?.data,
              "searchImpressions",
              "searchClicks",
              "Impressions",
              "Clicks"
            )}
            XKey="Clicks"
            YKey="Impressions"
          />
        )}
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
        {conversionsRevenueLoading ? (
          <AppLoader />
        ) : (
          <StatGraphs
            data={parse15MonthLineChartData(
              conversionsRevenueData?.data,
              "revenue",
              "conversions",
              "Revenue",
              "Conversions"
            )}
            XKey="Revenue"
            YKey="Conversions"
          />
        )}
      </StyledVisitorCard>
    </>
  );
};

export default OverallPerformance;
