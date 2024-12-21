import { css } from '@emotion/react';
import { useState } from 'react';
import axios from 'axios';

const container = css({
  display: 'flex',
  gap: '1em',
});

const padding = css({
  borderRadius: '15px',
  padding: '1rem',
  fontSize: '1.5rem',
});

const button = css({
  color: 'white',
  background: 'navy',
  border: 'none',
});

const input = css({
  border: 'thin solid',
});

function handleClick(name: string) {
  const obj = {
    name,
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

export default function App() {
  const [name, setName] = useState('');

  return (
    <div css={container}>
      <input css={[input, padding]} onChange={(e) => setName(e.target.value)} />
      <button css={[button, padding]} onClick={() => handleClick(name)}>
        Register
      </button>
    </div>
  );
}
