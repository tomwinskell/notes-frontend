import { css } from '@emotion/react';
import { Outlet } from 'react-router';

const container = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  padding: '1rem',
  background: 'var(--neutral100)'
});

const App = () => (
  <div css={container}>
    <Outlet />
  </div>
);

export default App;
