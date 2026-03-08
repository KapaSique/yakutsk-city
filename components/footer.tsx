"use client";

import { Link } from "@/routing";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("footer");

  return (
    <footer className="border-t-2 border-cyan-500 bg-slate-50">
      {/* Top section with coat of arms */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex-shrink-0"
            >
              <Image
                src="/gerb-rf-png.png"
                alt="Герб Российской Федерации"
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-cyan-600 mb-2">
                Департамент имущественных и земельных отношений
              </h2>
              <p className="text-base text-slate-600">
                Окружной администрации города Якутска
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-cyan-600 mb-4 pb-2 border-b-2 border-cyan-500/20">
              {t("about")}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Департамент осуществляет управление и распоряжение имуществом и земельными ресурсами города Якутска в интересах жителей столицы Республики Саха (Якутия).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-cyan-600 mb-4 pb-2 border-b-2 border-cyan-500/20">
              {t("quickLinks")}
            </h3>
            <nav className="space-y-2.5" aria-label="Навигация в подвале">
              <Link
                href="/about"
                className="block text-sm text-slate-700 hover:text-cyan-600 hover:underline transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md"
              >
                {t("about")}
              </Link>
              <Link
                href="/news"
                className="block text-sm text-slate-700 hover:text-cyan-600 hover:underline transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md"
              >
                Новости
              </Link>
              <Link
                href="/documents"
                className="block text-sm text-slate-700 hover:text-cyan-600 hover:underline transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md"
              >
                Документы
              </Link>
              <Link
                href="/contacts"
                className="block text-sm text-slate-700 hover:text-cyan-600 hover:underline transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md"
              >
                {t("contacts")}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-cyan-600 mb-4 pb-2 border-b-2 border-cyan-500/20">
              {t("contacts")}
            </h3>
            <div className="space-y-3.5 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-cyan-600" aria-hidden="true" />
                <span>677000, Республика Саха (Якутия), г. Якутск, пр. Ленина, д. 15, офис 612</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-cyan-600" aria-hidden="true" />
                <a
                  href="tel:+74112408809"
                  className="hover:text-cyan-600 hover:underline transition-colors cursor-pointer"
                >
                  8 (4112) 40-88-09
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-cyan-600" aria-hidden="true" />
                <a
                  href="mailto:dizo@yakadm.ru"
                  className="hover:text-cyan-600 hover:underline transition-colors cursor-pointer"
                >
                  dizo@yakadm.ru
                </a>
              </div>
              <div className="pt-2 border-t border-slate-200">
                {t("workingHours")}
              </div>
              <div className="flex gap-5 pt-2">
                <a
                  href="https://vk.com/dizo_ykt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-cyan-600 hover:underline transition-colors cursor-pointer"
                >
                  ВКонтакте
                </a>
                <a
                  href="https://t.me/dizo_ykt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-cyan-600 hover:underline transition-colors cursor-pointer"
                >
                  Telegram
                </a>
                <a
                  href="https://ok.ru/group/70000000826573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-cyan-600 hover:underline transition-colors cursor-pointer"
                >
                  OK
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t-2 border-slate-200 text-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} {t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
