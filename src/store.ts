// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
