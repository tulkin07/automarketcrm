import React, { useState } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Ma'lumotlar to'plami (namuna uchun har xil filtrlar bilan)
const allData = {
  daily: [
    { name: 'Mon', blue: 40, yellow: 60, line: 100 },
    { name: 'Tue', blue: 70, yellow: 90, line: 150 },
    { name: 'Wed', blue: 50, yellow: 110, line: 130 },
    { name: 'Thu', blue: 90, yellow: 150, line: 200 },
    { name: 'Fri', blue: 60, yellow: 100, line: 170 },
  ],
  weekly: [
    { name: 'W1', blue: 200, yellow: 300, line: 500 },
    { name: 'W2', blue: 400, yellow: 500, line: 800 },
    { name: 'W3', blue: 300, yellow: 450, line: 700 },
    { name: 'W4', blue: 500, yellow: 700, line: 1100 },
  ],
  monthly: [
    { name: 'Jan', blue: 140, yellow: 220, line: 300 },
    { name: 'Feb', blue: 160, yellow: 250, line: 340 },
    { name: 'Mar', blue: 190, yellow: 270, line: 420 },
    { name: 'Apr', blue: 220, yellow: 410, line: 480 },
    { name: 'May', blue: 170, yellow: 320, line: 485 },
    { name: 'Jun', blue: 250, yellow: 390, line: 490 },
    { name: 'Jul', blue: 210, yellow: 420, line: 630 },
    { name: 'Aug', blue: 310, yellow: 580, line: 680 },
    { name: 'Sep', blue: 260, yellow: 480, line: 710 },
    { name: 'Oct', blue: 320, yellow: 640, line: 750 },
    { name: 'Nov', blue: 410, yellow: 550, line: 800 },
  ],
  yearly: [
    { name: '2022', blue: 2000, yellow: 3000, line: 5000 },
    { name: '2023', blue: 3500, yellow: 4500, line: 7500 },
    { name: '2024', blue: 4100, yellow: 5500, line: 9000 },
  ]
};

const LineBarAreaComposedChart = () => {
  const [filter, setFilter] = useState('monthly'); // Default holat - oylik

  return (
    <div className="">
      {/* Header va Filtrlar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-50 rounded-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          </div>
          <h3 className="text-gray-800 font-bold text-lg">Monthly Orders</h3>
        </div>

        {/* Filtr tugmalari */}
        <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-200">
          {['daily', 'weekly', 'monthly', 'yearly'].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                filter === item 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Chart qismi */}
      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <ComposedChart data={allData[filter]} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
              }}
            />
            
            <Bar dataKey="blue" fill="#3b82f6" barSize={16} radius={[4, 4, 0, 0]} />
            <Bar dataKey="yellow" fill="#fbbf24" barSize={16} radius={[4, 4, 0, 0]} />
            
            <Line 
              type="monotone" 
              dataKey="line" 
              stroke="#2563eb" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineBarAreaComposedChart;