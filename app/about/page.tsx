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
          <Card>
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
                  <a href="tel:+74112408809" className="text-primary hover:underline">
                    8 (4112) 40-88-09
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
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
        <Card id="staff">
          <CardHeader>
            <CardTitle>Руководство департамента</CardTitle>
            <CardDescription>
              Информация о руководителях и структурных подразделениях
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Информация о руководстве будет добавлена позже
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
