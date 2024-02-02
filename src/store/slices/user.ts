import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  avatarUrl: string;
  email: string;
  name: string;
}

const initialState: UserState = {
  avatarUrl: '',
  email: '',
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserGoogle: (state, action: PayloadAction<UserState>) => {
      state.avatarUrl = action.payload.avatarUrl;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});

export const {setUserGoogle} = userSlice.actions;
export default userSlice.reducer;
