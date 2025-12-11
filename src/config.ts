/**
 * Application Configuration
 * Centralized configuration for the entire application
 */

export const APP_CONFIG = {
  // App Metadata
  app: {
    name: 'MerchMate AI',
    version: '1.0.0',
    description: 'Professional AI-powered product mockup generator',
    tagline: 'Create realistic mockups instantly with AI'
  },

  // API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'https://api.gemini.google.com',
    timeout: 30000,
    retries: 3
  },

  // Feature Flags
  features: {
    darkMode: true,
    imageHistory: true,
    keyboardShortcuts: true,
    advancedSettings: true,
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
  },

  // UI Configuration
  ui: {
    animationDuration: 300,
    toastDuration: 3000,
    maxUploadSize: 5 * 1024 * 1024, // 5MB
    supportedFormats: ['image/png', 'image/jpeg', 'image/webp', 'image/gif']
  },

  // Keyboard Shortcuts
  shortcuts: {
    darkMode: ['ctrl', 'd'],
    generate: ['ctrl', 'k'],
    clear: ['ctrl', 'shift', 'c']
  },

  // Performance
  performance: {
    enableServiceWorker: false,
    enableCompression: true,
    enableImageOptimization: true
  }
} as const;

export type AppConfig = typeof APP_CONFIG;

export const getEnv = (key: string, defaultValue?: string): string => {
  return import.meta.env[key] || defaultValue || '';
};
