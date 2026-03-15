"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowDown } from 'lucide-react';

interface OrganizationalProcessingModelProps {
  onNavigate?: (id: string) => void;
}

const OrganizationalProcessingModel: React.FC<OrganizationalProcessingModelProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-4 md:p-8 text-white overflow-hidden relative bg-slate-900" 
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
            <h2 className="text-2xl md:text-4xl font-black tracking-tight">النموذج التنظيمي للمعالجات (MOT)</h2>
            <p className="text-sm md:text-lg text-slate-400 font-bold">إجراء تسجيل بريد صادر</p>
          </div>
          <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none absolute right-8 top-0">05</div>
        </div>
      </div>

      {/* الجدول التنظيمي */}
      <div className="flex-1 border-2 border-white/20 rounded-2xl overflow-hidden flex flex-col bg-black/20 backdrop-blur-sm relative z-10">
        <div className="grid grid-cols-12 border-b-2 border-white/20 bg-white/5 font-black text-center text-xs md:text-sm">
          <div className="col-span-2 p-3 border-l-2 border-white/20">التردد</div>
          <div className="col-span-6 p-3 border-l-2 border-white/20">تسلسل المراحل</div>
          <div className="col-span-2 p-3 border-l-2 border-white/20">طبيعة المعالجة</div>
          <div className="col-span-2 p-3">منصب العمل</div>
        </div>
        <div className="flex-1 grid grid-cols-12 overflow-y-auto no-scrollbar">
          <div className="col-span-2 border-l-2 border-white/20 flex flex-col text-[10px] md:text-xs font-bold text-center">
            <div className="flex-1 flex items-center justify-center p-2 border-b border-white/10">عند استلام المراسلة</div>
            <div className="flex-1 flex items-center justify-center p-2 border-b border-white/10">بعد المراقبة</div>
            <div className="flex-1 flex items-center justify-center p-2">عند كل توجيه</div>
          </div>
          <div className="col-span-6 border-l-2 border-white/20 p-4 flex flex-col items-center gap-2 scale-90 md:scale-100">
            <div className="w-20 h-10 rounded-full border border-white/40 flex items-center justify-center text-[10px] bg-white/5">مراسلة</div>
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white/40" />
            <div className="w-48 border border-white/40 overflow-hidden rounded-sm">
              <div className="p-1 bg-white/10 text-[10px] text-center border-b border-white/20">ترقيم المراسلة و إعطائها تاريخ</div>
              <div className="p-1 text-[10px] text-center">دائماً</div>
            </div>
            <ArrowDown size={14} className="text-white/20" />
            <div className="w-24 h-10 rounded-full border border-white/40 flex items-center justify-center text-[10px] bg-white/5">مراسلة مرقمة</div>
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white/40" />
            <div className="w-48 border border-white/40 overflow-hidden rounded-sm">
              <div className="p-1 bg-white/10 text-[10px] text-center border-b border-white/20">تسجيل في السجل الصادر</div>
              <div className="p-1 text-[10px] text-center">دائماً</div>
            </div>
            <div className="flex gap-4 mt-2">
               <div className="w-20 h-10 rounded-full border border-white/40 flex items-center justify-center text-[8px] bg-white/5">مراسلة مرقمة</div>
               <div className="w-20 h-10 rounded-full border border-white/40 flex items-center justify-center text-[8px] bg-white/5">تحديد الوجهة</div>
            </div>
            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white/40 flex items-center justify-center">
                <span className="text-[10px] -mt-8 font-bold">و</span>
            </div>
            <div className="w-48 border border-white/40 overflow-hidden rounded-sm">
              <div className="p-1 bg-white/10 text-[10px] text-center border-b border-white/20">إرسال للمصلحة المعنية</div>
              <div className="p-1 text-[10px] text-center">دائماً</div>
            </div>
            <div className="w-20 h-10 rounded-full border border-white/40 flex items-center justify-center text-[10px] bg-white/5 mt-2">مراسلة مرسلة</div>
          </div>
          <div className="col-span-2 border-l-2 border-white/20 flex flex-col text-[10px] md:text-xs font-bold text-center">
            <div className="flex-1 flex items-center justify-center p-2 border-b border-white/10">يدوياً</div>
            <div className="flex-1 flex items-center justify-center p-2 border-b border-white/10">آلياً / يدوياً</div>
            <div className="flex-1 flex items-center justify-center p-2">يدوياً</div>
          </div>
          <div className="col-span-2 flex flex-col text-[10px] md:text-xs font-bold text-center">
            <div className="flex-1 flex items-center justify-center p-2 border-b border-white/10">مكتب أمانة المدير</div>
            <div className="flex-1 flex items-center justify-center p-2 border-b border-white/10">مكتب أمانة المدير</div>
            <div className="flex-1 flex items-center justify-center p-2">أمانة المدير</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrganizationalProcessingModel;