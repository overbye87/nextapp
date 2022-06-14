import { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import MainLayout from '../components/layouts/MainLayout';
import { store } from '../store/store';
import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme/main';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NextNProgress
          color={theme.colors.red}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <GlobalStyle />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
