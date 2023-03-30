import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  @font-face {
    font-family: 'mago3';
    src: url('fonts/mago3.woff2') format('woff2'),
        url('fonts/mago3.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'mago1';
    src: url('fonts/mago1.woff2') format('woff2'),
        url('fonts/mago1.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'mago2';
    src: url('fonts/mago2.woff2') format('woff2'),
        url('fonts/mago2.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

  body {
    background-color: var(--color-bg);
    font-family: "mago3", sans-serif;
  }
`;

export default Base;
