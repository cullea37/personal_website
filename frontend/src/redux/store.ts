import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import burgerReducer from './burgerSlice';

export interface RootState {
  theme: {
    mode: string;
  };
  burger: {
    toggled: boolean;
  };
}

const store = configureStore({
  reducer: {
    theme: themeReducer,
    burger: burgerReducer,
  },
});

export default store;
