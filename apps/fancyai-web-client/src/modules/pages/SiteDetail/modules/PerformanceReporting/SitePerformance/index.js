import {
  StyledCard,
  StyledVisitorCard,
  StyledVisitorAction,
  StyledStateText,
  StyledTitle,
} from "./index.styled";
import { Row, Col } from "antd";
import StatGraphs from "./StatGraphs";
import AppSelect from "@crema/components/AppSelect";

const stateData = [
  { name: "Jan", "Past 12 mo": 150, "Previous 12 mo": 270 },
  { name: "Feb", "Past 12 mo": 250, "Previous 12 mo": 200 },
  { name: "Mar", "Past 12 mo": 180, "Previous 12 mo": 280 },
  { name: "Apr", "Past 12 mo": 278, "Previous 12 mo": 250 },
  { name: "May", "Past 12 mo": 250, "Previous 12 mo": 300 },
  { name: "Jun", "Past 12 mo": 350, "Previous 12 mo": 250 },
  { name: "Jul", "Past 12 mo": 280, "Previous 12 mo": 300 },
  { name: "Aug", "Past 12 mo": 340, "Previous 12 mo": 240 },
  { name: "Sep", "Past 12 mo": 280, "Previous 12 mo": 300 },
  { name: "Oct", "Past 12 mo": 400, "Previous 12 mo": 270 },
  { name: "Nov", "Past 12 mo": 250, "Previous 12 mo": 240 },
  { name: "Dec", "Past 12 mo": 400, "Previous 12 mo": 270 },
];

