/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      /* Color and font variables */
      :root {
        --neutral950: #0e121b;
        --neutral900: #191b25;
        --neutral800: #232530;
        --neutral700: #2b303b;
        --neutral600: #525866;
        --neutral500: #717784;
        --neutral400: #99a0ae;
        --neutral300: #cacfd8;
        --neutral200: #e0e4ea;
        --neutral100: #f3f5f8;
        --neutral50: #f5f7fa;
        --neutral0: #ffffff;
        --blue700: #2547d0;
        --blue500: #335cff;
        --blue50: #ebf1ff;
        --green500: #21c16b;
        --green100: #d1fbe9;
        --red500: #fb3748;
        --red100: #ffd5d8;
      }

      /* CSS Reset */
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
        font-family: Arial, sans-serif;
        line-height: 1.6;
      }
      body {
        margin: 0;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      ul,
      ol {
        list-style: none;
      }
    `}
  />
);

export default GlobalStyles;
