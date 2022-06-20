/* eslint-disable no-console */
import { AppProps } from 'next/app';
import { NextPage } from 'next/types';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import MainLayout from '../src/components/layouts/MainLayout';
import { store } from '../src/store/store';
import GlobalStyle from '../src/styles/globalStyle';
import sctheme from '../src/styles/theme/main';

import 'react-toastify/dist/ReactToastify.css';
import theme from '../src/styles/theme/dark';
import ProtectRoute from '../src/components/ProtectRoute';

const App: NextPage<AppProps> = (props) => {
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
        </SCThemeProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
