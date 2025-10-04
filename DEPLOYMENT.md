# Vercel Deployment Guide

## Quick Deployment Steps

### 1. Prepare Your Repository

Make sure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket).

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your Git provider
3. Click "New Project"
4. Import your portfolio repository

### 3. Configure Build Settings

Vercel should automatically detect the settings, but verify:

- **Framework Preset**: Vite
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Environment Variables (Optional)

If you need environment variables:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add any required variables like `DATABASE_URL`

### 5. Deploy

Click "Deploy" and wait for the build to complete!

## Project Structure for Vercel

```
├── client/              # React frontend (builds to /dist)
├── api/                 # Serverless functions
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies and scripts
```

## API Endpoints

Your serverless functions will be available at:
- `https://your-domain.vercel.app/api/` - Health check
- `https://your-domain.vercel.app/api/contact` - Contact form

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `npm run vercel-build` works locally
- Check build logs in Vercel dashboard

### Functions Don't Work
- Verify API files are in `/api` directory
- Check function logs in Vercel dashboard
- Ensure proper CORS headers are set

### Static Assets Missing
- Verify assets are in `client/src` or `attached_assets`
- Check that build copies all necessary files
- Ensure proper import paths

## Performance Tips

- Images are automatically optimized by Vercel
- Use Vercel Analytics to monitor performance
- Enable Edge functions for better global performance

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)