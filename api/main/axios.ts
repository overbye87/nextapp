/* eslint-disable no-param-reassign */
import axios, { HeadersDefaults } from 'axios';
import { config } from '../../config';
import cookies from '../../utils/cookies';

const authAxios = axios.create({
  baseURL: config.authUrl,
  timeout: 1000,
});



export const createRequestInterceptor = (token?: string) => {
  console.log('TOKEN>>>', token)
  if (typeof window === 'undefined') {
    authAxios.interceptors.request.use((options) => {
      if (token) {
        options.headers = {
          ...options.headers,
          'x-access-token': token,
        };
      }
      return options;
    });
  } else {
    authAxios.interceptors.request.use((options) => {
      const tokenFomCookie = cookies.token.get();
      if (tokenFomCookie) {
        options.headers = {
          ...options.headers,
          'x-access-token': tokenFomCookie,
        };
      }
      return options;
    });
  }
};

// createRequestInterceptor();

authAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
);

const addTokenToHeaders = (token: string) => {
  if (!authAxios.defaults.headers) {
    authAxios.defaults.headers = {} as HeadersDefaults;
  }
  (authAxios.defaults.headers as HeadersDefaults & { 'x-access-token': string })['x-access-token'] = token;
};

const removeTokenFromHeaders = () => {
  interface CustomHeaders extends HeadersDefaults {
    'x-access-token'?: string | null;
  }
  delete (authAxios.defaults.headers as CustomHeaders)['x-access-token'];
};

export {
  authAxios,
  addTokenToHeaders,
  removeTokenFromHeaders,
};
