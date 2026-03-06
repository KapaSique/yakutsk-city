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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Департамент имущественных и земельных отношений
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Окружная администрация города Якутска. Управление муниципальным имуществом и земельными участками.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/about">О департаменте</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contacts">Контакты</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Основные разделы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
                <CardTitle>Документы</CardTitle>
                <CardDescription>
                  Нормативные акты и регламенты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/documents" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                  Перейти →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
                <CardTitle>Руководство</CardTitle>
                <CardDescription>
                  Структура и сотрудники департамента
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/about#staff" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                  Перейти →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
                <CardTitle>Услуги</CardTitle>
                <CardDescription>
                  Муниципальные услуги и регламенты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                  Перейти →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader>
                <Phone className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
                <CardTitle>Контакты</CardTitle>
                <CardDescription>
                  Адрес, телефоны, режим работы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contacts" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600 mb-8">
              Адрес: 677000, Республика Саха (Якутия), г. Якутск, пр. Ленина, д. 15, офис 612
            </p>
            <p className="text-gray-600 mb-8">
              Телефон: <a href="tel:+74112408809" className="text-primary hover:underline transition-colors duration-200">8 (4112) 40-88-09</a>
            </p>
            <p className="text-gray-600 mb-8">
              Режим работы: Пн-Пт 09:00-18:00, обед 13:00-14:00
            </p>
            <div>
              <Button asChild size="lg">
                <Link href="/contacts">Подробная информация</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
