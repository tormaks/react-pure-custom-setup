import { StateSchema } from '@/app/providers/storeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  const data = {
    first: 'Максим',
    lastname: 'Иванов',
    age: 25,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
  };

  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(state.profile?.data);
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
