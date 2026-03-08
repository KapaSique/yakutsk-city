"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/routing";
import { motion, useReducedMotion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const locales = [
  { code: "ru", label: "Русский" },
  { code: "sah", label: "Саха" },
  { code: "en", label: "English" },
] as const;

export function LanguageSwitcher() {
  const t = useTranslations("languages");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === locale);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleLocaleChange = (newLocale: string) => {
    setIsOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 min-h-[44px] text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300 focus-visible:ring-offset-2"
        aria-label={t("switchLanguage")}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">{currentLocale?.label}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-slate-200 py-1 z-50"
          role="menu"
          aria-orientation="vertical"
        >
          {locales.map((loc) => (
            <button
              key={loc.code}
              onClick={() => handleLocaleChange(loc.code)}
              className={`w-full text-left px-4 py-2 min-h-[44px] text-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-500 ${
                locale === loc.code
                  ? "bg-cyan-50 text-cyan-700 font-semibold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-cyan-600"
              }`}
              role="menuitem"
              aria-current={locale === loc.code ? "true" : undefined}
            >
              {t(loc.code)}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
