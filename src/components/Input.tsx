import { css } from '@emotion/react';

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text';
}

const inputStyle = css({
  border: 'thin solid grey',
  borderRadius: '.5rem',
});

const inputPadding = css({
  padding: '.8rem',
});

const Input = ({ onChange, type = 'text' }: InputProps) => {
  return (
    <input css={[inputStyle, inputPadding]} onChange={onChange} type={type} />
  );
};

export default Input;
