import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { IProfile, IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<IProfile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.data = action.payload;
        state.form = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
