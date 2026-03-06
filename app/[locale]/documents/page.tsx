import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DocumentsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Документы</h1>

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
                      Положение о Департаменте имущественных и земельных отношений
                    </h3>
                    <p className="text-sm text-gray-600">
                      Решение Якутской городской Думы от 11.06.2014 № РЯГД-8-6
                    </p>
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
                      Порядок предоставления в аренду имущества
                    </h3>
                    <p className="text-sm text-gray-600">
                      НПА от 28.08.2013 № 151-НПА
                    </p>
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
                      Порядок формирования перечня муниципального имущества
                    </h3>
                    <p className="text-sm text-gray-600">
                      НПА от 01.03.2017 № 333-НПА
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
                      О защите конкуренции
                    </h3>
                    <p className="text-sm text-gray-600">
                      Федеральный закон от 26.07.2006 № 135-ФЗ
                    </p>
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
                      О развитии малого и среднего предпринимательства
                    </h3>
                    <p className="text-sm text-gray-600">
                      Федеральный закон от 24.07.2007 № 209-ФЗ
                    </p>
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
                      Земельный кодекс Российской Федерации
                    </h3>
                    <p className="text-sm text-gray-600">
                      Основной документ по земельным отношениям
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
