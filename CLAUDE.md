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

# Testing accessibility
# Use browser DevTools or extensions like axe DevTools
# Test keyboard navigation: Tab, Enter, Escape
# Test with screen readers: NVDA (Windows), VoiceOver (Mac)
```

## Architecture Overview

### Internationalization (i18n)

This project uses **next-intl** for multilingual support with three locales: `ru` (Russian, default), `sah` (Sakha/Yakut), and `en` (English).

**Key files:**
- `routing.ts` - Defines locales, default locale (`ru`), and exports navigation utilities (`Link`, `redirect`, `usePathname`, `useRouter`)
- `i18n.ts` - Request configuration that loads messages from `/messages/{locale}.json`
- `app/[locale]/layout.tsx` - Locale-specific layout that wraps content with `NextIntlClientProvider`

**Important patterns:**
- **CRITICAL**: Use `Link` from `@/routing` (NOT `next/link`) for locale-aware navigation
- All routes are under `app/[locale]/` directory
- Translation keys are accessed via `useTranslations()` hook from `next-intl`
- Messages are stored in JSON files: `messages/ru.json`, `messages/sah.json`, `messages/en.json`
- `localePrefix: 'as-needed'` means default locale (ru) URLs don't have prefix

### Routing Structure

```
app/
├── [locale]/              # Locale-based routes (ru, sah, en)
│   ├── layout.tsx         # Locale layout with Header/Footer, fonts, NextIntlClientProvider
│   ├── page.tsx           # Home page (client component with framer-motion)
│   ├── about/page.tsx     # About department
│   ├── news/page.tsx      # News listing
│   ├── documents/page.tsx # Documents listing
│   ├── services/page.tsx  # Services listing
│   ├── contacts/page.tsx  # Contacts with form
│   └── not-found.tsx      # 404 page
├── layout.tsx             # Root layout (minimal wrapper, metadata)
├── globals.css            # Global styles, animations, accessibility classes
├── sitemap.ts             # XML sitemap generation
└── robots.ts              # robots.txt generation
```

### Component Architecture

**UI Components** (`components/ui/`): shadcn/ui components built on Radix UI primitives
- `button.tsx` - Button with variants (default, cta, secondary, ghost, link) and sizes (sm, default, lg, icon)
  - All buttons have `min-h-[44px]` for accessibility (touch targets)
  - Focus ring: 4px cyan-300 with 2px offset
- `card.tsx` - Card with CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- `input.tsx`, `label.tsx` - Form components with accessibility support
- `skeleton.tsx` - Loading skeleton component with pulse animation
- `accordion.tsx` - Accordion component (Radix UI)
- `alert.tsx` - Alert component for notifications

**Layout Components**:
- `components/header.tsx` - Sticky header with skip link, logo, navigation (uses framer-motion)
- `components/footer.tsx` - Footer with links and contact info (uses framer-motion)
- `components/scroll-to-top.tsx` - Floating scroll-to-top button (uses framer-motion)

**Feature Components**:
- `components/search.tsx` - Search component (placeholder for future implementation)
- `components/stats.tsx` - Animated statistics display (uses framer-motion)
- `components/contact-form.tsx` - Contact form with validation
- `components/breadcrumb.tsx` - Breadcrumb navigation
- `components/faq.tsx` - FAQ accordion component
- `components/timeline.tsx` - Timeline component for events

**Styling utilities**:
- `lib/utils.ts` - Contains `cn()` helper for merging Tailwind classes with `clsx` and `tailwind-merge`
  ```tsx
  import { cn } from "@/lib/utils"

  <div className={cn("base-class", condition && "conditional-class", className)} />
  ```

### Accessibility Requirements (WCAG 2.1 AA)

This project has strict accessibility compliance. When modifying or adding components:

1. **Touch targets**: Minimum 44x44px (enforced in button sizes with `min-h-[44px]`)
2. **Focus indicators**: 4px ring with `focus-visible:ring-4 focus-visible:ring-cyan-300 focus-visible:ring-offset-2`
3. **Keyboard navigation**: All interactive elements must be keyboard accessible
4. **ARIA labels**: Icons and non-text elements need `aria-label` or `aria-hidden="true"`
5. **Semantic HTML**: Use proper elements (`header`, `nav`, `main`, `footer`, `article`)
6. **Skip links**: Already implemented in header (`#main-content`) for screen readers
7. **Motion preferences**: Animations respect `prefers-reduced-motion` (see `globals.css`)
8. **Screen reader support**: `.sr-only` class available for screen-reader-only content
9. **Smooth scroll**: Enabled by default, disabled for users with `prefers-reduced-motion`

### Styling Conventions

**Color palette** (defined in `tailwind.config.ts` and `globals.css`):
- Primary: `#0891b2` (cyan) - use `bg-primary`, `text-primary`
- Primary dark: `#0e7490` - use `bg-primary-dark`
- Primary light: `#06b6d4` - use `bg-primary-light`
- Secondary: `#6366f1` (indigo)
- CTA: `#06b6d4` (cyan)
- Gray scale: 50, 100, 200, 300, 600, 900
- Utility colors: success (`#10b981`), warning (`#f59e0b`), error (`#ef4444`), info (`#06b6d4`)

