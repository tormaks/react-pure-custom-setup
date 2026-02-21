import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/storeProvider';
import { getProfileForm } from '../../selectors/getProfileForm';
import { IProfile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<IProfile>('/profile', formData);

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
