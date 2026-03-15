"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon, ArrowLeft } from 'lucide-react';

export interface BentoItem {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  targetSlideId: string;
}

interface BentoNavigationProps {
  items: BentoItem[];
  onNavigate?: (slideId: string) => void;
  onBgChange?: (color: string) => void;
}

const BentoNavigation: React.FC<BentoNavigationProps> = ({ items, onNavigate, onBgChange }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleItemClick = (item: BentoItem) => {
    if (onBgChange) onBgChange(item.color);
    if (onNavigate) onNavigate(item.targetSlideId);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 bg-slate-50 dark:bg-slate-950" dir="rtl">
      
      {/* خلفية شبكية حديثة */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
          محتويات الفصل
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full opacity-20" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl relative z-10">
        {items.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => handleItemClick(item)}
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/10 shadow-xl transition-all duration-300",
                item.color,
                index === 0 ? "md:col-span-2 md:row-span-2" : "",
                index === 3 ? "md:col-span-2" : ""
              )}
            >
              <div className="relative h-full flex flex-col justify-between text-white z-10">
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-white/20 backdrop-blur-xl rounded-2xl shadow-inner">
                    <Icon size={32} />
                  </div>
                  <ArrowLeft className={cn("transition-transform duration-300", hoveredId === item.id ? "translate-x-[-8px]" : "")} />
                </div>

                <div className="mt-12">
                  <h3 className={cn("font-black leading-tight mb-2", index === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl")}>
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-bold text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* تأثير بصري خلفي */}
              <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
                <Icon size={180} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BentoNavigation;