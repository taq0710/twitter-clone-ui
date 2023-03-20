import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ILogin} from "interfaces";
import { UserResponse } from "./interface";

interface LoginState {
  info: UserResponse;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoading: false,
  error: "",
  isLoggedIn: false,
  info: {
    _id: "",
    firstName: "",
    lastName: "",
    avatar: "",
    role: "user",
    status: "inactive",
    createdAt: new Date(),
    updatedAt: new Date(),
    token: ""
  },
};
const token = localStorage.getItem("token")

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginHome: (state, action: PayloadAction<ILogin>) => {
      state.isLoading = true;
    },
    loginHomeSuccess: (state, action: PayloadAction<UserResponse>) => {
      state.isLoading = false;
      state.error = "";
      state.isLoggedIn = true;
      state.info = action.payload;
    },
    loginHomeFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    logoutPage:(state, action: PayloadAction)=>{
      state.isLoading = false;
      state.error = "";
      state.isLoggedIn = false;
      state.info = {
        _id: "",
        firstName: "",
        lastName: "",
        avatar: "",
        role: "user",
        status: "inactive",
        createdAt: new Date(),
        updatedAt: new Date(),
        token: ""
      };
    },
    
  },
});

export const {
  loginHome,
  loginHomeSuccess,
  loginHomeFailure,
  logoutPage,
} = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsLoading = (state: RootState) => state.login.isLoading;
export const selectError = (state: RootState) => state.login.error;
export const selectAgentInfor = (state: RootState) => state.login.info;
export const selectIsLoggedIn = (state: RootState) => state.login.isLoggedIn;

export default loginSlice.reducer;
