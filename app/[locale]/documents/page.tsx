import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DocumentsPage() {
  return (
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

        <Card>
          <CardHeader>
            <CardTitle>Перечни имущества</CardTitle>
            <CardDescription>
              Имущество для субъектов малого и среднего предпринимательства
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Перечень муниципального имущества городского округа "город Якутск", предназначенного для передачи
                во владение или пользование субъектам малого и среднего предпринимательства и организациям,
                образующим структуру поддержки субъектов малого и среднего предпринимательства.
              </p>
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Актуальный перечень имущества для МСП
                    </h3>
                    <p className="text-sm text-gray-600">
                      Обновлено: 2024 год
                    </p>
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
  );
}
