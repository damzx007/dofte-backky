// src/components/InventoryTable.tsx
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const InventoryTable = ({ items, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-gray-800 rounded-lg">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ชื่อ</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">จำนวน</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">หน่วย</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ต้นทุน/หน่วย</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ราคาขาย</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">สถานะ</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">จัดการ</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {items.map((item) => (
            <tr key={item.id} className={item.quantity < item.threshold ? 'bg-red-900/20' : ''}>
              <td className="px-6 py-4 whitespace-nowrap text-gray-200">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-200">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-200">{item.unit}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-200">{item.cost_per_unit} บาท</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-200">{item.selling_price} บาท</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${item.quantity < item.threshold ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                  {item.quantity < item.threshold ? 'ใกล้หมด' : 'ปกติ'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button 
                  onClick={() => onEdit(item)}
                  className="text-blue-400 hover:text-blue-300 mr-4"
                >
                  <FiEdit size={18} />
                </button>
                <button 
                  onClick={() => onDelete(item.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <FiTrash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
