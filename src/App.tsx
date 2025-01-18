import { BrowserRouter, Route, Routes } from 'react-router';
import SignUp from './pages/SignUp.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import { AuthProvider } from './context/AuthContext.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <AuthProvider>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </AuthProvider>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
