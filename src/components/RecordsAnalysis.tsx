"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronDown } from 'lucide-react';

interface RecordsAnalysisProps {
  onNavigate?: (id: string) => void;
}

const RecordsAnalysis: React.FC<RecordsAnalysisProps> = ({ onNavigate }) => {
  const registers = [
    {
      title: "سجل النشاطات الثقافية والرياضية",
      rows: [
        ["نوع النشاط", "حرفي", "20"],
        ["اسم النشاط", "حرفي", "50"],
        ["عدد المشاركين", "رقمي", "03"],
        ["تاريخ النشاط", "تاريخ", "10"]
      ]
    },
    {
      title: "سجل الغيابات اليومية",
      rows: [
        ["الفرع", "حرفي", "30"],
        ["التوقيت", "توقيت", "05"],
        ["الاسم واللقب", "حرفي", "30"],
        ["التاريخ", "رقمي", "10"]
      ]
    }
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white relative bg-amber-600" 
      dir="rtl"
    >
      <motion.button
        whileHover={{ y: 5 }}
        onClick={() => onNavigate?.('ch1-carousel')}
        className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors z-50"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">العودة للقائمة</span>
        <ChevronDown size={32} />
      </motion.button>

      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-2">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">دراسة السجلات</h2>
          <div className="flex items-center gap-3 text-amber-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">تحليل الأرشيف والتوثيق الإداري</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">04</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 overflow-hidden">
        {registers.map((reg, idx) => (
          <div key={idx} className="bg-black/10 backdrop-blur-xl rounded-[3rem] border border-white/10 p-8 flex flex-col">
            <h3 className="text-xl font-black mb-6 flex items-center gap-4 text-amber-200"><BookOpen size={24} /> {reg.title}</h3>
            <div className="flex-1 overflow-auto custom-scrollbar">
              <table className="w-full text-right">
                <thead>
                  <tr className="border-b border-white/10 text-amber-300">
                    <th className="pb-3">المعلومة</th>
                    <th className="pb-3">النوع</th>
                    <th className="pb-3">الطول</th>
                  </tr>
                </thead>
                <tbody>
                  {reg.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b border-white/5">
                      <td className="py-3 font-bold text-lg">{row[0]}</td>
                      <td className="py-3 opacity-70">{row[1]}</td>
                      <td className="py-3 opacity-70">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecordsAnalysis;