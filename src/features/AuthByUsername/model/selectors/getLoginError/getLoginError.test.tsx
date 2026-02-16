import { StateSchema } from '@/app/providers/storeProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('should return error value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
        username: '',
        password: '',
        isLoading: false,
      },
    };

    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
