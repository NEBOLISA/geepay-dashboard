import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { data, CustomTooltip, Weeklydata } from "./rechartSetup";
import "./SalesTrend.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const RechartBar = ({ selectedOption }) => {
  const { DarkMode } = useContext(ThemeContext);

  return (
    <ResponsiveContainer className="responsiveContainer">
      <BarChart
        width={500}
        height={300}
        data={selectedOption === "Weekly" ? Weeklydata : data}
        margin={{
          top: 0,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="10%" stopColor="#34CAA5" stopOpacity={0.9} />
            <stop offset="90%" stopColor="#34CAA5" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="colorUv2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="20%" stopColor="#34CAA5" stopOpacity={0.9} />
            <stop offset="90%" stopColor="#34CAA5" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="amt" />
        <Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltip />} />

        <Bar
          dataKey="amt"
          fill="url(#colorUv)"
          fillOpacity={DarkMode ? "60%" : "40%"}
          barSize={30}
          radius={[30, 30, 0, 0]}
          activeBar={<Rectangle fillOpacity="100%" fill="url(#colorUv2)" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default RechartBar;
