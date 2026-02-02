import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User } from '@/entities/User';
import { i18n } from '@/shared/config/i18n';

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

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(i18n.t('Неверный логин или пароль'));
    }
  },
);
