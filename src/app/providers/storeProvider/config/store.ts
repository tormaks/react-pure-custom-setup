import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { counterReducer } from '@/entities/Counter';
import { StateSchema } from './stateSchema';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer: rootReducer,
  devTools: __IS_DEV__,
  preloadedState: initialState,
});

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
