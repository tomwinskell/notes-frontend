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
      <Input onChange={(e) => setEmail(e.target.value)}></Input>
      <Input onChange={(e) => setPassword(e.target.value)}></Input>
      <Button onClick={() => handleClick(email, password)}>Sign up</Button>
    </div>
  );
}
