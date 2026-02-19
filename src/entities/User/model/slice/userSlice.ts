import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_KEYS } from '@/shared/constants';
import { IUser, IUserSchema } from '../types/user';

const initialState: IUserSchema = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
    },
  },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
