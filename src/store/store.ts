import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './slices/theme';
import userSlice from './slices/user';

export const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
