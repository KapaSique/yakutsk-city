import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Департамент имущественных и земельных отношений - Якутск",
    template: "%s | ДИиЗО Якутск"
  },
  description: "Официальный сайт Департамента имущественных и земельных отношений Окружной администрации города Якутска",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
