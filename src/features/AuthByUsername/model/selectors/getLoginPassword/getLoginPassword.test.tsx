import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/storeProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('should return password value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: '',
        username: '',
        password: 'password123',
        isLoading: false,
      },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual('password123');
  });

  test('should return empty string with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
