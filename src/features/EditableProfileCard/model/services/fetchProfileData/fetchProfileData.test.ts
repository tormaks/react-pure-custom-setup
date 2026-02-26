import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
  first: 'Максим',
  lastname: 'Иванов',
  age: 25,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
};

describe('fetchProfileData.test', () => {
  test('should fetch profile data success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('should fetch profile with 403 error', async () => {
    const response = {
      status: 403,
    };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve(response));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