**Typography**:
- Heading font: Space Grotesk (weights: 400, 500, 600, 700) - use `font-heading`
- Body font: Inter (weights: 300, 400, 500, 600, 700, Latin + Cyrillic subsets) - use `font-body`
- Both loaded via `next/font/google` with `display: 'swap'`
- Minimum text size: 16px for accessibility
- Line height: 1.5 for body text

**Animations**:
- **Framer Motion**: Used for complex animations (header, hero, stats, footer, scroll-to-top)
- **CSS animations** (defined in `globals.css`):
  - `.animate-float` - Floating effect (6s ease-in-out infinite)
  - `.animate-pulse-slow` - Slow pulse (4s infinite)
  - `.animate-shimmer` - Shimmer effect for loading states
  - `.animate-skeleton` - Skeleton loading animation (2s infinite)
  - `.animate-accordion-down/up` - Accordion transitions (0.2s ease-out)
- All animations respect `prefers-reduced-motion` via CSS media query

**Transition patterns**:
- Use `transition-colors duration-200` for color changes
- Use `transition-transform duration-200 hover:scale-105` for subtle hover effects
- Use `transition-all duration-200` for combined effects
- Always add `cursor-pointer` to clickable elements

## Important Conventions

### Client vs Server Components
- Most pages use `"use client"` directive for framer-motion animations
- Header, Footer, ScrollToTop are client components
- Use server components when possible for better performance (no animations needed)

### Image Optimization
- Use Next.js `<Image>` component from `next/image`
- WebP format configured in `next.config.mjs`
- Always provide `alt` text for accessibility
- Use `priority` prop for above-the-fold images

### Link Usage
- **Internal navigation**: Use `Link` from `@/routing` (NOT `next/link`)
- **External links**: Use regular `<a>` tags with `target="_blank"` and `rel="noopener noreferrer"`
- Always ensure links have sufficient color contrast and hover states

### Configuration Files

- `next.config.mjs` - Next.js config with next-intl plugin and WebP image optimization
- `vercel.json` - Vercel deployment config with security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy) and region set to `arn1`
- `tsconfig.json` - TypeScript config with `@/*` path alias pointing to root, strict mode enabled
- `tailwind.config.ts` - Tailwind config with custom colors, spacing, font family, and animations
- `postcss.config.js` - PostCSS config for Tailwind CSS
- `design-system/yakutsk-property-department/MASTER.md` - Design system master file with color palette, typography, component specs, and style guidelines (reference for design decisions)

## Development Workflow

### Adding New Pages

1. Create page in `app/[locale]/your-page/page.tsx`
2. Add translations to all locale files in `messages/` (ru, sah, en)
3. Update `app/sitemap.ts` with new route
4. Add navigation link to `components/header.tsx` if needed
5. **Important**: Use `Link` from `@/routing` for internal navigation, NOT `next/link`
6. Add structured data (JSON-LD) for SEO if applicable

### Adding New Translations

1. Add keys to `messages/ru.json` (primary language)
2. Add corresponding translations to `messages/sah.json` and `messages/en.json`
3. Use in components:
   ```tsx
   import { useTranslations } from 'next-intl';

   export default function Component() {
     const t = useTranslations('your.key');
     return <h1>{t('subkey')}</h1>;
   }
   ```
4. For server components, use `getTranslations` from `next-intl/server`

### Working with shadcn/ui Components

Components are already installed. To add new shadcn/ui components:
1. Manually copy from shadcn/ui documentation into `components/ui/`
2. Ensure they follow the project's accessibility patterns (focus rings, touch targets)
3. Update color scheme to use cyan instead of default blue
4. Verify `cursor-pointer` is added to interactive elements

### Working with Animations

- Use **framer-motion** for complex, interactive animations (page transitions, scroll effects, hover states)
- Use **CSS animations** for simple, repeating animations (loading states, pulses)
- Always test with `prefers-reduced-motion` enabled
- Keep animations subtle and purposeful (200-600ms duration)

## SEO and Metadata

### Structured Data (JSON-LD)
- Home page includes GovernmentOrganization schema with full contact details
- Add structured data to new pages using Next.js `<Script>` component
- Schema types to consider: GovernmentOrganization, GovernmentService, NewsArticle, FAQPage

### Metadata Configuration
- Root metadata in `app/layout.tsx` with Open Graph and Twitter cards
- Sitemap auto-generated at `/sitemap.xml` (see `app/sitemap.ts`)
- robots.txt at `/robots.txt` (see `app/robots.ts`)
- Update sitemap when adding new pages

## Design System

A design system master file exists at `design-system/yakutsk-property-department/MASTER.md` with:
- Color palette specifications (trust teal + professional blue)
- Typography guidelines (Lexend + Source Sans 3 - note: actual implementation uses Space Grotesk + Inter)
- Component specs (buttons, cards, inputs, modals)
- Style guidelines (Accessible & Ethical style)
- Anti-patterns to avoid
- Pre-delivery checklist

**Note**: The design system file serves as a reference for design decisions, but actual implementation may differ slightly (e.g., fonts).

## Deployment

Deployed on Vercel with automatic deployments from Git. See `DEPLOYMENT.md` for detailed deployment instructions.

**Important**:
- The sitemap uses `https://yakutskcity.ru` as base URL. Update `app/sitemap.ts` if domain changes.
- Vercel region is set to `arn1` in `vercel.json`
- Security headers are configured in `vercel.json`
