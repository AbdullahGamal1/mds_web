import React from 'react';
import ReactDOM from 'react-dom/client';
import RootApp from './App';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import './i18n/config'; // Initialize i18n
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ErrorBoundary from './components/common/ErrorBoundary';

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevent refetching when window regains focus for static corporate data
      staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
    },
  },
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider>
            <RootApp />
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);