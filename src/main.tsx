import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyles from './styles/GlobalStyles';
import App from './App.tsx';
import FontStyles from './styles/FontStyles.tsx';
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <GlobalStyles />
      <FontStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
