"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TableProperties, ChevronDown } from 'lucide-react';

interface DataDictionaryProps {
  onNavigate?: (id: string) => void;
}

const DataDictionary: React.FC<DataDictionaryProps> = ({ onNavigate }) => {
  const data = [
    { label: "مدة التكوين", type: "حرفي", size: "30" },
    { label: "المستوى", type: "حرفي", size: "30" },
    { label: "رقم التعهد", type: "رقمي", size: "03" },
    { label: "الاسم واللقب", type: "حرفي", size: "15" },
    { label: "رقم البطاقة", type: "رقمي", size: "15" },
    { label: "تاريخ الصدور", type: "رقمي", size: "03" },
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white relative bg-rose-600" 
      dir="rtl"
    >
      <motion.button
        whileHover={{ y: 5 }}
        onClick={() => onNavigate?.('ch2-carousel')}
        className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors z-50"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">العودة للقائمة</span>
        <ChevronDown size={32} />
      </motion.button>

      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-2">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">قاموس المعطيات</h2>
          <div className="flex items-center gap-3 text-rose-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">حصر وتوصيف المعلومات المصفاة</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">01</div>
      </div>

      <div className="flex-1 bg-black/10 backdrop-blur-xl rounded-[3rem] border border-white/10 p-8 overflow-hidden flex flex-col">
        <h3 className="text-2xl font-black mb-6 flex items-center gap-4 text-rose-200"><TableProperties size={28} /> القاموس المصفى</h3>
        <div className="overflow-auto custom-scrollbar flex-1">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-white/10 border-b border-white/10">
                <th className="p-4 font-black">المعلومة</th>
                <th className="p-4 font-black">النوع</th>
                <th className="p-4 font-black">الطول</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-lg">{item.label}</td>
                  <td className="p-4 text-rose-100/80">{item.type}</td>
                  <td className="p-4 text-rose-100/80 font-mono">{item.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default DataDictionary;