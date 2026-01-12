# FEDCO Website - Next.js Remake

Modern, responsive website for Fulton Economic Development Corporation built with Next.js 15, Tailwind CSS 4, and shadcn/ui.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- pnpm (recommended) or npm

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Analytics**: Vercel Analytics

## 🛠️ Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🌐 Deployment

This site is optimized for Vercel deployment. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dwang-splitroad/FEDCO)

1. Push to GitHub
2. Import to Vercel
3. Deploy!

## 📁 Project Structure

```
frontend-new/
├── app/                      # Next.js App Router pages
│   ├── about/               # About section pages (staff, board, mission)
│   ├── contact/             # Contact page
│   ├── economic-development/# Economic development pages
│   ├── fulton-county/       # Fulton County pages
│   ├── life-in-fulton-county/ # Community pages
│   ├── small-business/      # Small business resources
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── header.tsx           # Site header with navigation
│   ├── footer.tsx           # Site footer
│   └── ...                  # Other components
├── public/                  # Static assets
│   └── images/              # Image files
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Brand Colors

- **Primary Blue**: `#273776`
- **Secondary Green**: `#649b42`
- **Neutral Accents**: Light grays (yellow removed)

## 🔗 Key Pages

- **Homepage** (`/`) - Hero, about, services, and CTAs
- **Small Business** (`/small-business`) - Business assistance and success stories
- **Economic Development** (`/economic-development`) - Sites & buildings
- **Life in Fulton County** (`/life-in-fulton-county`) - Community information
- **Fulton County** (`/fulton-county`) - Workforce and top employers
- **About** (`/about/*`) - Mission, staff, board of directors
- **Contact** (`/contact`) - Contact form (ready for your form service)

## 🧪 Testing

```bash
# Run development server
pnpm dev

# Build and test production build
pnpm build && pnpm start

# Lint code
pnpm lint
```

## 📝 Content Migration

All content from the previous React/Vite/Chakra UI site has been preserved:

✅ All navigation items and dropdown menus  
✅ Homepage hero image (Lake Manitou)  
✅ 9 BizGro success stories  
✅ Business assistance programs  
✅ Workforce data and top employers  
✅ Community information (education, healthcare, utilities)  
✅ About section (mission, staff, board)  
✅ Contact form UI (ready for integration)  
✅ All 50+ images migrated  
✅ Fully responsive design (mobile, tablet, desktop)

See [CONTENT_INVENTORY.md](../CONTENT_INVENTORY.md) for complete content mapping.

## 🐛 Troubleshooting

### Images Not Loading

Make sure images are in `public/images/` and referenced correctly:

```tsx
// Correct
<img src="/images/logo.png" alt="Logo" />

// Incorrect
<img src="images/logo.png" alt="Logo" />
```

### Build Errors

Check TypeScript errors:

```bash
pnpm run type-check
```

### Contact Form Setup

The contact form is ready to connect to your preferred service:
- Update `app/contact/page.tsx` `handleSubmit` function
- Popular options: Formspree, Netlify Forms, custom API
- Form fields: name, email, phone, company, subject, message

## 📞 Support

For questions or issues:

- **Email**: director@fultondevelopment.org
- **Phone**: (574) 223-0701

## 📄 License

© 2026 Fulton Economic Development Corporation. All rights reserved.

