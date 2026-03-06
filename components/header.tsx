import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Search } from "./search";

export function Header() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-cyan-600 focus:text-white focus:rounded-md focus:ring-3 focus:ring-cyan-400"
      >
        Перейти к основному содержанию
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 rounded-md"
            >
              <Image
                src="/logo.png"
                alt="Логотип Департамента"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                priority
              />
              <div className="hidden md:block">
                <div className="text-base font-semibold text-slate-900 leading-tight">
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
      </header>
    </>
  );
}
