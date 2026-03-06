import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-gray-50">
      {/* Top section with coat of arms */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/gerb-rf-png.png"
                alt="Герб Российской Федерации"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-primary mb-2">
                Департамент имущественных и земельных отношений
              </h2>
              <p className="text-base text-gray-600">
                Окружной администрации города Якутска
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-primary mb-4 pb-2 border-b-2 border-primary/20">
              О департаменте
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Департамент осуществляет управление и распоряжение имуществом и земельными ресурсами города Якутска в интересах жителей столицы Республики Саха (Якутия).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-primary mb-4 pb-2 border-b-2 border-primary/20">
              Быстрые ссылки
            </h3>
            <nav className="space-y-2.5" aria-label="Навигация в подвале">
              <Link
                href="/about"
                className="block text-sm text-gray-700 hover:text-primary hover:underline transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                О департаменте
              </Link>
              <Link
                href="/news"
                className="block text-sm text-gray-700 hover:text-primary hover:underline transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                Новости
              </Link>
              <Link
                href="/documents"
                className="block text-sm text-gray-700 hover:text-primary hover:underline transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                Документы
              </Link>
              <Link
                href="/contacts"
                className="block text-sm text-gray-700 hover:text-primary hover:underline transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                Контакты
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-primary mb-4 pb-2 border-b-2 border-primary/20">
              Контакты
            </h3>
            <div className="space-y-3.5 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" aria-hidden="true" />
                <span>677000, Республика Саха (Якутия), г. Якутск, пр. Ленина, д. 15, офис 612</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                <a
                  href="tel:+74112408809"
                  className="hover:text-primary hover:underline transition-colors cursor-pointer"
                >
                  8 (4112) 40-88-09
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                <a
                  href="mailto:dizo@yakadm.ru"
                  className="hover:text-primary hover:underline transition-colors cursor-pointer"
                >
                  dizo@yakadm.ru
                </a>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <span className="font-medium">Режим работы:</span> Пн-Пт 09:00-18:00
              </div>
              <div className="flex gap-5 pt-2">
                <a
                  href="https://vk.com/dizo_ykt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary hover:underline transition-colors cursor-pointer"
                >
                  ВКонтакте
                </a>
                <a
                  href="https://t.me/dizo_ykt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary hover:underline transition-colors cursor-pointer"
                >
                  Telegram
                </a>
                <a
                  href="https://ok.ru/group/70000000826573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary hover:underline transition-colors cursor-pointer"
                >
                  OK
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t-2 border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Окружная администрация города Якутска. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
