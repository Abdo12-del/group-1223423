"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Flag, CheckCircle2, Award, Rocket } from 'lucide-react';

interface FinalConclusionProps {
  onNavigate?: (id: string) => void;
}

const FinalConclusion: React.FC<FinalConclusionProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white overflow-hidden relative bg-emerald-900" 
      dir="rtl"
    >
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-2 relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">الخاتمة العامة</h2>
          <div className="flex items-center gap-3 text-emerald-200/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">نهاية المشروع وتطلعات المستقبل</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">FIN</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl bg-white/10 backdrop-blur-2xl p-10 md:p-16 rounded-[4rem] border border-white/20 shadow-2xl text-center relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 p-6 bg-emerald-500 rounded-full shadow-2xl"><Flag size={48} /></div>
          <p className="text-2xl md:text-4xl font-black leading-relaxed mb-12">
            إن الانتقال إلى النظام الآلي ليس مجرد رفاهية، بل ضرورة حتمية لضمان تسيير أنجح للموارد البشرية والمادية في المعهد الوطني المتخصص بالوادي.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 justify-center text-emerald-200 font-bold"><CheckCircle2 size={24} /> دقة البيانات</div>
            <div className="flex items-center gap-3 justify-center text-emerald-200 font-bold"><Award size={24} /> سرعة الأداء</div>
            <div className="flex items-center gap-3 justify-center text-emerald-200 font-bold"><Rocket size={24} /> سهولة التسيير</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FinalConclusion;