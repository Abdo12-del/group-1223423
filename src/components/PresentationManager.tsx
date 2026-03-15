"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import Slide from "./Slide";
import { SlideData } from "@/types/presentation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ChapterNavigator from "./ChapterNavigator";

interface PresentationManagerProps {
  slides: SlideData[];
}

const PresentationManager: React.FC<PresentationManagerProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [forcedBgColor, setForcedBgColor] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [lastDetailId, setLastDetailId] = useState<string | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    requestAnimationFrame(() => setShowApp(true));
  }, []);

  const nextSlide = useCallback(() => {
    setForcedBgColor(null);
    setIsReturning(false);
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setForcedBgColor(null);
    setIsReturning(false);
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlideById = useCallback((id: string, returning: boolean = false) => {
    const index = slides.findIndex(s => s.id === id);
    if (index !== -1) {
      if (returning) {
        const currentId = slides[currentSlide].id;
        const currentColor = slides[currentSlide].bgColor;
        setLastDetailId(currentId);
        // تثبيت اللون الحالي لمنع الوميض الأبيض
        setForcedBgColor(currentColor || null);
      } else {
        setLastDetailId(null);
      }
      
      setIsReturning(returning);
      setCurrentSlide(index);
      
      // إزالة تثبيت اللون بعد انتهاء الحركة
      setTimeout(() => setForcedBgColor(null), 800);
    }
  }, [slides, currentSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentId = slides[currentSlide].id;
      const isCarouselSlide = currentId.includes('carousel');

      if (isCarouselSlide && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
        return; 
      }

      if (e.key === "ArrowDown") {
        if (currentId.startsWith('ch1-') && currentId !== 'ch1-carousel') goToSlideById('ch1-carousel', true);
        else if (currentId.startsWith('ch2-') && currentId !== 'ch2-carousel') goToSlideById('ch2-carousel', true);
        else if (currentId.startsWith('ch3-') && currentId !== 'ch3-carousel') goToSlideById('ch3-carousel', true);
        return;
      }

      if (e.key === " " || e.key === "Enter") { 
        e.preventDefault(); 
        nextSlide(); 
      }
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "f") toggleFullscreen();
      
      handleMouseMove();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [nextSlide, prevSlide, handleMouseMove, currentSlide, slides, goToSlideById]);

  const handleChapterSelect = (chapterIdx: number) => {
    const chapterIds = ['ch1-carousel', 'ch2-carousel', 'ch3-carousel'];
    goToSlideById(chapterIds[chapterIdx], false);
  };

  return (
    <div className={cn("relative w-screen h-screen overflow-hidden transition-colors duration-700", forcedBgColor || slides[currentSlide].bgColor || "bg-white dark:bg-slate-950", !showApp && "opacity-0")}>
      {showApp && (
        <>
          <div className="relative w-full h-full z-10">
            <AnimatePresence initial={false} mode="wait">
              <Slide
                key={slides[currentSlide].id}
                data={slides[currentSlide]}
                isActive
                onNavigate={(idOrIndex) => {
                  if (typeof idOrIndex === 'string') {
                    const isGoingToCarousel = idOrIndex.includes('carousel');
                    goToSlideById(idOrIndex, isGoingToCarousel);
                  }
                  else if (typeof idOrIndex === 'number') setCurrentSlide(idOrIndex);
                }}
                onBgChange={setForcedBgColor}
                {...(slides[currentSlide].id.includes('carousel') ? { isReturning, lastDetailId } : {})}
              />
            </AnimatePresence>
          </div>

          <motion.div
            animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20, x: "-50%" }}
            className="absolute bottom-8 left-1/2 flex items-center gap-3 bg-slate-900/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl border border-white/10 z-50"
          >
            <Button variant="ghost" size="icon" className="text-white" onClick={prevSlide} disabled={currentSlide === 0}><ChevronLeft /></Button>
            <div className="px-4 border-x border-white/10 text-white font-bold">{currentSlide + 1} / {slides.length}</div>
            <Button variant="ghost" size="icon" className="text-white" onClick={nextSlide} disabled={currentSlide === slides.length - 1}><ChevronRight /></Button>
            <Button variant="ghost" size="icon" className="text-white ml-2" onClick={toggleFullscreen}>{isFullscreen ? <Minimize /> : <Maximize />}</Button>
          </motion.div>

          <ChapterNavigator onSelect={handleChapterSelect} />
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-50">
            <motion.div className="h-full bg-white/40" animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
          </div>
        </>
      )}
    </div>
  );
};

export default PresentationManager;