"use client";

import { Link } from "@/routing";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Search } from "./search";
import { motion, useReducedMotion } from "framer-motion";

export function Header() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-cyan-600 focus:text-white focus:rounded-md focus:ring-3 focus:ring-cyan-400"
      >
        Перейти к основному содержанию
      </a>

      <motion.header
        initial={{ y: shouldReduceMotion ? 0 : -100 }}
        animate={{ y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, type: shouldReduceMotion ? "tween" : "spring", stiffness: 100 }}
        className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 rounded-md group"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Image
                  src="/logo.png"
                  alt="Логотип Департамента"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                  priority
                />
              </motion.div>
              <div className="hidden md:block">
                <div className="text-base font-semibold text-slate-900 leading-tight group-hover:text-cyan-600 transition-colors">
                  Департамент имущественных
                </div>
                <div className="text-sm text-slate-600 leading-tight">
                  и земельных отношений
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
              <Link
                href="/about"
                className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-3 py-2"
              >
                О департаменте
              </Link>
              <Link
                href="/news"
                className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-3 py-2"
              >
                Новости
              </Link>
              <Link
                href="/documents"
                className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-3 py-2"
              >
                Документы
              </Link>
              <Link
                href="/contacts"
                className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-3 py-2"
              >
                Контакты
              </Link>
              <Search />
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <Search />
              <button
                className="inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                aria-label="Открыть меню"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
