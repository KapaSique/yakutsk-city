# Yakutsk City Administration Website

Современный сайт Департамента имущественных и земельных отношений Окружной администрации города Якутска.

## 🚀 Технологии

- **Next.js 16** - React фреймворк с App Router и Turbopack
- **TypeScript** - Типизация
- **Tailwind CSS** - Utility-first CSS фреймворк
- **shadcn/ui** - Компоненты на базе Radix UI
- **Lucide React** - Иконки
- **next-intl** - Интернационализация (ru, sah, en)

## ✨ Особенности

- ✅ **Мультиязычность** - Поддержка русского, якутского и английского языков
- ✅ **WCAG 2.1 AA** - Полная доступность для людей с ограниченными возможностями
- ✅ **SEO оптимизация** - Sitemap, robots.txt, Open Graph метатеги
- ✅ **Responsive дизайн** - Адаптивная вёрстка для всех устройств
- ✅ **Keyboard navigation** - Полная поддержка клавиатурной навигации
- ✅ **Screen reader friendly** - Семантический HTML и ARIA атрибуты
- ✅ **Performance** - Оптимизация шрифтов, изображений, code splitting

## 📦 Установка

```bash
# Клонировать репозиторий
git clone <repository-url>
cd YakutskCity-ru

# Установить зависимости
npm install

# Запустить dev сервер
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🏗️ Структура проекта

```
YakutskCity-ru/
├── app/                      # Next.js App Router
│   ├── [locale]/            # Локализованные маршруты
│   │   ├── about/           # Страница "О департаменте"
│   │   ├── contacts/        # Страница "Контакты"
│   │   ├── documents/       # Страница "Документы"
│   │   ├── news/            # Страница "Новости"
│   │   ├── services/        # Страница "Услуги"
│   │   ├── layout.tsx       # Layout с Header/Footer
│   │   ├── page.tsx         # Главная страница
│   │   └── not-found.tsx    # 404 страница
│   ├── layout.tsx           # Корневой layout
│   ├── globals.css          # Глобальные стили
│   ├── robots.ts            # robots.txt
│   └── sitemap.ts           # XML sitemap
├── components/              # React компоненты
│   ├── ui/                  # shadcn/ui компоненты
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── skeleton.tsx
│   ├── header.tsx           # Шапка сайта
│   ├── footer.tsx           # Подвал сайта
│   └── search.tsx           # Компонент поиска
├── messages/                # Переводы для i18n
│   ├── ru.json              # Русский
│   ├── sah.json             # Якутский
│   └── en.json              # Английский
├── lib/                     # Утилиты
│   └── utils.ts             # cn() helper
├── public/                  # Статические файлы
│   ├── favicon.ico          # Иконка сайта
│   ├── logo.png             # Логотип департамента
│   └── gerb-rf-png.png      # Герб РФ
├── i18n.ts                  # Конфигурация next-intl
├── routing.ts               # Настройки маршрутизации
├── tailwind.config.ts       # Tailwind конфигурация
├── tsconfig.json            # TypeScript конфигурация
├── CLAUDE.md                # Руководство для Claude Code
├── CONTENT_ANALYSIS.md      # Анализ контента
└── package.json             # Зависимости
```

## 🎨 Дизайн-система

### Цвета

```css
--primary: #1E40AF        /* Основной синий */
--primary-dark: #1E3A8A   /* Тёмный синий */
--primary-light: #3B82F6  /* Светлый синий */
--gray-900: #111827       /* Основной текст */
--gray-600: #4B5563       /* Вторичный текст */
```

### Типографика

- **Шрифт**: Inter (Google Fonts)
- **Минимальный размер**: 16px (для accessibility)
- **Line height**: 1.5 для основного текста

### Компоненты

- **Button**: Primary, Secondary, Ghost, Link варианты
- **Card**: С header, title, description, content, footer
- **Input**: С поддержкой accessibility
- **Label**: Связанные с input через htmlFor

## 🔍 SEO

- ✅ Semantic HTML
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ XML Sitemap
- ✅ robots.txt
- ✅ Canonical URLs

## ♿ Accessibility (WCAG 2.1 AA)

### Реализовано

- ✅ **Контрастность**: Минимум 4.5:1 для текста
- ✅ **Keyboard navigation**: Tab, Enter, Escape
- ✅ **Focus indicators**: Видимые focus rings (3px)
- ✅ **Touch targets**: Минимум 44x44px
- ✅ **Skip links**: "Перейти к основному содержанию"
- ✅ **ARIA labels**: Для иконок и интерактивных элементов
- ✅ **Semantic HTML**: header, nav, main, footer, article
- ✅ **Alt text**: Для всех изображений
- ✅ **Form labels**: Связанные с input
- ✅ **prefers-reduced-motion**: Уважение настроек пользователя

### Тестирование

```bash
# Установить axe DevTools
# Chrome: https://chrome.google.com/webstore/detail/axe-devtools/lhdoppojpmngadmnindnejefpokejbdd

# Проверить с клавиатуры
# Tab - переход между элементами
# Enter - активация
# Escape - закрытие модальных окон
```

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Мобильные устройства */
md: 768px   /* Планшеты */
lg: 1024px  /* Ноутбуки */
xl: 1280px  /* Десктопы */
2xl: 1536px /* Большие экраны */
```

## 🚀 Deployment

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

## 📝 Скрипты

```bash
npm run dev      # Запустить dev сервер (Turbopack)
npm run build    # Собрать production build
npm start        # Запустить production сервер
npm run lint     # Проверить код с ESLint
```

## 🔮 Roadmap

### Фаза 1 (Завершено) ✅
- [x] Инициализация Next.js проекта
- [x] Настройка Tailwind CSS
- [x] Создание базовых компонентов
- [x] Создание всех страниц
- [x] Accessibility (WCAG 2.1 AA)
- [x] SEO оптимизация
- [x] Мультиязычность (next-intl)
- [x] Добавление контента из оригинального сайта
- [x] Информация о руководстве и структуре
- [x] Контакты всех отделов
- [x] Социальные сети (ВК, Telegram, OK)

### Фаза 2 (В работе) 🚧
- [x] Favicon и логотип
- [ ] Переводы на якутский и английский
- [ ] Интеграция Payload CMS
- [ ] Поиск по сайту (Meilisearch)
- [ ] Динамические новости
- [ ] Загрузка реальных документов
- [ ] Карта на странице контактов
- [ ] Мобильное меню (функционал)
- [ ] Фотографии сотрудников

### Фаза 3 (Будущее)
- [ ] Личный кабинет
- [ ] Онлайн-заявки
- [ ] Интеграция с Госуслугами
- [ ] Push-уведомления
- [ ] PWA поддержка

## 🤝 Контакты

**Департамент имущественных и земельных отношений**
- Адрес: 677000, Республика Саха (Якутия), г. Якутск, пр. Ленина, д. 15, офис 612
- Телефон: 8 (4112) 40-88-09
- Email: dizo@yakadm.ru
- ВКонтакте: [vk.com/dizo_ykt](https://vk.com/dizo_ykt)
- Telegram: [t.me/dizo_ykt](https://t.me/dizo_ykt)
- Одноклассники: [ok.ru/group/70000000826573](https://ok.ru/group/70000000826573)

## 📄 Лицензия

© 2026 Окружная администрация города Якутска. Все права защищены.

---

**Разработано с использованием Claude Opus 4.6**
