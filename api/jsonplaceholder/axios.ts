import axios from 'axios';
import { config } from '../../config';

const jsonplaceholderAxios = axios.create({
  baseURL: config.usersUrl,
});

jsonplaceholderAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
);

export {
  jsonplaceholderAxios,
};
