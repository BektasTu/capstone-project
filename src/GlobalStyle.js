import { createGlobalStyle } from "styled-components";
import NotoSans from "./fonts/noto-sans-v27-latin-regular.woff";
import NotoSans2 from "./fonts/noto-sans-v27-latin-regular.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    src: url(${NotoSans2}) format('woff2'),
        url(${NotoSans}) format('woff');
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;

    @media only screen and (min-width: 1024px) {
  .container header .header-nav-area #nav_container  {
    display:flex;
  }
}
}

  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
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
