import { StateSchema } from '@/app/providers/storeProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return username value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: '',
        username: 'admin123',
        password: '',
        isLoading: false,
      },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual('admin123');
  });

  test('should return empty string with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
