"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, ChevronDown, AlertCircle, Lightbulb } from 'lucide-react';

interface CritiqueSolutionsProps {
  onNavigate?: (id: string) => void;
}

const CritiqueSolutions: React.FC<CritiqueSolutionsProps> = ({ onNavigate }) => {
  const critiques = [
    "حفظ الملفات يدوياً يؤدي إلى التلف والضياع بمرور الوقت.",
    "صعوبة البحث عن الوثائق القديمة واسترجاعها بسرعة.",
    "تكرار تسجيل المعلومات في عدة سجلات ورقية (هدر للجهد).",
    "عدم الاستغلال الأمثل لأجهزة الإعلام الآلي المتوفرة بالمكتب."
  ];

  const solutions = [
    "تصميم نظام معلوماتي آلي متكامل لتسيير مكتب الأمانة.",
    "إنشاء قاعدة بيانات مركزية لتوحيد معلومات المتربصين.",
    "أتمتة طباعة الاستدعاءات والتقارير الدورية واليومية.",
    "تأمين البيانات من خلال نظام النسخ الاحتياطي الدوري."
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white overflow-hidden relative bg-teal-600" 
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

      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-2 relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">نقد الموجود والحلول</h2>
          <div className="flex items-center gap-3 text-teal-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">تقييم النظام الحالي ورؤية التطوير</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">07</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 min-h-0 relative z-10">
        <div className="bg-black/10 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 flex flex-col">
          <h3 className="text-2xl font-black mb-8 flex items-center gap-4 text-rose-300">
            <div className="p-3 bg-rose-500/20 rounded-2xl"><AlertCircle size={28} /></div>
            نقد النظام الحالي
          </h3>
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            {critiques.map((text, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0"><X size={20} className="text-rose-300" /></div>
                <p className="text-lg md:text-xl font-bold text-white/90 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 p-8 flex flex-col">
          <h3 className="text-2xl font-black mb-8 flex items-center gap-4 text-teal-100">
            <div className="p-3 bg-white/20 rounded-2xl"><Lightbulb size={28} /></div>
            الحلول المقترحة
          </h3>
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            {solutions.map((text, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0"><CheckCircle2 size={20} className="text-white" /></div>
                <p className="text-lg md:text-xl font-bold text-white/90 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CritiqueSolutions;