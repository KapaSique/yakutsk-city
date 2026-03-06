# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack (http://localhost:3000)
npm run build        # Production build
npm start            # Run production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # Check TypeScript types without emitting files
```

## Architecture Overview

### Internationalization (i18n)

This project uses **next-intl** for multilingual support with three locales: `ru` (Russian, default), `sah` (Sakha/Yakut), and `en` (English).

**Key files:**
- `routing.ts` - Defines locales, default locale, and exports navigation utilities (`Link`, `redirect`, `usePathname`, `useRouter`)
- `i18n.ts` - Request configuration that loads messages from `/messages/{locale}.json`
- `app/[locale]/layout.tsx` - Locale-specific layout that wraps content with `NextIntlClientProvider`

**Important patterns:**
- Use `Link` from `@/routing` (not `next/link`) for locale-aware navigation
- All routes are under `app/[locale]/` directory
- Translation keys are accessed via `useTranslations()` hook from `next-intl`
- Messages are stored in JSON files: `messages/ru.json`, `messages/sah.json`, `messages/en.json`

### Routing Structure

```
app/
├── [locale]/              # Locale-based routes
│   ├── layout.tsx         # Locale layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About department
│   ├── news/page.tsx      # News
│   ├── documents/page.tsx # Documents
│   ├── services/page.tsx  # Services
│   ├── contacts/page.tsx  # Contacts
│   └── not-found.tsx      # 404 page
├── layout.tsx             # Root layout (minimal wrapper)
├── globals.css            # Global styles and animations
├── sitemap.ts             # XML sitemap generation
└── robots.ts              # robots.txt generation
```

### Component Architecture

**UI Components** (`components/ui/`): shadcn/ui components built on Radix UI primitives
- `button.tsx` - Button with variants (default, secondary, ghost, link) and sizes
- `card.tsx` - Card with CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- `input.tsx`, `label.tsx` - Form components with accessibility support
- `skeleton.tsx` - Loading skeleton component

**Layout Components**:
- `components/header.tsx` - Sticky header with skip link, logo, navigation, and search
- `components/footer.tsx` - Footer with links and contact info
- `components/search.tsx` - Search component (placeholder for future implementation)

**Styling utilities**:
- `lib/utils.ts` - Contains `cn()` helper for merging Tailwind classes with `clsx` and `tailwind-merge`

### Accessibility Requirements (WCAG 2.1 AA)

This project has strict accessibility compliance. When modifying or adding components:

1. **Touch targets**: Minimum 44x44px (enforced in button sizes with `min-h-[44px]`)
2. **Focus indicators**: 3px ring with `focus-visible:ring-3 focus-visible:ring-primary-light`
3. **Keyboard navigation**: All interactive elements must be keyboard accessible
4. **ARIA labels**: Icons and non-text elements need `aria-label` or `aria-hidden="true"`
5. **Semantic HTML**: Use proper elements (`header`, `nav`, `main`, `footer`, `article`)
6. **Skip links**: Already implemented in header for screen readers
7. **Motion preferences**: Animations respect `prefers-reduced-motion` (see `globals.css`)

### Styling Conventions

**Color palette** (defined in `tailwind.config.ts` and `globals.css`):
- Primary: `#1E40AF` (blue) - use `bg-primary`, `text-primary`
- Primary dark: `#1E3A8A` - use `bg-primary-dark`
- Primary light: `#3B82F6` - use `bg-primary-light`
- Gray scale: 50, 100, 200, 600, 900

**Typography**:
- Font: Inter (loaded via `next/font/google` with Latin and Cyrillic subsets)
- Minimum text size: 16px for accessibility
- Line height: 1.5 for body text

**Animations** (defined in `globals.css`):
- `.animate-fade-in` - Fade in effect
- `.animate-slide-up` - Slide up with fade
- `.animate-slide-up-large` - Larger slide up effect
- `.animate-delay-{100,200,300,400}` - Staggered animation delays
- All animations respect `prefers-reduced-motion`

**Transition patterns**:
- Use `transition-colors duration-200` for color changes
- Use `transition-transform duration-200 hover:scale-105` for subtle hover effects
- Use `transition-all duration-200` for combined effects

### Configuration Files

- `next.config.mjs` - Next.js config with next-intl plugin and image optimization
- `vercel.json` - Vercel deployment config with security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- `tsconfig.json` - TypeScript config with `@/*` path alias pointing to root
- `tailwind.config.ts` - Tailwind config with custom colors, spacing, and font family

## Development Workflow

### Adding New Pages

1. Create page in `app/[locale]/your-page/page.tsx`
2. Add translations to all locale files in `messages/`
3. Update `app/sitemap.ts` with new route
4. Add navigation link to `components/header.tsx` if needed

### Adding New Translations

1. Add keys to `messages/ru.json` (primary language)
2. Add corresponding translations to `messages/sah.json` and `messages/en.json`
3. Use in components: `const t = useTranslations('your.key'); t('subkey')`

### Working with shadcn/ui Components

Components are already installed. To add new shadcn/ui components, manually copy from shadcn/ui documentation into `components/ui/` and ensure they follow the project's accessibility patterns.

## Deployment

Deployed on Vercel with automatic deployments from Git. See `DEPLOYMENT.md` for detailed deployment instructions.

**Important**: The sitemap uses `https://yakutskcity.ru` as base URL. Update `app/sitemap.ts` if domain changes.
