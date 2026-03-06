import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Муниципальные услуги</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Имущественная поддержка субъектов МСП</CardTitle>
            <CardDescription>
              Предоставление в аренду муниципального имущества для малого и среднего предпринимательства
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Департамент предоставляет имущественную поддержку субъектам малого и среднего предпринимательства
                в виде передачи в аренду муниципального имущества, включенного в специальный перечень.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Условия предоставления</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Срок договора аренды составляет не менее 5 лет</li>
                <li>Заключение договора по результатам торгов или без проведения торгов</li>
                <li>Льготные условия для социально значимых видов деятельности</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Необходимые документы</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Заявление об оказании имущественной поддержки</li>
                <li>Документы, подтверждающие принадлежность к субъектам МСП</li>
                <li>Копия учредительных документов</li>
                <li>Свидетельство о внесении записи в ЕГРЮЛ/ЕГРИП</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Контакты для консультаций</h3>
              <p className="text-gray-700">
                Отдел учёта и распоряжения муниципальной собственностью<br />
                Телефон: <a href="tel:+74112408069" className="text-primary hover:underline">8 (4112) 40-80-69</a>
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="/documents">Административные регламенты</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contacts">Все контакты</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Предоставление земельных участков</CardTitle>
            <CardDescription>
              Услуги по предоставлению земельных участков на аукционах
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Предоставление земельных участков из земель, находящихся в муниципальной собственности,
                или государственная собственность на которые не разграничена, на аукционах.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Контакты для консультаций</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-medium">Отдел образования земельных участков</p>
                  <p>Телефон: <a href="tel:+74112326479" className="text-primary hover:underline">8 (4112) 32-64-79</a></p>
                </div>
                <div>
                  <p className="font-medium">Отдел землеустройства</p>
                  <p>Телефон: <a href="tel:+74112326478" className="text-primary hover:underline">8 (4112) 32-64-78</a></p>
                </div>
                <div>
                  <p className="font-medium">Юридический отдел (земельные вопросы)</p>
                  <p>Телефон: <a href="tel:+74112326458" className="text-primary hover:underline">8 (4112) 32-64-58</a></p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="/contacts">Контакты департамента</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
