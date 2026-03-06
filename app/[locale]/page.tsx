import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Building2, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up-large">
              Департамент имущественных и земельных отношений
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up animate-delay-100">
              Окружная администрация города Якутска. Управление муниципальным имуществом и земельными участками.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-200">
              <Button asChild size="lg" className="transition-transform duration-200 hover:scale-105">
                <Link href="/about">О департаменте</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="transition-transform duration-200 hover:scale-105">
                <Link href="/contacts">Контакты</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">Основные разделы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer animate-slide-up">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                <CardTitle>Документы</CardTitle>
                <CardDescription>
                  Нормативные акты и регламенты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/documents" className="text-primary hover:underline font-medium inline-flex items-center gap-1 transition-all duration-200 hover:gap-2">
                  Перейти →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer animate-slide-up animate-delay-100">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                <CardTitle>Руководство</CardTitle>
                <CardDescription>
                  Структура и сотрудники департамента
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/about#staff" className="text-primary hover:underline font-medium inline-flex items-center gap-1 transition-all duration-200 hover:gap-2">
                  Перейти →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer animate-slide-up animate-delay-200">
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                <CardTitle>Услуги</CardTitle>
                <CardDescription>
                  Муниципальные услуги и регламенты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services" className="text-primary hover:underline font-medium inline-flex items-center gap-1 transition-all duration-200 hover:gap-2">
                  Перейти →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer animate-slide-up animate-delay-300">
              <CardHeader>
                <Phone className="h-10 w-10 text-primary mb-2 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                <CardTitle>Контакты</CardTitle>
                <CardDescription>
                  Адрес, телефоны, режим работы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contacts" className="text-primary hover:underline font-medium inline-flex items-center gap-1 transition-all duration-200 hover:gap-2">
                  Перейти →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Свяжитесь с нами</h2>
            <p className="text-gray-600 mb-8 animate-slide-up animate-delay-100">
              Адрес: 677000, Республика Саха (Якутия), г. Якутск, пр. Ленина, д. 15, офис 612
            </p>
            <p className="text-gray-600 mb-8 animate-slide-up animate-delay-200">
              Телефон: <a href="tel:+74112408809" className="text-primary hover:underline transition-colors duration-200">8 (4112) 40-88-09</a>
            </p>
            <p className="text-gray-600 mb-8 animate-slide-up animate-delay-300">
              Режим работы: Пн-Пт 09:00-18:00, обед 13:00-14:00
            </p>
            <div className="animate-slide-up animate-delay-400">
              <Button asChild size="lg" className="transition-transform duration-200 hover:scale-105">
                <Link href="/contacts">Подробная информация</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
