import { BrowserRouter, Route, Routes } from 'react-router';
import SignUp from './pages/SignUp.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
