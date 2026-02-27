import { ValidateProfileError } from '@/features/EditableProfileCard/model/types/profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';

const data = {
  first: 'Максим',
  lastname: 'Иванов',
  age: 25,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
};

describe('updateProfileData.test', () => {
  test('should update profile data success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('should update profile with server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.NO_SERVER_ERROR,
    ]);
  });

  test('should update profile with validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, first: '', lastname: '' },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
