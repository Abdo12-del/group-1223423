"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChapterNavigatorProps = {
  /** رقم الفاصل الذي يجب الانتقال إليه (0‑‑based) */
  onSelect: (chapterIndex: number) => void;
};

const chapters = [
  { id: 0, label: "1", color: "bg-blue-600" },
  { id: 1, label: "2", color: "bg-emerald-600" },
  { id: 2, label: "3", color: "bg-indigo-600" },
];

export const ChapterNavigator: React.FC<ChapterNavigatorProps> = ({
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 bottom-4 flex justify-center items-end z-50">
      {/* زر الفتح/الإغلاق */}
      <Button
        variant="ghost"
        size="icon"
        className="text-white bg-slate-900/70 backdrop-blur-md hover:bg-slate-800/80"
        onClick={() => setOpen((v) => !v)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* شريط الفصول */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="ml-4 flex gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            {chapters.map((ch) => (
              <Button
                key={ch.id}
                variant="ghost"
                size="icon"
                className={cn(
                  "h-10 w-10 rounded-full text-white font-bold",
                  ch.color,
                  "hover:scale-110 transition-transform"
                )}
                onClick={() => {
                  onSelect(ch.id);
                  setOpen(false);
                }}
              >
                {ch.label}
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChapterNavigator;