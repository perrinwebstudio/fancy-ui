import Title from "antd/es/typography/Title";
import {
  StyledTitle,
  StyledAnalysisBody,
  StyledAnalysisPane,
  StyledAnalysisTitle,
} from "./index.styled";
import { Card, Space, Table, Tag } from "antd";
import AppCard from "@crema/components/AppCard";

const columns = [
  {
    title: "Keyword",
    dataIndex: "keyword",
    key: "keyword",
    render: (text, record) => {
      const value =
        ((record?.original_rank ?? 0) + (record?.current_rank ?? 0)) / 2;
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
    dataIndex: "search_intent",
    key: "search_intent",
  },
  {
    title: "Monthly Volume",
    dataIndex: "monthly_volume",
    key: "monthly_volume",
    render: (text) => text?.toLocaleString(),
  },
  {
    title: "Original Rank",
    dataIndex: "original_rank",
    key: "original_rank",
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
    dataIndex: "current_rank",
    key: "current_rank",
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
    dataIndex: "three_month_change",
    key: "three_month_change",
    render: (text) => (
      <Tag
        color={text >= 0 ? "#067F12" : "#CE1717"}
        style={{ minWidth: "50px", textAlign: "center" }}
      >
        {text >= 0 ? "+" : ""} {text.toFixed(2)}
      </Tag>
    ),
  },
  {
    title: "Potential Revenue",
    dataIndex: "potential_revenue",
    key: "potential_revenue",
    render: (text) => `$${text?.toLocaleString()}`,
  },
  {
    title: "Page",
    dataIndex: "page",
    key: "page",
    render: (text) => (
      <Space>
        🔗 <a href={text}>{text}</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    keyword: "Yoga",
    original_rank: 64,
    current_rank: 55,
    three_month_change: 2.0,
    search_intent: "Transactional",
    monthly_volume: 32000,
    potential_revenue: 125000,
    page: "www.yoga.com/homepage",
  },
  {
    key: "2",
    keyword: "Yoga",
    original_rank: 12,
    current_rank: 8,
    three_month_change: -1.7,
    search_intent: "Informational",
    monthly_volume: 24000,
    potential_revenue: 67000,
    page: "www.yoga.com/homepage",
  },
  {
    key: "3",
    keyword: "Yoga",
    original_rank: 1,
    current_rank: 3,
    three_month_change: 2.7,
    search_intent: "Transactional",
    monthly_volume: 12000,
    potential_revenue: 185000,
    page: "www.yoga.com/homepage",
  },
];

const KeywordPerformance = ({ prop1 }) => {
  return (
    <AppCard bordered={false}>
      <StyledTitle level={5}>Keyword Performance</StyledTitle>
      <Table
        columns={columns}
        pagination={{ position: ["none", "bottomCenter"] }}
        dataSource={data}
      />
    </AppCard>
  );
};

export default KeywordPerformance;
