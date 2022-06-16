import { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import MainLayout from '../components/layouts/MainLayout';
import { store, useTypedSelector } from '../store/store';
import GlobalStyle from '../styles/globalStyle';
import sctheme from '../styles/theme/main';

import 'react-toastify/dist/ReactToastify.css';
import theme from '../styles/theme/dark';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const user = useTypedSelector(({ main }) => main.user);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <SCThemeProvider theme={sctheme}>
        <NextNProgress
          color={sctheme.colors.red}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <GlobalStyle />
        <MainLayout>
          {
            (pageProps.protected && !user)
              ? <p>PROTECTED</p>
              : <Component {...pageProps} />
          }
        </MainLayout>
        <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </SCThemeProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
