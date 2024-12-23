import { css } from '@emotion/react';
import { Outlet } from 'react-router';

const container = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
});

export default function App() {
  return (
    <div css={container}>
      <Outlet />
    </div>
  );
}
