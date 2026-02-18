import { ILoginSchema } from '@/features/AuthByUsername';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice.test', () => {
  test('should work setUsername', () => {
    const state: DeepPartial<ILoginSchema> = {
      username: 'admin',
    };

    expect(loginReducer(state as ILoginSchema, loginActions.setUsername('adminadmin'))).toEqual({ username: 'adminadmin' });
  });

  test('should work setPassword', () => {
    const state: DeepPartial<ILoginSchema> = {
      password: '123',
    };

    expect(loginReducer(state as ILoginSchema, loginActions.setPassword('123123'))).toEqual({ password: '123123' });
  });
});
