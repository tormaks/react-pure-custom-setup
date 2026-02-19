import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/storeProvider';
import { IUser, userActions } from '@/entities/User';
import { LOCAL_STORAGE_KEYS } from '@/shared/constants';

interface LoginByUsernameProps {
  username?: string;
  password?: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { rejectWithValue, dispatch, extra } = thunkAPI;

    try {
      const response = await extra.api.post<IUser>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
