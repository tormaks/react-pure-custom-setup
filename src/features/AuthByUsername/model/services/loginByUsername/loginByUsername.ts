import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User, userActions } from '@/entities/User';
import { LOCAL_STORAGE_KEYS } from '@/shared/constants';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:4000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
