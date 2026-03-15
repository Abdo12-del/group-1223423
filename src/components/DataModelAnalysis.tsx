"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';

interface DataModelAnalysisProps {
  onNavigate?: (id: string) => void;
}

const DataModelAnalysis: React.FC<DataModelAnalysisProps> = ({ onNavigate }) => {
  const relations = [
    "الفرع (رقم الفرع، اسم الفرع، الأستاذ المسؤول، النمط)",
    "المتربص (رقم المتربص، الاسم، اللقب، تاريخ الازدياد، #رقم الفرع)",
    "إذن الدخول (رقم الإذن، التاريخ، الساعة، التبرير، #رقم المتربص)",
    "التعهد (رقم التعهد، الملاحظات، #رقم المتربص)",
    "إذن الخروج (رقم الإذن، التاريخ، الساعة، التبرير، #رقم المتربص)"
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white relative bg-rose-400" 
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">النموذج المنطقي MLD</h2>
          <div className="flex items-center gap-3 text-rose-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">المخطط العلائقي النهائي للنظام</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">06</div>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6 max-w-5xl mx-auto w-full">
        {relations.map((rel, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-colors"
            dir="ltr"
          >
            <p className="text-xl md:text-2xl font-mono font-bold text-left">
              <span className="text-white border-b-2 border-white/30 pb-1">{rel.split('(')[0]}</span>
              <span className="text-rose-100">({rel.split('(')[1]}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DataModelAnalysis;