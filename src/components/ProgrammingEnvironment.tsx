"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Monitor, Cpu, Zap, Box } from 'lucide-react';

interface ProgrammingEnvironmentProps {
  onNavigate?: (id: string) => void;
}

const ProgrammingEnvironment: React.FC<ProgrammingEnvironmentProps> = ({ onNavigate }) => {
  const features = [
    { icon: Zap, text: "لغة مرئية وتعتمد على الكائنات (OOP)" },
    { icon: Cpu, text: "كفاءة عالية في التجميع (Compilation)" },
    { icon: Box, text: "إمكانية إنشاء ملفات تنفيذية (EXE) ومكتبات (DLL)" },
    { icon: Monitor, text: "بيئة تطوير سريعة (RAD) لنظام ويندوز" },
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white overflow-hidden relative bg-orange-500" 
      dir="rtl"
    >
      <motion.button
        whileHover={{ y: 5 }}
        onClick={() => onNavigate?.('ch3-carousel')}
        className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors z-50"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">العودة للقائمة</span>
        <ChevronDown size={32} />
      </motion.button>

      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-2 relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">بيئة البرمجة: Delphi 7</h2>
          <div className="flex items-center gap-3 text-orange-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">أداة التطوير السريع للتطبيقات (RAD)</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">03</div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-6">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/20 transition-colors"
            >
              <div className="p-4 bg-orange-400 rounded-2xl shadow-lg">
                <item.icon size={28} />
              </div>
              <p className="text-xl md:text-2xl font-black">{item.text}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="hidden lg:flex justify-center">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-80 h-80 bg-white/5 rounded-[4rem] border border-white/20 flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-full" />
            <Monitor size={160} className="text-white/20 absolute" />
            <div className="text-8xl font-black text-white drop-shadow-2xl">D7</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgrammingEnvironment;