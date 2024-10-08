
import type { PayloadAction } from "@reduxjs/toolkit";
import { login, LoginPayload, register, RegisterPayload } from "../services/authApi";
import { createAppSlice } from "redux/createAppSlice";


export interface AuthSliceState {
  isAuthenticated: boolean;
  user: any; // Adjust the type as necessary
};

const initialState: AuthSliceState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: (create) => ({
    registerAsync: create.asyncThunk(
      async (registerPayload: RegisterPayload) => {
        const response = await register(registerPayload);
        return response;
      }
    ),
    loginAsync: create.asyncThunk(
      async (loginPayload: LoginPayload) => {
        const response = await login(loginPayload);
        return response;
      }
    )
  }),
  extraReducers: (builder) => {
    // Add cases for handling async actions like registerAsync and loginAsync here
  },
  selectors: {
    selectIsAuthenticated: (auth) => auth.isAuthenticated,
    selectUser: (auth) => auth.user,
  }
});
