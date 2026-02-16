import { StateSchema } from '@/app/providers/storeProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
  test('should return isLoading value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: '',
        username: '',
        password: '',
        isLoading: true,
      },
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return isLoading value with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
