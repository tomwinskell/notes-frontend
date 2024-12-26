/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      /* Color and font variables */
      :root {
        --neutral950: #0E121B;
        --neutral900: #191B25;
        --neutral800: #232530;
        --neutral700: #2B303B;
        --neutral600: #525866;
        --neutral500: #717784;
        --neutral400: #99A0AE;
        --neutral300: #CACFD8;
        --neutral200: #E0E4EA;
        --neutral100: #F3F5F8;
        --neutral50: #F5F7FA;
        --neutral0: #FFFFFF;
        --blue700: #2547D0;
        --blue500: #335CFF;
        --blue50: #EBF1FF;
        --green500: #21C16B;
        --green100: #D1FBE9;
        --red500: #FB3748;
        --red100: #FFD5D8;
      }


      /* CSS Reset */
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html, body {
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
      ul, ol {
        list-style: none;
      }
    `}
  />
);

export default GlobalStyles;
