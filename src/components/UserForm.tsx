import { css } from '@emotion/react';
import React, { useState } from 'react';

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
  submitFunction: (email: string, password: string) => void;
  formLink: React.ReactNode;
}

export default function UserForm({
  formHeader,
  formMessage,
  note,
  footnote,
  formButtonText,
  submitFunction,
  formLink,
}: UserFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  // regex to check password strength
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = () => {
    const errors: { [key: string]: string } = {};

    if (!password) errors.password = 'Password required';
    else if (!passwordRegExp.test(password))
      errors.password = 'Min. 8 chars, upper, lower, number, and special char';

    if (!email) errors.email = 'Email required';
    else if (!emailRegExp.test(email))
      errors.email = 'Must be valid email address';

    // If there are errors, set them and return
    if (Object.keys(errors).length > 0) {
      setPasswordError(errors.password || '');
      setEmailError(errors.email || '');
      return;
    }

    submitFunction(email, password);
  };

  return (
    <div css={container}>
      <Logo />

      <h1 css={[alignCenter, fontPresets.heading]}>{formHeader}</h1>

      <p css={[alignCenter, fontPresets.body]}>{formMessage}</p>

      <Input
        label="Email Address"
        error={emailError}
        onFocus={() => setEmailError('')}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Password"
        note={note}
        error={passwordError}
        footnote={footnote}
        onFocus={() => setPasswordError('')}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button onClick={handleSubmit}>{formButtonText}</Button>

      <hr></hr>

      <p css={alignCenter}>{formLink}</p>
    </div>
  );
}
