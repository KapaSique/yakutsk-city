import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Информация о предоставлении муниципального имущества",
      date: "2024-03-01",
      description: "Департамент информирует о порядке предоставления в аренду муниципального имущества субъектам малого и среднего предпринимательства."
    },
    {
      id: 2,
      title: "Обновлён перечень имущества для МСП",
      date: "2024-02-15",
      description: "Опубликован актуализированный перечень муниципального имущества, предназначенного для передачи субъектам МСП."
    },
    {
      id: 3,
      title: "Консультации по земельным вопросам",
      date: "2024-02-01",
      description: "Специалисты департамента проводят консультации по вопросам предоставления земельных участков. Запись по телефону приёмной."
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Новости</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card
              key={item.id}
              className="hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>
                  {new Date(item.date).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Больше новостей в наших социальных сетях:{" "}
            <a href="https://vk.com/dizo_ykt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              ВКонтакте
            </a>
            {", "}
            <a href="https://t.me/dizo_ykt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Telegram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
