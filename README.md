<div align="center">

# 🏛️ YakutskCity.ru

### Официальный сайт департамента информатизации города Якутска

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green?style=flat-square&logo=w3c&logoColor=white)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License](https://img.shields.io/badge/license-Private-red?style=flat-square)](LICENSE)

[🌐 Посетить сайт](https://yakutskcity.ru) • [📖 Документация](CLAUDE.md) • [🚀 Деплой](DEPLOYMENT.md)

</div>

---

## 📋 О проекте

Современный веб-сайт департамента имущественных и земельных отношений Окружной администрации города Якутска, построенный на Next.js 16 с поддержкой трёх языков и полным соответствием стандартам доступности WCAG 2.1 AA.

### ✨ Ключевые особенности

- 🌍 **Мультиязычность** — Русский, Якутский (Саха), Английский
- ♿ **Доступность** — Полное соответствие WCAG 2.1 AA
- ⚡ **Производительность** — Next.js 16 с Turbopack
- 🎨 **Современный UI** — shadcn/ui + Radix UI + Tailwind CSS
- 📱 **Адаптивность** — Оптимизация для всех устройств
- 🔒 **Безопасность** — Настроенные security headers
- 🚀 **SEO** — Автоматическая генерация sitemap и robots.txt
- ⌨️ **Keyboard Navigation** — Полная поддержка клавиатурной навигации
- 📖 **Screen Reader Friendly** — Семантический HTML и ARIA атрибуты

---

## 🛠️ Технологический стек

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
<br>Next.js 16
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br>React 18
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br>TypeScript 5
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="48" height="48" alt="Tailwind" />
<br>Tailwind CSS
</td>
</tr>
</table>

### 📦 Основные зависимости

- **next-intl** `^4.8.3` — Интернационализация
- **shadcn/ui** — UI компоненты
- **Radix UI** — Примитивы доступности
- **Lucide React** `^0.577.0` — Иконки
- **class-variance-authority** `^0.7.1` — Управление вариантами стилей
- **tailwind-merge** `^3.5.0` — Слияние Tailwind классов

---

## 🚀 Быстрый старт

### Требования

- Node.js 20+
- npm или yarn

### Установка

```bash
# Клонировать репозиторий
git clone <repository-url>
cd YakutskCity-ru

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### 📝 Доступные команды

```bash
npm run dev      # Запуск dev-сервера с Turbopack
npm run build    # Production сборка
npm start        # Запуск production сервера
npm run lint     # Проверка ESLint
npx tsc --noEmit # Проверка типов TypeScript
```

---

## 📁 Структура проекта

```
YakutskCity-ru/
├── app/
│   ├── [locale]/           # Локализованные маршруты
│   │   ├── about/          # О департаменте
│   │   ├── news/           # Новости
│   │   ├── documents/      # Документы
│   │   ├── services/       # Услуги
│   │   ├── contacts/       # Контакты
│   │   ├── layout.tsx      # Layout с Header/Footer
│   │   ├── page.tsx        # Главная страница
│   │   └── not-found.tsx   # 404 страница
│   ├── layout.tsx          # Корневой layout
│   ├── globals.css         # Глобальные стили
│   ├── sitemap.ts          # XML sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── ui/                 # shadcn/ui компоненты
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── skeleton.tsx
│   ├── header.tsx          # Шапка сайта
│   ├── footer.tsx          # Подвал сайта
│   └── search.tsx          # Поиск
├── messages/
│   ├── ru.json             # Русские переводы
│   ├── sah.json            # Якутские переводы
│   └── en.json             # Английские переводы
├── lib/
│   └── utils.ts            # Утилиты (cn helper)
├── public/
│   ├── favicon.ico         # Иконка сайта
│   ├── logo.png            # Логотип департамента
│   └── gerb-rf-png.png     # Герб РФ
├── routing.ts              # Конфигурация маршрутизации
├── i18n.ts                 # Конфигурация i18n
├── tailwind.config.ts      # Конфигурация Tailwind
└── tsconfig.json           # TypeScript конфигурация
```

---

## 🌍 Интернационализация

Проект поддерживает три языка:

- 🇷🇺 **Русский** (ru) — язык по умолчанию
- 🇷🇺 **Якутский** (sah) — язык народа Саха
- 🇬🇧 **Английский** (en)

### Добавление переводов

1. Добавьте ключи в `messages/ru.json`
2. Добавьте переводы в `messages/sah.json` и `messages/en.json`
3. Используйте в компонентах:

```tsx
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('your.key');
  return <h1>{t('title')}</h1>;
}
```

---

## ♿ Доступность (WCAG 2.1 AA)

Проект полностью соответствует стандартам WCAG 2.1 уровня AA:

### Реализовано

- ✅ **Контрастность**: Минимум 4.5:1 для текста
- ✅ **Keyboard Navigation**: Tab, Enter, Escape
- ✅ **Focus Indicators**: Видимые focus rings (3px)
- ✅ **Touch Targets**: Минимум 44×44px
- ✅ **Skip Links**: "Перейти к основному содержанию"
- ✅ **ARIA Labels**: Для иконок и интерактивных элементов
- ✅ **Semantic HTML**: header, nav, main, footer, article
- ✅ **Alt Text**: Для всех изображений
- ✅ **Form Labels**: Связанные с input через htmlFor
- ✅ **prefers-reduced-motion**: Уважение настроек пользователя

### Тестирование доступности

```bash
# Установить axe DevTools
# Chrome: https://chrome.google.com/webstore/detail/axe-devtools/lhdoppojpmngadmnindnejefpokejbdd

# Проверить с клавиатуры
# Tab - переход между элементами
# Enter - активация
# Escape - закрытие модальных окон
```

---

## 🎨 Дизайн-система

### Цветовая палитра

```css
Primary:       #1E40AF (синий)
Primary Dark:  #1E3A8A
Primary Light: #3B82F6
Gray Scale:    50, 100, 200, 600, 900
```

### Типографика

- **Шрифт**: Inter (Latin + Cyrillic)
- **Минимальный размер**: 16px для accessibility
- **Межстрочный интервал**: 1.5 для основного текста

### Анимации

Все анимации учитывают `prefers-reduced-motion`:

- `animate-fade-in` — Плавное появление
- `animate-slide-up` — Скольжение вверх с fade
- `animate-slide-up-large` — Большое скольжение вверх
- `animate-delay-{100,200,300,400}` — Задержки для каскадных эффектов

### Responsive Breakpoints

```css
sm: 640px   /* Мобильные устройства */
md: 768px   /* Планшеты */
lg: 1024px  /* Ноутбуки */
xl: 1280px  /* Десктопы */
2xl: 1536px /* Большие экраны */
```

---

## 🚀 Деплой

Проект автоматически деплоится на Vercel при push в основную ветку.

### Vercel (рекомендуется)

```bash
# Установить Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Другие платформы

- **Netlify**: Поддержка Next.js из коробки
- **Railway**: Автоматический deploy из Git
- **Self-hosted**: `npm run build && npm start`

### Переменные окружения

Создайте `.env.local` для локальной разработки:

```env
# Добавьте необходимые переменные окружения
```

Подробнее см. [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 🔮 Roadmap

### Фаза 1 (Завершено) ✅

- [x] Инициализация Next.js проекта
- [x] Настройка Tailwind CSS
- [x] Создание базовых компонентов (shadcn/ui)
- [x] Создание всех страниц
- [x] Accessibility (WCAG 2.1 AA)
- [x] SEO оптимизация
- [x] Мультиязычность (next-intl)
- [x] Добавление контента из оригинального сайта
- [x] Информация о руководстве и структуре
- [x] Контакты всех отделов
- [x] Социальные сети (ВК, Telegram, OK)
- [x] Favicon и логотип

### Фаза 2 (В работе) 🚧

- [ ] Переводы на якутский и английский
- [ ] Интеграция Payload CMS
- [ ] Поиск по сайту (Meilisearch)
- [ ] Динамические новости
- [ ] Загрузка реальных документов
- [ ] Карта на странице контактов
- [ ] Мобильное меню (функционал)
- [ ] Фотографии сотрудников

### Фаза 3 (Будущее) 🔮

- [ ] Личный кабинет
- [ ] Онлайн-заявки
- [ ] Интеграция с Госуслугами
- [ ] Push-уведомления
- [ ] PWA поддержка

---

## 🔍 SEO

- ✅ Semantic HTML
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ XML Sitemap (`/sitemap.xml`)
- ✅ robots.txt (`/robots.txt`)
- ✅ Canonical URLs

---

## 🤝 Контакты

**Департамент имущественных и земельных отношений**

- 📍 **Адрес**: 677000, Республика Саха (Якутия), г. Якутск, пр. Ленина, д. 15, офис 612
- ☎️ **Телефон**: 8 (4112) 40-88-09
- 📧 **Email**: dizo@yakadm.ru
- 🌐 **Сайт**: [yakutskcity.ru](https://yakutskcity.ru)

**Социальные сети:**

- ВКонтакте: [vk.com/dizo_ykt](https://vk.com/dizo_ykt)
- Telegram: [t.me/dizo_ykt](https://t.me/dizo_ykt)
- Одноклассники: [ok.ru/group/70000000826573](https://ok.ru/group/70000000826573)

---

## 📄 Лицензия

© 2026 Окружная администрация города Якутска. Все права защищены.

---

<div align="center">

**Сделано с ❤️ для города Якутска**

[![Vercel](https://img.shields.io/badge/Powered%20by-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

*Разработано с использованием Claude Opus 4.6*

</div>
