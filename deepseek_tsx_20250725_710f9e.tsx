// src/pages/Dashboard.tsx
import DashboardCard from "../components/DashboardCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // ข้อมูลตัวอย่างสำหรับ Dashboard
  const stockData = [
    { name: 'กาแฟ', quantity: 42, threshold: 50 },
    { name: 'นม', quantity: 35, threshold: 40 },
    { name: 'น้ำเชื่อม', quantity: 28, threshold: 30 },
    { name: 'น้ำตาล', quantity: 50, threshold: 20 },
  ];

  const profitData = [
    { name: 'Mon', profit: 3200 },
    { name: 'Tue', profit: 2800 },
    { name: 'Wed', profit: 3900 },
    { name: 'Thu', profit: 4100 },
    { name: 'Fri', profit: 4500 },
    { name: 'Sat', profit: 5200 },
    { name: 'Sun', profit: 4800 },
  ];

  const lowStockItems = stockData.filter(item => item.quantity < item.threshold);

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard 
          title="วัตถุดิบใกล้หมด" 
          value={lowStockItems.length} 
          icon="⚠️"
          className="bg-red-900/50"
        />
        <DashboardCard 
          title="กำไรวันนี้" 
          value={`${profitData[6].profit} บาท`} 
          icon="💰"
          className="bg-green-900/50"
        />
        <DashboardCard 
          title="วัตถุดิบทั้งหมด" 
          value={stockData.length} 
          icon="📦"
          className="bg-blue-900/50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">ปริมาณสต็อกวัตถุดิบ</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockData}>
                <XAxis dataKey="name" stroke="#e5e7eb" />
                <YAxis stroke="#e5e7eb" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151' }}
                />
                <Bar dataKey="quantity" fill="#3b82f6" />
                <Bar dataKey="threshold" fill="#ef4444" opacity={0.7} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">กำไรรายวัน (สัปดาห์นี้)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={profitData}>
                <XAxis dataKey="name" stroke="#e5e7eb" />
                <YAxis stroke="#e5e7eb" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151' }}
                  formatter={(value) => [`${value} บาท`, 'กำไร']}
                />
                <Bar dataKey="profit" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;