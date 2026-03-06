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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-md focus:ring-3 focus:ring-primary-light"
      >
        Перейти к основному содержанию
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
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
                <div className="text-base font-semibold text-gray-900 leading-tight">
                  Департамент имущественных
                </div>
                <div className="text-sm text-gray-600 leading-tight">
                  и земельных отношений
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-3 py-2"
              >
                О департаменте
              </Link>
              <Link
                href="/news"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-3 py-2"
              >
                Новости
              </Link>
              <Link
                href="/documents"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-3 py-2"
              >
                Документы
              </Link>
              <Link
                href="/contacts"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-3 py-2"
              >
                Контакты
              </Link>
              <Search />
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <Search />
              <button
                className="inline-flex items-center justify-center h-10 w-10 rounded-md text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
