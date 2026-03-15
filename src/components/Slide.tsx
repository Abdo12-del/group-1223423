"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SlideData } from '@/types/presentation';
import { getTransitionVariants, contentVariants, containerVariants } from '@/utils/animations';

interface SlideProps {
  data: SlideData;
  isActive: boolean;
  onNavigate?: (idOrIndex: string | number) => void;
  onBgChange?: (color: string) => void;
  isReturning?: boolean;
  lastDetailId?: string | null;
}

const Slide: React.FC<SlideProps> = ({ data, isActive, onNavigate, onBgChange, isReturning, lastDetailId }) => {
  const transitionVariants = getTransitionVariants(data.transition || 'seamless');

  // تمرير الخصائص للمكونات الداخلية
  const contentWithProps = React.isValidElement(data.content) && typeof data.content.type !== 'string'
    ? React.cloneElement(data.content as React.ReactElement<any>, { onNavigate, onBgChange, isReturning, lastDetailId })
    : data.content;

  const isColored = data.bgColor && !data.bgColor.includes('white') && !data.bgColor.includes('slate-950');

  return (
    <motion.div
      initial="initial"
      animate={isActive ? "animate" : "initial"}
      exit="exit"
      variants={transitionVariants}
      className={cn(
        "absolute inset-0 overflow-hidden",
        // إذا لم يكن هناك لون محدد، نجعلها شفافة لكي يظهر لون PresentationManager
        data.bgColor || "bg-transparent", 
        !isActive && "pointer-events-none"
      )}
    >
      <motion.div 
        variants={containerVariants}
        className="h-full w-full relative z-10 flex flex-col items-center justify-center"
      >
        {data.content ? (
          <motion.div variants={contentVariants} className="h-full w-full">
            {contentWithProps}
          </motion.div>
        ) : (
          <div className="flex flex-col h-full w-full p-12 md:p-24 justify-center" dir="rtl">
            <motion.div 
              variants={contentVariants}
              className={cn(
                "mb-16 border-b pb-8 text-center md:text-right",
                isColored ? "border-white/20" : "border-slate-100 dark:border-slate-800"
              )}
            >
              <h1 className={cn(
                "text-6xl md:text-8xl font-black tracking-tight",
                isColored ? "text-white" : "text-slate-900 dark:text-slate-100"
              )}>
                {data.title || "عنوان الشريحة"}
              </h1>
            </motion.div>

            <div className="flex-1 space-y-8 max-w-4xl mx-auto md:mx-0 w-full">
              <motion.div variants={contentVariants} className={cn("h-8 w-full rounded-xl", isColored ? "bg-white/10" : "bg-slate-50 dark:bg-slate-900/50")} />
              <motion.div variants={contentVariants} className={cn("h-8 w-11/12 rounded-xl", isColored ? "bg-white/10" : "bg-slate-50 dark:bg-slate-900/50")} />
              <motion.div variants={contentVariants} className={cn("h-8 w-4/5 rounded-xl", isColored ? "bg-white/10" : "bg-slate-50 dark:bg-slate-900/50")} />
            </div>

            <motion.div 
              variants={contentVariants}
              className={cn(
                "mt-auto pt-12 flex justify-between items-center text-sm uppercase tracking-[0.3em] font-bold",
                isColored ? "text-white/60" : "text-slate-400"
              )}
            >
              <div className="flex items-center gap-4">
                <div className={cn("w-3 h-3 rounded-full", isColored ? "bg-white" : "bg-primary")} />
                <span>نظام تسيير أمانة المدير</span>
              </div>
              <span>2023 / 2024</span>
            </motion.div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Slide;