import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { loginReducer } from '@/features/AuthByUsername';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { StateSchema } from './stateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
