/* eslint-disable no-console */
import { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import MainLayout from '../src/components/layouts/MainLayout';
import { store } from '../src/store/store';

import 'react-toastify/dist/ReactToastify.css';
import ProtectRoute from '../src/components/ProtectRoute';
import GetUserFromCookies from '../src/components/GetUserFromCookies';
import muiTheme from '../src/styles/mui/muiTheme';
import GlobalCssOverride from '../src/components/GlobalCssOverride';

const App: NextPage<AppProps> = (props) => {
  return (
    <Provider store={store}>
      <GetUserFromCookies />
        <ThemeProvider theme={muiTheme}>
          <GlobalCssOverride />
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
        </ThemeProvider>
    </Provider>
  );
};

export default App;
