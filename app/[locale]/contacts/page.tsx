import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContactForm } from "@/components/contact-form";

export default function ContactsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Контакты" }]} />
      <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Контакты</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
              <CardDescription>
                Департамент имущественных и земельных отношений
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-slate-600">
                    677000, Республика Саха (Якутия)<br />
                    г. Якутск, проспект Ленина, дом 15, офис 612
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон приёмной</h3>
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
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-slate-600">
                    Понедельник - Пятница: 09:00 - 18:00<br />
                    Обед: 13:00 - 14:00<br />
                    Выходные: Суббота, Воскресенье
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Электронная почта</h3>
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
                  <h3 className="font-semibold mb-1">Приём граждан</h3>
                  <p className="text-slate-600">
                    Начальником Департамента - каждый понедельник с 17:00 до 19:00<br />
                    По предварительной записи по телефону: 8 (4112) 40-88-09
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Departments */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Структурные подразделения</CardTitle>
              <CardDescription>
                Телефоны отделов департамента
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-slate-500 mb-3">По имущественным вопросам</h4>
                <div className="space-y-3 ml-2">
                  <div>
                    <p className="font-medium text-sm mb-1">Отдел учёта и распоряжения муниципальной собственностью</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112408069" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 40-80-69</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Отдел информатизации</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112408091" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 40-80-91</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Юридический отдел</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112408098" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 40-80-98</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <h4 className="font-semibold text-sm text-slate-500 mb-3">По земельным вопросам</h4>
                <div className="space-y-3 ml-2">
                  <div>
                    <p className="font-medium text-sm mb-1">Отдел образования земельных участков</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112326479" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 32-64-79</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Отдел землеустройства</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112326478" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 32-64-78</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Организационный отдел</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112326469" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 32-64-69</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Приёмная МКУ АЗО</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112326460" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 32-64-60</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Юридический отдел</p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+74112326458" className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors duration-200">8 (4112) 32-64-58</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <h3 className="font-semibold mb-3">Социальные сети</h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://vk.com/dizo_ykt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    ВКонтакте
                    <span className="sr-only">(откроется в новом окне)</span>
                  </a>
                  <a
                    href="https://t.me/dizo_ykt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    Telegram
                    <span className="sr-only">(откроется в новом окне)</span>
                  </a>
                  <a
                    href="https://ok.ru/group/70000000826573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    Одноклассники
                    <span className="sr-only">(откроется в новом окне)</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <Card className="hover:shadow-lg transition-shadow duration-200 mb-12">
          <CardHeader>
            <CardTitle>Форма обратной связи</CardTitle>
            <CardDescription>
              Заполните форму ниже, и мы свяжемся с вами в ближайшее время
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Map placeholder */}
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Расположение на карте</CardTitle>
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
      </div>
    </div>
    </>
  );
}
