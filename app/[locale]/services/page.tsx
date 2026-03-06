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

              <div className="flex gap-4 mt-8">
                <Button asChild className="bg-[#1E40AF] hover:bg-[#1E40AF]/90">
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

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          <p className="text-gray-600 mb-8">
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
