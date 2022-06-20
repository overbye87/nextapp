import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray: string,
      red: string,
      black: string,
      darkBlack: string,
      white: string,
      darkWhite: string,
    };
  }
}
