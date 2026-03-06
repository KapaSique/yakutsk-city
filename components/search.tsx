"use client";

import { Search as SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Search() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Meilisearch
    if (query.trim()) {
      console.log("Search query:", query);
      // Future: Implement search functionality here
    }
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className="relative">
      {/* Mobile search button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Открыть поиск"
        className="md:hidden hover:bg-slate-100 transition-colors cursor-pointer"
      >
        <SearchIcon className="h-5 w-5 text-slate-700" />
      </Button>

      {/* Desktop search form */}
      <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
        <div className="relative group">
          <SearchIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-cyan-600 transition-colors"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Поиск по сайту..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10 w-72 h-10 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500 rounded-lg transition-all"
            aria-label="Поиск по сайту"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              aria-label="Очистить поиск"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <Button
          type="submit"
          variant="cta"
          className="h-10 px-6 rounded-lg font-medium transition-colors cursor-pointer"
          disabled={!query.trim()}
        >
          Найти
        </Button>
      </form>

      {/* Mobile search modal */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-screen max-w-md bg-white border border-slate-200 rounded-lg shadow-xl p-4 md:hidden z-50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Поиск</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть поиск"
              className="hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5 text-slate-600" />
            </Button>
          </div>
          <form onSubmit={handleSearch} className="space-y-3">
            <div className="relative">
              <SearchIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                aria-hidden="true"
              />
              <Input
                type="search"
                placeholder="Поиск по сайту..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-10 h-11 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500 rounded-lg"
                autoFocus
                aria-label="Поиск по сайту"
              />
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  aria-label="Очистить поиск"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <Button
              type="submit"
              variant="cta"
              className="w-full h-11 rounded-lg font-medium transition-colors cursor-pointer"
              disabled={!query.trim()}
            >
              Найти
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
