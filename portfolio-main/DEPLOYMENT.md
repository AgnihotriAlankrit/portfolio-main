# Deployment Guide

This portfolio website is ready to be deployed on Vercel or Netlify. Both platforms offer free hosting with automatic deployments from Git.

## Prerequisites

- Node.js installed (v14 or higher)
- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel or Netlify account

## Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

**Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## Deploy to Netlify

### Option 1: Using Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 2: Using Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

## Custom Domain

Both Vercel and Netlify support custom domains:

1. **Purchase a domain** (from Namecheap, GoDaddy, etc.)
2. **Add domain in platform settings:**
   - Vercel: Project Settings → Domains
   - Netlify: Site Settings → Domain Management
3. **Update DNS records** as instructed by the platform

## Environment Variables

If you need environment variables:

1. **Vercel:** Project Settings → Environment Variables
2. **Netlify:** Site Settings → Build & Deploy → Environment

Add variables with `VITE_` prefix to make them accessible in the app.

## Post-Deployment

### Add Your Resume

1. Replace `public/resume.pdf` with your actual resume PDF
2. Commit and push changes
3. Platform will auto-redeploy

### Update Profile Image

1. Add your profile image to `public/` folder (e.g., `profile.jpg`)
2. Update `src/components/Hero.jsx` to use your image:
```jsx
<img src="/profile.jpg" alt="Alankrit Agnihotri" className="w-full h-full object-cover" />
```

### Add Project Screenshots

1. Add project images to `public/projects/` folder
2. Update `src/components/Projects.jsx` to use your images

### Update Social Links

Update all social media links in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Photography.jsx`

## Performance Optimization

The site is already optimized with:
- ✅ Vite's fast build system
- ✅ Code splitting
- ✅ Optimized CSS with Tailwind
- ✅ Lazy loading for images
- ✅ Minimal bundle size

## Monitoring

Both platforms provide:
- Analytics dashboard
- Performance metrics
- Deployment logs
- Error tracking

## Troubleshooting

### Build Fails

1. Check Node.js version (should be 14+)
2. Clear cache: `rm -rf node_modules && npm install`
3. Test build locally: `npm run build`

### Routes Not Working

- Vercel: `vercel.json` already configured
- Netlify: `netlify.toml` already configured

### Images Not Loading

- Ensure images are in `public/` folder
- Use absolute paths: `/image.jpg` not `./image.jpg`

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)

---

🚀 Happy Deploying!

