"use client";

import { Building2, MapPin, FileCheck, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description?: string;
  index: number;
}

function StatItem({ icon, value, label, description, index }: StatItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
      whileHover={shouldReduceMotion ? {} : { y: -8 }}
      className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-500/50 transition-all hover:shadow-2xl duration-200 relative overflow-hidden group cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      <div className="flex flex-col items-center text-center relative">
        <motion.div
          whileHover={shouldReduceMotion ? {} : { rotate: 360, scale: 1.1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-4 p-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow duration-200"
        >
          {icon}
        </motion.div>
        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 + 0.3, type: shouldReduceMotion ? "tween" : "spring" }}
          className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2"
        >
          {value}
        </motion.div>
        <div className="text-lg font-semibold text-slate-900 mb-1">
          {label}
        </div>
        {description && (
          <div className="text-sm text-slate-600 mt-1">
            {description}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    {
      icon: <Building2 className="h-8 w-8 text-white" aria-hidden="true" />,
      value: "2,847",
      label: "Объектов недвижимости",
      description: "в муниципальной собственности"
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" aria-hidden="true" />,
      value: "1,523",
      label: "Земельных участков",
      description: "предоставлено в 2025 году"
    },
    {
      icon: <FileCheck className="h-8 w-8 text-white" aria-hidden="true" />,
      value: "8,600+",
      label: "Услуг оказано",
      description: "за текущий год"
    },
    {
      icon: <Users className="h-8 w-8 text-white" aria-hidden="true" />,
      value: "45,000+",
      label: "Граждан обслужено",
      description: "в 2025 году"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Наша работа в цифрах
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ключевые показатели деятельности департамента за 2025 год
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
