"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, BarChart3, Database, Code2, ChevronLeft, ChevronRight, 
  Layers, School, Share2, FileText, ClipboardCheck, Flag, 
  ArrowRight, Info, CheckCircle2, GitBranch, FileSpreadsheet, 
  TableProperties, Network, Terminal, ShieldCheck, Monitor, 
  ClipboardList, Activity, Briefcase, Layout, Server, Cpu, 
  UserCircle, GitGraph, Heart, Workflow, FileSearch, ListOrdered,
  Settings, BookOpen, ArrowLeftRight, DatabaseZap, Search, AlertCircle, Lightbulb,
  HelpCircle, GraduationCap
} from 'lucide-react';
import { cn } from '@/lib/utils';

// تعريف الفصول
const CHAPTERS = [
  { id: 'cap-1', title: 'التمهيدية', icon: BarChart3, color: 'bg-emerald-500', shadow: 'shadow-emerald-400/40', startIdx: 3 },
  { id: 'cap-2', title: 'التصميمية', icon: Database, color: 'bg-rose-500', shadow: 'shadow-rose-400/40', startIdx: 17 },
  { id: 'cap-3', title: 'التقنية', icon: Code2, color: 'bg-amber-500', shadow: 'shadow-amber-400/40', startIdx: 28 },
];

