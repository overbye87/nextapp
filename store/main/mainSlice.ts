/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/main';
import type { RootState } from '../store';

interface IInitial {
  user: null | IUser,
}

const initialState: IInitial = {
  user: null,
};

export const mainSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (store, action: PayloadAction<IUser | null>) => {
      store.user = action.payload;
    },
  },
});

export const {
  setCurrentUser,
} = mainSlice.actions;

export const user = (state: RootState) => state.main;

export default mainSlice.reducer;
