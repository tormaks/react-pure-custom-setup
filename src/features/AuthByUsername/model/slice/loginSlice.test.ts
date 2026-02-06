import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from '@/features/AuthByUsername';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice.test', () => {
  test('should work setUsername', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'admin',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('adminadmin'))).toEqual({ username: 'adminadmin' });
  });

  test('should work setPassword', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123'))).toEqual({ password: '123123' });
  });
});
