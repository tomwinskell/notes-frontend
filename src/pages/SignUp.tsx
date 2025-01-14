import axios from 'axios';

import UserForm from '../components/UserForm';
import { NavLink } from 'react-router';

function createUser(email: string, password: string) {
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
      formHeader="Create You Account"
      formMessage="Sign up to start organizing your notes and boost your productivity"
      footnote="At least 8 characters"
      formButtonText="Sign up"
      handleSubmit={(email: string, password: string) =>
        createUser(email, password)
      }
      formLink={
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      }
    />
  );
}
