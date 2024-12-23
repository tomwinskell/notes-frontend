import { css } from '@emotion/react';
import { useState } from 'react';
import axios from 'axios';

import Button from '../components/Button';
import Input from '../components/Input';

const container = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',
});

function handleClick(email: string, password: string) {
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div css={container}>
      <h1>Create Your Account</h1>
      <p>Sign up to start organizing your notes and boost your productivity.</p>
      <Input label='Email Address' onChange={(e) => setEmail(e.target.value)} />
      <Input label='Password' onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={() => handleClick(email, password)}>Sign up</Button>
    </div>
  );
}
