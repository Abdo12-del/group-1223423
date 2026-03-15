"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, GitBranch, ArrowRight } from 'lucide-react';

interface ProceduresAnalysisProps {
  onNavigate?: (id: string) => void;
}

const ProceduresAnalysis: React.FC<ProceduresAnalysisProps> = ({ onNavigate }) => {
  const procedures = [
    { code: "D01", desc: "وثيقة تعهد وإلتزام" },
    { code: "T1", desc: "يقوم المراقب بملئ التعهد والالتزام بمعلومات المتربص والتصريح بأخطائه" },
    { code: "T2", desc: "المصادقة على التعهد والالتزام في البلدية" },
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white relative bg-purple-600" 
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">دراسة الإجراءات</h2>
          <div className="flex items-center gap-3 text-purple-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">تحليل العمليات والوثائق (إجراء التعهد)</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">05</div>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6">
        {procedures.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/20 transition-colors"
          >
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg">
              {item.code}
            </div>
            <p className="text-xl md:text-2xl font-bold leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProceduresAnalysis;