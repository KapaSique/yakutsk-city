import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, FileText, Award, Target, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "О департаменте" }]} />
      <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">О департаменте</h1>

        {/* History and Mission */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-[#1E40AF]" />
              История и миссия департамента
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">История создания</h3>
                <p className="text-gray-700 leading-relaxed">
                  Департамент имущественных и земельных отношений Окружной администрации города Якутска был образован
                  в соответствии с решением Якутской городской Думы в рамках реформирования системы управления
                  муниципальной собственностью. За годы работы департамент стал ключевым органом в сфере управления
                  имущественным комплексом столицы Республики Саха (Якутия), обеспечивая эффективное использование
                  муниципальных ресурсов и развитие земельных отношений.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Миссия департамента</h3>
                <p className="text-gray-700 leading-relaxed">
                  Обеспечение эффективного управления муниципальной собственностью и земельными ресурсами города
                  Якутска в интересах жителей городского округа, создание благоприятных условий для социально-экономического
                  развития территории, повышение инвестиционной привлекательности города и обеспечение прозрачности
                  в сфере имущественных и земельных отношений.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Основная деятельность</h3>
                <p className="text-gray-700 leading-relaxed">
                  Департамент имущественных и земельных отношений Окружной администрации города Якутска является
                  отраслевым (функциональным) органом местной администрации, входящий в структуру Окружной
                  администрации города Якутска, осуществляющий функции в сфере управления муниципальным имуществом,
                  а также в сфере управления и распоряжения земельными участками, находящимися в муниципальной
                  собственности, а также земельными участками, государственная собственность на которые не
                  разграничена в городском округе "город Якутск", в рамках осуществления органами местного
                  самоуправления городского округа "город Якутск" полномочий по решению вопросов местного значения
                  и отдельных государственных полномочий.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-[#1E40AF]" />
              Основные функции и полномочия
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Управление муниципальным имуществом</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Учёт и инвентаризация объектов муниципальной собственности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Передача имущества в аренду, безвозмездное пользование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Приватизация муниципального имущества</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Оценка рыночной стоимости муниципального имущества</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Контроль за использованием муниципального имущества</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Управление земельными ресурсами</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Предоставление земельных участков в собственность, аренду</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Образование земельных участков из земель муниципальной собственности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Проведение торгов по продаже земельных участков</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Установление и изменение вида разрешённого использования земель</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Ведение информационной системы обеспечения градостроительной деятельности</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Организационно-правовая деятельность</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Подготовка нормативных правовых актов в сфере имущественных отношений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Представление интересов муниципального образования в судах</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Взаимодействие с федеральными и региональными органами власти</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Информационное обеспечение</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Ведение реестра муниципального имущества</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Размещение информации о торгах на официальных площадках</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span>Обеспечение доступа граждан к информации о деятельности департамента</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#1E40AF]" />
              Статистика деятельности
            </CardTitle>
            <CardDescription>
              Ключевые показатели работы департамента
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-4xl font-bold text-[#1E40AF] mb-2">2,847</div>
                <div className="text-sm text-gray-700 font-medium">Объектов муниципальной собственности</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-4xl font-bold text-[#1E40AF] mb-2">15,234</div>
                <div className="text-sm text-gray-700 font-medium">Земельных участков в управлении</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-4xl font-bold text-[#1E40AF] mb-2">98.7%</div>
                <div className="text-sm text-gray-700 font-medium">Заявлений обработано в срок</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
