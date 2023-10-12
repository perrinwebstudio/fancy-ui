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
import { SearchPeriodLabelMaps, SearchPeriodList } from "../Utils";
import { useSiteDetail } from "@crema/modules/siteDetail";
import { useFetchSearchPerformanceQuery } from "apps/fancyai-web-client/src/core/api/apiPerformanceReport";
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
    title: "Top 10 Keywords",
    dataIndex: "topTenKeywords",
    key: "topTenKeywords",
    render: (text, record) => {
      const opacity = Math.round(
        35 + Math.abs(record.topTenKeywordsGrowth) * 0.65
      );
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {text.toLocaleString()}
          </Typography>
          <Tag
            color={`#${
              record.topTenKeywordsGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.topTenKeywordsGrowth >= 0 ? "+" : ""}{" "}
            {record.topTenKeywordsGrowth}%
          </Tag>
        </Row>
      );
    },
  },
  {
    title: "Search Impressions",
    dataIndex: "searchImpressions",
    key: "searchImpressions",
    render: (text, record) => {
      const opacity = Math.round(
        35 + Math.abs(record.searchImpressionsGrowth) * 0.65
      );
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {text.toLocaleString()}
          </Typography>
          <Tag
            color={`#${
              record.searchImpressionsGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.searchImpressionsGrowth >= 0 ? "+" : ""}{" "}
            {record.searchImpressionsGrowth}%
          </Tag>
        </Row>
      );
    },
  },
  {
    title: "Search Clicks",
    dataIndex: "searchClicks",
    key: "searchClicks",
    render: (text, record) => {
      const opacity = Math.round(
        35 + Math.abs(record.searchClicksGrowth) * 0.65
      );
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {text.toLocaleString()}
          </Typography>
          <Tag
            color={`#${
              record.searchClicksGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.searchClicksGrowth >= 0 ? "+" : ""}{" "}
            {record.searchClicksGrowth}%
          </Tag>
        </Row>
      );
    },
  },
  {
    title: "Search CTR %",
    dataIndex: "searchCTR",
    key: "searchCTR",
    render: (text, record) => {
      const opacity = Math.round(35 + Math.abs(record.searchCTRGrowth) * 0.65);
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {text.toLocaleString()}%
          </Typography>
          <Tag
            color={`#${
              record.searchCTRGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.searchCTRGrowth >= 0 ? "+" : ""} {record.searchCTRGrowth}%
          </Tag>
        </Row>
      );
    },
  },
  {
    title: "Total Users",
    dataIndex: "totalUsers",
    key: "totalUsers",
    render: (text, record) => {
      const opacity = Math.round(35 + Math.abs(record.totalUsersGrowth) * 0.65);
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {text.toLocaleString()}
          </Typography>
          <Tag
            color={`#${
              record.totalUsersGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.totalUsersGrowth >= 0 ? "+" : ""} {record.totalUsersGrowth}%
          </Tag>
        </Row>
      );
    },
  },
  {
    title: "New Users",
    dataIndex: "newUsers",
    key: "newUsers",
    render: (text, record) => {
      const opacity = Math.round(35 + Math.abs(record.newUsersGrowth) * 0.65);
      return (
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Typography style={{ marginRight: 16, padding: "8px 0" }}>
            {text.toLocaleString()}
          </Typography>
          <Tag
            color={`#${
              record.newUsersGrowth < 0 ? "CE1717" : "25db36"
            }${opacity.toString(16)}`}
            style={{
              color: "#070C18",
              minWidth: "50px",
              textAlign: "center",
              padding: "6px 12px",
            }}
          >
            {record.newUsersGrowth >= 0 ? "+" : ""} {record.newUsersGrowth}%
          </Tag>
        </Row>
      );
    },
  },
];

const SearchPerformance = ({ prop1 }) => {
  const [searchPeriod, setSearchPeriod] = useState("month");
  const [searchVal, setSearchVal] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState(1);

  const { id: siteId } = useSiteDetail();

  const { data, isLoading } = useFetchSearchPerformanceQuery(
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
          <StyledTitle level={5}>Search Performance</StyledTitle>
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

export default SearchPerformance;
