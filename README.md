# Amarachi Juliet Uchechukwu - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Bootstrap showcasing professional experience, skills, and achievements.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Bootstrap 5** - Responsive CSS framework
- **Vite** - Fast build tool and dev server
- **Font Awesome** - Icon library
- **Google Fonts** - Playfair Display & Inter

## ✨ Features

- 🎨 Modern, elegant design with beautiful color palette
- 📱 Fully responsive layout with Bootstrap
- ⚡ Fast loading with Vite optimization
- 🎯 Smooth scrolling navigation
- ✨ Beautiful animations and transitions
- 🔒 Type-safe with TypeScript
- ⚛️ Component-based React architecture

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
.
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/
│   └── assets/          # Static assets
│       └── amarachi-photo.png
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite configuration
└── vercel.json          # Vercel deployment config
```

## 🚀 Deployment

### Deploy to Vercel

1. **Using Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Using GitHub Integration:**
   - Push your code to GitHub
   - Import your repository in Vercel dashboard
   - Vercel will automatically detect and deploy

3. **Using Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository

### Build Command
```bash
npm run build
```

### Output Directory
```
dist
```

## 🛠️ Development

The development server runs on `http://localhost:5173` by default.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

MIT License - See LICENSE file for details
