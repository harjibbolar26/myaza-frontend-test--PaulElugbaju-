"use client";

import Select from "@/ui-component/Select";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data based on the image
const data = [
  { name: "Jan", income: 37000, outcome: 27000 },
  { name: "Feb", income: 27000, outcome: 34000 },
  { name: "Mar", income: 30000, outcome: 23000 },
  { name: "Apr", income: 37000, outcome: 27000 },
  { name: "May", income: 41000, outcome: 33500 },
  { name: "Jun", income: 23500, outcome: 28000 },
  { name: "Jul", income: 23500, outcome: 28000 },
  { name: "Aug", income: 23500, outcome: 28000 },
];

const selectYear = ["2020", "2021", "2022"];

// Custom tooltip component
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#464687] p-3 rounded shadow-lg text-white">
        <p className="text-sm font-medium">{`${label} 2020`}</p>
        <p className="text-lg font-bold">
          $
          {(
            (payload[0]?.value ?? 0) + (payload[1]?.value ?? 0)
          )?.toLocaleString(undefined, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}
        </p>
      </div>
    );
  }
  return null;
};

export default function AnalyticsDashboard() {
  const [year, setYear] = useState("2020");

  return (
    <div className="bg-background text-white p-6 rounded-2xl w-full mx-auto">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <h2 className="lg:text-2xl text-lg font-bold">Analytics</h2>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6359E9]"></div>
            <span>Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#64CFF6]"></div>
            <span>Outcome</span>
          </div>

          {/* <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[80px] bg-transparent border border-gray-600 text-white">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select> */}
          <Select
            options={selectYear}
            setState={setYear}
            label=""
            value={year}
            stroke="#8C89B4"
          />
        </div>
      </div>

      <div className="h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 0, left: -25, bottom: 5 }}
            barGap={-20}
          >
            <CartesianGrid
              strokeDasharray="7 7"
              vertical={false}
              stroke="#8C89B480"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8C89B4", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8C89B4", fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}K`}
              domain={[0, 50000]}
              ticks={[10000, 20000, 30000, 40000, 50000]}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar
              dataKey="outcome"
              fill="#64CFF6"
              radius={[4, 4, 0, 0]}
              maxBarSize={10}
            />
            <Bar
              dataKey="income"
              fill="#6359E9"
              radius={[4, 4, 0, 0]}
              maxBarSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
