import Title from "antd/es/typography/Title";
import {
  StyledAnalysisBody,
  StyledAnalysisPane,
  StyledAnalysisTitle,
} from "./index.styled";
import { Card } from "antd";
import AppCard from "@crema/components/AppCard";

const StrategicAnalysis = ({ prop1 }) => {
  return (
    <AppCard bordered={false}>
      <Title level={5}>Strategic Analysis</Title>
      <StyledAnalysisPane>
        <StyledAnalysisTitle>Long-Term Analysis</StyledAnalysisTitle>
        <StyledAnalysisBody>
          Discover an all-in-one SEO platform equipped with a user-friendly
          landing page and web application. Harness the power of AI to
          effortlessly boost your website's visibility and rankings, providing
          an edge in the competitive digital landscape. Elevate your online
          presence with intelligent SEO tools that optimize content, keywords,
          and strategy, all within a seamless and intuitive platform.
        </StyledAnalysisBody>
      </StyledAnalysisPane>
      <StyledAnalysisPane>
        <StyledAnalysisTitle>Short-Term Analysis</StyledAnalysisTitle>
        <StyledAnalysisBody>
          Discover an all-in-one SEO platform equipped with a user-friendly
          landing page and web application. Harness the power of AI to
          effortlessly boost your website's visibility and rankings, providing
          an edge in the competitive digital landscape. Elevate your online
          presence with intelligent SEO tools that optimize content, keywords,
          and strategy, all within a seamless and intuitive platform.
        </StyledAnalysisBody>
      </StyledAnalysisPane>
      <StyledAnalysisPane>
        <StyledAnalysisTitle>Market Analysis</StyledAnalysisTitle>
        <StyledAnalysisBody>
          Discover an all-in-one SEO platform equipped with a user-friendly
          landing page and web application. Harness the power of AI to
          effortlessly boost your website's visibility and rankings, providing
          an edge in the competitive digital landscape. Elevate your online
          presence with intelligent SEO tools that optimize content, keywords,
          and strategy, all within a seamless and intuitive platform.
        </StyledAnalysisBody>
      </StyledAnalysisPane>
      <StyledAnalysisPane>
        <StyledAnalysisTitle>Recommendations</StyledAnalysisTitle>
        <StyledAnalysisBody>
          Discover an all-in-one SEO platform equipped with a user-friendly
          landing page and web application. Harness the power of AI to
          effortlessly boost your website's visibility and rankings, providing
          an edge in the competitive digital landscape. Elevate your online
          presence with intelligent SEO tools that optimize content, keywords,
          and strategy, all within a seamless and intuitive platform.
        </StyledAnalysisBody>
      </StyledAnalysisPane>
    </AppCard>
  );
};

export default StrategicAnalysis;
