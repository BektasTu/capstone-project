import { createGlobalStyle } from "styled-components";
import NotoSans from "./fonts/noto-sans-v27-latin-regular.woff";
import NotoSans2 from "./fonts/noto-sans-v27-latin-regular.woff2";
import px2vw from "./utils/px2vw";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    src: url(${NotoSans2}) format('woff2'),
        url(${NotoSans}) format('woff');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

  body {
    margin: 0;
    font-family: 'Noto Sans', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
  }
`;

export default GlobalStyle;
