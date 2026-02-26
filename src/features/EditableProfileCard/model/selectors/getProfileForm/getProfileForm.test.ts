import { StateSchema } from '@/app/providers/storeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  const form = {
    first: 'Максим',
    lastname: 'Иванов',
    age: 25,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
  };

  test('should return profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(state.profile?.form);
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
