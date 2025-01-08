"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
  { name: "Impressions", value: 500 },
  { name: "Clicks", value: 300 },
  { name: "Conversions", value: 100 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

export function AdPerformanceWidget() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

