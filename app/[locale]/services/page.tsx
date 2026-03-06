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
            <CardTitle>Предоставление муниципального имущества</CardTitle>
            <CardDescription>
              Услуги по аренде и приватизации муниципального имущества
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Департамент предоставляет услуги по передаче в аренду муниципального имущества субъектам
              малого и среднего предпринимательства.
            </p>
            <Button asChild>
              <Link href="/documents">Административные регламенты</Link>
            </Button>
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
            <p className="text-gray-700 leading-relaxed">
              Информация о предоставлении земельных участков из земель, находящихся в муниципальной
              собственности, или государственная собственность на которые не разграничена.
            </p>
            <Button asChild>
              <Link href="/contacts">Контакты для консультаций</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
