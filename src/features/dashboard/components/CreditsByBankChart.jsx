import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Asaka Bank', value: 35, color: '#1d4ed8' }, // To'q ko'k
  { name: 'Kapital Bank', value: 25, color: '#ef4444' }, // Qizil
  { name: 'Ipoteka Bank', value: 20, color: '#22c55e' }, // Yashil
  { name: 'Xalq Bank', value: 20, color: '#f97316' }, // To'q sariq
];

const CreditsByBankChart = () => {
  return (
    <div className="min-h-[350px]">
      {/* Sarlavha qismi */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex -space-x-1">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        </div>
        <h3 className="text-gray-800 font-bold text-lg">Credits by Bank</h3>
      </div>

      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60} // Ichki bo'shliq (Donut effekti)
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              // Yozuvlarni chart ichida chiqarish
              labelLine={false}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, name, value }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                return (
                  <text 
                    x={x} 
                    y={y} 
                    fill="black" 
                    textAnchor="middle" 
                    dominantBaseline="central" 
                    className="text-[10px] font-bold"
                  >
                    {`${name}\n${value}%`}
                  </text>
                );
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CreditsByBankChart;