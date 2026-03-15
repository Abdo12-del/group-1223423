export type TransitionType = 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down' | 'fade' | 'zoom';

export interface SlideData {
  id: string;
  title?: string;
  content?: React.ReactNode;
  image?: string;
  layout?: 'default' | 'split' | 'centered';
  transition?: TransitionType;
  bgColor?: string; // خاصية جديدة للون الخلفية
}