"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Building2, Phone } from "lucide-react";
import Link from "next/link";
import Stats from "@/components/stats";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 border-b border-gray-200 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-cyan-900/75 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
            alt="Yakutsk aerial view"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-10 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-sm font-medium text-cyan-300 uppercase tracking-wider inline-block px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full border border-cyan-400/20">
                Окружная администрация города Якутска
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Департамент имущественных и земельных отношений
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl"
            >
              Управление муниципальным имуществом и земельными участками города Якутска
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-105">
                <Link href="/about">О департаменте</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <Link href="/contacts">Контакты</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Основные разделы</h2>
            <p className="text-lg text-slate-600">Быстрый доступ к важной информации</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { href: "/documents", icon: FileText, title: "Документы", desc: "Нормативные акты и регламенты", color: "cyan" },
              { href: "/about#staff", icon: Users, title: "Руководство", desc: "Структура и сотрудники департамента", color: "indigo" },
              { href: "/services", icon: Building2, title: "Услуги", desc: "Муниципальные услуги и регламенты", color: "emerald" },
              { href: "/contacts", icon: Phone, title: "Контакты", desc: "Адрес, телефоны, режим работы", color: "violet" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={item.href} className="group block h-full">
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 hover:border-${item.color}-500/50 hover:-translate-y-2 bg-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-${item.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="pb-4 relative">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className={`mb-4 p-4 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl w-fit shadow-lg shadow-${item.color}-500/30 group-hover:shadow-${item.color}-500/50 transition-shadow`}
                        >
                          <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </motion.div>
                        <CardTitle className={`text-xl mb-2 group-hover:text-${item.color}-600 transition-colors`}>
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {item.desc}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <Stats />

      {/* Contact Info */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 border-t border-slate-700 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Контактная информация</h2>
              <p className="text-lg text-slate-300">Мы готовы ответить на ваши вопросы</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Адрес", content: "677000, Республика Саха (Якутия), г. Якутск, пр. Ленина, д. 15, офис 612" },
                { title: "Телефон", content: "8 (4112) 40-88-09", link: "tel:+74112408809" },
                { title: "Режим работы", content: "Пн-Пт 09:00-18:00\nОбед 13:00-14:00" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center md:text-left bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <h3 className="font-semibold text-cyan-400 mb-3 text-lg">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-slate-300 hover:text-cyan-300 hover:underline font-medium transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                <Link href="/contacts">Подробная информация</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
