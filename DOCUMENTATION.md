# MerchMate AI - Professional App

A premium AI-powered product mockup generator built with React 19, TypeScript, and Gemini AI.

## 🚀 Features

- **AI-Powered Mockups** - Generate realistic product mockups instantly
- **Dark Mode** - Full dark mode support with system preference detection
- **Image History** - Save and manage generated mockups
- **Advanced Settings** - Customizable quality, resolution, and aspect ratios
- **Error Handling** - Comprehensive error boundaries and user feedback
- **Analytics** - Track user interactions and events
- **Responsive Design** - Works seamlessly on all devices
- **Keyboard Shortcuts** - Ctrl+D (Dark Mode), Ctrl+K (Generate)

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **UI Icons**: Lucide React
- **AI**: Google Gemini API
- **Build Tool**: Vite
- **State Management**: React Hooks with Custom Hooks

## 📦 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Create a .env file with:
# VITE_GEMINI_API_KEY=your_api_key_here

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 Project Structure

```
src/
├── components/          # React components
│   ├── ErrorBoundary   # Error handling
│   ├── LoadingSkeleton # Loading states
│   └── ...other components
├── hooks/              # Custom React hooks
├── services/           # API and utility services
│   ├── gemini.ts       # AI API integration
│   ├── logger.ts       # Logging service
│   └── analytics.ts    # Analytics tracking
├── config.ts           # App configuration
├── App.tsx             # Root component
└── types.ts            # TypeScript types
```

## 🔧 Configuration

Edit `config.ts` to customize app behavior:

```typescript
export const APP_CONFIG = {
  app: { name, version, description },
  api: { baseUrl, timeout, retries },
  features: { darkMode, analytics, ... },
  ui: { animationDuration, toastDuration, ... }
};
```

## 📊 Analytics

Analytics are disabled by default. Enable with:

```bash
VITE_ENABLE_ANALYTICS=true npm run dev
```

## 🎨 Customization

- **Colors**: Modify `tailwind.config.js` theme
- **Animations**: Update animation keyframes in Tailwind config
- **Components**: Update component styles in TSX files

## 📝 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+D | Toggle Dark Mode |
| Ctrl+K | Generate Mockup |
| Ctrl+Shift+C | Clear History |

## 🐛 Error Handling

The app includes comprehensive error handling:
- Error Boundary component for crash prevention
- Automatic error logging
- User-friendly error messages
- Development mode error details

## 🚀 Production Build

```bash
npm run build
npm run preview
```

## 📄 License

Proprietary - MerchMate AI

## 🤝 Support

For issues or questions, please contact the development team.
