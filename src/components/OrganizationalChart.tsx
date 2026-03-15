"use client";

import React from 'react';
import { motion } from 'framer-motion';

const OrganizationalChart = () => {
  const imagePath = "/institution_structure.png"; 

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <img 
          src={imagePath} 
          alt="الهيكل التنظيمي للمؤسسة" 
          className="w-full h-full max-w-full max-h-full object-contain shadow-2xl rounded-xl transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent && !parent.querySelector('.error-msg')) {
              const errorMsg = document.createElement('div');
              errorMsg.className = 'error-msg text-white/40 font-black text-center p-8 flex flex-col items-center gap-4';
              errorMsg.innerHTML = `
                <div class="p-4 bg-white/10 rounded-full text-4xl">🖼️</div>
                <div class="space-y-2">
                  <p class="text-xl">صورة الهيكل التنظيمي</p>
                  <p class="text-sm font-mono opacity-60">المسار: ${imagePath}</p>
                </div>
              `;
              parent.appendChild(errorMsg);
            }
          }}
        />
      </motion.div>
    </div>
  );
};

export default OrganizationalChart;