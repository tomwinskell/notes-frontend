/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const FontStyles = () => (
  <Global
    styles={css`
      /* inter-regular - latin */
      @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url('../assets/fonts/inter-v18-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
      /* inter-500 - latin */
      @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url('../assets/fonts/inter-v18-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
      /* inter-600 - latin */
      @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url('../assets/fonts/inter-v18-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
      /* inter-700 - latin */
      @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url('../assets/fonts/inter-v18-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
    `}
  />
);

export default FontStyles;