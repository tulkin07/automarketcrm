import React from 'react';

const orders = [
  { id: 1, client: "Ali Akhmedov", car: "Toyota Camry 2023", status: "Pending", bank: "Asaka Bank", date: "12.02.2024" },
  { id: 2, client: "Nodira Karimova", car: "Kia Sportage 2021", status: "Approved", bank: "Kapital Bank", date: "11.02.2024" },
  { id: 3, client: "Rustam Bekmirzaev", car: "Chevrolet Malibu 2020", status: "Rejected", bank: "Xalq Bank", date: "10.02.2024" },
  { id: 4, client: "Mira Talipova", car: "Hyundai Tucson 2022", status: "Delivered", bank: "Ipoteka Bank", date: "09.02.2024" },
  { id: 5, client: "Dilshod Eshov", car: "BMW X5 2019", status: "Pending", bank: "Asaka Bank", date: "08.02.2024" },
];

const statusStyles = {
  Pending: "bg-green-100 text-green-700 border-green-200",
  Approved: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Rejected: "bg-red-100 text-red-700 border-red-200",
  Delivered: "bg-blue-100 text-blue-700 border-blue-200",
};

const LatestOrdersTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 flex justify-between items-center border-b border-gray-50">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-blue-600 rounded text-white text-[10px]">
             <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/></svg>
          </div>
          <h3 className="font-bold text-gray-800">Foydalanuvchilar</h3>
        </div>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-1">
          View All <span className="text-[10px]">❯</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-50/50 text-blue-900/60 text-[13px] font-semibold uppercase tracking-wider">
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Car</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Bank</th>
              <th className="px-6 py-4">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50/80 transition-colors text-gray-700 text-sm">
                <td className="px-6 py-4 font-medium">{order.client}</td>
                <td className="px-6 py-4">{order.car}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-md text-xs font-bold border ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.bank}</td>
                <td className="px-6 py-4 text-gray-400">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrdersTable;