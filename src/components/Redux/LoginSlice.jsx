import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'username', 
  password: '123', 
};

const LoginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { setCredentials } = LoginSlice.actions;
export default LoginSlice.reducer;
