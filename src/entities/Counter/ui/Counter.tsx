/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    // eslint-disable-next-line no-alert
    dispatch(counterActions.increment(Number(prompt())));
  };

  const decrement = () => {
    // eslint-disable-next-line no-alert
    dispatch(counterActions.decrement(Number(prompt())));
  };

  return (
    <div>
      <h1>{value}</h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};
