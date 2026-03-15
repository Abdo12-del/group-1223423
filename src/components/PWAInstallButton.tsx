"use client";

import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const PWAInstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      // منع المتصفح من إظهار المطالبة التلقائية
      e.preventDefault();
      // حفظ الحدث لاستخدامه لاحقاً
      setDeferredPrompt(e);
      setIsVisible(true);
      console.log('PWA Install prompt is ready');
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // إظهار مطالبة التثبيت
    deferredPrompt.prompt();
    
    // انتظار رد المستخدم
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    
    // تنظيف المتغير وإخفاء الزر
    setDeferredPrompt(null);
    setIsVisible(false);

    if (outcome === 'accepted') {
      toast.success('جاري تثبيت التطبيق على جهازك...');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-[100] animate-bounce">
      <Button 
        onClick={handleInstallClick}
        className="bg-white text-blue-700 hover:bg-blue-50 font-black rounded-full shadow-2xl border-2 border-blue-200 px-6 py-6 flex items-center gap-3"
      >
        <Download size={24} />
        <span>تثبيت التطبيق للعرض أوفلاين</span>
      </Button>
    </div>
  );
};

export default PWAInstallButton;