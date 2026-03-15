"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InformationFlowProps {
  onNavigate?: (id: string) => void;
}

const InformationFlow: React.FC<InformationFlowProps> = ({ onNavigate }) => {
  const entities = [
    { id: 'director', label: 'المدير', gridPos: 'row-start-1 col-start-2' },
    { id: 'secretariat', label: 'أمانة المدير', gridPos: 'row-start-2 col-start-2', isCenter: true },
    { id: 'guardian', label: 'الولي / التلميذ', gridPos: 'row-start-2 col-start-1' }, // اليسار
    { id: 'sender', label: 'المؤسسة الباعثة', gridPos: 'row-start-2 col-start-3' }, // اليمين
    { id: 'department', label: 'المصلحة المعنية', gridPos: 'row-start-3 col-start-2' },
  ];

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 pb-12 text-white overflow-hidden relative bg-sky-800" 
      dir="rtl"
    >
      {/* زر العودة العائم */}
      <motion.button
        whileHover={{ y: 5 }}
        onClick={() => onNavigate?.('ch1-carousel')}
        className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors z-50"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">العودة للقائمة</span>
        <ChevronDown size={32} />
      </motion.button>

      {/* الهيدر الموحد */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-2 relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">مخطط تدفق المعلومات</h2>
          <div className="flex items-center gap-3 text-sky-200/70">
            <div className="h-1.5 w-12 bg-sky-400 rounded-full" />
            <p className="text-xl font-bold">تحليل المسارات الإدارية والتبادل المعلوماتي</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">06</div>
      </div>

      {/* حاوية المخطط المركزي */}
      <div className="flex-1 flex items-center justify-center relative">
        
        {/* طبقة الأسهم (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#7dd3fc" />
            </marker>
          </defs>
          
          {/* 1: من الولي (اليسار) إلى الأمانة */}
          <line x1="30%" y1="50%" x2="45%" y2="50%" stroke="#7dd3fc" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="37%" y="48%" fill="#bae6fd" fontSize="14" fontWeight="black">1</text>

          {/* 2: من الأمانة إلى الولي (اليسار) */}
          <line x1="45%" y1="53%" x2="30%" y2="53%" stroke="#7dd3fc" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="37%" y="58%" fill="#bae6fd" fontSize="14" fontWeight="black">2</text>

          {/* 3: من الأمانة إلى المدير */}
          <line x1="48%" y1="40%" x2="48%" y2="25%" stroke="#7dd3fc" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="45%" y="33%" fill="#bae6fd" fontSize="14" fontWeight="black">3</text>

          {/* 4: من المدير إلى الأمانة */}
          <line x1="50%" y1="25%" x2="50%" y2="40%" stroke="#7dd3fc" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="51%" y="33%" fill="#bae6fd" fontSize="14" fontWeight="black">4</text>

          {/* 5: من الأمانة إلى المؤسسة (اليمين) */}
          <line x1="55%" y1="50%" x2="70%" y2="50%" stroke="#7dd3fc" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="62%" y="48%" fill="#bae6fd" fontSize="14" fontWeight="black">5</text>

          {/* 6: سهم التجاوز (Bypass) من المدير إلى المصلحة */}
          <line x1="52%" y1="25%" x2="65%" y2="25%" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="6,4" />
          <line x1="65%" y1="25%" x2="65%" y2="75%" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="6,4" />
          <line x1="65%" y1="75%" x2="52%" y2="75%" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arrowhead)" />
          <text x="67%" y="50%" fill="#bae6fd" fontSize="14" fontWeight="black">6</text>

          {/* 7: من المصلحة إلى الأمانة (قصير صاعد) */}
          <line x1="48%" y1="75%" x2="48%" y2="60%" stroke="#7dd3fc" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="45%" y="68%" fill="#bae6fd" fontSize="14" fontWeight="black">7</text>
        </svg>

        {/* شبكة العناصر 3x3 */}
        <div className="grid grid-cols-3 grid-rows-3 gap-12 md:gap-24 w-full max-w-4xl relative z-10">
          {entities.map((entity) => (
            <div key={entity.id} className={cn("flex items-center justify-center", entity.gridPos)}>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                className={cn(
                  "px-8 py-5 rounded-3xl border-2 text-center font-black shadow-2xl min-w-[160px] md:min-w-[200px] transition-colors",
                  entity.isCenter 
                    ? "bg-white text-sky-900 border-white scale-110" 
                    : "bg-white/10 backdrop-blur-xl border-white/20 text-white"
                )}
              >
                {entity.label}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* مفتاح المخطط السفلي - تم حذف المستطيل */}
      <div className="mt-auto py-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs md:text-sm font-black text-sky-100/60">
          <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px]">1</span> استقبال البريد</div>
          <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px]">3</span> عرض البريد</div>
          <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px]">5</span> إرسال استدعاء</div>
          <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px]">6</span> توجيه للمصلحة</div>
        </div>
      </div>
    </motion.div>
  );
};

export default InformationFlow;