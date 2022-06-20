/* eslint-disable no-console */
import { AppProps } from 'next/app';
import { GetServerSidePropsContext, NextPage } from 'next/types';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import { AxiosError } from 'axios';
import MainLayout from '../components/layouts/MainLayout';
import { store } from '../store/store';
import GlobalStyle from '../styles/globalStyle';
import sctheme from '../styles/theme/main';

import 'react-toastify/dist/ReactToastify.css';
import theme from '../styles/theme/dark';
import ProtectRoute from '../components/ProtectRoute';
import { getUserFromCookies } from '../utils/gerUserFromCookies';

const App: NextPage<AppProps> = ({ Component, pageProps, user }) => {
  console.log('app user', user);
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
          <ProtectRoute protected={pageProps.protected}>
            <Component {...pageProps} />
          </ProtectRoute>
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const rawToken = ctx.req.cookies.token;
    if (!rawToken) {
      throw new Error('Not auth');
    }
    const token = JSON.parse(rawToken);
    const user = await getUserFromCookies(token);
    const props = {
      user,
    };
    return { props };
  } catch (error) {
    console.log((error as AxiosError).message);
  }
};

export default App;
