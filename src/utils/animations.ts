import { Variants } from 'framer-motion';

export const getTransitionVariants = (type: string = 'seamless'): Variants => {
  const variants: Record<string, Variants> = {
    'seamless': {
      initial: { opacity: 0, filter: 'blur(10px)', scale: 0.98 },
      animate: { opacity: 1, filter: 'blur(0px)', scale: 1 },
      exit: { opacity: 0, filter: 'blur(10px)', scale: 1.02 }
    },
    'slide-left': {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 }
    },
    'fade': {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    'zoom': {
      // الشريحة كحاوية تظهر فوراً بدون حركة لتجنب شعور "الشريحة الجديدة"
      initial: { opacity: 1 }, 
      animate: { opacity: 1 },
      exit: { opacity: 0, scale: 1.2, filter: 'blur(20px)' }
    }
  };

  return variants[type] || variants['seamless'];
};

// هذه هي الحركة التي ستجعل العناصر تخرج من قلب المعين
export const contentVariants: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0, // تبدأ من نقطة الصفر (داخل المعين)
    filter: 'blur(20px)',
  },
  animate: { 
    opacity: 1, 
    scale: 1, // تنفجر لتملأ الشاشة
    filter: 'blur(0px)',
    transition: { 
      duration: 0.6, 
      ease: [0.34, 1.56, 0.64, 1], // حركة ارتدادية قوية (Pop)
      delay: 0.1 
    }
  },
  exit: {
    opacity: 0,
    scale: 1.5,
    filter: 'blur(10px)',
    transition: { duration: 0.3 }
  }
};

export const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.05, // تتابع سريع جداً للعناصر لتبدو كطلقات متتالية
      delayChildren: 0.1
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  }
};