const SitePerformance = ({ prop1 }) => {
  return (
    <>
      <StyledCard bordered={false}>
        <StyledTitle level={10}>Total ranked keywords</StyledTitle>
      </StyledCard>
      <Row gutter={18}>
        <Col xs={24} md={24} lg={12}>
          <StyledVisitorCard
            title="Total ranked keywords"
            extra={
              <StyledVisitorAction>
                <div className="visitor-action-view">
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#0A8FDC", fontSize: 12 }}
                    />
                    Past 12 mo
                  </div>
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#F04F47", fontSize: 12 }}
                    />
                    Previous 12 mo
                  </div>
                </div>

                <AppSelect
                  menus={["Past Year", "Last 3 Years", "Last 5 Years"]}
                  defaultValue="Past Year"
                  // onChange={handleSelectionType}
                />
              </StyledVisitorAction>
            }
          >
            <StatGraphs
              data={stateData}
              XKey="Past 12 mo"
              YKey="Previous 12 mo"
            />
          </StyledVisitorCard>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <StyledVisitorCard
            title="Total site Previous 12 mo"
            extra={
              <StyledVisitorAction>
                <div className="visitor-action-view">
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#0A8FDC" }}
                    />
                    Past 12 mo
                  </div>
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#F04F47" }}
                    />
                    Previous 12 mo
                  </div>
                </div>

                <AppSelect
                  menus={["Past Year", "Last 3 Years", "Last 5 Years"]}
                  defaultValue="Past Year"
                  // onChange={handleSelectionType}
                />
              </StyledVisitorAction>
            }
          >
            <StatGraphs
              data={stateData}
              XKey="Past 12 mo"
              YKey="Previous 12 mo"
            />
          </StyledVisitorCard>
        </Col>
      </Row>
      <Row gutter={18}>
        <Col xs={24} md={24} lg={12}>
          <StyledVisitorCard
            title="Total New Users"
            extra={
              <StyledVisitorAction>
                <div className="visitor-action-view">
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#0A8FDC", fontSize: 12 }}
                    />
                    Past 12 mo
                  </div>
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#F04F47", fontSize: 12 }}
                    />
                    Previous 12 mo
                  </div>
                </div>

                <AppSelect
                  menus={["Past Year", "Last 3 Years", "Last 5 Years"]}
                  defaultValue="Past Year"
                  // onChange={handleSelectionType}
                />
              </StyledVisitorAction>
            }
          >
            <StatGraphs
              data={stateData}
              XKey="Past 12 mo"
              YKey="Previous 12 mo"
            />
          </StyledVisitorCard>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <StyledVisitorCard
            title="Total Sessions"
            extra={
              <StyledVisitorAction>
                <div className="visitor-action-view">
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#0A8FDC" }}
                    />
                    Past 12 mo
                  </div>
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#F04F47" }}
                    />
                    Previous 12 mo
                  </div>
                </div>

                <AppSelect
                  menus={["Past Year", "Last 3 Years", "Last 5 Years"]}
                  defaultValue="Past Year"
                  // onChange={handleSelectionType}
                />
              </StyledVisitorAction>
            }
          >
            <StatGraphs
              data={stateData}
              XKey="Past 12 mo"
              YKey="Previous 12 mo"
            />
          </StyledVisitorCard>
        </Col>
      </Row>
      <Row gutter={18}>
        <Col xs={24} md={24} lg={12}>
          <StyledVisitorCard
            title="Average Session Duration"
            extra={
              <StyledVisitorAction>
                <div className="visitor-action-view">
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#0A8FDC", fontSize: 12 }}
                    />
                    Past 12 mo
                  </div>
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#F04F47", fontSize: 12 }}
                    />
                    Previous 12 mo
                  </div>
                </div>

                <AppSelect
                  menus={["Past Year", "Last 3 Years", "Last 5 Years"]}
                  defaultValue="Past Year"
                  // onChange={handleSelectionType}
                />
              </StyledVisitorAction>
            }
          >
            <StatGraphs
              data={stateData}
              XKey="Past 12 mo"
              YKey="Previous 12 mo"
            />
          </StyledVisitorCard>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <StyledVisitorCard
            title="Sessions Per User"
            extra={
              <StyledVisitorAction>
                <div className="visitor-action-view">
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#0A8FDC" }}
                    />
                    Past 12 mo
                  </div>
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#F04F47" }}
                    />
                    Previous 12 mo
                  </div>
                </div>

                <AppSelect
                  menus={["Past Year", "Last 3 Years", "Last 5 Years"]}
                  defaultValue="Past Year"
                  // onChange={handleSelectionType}
                />
              </StyledVisitorAction>
            }
          >
            <StatGraphs
              data={stateData}
              XKey="Past 12 mo"
              YKey="Previous 12 mo"
            />
          </StyledVisitorCard>
        </Col>
      </Row>
      <Row gutter={18}>
        <Col xs={24} md={24} lg={12}>
          <StyledVisitorCard
            title="Conversions"
            extra={
              <StyledVisitorAction>
                <div className="visitor-action-view">
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#0A8FDC", fontSize: 12 }}
                    />
                    Past 12 mo
                  </div>
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#F04F47", fontSize: 12 }}
                    />
                    Previous 12 mo
                  </div>
                </div>

                <AppSelect
                  menus={["Past Year", "Last 3 Years", "Last 5 Years"]}
                  defaultValue="Past Year"
                  // onChange={handleSelectionType}
                />
              </StyledVisitorAction>
            }
          >
            <StatGraphs
              data={stateData}
              XKey="Past 12 mo"
              YKey="Previous 12 mo"
            />
          </StyledVisitorCard>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <StyledVisitorCard
            title="Revenue"
            extra={
              <StyledVisitorAction>
                <div className="visitor-action-view">
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#0A8FDC" }}
                    />
                    Past 12 mo
                  </div>
                  <div className="visitor-action-item">
                    <span
                      className="dot-visitor"
                      style={{ backgroundColor: "#F04F47" }}
                    />
                    Previous 12 mo
                  </div>
                </div>

                <AppSelect
                  menus={["Past Year", "Last 3 Years", "Last 5 Years"]}
                  defaultValue="Past Year"
                  // onChange={handleSelectionType}
                />
              </StyledVisitorAction>
            }
          >
            <StatGraphs
              data={stateData}
              XKey="Past 12 mo"
              YKey="Previous 12 mo"
            />
          </StyledVisitorCard>
        </Col>
      </Row>
    </>
  );
};

export default SitePerformance;
