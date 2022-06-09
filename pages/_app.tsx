import { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import { ThemeProvider } from 'styled-components';
import MainLayout from '../components/layouts/MainLayout';
import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme/main';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
