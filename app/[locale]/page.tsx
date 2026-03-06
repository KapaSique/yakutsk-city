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
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
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
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Основные разделы</h2>
            <p className="text-lg text-slate-600">Быстрый доступ к важной информации</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/documents" className="group">
              <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 hover:border-cyan-500/50 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl w-fit shadow-lg shadow-cyan-500/30">
                    <FileText className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-cyan-600 transition-colors">
                    Документы
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Нормативные акты и регламенты
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/about#staff" className="group">
              <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 hover:border-indigo-500/50 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl w-fit shadow-lg shadow-indigo-500/30">
                    <Users className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-indigo-600 transition-colors">
                    Руководство
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Структура и сотрудники департамента
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/services" className="group">
              <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 hover:border-emerald-500/50 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl w-fit shadow-lg shadow-emerald-500/30">
                    <Building2 className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-emerald-600 transition-colors">
                    Услуги
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Муниципальные услуги и регламенты
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/contacts" className="group">
              <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 hover:border-violet-500/50 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl w-fit shadow-lg shadow-violet-500/30">
                    <Phone className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-violet-600 transition-colors">
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
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Контактная информация</h2>
              <p className="text-lg text-slate-300">Мы готовы ответить на ваши вопросы</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center md:text-left bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="font-semibold text-cyan-400 mb-3 text-lg">Адрес</h3>
                <p className="text-slate-300 leading-relaxed">
                  677000, Республика Саха (Якутия), г. Якутск, пр. Ленина, д. 15, офис 612
                </p>
              </div>
              <div className="text-center md:text-left bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="font-semibold text-cyan-400 mb-3 text-lg">Телефон</h3>
                <p className="text-slate-300">
                  <a href="tel:+74112408809" className="text-cyan-400 hover:text-cyan-300 hover:underline font-medium transition-colors">
                    8 (4112) 40-88-09
                  </a>
                </p>
              </div>
              <div className="text-center md:text-left bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="font-semibold text-cyan-400 mb-3 text-lg">Режим работы</h3>
                <p className="text-slate-300 leading-relaxed">
                  Пн-Пт 09:00-18:00<br />
                  Обед 13:00-14:00
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-lg shadow-cyan-500/30">
                <Link href="/contacts">Подробная информация</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
