import {
  AnyAction, configureStore, ReducersMapObject, Reducer, DeepPartial,
} from '@reduxjs/toolkit';

import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { ReduxStoreWithManager, StateSchema } from './stateSchema';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store: ReduxStoreWithManager = configureStore<StateSchema>({
    reducer: reducerManager.reduce as Reducer<StateSchema, AnyAction> | ReducersMapObject<StateSchema, AnyAction>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  store.reducerManager = reducerManager;

  return store;
};
