import { css } from '@emotion/react';
import { useId } from 'react';

interface InputProps {
  label: string;
  footnote?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text';
}

const labelStyle = css({
  display: 'flex',
  flexDirection: 'column',
});

const inputStyle = css({
  border: 'thin solid var(--neutral200)',
  borderRadius: '.5rem',
  padding: '.8rem',
});

const footnoteStyle = css({
  color: 'grey',
  fontSize: '.8rem',
  display: 'flex',
  alignItems: 'start',
  gap: '0.5rem',
  marginBlockStart: '.25rem'
});

const Input = ({ label, footnote, onChange, type = 'text' }: InputProps) => {
  const id = useId();
  return (
    <div css={labelStyle}>
      <label htmlFor={id}>{label}</label>
      <input id={id} css={inputStyle} onChange={onChange} type={type} />
      {footnote && (
        <p css={footnoteStyle}>
          <span>ⓘ</span>
          {footnote}
        </p>
      )}
    </div>
  );
};

export default Input;
