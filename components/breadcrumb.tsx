import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Навигационная цепочка" className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {/* Home link */}
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              aria-label="Перейти на главную страницу"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              <span>Главная</span>
            </Link>
          </li>

          {/* Breadcrumb items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="text-gray-900 font-medium"
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
