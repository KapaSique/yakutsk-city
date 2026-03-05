import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Контакты</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
              <CardDescription>
                Департамент имущественных и земельных отношений
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-gray-600">
                    677000, Республика Саха (Якутия)<br />
                    г. Якутск, проспект Ленина, дом 15, офис 612
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон приёмной</h3>
                  <a
                    href="tel:+74112408809"
                    className="text-primary hover:underline text-lg"
                  >
                    8 (4112) 40-88-09
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-gray-600">
                    Понедельник - Пятница: 09:00 - 18:00<br />
                    Обед: 13:00 - 14:00<br />
                    Выходные: Суббота, Воскресенье
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Приём граждан</h3>
                  <p className="text-gray-600">
                    Начальником Департамента - каждый понедельник с 17:00 до 19:00<br />
                    По предварительной записи по телефону: 8 (4112) 40-88-09
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Departments */}
          <Card>
            <CardHeader>
              <CardTitle>Структурные подразделения</CardTitle>
              <CardDescription>
                Телефоны отделов департамента
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">
                  Отдел учёта и распоряжения муниципальной собственностью
                </h3>
                <p className="text-gray-600">
                  Телефон: <a href="tel:+74112408069" className="text-primary hover:underline">8 (4112) 40-80-69</a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">
                  Отдел образования земельных участков
                </h3>
                <p className="text-gray-600">
                  Телефон: <a href="tel:+74112326479" className="text-primary hover:underline">8 (4112) 32-64-79</a>
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="font-semibold mb-2">Социальные сети</h3>
                <a
                  href="https://vk.com/dizo_ykt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-2"
                >
                  ВКонтакте
                  <span className="sr-only">(откроется в новом окне)</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Расположение на карте</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Карта будет добавлена позже</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
