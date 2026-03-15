"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Key } from 'lucide-react';

const SATDiagram = () => {
  const dependencies = [
    { 
      key: "رقم إذن الدخول", 
      attrs: ["تاريخ إذن الدخول", "ساعة الدخول"] 
    },
    { 
      key: "رقم الفرع", 
      attrs: ["اسم الفرع", "تاريخ الفرع", "الأستاذ المسؤول", "نمط التكوين"] 
    },
    { 
      key: "رقم تسجيل المتربص", 
      attrs: ["اسم المتربص", "لقب المتربص", "تاريخ الازدياد"] 
    },
    { 
      key: "رقم تعهد والتزام", 
      attrs: ["رقم التسجيل", "اسم المتربص", "لقب المتربص", "التخصص", "اسم الولي", "لقب الولي", "تاريخ الصدور"] 
    },
    { 
      key: "رقم إذن الخروج", 
      attrs: ["تاريخ إذن الخروج", "ساعة الخروج"] 
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 overflow-y-auto custom-scrollbar" dir="rtl">
      <div className="grid grid-cols-1 gap-6 w-full max-w-6xl">
        {dependencies.map((dep, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all group shadow-xl"
          >
            {/* المحدد (Determinant) */}
            <div className="flex items-center gap-3 bg-rose-500 px-6 py-4 rounded-2xl shadow-lg shrink-0 min-w-[220px] justify-center">
              <Key size={24} className="text-rose-100" />
              <span className="text-xl md:text-2xl font-black text-white">{dep.key}</span>
            </div>

            {/* سهم الارتباط */}
            <div className="flex items-center justify-center text-rose-400 group-hover:scale-125 transition-transform">
              <ArrowLeft size={40} strokeWidth={3} />
            </div>

            {/* التوابع (Dependents) */}
            <div className="flex flex-wrap gap-3 flex-1">
              {dep.attrs.map((attr, i) => (
                <div 
                  key={i} 
                  className="bg-white/10 border border-white/20 px-5 py-3 rounded-xl text-lg md:text-xl font-bold text-rose-50 shadow-sm hover:bg-rose-500/20 transition-colors"
                >
                  {attr}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SATDiagram;