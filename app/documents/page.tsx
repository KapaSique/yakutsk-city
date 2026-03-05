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
            <div className="space-y-4">
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Положение о департаменте
                    </h3>
                    <p className="text-sm text-gray-600">
                      Основные положения и функции департамента
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
                      Административные регламенты
                    </h3>
                    <p className="text-sm text-gray-600">
                      Регламенты предоставления муниципальных услуг
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
            <CardTitle>Перечень имущества</CardTitle>
            <CardDescription>
              Имущество для субъектов малого и среднего предпринимательства
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Документы будут добавлены после интеграции с CMS
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
