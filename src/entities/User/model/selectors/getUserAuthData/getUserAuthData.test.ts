import { StateSchema } from '@/app/providers/storeProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
  const data = {
    id: '1',
    username: 'admin',
  };

  test('should return auth data', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: data,
      },
    };

    expect(getUserAuthData(state as StateSchema)).toEqual(state.user?.authData);
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
