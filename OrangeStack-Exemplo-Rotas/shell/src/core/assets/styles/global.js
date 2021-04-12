import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    box-sizing: border-box;
  }
  body {
    background-color: #ffffff;
    margin: 0;
    font-family: 'Montserrat';
    font-weight: normal;
    font-size: 62.5%;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    min-height: 100%;
  }

  h1, h2 {
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 1.6rem;
  }

  p, span {
    color: #1A2138;
    font-size: 1.2rem;
    font-weight: normal;
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
