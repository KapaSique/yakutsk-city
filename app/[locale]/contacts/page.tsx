"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContactForm } from "@/components/contact-form";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactsPage() {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("contacts");
  const tNav = useTranslations("nav");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
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
      <Breadcrumb items={[{ label: tNav("contacts") }]} />
      <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-4xl font-bold text-slate-900 mb-8"
        >
          {t("title")}
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <Card className="hover:shadow-xl transition-shadow duration-200 h-full">
            <CardHeader>
              <CardTitle>{t("contactInfo")}</CardTitle>
              <CardDescription>
                {t("contactInfoDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">{t("address")}</h3>
                  <p className="text-slate-600 whitespace-pre-line">
                    {t("addressText")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">{t("phone")}</h3>
                  <a
                    href="tel:+74112408809"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline text-lg transition-colors duration-200"
                  >
                    8 (4112) 40-88-09
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">{t("workingHours")}</h3>
                  <p className="text-slate-600 whitespace-pre-line">
                    {t("workingHoursText")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">{t("email")}</h3>
                  <a
                    href="mailto:dizo@yakadm.ru"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200"
                  >
                    dizo@yakadm.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">{t("reception")}</h3>
                  <p className="text-slate-600 whitespace-pre-line">
                    {t("receptionText")}
                  </p>
                </div>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Departments */}
          <motion.div variants={itemVariants}>
            <Card className="hover:shadow-xl transition-shadow duration-200 h-full">
            <CardHeader>
              <CardTitle>{t("departments")}</CardTitle>
              <CardDescription>
                {t("departmentsDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-slate-500 mb-3">{t("propertyQuestions")}</h4>
                <div className="space-y-3 ml-2">
                  <div>
                    <p className="font-medium text-sm mb-1">{t("propertyDept")}</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112408069" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 40-80-69</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{t("itDept")}</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112408091" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 40-80-91</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{t("legalDept")}</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112408098" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 40-80-98</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <h4 className="font-semibold text-sm text-slate-500 mb-3">{t("landQuestions")}</h4>
                <div className="space-y-3 ml-2">
                  <div>
                    <p className="font-medium text-sm mb-1">{t("landFormationDept")}</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112326479" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 32-64-79</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{t("landManagementDept")}</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112326478" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 32-64-78</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{t("organizationalDept")}</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112326469" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 32-64-69</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{t("landReception")}</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112326460" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 32-64-60</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{t("legalDept")}</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112326458" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 32-64-58</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <h3 className="font-semibold mb-3">{t("socialMedia")}</h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://vk.com/dizo_ykt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    ВКонтакте
                    <span className="sr-only">{t("opensInNewWindow")}</span>
                  </a>
                  <a
                    href="https://t.me/dizo_ykt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    Telegram
                    <span className="sr-only">{t("opensInNewWindow")}</span>
                  </a>
                  <a
                    href="https://ok.ru/group/70000000826573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    Одноклассники
                    <span className="sr-only">{t("opensInNewWindow")}</span>
                  </a>
                </div>
              </div>
            </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <Card className="hover:shadow-xl transition-shadow duration-200 mb-12">
          <CardHeader>
            <CardTitle>{t("contactForm")}</CardTitle>
            <CardDescription>
              {t("contactFormDesc")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
          </Card>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          <Card className="hover:shadow-xl transition-shadow duration-200">
          <CardHeader>
            <CardTitle>{t("mapLocation")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=129.732555%2C62.028098&z=16&l=map&pt=129.732555%2C62.028098%2Cpm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Карта расположения: проспект Ленина, дом 15, Якутск"
                className="w-full h-full"
              />
            </div>
          </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
    </>
  );
}
