import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyles from './styles/GlobalStyles';
import App from './App.tsx';
import FontStyles from './styles/FontStyles.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <FontStyles />
    <App />
  </StrictMode>
);