// تعريف الشرائح
const SLIDES = [
  // --- شريحة العنوان الرئيسية ---
  {
    id: 'main-title',
    chapter: 'واجهة المذكرة',
    title: 'نظام تسيير الأمانة',
    desc: 'مذكرة نيل شهادة تقني سامي',
    content: (
      <div className="w-full h-full flex flex-col items-center justify-between py-2 text-center relative" dir="rtl">
        <div className="absolute top-0 left-0 w-20 h-20 md:w-28 md:h-28 z-20">
          <img src="/Picture1.png" alt="Logo Left" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 md:w-28 md:h-28 z-20">
          <img src="/Picture1.png" alt="Logo Right" className="w-full h-full object-contain" />
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        
        <div className="space-y-0.5 relative z-10 mt-2">
          <h4 className="text-base md:text-lg font-black text-white">الجمهورية الجزائرية الديموقراطية الشعبية</h4>
          <h4 className="text-base md:text-lg font-black text-white">وزارة التكوين والتعليم المهنيين</h4>
          <h5 className="text-sm md:text-base font-bold text-blue-100/80">المعهد الوطني المتخصص في التكوين والتعليم المهني الشهيد عمامرة بشير</h5>
        </div>

        <div className="bg-white/10 backdrop-blur-2xl p-6 md:p-10 rounded-[3rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-5xl w-full my-4 relative z-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          
          <p className="text-base md:text-lg font-bold mb-2 text-blue-200">مذكرة تخرج تدخل ضمن متطلبات نيل شهادة تقني سامي خيار إعلام آلي</p>
          <p className="text-lg md:text-xl font-black mb-4 border-b border-white/10 pb-2 text-white">اختصاص : قاعدة معطيات</p>
          
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white">الموضــــــــــــوع:</h1>
            <h2 className="text-2xl md:text-4xl font-black text-blue-300 drop-shadow-lg leading-tight">
              تصميم وبرمجة نظام معلوماتي لمتابعة غيابات المتربصين
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full max-w-5xl text-right relative z-10 mb-2">
          <div className="space-y-2 bg-white/5 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-lg font-black border-b border-white/20 pb-1 flex items-center gap-2 text-blue-200">
              <UserCircle size={20} className="text-blue-400" /> إعداد المتربصات:
            </h3>
            <ul className="space-y-0.5 text-base md:text-lg font-bold text-white">
              <li>• هيمه لميس</li>
              <li>• خامسة رحمة</li>
              <li>• قدادرة عائشة</li>
            </ul>
          </div>
          <div className="space-y-2 bg-white/5 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-lg font-black border-b border-white/20 pb-1 flex items-center gap-2 text-blue-200">
              <GraduationCap size={20} className="text-blue-400" /> تحت إشراف المؤطرة:
            </h3>
            <p className="text-xl md:text-2xl font-black pt-1 text-white">صبرينة قرزي</p>
          </div>
        </div>

        <div className="relative z-10 pb-2">
          <p className="text-lg font-black tracking-widest text-blue-100">دفعة مارس 2026</p>
        </div>
      </div>
    ),
    icon: GraduationCap,
    color: 'bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900'
  },

  // --- المقدمة العامة ---
  { 
    id: 'intro-1', 
    chapter: 'مقدمة العرض', 
    title: 'أهمية تسيير المؤسسة', 
    desc: 'نظم المعلومات كركيزة أساسية', 
    content: 'تعتبر المعلومة المادة الأولية لاتخاذ القرار. في ظل التطور التكنولوجي، أصبح لزاماً على المؤسسات الانتقال من التسيير التقليدي إلى التسيير الآلي لضمان سرعة المعالجة، دقة النتائج، وتوفير الجهد البشري والمادي.', 
    icon: Home, 
    color: 'bg-blue-600' 
  },
  { 
    id: 'intro-2', 
    chapter: 'مقدمة العرض', 
    title: 'طرح الإشكالية', 
    desc: 'التساؤل الجوهري للمشروع', 
    content: 'هل نستطيع تصميم نظام معلوماتي يساعد في متابعة غيابات المتربصين بطريقة منظمة وآمنة؟', 
    icon: HelpCircle, 
    color: 'bg-blue-600' 
  },

  // --- الفصل الأول: الدراسة التمهيدية ---
  { 
    id: 'ch1-preface', 
    chapter: 'الدراسة التمهيدية', 
    title: 'تمهيد الفصل الأول', 
    desc: 'مدخل للدراسة التحليلية', 
    content: 'تعتبر الدراسة التمهيدية حجر الأساس في بناء أي نظام معلوماتي، حيث تهدف إلى فهم معمق للنظام الموجود، وتحليل نقاط قوته وضعفه، وتحديد المتطلبات الحقيقية للمستخدمين قبل الشروع في عملية التصميم.', 
    icon: Info, 
    color: 'bg-emerald-600' 
  },
  { 
    id: 'ch1-institution', 
    chapter: 'الدراسة التمهيدية', 
    title: '1. التعريف بالمؤسسة', 
    desc: 'المعهد الوطني المتخصص بالوادي', 
    content: 'يعد المعهد قطباً تكوينياً هاماً، يهدف إلى تكوين يد عاملة مؤهلة (تقني سامي) في تخصصات متنوعة. يتميز بهيكل تنظيمي محكم يضم مصالح إدارية وبيداغوجية تعمل بالتنسيق لضمان سيرورة التكوين.', 
    icon: School, 
    color: 'bg-emerald-600' 
  },
  { 
    id: 'ch1-org-chart', 
    chapter: 'الدراسة التمهيدية', 
    title: '2. الهيكل التنظيمي', 
    desc: 'توضيح حقل الدراسة ضمن الهيكل', 
    content: <img src="/institution_structure.png" alt="الهيكل التنظيمي" className="w-full h-full object-contain drop-shadow-2xl" />, 
    icon: GitGraph, 
    color: 'bg-emerald-600',
    isFullImage: true
  },
  { 
    id: 'ch1-field-def', 
    chapter: 'الدراسة التمهيدية', 
    title: '3. التعريف بحقل الدراسة', 
    desc: 'مصلحة المراقبة العامة والمرافقة', 
    content: 'حقل الدراسة هو "مكتب أمانة المدير" التابع لمصلحة المراقبة العامة. هذا المكتب مسؤول عن استقبال المتربصين، تسجيل غياباتهم، إصدار أذونات الدخول والخروج، ومتابعة الانضباط العام داخل المعهد.', 
    icon: Search, 
    color: 'bg-emerald-600' 
  },
  { 
    id: 'ch1-jobs-summary', 
    chapter: 'الدراسة التمهيدية', 
    title: '4. دراسة المناصب (ملخص)', 
    desc: 'حصر القوى البشرية في حقل الدراسة', 
    content: 'تهدف دراسة المناصب إلى تحديد المسؤوليات والمهام المنوطة بكل موظف. في هذه الدراسة، قمنا بتحليل منصبين أساسيين (02) هما: منصب المراقب العام، ومنصب عون الأمانة، للوقوف على كيفية معالجتهم للمعلومات.', 
    icon: Briefcase, 
    color: 'bg-emerald-600' 
  },
  { 
    id: 'ch1-job-example', 
    chapter: 'الدراسة التمهيدية', 
    title: '5. مثال على منصب مدروس', 
    desc: 'تحليل منصب المراقب', 
    isInteractive: true, 
    parts: [
      { 
        label: 'بطاقة التعريف', 
        icon: Info, 
        list: [
          'التبعية: مصلحة المراقبة العامة والمرافقة.',
          'المؤهلات: شهادة تقني سامي في الإعلام الآلي.',
          'العدد: موظفان يعملان بنظام التناوب.',
          'الوسائل: مكتب مجهز، حاسوب، سجلات ورقية.'
        ] 
      },
      { 
        label: 'المهام والتردد', 
        icon: ClipboardList, 
        table: { 
          headers: ['المهمة الأساسية', 'وتيرة التنفيذ'], 
          rows: [
            ['مراقبة حضور وانضباط المتربصين', 'بشكل مستمر'],
            ['تسجيل الغيابات اليومية في السجلات', 'يومياً'],
            ['إعداد قوائم المتربصين المطرودين', 'نهاية كل سداسي']
          ] 
        } 
      }
    ], 
    icon: UserCircle, 
    color: 'bg-emerald-600' 
  },
  { 
    id: 'ch1-docs-summary', 
    chapter: 'الدراسة التمهيدية', 
    title: '6. دراسة الوثائق (ملخص)', 
    desc: 'حصر الأوعية المعلوماتية الورقية', 
    content: 'دراسة الوثائق تسمح لنا بمعرفة البيانات المتداولة ومصدرها ومصيرها. قمنا في هذه المرحلة بدراسة أربع وثائق (04) أساسية تشكل عصب التبادل المعلوماتي في مكتب الأمانة.', 
    icon: FileText, 
    color: 'bg-emerald-600' 
  },
  { 
    id: 'ch1-doc-example', 
    chapter: 'الدراسة التمهيدية', 
    title: '7. مثال على وثيقة مدروسة', 
    desc: 'تحليل وثيقة التعهد والالتزام', 
    isInteractive: true, 
    parts: [
      { 
        label: 'بطاقة الوثيقة', 
        icon: Layout, 
        list: [
          'الهدف: إلزام المتربص وولي أمره بالانضباط.',
          'المصدر: مكتب أمانة المدير.',
          'المصير: تحفظ في ملف المتربص.',
          'النسخ: نسخة أصلية واحدة.'
        ] 
      },
      { 
        label: 'البيانات المكونة', 
        icon: ListOrdered, 
        table: { 
          headers: ['المعلومة', 'النوع', 'الطول'], 
          rows: [
            ['رقم التعهد', 'رقمي', '05'],
            ['اسم الولي', 'حرفي', '30'],
            ['رقم بطاقة التعريف', 'رقمي', '12'],
            ['تاريخ الصدور', 'تاريخ', '10']
          ] 
        } 
      }
    ], 
    icon: ClipboardCheck, 
    color: 'bg-emerald-600' 
  },
  { 
    id: 'ch1-procs-summary', 
    chapter: 'الدراسة التمهيدية', 
    title: '8. دراسة الإجراءات (ملخص)', 
    desc: 'تحليل تسلسل العمليات الإدارية', 
    content: 'الإجراءات هي المسارات التي تسلكها الوثائق بين المناصب. قمنا بدراسة أربعة إجراءات (04) رئيسية: إجراء التعهد، بطاقة المعلومات، إذن الدخول، وإذن الخروج، لتحديد كيفية معالجة الطلبات والبيانات.', 
    icon: Workflow, 
    color: 'bg-emerald-700' 
  },
  { 
    id: 'ch1-proc-example', 
    chapter: 'الدراسة التمهيدية', 
    title: '9. مثال على إجراء مدروس', 
    desc: 'مخطط إجراء التعهد والالتزام', 
    content: <img src="/procedures_diagram.png" alt="مخطط الإجراءات" className="w-full h-full object-contain drop-shadow-2xl" />, 
    icon: Activity, 
    color: 'bg-emerald-700',
    isFullImage: true
  },
  { 
    id: 'ch1-data-flow', 
    chapter: 'الدراسة التمهيدية', 
    title: '10. مخطط تدفق المعلومات', 
    desc: 'تحليل التبادل المعلوماتي الخارجي والداخلي', 
    content: <img src="/data_flow_diagram.png" alt="مخطط تدفق المعلومات" className="w-full h-full object-contain drop-shadow-2xl" />, 
    icon: Share2, 
    color: 'bg-sky-800',
    isFullImage: true
  },
  { 
    id: 'ch1-critique', 
    chapter: 'الدراسة التمهيدية', 
    title: '11. نقد الموجود', 
    desc: 'تشخيص مشاكل النظام الحالي', 
    list: [
      'بطء شديد في استرجاع المعلومات التاريخية للمتربصين.',
      'تكرار تسجيل نفس البيانات في عدة سجلات (هدر للوقت).',
      'خطر تلف أو ضياع السجلات الورقية بمرور الزمن.',
      'صعوبة استخراج الإحصائيات الدورية بدقة وسرعة.'
    ], 
    icon: AlertCircle, 
    color: 'bg-rose-700' 
  },
  { 
    id: 'ch1-solutions', 
    chapter: 'الدراسة التمهيدية', 
    title: '12. الحلول المقترحة', 
    desc: 'الرؤية التطويرية للنظام', 
    list: [
      'تصميم قاعدة بيانات مركزية توحد معلومات المتربصين.',
      'أتمتة عملية طباعة التعهدات وأذونات الدخول.',
      'توفير نظام بحث سريع وذكي عن ملفات المتربصين.',
      'تأمين البيانات عبر نظام النسخ الاحتياطي الدوري.'
    ], 
    icon: Lightbulb, 
    color: 'bg-emerald-700' 
  },
  { 
    id: 'ch1-conclusion', 
    chapter: 'الدراسة التمهيدية', 
    title: '13. خلاصة الفصل الأول', 
    desc: 'نتيجة الدراسة التحليلية', 
    content: 'أكدت الدراسة التحليلية ضرورة الانتقال إلى النظام الآلي كحل حتمي لتجاوز عقبات التسيير التقليدي، مما يمهد الطريق للدراسة التصميمية لبناء هيكل النظام الجديد.', 
    icon: CheckCircle2, 
    color: 'bg-emerald-900' 
  },

  // --- الفصل الثاني: الدراسة التصميمية ---
  { 
    id: 'ch2-preface', 
    chapter: 'الدراسة التصميمية', 
    title: 'تمهيد الفصل الثاني', 
    desc: 'مدخل للنمذجة والتصميم', 
    content: 'بعد الانتهاء من تحليل النظام الموجود، ننتقل في هذا الفصل إلى مرحلة التصميم، حيث نقوم ببناء النماذج التصورية والمنطقية التي ستشكل الهيكل الأساسي لقاعدة البيانات والعمليات البرمجية للنظام الجديد.', 
    icon: Info, 
    color: 'bg-rose-600' 
  },
  { 
    id: 'ch2-dictionary-def', 
    chapter: 'الدراسة التصميمية', 
    title: '1. تعريف قاموس المعطيات', 
    desc: 'الأساس النظري لحصر المعلومات', 
    content: 'قاموس المعطيات هو لائحة تحتوي على كل المعلومات المصفاة والمستخرجة من الدراسة التمهيدية، حيث يتم تحديد طبيعة كل معلومة (رقمي، حرفي، تاريخ) وطولها، وهو الخطوة الأساسية لضمان هيكلة سليمة لقاعدة البيانات ومنع تكرار المعطيات.', 
    icon: Info, 
    color: 'bg-rose-600' 
  },
  { 
    id: 'ch2-dictionary-table', 
    chapter: 'الدراسة التصميمية', 
    title: '2. قاموس المعطيات (31 حقل)', 
    desc: 'توصيف شامل لكافة بيانات النظام', 
    isInteractive: true, 
    parts: [
      { 
        label: 'الجزء الأول (1-15)', 
        icon: TableProperties, 
        table: { 
          headers: ['المعلومة', 'النوع', 'الطول'], 
          rows: [
            ['رقم المتربص', 'رقمي', '05'],
            ['اسم المتربص', 'حرفي', '20'],
            ['لقب المتربص', 'حرفي', '20'],
            ['تاريخ الازدياد', 'تاريخ', '10'],
            ['مكان الازدياد', 'حرفي', '20'],
            ['العنوان الشخصي', 'حرفي', '50'],
            ['رقم الهاتف', 'رقمي', '10'],
            ['الجنس', 'حرفي', '01'],
            ['الحالة العائلية', 'حرفي', '10'],
            ['رقم الفرع', 'رقمي', '03'],
            ['اسم الفرع', 'حرفي', '30'],
            ['التخصص', 'حرفي', '30'],
            ['نمط التكوين', 'حرفي', '20'],
            ['المستوى الدراسي', 'حرفي', '20'],
            ['الأستاذ المسؤول', 'حرفي', '30']
          ] 
        } 
      },
      { 
        label: 'الجزء الثاني (16-31)', 
        icon: TableProperties, 
        table: { 
          headers: ['المعلومة', 'النوع', 'الطول'], 
          rows: [
            ['رقم التعهد', 'رقمي', '05'],
            ['اسم الولي', 'حرفي', '20'],
            ['لقب الولي', 'حرفي', '20'],
            ['رقم بطاقة التعريف', 'رقمي', '12'],
            ['تاريخ صدور البطاقة', 'تاريخ', '10'],
            ['مكان صدور البطاقة', 'حرفي', '20'],
            ['ملاحظات التعهد', 'حرفي', '100'],
            ['رقم إذن الدخول', 'رقمي', '05'],
            ['تاريخ الدخول', 'تاريخ', '10'],
            ['ساعة الدخول', 'توقيت', '05'],
            ['سبب الدخول', 'حرفي', '50'],
            ['رقم إذن الخروج', 'رقمي', '05'],
            ['تاريخ الخروج', 'تاريخ', '10'],
            ['ساعة الخروج', 'توقيت', '05'],
            ['سبب الخروج', 'حرفي', '50'],
            ['حالة المتربص', 'حرفي', '10']
          ] 
        } 
      }
    ], 
    icon: TableProperties, 
    color: 'bg-rose-600' 
  },
  { 
    id: 'ch2-sat-explanation', 
    chapter: 'الدراسة التصميمية', 
    title: '3. التبعات الوظيفية (SAT)', 
    desc: 'الروابط المنطقية بين البيانات', 
    content: 'التبعية الوظيفية هي علاقة اعتماد بين صفتين أو أكثر، حيث تحدد قيمة صفة معينة (المحدد) قيمة صفة أخرى بشكل فريد، وهي أساس بناء العلاقات في قاعدة البيانات.', 
    icon: Network, 
    color: 'bg-rose-600' 
  },
  { 
    id: 'ch2-functional-linkage', 
    chapter: 'الدراسة التصميمية', 
    title: '4. مخطط الارتباطات الوظيفية', 
    desc: 'التمثيل البياني للتبعات الوظيفية', 
    content: <img src="/functional_linkage_diagram.png" alt="مخطط الارتباط الوظيفي" className="w-full h-full object-contain drop-shadow-2xl" />, 
    icon: GitBranch, 
    color: 'bg-rose-500',
    isFullImage: true
  },
  { 
    id: 'ch2-rules', 
    chapter: 'الدراسة التصميمية', 
    title: '5. قواعد التسيير', 
    desc: 'القيود والضوابط المنطقية للنظام', 
    list: [
      'كل متربص يعطى له تعهد والتزام واحد أو أكثر.',
      'كل تعهد والتزام يخص متربص واحد ووحيد.',
      'كل متربص يمنح إذن دخول/خروج واحد أو أكثر.',
      'كل إذن دخول/خروج يخص متربص واحد ووحيد.'
    ], 
    icon: Settings, 
    color: 'bg-rose-600' 
  },
  { 
    id: 'ch2-mcd-concepts', 
    chapter: 'الدراسة التصميمية', 
    title: '6. مفاهيم النموذج التصوري MCD', 
    desc: 'الأسس النظرية لهيكلة المعطيات', 
    content: 'النموذج التصوري للمعطيات (MCD) هو تمثيل بياني مجرد يهدف إلى وصف بنية البيانات في النظام دون الخوض في التفاصيل التقنية للتخزين. يعتمد بشكل أساسي على تحديد "الكائنات" (مثل المتربص أو الفرع) و"الخصائص" التي تصفها، ثم تحديد "العلاقات" المنطقية التي تربط بين هذه الكائنات مع توضيح "التعدادات" (Cardinalities) التي تحدد قيود المشاركة في كل علاقة.', 
    icon: BookOpen, 
    color: 'bg-rose-600' 
  },
  { 
    id: 'ch2-mcd-diagram', 
    chapter: 'الدراسة التصميمية', 
    title: '7. النموذج التصوري MCD', 
    desc: 'هيكلة الكائنات والعلاقات', 
    content: <img src="/mcd.png" alt="النموذج التصوري MCD" className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.6)] scale-110" />, 
    icon: Layers, 
    color: 'bg-rose-600',
    isFullImage: true
  },
  { 
    id: 'ch2-mld-rules', 
    chapter: 'الدراسة التصميمية', 
    title: '8. قواعد الانتقال إلى MLD', 
    desc: 'من النموذج التصوري إلى المنطقي', 
    list: [
      'تحويل الكائنات إلى جداول مستقلة.',
      'تحويل المعرفات إلى مفاتيح أساسية (Primary Keys).',
      'تحويل العلاقات (1,N) عبر نقل المفتاح كـ (Foreign Key).',
      'تحويل العلاقات (N,N) إلى جداول وصل جديدة.'
    ], 
    icon: Workflow, 
    color: 'bg-rose-600' 
  },
  { 
    id: 'ch2-mld-diagram', 
    chapter: 'الدراسة التصميمية', 
    title: '9. النموذج المنطقي MLD', 
    desc: 'المخطط العلائقي النهائي للنظام', 
    list: [
      'الفرع (رقم الفرع، اسم الفرع، الأستاذ المسؤول)',
      'المتربص (رقم المتربص، الاسم، اللقب، #رقم الفرع)',
      'إذن الدخول (رقم الإذن، التاريخ، الساعة، #رقم المتربص)',
      'التعهد (رقم التعهد، الملاحظات، #رقم المتربص)'
    ], 
    icon: FileSpreadsheet, 
    color: 'bg-rose-600' 
  },
  { 
    id: 'ch2-conclusion', 
    chapter: 'الدراسة التصميمية', 
    title: '10. خلاصة الفصل الثاني', 
    desc: 'نتيجة مرحلة التصميم', 
    content: 'انتهينا في هذا الفصل من بناء الهيكل المنطقي للنظام، مما يضمن سلامة البيانات وعدم تكرارها، ويهيئ الأرضية الصلبة للتنفيذ التقني والبرمجي في الفصل الموالي.', 
    icon: CheckCircle2, 
    color: 'bg-rose-900' 
  },

  // --- الفصل الثالث: الدراسة التقنية ---
  { 
    id: 'ch3-preface', 
    chapter: 'الدراسة التقنية', 
    title: 'تمهيد الفصل الثالث', 
    desc: 'مدخل للتنفيذ والبرمجة', 
    content: 'نصل في هذا الفصل إلى المرحلة الختامية، حيث نقوم بتحويل النماذج التصميمية إلى تطبيق فعلي باستخدام أدوات البرمجة وقواعد البيانات، مع استعراض واجهات النظام وإجراءات الحماية.', 
    icon: Info, 
    color: 'bg-amber-600' 
  },
  { 
    id: 'ch3-mpd', 
    chapter: 'الدراسة التقنية', 
    title: '1. النموذج الفيزيائي MPD', 
    desc: 'تجسيد قاعدة البيانات برمجياً', 
    content: 'تم استخدام لغة SQL لإنشاء الجداول الفعلية وتحديد أنواع البيانات (Integer, Varchar) وربطها بالعلاقات الفيزيائية لضمان سرعة الاستعلام والتخزين.', 
    icon: Terminal, 
    color: 'bg-amber-600' 
  },
  { 
    id: 'ch3-dev-env', 
    chapter: 'الدراسة التقنية', 
    title: '2. بيئة التطوير والبرمجة', 
    desc: 'الأدوات والتقنيات المستخدمة', 
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="bg-black/20 backdrop-blur-xl p-8 rounded-[3rem] border border-white/20 flex flex-col items-center text-center">
          <div className="p-6 bg-blue-500/20 rounded-3xl mb-6"><Cpu size={48} className="text-blue-300" /></div>
          <h3 className="text-3xl font-black mb-4">Delphi 7</h3>
          <p className="text-xl text-white/80 font-bold leading-relaxed">لغة برمجة مرئية قوية وسريعة، توفر بيئة تطوير متكاملة لتصميم الواجهات والربط السلس مع قواعد البيانات.</p>
        </div>
        <div className="bg-black/20 backdrop-blur-xl p-8 rounded-[3rem] border border-white/20 flex flex-col items-center text-center">
          <div className="p-6 bg-amber-500/20 rounded-3xl mb-6"><Server size={48} className="text-amber-300" /></div>
          <h3 className="text-3xl font-black mb-4">SQL Server 2000</h3>
          <p className="text-xl text-white/80 font-bold leading-relaxed">نظام تسيير قواعد بيانات ضخم، يضمن أمن البيانات ويدعم تعدد المستخدمين ويوفر أدوات النسخ الاحتياطي.</p>
        </div>
      </div>
    ), 
    icon: Monitor, 
    color: 'bg-amber-600' 
  },
  { 
    id: 'ch3-interface', 
    chapter: 'الدراسة التقنية', 
    title: '3. واجهات البرنامج النهائية', 
    desc: 'استعراض التطبيق المنجز', 
    isInteractive: true,
    parts: [
      { 
        label: 'الواجهة الرئيسية', 
        icon: Monitor, 
        content: <img src="/app_main.jpg" alt="الواجهة الرئيسية" className="w-full h-full object-contain drop-shadow-2xl" />
      },
      { 
        label: 'واجهة التسجيل', 
        icon: Layout, 
        content: <img src="/app_reg.jpg" alt="واجهة التسجيل" className="w-full h-full object-contain drop-shadow-2xl" />
      },
      { 
        label: 'واجهة التقارير', 
        icon: FileText, 
        content: <img src="/app_reports.jpg" alt="واجهة التقارير" className="w-full h-full object-contain drop-shadow-2xl" />
      }
    ],
    icon: Monitor, 
    color: 'bg-amber-600' 
  },
  { 
    id: 'ch3-security', 
    chapter: 'الدراسة التقنية', 
    title: '4. الحماية والأمان', 
    desc: 'سلامة البيانات واستمرارية العمل', 
    list: [
      'نظام صلاحيات المستخدمين بكلمات سر مشفرة.',
      'جدولة النسخ الاحتياطي الدوري (يومي/أسبوعي).',
      'تأمين قاعدة البيانات ضد الحذف العشوائي.',
      'سهولة استرجاع البيانات في حالة الأعطال.'
    ], 
    icon: ShieldCheck, 
    color: 'bg-amber-600' 
  },
  { 
    id: 'ch3-conclusion', 
    chapter: 'الدراسة التقنية', 
    title: '5. خلاصة الفصل الثالث', 
    desc: 'نتيجة التنفيذ التقني', 
    content: 'أثبت التطبيق المنجز كفاءة عالية في معالجة البيانات واستخراج التقارير، مما يحقق الأهداف المسطرة في تحويل التسيير اليدوي إلى تسيير آلي عصري وآمن.', 
    icon: CheckCircle2, 
    color: 'bg-amber-900' 
  },

  // --- الخاتمة ---
  { 
    id: 'final', 
    chapter: 'الخاتمة العامة', 
    title: 'خاتمة المشروع', 
    desc: 'آفاق وتطلعات مستقبلية', 
    content: 'إن هذا المشروع يمثل خطوة هامة نحو عصرنة الإدارة بالمعهد الوطني المتخصص بالوادي. لا يقتصر نجاحه على الجانب التقني فحسب، بل في قدرته على تحسين جودة الخدمة الإدارية وتسهيل عمل المسيرين.', 
    icon: Flag, 
    color: 'bg-emerald-900' 
  },
  { 
    id: 'thanks', 
    chapter: 'نهاية العرض', 
    title: 'شكراً لحسن استماعكم', 
    desc: 'نرحب بأسئلتكم واستفساراتكم', 
    content: 'نتقدم بجزيل الشكر للجنة المناقشة الموقرة وللحضور الكريم على حسن الإصغاء والمتابعة.', 
    icon: Heart, 
    color: 'bg-slate-900' 
  }
];

