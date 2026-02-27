import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  first: 'Максим',
  lastname: 'Иванов',
  age: 25,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
};

describe('validateProfileData.test', () => {
  test('success', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('validate incorrect first and lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('validate incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('validate incorrect username', async () => {
    const result = validateProfileData({ ...data, username: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
  });

  test('validate incorrect all', async () => {
    const result = validateProfileData({
      ...data, first: '', lastname: '', username: '', age: undefined,
    });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_USERNAME,
    ]);
  });
});
