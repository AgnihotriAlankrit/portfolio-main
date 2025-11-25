# Portfolio Setup Checklist ✓

Use this checklist to ensure your portfolio is ready to deploy!

## 🚀 Initial Setup

- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run dev` to start development server
- [ ] Verify site loads at http://localhost:5173
- [ ] Check that all sections appear correctly

## 📸 Assets to Add

- [ ] **Profile Photo**
  - Add to: `public/profile.jpg` or `public/profile.png`
  - Update: `src/components/Hero.jsx` (replace placeholder)
  - Recommended size: 512x512px, square
  
- [ ] **Resume PDF**
  - Replace: `public/resume.pdf` with your actual resume
  - Test download link works
  
- [ ] **Project Screenshots** (Optional but recommended)
  - Add to: `public/projects/`
  - Update: `src/components/Projects.jsx`
  - Recommended size: 1200x800px
  
- [ ] **Photography Images** (If keeping photography section)
  - Add to: `public/photos/`
  - Update: `src/components/Photography.jsx`
  - Recommended: 6-12 images, various sizes

## ✏️ Content Updates

### Hero Section
- [ ] Verify name is correct
- [ ] Verify tagline: "Aspiring Product Manager | BITS Pilani '24"
- [ ] Update LinkedIn URL
- [ ] Update email address
- [ ] Test all CTA buttons work

### About Section
- [ ] Review and personalize the 3 paragraphs
- [ ] Ensure it reflects your current career goals
- [ ] Keep it concise (current length is good)

### Experience Section
- [ ] Verify Deutsche Bank details are accurate
  - [ ] Role title correct
  - [ ] Dates correct (July 2023 – Dec 2023)
  - [ ] All 4 achievements listed correctly
  - [ ] Metrics highlighted: $18B, 40 minutes, 2+ hours
  
- [ ] Verify IGCAR details are accurate
  - [ ] Role title correct
  - [ ] Dates correct (May 2022 – July 2022)
  - [ ] Achievements correct
  - [ ] 200+ metric highlighted

### Projects Section
- [ ] Verify all 6 projects are accurate:
  - [ ] Move-In-Sync details
  - [ ] CricBuzz details
  - [ ] SplitWise details
  - [ ] Hospitality BI Dashboard details
  - [ ] Business Strategy Analysis details
  - [ ] Sports Retail Analysis details
- [ ] Add project images (optional)
- [ ] Verify all metrics are highlighted

### Skills Section
- [ ] Review technical skills list
- [ ] Review product & business skills list
- [ ] Verify all 4 certifications are listed
- [ ] Add/remove skills as needed

### Photography Section
- [ ] Update team size (currently: 40-member team)
- [ ] Update events delivered (currently: 150+ events)
- [ ] Update Instagram growth metric (currently: 10x)
- [ ] Update Instagram handle (@snapitastic)
- [ ] Add real photos (currently using placeholders)

### Contact Section
- [ ] Verify email: AlankritAgnihotri@gmail.com
- [ ] Verify phone: +91-9622349549
- [ ] Verify LinkedIn URL
- [ ] Update GitHub URL (if you have one)
- [ ] Verify Instagram URL

## 🎨 Styling (Optional)

- [ ] Review accent color (currently fluorescent green)
- [ ] Change if desired in `tailwind.config.js`
- [ ] Test color contrast for accessibility
- [ ] Verify animations feel right (not too fast/slow)

## 📱 Testing

### Desktop Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari (if available)
- [ ] Test on Edge
- [ ] Verify all sections scroll smoothly
- [ ] Test all navigation links work
- [ ] Test all external links open in new tabs
- [ ] Verify hover effects work on all cards/buttons

### Mobile Testing
- [ ] Open DevTools (F12)
- [ ] Toggle device toolbar
- [ ] Test on iPhone SE (375px)
- [ ] Test on iPhone 12 Pro (390px)
- [ ] Test on iPad (768px)
- [ ] Test on iPad Pro (1024px)
- [ ] Verify hamburger menu works
- [ ] Test touch targets are large enough
- [ ] Verify text is readable on mobile
- [ ] Test all buttons are tappable

### Performance Testing
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Target scores: Performance 90+, Accessibility 90+
- [ ] Check First Contentful Paint < 2s
- [ ] Verify no console errors

## 🔍 SEO & Meta

- [ ] Update page title in `index.html`
- [ ] Add meta description in `index.html`
- [ ] Add meta keywords in `index.html`
- [ ] Add Open Graph tags for social sharing (optional)
- [ ] Test social media preview (LinkedIn, Twitter)

## 🚀 Pre-Deployment

- [ ] Run `npm run build` successfully
- [ ] Run `npm run preview` to test production build
- [ ] Verify no build errors
- [ ] Verify no console warnings
- [ ] Check bundle size is reasonable
- [ ] Test production build in browser

## 🌐 Deployment

### Choose Platform
- [ ] **Option 1: Vercel** (Recommended for React)
  - [ ] Create Vercel account
  - [ ] Install Vercel CLI: `npm install -g vercel`
  - [ ] Run `vercel` and follow prompts
  - [ ] OR connect GitHub repo on Vercel dashboard
  
- [ ] **Option 2: Netlify**
  - [ ] Create Netlify account
  - [ ] Install Netlify CLI: `npm install -g netlify-cli`
  - [ ] Run `netlify deploy --prod`
  - [ ] OR drag & drop `dist` folder on Netlify

### Post-Deployment
- [ ] Visit live URL
- [ ] Test all sections work
- [ ] Test on real mobile device
- [ ] Test all links work
- [ ] Share URL with friends for feedback

## 📈 Post-Launch (Optional)

- [ ] Set up custom domain
- [ ] Add Google Analytics
- [ ] Set up contact form (if needed)
- [ ] Add sitemap.xml
- [ ] Submit to Google Search Console
- [ ] Share on LinkedIn
- [ ] Add to resume

## 🎯 Ongoing Maintenance

- [ ] Update projects regularly (monthly)
- [ ] Add new certifications as earned
- [ ] Update work experience when job changes
- [ ] Refresh photography gallery seasonally
- [ ] Monitor analytics (if set up)
- [ ] Fix any reported bugs
- [ ] Keep dependencies updated

---

## 🆘 Having Issues?

### Site won't start?
```bash
rm -rf node_modules
npm install
npm run dev
```

### Build fails?
- Check Node.js version (should be 14+)
- Check for syntax errors in JSX files
- Clear cache and rebuild

### Styling issues?
- Restart dev server
- Check Tailwind config
- Clear browser cache

### Need help?
- Check `README.md` for general info
- Check `CUSTOMIZATION.md` for styling changes
- Check `DEPLOYMENT.md` for deployment help
- Check `QUICKSTART.md` for setup steps

---

**When all items are checked, you're ready to go live! 🎉**

Remember: A portfolio is never "done" - keep it updated with your latest work!

