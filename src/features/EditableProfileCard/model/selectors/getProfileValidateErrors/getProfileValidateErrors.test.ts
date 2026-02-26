import { StateSchema } from '@/app/providers/storeProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors.test', () => {
  const validateErrors = [
    ValidateProfileError.NO_SERVER_ERROR,
    ValidateProfileError.INCORRECT_AGE,
  ];

  test('should return profile validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(state.profile?.validateErrors);
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
