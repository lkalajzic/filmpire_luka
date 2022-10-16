import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: ""
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {

    }
  }
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

export const userSelector = () => 