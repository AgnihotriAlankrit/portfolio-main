# Customization Guide

This guide will help you personalize the portfolio website with your own content and styling.

## 🎨 Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  dark: {
    bg: '#0F172A',        // Main background
    card: '#1E293B',      // Card backgrounds
    lighter: '#334155',   // Lighter elements
  },
  accent: {
    DEFAULT: '#10B981',   // Primary accent (change this!)
    light: '#34D399',     // Lighter accent
    glow: '#6EE7B7',      // Glow effect
  },
}
```

**Popular accent colors:**
- Green (current): `#10B981`
- Blue: `#3B82F6`
- Purple: `#8B5CF6`
- Teal: `#14B8A6`
- Pink: `#EC4899`

## 📝 Updating Content

### Hero Section (`src/components/Hero.jsx`)

1. **Change name and tagline:**
```jsx
<h1>Your Name</h1>
<p>Your Tagline | Your School '24</p>
```

2. **Update links:**
```jsx
href="https://www.linkedin.com/in/your-username"
href="mailto:your-email@gmail.com"
```

3. **Add profile image:**
Replace the placeholder div with:
```jsx
<img src="/profile.jpg" alt="Your Name" className="w-full h-full rounded-full object-cover" />
```

### About Section (`src/components/About.jsx`)

Update the three paragraphs with your own background, experience, and career goals.

### Experience Section (`src/components/Experience.jsx`)

1. **Add/Edit experiences:**
```javascript
const experiences = [
  {
    company: 'Company Name',
    role: 'Your Role',
    date: 'Month Year – Month Year',
    achievements: [
      {
        text: 'Your achievement with ',
        highlight: 'Key Metric',
        suffix: ' improvement'
      },
      // Add more achievements
    ]
  },
]
```

2. **Key metrics** will automatically glow in accent color

### Projects Section (`src/components/Projects.jsx`)

1. **Add your projects:**
```javascript
{
  name: 'Project Name',
  description: 'One sentence description',
  outcome: 'Key Metric',
  outcomeSuffix: ' improvement description',
  tags: ['Tech1', 'Tech2', 'Tech3'],
  icon: '🚀' // Choose an emoji or replace with image
}
```

2. **Add project images:**
Replace the emoji icon with:
```jsx
<img src="/projects/project-name.jpg" className="w-full h-full object-cover" />
```

### Skills Section (`src/components/Skills.jsx`)

1. **Update technical skills:**
```javascript
const technicalSkills = [
  { name: 'Your Skill', icon: <FaIcon /> },
]
```

2. **Update business skills:**
```javascript
const productBusinessSkills = [
  { name: 'Your Skill', icon: <FaIcon /> },
]
```

3. **Update certifications:**
```javascript
const certifications = [
  { name: 'Certification Name', icon: <FaIcon /> },
]
```

### Photography Section (`src/components/Photography.jsx`)

1. **Update text:**
```javascript
<p>Led a <span>X-member team</span>, delivered <span>Y+ events</span></p>
```

2. **Add real photos:**
Replace the gradient placeholders:
```javascript
const photos = [
  { id: 1, src: '/photos/photo1.jpg', alt: 'Description' },
  // Add more photos
]
```

Then in the JSX:
```jsx
<img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
```

3. **Update Instagram handle:**
```jsx
href="https://www.instagram.com/your-handle"
```

### Contact Section (`src/components/Contact.jsx`)

Update contact information:
```javascript
const contactMethods = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com',
  },
  // Update other contact methods
]
```

## 🖼️ Adding Images

1. **Place images in `public/` folder:**
```
public/
├── profile.jpg
├── projects/
│   ├── project1.jpg
│   └── project2.jpg
└── photos/
    ├── photo1.jpg
    └── photo2.jpg
```

2. **Reference in components:**
```jsx
<img src="/profile.jpg" alt="Description" />
```

## 🎭 Animation Customization

### Adjust Animation Speed

In `tailwind.config.js`:
```javascript
animation: {
  'float': 'float 3s ease-in-out infinite', // Change 3s to your preference
  'glow': 'glow 2s ease-in-out infinite alternate',
}
```

### Disable Animations

Remove animation classes from components:
- `animate-float`
- `animate-glow`
- `animate-bounce-slow`
- `card-hover`

## 📱 Mobile Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up

Adjust by wrapping classes: `md:text-4xl` (4xl on medium screens and up)

## 🔤 Fonts

To change fonts, update `src/index.css`:

```css
body {
  font-family: 'Your Font', -apple-system, sans-serif;
}
```

Add Google Fonts in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
```

## 🎯 SEO Optimization

Update `index.html`:
```html
<title>Your Name - Product Manager Portfolio</title>
<meta name="description" content="Your description">
<meta name="keywords" content="product management, your skills">
```

## 📊 Analytics

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## 🔧 Advanced Customization

### Add New Section

1. Create component: `src/components/NewSection.jsx`
2. Import in `src/App.jsx`:
```jsx
import NewSection from './components/NewSection'
```
3. Add to render:
```jsx
<NewSection />
```
4. Add to navigation in `Navbar.jsx`

### Change Layout

Adjust container widths in components:
- `max-w-5xl` - Small container
- `max-w-6xl` - Medium container
- `max-w-7xl` - Large container

## 💡 Tips

- **Test mobile** after every change using browser dev tools
- **Optimize images** before uploading (use tools like TinyPNG)
- **Keep text concise** - recruiters scan quickly
- **Update regularly** with new projects and achievements
- **Test on different browsers** (Chrome, Firefox, Safari)

## 🆘 Need Help?

- Tailwind CSS Docs: [tailwindcss.com](https://tailwindcss.com)
- React Docs: [react.dev](https://react.dev)
- React Icons: [react-icons.github.io](https://react-icons.github.io/react-icons/)

---

Happy customizing! 🎨

