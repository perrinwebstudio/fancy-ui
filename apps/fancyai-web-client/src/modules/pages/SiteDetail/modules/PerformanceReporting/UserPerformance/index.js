import Title from "antd/es/typography/Title";
import {
  StyledTitle,
  StyledAnalysisBody,
  StyledAnalysisPane,
  StyledAnalysisTitle,
  StyledRadioTitle,
  StyledRadioButton,
  StyledInactiveRadioButton,
  StyledRadioRow,
  StyledSearchInput,
} from "./index.styled";
import {
  Button,
  Card,
  Col,
  Input,
  Pagination,
  Row,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import AppCard from "@crema/components/AppCard";
import { useState } from "react";
import {
  SearchPeriodLabelMaps,
  SearchPeriodList,
  parseDurationString,
} from "../Utils";
import { useSiteDetail } from "@crema/modules/siteDetail";
import {
  useFetchSearchPerformanceQuery,
  useFetchUserPerformanceQuery,
} from "apps/fancyai-web-client/src/core/api/apiPerformanceReport";
import AppLoader from "@crema/components/AppLoader";

const columns = [
  {
    title: "Page",
    dataIndex: "name",
    key: "name",
    render: (text, record) => {
      return (
        <a target="_blank" href={record.url}>
          {text}
        </a>
      );
    },
  },
  {
    title: "Interaction Rate %",
    dataIndex: "interactionRate",
    key: "interactionRate",
    render: (text, record) => {
      const opacity = Math.round(
        35 + Math.abs(record.interactionRateGrowth) * 0.65
      );
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {text.toLocaleString()}%
          </Typography>
          <Tag
            color={`#${
              record.interactionRateGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.interactionRateGrowth >= 0 ? "+" : ""}{" "}
            {record.interactionRateGrowth}%
          </Tag>
        </Row>
      );
    },
  },
  {
    title: "Bounce Rate %",
    dataIndex: "bounceRate",
    key: "bounceRate",
    render: (text, record) => {
      const opacity = Math.round(35 + Math.abs(record.bounceRateGrowth) * 0.65);
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {text.toLocaleString()}%
          </Typography>
          <Tag
            color={`#${
              record.bounceRateGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.bounceRateGrowth >= 0 ? "+" : ""} {record.bounceRateGrowth}%
          </Tag>
        </Row>
      );
    },
  },
  {
    title: "Conversions",
    dataIndex: "conversions",
    key: "conversions",
    render: (text, record) => {
      const opacity = Math.round(
        35 + Math.abs(record.conversionsGrowth) * 0.65
      );
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {text.toLocaleString()}
          </Typography>
          <Tag
            color={`#${
              record.conversionsGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.conversionsGrowth >= 0 ? "+" : ""}{" "}
            {record.conversionsGrowth}%
          </Tag>
        </Row>
      );
    },
  },
  {
    title: "Session Duration",
    dataIndex: "sessionDuration",
    key: "sessionDuration",
    render: (text, record) => {
      const opacity = Math.round(
        35 + Math.abs(record.sessionDurationGrowth) * 0.65
      );
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {parseDurationString(record.sessionDuration)}
          </Typography>
          <Tag
            color={`#${
              record.sessionDurationGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.sessionDurationGrowth >= 0 ? "+" : ""}{" "}
            {record.sessionDurationGrowth}%
          </Tag>
        </Row>
      );
    },
  },
  {
    title: "Conversion Rate %",
    dataIndex: "conversionRate",
    key: "conversionRate",
    render: (text, record) => {
      const opacity = Math.round(
        35 + Math.abs(record.conversionRateGrowth) * 0.65
      );
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {text.toLocaleString()}%
          </Typography>
          <Tag
            color={`#${
              record.conversionRateGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.conversionRateGrowth >= 0 ? "+" : ""}{" "}
            {record.conversionRateGrowth}%
          </Tag>
        </Row>
      );
    },
  },
  {
    title: "Revenue",
    dataIndex: "revenue",
    key: "revenue",
    render: (text, record) => {
      const opacity = Math.min(
        Math.round(35 + Math.abs(record.revenueGrowth) * 0.0065),
        100
      );
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            ${text.toLocaleString()}
          </Typography>
          <Tag
            color={`#${
              record.revenueGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.revenueGrowth >= 0 ? "+" : "-"} $
            {Math.abs(record.revenueGrowth)}
          </Tag>
        </Row>
      );
    },
  },
];

const UserPerformance = ({ prop1 }) => {
  const [searchPeriod, setSearchPeriod] = useState("month");
  const [searchVal, setSearchVal] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState(1);

  const { id: siteId } = useSiteDetail();

  const { data, isLoading } = useFetchUserPerformanceQuery(
    {
      siteId,
      searchPeriod,
      searchVal,
      pageNum,
      countPerPage: 10,
      orderBy,
      order,
    },
    {
      skip: !Boolean(siteId),
    }
  );

  const analysisData = data?.data;

  const onSearch = (val) => {
    setSearchVal(val);
  };

  const handleChangeSearchPeriod = (val) => {
    setSearchPeriod(val);
  };

  return (
    <AppCard bordered={false}>
      <Row gutter={12}>
        <Col xs={24} xl={5}>
          <StyledTitle level={5}>User Performance</StyledTitle>
        </Col>
        <Col xs={24} xl={18} xxl={14}>
          <StyledRadioRow>
            <StyledRadioTitle>Show:</StyledRadioTitle>
            {SearchPeriodList.map((period) =>
              searchPeriod === period ? (
                <StyledRadioButton type="primary">
                  {SearchPeriodLabelMaps[period]}
                </StyledRadioButton>
              ) : (
                <StyledInactiveRadioButton
                  onClick={() => handleChangeSearchPeriod(period)}
                >
                  {SearchPeriodLabelMaps[period]}
                </StyledInactiveRadioButton>
              )
            )}
          </StyledRadioRow>
        </Col>
        <Col xs={24} xxl={5}>
          <StyledSearchInput
            placeholder="Search here"
            onSearch={onSearch}
            style={{ maxWidth: 180, margin: "8px 0", float: "right" }}
          />
        </Col>
      </Row>
      {isLoading ? (
        <Row style={{ minHeight: 200 }}>
          <AppLoader />
        </Row>
      ) : (
        <Table
          columns={columns}
          pagination={{ position: ["none", "none"] }}
          dataSource={data?.data}
        />
      )}
      <Row justify="center" style={{ margin: "16px" }}>
        <Pagination
          current={pageNum}
          total={Math.ceil((data?.totalCount ?? 0) / 10)}
          onChange={(page) => setPageNum(pageNum)}
        />
      </Row>
    </AppCard>
  );
};

export default UserPerformance;
