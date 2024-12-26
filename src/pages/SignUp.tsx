import { css } from '@emotion/react';
import { useState } from 'react';
import axios from 'axios';

import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';

const container = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',
  background: 'var(--neutral0)',
  borderRadius: '.8rem',
  padding: '3rem 1rem',
  border: 'thin solid var(--neutral200)',
  justifyContent: 'center',
});

const alignCenter = css({
  textAlign: 'center',
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
      <Logo />
      <h1 css={alignCenter}>Create Your Account</h1>
      <p css={alignCenter}>
        Sign up to start organizing your notes and boost your productivity.
      </p>
      <Input label="Email Address" onChange={(e) => setEmail(e.target.value)} />
      <Input
        label="Password"
        footnote="At least 8 characters"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => handleClick(email, password)}>Sign up</Button>
    </div>
  );
}