const SpatialZoomPresentation = () => {
  const [view, setView] = useState<'bubbles' | 'slide'>('slide');
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePart, setActivePart] = useState(0);
  const [zoomingId, setZoomingId] = useState<string | null>(null);
  const [activeOrigin, setActiveOrigin] = useState('50% 50%');
  const [currentBg, setCurrentBg] = useState('bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900');

  const handleBackToBubbles = useCallback(() => {
    setView('bubbles');
    setCurrentBg('bg-white');
  }, []);

  const nextSlide = useCallback(() => {
    if (view === 'bubbles') return;
    if (activeIndex === 2 || activeIndex === 16 || activeIndex === 27 || activeIndex === 33) {
      handleBackToBubbles();
      return;
    }
    if (activeIndex < SLIDES.length - 1) {
      const nextIdx = activeIndex + 1;
      setActiveIndex(nextIdx);
      setCurrentBg(SLIDES[nextIdx].color);
    }
  }, [view, activeIndex, handleBackToBubbles]);

  const prevSlide = useCallback(() => {
    if (view === 'bubbles') return;
    if (activeIndex === 3 || activeIndex === 17 || activeIndex === 28) {
      handleBackToBubbles();
      return;
    }
    if (activeIndex > 0) {
      const prevIdx = activeIndex - 1;
      setActiveIndex(prevIdx);
      setCurrentBg(SLIDES[prevIdx].color);
    }
  }, [view, activeIndex, handleBackToBubbles]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        nextSlide();
      } else if (e.key === 'ArrowRight') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    setActivePart(0);
  }, [activeIndex]);

  const handleChapterClick = (chapter: typeof CHAPTERS[0], e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    const origin = `${x}% ${y}%`;
    setZoomingId(chapter.id);
    setActiveOrigin(origin);
    setCurrentBg(chapter.color);
    setTimeout(() => {
      setActiveIndex(chapter.startIdx);
      setView('slide');
      setZoomingId(null);
    }, 600);
  };

  const currentSlideData = SLIDES[activeIndex];
  if (!currentSlideData) return null;

  const currentPart = currentSlideData.parts && currentSlideData.parts.length > 0
    ? currentSlideData.parts[activePart < currentSlideData.parts.length ? activePart : 0]
    : null;

  const slideVariants = {
    initial: { clipPath: `circle(0% at ${activeOrigin})` },
    animate: {
      clipPath: `circle(150% at ${activeOrigin})`,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      clipPath: `circle(0% at ${activeOrigin})`,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const bubblesVariants = {
    initial: { scale: 1.5, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    exit: {
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className={cn(
      "relative w-full h-full overflow-hidden flex items-center justify-center font-sans transition-colors duration-700",
      currentBg
    )} dir="rtl">

      <AnimatePresence mode="wait">
        {view === 'bubbles' ? (
          <motion.div
            key="bubbles"
            variants={bubblesVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 pt-24 z-10 bg-white"
          >
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">نظام تسيير الأمانة</h1>
              <p className="text-slate-400 text-xl md:text-2xl font-bold">اختر فصلاً لمتابعة العرض</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-7xl">
              {CHAPTERS.map((ch, i) => (
                <div key={ch.id} className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, type: 'spring', damping: 12 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    onClick={(e) => handleChapterClick(ch, e)}
                    className={cn(
                      "w-40 h-40 md:w-60 md:h-60 rounded-full flex flex-col items-center justify-center text-white cursor-pointer shadow-2xl relative z-20",
                      ch.color,
                      ch.shadow
                    )}
                  >
                    <ch.icon size={60} className="mb-4" />
                    <span className="text-2xl md:text-3xl font-black">{ch.title}</span>
                  </motion.div>

                  <AnimatePresence>
                    {zoomingId === ch.id && (
                      <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 25, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className={cn("absolute inset-0 rounded-full z-50", ch.color)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={currentSlideData.id}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn("absolute inset-0 w-full h-full flex flex-col items-center justify-center text-white z-20", currentSlideData.color, "p-8 md:p-20")}
          >
            {currentSlideData.id !== 'main-title' && (
              <div className="absolute top-8 left-8 right-8 flex justify-between items-center border-b border-white/20 pb-6 z-20">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-xl shadow-lg border border-white/10">
                    {React.createElement(currentSlideData.icon, { size: 32 })}
                  </div>
                  <div>
                    <h3 className="text-white/60 text-sm font-black uppercase tracking-[0.2em] mb-0.5">{currentSlideData.chapter}</h3>
                    <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">{currentSlideData.title}</h2>
                  </div>
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-white/40 text-xs font-black uppercase tracking-widest">وصف الشريحة</p>
                  <p className="text-white text-lg font-bold">{currentSlideData.desc}</p>
                </div>
              </div>
            )}

            <div className={cn(
              "relative z-10 w-full h-full flex flex-col justify-center items-center",
              currentSlideData.isFullImage ? "pt-20 pb-16 max-w-none" : 
              currentSlideData.id === 'main-title' ? "pt-4 pb-4 max-w-[95vw]" : "pt-32 pb-24 max-w-[95vw]"
            )}>
              {currentSlideData.isInteractive && currentSlideData.parts ? (
                <div className="w-full flex flex-col items-center gap-4 h-full min-h-0">
                  <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shrink-0">
                    {currentSlideData.parts.map((part, idx) => (
                      <button key={idx} onClick={() => setActivePart(idx)} className={cn("px-6 py-2.5 rounded-xl font-black text-base flex items-center gap-2 transition-all", activePart === idx ? "bg-white text-slate-900 shadow-xl scale-105" : "text-white/60 hover:text-white hover:bg-white/5")}>
                        {React.createElement(part.icon, { size: 18 })} {part.label}
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    {currentPart && (
                      <motion.div key={activePart} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full flex-1 bg-black/20 backdrop-blur-3xl p-6 md:p-8 rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden flex flex-col min-h-0">
                        {currentPart.content && (
                          <div className="flex items-center justify-center h-full p-4">
                            {typeof currentPart.content === 'string' ? (
                              <p className="text-2xl md:text-3xl font-black text-center leading-relaxed">{currentPart.content}</p>
                            ) : (
                              currentPart.content
                            )}
                          </div>
                        )}
                        {currentPart.list && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto custom-scrollbar p-2">
                            {currentPart.list.map((item, i) => (
                              <div key={i} className="flex items-center gap-3 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <ArrowRight size={20} className="text-white/40" />
                                <span className="text-xl font-black">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {currentPart.table && (
                          <div className="overflow-auto rounded-2xl border border-white/10 custom-scrollbar flex-1 min-h-0">
                            <table className="w-full text-right">
                              <thead className="bg-black/40 sticky top-0 z-20 backdrop-blur-md">
                                <tr>{currentPart.table.headers.map((h, i) => (<th key={i} className="p-5 text-lg font-black text-white/80 border-b border-white/10">{h}</th>))}</tr>
                              </thead>
                              <tbody>
                                {currentPart.table.rows.map((row, i) => (
                                  <tr key={i} className="border-b border-white/5">
                                    {row.map((cell, j) => (<td key={j} className="p-5 text-lg font-bold">{cell}</td>))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-center flex-1 min-h-0">
                  {currentSlideData.content && (
                    <div className={cn(
                      "w-full h-full flex items-center justify-center",
                      typeof currentSlideData.content === 'string'
                        ? "bg-black/20 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/20 shadow-2xl max-w-4xl text-center"
                        : ""
                    )}>
                      {typeof currentSlideData.content === 'string' ? (
                        <p className="text-2xl md:text-4xl font-black leading-relaxed">{currentSlideData.content}</p>
                      ) : (
                        currentSlideData.content
                      )}
                    </div>
                  )}
                  {currentSlideData.list && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                      {currentSlideData.list.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-black/20 rounded-[2.5rem] border border-white/20 backdrop-blur-md">
                          <ArrowRight size={24} className="text-white/40" />
                          <span className="text-xl md:text-2xl font-black">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-30">
              <div className="flex gap-4">
                <button onClick={prevSlide} className="p-4 bg-white/20 rounded-full hover:bg-white/30 shadow-lg transition-all border border-white/10 backdrop-blur-md"><ChevronRight size={32} /></button>
                <button onClick={nextSlide} className="p-4 bg-white/20 rounded-full hover:bg-white/30 shadow-lg transition-all border border-white/10 backdrop-blur-md"><ChevronLeft size={32} /></button>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right hidden sm:block">
                  <p className="text-white/40 text-xs font-black uppercase tracking-widest">التقدم</p>
                  <div className="flex flex-row-reverse items-center gap-1 text-white text-3xl font-black" dir="ltr">
                    <span>{SLIDES.length}</span> <span className="text-white/30">/</span> <span>{activeIndex + 1}</span>
                  </div>
                </div>
                {activeIndex >= 3 && (
                  <button onClick={handleBackToBubbles} className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-xl shadow-2xl flex items-center gap-4 hover:bg-slate-100 transition-all">
                    <Layers size={24} /> <span>العودة للقائمة</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpatialZoomPresentation;