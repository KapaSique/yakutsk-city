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
    console.log("Search query:", query);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Открыть поиск"
        className="md:hidden"
      >
        <SearchIcon className="h-5 w-5" />
      </Button>

      <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Поиск по сайту..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 w-64"
            aria-label="Поиск по сайту"
          />
        </div>
      </form>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-screen max-w-md bg-white border border-gray-200 rounded-lg shadow-lg p-4 md:hidden z-50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Поиск</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть поиск"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <form onSubmit={handleSearch}>
            <Input
              type="search"
              placeholder="Поиск по сайту..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full"
              autoFocus
            />
          </form>
        </div>
      )}
    </div>
  );
}
