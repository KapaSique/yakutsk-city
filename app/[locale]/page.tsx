"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Building2, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/routing";
import Stats from "@/components/stats";
import { motion, useReducedMotion } from "framer-motion";
import Script from "next/script";
import { useTranslations } from "next-intl";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "name": "Департамент имущественных и земельных отношений Окружной администрации города Якутска",
  "alternateName": "ДИиЗО Якутск",
  "url": "https://yakutskcity.ru",
  "logo": "https://yakutskcity.ru/logo.png",
  "description": "Управление муниципальным имуществом и земельными участками города Якутска",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "проспект Ленина, дом 15, офис 612",
    "addressLocality": "Якутск",
    "addressRegion": "Республика Саха (Якутия)",
    "postalCode": "677000",
    "addressCountry": "RU"
  },
  "telephone": "+7-4112-40-88-09",
  "email": "dizo@yakadm.ru",
  "openingHours": "Mo-Fr 09:00-18:00",
  "areaServed": {
    "@type": "City",
    "name": "Якутск"
  }
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("home");
  const tNav = useTranslations("nav");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5 },
    },
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

        {/* Static decorative shapes */}
        <div className="absolute inset-0 z-10 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
              className="mb-6 flex flex-wrap gap-3"
            >
              <Badge className="text-sm font-medium text-cyan-300 uppercase tracking-wider inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full border border-cyan-400/20 shadow-lg shadow-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Окружная администрация города Якутска
              </Badge>
              <Badge variant="outline" className="text-sm font-medium text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Официальный сайт
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              {t("title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
              className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl"
            >
              {t("subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button asChild size="lg" className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-200 border-0">
                  <Link href="/about" className="inline-flex items-center gap-2">
                    {t("aboutButton")}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button asChild variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all duration-200">
                  <Link href="/contacts">{t("contactsButton")}</Link>
                </Button>
              </motion.div>
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
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{t("sections")}</h2>
            <p className="text-lg text-slate-600">{t("quickAccess")}</p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Link href="/documents" className="group block h-full">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-200 cursor-pointer border border-slate-200 hover:border-cyan-500/50 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <CardHeader className="pb-4 relative">
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="mb-4 p-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl w-fit shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow duration-200"
                      >
                        <FileText className="h-8 w-8 text-white" aria-hidden="true" />
                      </motion.div>
                      <CardTitle className="text-xl mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                        {tNav("documents")}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {t("documentsDesc")}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="/about#staff" className="group block h-full">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-200 cursor-pointer border border-slate-200 hover:border-indigo-500/50 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <CardHeader className="pb-4 relative">
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="mb-4 p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl w-fit shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-200"
                      >
                        <Users className="h-8 w-8 text-white" aria-hidden="true" />
                      </motion.div>
                      <CardTitle className="text-xl mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                        Руководство
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {t("leadershipDesc")}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="/services" className="group block h-full">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-200 cursor-pointer border border-slate-200 hover:border-emerald-500/50 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <CardHeader className="pb-4 relative">
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="mb-4 p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl w-fit shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow duration-200"
                      >
                        <Building2 className="h-8 w-8 text-white" aria-hidden="true" />
                      </motion.div>
                      <CardTitle className="text-xl mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                        {tNav("services")}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {t("servicesDesc")}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="/contacts" className="group block h-full">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-200 cursor-pointer border border-slate-200 hover:border-violet-500/50 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <CardHeader className="pb-4 relative">
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="mb-4 p-4 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl w-fit shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow duration-200"
                      >
                        <Phone className="h-8 w-8 text-white" aria-hidden="true" />
                      </motion.div>
                      <CardTitle className="text-xl mb-2 group-hover:text-violet-600 transition-colors duration-200">
                        {tNav("contacts")}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {t("contactsDesc")}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("contactInfo")}</h2>
              <p className="text-lg text-slate-300">{t("contactInfoSubtitle")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
{[
                { title: t("address"), content: t("addressText") },
                { title: t("phone"), content: "8 (4112) 40-88-09", link: "tel:+74112408809" },
                { title: t("workingHours"), content: t("workingHoursText") }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="text-center md:text-left bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/10 cursor-default"
                >
                  <h3 className="font-semibold text-cyan-400 mb-3 text-lg">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-slate-300 hover:text-cyan-300 hover:underline font-medium transition-colors duration-200 cursor-pointer">
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
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
              className="text-center"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button asChild size="lg" className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-200">
                  <Link href="/contacts" className="inline-flex items-center gap-2">
                    {t("contactUs")}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
