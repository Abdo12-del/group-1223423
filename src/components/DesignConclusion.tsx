"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Quote, ArrowLeft, Database, Workflow, LayoutGrid, FileCode } from 'lucide-react';

interface DesignConclusionProps {
  onNavigate?: (id: string) => void;
}

const DesignConclusion: React.FC<DesignConclusionProps> = ({ onNavigate }) => {
  const steps = [
    { icon: Database, label: "MCD" },
    { icon: Workflow, label: "MCT" },
    { icon: LayoutGrid, label: "MOT" },
    { icon: FileCode, label: "MLD" },
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white overflow-hidden relative bg-indigo-900" 
      dir="rtl"
    >
      {/* زر العودة */}
      <motion.button
        whileHover={{ y: 5 }}
        onClick={() => onNavigate?.('ch2-carousel')}
        className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors z-50"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">العودة للقائمة</span>
        <ChevronDown size={32} />
      </motion.button>

      {/* الهيدر */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-2 relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">خلاصة الفصل الثاني</h2>
          <div className="flex items-center gap-3 text-indigo-200/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">نهاية الدراسة التصميمية</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">08</div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-12 items-center justify-center relative z-10">
        {/* نص الخلاصة */}
        <div className="lg:col-span-7 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/20 relative shadow-2xl"
          >
            <Quote className="absolute -top-6 -right-6 text-indigo-400 w-16 h-16 opacity-50" />
            
            <p className="text-xl md:text-2xl font-bold leading-relaxed text-indigo-50 text-justify">
              وصلنا في هذه المرحلة إلى تفصيل الحل المقترح وتصوره وأعطينا نظرة شاملة عن الدراسة التصورية، وهذا بناءً على ما تم تحليله في الدراسة التمهيدية وما استخلص منها.
            </p>
            
            <div className="h-px w-full bg-white/10 my-8" />
            
            <p className="text-lg md:text-xl font-medium leading-relaxed text-indigo-100/80 text-justify">
              وقد قمنا خلال هذا الفصل بطرح تصور للمعطيات في حقل الدراسة عن طريق النموذج التصوري للمعطيات بعد المرور على استخراج هذه المعطيات وتجميعها في قاموس المعطيات، مع حذف غير المستعمل، وانتهينا في هذا الفصل بالانتقال إلى النموذج التصوري للمعالجات والنموذج التنظيمي للمعالجات وفي الأخير النموذج المنطقي للمعطيات تمهيداً لاستغلاله في الحل التقني الموضح في الفصل الموالي.
            </p>
          </motion.div>
        </div>

        {/* المسار البصري */}
        <div className="hidden lg:flex flex-col gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg">
                <step.icon size={28} className="text-indigo-300" />
              </div>
              <div className="h-0.5 w-8 bg-indigo-400/30" />
              <span className="font-black text-xl tracking-widest text-indigo-200">{step.label}</span>
            </motion.div>
          ))}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mt-4"
          >
            <ArrowLeft size={32} className="text-indigo-400" />
          </motion.div>
        </div>
      </div>

      {/* تذييل */}
      <div className="mt-auto text-center opacity-30">
        <p className="text-sm font-black tracking-[0.5em] uppercase">Transition to Implementation Phase</p>
      </div>
    </motion.div>
  );
};

export default DesignConclusion;