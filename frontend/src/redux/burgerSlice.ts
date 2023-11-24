import { createSlice } from '@reduxjs/toolkit';

const burgerSlice = createSlice({
  name: 'burgerMenu',
  initialState: { toggled: false },
  reducers: {
    toggleBurgerMenu: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.toggled = !state.toggled;
    },
  },
});

export const { toggleBurgerMenu } = burgerSlice.actions;

export default burgerSlice.reducer;
