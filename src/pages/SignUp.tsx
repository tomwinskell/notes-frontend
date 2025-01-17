import axios from 'axios';

import UserForm from '../components/UserForm';
import { NavLink } from 'react-router';

const createUser = async (email: string, password: string) => {
  const obj = { email, password };
  try {
    const response = await axios.post('http://localhost:3000/user', obj);
    console.log('User created:', response.data);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export default function SignUp() {
  return (
    <UserForm
      formHeader="Create You Account"
      formMessage="Sign up to start organizing your notes and boost your productivity"
      footnote="At least 8 characters"
      formButtonText="Sign up"
      submitFunction={(email: string, password: string) =>
        createUser(email, password)
      }
      formLink={
        <>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </>
      }
    />
  );
}
