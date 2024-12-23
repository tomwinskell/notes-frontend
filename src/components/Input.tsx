import { css } from '@emotion/react';

interface InputProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text';
}

const labelStyle = css({
  display: 'flex',
  flexDirection: 'column',
});

const inputStyle = css({
  border: 'thin solid grey',
  borderRadius: '.5rem',
});

const inputPadding = css({
  padding: '.8rem',
});

const Input = ({ label, onChange, type = 'text' }: InputProps) => {
  return (
    <div css={labelStyle}>
      <label>{label}</label>
      <input css={[inputStyle, inputPadding]} onChange={onChange} type={type} />
    </div>
  );
};

export default Input;
