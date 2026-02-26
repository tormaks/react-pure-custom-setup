import { StateSchema } from '@/app/providers/storeProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual(state.profile?.error);
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual('');
  });
});
