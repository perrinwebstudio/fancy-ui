import Title from "antd/es/typography/Title";
import {
  StyledTitle,
  StyledAnalysisBody,
  StyledAnalysisPane,
  StyledAnalysisTitle,
} from "./index.styled";
import { Card, Pagination, Row, Space, Table, Tag } from "antd";
import AppCard from "@crema/components/AppCard";
import { useSiteDetail } from "@crema/modules/siteDetail";
import { useFetchKeywordPerfomanceQuery } from "apps/fancyai-web-client/src/core/api/apiPerformanceReport";
import { useState } from "react";

const columns = [
  {
    title: "Keyword",
    dataIndex: "keyword",
    key: "keyword",
    render: (text, record) => {
      const value =
        ((record?.originalRank ?? 0) + (record?.currentSiteRank ?? 0)) / 2;
      const opacity = Math.round(
        Math.max(20, Math.min(value ? 100 - Math.log(value) * 16 : 20, 255)) *
          1.6
      );
      return (
        <Tag
          color={`#25db36${opacity.toString(16)}`}
          style={{ color: "#070C18", minWidth: "30px", textAlign: "center" }}
        >
          {text}
        </Tag>
      );
    },
  },
  {
    title: "Search Intent",
    dataIndex: "searchIntentType",
    key: "searchIntentType",
  },
  {
    title: "Monthly Volume",
    dataIndex: "monthlyVolume",
    key: "monthlyVolume",
    render: (text) => text?.toLocaleString(),
  },
  {
    title: "Original Rank",
    dataIndex: "originalRank",
    key: "originalRank",
    render: (text) => {
      if (!text) return "";
      const value = parseInt(text);
      const opacity = Math.round(
        Math.max(20, Math.min(value ? 100 - Math.log(value) * 15 : 20, 255)) *
          1.6
      );
      return (
        <Tag
          color={`#25db36${opacity.toString(16)}`}
          style={{ color: "#070C18", minWidth: "30px", textAlign: "center" }}
        >
          {text}
        </Tag>
      );
    },
  },
  {
    title: "Current Rank",
    dataIndex: "currentSiteRank",
    key: "currentSiteRank",
    render: (text) => {
      if (!text) return "";
      const value = parseInt(text);
      const opacity = Math.round(
        Math.max(20, Math.min(value ? 100 - Math.log(value) * 15 : 20, 255)) *
          1.6
      );
      return (
        <Tag
          color={`#25db36${opacity.toString(16)}`}
          style={{ color: "#070C18", minWidth: "30px", textAlign: "center" }}
        >
          {text}
        </Tag>
      );
    },
  },
  {
    title: "3 Month Change",
    dataIndex: "rank3MonthsAgo",
    key: "rank3MonthsAgo",
    render: (text) =>
      text ? (
        <Tag
          color={text >= 0 ? "#067F12" : "#CE1717"}
          style={{ minWidth: "50px", textAlign: "center" }}
        >
          {text >= 0 ? "+" : ""} {text.toFixed(2)}
        </Tag>
      ) : (
        ""
      ),
  },
  {
    title: "Potential Revenue",
    dataIndex: "potentialRevenueGains",
    key: "potentialRevenueGains",
    render: (text) => `$${text?.toLocaleString()}`,
  },
  {
    title: "Page",
    dataIndex: "pageURL",
    key: "pageURL",
    render: (text) => (
      <Space>
        🔗 <a href={text}>{text}</a>
      </Space>
    ),
  },
];

const KeywordPerformance = ({ prop1 }) => {
  const [searchPeriod, setSearchPeriod] = useState("month");
  const [searchVal, setSearchVal] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState(1);

  const { id: siteId } = useSiteDetail();

  const { data, isLoading } = useFetchKeywordPerfomanceQuery(
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

  return (
    <AppCard bordered={false}>
      <StyledTitle level={5}>Keyword Performance</StyledTitle>
      <Table
        columns={columns}
        pagination={{ position: ["none", "none"] }}
        dataSource={data?.data}
      />
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

export default KeywordPerformance;
