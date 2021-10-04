import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface initLog {
  user: { email: string; password: string };
}
export interface initState {
  log: initLog;
  badResponse: boolean;
  disabled: boolean;
  disp: boolean;
  hover: boolean;
  label: string;
  height: number;
}

const initialState: initState = {
  log: { user: { email: "", password: "" } },
  badResponse: false,
  disabled: true,
  disp: false,
  hover: false,
  label: "",
  height: window.screen.availHeight,
};

export const LogInSlice = createSlice({
  name: "Formlogin",
  initialState,

  reducers: {
    HandleEmail: (state, action: PayloadAction<string>) => {
      state.log.user.email = action.payload;
    },
    HandlePassword: (state, action: PayloadAction<string>) => {
      state.log.user.password = action.payload;
    },
    HandleDisabled: (state, action: PayloadAction<boolean>) => {
      state.disabled = action.payload;
    },
    HandleLabel: (state, action: PayloadAction<string>) => {
      state.label = action.payload;
    },
    HandleBadResponse: (state, action: PayloadAction<boolean>) => {
      state.badResponse = action.payload;
    },
    HandleHover: (state, action: PayloadAction<boolean>) => {
      state.hover = action.payload;
    },
    HandleHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    HandleDisplay: (state, action: PayloadAction<boolean>) => {
      state.disp = action.payload;
    },
  },
});
export const Email = (state: RootState) => state.login.log.user.email;
export const Password = (state: RootState) => state.login.log.user.password;
export const UserLogin = (state: RootState) => state.login.log;
export const Disabled = (state: RootState) => state.login.disabled;
export const Label = (state: RootState) => state.login.label;
export const BadResponse = (state: RootState) => state.login.badResponse;
export const Hover = (state: RootState) => state.login.hover;
export const Height = (state: RootState) => state.login.height;
export const Disp = (state: RootState) => state.login.disp;
//export const selectEnabled = (state: RootState) => state.login.enabled;
export const {
  HandleEmail,
  HandlePassword,
  HandleDisabled,
  HandleLabel,
  HandleBadResponse,
  HandleHover,
  HandleHeight,
  HandleDisplay,
} = LogInSlice.actions;

export default LogInSlice.reducer;
