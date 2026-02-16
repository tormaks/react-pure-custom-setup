/* eslint-disable no-unused-vars */
import { AnyAction, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { To } from '@remix-run/router';
import { AxiosInstance } from 'axios';
import type { NavigateOptions } from 'react-router/dist/lib/context';
import { CombinedState } from 'redux';

import { LoginSchema } from '@/features/AuthByUsername';
import { CounterSchema } from '@/entities/Counter';
import { IProfileSchema } from '@/entities/Profile';
import { UserSchema } from '@/entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  loginForm?: LoginSchema;
  profile?: IProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
  add: (key: StateSchemaKey, reducer: Reducer) => void,
  remove: (key: StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
  reducerManager?: ReducerManager;
}

interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
