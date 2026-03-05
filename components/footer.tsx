import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">О департаменте</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Департамент имущественных и земельных отношений Окружной администрации города Якутска
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <nav className="space-y-2" aria-label="Навигация в подвале">
              <Link
                href="/about"
                className="block text-sm text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-md"
              >
                О департаменте
              </Link>
              <Link
                href="/news"
                className="block text-sm text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-md"
              >
                Новости
              </Link>
              <Link
                href="/documents"
                className="block text-sm text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-md"
              >
                Документы
              </Link>
              <Link
                href="/contacts"
                className="block text-sm text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light rounded-md"
              >
                Контакты
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>677000, Республика Саха (Якутия), г. Якутск, пр. Ленина, д. 15, офис 612</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+74112408809" className="hover:text-white transition-colors">
                  8 (4112) 40-88-09
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>Режим работы: Пн-Пт 09:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Окружная администрация города Якутска. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
