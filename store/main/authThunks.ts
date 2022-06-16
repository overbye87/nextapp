/* eslint-disable no-alert */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { check, signIn, signUp } from '../../api/main/authApi';
import { addTokenToHeaders } from '../../api/main/axios';
import { ISignIn, ISignUp } from '../../types/main';
import cookies from '../../utils/cookies';
import { setCurrentUser } from './mainSlice';

export const checkThunk = createAsyncThunk(
  'user/check',
  async (_, { dispatch }) => {
    try {
      dispatch(setCurrentUser(null));
      const { data, token } = await check();
      toast.info(token);
      cookies.token.set(token);
      addTokenToHeaders(token);
      // Alert.alert('user', JSON.stringify(user, null, 2));
      toast.info('Token check success');
      dispatch(setCurrentUser(data));
    } catch (error) {
      toast.error(
        (error as AxiosError<{ message: string }>).response?.data.message,
      );
    }
  },
);

export const signInThunk = createAsyncThunk(
  'user/signIn',
  async (signInData: ISignIn, { dispatch }) => {
    try {
      dispatch(setCurrentUser(null));
      const { data, token } = await signIn(signInData);
      cookies.token.set(token);
      addTokenToHeaders(token);
      // Alert.alert('user', JSON.stringify(user, null, 2));
      toast.info('Sign in success');
      dispatch(setCurrentUser(data));
    } catch (error) {
      toast.error(
        (error as AxiosError<{ message: string }>).response?.data.message,
      );
    }
  },
);

export const signUpThunk = createAsyncThunk(
  'user/signUp',
  async (signUpData: ISignUp, { dispatch }) => {
    try {
      dispatch(setCurrentUser(null));
      const { data, token } = await signUp(signUpData);
      cookies.token.set(token);
      addTokenToHeaders(token);
      // Alert.alert('user', JSON.stringify(user, null, 2));
      toast.info('Sign up success');
      dispatch(setCurrentUser(data));
    } catch (error) {
      toast.error(
        (error as AxiosError<{ message: string }>).response?.data.message,
      );
    }
  },
);

// export const getAllUsersThunk = createAsyncThunk(
//   'user/getAllUsers',
//   async (params, { dispatch }) => {
//     try {
//       dispatch(setCurrentUsers([]));
//       const users = await userApi.getAllUsers();
//       // Alert.alert('user', JSON.stringify(user, null, 2));
//       dispatch(setCurrentUsers(users));
//     } catch (error) {
//       Alert.alert(
//         (error as AxiosError).message,
//         (error as AxiosError<{ message: string }>).response?.data.message,
//       );
//     }
//   },
// );

// export const deleteUserThunk = createAsyncThunk<unknown, number>(
//   'user/deleteUser',
//   async (id, { dispatch }) => {
//     try {
//       const result = await userApi.deleteOneUser(id);
//       // Alert.alert('user', JSON.stringify(user, null, 2));
//       if (result) {
//         const users = await userApi.getAllUsers();
//         dispatch(setCurrentUsers(users));
//       }
//     } catch (error) {
//       Alert.alert(
//         (error as AxiosError).message,
//         (error as AxiosError<{ message: string }>).response?.data.message,
//       );
//     }
//   },
// );
