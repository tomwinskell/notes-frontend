import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import GlobalStyles from './styles/GlobalStyles';
import App from './App.tsx';
import SignUp from './pages/SignUp.tsx';
import Home from './pages/Home.tsx';
import FontStyles from './styles/FontStyles.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <FontStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
