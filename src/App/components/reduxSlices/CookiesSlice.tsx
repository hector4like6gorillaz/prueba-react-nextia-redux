import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Cookies from "js-cookie";

const projectName = "prueba";

const coockiesNames = {
  darkMode: `${projectName}Mode`,
  token: `${projectName}Token`,
  currentUser: `${projectName}User`,
};

export interface CookieState {
  darkMode: boolean;
  token: string;
  User: any | undefined;
}

function createDarkModeCookie(): boolean {
  Cookies.set(coockiesNames.darkMode, `${false}`, { sameSite: "strict" });
  return false;
}


function initCookies(type: string): any {
  switch (type) {
    case coockiesNames.darkMode:
      return Cookies.get(coockiesNames.darkMode)
        ? Cookies.get(coockiesNames.darkMode)?.toString() === "true"
          ? true
          : false
        : createDarkModeCookie();
    case coockiesNames.currentUser:
      return Cookies.get(coockiesNames.currentUser)
        ? JSON.parse(Cookies.get(coockiesNames.currentUser) || "{'no':'vacio'}")
        : undefined;
    case coockiesNames.token:
      return Cookies.get(coockiesNames.token)
        ? Cookies.get(coockiesNames.token)
        : "";

    default:
      break;
  }
}

const initialState: CookieState = {
  darkMode: initCookies(coockiesNames.darkMode),
  token: initCookies(coockiesNames.token),
  User: initCookies(coockiesNames.currentUser),
};

export const CookiesSlice = createSlice({
  name: "Cookies",
  initialState,

  reducers: {
    HandleMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      Cookies.set(coockiesNames.darkMode, `${action.payload}`);
    },
    HandleCurrentUser: (state, action: PayloadAction<string>) => {
      state.User = action.payload;
      Cookies.set(coockiesNames.currentUser, action.payload);
    },
    HandleToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      Cookies.set(coockiesNames.token, `${action.payload}`);
    },
    HandleLogOut: () => {
      Cookies.remove(coockiesNames.token);
      Cookies.remove(coockiesNames.currentUser);
    },
  },
});
export const selectMode = (state: RootState) => state.cookies.darkMode;
export const selectToken = (state: RootState) => state.cookies.token;
export const selectUser = (state: RootState) => state.cookies.User;
export const { HandleMode, HandleCurrentUser, HandleLogOut, HandleToken } =
  CookiesSlice.actions;

export default CookiesSlice.reducer;
