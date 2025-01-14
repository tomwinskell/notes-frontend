import { css } from '@emotion/react';
import { useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';
import { fontPresets } from '../styles/fontPresets';

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

interface UserFormProps {
  formHeader: string;
  formMessage: string;
  note?: React.ReactNode;
  footnote?: string;
  formButtonText: string;
  handleSubmit: (email: string, password: string) => void;
  formLink: React.ReactNode;
}

export default function UserForm({
  formHeader,
  formMessage,
  note,
  footnote,
  formButtonText,
  handleSubmit,
  formLink,
}: UserFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div css={container}>
      <Logo />
      <h1 css={[alignCenter, fontPresets.heading]}>{formHeader}</h1>
      <p css={[alignCenter, fontPresets.body]}>{formMessage}</p>
      <Input label="Email Address" onChange={(e) => setEmail(e.target.value)} />
      <Input
        label="Password"
        note={note}
        footnote={footnote}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => handleSubmit(email, password)}>
        {formButtonText}
      </Button>
      <hr></hr>
      <p css={alignCenter}>{formLink}</p>
    </div>
  );
}
