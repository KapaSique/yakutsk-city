import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://yakutskcity.ru'),
  title: {
    default: "Департамент имущественных и земельных отношений - Якутск",
    template: "%s | ДИиЗО Якутск"
  },
  description: "Официальный сайт Департамента имущественных и земельных отношений Окружной администрации города Якутска. Управление муниципальным имуществом и земельными участками.",
  keywords: ["департамент", "имущество", "земельные отношения", "Якутск", "муниципальная собственность", "аренда", "земельные участки"],
  authors: [{ name: "Департамент имущественных и земельных отношений" }],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://yakutskcity.ru',
    siteName: 'Департамент имущественных и земельных отношений - Якутск',
    title: 'Департамент имущественных и земельных отношений - Якутск',
    description: 'Официальный сайт Департамента имущественных и земельных отношений Окружной администрации города Якутска',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Департамент имущественных и земельных отношений',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Департамент имущественных и земельных отношений - Якутск',
    description: 'Официальный сайт Департамента имущественных и земельных отношений Окружной администрации города Якутска',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
