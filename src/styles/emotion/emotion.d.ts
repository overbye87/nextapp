import '@emotion/react';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme {
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
