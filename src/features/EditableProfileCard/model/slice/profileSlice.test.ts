import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { profileReducer, profileActions } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { IProfileSchema, ValidateProfileError } from '../types/profile';

const data = {
  first: 'Максим',
  lastname: 'Иванов',
  age: 25,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
};

describe('profileSlice.test', () => {
  test('should work setReadonly', () => {
    const state: DeepPartial<IProfileSchema> = {
      readonly: false,
    };

    expect(profileReducer(state as IProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('should work cancelEdit', () => {
    const state: DeepPartial<IProfileSchema> = {
      data,
      form: data,
    };

    expect(profileReducer(state as IProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      data,
      form: data,
      validateErrors: undefined,
    });
  });

  test('should work updateProfile', () => {
    const state: DeepPartial<IProfileSchema> = {
      form: { first: '123' },
    };

    expect(profileReducer(
      state as IProfileSchema,
      profileActions.updateProfile({
        first: '123456',
      }),
    ))
      .toEqual({
        form: { first: '123456' },
      });
  });

  test('should work updateProfile service pending', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.NO_SERVER_ERROR],
    };

    expect(profileReducer(
      state as IProfileSchema,
      updateProfileData.pending,
    ))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      });
  });

  test('should work updateProfile service fulfilled', () => {
    const state: DeepPartial<IProfileSchema> = {
      data: undefined,
      form: undefined,
      readonly: false,
      isLoading: true,
      validateErrors: [ValidateProfileError.NO_SERVER_ERROR],
    };

    expect(profileReducer(
      state as IProfileSchema,
      updateProfileData.fulfilled(data, ''),
    ))
      .toEqual({
        data,
        form: data,
        readonly: true,
        isLoading: false,
        validateErrors: undefined,
      });
  });
});
