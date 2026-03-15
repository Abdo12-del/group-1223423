"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { School, MapPin, Users, BookOpen, ChevronDown } from 'lucide-react';

interface InstitutionIntroProps {
  onNavigate?: (id: string) => void;
}

const InstitutionIntro: React.FC<InstitutionIntroProps> = ({ onNavigate }) => {
  const hrData = [
    { label: "المدير والمدراء الفرعيين", value: "04" },
    { label: "رؤساء المصالح", value: "08" },
    { label: "الأساتذة", value: "29" },
    { label: "الإداريين", value: "13" },
    { label: "المراقبين", value: "05" },
  ];

  const specialties = [
    "صيانة تجهيزات الحاسوب", "هندسة معمارية", "التهيئة العمرانية",
    "التوثيق والأرشيف", "التسويق", "مراقبة الجودة والأغذية"
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white relative bg-blue-600" 
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">تعريف مكان التربص</h2>
          <div className="flex items-center gap-3 text-blue-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">المعهد الوطني المتخصص بالوادي</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">01</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 overflow-hidden">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex-1">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3"><Users size={20} /> الموارد البشرية</h3>
            <div className="space-y-3">
              {hrData.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-sm font-bold">{item.label}</span>
                  <span className="text-lg font-black">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex-1">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3"><BookOpen size={20} /> التخصصات المتاحة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {specialties.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-2 h-2 bg-blue-300 rounded-full" />
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InstitutionIntro;