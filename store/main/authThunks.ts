/* eslint-disable no-alert */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ISignIn, ISignUp, signIn, signUp } from '../../api/main/authApi';
import { setCurrentUser } from './mainSlice';

export const signInThunk = createAsyncThunk(
  'user/signIn',
  async (signInData: ISignIn, { dispatch }) => {
    try {
      dispatch(setCurrentUser(null));
      const user = await signIn(signInData);
      // Alert.alert('user', JSON.stringify(user, null, 2));
      dispatch(setCurrentUser(user));
    } catch (error) {
      alert(
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
      const user = await signUp(signUpData);
      // Alert.alert('user', JSON.stringify(user, null, 2));
      dispatch(setCurrentUser(user));
    } catch (error) {
      alert(
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
