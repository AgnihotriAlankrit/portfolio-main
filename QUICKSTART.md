# Quick Start Guide 🚀

Get your portfolio website up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install:
- React 18
- Vite
- Tailwind CSS
- React Icons
- All required dependencies

## Step 2: Start Development Server

```bash
npm run dev
```

Your site will be available at: `http://localhost:5173`

## Step 3: Replace Placeholder Content

### Immediate Changes (Priority 1):

1. **Add your profile photo** → `public/profile.jpg`
   - Update `src/components/Hero.jsx` to use it

2. **Add your resume** → Replace `public/resume.pdf`

3. **Update personal info** in `src/components/`:
   - Hero.jsx - Name, tagline, links
   - About.jsx - Bio and background
   - Contact.jsx - Email, phone, LinkedIn

### Content Updates (Priority 2):

4. **Experience** → `src/components/Experience.jsx`
   - Verify Deutsche Bank and IGCAR details
   - Update dates, achievements, metrics

5. **Projects** → `src/components/Projects.jsx`
   - Verify all 6 projects
   - Add project screenshots if available

6. **Skills** → `src/components/Skills.jsx`
   - Verify technical skills list
   - Verify certifications

7. **Photography** → `src/components/Photography.jsx`
   - Add real photos to `public/photos/`
   - Update Instagram handle

### Style Updates (Optional):

8. **Change accent color** → `tailwind.config.js`
   - Default: Fluorescent green `#10B981`
   - Try: Blue, purple, teal, or pink

## Step 4: Test on Mobile

1. Open Chrome DevTools (F12)
2. Click device toolbar icon
3. Test on different screen sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1440px, 1920px

## Step 5: Deploy

### Quick Deploy with Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts, and you'll get a live URL in seconds!

### Alternative: Use Vercel/Netlify Dashboard

1. Push code to GitHub
2. Connect repository on Vercel or Netlify
3. Auto-deploy will start
4. Get your live URL

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
vercel              # Deploy to Vercel
netlify deploy      # Deploy to Netlify
```

## File Structure Overview

```
webport/
├── src/
│   ├── components/      # All React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Photography.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles + Tailwind
├── public/              # Static assets
│   ├── resume.pdf       # Your resume (REPLACE THIS)
│   └── vite.svg         # Favicon
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## Customization Cheat Sheet

| What to Change | Where to Change It |
|----------------|-------------------|
| Name & Tagline | `src/components/Hero.jsx` |
| About Me Text | `src/components/About.jsx` |
| Work History | `src/components/Experience.jsx` |
| Project Cards | `src/components/Projects.jsx` |
| Skills & Certs | `src/components/Skills.jsx` |
| Photos & Gallery | `src/components/Photography.jsx` |
| Contact Info | `src/components/Contact.jsx` |
| Colors | `tailwind.config.js` |
| Site Title | `index.html` |

## Troubleshooting

### Port already in use?
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

### Styles not working?
```bash
# Restart dev server
# Tailwind should auto-detect changes
```

### Build errors?
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

## Next Steps

✅ Get site running locally
✅ Replace placeholder content
✅ Add your photos and resume
✅ Test on mobile
✅ Deploy to Vercel/Netlify
✅ Share with recruiters!

## Need More Help?

- 📖 Full customization guide: `CUSTOMIZATION.md`
- 🚀 Deployment guide: `DEPLOYMENT.md`
- 📚 Main README: `README.md`

## Pro Tips

1. **Keep it updated** - Add new projects monthly
2. **Optimize images** - Use WebP format, compress PNGs
3. **Test loading speed** - Use Lighthouse in Chrome DevTools
4. **Get feedback** - Share with friends before recruiters
5. **Track analytics** - Add Google Analytics after deployment

---

You're all set! 🎉 Start customizing and make it yours!

