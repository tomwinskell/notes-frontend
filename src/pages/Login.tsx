import axios from 'axios';
import UserForm from '../components/UserForm';
import { NavLink } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const loginUser = async (email: string, password: string) => {
    const obj = { email, password };
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        obj
      );
      // console.log('Access granted:', response.data);
      login(response.data.accessToken);
    } catch (error) {
      console.error('Access not authorized', error);
    }
  };

  return (
    <UserForm
      note={<NavLink to="/forgot">Forgot</NavLink>}
      formHeader="Welcome to Note"
      formMessage="Please log in to continue"
      formButtonText="Login"
      submitFunction={(email: string, password: string) =>
        loginUser(email, password)
      }
      formLink={
        <>
          No account yet? <NavLink to="/signup">Signup</NavLink>
        </>
      }
    />
  );
}
