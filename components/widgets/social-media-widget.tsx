"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { name: "Mon", average: 400, today: 240 },
  { name: "Tue", average: 300, today: 139 },
  { name: "Wed", average: 200, today: 980 },
  { name: "Thu", average: 278, today: 390 },
  { name: "Fri", average: 189, today: 480 },
  { name: "Sat", average: 239, today: 380 },
  { name: "Sun", average: 349, today: 430 },
]

export function SocialMediaWidget() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{ background: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <Line
          type="monotone"
          dataKey="today"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ fill: "#8884d8" }}
        />
        <Line
          type="monotone"
          dataKey="average"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={{ fill: "#82ca9d" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

