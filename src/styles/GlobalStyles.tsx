/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
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
