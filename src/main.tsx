import React from 'react';
import ReactDOM from 'react-dom/client';
import RootApp from './App';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RootApp />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);