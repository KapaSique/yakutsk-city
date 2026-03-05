export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Департамент имущественных и земельных отношений
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Окружная администрация города Якутска
        </p>
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Проект в разработке</h2>
          <p className="text-gray-700">
            Современный сайт департамента создаётся с использованием Next.js, TypeScript и Tailwind CSS.
          </p>
        </div>
      </div>
    </main>
  );
}
