import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Register PWA Service Worker
import { registerSW } from 'virtual:pwa-register';

registerSW({
  onOfflineReady() {
    console.log('✅ App is ready to work offline.');
  },
  onNeedRefresh() {
    if (confirm('🔄 New content available. Reload?')) {
      window.location.reload();
    }
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
