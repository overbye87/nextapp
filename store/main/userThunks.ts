/* eslint-disable no-alert */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { deleteOneUser, getAllUsers } from '../../api/main/userApi';
import { removeOneUser, setUsers } from './mainSlice';

export const getAllUsersThunk = createAsyncThunk(
  'user/getAllUsers',
  async (params, { dispatch }) => {
    try {
      // dispatch(setUsers([]));
      const users = await getAllUsers();
      // Alert.alert('user', JSON.stringify(user, null, 2));
      dispatch(setUsers(users));
    } catch (error) {
      toast.error(
        (error as AxiosError<{ message: string }>).response?.data.message,
      );
    }
  },
);

export const deleteUserThunk = createAsyncThunk<unknown, number>(
  'user/deleteUser',
  async (id, { dispatch }) => {
    try {
      const result = await deleteOneUser(id);
      // Alert.alert('user', JSON.stringify(user, null, 2));
      if (result) {
        dispatch(removeOneUser(id));
      }
    } catch (error) {
      toast.error(
        (error as AxiosError<{ message: string }>).response?.data.message,
      );
    }
  },
);
