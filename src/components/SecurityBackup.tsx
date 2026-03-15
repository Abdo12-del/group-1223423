"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ShieldCheck, HardDrive, RefreshCw, AlertTriangle } from 'lucide-react';

interface SecurityBackupProps {
  onNavigate?: (id: string) => void;
}

const SecurityBackup: React.FC<SecurityBackupProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white overflow-hidden relative bg-orange-700" 
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">الحماية والأرشفة</h2>
          <div className="flex items-center gap-3 text-orange-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">سلامة البيانات واستمرارية العمل</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">04</div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        <div className="bg-black/20 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 flex flex-col items-center text-center">
          <div className="p-6 bg-rose-500/20 rounded-3xl mb-6"><AlertTriangle size={48} className="text-rose-300" /></div>
          <h3 className="text-2xl font-black mb-4">مخاطر الفقدان</h3>
          <p className="text-lg text-orange-100/60 font-bold leading-relaxed">أعطال الأجهزة، الفيروسات، الأخطاء البشرية، أو انقطاع التيار الكهربائي المفاجئ.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/20 flex flex-col items-center text-center scale-105 shadow-2xl">
          <div className="p-6 bg-emerald-500/20 rounded-3xl mb-6"><ShieldCheck size={48} className="text-emerald-300" /></div>
          <h3 className="text-2xl font-black mb-4">إجراءات الصيانة</h3>
          <p className="text-lg text-white font-bold leading-relaxed">مخططات صيانة دورية (Maintenance Planes) تنفذ يومياً لضمان كفاءة القاعدة.</p>
        </div>

        <div className="bg-black/20 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 flex flex-col items-center text-center">
          <div className="p-6 bg-blue-500/20 rounded-3xl mb-6"><RefreshCw size={48} className="text-blue-300" /></div>
          <h3 className="text-2xl font-black mb-4">النسخ الاحتياطي</h3>
          <p className="text-lg text-orange-100/60 font-bold leading-relaxed">نسخة كاملة (Full) أسبوعياً، ونسخة جزئية (Differential) يومياً في مكان آمن.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SecurityBackup;