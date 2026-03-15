"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronDown, ClipboardCheck } from 'lucide-react';

interface DocumentAnalysisProps {
  onNavigate?: (id: string) => void;
}

const DocumentAnalysis: React.FC<DocumentAnalysisProps> = ({ onNavigate }) => {
  const docs = [
    { 
      title: "بطاقة معلومات متربص", 
      rows: [
        ["رقم التسجيل", "رقمي", "03"],
        ["الاسم واللقب", "حرفي", "30"],
        ["التخصص", "حرفي", "30"],
        ["نمط التكوين", "حرفي", "20"]
      ]
    },
    { 
      title: "إذن الدخول", 
      rows: [
        ["رقم الإذن", "رقمي", "03"],
        ["يسمح للمتربص", "حرفي", "20"],
        ["الفرع", "حرفي", "20"],
        ["التبرير", "حرفي", "15"]
      ]
    },
    { 
      title: "تعهد والتزام", 
      rows: [
        ["رقم التسجيل", "رقمي", "03"],
        ["اسم الولي", "حرفي", "20"],
        ["رقم البطاقة", "رقمي", "08"],
        ["تاريخ الصدور", "توقيت", "-"]
      ]
    }
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white relative bg-indigo-600" 
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">دراسة الوثائق</h2>
          <div className="flex items-center gap-3 text-indigo-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">تحليل المستندات المتداولة (1، 2، 4)</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">03</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 overflow-hidden">
        {docs.map((doc, idx) => (
          <div key={idx} className="bg-black/10 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-6 flex flex-col">
            <h3 className="text-lg font-black mb-4 flex items-center gap-3 text-indigo-200"><ClipboardCheck size={20} /> {doc.title}</h3>
            <div className="flex-1 overflow-auto custom-scrollbar">
              <table className="w-full text-right text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-indigo-300">
                    <th className="pb-2">المعلومة</th>
                    <th className="pb-2">النوع</th>
                    <th className="pb-2">الطول</th>
                  </tr>
                </thead>
                <tbody>
                  {doc.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b border-white/5">
                      <td className="py-2 font-bold">{row[0]}</td>
                      <td className="py-2 opacity-70">{row[1]}</td>
                      <td className="py-2 opacity-70">{row[2]}</td>
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

export default DocumentAnalysis;