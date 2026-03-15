"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { UserSearch, ClipboardList, Clock, ChevronDown } from 'lucide-react';

interface JobAnalysisProps {
  onNavigate?: (id: string) => void;
}

const JobAnalysis: React.FC<JobAnalysisProps> = ({ onNavigate }) => {
  const tasks = [
    { task: "ضمان المراقبة والنظام والانضباط", freq: "كل دورة" },
    { task: "تنظيم اللقاءات والتظاهرات الرياضية", freq: "كل دورة" },
    { task: "الحرص على النظافة والأمن", freq: "كل دورة" },
    { task: "متابعة الفحوصات الطبية للمتربصين", freq: "كل دورة" },
    { task: "مسؤول على دق الجرس في أوقاته", freq: "يومي" },
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white relative bg-emerald-600" 
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">حقل الدراسة</h2>
          <div className="flex items-center gap-3 text-emerald-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">مصلحة المراقبة العامة والمرافقة</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">02</div>
      </div>

      <div className="flex-1 bg-black/10 backdrop-blur-xl rounded-[3rem] border border-white/10 p-8 overflow-hidden flex flex-col">
        <h3 className="text-2xl font-black mb-6 flex items-center gap-4"><ClipboardList size={28} /> دراسة منصب المراقب</h3>
        <div className="overflow-auto custom-scrollbar flex-1">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-white/10 border-b border-white/10">
                <th className="p-4 font-black">المهمة</th>
                <th className="p-4 font-black text-center">التردد</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((item, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-lg">{item.task}</td>
                  <td className="p-4 text-center"><span className="px-3 py-1 bg-emerald-500/30 rounded-full text-xs font-black">{item.freq}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default JobAnalysis;