/* eslint-disable no-console */
import { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import MainLayout from '../src/components/layouts/MainLayout';
import { store } from '../src/store/store';

import 'react-toastify/dist/ReactToastify.css';
import ProtectRoute from '../src/components/ProtectRoute';
import GetUserFromCookies from '../src/components/GetUserFromCookies';
import emotionTheme from '../src/styles/emotion/emotionTheme';
import muiTheme from '../src/styles/mui/muiTheme';

const App: NextPage<AppProps> = (props) => {
  return (
    <Provider store={store}>
      <GetUserFromCookies />
      <ThemeProvider theme={emotionTheme}>
        <MuiThemeProvider theme={muiTheme}>
          <NextNProgress
            color={'red'}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <MainLayout >
            <ProtectRoute protected={props.pageProps.protected}>
              <props.Component {...props.pageProps} />
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
        </MuiThemeProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
