import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
