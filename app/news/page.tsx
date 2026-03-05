import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Новости</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News cards will be added here */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime="2026-03-05">5 марта 2026</time>
              </div>
              <CardTitle>Новости департамента</CardTitle>
              <CardDescription>
                Актуальные новости и объявления
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Новости будут добавлены после интеграции с CMS
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
