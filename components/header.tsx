import Link from "next/link";
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

      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary-light focus-visible:ring-offset-2 rounded-md transition-transform duration-200 hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white font-bold text-lg transition-colors duration-200 hover:bg-primary-dark">
                Я
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold text-gray-900">
                  Департамент имущественных
                </div>
                <div className="text-xs text-gray-600">
                  и земельных отношений
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6" aria-label="Основная навигация">
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-md px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              >
                О департаменте
              </Link>
              <Link
                href="/news"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-md px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              >
                Новости
              </Link>
              <Link
                href="/documents"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-md px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              >
                Документы
              </Link>
              <Link
                href="/contacts"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-md px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              >
                Контакты
              </Link>
              <Search />
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <Search />
              <button
                className="inline-flex items-center justify-center h-11 w-11 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary-light"
                aria-label="Открыть меню"
              >
                <Menu className="h-6 w-6 transition-transform duration-200 hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
