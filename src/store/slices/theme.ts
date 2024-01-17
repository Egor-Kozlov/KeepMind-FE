import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {ColorSchemeName} from 'react-native';
import {Appearance} from 'react-native';
interface ThemeState {
  theme: ColorSchemeName;
}

const deviceTheme = Appearance.getColorScheme();

const initialState: ThemeState = {
  theme: deviceTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ColorSchemeName>) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
