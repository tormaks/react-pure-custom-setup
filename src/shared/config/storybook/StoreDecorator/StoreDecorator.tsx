import {
  AnyAction, DeepPartial, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import { LoginSchema } from '@/features/AuthByUsername';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { IProfileSchema, profileReducer } from '@/entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer as Reducer<LoginSchema | undefined, AnyAction>,
  profile: profileReducer as Reducer<IProfileSchema | undefined, AnyAction>,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
