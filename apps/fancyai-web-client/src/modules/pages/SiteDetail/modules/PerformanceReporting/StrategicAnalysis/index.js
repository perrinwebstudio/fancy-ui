import Title from "antd/es/typography/Title";
import {
  StyledAnalysisBody,
  StyledAnalysisPane,
  StyledAnalysisTitle,
} from "./index.styled";
import { Card, Row } from "antd";
import AppCard from "@crema/components/AppCard";
import { useFetchStrageticAnalysisQuery } from "apps/fancyai-web-client/src/core/api/apiPerformanceReport";
import { useSiteDetail } from "@crema/modules/siteDetail";
import AppLoader from "@crema/components/AppLoader";

const StrategicAnalysis = ({ prop1 }) => {
  const { id: siteId } = useSiteDetail();

  const { data, isLoading } = useFetchStrageticAnalysisQuery(
    {
      siteId,
    },
    {
      skip: !Boolean(siteId),
    }
  );

  const analysisData = data?.data;

  return (
    <AppCard
      bordered={false}
      style={{ marginBottom: "12px", padding: "18px 12px" }}
    >
      {isLoading ? (
        <Row style={{ minHeight: 400 }}>
          <AppLoader />
        </Row>
      ) : (
        <>
          <Title level={5}>Strategic Analysis</Title>
          <StyledAnalysisPane>
            <StyledAnalysisTitle>Long-Term Analysis</StyledAnalysisTitle>
            <StyledAnalysisBody>
              {analysisData?.longTermAnalysis ? analysisData?.longTermAnalysis : "Your site and industry are being analyzed and your analysis will be available within the next few days"}
            </StyledAnalysisBody>
          </StyledAnalysisPane>
          <StyledAnalysisPane>
            <StyledAnalysisTitle>Short-Term Analysis</StyledAnalysisTitle>
            <StyledAnalysisBody>
              {analysisData?.shortTermAnalysis ? analysisData?.shortTermAnalysis : "Your site and industry are being analyzed and your analysis will be available within the next few days"}
            </StyledAnalysisBody>
          </StyledAnalysisPane>
          <StyledAnalysisPane>
            <StyledAnalysisTitle>Market Analysis</StyledAnalysisTitle>
            <StyledAnalysisBody>
              {analysisData?.marketAnalysis ? analysisData?.marketAnalysis : "Your site and industry are being analyzed and your analysis will be available within the next few days"}
            </StyledAnalysisBody>
          </StyledAnalysisPane>
          <StyledAnalysisPane>
            <StyledAnalysisTitle>Recommendations</StyledAnalysisTitle>
            <StyledAnalysisBody>
              {analysisData?.recommendations ? analysisData?.recommendations : "Your site and industry are being analyzed and your analysis will be available within the next few days"}
            </StyledAnalysisBody>
          </StyledAnalysisPane>
        </>
      )}
    </AppCard>
  );
};

export default StrategicAnalysis;
