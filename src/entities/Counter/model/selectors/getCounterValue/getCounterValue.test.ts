import { StateSchema } from '@/app/providers/storeProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return the correct value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
