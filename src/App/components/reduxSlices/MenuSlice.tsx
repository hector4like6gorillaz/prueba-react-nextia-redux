import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface MenuState {
  menu: boolean;
}

const initialState: MenuState = {
  menu: false,
};

export const MenuSlice = createSlice({
  name: "Cookies",
  initialState,

  reducers: {
    HandleMenu: (state, action: PayloadAction<boolean>) => {
      state.menu = action.payload;
    },
  },
});
export const Menu = (state: RootState) => state.menu.menu;

export const { HandleMenu } = MenuSlice.actions;

export default MenuSlice.reducer;
