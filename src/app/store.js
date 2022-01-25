import { configureStore } from '@reduxjs/toolkit';
import resultReducer from '../features/resultSlice';

export const store = configureStore({
  reducer: {
    weather: resultReducer,
  },
})
