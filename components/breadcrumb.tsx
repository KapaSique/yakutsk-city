"use client";

import { Link } from "@/routing";
import { ChevronRight, Home } from "lucide-react";
import { useTranslations } from "next-intl";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const t = useTranslations("breadcrumb");

  return (
    <nav aria-label="Навигационная цепочка" className="bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {/* Home link */}
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-cyan-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-1"
              aria-label={t("home")}
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              <span>{t("home")}</span>
            </Link>
          </li>

          {/* Breadcrumb items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight
                  className="h-4 w-4 text-slate-400"
                  aria-hidden="true"
                />
                {item.href && !isLast ? (
                  <Link
                    href={item.href as any}
                    className="text-slate-600 hover:text-cyan-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-1"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="text-slate-900 font-medium"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
