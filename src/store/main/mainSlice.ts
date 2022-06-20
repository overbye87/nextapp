/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/main';
import type { RootState } from '../store';

interface IInitial {
  user: null | IUser,
  users: IUser[],
}

const initialState: IInitial = {
  user: null,
  users: [],
};

export const mainSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (store, action: PayloadAction<IUser | null>) => {
      store.user = action.payload;
    },
    setUsers: (store, action: PayloadAction<IUser[]>) => {
      store.users = action.payload;
    },
    removeOneUser: (store, action: PayloadAction<number>) => {
      store.users = store.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const {
  setCurrentUser,
  setUsers,
  removeOneUser,
} = mainSlice.actions;

export const user = (state: RootState) => state.main;

export default mainSlice.reducer;
