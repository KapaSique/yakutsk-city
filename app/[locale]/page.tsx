import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Building2, Phone } from "lucide-react";
import Link from "next/link";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 border-b border-gray-200 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-cyan-900/85 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
            alt="Yakutsk aerial view"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
                Окружная администрация города Якутска
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Департамент имущественных и земельных отношений
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl">
              Управление муниципальным имуществом и земельными участками города Якутска
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Link href="/about">О департаменте</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                <Link href="/contacts">Контакты</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Основные разделы</h2>
            <p className="text-lg text-gray-600">Быстрый доступ к важной информации</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/documents" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-[#1E40AF]/20">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-[#EFF6FF] rounded-lg w-fit">
                    <FileText className="h-8 w-8 text-[#1E40AF]" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-[#1E40AF] transition-colors">
                    Документы
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Нормативные акты и регламенты
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/about#staff" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-[#1E40AF]/20">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-[#EFF6FF] rounded-lg w-fit">
                    <Users className="h-8 w-8 text-[#1E40AF]" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-[#1E40AF] transition-colors">
                    Руководство
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Структура и сотрудники департамента
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/services" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-[#1E40AF]/20">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-[#EFF6FF] rounded-lg w-fit">
                    <Building2 className="h-8 w-8 text-[#1E40AF]" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-[#1E40AF] transition-colors">
                    Услуги
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Муниципальные услуги и регламенты
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/contacts" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-[#1E40AF]/20">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-[#EFF6FF] rounded-lg w-fit">
                    <Phone className="h-8 w-8 text-[#1E40AF]" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-[#1E40AF] transition-colors">
                    Контакты
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Адрес, телефоны, режим работы
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <Stats />

      {/* Contact Info */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контактная информация</h2>
              <p className="text-lg text-gray-600">Мы готовы ответить на ваши вопросы</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Адрес</h3>
                <p className="text-gray-700 leading-relaxed">
                  677000, Республика Саха (Якутия), г. Якутск, пр. Ленина, д. 15, офис 612
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Телефон</h3>
                <p className="text-gray-700">
                  <a href="tel:+74112408809" className="text-[#1E40AF] hover:underline font-medium">
                    8 (4112) 40-88-09
                  </a>
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Режим работы</h3>
                <p className="text-gray-700 leading-relaxed">
                  Пн-Пт 09:00-18:00<br />
                  Обед 13:00-14:00
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90">
                <Link href="/contacts">Подробная информация</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
