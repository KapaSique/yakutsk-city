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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Муниципальные услуги</h1>

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
              <p className="text-gray-700 leading-relaxed">
                Департамент имущественных и земельных отношений городского округа «город Якутск» предоставляет
                имущественную поддержку субъектам малого и среднего предпринимательства в виде передачи в аренду
                муниципального имущества, включенного в Перечень муниципального имущества, свободного от прав
                третьих лиц (за исключением имущественных прав субъектов малого и среднего предпринимательства).
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <Clock className="w-6 h-6 text-[#1E40AF] mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Срок предоставления</p>
                  <p className="text-sm text-gray-600 mt-1">30 рабочих дней</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <Wallet className="w-6 h-6 text-[#1E40AF] mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Стоимость</p>
                  <p className="text-sm text-gray-600 mt-1">Без взимания платы</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <FileText className="w-6 h-6 text-[#1E40AF] mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Результат</p>
                  <p className="text-sm text-gray-600 mt-1">Договор аренды или отказ</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Порядок получения услуги</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1E40AF] text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <p className="font-medium text-gray-900">Подготовка документов</p>
                    <p className="text-sm text-gray-600 mt-1">Соберите необходимый пакет документов согласно перечню ниже</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1E40AF] text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <p className="font-medium text-gray-900">Подача заявления</p>
                    <p className="text-sm text-gray-600 mt-1">Подайте заявление лично в Департамент или через МФЦ. Возможна подача через портал Госуслуг</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1E40AF] text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <p className="font-medium text-gray-900">Рассмотрение заявления</p>
                    <p className="text-sm text-gray-600 mt-1">Департамент проверяет документы и принимает решение в течение 30 рабочих дней</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1E40AF] text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <p className="font-medium text-gray-900">Получение результата</p>
                    <p className="text-sm text-gray-600 mt-1">При положительном решении заключается договор аренды сроком не менее 5 лет</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Необходимые документы</h3>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span><strong>Заявление</strong> об оказании имущественной поддержки (по установленной форме)</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span><strong>Выписка из ЕГРЮЛ/ЕГРИП</strong> (не старше 30 дней) или свидетельство о государственной регистрации</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span><strong>Копии учредительных документов</strong> (устав, учредительный договор) - для юридических лиц</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span><strong>Документы, подтверждающие принадлежность к субъектам МСП:</strong> справка из налогового органа о применяемой системе налогообложения, сведения о среднесписочной численности работников, выписка из реестра МСП</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span><strong>Копия паспорта</strong> заявителя (для ИП) или руководителя организации</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                    <span><strong>Бизнес-план</strong> с обоснованием необходимости получения имущества</span>
                  </li>
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
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

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Условия предоставления</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Срок договора аренды составляет не менее 5 лет с возможностью продления</li>
                <li>Заключение договора по результатам торгов или без проведения торгов (для социально значимых видов деятельности)</li>
                <li>Льготные условия аренды для предприятий, осуществляющих социально значимые виды деятельности</li>
                <li>Арендная плата устанавливается в соответствии с рыночной стоимостью или с применением понижающих коэффициентов</li>
                <li>Возможность выкупа арендуемого имущества по истечении срока аренды</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Основания для отказа</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Несоответствие заявителя критериям субъекта малого или среднего предпринимательства</li>
                <li>Предоставление неполного пакета документов или недостоверных сведений</li>
                <li>Наличие задолженности по налогам и сборам</li>
                <li>Отсутствие свободного муниципального имущества, соответствующего запросу</li>
                <li>Нарушение заявителем ранее заключенных договоров аренды муниципального имущества</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Часто задаваемые вопросы</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Кто может получить имущественную поддержку?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Имущественную поддержку могут получить субъекты малого и среднего предпринимательства,
                      зарегистрированные на территории городского округа «город Якутск» и включенные в единый
                      реестр субъектов МСП. Это могут быть как юридические лица, так и индивидуальные предприниматели.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Какие виды имущества можно получить в аренду?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      В аренду предоставляются нежилые помещения, здания, сооружения, находящиеся в муниципальной
                      собственности и включенные в специальный Перечень. Это могут быть торговые площади, офисные
                      помещения, производственные здания и другие объекты недвижимости.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Можно ли продлить договор аренды?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Да, договор аренды может быть продлен на новый срок при условии надлежащего исполнения
                      арендатором своих обязательств и отсутствия нарушений условий договора. Заявление о продлении
                      необходимо подать не позднее чем за 3 месяца до окончания срока действия договора.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Как рассчитывается арендная плата?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Арендная плата рассчитывается на основании рыночной стоимости объекта, определенной независимым
                      оценщиком. Для социально значимых видов деятельности могут применяться понижающие коэффициенты
                      от 0,5 до 0,7 в зависимости от вида деятельности.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Можно ли выкупить арендуемое имущество?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Да, по истечении срока аренды (не менее 5 лет) арендатор имеет преимущественное право на выкуп
                      арендуемого имущества по рыночной стоимости. Для этого необходимо подать соответствующее заявление
                      и пройти процедуру оценки имущества.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Контакты для консультаций</h3>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="font-semibold text-gray-900 mb-3">Отдел учёта и распоряжения муниципальной собственностью</p>
                <div className="space-y-2 text-gray-700">
                  <p>Телефон: <a href="tel:+74112408069" className="text-[#1E40AF] hover:underline font-medium">8 (4112) 40-80-69</a></p>
                  <p>Адрес: г. Якутск, ул. Орджоникидзе, 24</p>
                  <p>Часы приема: Пн-Пт 9:00-18:00 (обед 13:00-14:00)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-[#F97316] hover:bg-[#EA580C]">
                <Link href="/documents">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать форму заявления
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/documents">Административные регламенты</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contacts">Все контакты</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}
