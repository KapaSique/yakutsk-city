import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { FileText, Clock, Wallet, AlertCircle, Download } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { FAQ } from "@/components/faq";

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Муниципальные услуги" }]} />
      <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Муниципальные услуги</h1>

        {/* Service 1: Property Support for SME */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Имущественная поддержка субъектов МСП</CardTitle>
            <CardDescription>
              Предоставление в аренду муниципального имущества для малого и среднего предпринимательства
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-slate-700 leading-relaxed">
                Департамент имущественных и земельных отношений городского округа «город Якутск» предоставляет
                имущественную поддержку субъектам малого и среднего предпринимательства в виде передачи в аренду
                муниципального имущества, включенного в Перечень муниципального имущества, свободного от прав
                третьих лиц (за исключением имущественных прав субъектов малого и среднего предпринимательства).
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-xl border border-cyan-200 shadow-sm">
                  <Clock className="w-6 h-6 text-cyan-600 mb-2" />
                  <p className="text-sm font-semibold text-slate-900">Срок предоставления</p>
                  <p className="text-sm text-slate-600 mt-1">30 рабочих дней</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200 shadow-sm">
                  <Wallet className="w-6 h-6 text-emerald-600 mb-2" />
                  <p className="text-sm font-semibold text-slate-900">Стоимость</p>
                  <p className="text-sm text-slate-600 mt-1">Без взимания платы</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl border border-indigo-200 shadow-sm">
                  <FileText className="w-6 h-6 text-indigo-600 mb-2" />
                  <p className="text-sm font-semibold text-slate-900">Результат</p>
                  <p className="text-sm text-slate-600 mt-1">Договор аренды или отказ</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Порядок получения услуги</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg shadow-cyan-500/30">1</div>
                  <div>
                    <p className="font-medium text-slate-900">Подготовка документов</p>
                    <p className="text-sm text-slate-600 mt-1">Соберите необходимый пакет документов согласно перечню ниже</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg shadow-cyan-500/30">2</div>
                  <div>
                    <p className="font-medium text-slate-900">Подача заявления</p>
                    <p className="text-sm text-slate-600 mt-1">Подайте заявление лично в Департамент или через МФЦ. Возможна подача через портал Госуслуг</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg shadow-cyan-500/30">3</div>
                  <div>
                    <p className="font-medium text-slate-900">Рассмотрение заявления</p>
                    <p className="text-sm text-slate-600 mt-1">Департамент проверяет документы и принимает решение в течение 30 рабочих дней</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg shadow-cyan-500/30">4</div>
                  <div>
                    <p className="font-medium text-slate-900">Получение результата</p>
                    <p className="text-sm text-slate-600 mt-1">При положительном решении заключается договор аренды сроком не менее 5 лет</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Необходимые документы</h3>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Заявление</strong> об оказании имущественной поддержки (по установленной форме)</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Выписка из ЕГРЮЛ/ЕГРИП</strong> (не старше 30 дней) или свидетельство о государственной регистрации</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Копии учредительных документов</strong> (устав, учредительный договор) - для юридических лиц</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Документы, подтверждающие принадлежность к субъектам МСП:</strong> справка из налогового органа о применяемой системе налогообложения, сведения о среднесписочной численности работников, выписка из реестра МСП</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Копия паспорта</strong> заявителя (для ИП) или руководителя организации</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Бизнес-план</strong> с обоснованием необходимости получения имущества</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Справка об отсутствии задолженности</strong> по налогам и сборам</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-900">
                    <p className="font-semibold mb-1">Важно:</p>
                    <p>Все документы предоставляются в оригиналах или нотариально заверенных копиях. Документы на иностранном языке должны быть переведены на русский язык и нотариально заверены.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Условия предоставления</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Срок договора аренды составляет не менее 5 лет с возможностью продления</li>
                <li>Заключение договора по результатам торгов или без проведения торгов (для социально значимых видов деятельности)</li>
                <li>Льготные условия аренды для предприятий, осуществляющих социально значимые виды деятельности</li>
                <li>Арендная плата устанавливается в соответствии с рыночной стоимостью или с применением понижающих коэффициентов</li>
                <li>Возможность выкупа арендуемого имущества по истечении срока аренды</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Основания для отказа</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Несоответствие заявителя критериям субъекта малого или среднего предпринимательства</li>
                <li>Предоставление неполного пакета документов или недостоверных сведений</li>
                <li>Наличие задолженности по налогам и сборам</li>
                <li>Отсутствие свободного муниципального имущества, соответствующего запросу</li>
                <li>Нарушение заявителем ранее заключенных договоров аренды муниципального имущества</li>
              </ul>

              <div className="flex gap-4 mt-8">
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-lg shadow-cyan-500/30">
                  <Link href="/contacts">Подать заявление</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/documents">
                    <Download className="w-4 h-4 mr-2" />
                    Скачать форму заявления
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service 2: Land Plots */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Предоставление земельных участков</CardTitle>
            <CardDescription>
              Предоставление земельных участков из муниципальной собственности на аукционах
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-slate-700 leading-relaxed">
                Департамент имущественных и земельных отношений осуществляет предоставление земельных участков,
                находящихся в муниципальной собственности городского округа «город Якутск», или земельных участков,
                государственная собственность на которые не разграничена, для строительства, ведения садоводства,
                огородничества, индивидуального жилищного строительства и иных целей на торгах (аукционах).
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-xl border border-cyan-200 shadow-sm">
                  <Clock className="w-6 h-6 text-cyan-600 mb-2" />
                  <p className="text-sm font-semibold text-slate-900">Срок предоставления</p>
                  <p className="text-sm text-slate-600 mt-1">45 рабочих дней</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200 shadow-sm">
                  <Wallet className="w-6 h-6 text-emerald-600 mb-2" />
                  <p className="text-sm font-semibold text-slate-900">Стоимость</p>
                  <p className="text-sm text-slate-600 mt-1">По результатам аукциона</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl border border-indigo-200 shadow-sm">
                  <FileText className="w-6 h-6 text-indigo-600 mb-2" />
                  <p className="text-sm font-semibold text-slate-900">Результат</p>
                  <p className="text-sm text-slate-600 mt-1">Договор купли-продажи или аренды</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Порядок получения услуги</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg shadow-cyan-500/30">1</div>
                  <div>
                    <p className="font-medium text-slate-900">Выбор земельного участка</p>
                    <p className="text-sm text-slate-600 mt-1">Ознакомьтесь с перечнем земельных участков, выставленных на торги, на официальном сайте или в Департаменте</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg shadow-cyan-500/30">2</div>
                  <div>
                    <p className="font-medium text-slate-900">Подача заявки на участие в аукционе</p>
                    <p className="text-sm text-slate-600 mt-1">Подайте заявку с приложением необходимых документов и внесите задаток (20% от начальной цены)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg shadow-cyan-500/30">3</div>
                  <div>
                    <p className="font-medium text-slate-900">Участие в аукционе</p>
                    <p className="text-sm text-slate-600 mt-1">Примите участие в торгах в установленные дату и время. Аукцион проводится в открытой форме</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg shadow-cyan-500/30">4</div>
                  <div>
                    <p className="font-medium text-slate-900">Заключение договора</p>
                    <p className="text-sm text-slate-600 mt-1">При победе в аукционе заключите договор купли-продажи или аренды в течение 30 дней</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg shadow-cyan-500/30">5</div>
                  <div>
                    <p className="font-medium text-slate-900">Регистрация права</p>
                    <p className="text-sm text-slate-600 mt-1">Зарегистрируйте право собственности или аренды в Росреестре</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Необходимые документы</h3>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <p className="text-sm font-semibold text-slate-900 mb-4">Для физических лиц:</p>
                <ul className="space-y-3 text-slate-700 mb-6">
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Заявка на участие в аукционе</strong> (по установленной форме)</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Копия паспорта</strong> гражданина РФ (все заполненные страницы)</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Документ, подтверждающий внесение задатка</strong> (платежное поручение или квитанция)</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Доверенность</strong> (если интересы представляет доверенное лицо)</span>
                  </li>
                </ul>

                <p className="text-sm font-semibold text-slate-900 mb-4">Для юридических лиц:</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Заявка на участие в аукционе</strong> (по установленной форме)</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Выписка из ЕГРЮЛ</strong> (не старше 30 дней)</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Копии учредительных документов</strong> (устав, учредительный договор)</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Документ, подтверждающий полномочия</strong> руководителя (приказ о назначении, решение учредителей)</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Документ, подтверждающий внесение задатка</strong> (платежное поручение)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-900">
                    <p className="font-semibold mb-1">Важно:</p>
                    <p>Задаток должен быть внесен не позднее даты окончания приема заявок. Реквизиты для перечисления задатка указываются в извещении о проведении аукциона. Задаток засчитывается в счет оплаты по договору.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Условия участия в аукционе</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Размер задатка составляет 20% от начальной цены предмета аукциона</li>
                <li>Шаг аукциона устанавливается в размере 3% от начальной цены</li>
                <li>Победителем признается участник, предложивший наибольшую цену</li>
                <li>Договор заключается в течение 30 дней с даты подведения итогов аукциона</li>
                <li>Оплата по договору производится в течение 10 дней с момента его заключения</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Основания для отказа в допуске к аукциону</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Непредставление необходимых документов или представление недостоверных сведений</li>
                <li>Несвоевременное внесение задатка</li>
                <li>Подача заявки лицом, которое не имеет права быть участником аукциона</li>
                <li>Наличие сведений о заявителе в реестре недобросовестных участников аукциона</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Часто задаваемые вопросы</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="land-1">
                  <AccordionTrigger>Где можно посмотреть список участков, выставленных на торги?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Информация о земельных участках, выставленных на торги, публикуется на официальном сайте
                      Департамента, на портале torgi.gov.ru, а также на информационных стендах в здании Департамента.
                      Извещения о проведении аукционов публикуются не менее чем за 30 дней до даты проведения торгов.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="land-2">
                  <AccordionTrigger>Что происходит с задатком при проигрыше на аукционе?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Задаток возвращается участникам аукциона, которые не стали победителями, в течение 5 рабочих
                      дней со дня подведения итогов аукциона. Возврат осуществляется на банковский счет, указанный
                      в заявке на участие в аукционе.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="land-3">
                  <AccordionTrigger>Можно ли получить земельный участок без аукциона?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Без проведения торгов земельные участки предоставляются только в случаях, предусмотренных
                      Земельным кодексом РФ: для ведения личного подсобного хозяйства, садоводства, огородничества,
                      индивидуального жилищного строительства (при наличии права на бесплатное предоставление),
                      а также в иных случаях, установленных законодательством.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="land-4">
                  <AccordionTrigger>Какие виды разрешенного использования земли существуют?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Виды разрешенного использования определяются в соответствии с правилами землепользования и
                      застройки городского округа «город Якутск». Основные категории: индивидуальное жилищное
                      строительство, малоэтажная жилая застройка, коммерческая застройка, производственная
                      деятельность, сельскохозяйственное использование. Конкретный вид указывается в документации
                      на аукцион.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Контакты для консультаций</h3>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border border-cyan-200 space-y-4 shadow-sm">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Отдел образования земельных участков</p>
                  <div className="space-y-1 text-slate-700">
                    <p>Телефон: <a href="tel:+74112326479" className="text-cyan-600 hover:text-cyan-700 hover:underline font-medium">8 (4112) 32-64-79</a></p>
                    <p>Адрес: г. Якутск, ул. Орджоникидзе, 24</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Отдел землеустройства</p>
                  <div className="space-y-1 text-slate-700">
                    <p>Телефон: <a href="tel:+74112326478" className="text-cyan-600 hover:text-cyan-700 hover:underline font-medium">8 (4112) 32-64-78</a></p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Юридический отдел (земельные вопросы)</p>
                  <div className="space-y-1 text-slate-700">
                    <p>Телефон: <a href="tel:+74112326458" className="text-cyan-600 hover:text-cyan-700 hover:underline font-medium">8 (4112) 32-64-58</a></p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 pt-2">Часы приема: Пн-Пт 9:00-18:00 (обед 13:00-14:00)</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-lg shadow-cyan-500/30">
                <Link href="/documents">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать форму заявки
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contacts">Контакты департамента</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Часто задаваемые вопросы</h2>
          <p className="text-slate-600 mb-8">
            Ответы на наиболее распространенные вопросы о муниципальных услугах и управлении имуществом
          </p>

          <FAQ
            items={[
              {
                question: "Как подать заявление на получение муниципальной услуги?",
                answer: "Заявление можно подать тремя способами: лично в Департаменте имущественных и земельных отношений по адресу ул. Орджоникидзе, 24, через многофункциональный центр (МФЦ), или в электронном виде через портал Госуслуг. При личной подаче необходимо иметь при себе паспорт и полный пакет документов согласно перечню для выбранной услуги."
              },
              {
                question: "Какие документы нужны для аренды муниципального имущества?",
                answer: "Для аренды муниципального имущества потребуются: заявление по установленной форме, выписка из ЕГРЮЛ/ЕГРИП (не старше 30 дней), копии учредительных документов, документы, подтверждающие принадлежность к субъектам МСП, копия паспорта руководителя, бизнес-план с обоснованием, справка об отсутствии задолженности по налогам. Все документы должны быть в оригиналах или нотариально заверенных копиях."
              },
              {
                question: "Сколько времени занимает рассмотрение заявления?",
                answer: "Срок рассмотрения заявления на предоставление имущественной поддержки субъектам МСП составляет 30 рабочих дней с момента подачи полного пакета документов. В случае необходимости дополнительной проверки документов срок может быть продлен, о чем заявитель будет уведомлен в письменном виде."
              },
              {
                question: "Взимается ли плата за предоставление муниципальных услуг?",
                answer: "Предоставление муниципальной услуги по имущественной поддержке субъектов МСП осуществляется без взимания государственной пошлины или иной платы. Однако арендная плата за пользование муниципальным имуществом устанавливается в соответствии с рыночной стоимостью или с применением понижающих коэффициентов для социально значимых видов деятельности."
              },
              {
                question: "На какой срок заключается договор аренды муниципального имущества?",
                answer: "Договор аренды муниципального имущества для субъектов малого и среднего предпринимательства заключается на срок не менее 5 лет с возможностью последующего продления. По истечении срока аренды предусмотрена возможность выкупа арендуемого имущества на льготных условиях."
              },
              {
                question: "Что делать, если в предоставлении услуги отказано?",
                answer: "В случае отказа в предоставлении услуги заявитель получает письменное уведомление с указанием причин отказа. Вы имеете право обжаловать решение в вышестоящий орган (Администрацию городского округа «город Якутск») или в судебном порядке. Также можно устранить причины отказа и подать заявление повторно."
              },
              {
                question: "Куда обращаться за консультацией по муниципальным услугам?",
                answer: "За консультацией можно обратиться в Департамент имущественных и земельных отношений по телефону +7 (4112) 42-26-49 в рабочие дни с 9:00 до 18:00 (перерыв с 13:00 до 14:00), по электронной почте dizo@yakutsk.org, или лично по адресу: г. Якутск, ул. Орджоникидзе, 24. Также информация доступна на официальном сайте и портале Госуслуг."
              }
            ]}
          />
        </div>
      </div>
    </div>
    </>
  );
}
