import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Header } from "../styles/Model";
import {
  IconDiv,
  LateralMenu,
  LateralMenuBack,
  NavImg,
  NavImgDiv,
  UnlockParagraph,
} from "../styles/styledGlobalComponents";
import { useAppDispatch, useAppSelector } from "../App/components/ReduxHooks";
import { HandleMenu, Menu } from "../App/components/reduxSlices/MenuSlice";
import {
  HandleLogOut,
  selectUser,
} from "../App/components/reduxSlices/CookiesSlice";
import { currentUser } from "../App/models/CurrentUser";

const NavBAr = (props: { logo: string }) => {
  const { logo } = props;

  const menu = useAppSelector(Menu);
  const user: currentUser = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  function disableScroll() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }
  function enableScroll() {
    window.onscroll = null;
  }
  menu ? disableScroll() : enableScroll();
  return (
    <>
      <LateralMenuBack
        display={menu.toString()}
        onClick={() => dispatch(HandleMenu(!menu))} //setMenu(!menu)}
      ></LateralMenuBack>
      <LateralMenu display={menu.toString()}>
        <IconDiv onClick={() => dispatch(HandleMenu(!menu))}>
          <MenuIcon style={{ fontSize: 35, color: "white" }} />
          <NavImgDiv>
            <NavImg src={logo} />
          </NavImgDiv>
          <div></div>
        </IconDiv>

        <UnlockParagraph>Bienvenido {user.member.name}</UnlockParagraph>
        <UnlockParagraph
          margin={"true"}
          cursor={"true"}
          onClick={()=>dispatch(HandleLogOut())}
        >
          Cerrar sesion
        </UnlockParagraph>
      </LateralMenu>
      <Header>
        <IconDiv onClick={() => dispatch(HandleMenu(!menu))}>
          <MenuIcon style={{ fontSize: 35, color: "white" }} />
        </IconDiv>
        <NavImgDiv>
          <NavImg src={logo} />
        </NavImgDiv>
        <IconDiv></IconDiv>
      </Header>
    </>
  );
};

export default NavBAr;
