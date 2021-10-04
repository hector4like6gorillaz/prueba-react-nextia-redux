import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CookiesSlice from "./reduxSlices/CookiesSlice";
import LogInSlice from "./reduxSlices/FormSlice";
import MenuSlice from "./reduxSlices/MenuSlice";

export const store = configureStore({
  reducer: {
    cookies: CookiesSlice,
    login: LogInSlice,
    menu: MenuSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
