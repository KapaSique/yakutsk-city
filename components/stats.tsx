import { Building2, MapPin, FileCheck, Users } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description?: string;
}

function StatItem({ icon, value, label, description }: StatItemProps) {
  return (
    <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full shadow-lg shadow-cyan-500/30">
          {icon}
        </div>
        <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">
          {value}
        </div>
        <div className="text-lg font-semibold text-slate-900 mb-1">
          {label}
        </div>
        {description && (
          <div className="text-sm text-slate-600 mt-1">
            {description}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Stats() {
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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Наша работа в цифрах
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ключевые показатели деятельности департамента за 2025 год
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
