"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Database, Code } from 'lucide-react';

interface PhysicalDataModelProps {
  onNavigate?: (id: string) => void;
}

const PhysicalDataModel: React.FC<PhysicalDataModelProps> = ({ onNavigate }) => {
  const sqlCode = `CREATE DATABASE [CFPA] ON PRIMARY
( NAME = N'CFDA', FILENAME = N'D:\\CFPA\\CFDA.mdf', 
  SIZE = 3072KB, MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
GO
CREATE TABLE [dbo].[stager](
  [id_stager] [int] NOT NULL, 
  [nom_stager] [varchar](25) NULL, 
  [prenom_stager] [varchar](25) NULL,
  CONSTRAINT [PK_stager] PRIMARY KEY ([id_stager])
) ON [PRIMARY]`;

  return (
    <motion.div 
      initial="initial" animate="animate"
      className="h-full w-full flex flex-col p-8 md:p-12 text-white overflow-hidden relative bg-orange-600" 
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-2">النموذج الفيزيائي (MPD)</h2>
          <div className="flex items-center gap-3 text-orange-100/70">
            <div className="h-1.5 w-12 bg-white/40 rounded-full" />
            <p className="text-xl font-bold">إنشاء قاعدة البيانات والجداول (SQL)</p>
          </div>
        </div>
        <div className="hidden md:block text-white/10 font-black text-7xl select-none leading-none">01</div>
      </div>

      <div className="flex-1 flex flex-col justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-950 rounded-[2.5rem] border border-white/10 p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <span className="text-xs font-mono text-slate-500 mr-4">SQL Query Analyzer - [New Query]</span>
          </div>
          
          <pre className="font-mono text-sm md:text-lg text-orange-300 leading-relaxed overflow-x-auto custom-scrollbar" dir="ltr">
            {sqlCode}
          </pre>
          
          <div className="absolute bottom-4 right-8 flex items-center gap-2 text-slate-700">
            <Terminal size={20} />
            <span className="text-[10px] font-black uppercase">Execute Script</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PhysicalDataModel;