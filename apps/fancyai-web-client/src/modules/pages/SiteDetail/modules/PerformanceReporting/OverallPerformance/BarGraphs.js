import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarGraphs = ({ data, keys }) => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data}>
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <Tooltip />
      <Bar dataKey={keys} fill="#0A8FDC90" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarGraphs;
