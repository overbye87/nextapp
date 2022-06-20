import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.darkBlack};
    color: ${({ theme }) => theme.colors.darkWhite};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: ${({ theme }) => theme.colors.red};
    text-decoration: none;
    &:hover{
      color: ${({ theme }) => theme.colors.white};
    }
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
