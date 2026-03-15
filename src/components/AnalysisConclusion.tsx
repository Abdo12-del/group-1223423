"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Quote, Monitor, Zap, Search, AlertTriangle } from 'lucide-react';

interface AnalysisConclusionProps {
  onNavigate?: (id: string) => void;
}

const AnalysisConclusion: React.FC<AnalysisConclusionProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white overflow-hidden relative bg-teal-900" 
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

      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-2 relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">خلاصة الفصل الأول</h2>
          <div className="flex items-center gap-3 text-teal-200/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">نهاية الدراسة التحليلية</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">08</div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-12 items-center justify-center relative z-10">
        <div className="lg:col-span-7 max-w-4xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/20 relative shadow-2xl">
            <Quote className="absolute -top-6 -right-6 text-teal-400 w-16 h-16 opacity-50" />
            <p className="text-xl md:text-2xl font-bold leading-relaxed text-teal-50 text-justify">
              بعد أن فصلنا في دراسة الموجود بمختلف مراحله، بدءاً بدراسة الوثائق والمناصب والسجلات وكذا دراسة الإجراءات وتدفق المعلومات، وجدنا الأخطاء والمشاكل التي تعطل السير الحسن للعمل المتقن بمكتب الأمانة.
            </p>
            <div className="h-px w-full bg-white/10 my-8" />
            <p className="text-lg md:text-xl font-medium leading-relaxed text-teal-100/80 text-justify">
              لذا أصبح جد ضروري إدخال الإعلام الآلي الذي يعتبر الحل الأمثل الذي يفي بغرض احتياجات المسيرين بدل النظام القديم، ونرجو أن يكون الحل الإعلامي المقترح في الدراسة التفصيلية حلاً ملائماً يسمح لنا بالمرور من النظام الموجود إلى الحل المعلوماتي الأمثل.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnalysisConclusion;