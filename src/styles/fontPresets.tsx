import { css } from '@emotion/react';

export const fontPresets = {
  heading: css({
    fontFamily: 'Inter, sans-serif',
    fontSize: '1.5rem',
    fontWeight: '700',
    lineHeight: '1.2em',
    color: 'var(--neutral950)',
  }),
  body: css({
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9rem',
    fontWeight: '400',
    lineHeight: '1.3em',
    color: 'var(--neutral600)',
  }),
  formLabel: css({
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9rem',
    fontWeight: '500',
    lineHeight: '1.2em',
    color: 'var(--neutral950)',
  }),
};
