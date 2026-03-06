import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Building2, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#EFF6FF] py-24 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-3">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Окружная администрация города Якутска
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Департамент имущественных и земельных отношений
            </h1>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl">
              Управление муниципальным имуществом и земельными участками города Якутска
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#1E40AF] hover:bg-[#1E40AF]/90">
                <Link href="/about">О департаменте</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 hover:bg-gray-50">
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
