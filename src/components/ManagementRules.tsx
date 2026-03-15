"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, GitBranch, Settings } from 'lucide-react';

interface ManagementRulesProps {
  onNavigate?: (id: string) => void;
}

const ManagementRules: React.FC<ManagementRulesProps> = ({ onNavigate }) => {
  const rules = [
    "كل متربص يعطى له تعهد والتزام واحد أو أكثر.",
    "كل تعهد والتزام يخص متربص واحد ووحيد.",
    "كل متربص يمنح إذن دخول/خروج واحد أو أكثر.",
    "كل إذن دخول/خروج يخص متربص واحد ووحيد."
  ];

  const dependencies = [
    "رقم إذن الدخول ← تاريخ الدخول، ساعة الدخول",
    "رقم تسجيل المتربص ← الاسم، اللقب، تاريخ الازدياد",
    "رقم التعهد ← رقم التسجيل، اسم الولي، تاريخ الصدور",
    "رقم الفرع ← اسم الفرع، الأستاذ المسؤول"
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white relative bg-rose-500" 
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">قواعد التسيير و GDF</h2>
          <div className="flex items-center gap-3 text-rose-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">مخطط الارتباط الوظيفي والقيود المنطقية</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">02</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 overflow-hidden">
        <div className="bg-black/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10">
          <h3 className="text-2xl font-black mb-6 flex items-center gap-4 text-rose-200"><Settings size={28} /> قواعد التسيير</h3>
          <ul className="space-y-4">
            {rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-4 text-lg font-bold">
                <div className="w-2 h-2 bg-rose-300 rounded-full mt-2 shrink-0" />
                {rule}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/20">
          <h3 className="text-2xl font-black mb-6 flex items-center gap-4 text-rose-100"><GitBranch size={28} /> التبعات الوظيفية SAT</h3>
          <ul className="space-y-4">
            {dependencies.map((dep, i) => (
              <li key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 font-mono text-sm md:text-base">
                {dep}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ManagementRules;