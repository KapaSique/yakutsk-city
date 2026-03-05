import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Департамент имущественных и земельных отношений - Якутск",
    template: "%s | ДИиЗО Якутск"
  },
  description: "Официальный сайт Департамента имущественных и земельных отношений Окружной администрации города Якутска",
  keywords: ["Якутск", "департамент", "имущество", "земельные отношения", "муниципальная собственность"],
  authors: [{ name: "Окружная администрация города Якутска" }],
  creator: "Окружная администрация города Якутска",
  publisher: "Окружная администрация города Якутска",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yakutskcity.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Департамент имущественных и земельных отношений - Якутск",
    description: "Официальный сайт Департамента имущественных и земельных отношений Окружной администрации города Якутска",
    url: 'https://yakutskcity.ru',
    siteName: 'ДИиЗО Якутск',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
