import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { registerSW } from 'virtual:pwa-register';

// تسجيل الـ Service Worker للعمل بدون إنترنت (PWA)
registerSW({ immediate: true });

createRoot(document.getElementById("root")!).render(<App />);