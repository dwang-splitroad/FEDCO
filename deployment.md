# Deployment Guide

## Frontend Deployment (Vercel)

### Prerequisites
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your backend API deployed and accessible via HTTPS

### Step 1: Prepare Your Repository
1. Ensure your code is pushed to GitHub, GitLab, or Bitbucket
2. Make sure the `vercel.json` configuration file is in your project root

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your repository
4. Vercel will automatically detect the configuration from `vercel.json`

### Step 3: Configure Environment Variables
In your Vercel project dashboard:
1. Go to "Settings" → "Environment Variables"
2. Add the following variable:
   - `VITE_API_URL`: Set this to your backend API URL (e.g., `https://your-api.railway.app`)

### Step 4: Deploy
- Vercel will automatically deploy your app
- Every push to your main branch will trigger a new deployment

## Backend Deployment Options

Since Vercel is primarily for frontend applications, you'll need to deploy your FastAPI backend separately. Here are recommended options:

### Option 1: Railway (Recommended)
- Free tier available
- Easy Python/FastAPI deployment
- Automatic HTTPS
- PostgreSQL database included
- Deploy: Connect your GitHub repo at [railway.app](https://railway.app)

### Option 2: Render
- Free tier available
- Good for Python applications
- Deploy: Connect your repo at [render.com](https://render.com)

### Option 3: DigitalOcean App Platform
- $5/month minimum
- Good performance and scaling
- Deploy: Use their App Platform at [digitalocean.com](https://digitalocean.com)

### Option 4: Google Cloud Run
- Pay-per-use pricing
- Serverless container deployment
- Good for variable traffic

## Environment Variables for Backend

When deploying your backend, you'll need to set these environment variables:

```
# Required
SECRET_KEY=your-secret-key-here
FIRST_SUPERUSER=admin@yourdomain.com
FIRST_SUPERUSER_PASSWORD=secure-password
FRONTEND_HOST=https://your-vercel-app.vercel.app

# Database (most services provide these automatically)
POSTGRES_SERVER=your-db-host
POSTGRES_DB=your-db-name
POSTGRES_USER=your-db-user
POSTGRES_PASSWORD=your-db-password

# Email (optional, for user registration/password reset)
SMTP_HOST=your-smtp-host
SMTP_USER=your-smtp-user
SMTP_PASSWORD=your-smtp-password
EMAILS_FROM_EMAIL=noreply@yourdomain.com

# CORS (update with your Vercel domain)
BACKEND_CORS_ORIGINS=https://your-vercel-app.vercel.app
```

## Complete Deployment Checklist

### Backend
- [ ] Deploy backend to Railway/Render/etc.
- [ ] Set up PostgreSQL database
- [ ] Configure environment variables
- [ ] Test API endpoints
- [ ] Note your backend URL

### Frontend
- [ ] Update `VITE_API_URL` in Vercel environment variables
- [ ] Deploy to Vercel
- [ ] Test frontend functionality
- [ ] Verify API connectivity

### Post-Deployment
- [ ] Test user registration/login
- [ ] Test all major features
- [ ] Configure custom domain (optional)
- [ ] Set up monitoring/analytics

## Custom Domain (Optional)

### For Vercel (Frontend)
1. In Vercel dashboard → "Settings" → "Domains"
2. Add your custom domain
3. Update DNS records as instructed

### For Backend
- Most deployment services provide custom domain options
- Alternatively, use the provided service URL

## Troubleshooting

### Common Issues
1. **CORS Errors**: Ensure `BACKEND_CORS_ORIGINS` includes your Vercel domain
2. **API Connection Failed**: Verify `VITE_API_URL` is set correctly in Vercel
3. **Database Connection**: Check database environment variables on backend
4. **Build Failures**: Ensure all dependencies are in `package.json`

### Getting Help
- Check Vercel deployment logs in the dashboard
- Check backend logs in your hosting service
- Ensure environment variables match between services
