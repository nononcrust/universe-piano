import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User = {
  id: number;
  nickname: string;
  email: string;
  profileImage: string;
};

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
