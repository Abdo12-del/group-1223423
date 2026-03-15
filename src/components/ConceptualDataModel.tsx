"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Database, Layers } from 'lucide-react';

interface ConceptualDataModelProps {
  onNavigate?: (id: string) => void;
}

const ConceptualDataModel: React.FC<ConceptualDataModelProps> = ({ onNavigate }) => {
  const entities = [
    { name: "المتربص", attrs: ["رقم التسجيل", "الاسم", "اللقب", "تاريخ الازدياد"] },
    { name: "إذن الدخول", attrs: ["رقم الإذن", "التاريخ", "الساعة", "السبب"] },
    { name: "التعهد", attrs: ["رقم التعهد", "الملاحظات", "رقم البطاقة"] },
    { name: "الفرع", attrs: ["رقم الفرع", "اسم الفرع", "النمط"] },
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white relative bg-slate-950" 
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">النموذج التصوري MCD</h2>
          <div className="flex items-center gap-3 text-slate-400">
            <div className="h-1.5 w-12 bg-blue-500 rounded-full" />
            <p className="text-xl font-bold">هيكلة الكائنات والعلاقات المنطقية</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">03</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 items-center">
        {entities.map((entity, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <Layers size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-black mb-4 border-b border-white/10 pb-2 w-full">{entity.name}</h3>
            <div className="space-y-2">
              {entity.attrs.map((attr, i) => (
                <p key={i} className="text-sm text-slate-400 font-bold">{attr}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-500/10 rounded-3xl border border-blue-500/20 text-center">
        <p className="text-lg font-bold text-blue-200">العلاقات: يستخرج (1,N)، يحرر له (1,N)، يدرس (1,1)</p>
      </div>
    </motion.div>
  );
};

export default ConceptualDataModel;