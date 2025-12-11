# MDS - Mashreq Digital Solutions

> **Zoho Certified Partner** providing custom CRM, ERP, and digital transformation solutions in Egypt and the Middle East.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.1-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38bdf8.svg)](https://tailwindcss.com/)

## 🌟 Features

### ✨ Core Features
- **🌓 Dark Mode**: Automatic theme detection with manual toggle and localStorage persistence
- **📱 Responsive Design**: Mobile-first approach with adaptive layouts
- **🔍 SEO Optimized**: Comprehensive meta tags, structured data, and AI search optimization
- **⚡ Performance**: Fast loading with code splitting and lazy loading
- **🌐 Bilingual Support**: English and Arabic language support
- **♿ Accessible**: WCAG compliant with ARIA labels

### 🎯 Business Features
- **Zoho Services Showcase**: Complete portfolio of Zoho implementation services
- **Case Studies**: Real-world success stories and client testimonials
- **Contact Integration**: Direct contact with business information
- **Solutions Wizard**: Interactive tool to find the right Zoho solution
- **Portfolio Gallery**: Showcase of completed projects

## 🏢 Company Information

**Mashreq Digital Solutions (MDS)**
- 📍 Address: B115 Smart Village, Giza, Egypt
- 📞 Phone: [+20-115 965 9977](tel:+201159659977)
- 📧 Email: [info@mds-solutions.com](mailto:info@mds-solutions.com)
- 🌐 Website: [mds-solutions.com](https://mds-solutions.com)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/AbdullahGamal1/mds_web.git
cd mds_web

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
mds_web/
├── public/              # Static assets
│   ├── manifest.json   # PWA manifest
│   ├── robots.txt      # Search engine directives
│   └── sitemap.xml     # Site map for SEO
├── src/
│   ├── components/     # React components
│   │   ├── common/     # Reusable components (SEO, etc.)
│   │   ├── layout/     # Layout components (Header, Footer)
│   │   └── sections/   # Page sections
│   ├── contexts/       # React contexts (Theme)
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions (schemas, etc.)
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🛠️ Tech Stack

### Core
- **React 19.2.1**: UI library
- **TypeScript 5.8.2**: Type safety
- **Vite 6.2.0**: Build tool and dev server
- **React Router DOM 7.10.1**: Client-side routing

### Styling
- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

### SEO & Meta
- **react-helmet-async**: Dynamic meta tags
- **schema-dts**: TypeScript types for Schema.org

### Development
- **ESLint**: Code linting
- **TypeScript**: Static type checking

## 🎨 Features in Detail

### Dark Mode
- Automatic detection of system preference
- Manual toggle with persistent storage
- Smooth transitions between themes
- Icon changes (sun/moon) based on current theme

### SEO Optimization
- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Rich social media previews
- **Twitter Cards**: Enhanced Twitter sharing
- **Schema.org**: Structured data for search engines
  - Organization schema
  - LocalBusiness schema
  - Service schemas
  - Breadcrumb navigation
  - FAQ schema
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawler directives
- **Canonical URLs**: Prevent duplicate content
- **Geo-location**: Local SEO optimization

### Mobile Menu
- Responsive hamburger menu for small screens
- Smooth slide-down animation
- Auto-close on navigation
- Icon changes (menu/close)
- Touch-friendly design

## 📄 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Type Checking
npm run type-check   # Run TypeScript type checking
```

## 🌐 Deployment

### Build
```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_SITE_URL=https://mds-solutions.com
```

### Tailwind Theme
Customize colors and theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      "primary": "#f4af25",
      "background-light": "#f8f7f5",
      "background-dark": "#221c10",
    }
  }
}
```

## 📊 SEO Checklist

- ✅ Meta tags on all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Schema.org structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Alt text on images
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Fast loading (Lighthouse 90+)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Team

**Mashreq Digital Solutions**
- Zoho Certified Partner
- Digital Transformation Experts
- Based in Smart Village, Giza, Egypt

## 📞 Contact

For inquiries about Zoho implementation or digital transformation:
- 📧 Email: info@mds-solutions.com
- 📱 Phone: +20-115 965 9977
- 🌐 Website: mds-solutions.com
- 📍 Address: B115 Smart Village, Giza, Egypt

---

**Built with ❤️ by MDS Team** | **Powered by Zoho**
