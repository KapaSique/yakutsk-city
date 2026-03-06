import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/breadcrumb";

export default function DocumentsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Документы" }]} />
      <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Документы</h1>

        {/* Search hint */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
          <Search className="h-5 w-5 text-primary" aria-hidden="true" />
          <p className="text-sm text-gray-700">
            Используйте Ctrl+F для быстрого поиска по документам на странице
          </p>
        </div>

        {/* Regulations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Нормативные правовые акты</CardTitle>
            <CardDescription>
              Документы, регламентирующие деятельность департамента
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Положение о Департаменте имущественных и земельных отношений городского округа "город Якутск"
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Решение Якутской городской Думы от 11.06.2014 № РЯГД-8-6 (ред. от 15.03.2024)
                    </p>
                    <p className="text-xs text-gray-500">PDF, 1.2 МБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Порядок предоставления в аренду муниципального имущества городского округа "город Якутск"
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Постановление Окружной администрации от 28.08.2013 № 151-НПА (ред. от 22.11.2025)
                    </p>
                    <p className="text-xs text-gray-500">PDF, 856 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Порядок формирования, ведения и утверждения перечня муниципального имущества
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Постановление Окружной администрации от 01.03.2017 № 333-НПА (ред. от 10.01.2026)
                    </p>
                    <p className="text-xs text-gray-500">PDF, 624 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Положение о порядке управления и распоряжения земельными участками на территории городского округа
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Решение Якутской городской Думы от 19.09.2019 № РЯГД-12-18
                    </p>
                    <p className="text-xs text-gray-500">PDF, 1.5 МБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Порядок приватизации муниципального имущества городского округа "город Якутск"
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Постановление Окружной администрации от 14.05.2021 № 287-НПА (ред. от 08.02.2026)
                    </p>
                    <p className="text-xs text-gray-500">PDF, 742 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Положение о порядке предоставления земельных участков для индивидуального жилищного строительства
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Решение Якутской городской Думы от 23.04.2020 № РЯГД-15-9
                    </p>
                    <p className="text-xs text-gray-500">PDF, 968 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Federal Laws */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Федеральные законы</CardTitle>
            <CardDescription>
              Основные федеральные законы, регулирующие деятельность
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Земельный кодекс Российской Федерации
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Федеральный закон от 25.10.2001 № 136-ФЗ (ред. от 12.12.2025)
                    </p>
                    <p className="text-xs text-gray-500">PDF, 2.8 МБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      О защите конкуренции
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Федеральный закон от 26.07.2006 № 135-ФЗ (ред. от 29.11.2025)
                    </p>
                    <p className="text-xs text-gray-500">PDF, 1.4 МБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      О развитии малого и среднего предпринимательства в Российской Федерации
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Федеральный закон от 24.07.2007 № 209-ФЗ (ред. от 18.03.2025)
                    </p>
                    <p className="text-xs text-gray-500">PDF, 986 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Property Lists */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Перечни имущества</CardTitle>
            <CardDescription>
              Имущество для субъектов малого и среднего предпринимательства
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Перечень муниципального имущества для передачи субъектам МСП (I квартал 2026)
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Утвержден распоряжением Департамента от 15.01.2026 № 12-Р
                    </p>
                    <p className="text-xs text-gray-500">XLSX, 245 КБ • Обновлено: 15.01.2026</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Реестр муниципального имущества городского округа "город Якутск"
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Актуализированная версия по состоянию на 01.03.2026
                    </p>
                    <p className="text-xs text-gray-500">XLSX, 3.2 МБ • Обновлено: 01.03.2026</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Перечень свободных земельных участков для предоставления в аренду
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Распоряжение Департамента от 20.02.2026 № 45-Р
                    </p>
                    <p className="text-xs text-gray-500">PDF, 1.8 МБ • Обновлено: 20.02.2026</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Administrative Procedures */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Административные регламенты</CardTitle>
            <CardDescription>
              Порядок предоставления муниципальных услуг
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Административный регламент предоставления муниципальной услуги по передаче в аренду имущества
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Утвержден постановлением Окружной администрации от 12.09.2022 № 568-НПА (ред. от 05.12.2025)
                    </p>
                    <p className="text-xs text-gray-500">PDF, 1.1 МБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Административный регламент по предоставлению земельных участков в собственность и аренду
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Утвержден постановлением Окружной администрации от 28.03.2023 № 189-НПА (ред. от 18.01.2026)
                    </p>
                    <p className="text-xs text-gray-500">PDF, 1.4 МБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Административный регламент по приватизации муниципального имущества
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Утвержден постановлением Окружной администрации от 07.11.2021 № 672-НПА (ред. от 22.09.2025)
                    </p>
                    <p className="text-xs text-gray-500">PDF, 892 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reports */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Отчеты и аналитика</CardTitle>
            <CardDescription>
              Отчеты о деятельности департамента
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Отчет о деятельности Департамента за 2025 год
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Утвержден приказом Департамента от 25.01.2026 № 08
                    </p>
                    <p className="text-xs text-gray-500">PDF, 2.1 МБ • Опубликовано: 28.01.2026</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Аналитический отчет по использованию муниципального имущества (IV квартал 2025)
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Подготовлен отделом учета и распоряжения имуществом
                    </p>
                    <p className="text-xs text-gray-500">PDF, 1.6 МБ • Опубликовано: 15.01.2026</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Статистика предоставления земельных участков за 2025 год
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Сводный отчет по земельным отношениям
                    </p>
                    <p className="text-xs text-gray-500">XLSX, 428 КБ • Опубликовано: 20.01.2026</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Forms */}
        <Card>
          <CardHeader>
            <CardTitle>Формы и бланки</CardTitle>
            <CardDescription>
              Типовые формы заявлений и документов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Заявление о предоставлении муниципального имущества в аренду
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Типовая форма для юридических лиц и индивидуальных предпринимателей
                    </p>
                    <p className="text-xs text-gray-500">DOCX, 45 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Заявление о предоставлении земельного участка в собственность/аренду
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Форма для физических и юридических лиц
                    </p>
                    <p className="text-xs text-gray-500">DOCX, 52 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Заявление о приватизации муниципального имущества
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Типовая форма с перечнем необходимых документов
                    </p>
                    <p className="text-xs text-gray-500">DOCX, 48 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Согласие на обработку персональных данных
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Обязательная форма для всех заявителей
                    </p>
                    <p className="text-xs text-gray-500">PDF, 128 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Опись документов, прилагаемых к заявлению
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Универсальная форма для всех видов обращений
                    </p>
                    <p className="text-xs text-gray-500">DOCX, 38 КБ</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label="Скачать документ">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}
