import { css } from '@emotion/react';
import logo from '../assets/images/logo.svg';

const imageStyle = css({
  height: '2.5rem',
  width: 'auto',
});

const Logo = () => {
  return <img css={imageStyle} src={logo} alt="notes logo" />;
};

export default Logo;
