import { css } from '@emotion/react';
import { useId } from 'react';
import { fontPresets } from '../styles/fontPresets';

const container = css({
  display: 'flex',
  flexDirection: 'column',
});
const labelContainer = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
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
  marginStart: '.25rem',
});

interface InputProps {
  label: string;
  note?: React.ReactNode;
  footnote?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text';
}

const Input = ({
  label,
  note,
  footnote,
  onChange,
  type = 'text',
}: InputProps) => {
  const id = useId();
  return (
    <div css={container}>
      <div css={[labelContainer]}>
        <label htmlFor={id} css={fontPresets.formLabel}>
          {label}
        </label>
        <span css={fontPresets.formNote}>{note}</span>
      </div>
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
