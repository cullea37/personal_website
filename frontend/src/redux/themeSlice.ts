import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'light' },
  reducers: {
    setLightMode: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.mode = 'light';
    },
    setDarkMode: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.mode = 'dark';
    },
  },
});

export const { setLightMode, setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
