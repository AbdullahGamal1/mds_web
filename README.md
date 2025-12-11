# MerchMate AI - Professional Product Mockup Generator

> A premium, enterprise-ready AI application for generating realistic product mockups using Google's Gemini AI.

## ✨ Overview

MerchMate AI is a sophisticated web application that leverages cutting-edge AI technology to instantly generate professional product mockups. Perfect for e-commerce businesses, designers, and entrepreneurs who need high-quality product visualization.

## 🎯 Key Features

### Core Functionality
- 🤖 **AI-Powered Generation** - Uses Google Gemini API for intelligent mockup creation
- 📸 **Multiple Product Templates** - T-Shirts, Hoodies, Mugs, Posters, and more
- 🎨 **Customizable Prompts** - Fine-tune generation with detailed descriptions
- 📐 **Flexible Dimensions** - Multiple aspect ratios and resolutions (1K, 2K, 4K)

### Professional Features
- 🌓 **Dark Mode** - Professional dark theme with smooth transitions
- 💾 **Image History** - Keep track of all generated mockups
- ⚡ **Performance Optimized** - Fast generation with intelligent caching
- 🛡️ **Error Handling** - Comprehensive error boundaries and recovery
- 📊 **Analytics Ready** - Built-in analytics infrastructure
- 🎯 **Keyboard Shortcuts** - Power-user shortcuts for efficiency

### User Experience
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS
- 📱 **Responsive** - Works flawlessly on desktop, tablet, and mobile
- 🔄 **Smooth Animations** - Polished transitions and loading states
- 💬 **Toast Notifications** - Non-intrusive user feedback
- ♿ **Accessible** - Semantic HTML and ARIA labels

## 🏗️ Architecture

### Tech Stack
```
Frontend:     React 19 + TypeScript
Styling:      Tailwind CSS + PostCSS
Icons:        Lucide React
Build Tool:   Vite 6
AI Service:   Google Gemini API
State:        React Hooks + Custom Hooks
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Google Gemini API key

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Configure Environment**
```bash
cp .env.example .env
# Edit .env with your Gemini API key
VITE_GEMINI_API_KEY=your_key_here
```

3. **Start Development Server**
```bash
npm run dev
```

4. **Build for Production**
```bash
npm run build
npm run preview
```

## 📋 Usage Guide

### Basic Workflow
1. **Select Product** - Choose from available templates
2. **Upload Logo** - Add your logo or image (PNG, JPG, WebP)
3. **Customize** - Add description in the prompt
4. **Configure** - Set quality, resolution, and aspect ratio
5. **Generate** - Click "Generate Mockup" or press Ctrl+K
6. **Save** - Download or view in gallery

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| `Ctrl + D` | Toggle Dark Mode |
| `Ctrl + K` | Generate Mockup |
| `Ctrl + Shift + C` | Clear History |

## ⚙️ Configuration

Edit `config.ts` to customize application behavior.

## 🎨 Customization

- **Theme Colors** - Modify `tailwind.config.js`
- **Animations** - Update keyframes in Tailwind config
- **Components** - Edit component files as needed

## 📊 Features

- ✅ Error Boundary for crash prevention
- ✅ Custom React hooks for state management
- ✅ Logger service for debugging
- ✅ Analytics infrastructure
- ✅ Loading skeletons and spinners
- ✅ Dark mode with system preference
- ✅ Image history management
- ✅ Toast notification system
- ✅ Keyboard shortcut support
- ✅ Responsive design
- ✅ Production-ready build setup

## 📈 Performance

- Code splitting with Vite
- Optimized bundle size
- Image lazy loading
- Service worker ready
- Caching strategies

## 🔐 Security

- Environment variables for sensitive data
- Input validation on all forms
- XSS protection via React
- CSRF token support ready

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # Type checking with TypeScript
```

## 📚 Project Structure

```
├── components/       # React UI components
├── hooks/            # Custom React hooks
├── services/         # API and utility services
├── config.ts         # App configuration
├── types.ts          # TypeScript definitions
├── App.tsx           # Root component
└── index.tsx         # Entry point
```

## 🚀 Deployment

Ready for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Self-hosted servers

## 📄 License

Copyright © 2024 MerchMate AI. All rights reserved.

---

**Made with ❤️ for creators and entrepreneurs.**
