"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ConceptualProcessingModelProps {
  onNavigate?: (id: string) => void;
}

const FlowArrow = () => (
  <div className="flex flex-col items-center my-0.5">
    <div className="w-0.5 h-4 bg-blue-400/60" />
    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-blue-400/60" />
  </div>
);

const ConceptualProcessingModel: React.FC<ConceptualProcessingModelProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-6 md:p-8 text-white overflow-hidden relative bg-indigo-950" 
      dir="rtl"
    >
      {/* زر العودة */}
      <motion.button
        whileHover={{ y: 3 }}
        onClick={() => onNavigate?.('ch2-carousel')}
        className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-white/40 hover:text-white transition-colors z-50"
      >
        <span className="text-[8px] font-black uppercase tracking-widest">العودة</span>
        <ChevronDown size={20} />
      </motion.button>

      {/* الهيدر والترقيم */}
      <div className="mb-4 flex flex-col items-center text-center relative z-10 mt-6">
        <div className="w-full flex justify-between items-end px-4">
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight">النموذج التصوري للمعالجات (MCT)</h2>
            <p className="text-sm md:text-lg text-blue-300/80 font-bold">إجراء تسجيل بريد وارد</p>
          </div>
          <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none absolute right-8 top-0">04</div>
        </div>
        <div className="h-1 w-16 bg-blue-500 rounded-full mt-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      </div>

      {/* المخطط الانسيابي */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 scale-90 md:scale-100">
        <motion.div className="w-20 h-20 rounded-full border-2 border-blue-400 flex items-center justify-center bg-blue-500/10 text-center p-2">
          <span className="text-xs font-black text-blue-100 leading-tight">بريد وارد</span>
        </motion.div>
        <FlowArrow />
        <motion.div className="h-1.5 w-40 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
        <FlowArrow />
        <motion.div className="w-64 bg-white/5 backdrop-blur-md border border-blue-400/40 p-3 rounded-xl text-center shadow-xl">
          <h3 className="text-base font-black text-blue-100 mb-1">تسجيل المراسلة</h3>
          <div className="h-px w-full bg-white/10 mb-1" />
          <p className="text-[10px] text-blue-200/70 font-bold leading-tight">التحقق من البيانات ← التسجيل</p>
        </motion.div>
        <FlowArrow />
        <motion.div className="w-20 h-20 rounded-full border-2 border-blue-400 flex items-center justify-center bg-blue-500/10 text-center p-2">
          <span className="text-xs font-black text-blue-100 leading-tight">مراسلة مسجلة</span>
        </motion.div>
        <FlowArrow />
        <motion.div className="h-1.5 w-40 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
        <FlowArrow />
        <motion.div className="w-64 bg-white/5 backdrop-blur-md border border-blue-400/40 p-4 rounded-xl text-center shadow-xl">
          <h3 className="text-base font-black text-blue-100">معاينة وتوجيه</h3>
        </motion.div>
        <FlowArrow />
        <motion.div className="w-20 h-20 rounded-full border-2 border-blue-400 flex items-center justify-center bg-blue-500/10 text-center p-2">
          <span className="text-xs font-black text-blue-100 leading-tight">مراسلة موجهة</span>
        </motion.div>
      </div>

      <div className="mt-auto py-2 text-center opacity-20">
        <p className="text-[8px] font-black text-blue-300 tracking-[0.3em] uppercase">MCT Diagram Structure</p>
      </div>
    </motion.div>
  );
};

export default ConceptualProcessingModel;