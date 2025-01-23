import { Route, Routes } from 'react-router';
import SignUp from './pages/SignUp.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Profile from './pages/Profile.tsx';
import PrivateRoute from './components/ProtectedRoute.tsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route
        path="profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
