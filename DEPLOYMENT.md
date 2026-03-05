# Vercel Deployment Configuration

## Environment Variables

Create `.env.local` for local development:

```bash
# Database (for future CMS integration)
DATABASE_URL=

# Search (Meilisearch)
NEXT_PUBLIC_MEILISEARCH_HOST=
MEILISEARCH_API_KEY=
```

## Deployment Steps

### 1. Push to GitHub

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Add environment variables (if needed)
5. Deploy

### 3. Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add `yakutskcity.ru`
3. Configure DNS:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

## Performance Optimizations

- ✅ Next.js Image optimization
- ✅ Font optimization (next/font)
- ✅ Code splitting (automatic)
- ✅ Static generation where possible
- ✅ Turbopack for faster builds

## Monitoring

Vercel provides:
- Analytics
- Web Vitals
- Error tracking
- Deployment logs

## CI/CD

Automatic deployments on:
- Push to `main` → Production
- Pull requests → Preview deployments
