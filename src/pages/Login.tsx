import axios from 'axios';

import UserForm from '../components/UserForm';
import { NavLink } from 'react-router';

function loginUser(email: string, password: string) {
  const obj = {
    email,
    password,
  };
  console.log(obj);
  axios
    .post('http://localhost:3000/user', obj)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function SignUp() {
  return (
    <UserForm
      note={<NavLink to="/forgot">Forgot</NavLink>}
      formHeader="Welcome to Note"
      formMessage="Please log in to continue"
      formButtonText="Login"
      handleSubmit={(email: string, password: string) =>
        loginUser(email, password)
      }
      formLink={
        <p>
          No account yet? <NavLink to="/signup">Signup</NavLink>
        </p>
      }
    />
  );
}
