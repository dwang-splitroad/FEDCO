# FEDCO Website - Vercel Deployment Guide

## Quick Start

This Next.js 16.1.1 application is optimized for Vercel deployment and located at the **root directory**.

### Prerequisites

1. GitHub/GitLab/Bitbucket account with the code repository
2. Vercel account (free tier works great)

---

## Deployment Steps

### 1. Push to Git Repository

```bash
# If not already initialized
cd C:\Users\User\.cursor\worktrees\FEDCO\ssu\frontend-new
git init
git add .
git commit -m "Initial commit - FEDCO website remake"

# Push to your repository
git remote add origin https://github.com/dwang-splitroad/FEDCO.git
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js

### 3. Configure Build Settings

Vercel will auto-detect these settings, but verify:

- **Framework Preset**: Next.js
- **Root Directory**: `frontend-new` (or leave blank if deploying just this folder)
- **Build Command**: `pnpm build` (or `npm run build`)
- **Output Directory**: `.next` (auto-configured)
- **Install Command**: `pnpm install` (or `npm install`)

### 4. Environment Variables

No environment variables required at this time.

If you add a form service later, you can add environment variables in:
Vercel Dashboard → Project Settings → Environment Variables

### 5. Deploy

Click "Deploy" and Vercel will:
- Install dependencies
- Build the application
- Deploy to production
- Provide a URL (e.g., `fedco-website.vercel.app`)

---

## Custom Domain Setup

### Option 1: Transfer from Netlify to Vercel

1. In Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain (e.g., `fultondevelopment.org`)
3. Vercel will provide DNS records
4. Update your domain registrar's DNS settings:
   - Remove old Netlify DNS records
   - Add Vercel's DNS records (A record or CNAME)
5. Wait for DNS propagation (can take up to 48 hours, usually faster)

### Option 2: Keep DNS on Netlify (if you have other services there)

1. In your domain registrar or Netlify DNS:
   - Point your domain to Vercel using a CNAME record
   - Add the CNAME record Vercel provides

---

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All images display properly
- [ ] Navigation and dropdowns work smoothly
- [ ] Check mobile responsiveness
- [ ] Test all internal links
- [ ] Verify external links open correctly
- [ ] Check page load performance
- [ ] SSL certificate is active (automatic on Vercel)
- [ ] Configure contact form with your preferred service (if needed)

---

## Useful Vercel Features

### Automatic Deployments

Every push to your main branch automatically deploys to production.

### Preview Deployments

Every pull request gets its own preview URL for testing.

### Analytics

Enable Vercel Analytics in dashboard for:
- Page views
- Performance metrics
- Core Web Vitals

### Edge Functions

Already configured! Next.js API routes run on Vercel's edge network.

---

## Rollback Instructions

If something goes wrong:

1. Go to Vercel Dashboard → Deployments
2. Find the previous working deployment
3. Click "..." → "Promote to Production"
4. Instant rollback!

---

## Performance Optimization (Already Configured)

✅ **Image Optimization**: Vercel automatically optimizes images  
✅ **Edge Caching**: Static assets cached at edge locations  
✅ **Serverless Functions**: API routes run on-demand  
✅ **Automatic HTTPS**: SSL certificate included  
✅ **Global CDN**: Content served from nearest location  

---

## Monitoring & Maintenance

### View Logs

Vercel Dashboard → Project → Logs (real-time function logs)

### Performance Insights

Vercel Dashboard → Analytics → Speed Insights

### Build Logs

If build fails, check:
1. Vercel Dashboard → Deployments → Click failed deployment
2. View build logs for errors
3. Common issues:
   - Missing environment variables
   - TypeScript errors (we have them ignored for now)
   - Missing dependencies

---

## Troubleshooting

### Build Fails

```bash
# Test locally first
cd frontend-new
pnpm install
pnpm build

# If it works locally, check Vercel logs
```

### Images Not Loading

- Ensure all images are in `public/images/`
- Check image paths (case-sensitive!)
- Verify images were committed to git

### Contact Form Setup

The contact form is ready to connect to your preferred service:
- **Formspree**: Easy setup, free tier available
- **Netlify Forms**: If using Netlify
- **Custom API**: Build your own endpoint
- **Mailto**: Simple email fallback

### DNS Issues

- Use [whatsmydns.net](https://whatsmydns.net) to check propagation
- Wait 24-48 hours for full DNS propagation
- Clear browser cache

---

## Next Steps After Deployment

1. **Connect contact form** to your preferred service
2. **Set up Google Analytics** (if needed)
3. **Test all pages** thoroughly
4. **Update social media links** with new domain
5. **Submit sitemap** to Google Search Console

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

---

## Migration from Netlify

### Before You Start

1. Document current Netlify settings
2. Export any environment variables
3. Note custom headers or redirects

### During Migration

1. Deploy to Vercel first (test on Vercel domain)
2. Verify everything works
3. Update DNS to point to Vercel
4. Keep Netlify deployment active during DNS transition

### After Migration

1. Monitor for 24-48 hours
2. Once stable, you can delete Netlify deployment
3. Update any external links

---

**Ready to deploy! 🚀**

The new FEDCO website is production-ready and optimized for Vercel's infrastructure.

