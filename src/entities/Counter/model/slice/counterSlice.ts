import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { actions: counterActions } = counterSlice;

export const { reducer: counterReducer } = counterSlice;
