import { css } from '@emotion/react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const buttonStyle = css({
  background: '#3b82f6',
  color: 'white',
  padding: '.8rem',
  borderRadius: '0.5rem',
  border: 'none',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background 0.2s ease',
  '&:hover': {
    background: '#2563eb',
  },
});

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button css={buttonStyle} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
