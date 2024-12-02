"use client"

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', winRate: 62 },
  { name: 'Feb', winRate: 65 },
  { name: 'Mar', winRate: 58 },
  { name: 'Apr', winRate: 70 },
  { name: 'May', winRate: 63 },
  { name: 'Jun', winRate: 68 },
];

const PerformanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis
          dataKey="name"
          stroke="rgba(255,255,255,0.5)"
        />
        <YAxis
          stroke="rgba(255,255,255,0.5)"
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            border: 'none',
            borderRadius: '8px',
            color: 'white'
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="winRate"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;

