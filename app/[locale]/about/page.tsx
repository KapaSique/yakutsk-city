import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">О департаменте</h1>

        {/* Main Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Общая информация</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Департамент имущественных и земельных отношений Окружной администрации города Якутска является
              отраслевым (функциональным) органом местной администрации, входящий в структуру Окружной
              администрации города Якутска, осуществляющий функции в сфере управления муниципальным имуществом,
              а также в сфере управления и распоряжения земельными участками, находящимися в муниципальной
              собственности, а также земельными участками, государственная собственность на которые не
              разграничена в городском округе "город Якутск", в рамках осуществления органами местного
              самоуправления городского округа "город Якутск" полномочий по решению вопросов местного значения
              и отдельных государственных полномочий.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Департамент обеспечивает осуществление полномочий Окружной администрации города Якутска в области
              управления муниципальной собственностью, приватизации муниципальных предприятий городского округа
              "город Якутск" и межотраслевую координацию в процессе приватизации и управления имуществом
              городского округа "город Якутск".
            </p>
          </CardContent>
        </Card>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Реквизиты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h3 className="font-semibold text-sm text-gray-600 mb-1">Полное наименование</h3>
                <p className="text-gray-900">
                  Департамент имущественных и земельных отношений Окружной администрации города Якутска
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-600 mb-1">Сокращенное наименование</h3>
                <p className="text-gray-900">ДИиЗО ОА г. Якутска</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-600 mb-1">Юридический адрес</h3>
                <p className="text-gray-900">
                  677000, Республика Саха (Якутия), город Якутск, проспект Ленина, дом 15, офис 612
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-600 mb-1">Телефон приёмной</h3>
                <p className="text-gray-900">
                  <a href="tel:+74112408809" className="text-primary hover:underline transition-colors duration-200">
                    8 (4112) 40-88-09
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-600 mb-1">Электронная почта</h3>
                <p className="text-gray-900">
                  <a href="mailto:dizo@yakadm.ru" className="text-primary hover:underline transition-colors duration-200">
                    dizo@yakadm.ru
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Режим работы</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h3 className="font-semibold text-sm text-gray-600 mb-1">Рабочие дни</h3>
                <p className="text-gray-900">Понедельник - Пятница</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-600 mb-1">Время работы</h3>
                <p className="text-gray-900">09:00 - 18:00</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-600 mb-1">Обеденный перерыв</h3>
                <p className="text-gray-900">13:00 - 14:00</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-600 mb-1">Выходные дни</h3>
                <p className="text-gray-900">Суббота, Воскресенье</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Staff Section */}
        <Card id="staff" className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Руководство департамента</CardTitle>
            <CardDescription>
              Информация о руководителях департамента
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Бурнашев Алексей Алексеевич
                  </h3>
                  <p className="text-primary font-medium mb-2">Начальник департамента</p>
                  <p className="text-gray-600 text-sm">
                    Приём граждан: каждый понедельник с 17:00 до 19:00<br />
                    По предварительной записи: <a href="tel:+74112408809" className="text-primary hover:underline">8 (4112) 40-88-09</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Друзьянова Лина Бориславовна
                  </h3>
                  <p className="text-primary font-medium">Заместитель начальника департамента</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Departments Structure */}
        <Card className="mt-8 hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Структурные подразделения</CardTitle>
            <CardDescription>
              Отделы и службы департамента
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Отдел учёта и распоряжения муниципальной собственностью</h3>
                <p className="text-sm text-gray-600">
                  Начальник: Колодезникова Венера Николаевна<br />
                  Телефон: <a href="tel:+74112408069" className="text-primary hover:underline">8 (4112) 40-80-69</a>
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Отдел образования земельных участков</h3>
                <p className="text-sm text-gray-600">
                  Начальник: Кузьмина Светлана Петровна<br />
                  Телефон: <a href="tel:+74112326479" className="text-primary hover:underline">8 (4112) 32-64-79</a>
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Отдел информатизации</h3>
                <p className="text-sm text-gray-600">
                  Телефон: <a href="tel:+74112408091" className="text-primary hover:underline">8 (4112) 40-80-91</a>
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Отдел землеустройства</h3>
                <p className="text-sm text-gray-600">
                  Телефон: <a href="tel:+74112326478" className="text-primary hover:underline">8 (4112) 32-64-78</a>
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Организационный отдел</h3>
                <p className="text-sm text-gray-600">
                  Адрес: Октябрьская 20/1<br />
                  Телефон: <a href="tel:+74112326469" className="text-primary hover:underline">8 (4112) 32-64-69</a>
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Юридический отдел</h3>
                <p className="text-sm text-gray-600">
                  Имущественные вопросы: <a href="tel:+74112408098" className="text-primary hover:underline">8 (4112) 40-80-98</a><br />
                  Земельные вопросы: <a href="tel:+74112326458" className="text-primary hover:underline">8 (4112) 32-64-58</a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
