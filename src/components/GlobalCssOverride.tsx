import React from 'react';
import { Global, css, useTheme } from '@emotion/react';

const GlobalCssOverride = () => {
  const theme = useTheme();
  return <Global
    styles={css`
        body {
          margin: 0;
          padding: 0;
          background: ${theme.colors.darkBlack};
          color: ${theme.colors.darkWhite};
          font-family:
            -apple-system, 
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        };
        a {
          color: ${theme.colors.red};
          text-decoration: none;
          &:hover {
            color: ${theme.colors.white};
          }
        };
        * {
          box-sizing: border-box;
          }
        `}
  />;
};

export default GlobalCssOverride;
