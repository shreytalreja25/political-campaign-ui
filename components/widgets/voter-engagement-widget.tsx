"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = [
  { name: "Jan", total: 1000 },
  { name: "Feb", total: 1500 },
  { name: "Mar", total: 2000 },
  { name: "Apr", total: 2500 },
  { name: "May", total: 3000 },
  { name: "Jun", total: 3500 },
]

export function VoterEngagementWidget() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
          cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
          contentStyle={{ background: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

